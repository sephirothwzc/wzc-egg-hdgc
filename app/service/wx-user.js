'use strict';
const _ = require('lodash');
const sequelize = require('sequelize');

const Service = require('egg').Service;

class WxUserService extends Service {
  async userLogin() {
    const { ctx } = this;
    const userInfo = ctx.request.body;
    return ctx.model.WxUser.findOne({
      where: {
        openid: userInfo.openid,
      },
    });
  }

  /**
   * 根据微信登录以及用户userinfo信息更新用户资料
   *
   * @param {*} codeSession
   * @param {*} userInfo
   * @memberof WxUserService
   */
  async upsert(codeSession, userInfo) {
    const wxu = {
      openid: codeSession.openid,
      sessionKey: codeSession.session_key,
      unionid: codeSession.unionid,
      nickName: userInfo.nickName,
      avatarUrl: userInfo.avatarUrl,
      gender: userInfo.gender,
      country: userInfo.country,
      province: userInfo.province,
    };
    const { ctx } = this;
    let wxuser = await ctx.model.WxUser.findOne({
      where: {
        openid: codeSession.openid,
      },
    });
    if (wxuser) {
      await wxuser.update(wxu);
      const allIntegral = await ctx.model.WxUserIntegral.findAll({
        attributes: [
          [ 'integral_type', 'integralType' ],
          [ sequelize.fn('sum', sequelize.col('integral')), 'integral' ],
        ],
        where: {
          userId: wxuser.id,
        },
        group: 'integral_type',
      });
      const data = wxuser.get();
      data.newIs = false;
      data.integralKDS = {
        integralType: 'KDS',
        integral: _.get(
          _.find(allIntegral, p => {
            return p.integralType === 'KDS';
          }),
          'integral',
          0
        ),
      };
      data.integralJIC = {
        integralType: 'JIC',
        integral: _.get(
          _.find(allIntegral, p => {
            return p.integralType === 'JIC';
          }),
          'integral',
          0
        ),
      };
      return data;
    }
    // 新用户
    const tempwxuser = await ctx.model.WxUser.create(wxu);
    wxuser = tempwxuser.get();
    // 新用户积分发放
    const kds = ctx.model.WxUserIntegral.create({
      userId: wxuser.id,
      integralType: 'KDS',
      integral: 200,
      integralTime: new Date(),
      notes: 'new',
    });
    const jic = ctx.model.WxUserIntegral.create({
      userId: wxuser.id,
      integralType: 'JIC',
      integral: 200,
      integralTime: new Date(),
      notes: 'new',
    });
    const resall = await Promise.all([ kds, jic ]);
    wxuser.integralKDS = resall[0];
    wxuser.integralJIC = resall[1];
    wxuser.newIs = true;
    return wxuser;
  }
}

module.exports = WxUserService;

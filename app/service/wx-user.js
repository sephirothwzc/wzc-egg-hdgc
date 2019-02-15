'use strict';
// const _ = require('lodash');

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
    const wxuser = await ctx.model.WxUser.findOne({
      where: {
        openid: codeSession.openid,
      },
    });
    if (wxuser) {
      wxuser.update(wxu);
      return wxuser;
    }
    return ctx.model.WxUser.create(wxu);
  }
}

module.exports = WxUserService;

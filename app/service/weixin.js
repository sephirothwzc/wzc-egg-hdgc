/*
 * @Author: 吴占超
 * @Date: 2019-02-15 09:53:23
 * @Last Modified by: 吴占超
 * @Last Modified time: 2019-02-15 10:26:44
 */
'use strict';

const Service = require('egg').Service;

class WeixinService extends Service {
  async jscode2session() {
    const { ctx } = this;
    const refUtl = `https://api.weixin.qq.com/sns/jscode2session?appid=${
      this.app.config.weixin.appid
    }&secret=${this.app.config.weixin.appsecret}&js_code=${
      ctx.request.body.code
    }&grant_type=authorization_code`;
    const result = await ctx.curl(refUtl, { dataType: 'json' });
    return ctx.service.wxUser.upsert(result.data, ctx.request.body);
  }
}

module.exports = WeixinService;

'use strict';

const Controller = require('egg').Controller;

class WxUserController extends Controller {
  /**
   * 用户登录后call
   *
   * @memberof WxUserController
   */
  async userLogin() {
    const { ctx } = this;
    ctx.body = await ctx.service.wxUser.userLogin();
  }
}

module.exports = WxUserController;

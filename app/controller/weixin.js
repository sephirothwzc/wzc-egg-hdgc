/*
 * @Author: 吴占超
 * @Date: 2019-02-15 09:50:16
 * @Last Modified by: 吴占超
 * @Last Modified time: 2019-02-15 12:00:24
 */
'use strict';

const Controller = require('egg').Controller;

class WeixinController extends Controller {
  async jscode2session() {
    const { ctx } = this;
    ctx.body = await ctx.service.weixin.jscode2session();
  }
}

module.exports = WeixinController;

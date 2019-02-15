/*
 * @Author: 吴占超
 * @Date: 2019-02-16 00:21:56
 * @Last Modified by: 吴占超
 * @Last Modified time: 2019-02-16 00:22:29
 */
'use strict';

const Controller = require('egg').Controller;

class WxUserIntegralController extends Controller {
  async changeIntegral() {
    const { ctx } = this;
    ctx.body = true;
  }
}

module.exports = WxUserIntegralController;

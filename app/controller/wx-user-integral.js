/*
 * @Author: 吴占超
 * @Date: 2019-02-16 00:21:56
 * @Last Modified by: 吴占超
 * @Last Modified time: 2019-02-16 10:46:49
 */
'use strict';

const Controller = require('egg').Controller;

class WxUserIntegralController extends Controller {
  /**
   * 提交积分兑换数据
   *
   * @memberof WxUserIntegralController
   */
  async changeIntegral() {
    const { ctx } = this;
    ctx.body = ctx.service.wxUserIntegral.changeIntegral();
  }
}

module.exports = WxUserIntegralController;

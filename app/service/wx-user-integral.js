/*
 * @Author: 吴占超
 * @Date: 2019-02-16 10:47:12
 * @Last Modified by: 吴占超
 * @Last Modified time: 2019-02-16 11:12:54
 */
'use strict';

const Service = require('egg').Service;

class WxUserIntegralService extends Service {
  async changeIntegral() {
    const { ctx } = this;
    const data = ctx.request.body;
    return ctx.model.WxUserIntegral.create({
      integralType: data.changeType,
      integral: -data.number,
      userId: data.userId,
    });
  }
}

module.exports = WxUserIntegralService;

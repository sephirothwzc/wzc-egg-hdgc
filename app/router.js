'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/userLogin', controller.wxUser.userLogin);

  // weixin
  router.post('/weixin/jscode2session', controller.weixin.jscode2session);

  // 积分兑换
  router.post('/change-integral', controller.wxUserIntegral.changeIntegral);
};

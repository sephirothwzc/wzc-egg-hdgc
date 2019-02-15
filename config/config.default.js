'use strict';

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1550142375604_3903';

  // add your config here
  config.middleware = [];

  // mysql
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'egg-sequelize-doc-default',
  };

  // cluster
  config.cluster = {
    listen: {
      path: '',
      port: 8090,
      hostname: '192.168.1.102',
    },
  };

  // 关闭csrf
  config.security = {
    csrf: {
      enable: false,
      headerName: 'xcsrftoken',
    },
  };
  return config;
};

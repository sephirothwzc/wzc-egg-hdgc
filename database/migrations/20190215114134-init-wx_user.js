'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    const { BIGINT, INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable(
      'wx_user',
      {
        id: { type: BIGINT, primaryKey: true, comment: 'key' },
        // 编号
        code: STRING(30),
        created_at: DATE,
        updated_at: DATE,
        deleted_at: DATE,
        // 用户名
        user_name: STRING(50),
        // 用户编码
        user_code: STRING(50),
        // openid
        openid: STRING(50),
        // session_key
        session_key: STRING(100),
        unionid: STRING(100),
        nick_name: STRING(100),
        // 0	未知1	男性2	女性
        gender: INTEGER,
        country: STRING(20),
        province: STRING(20),
        avatar_url: STRING(2000),
        // 积分
        integral: INTEGER,
        // WX
        wx_auth: STRING(200),
        // 最后登录时间
        login_time: DATE,
        // token 最后发放的token
        login_token: STRING(200),
        // 状态 0 停用
        state: INTEGER,
        // 备注
        remark: STRING(200),
      },
      {
        comment: '微信用户表',
      }
    );
  },

  down: async queryInterface => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.dropTable('sys_user');
  },
};

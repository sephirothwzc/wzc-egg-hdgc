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
      'wx_user_integral',
      {
        id: { type: BIGINT, primaryKey: true, comment: 'key' },
        // 编号
        code: STRING(30),
        created_at: DATE,
        updated_at: DATE,
        deleted_at: DATE,
        // 用户名
        user_id: BIGINT,
        // 积分类型
        integral_type: STRING(50),
        // 积分
        integral: INTEGER,
        // 积分产生时间
        integral_time: DATE,
        // 最后登录时间
        notes: STRING(500),
        // 备注
        remark: STRING(200)
      },
      {
        comment: '微信用户积分表'
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.dropTable('wx_user_integral');
  }
};

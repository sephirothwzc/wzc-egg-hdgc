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
        parent_id: BIGINT,
        // 用户名
        user_id: BIGINT,
        // 积分类型
        integral_type: STRING(50),
        // 积分
        integral: INTEGER,
        // 积分产生时间
        integral_time: DATE,
        // 备注
        notes: STRING(500),
        // 备注
        remark: STRING(200),
        // 兑换人
        send_user_id: BIGINT,
        // 兑换类型
        send_integral_type: STRING(50),
        // 兑换积分
        send_integral: INTEGER,
      },
      {
        comment: '微信用户积分表',
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
    await queryInterface.dropTable('wx_user_integral');
  },
};

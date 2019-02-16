'use strict';
const snowflake = require('snowflake-nodejs');
snowflake.init();

module.exports = app => {
  const { BIGINT, STRING, DATE, INTEGER } = app.Sequelize;

  const WxUserIntegralDo = app.model.define(
    'wxUserIntegral',
    {
      id: {
        type: BIGINT,
        primaryKey: true,
        defaultValue: () => snowflake.nextId(1, 2),
      },
      //
      code: { type: STRING(30), field: 'code' },
      //
      createdAt: { type: DATE, field: 'created_at' },
      //
      updatedAt: { type: DATE, field: 'updated_at' },
      //
      deletedAt: { type: DATE, field: 'deleted_at' },
      //
      parentId: { type: BIGINT, field: 'parent_id' },
      //
      userId: { type: BIGINT, field: 'user_id' },
      //
      integralType: { type: STRING(50), field: 'integral_type' },
      //
      integral: { type: INTEGER, field: 'integral' },
      //
      integralTime: { type: DATE, field: 'integral_time' },
      //
      notes: { type: STRING(500), field: 'notes' },
      //
      remark: { type: STRING(200), field: 'remark' },
      //
      sendUserId: { type: BIGINT, field: 'send_user_id' },
      //
      sendIntegralType: { type: STRING(50), field: 'send_integral_type' },
      //
      sendIntegral: { type: INTEGER, field: 'send_integral' },
    },
    {
      timestamps: true,
      freezeTableName: true,
      tableName: 'wx_user_integral',
      underscored: true,
      underscoredAll: true,
      paranoid: true,
      // createdAt: '',
      // updatedAt: '',
      // deletedAt: 'undefined',
    }
  );

  WxUserIntegralDo.attributes = [
    'id',
    'code',
    [ 'parent_id', 'parentId' ],
    [ 'user_id', 'userId' ],
    [ 'integral_type', 'integralType' ],
    'integral',
    [ 'integral_time', 'integralTime' ],
    'notes',
    'remark',
    [ 'send_user_id', 'sendUserId' ],
    [ 'send_integral_type', 'sendIntegralType' ],
    [ 'send_integral', 'sendIntegral' ],
  ];

  return WxUserIntegralDo;
};

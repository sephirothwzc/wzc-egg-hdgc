'use strict';
const snowflake = require('snowflake-nodejs');
snowflake.init();

module.exports = app => {
  const { BIGINT, STRING, DATE, INTEGER } = app.Sequelize;

  const WxUserDo = app.model.define(
    'wxUser',
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
      userName: { type: STRING(50), field: 'user_name' },
      //
      userCode: { type: STRING(50), field: 'user_code' },
      //
      openid: { type: STRING(50), field: 'openid' },
      //
      sessionKey: { type: STRING(100), field: 'session_key' },
      //
      unionid: { type: STRING(100), field: 'unionid' },
      //
      nickName: { type: STRING(100), field: 'nick_name' },
      //
      gender: { type: INTEGER, field: 'gender' },
      //
      country: { type: STRING(20), field: 'country' },
      //
      province: { type: STRING(20), field: 'province' },
      //
      avatarUrl: { type: STRING(2000), field: 'avatar_url' },
      //
      integral: { type: INTEGER, field: 'integral' },
      //
      wxAuth: { type: STRING(200), field: 'wx_auth' },
      //
      loginTime: { type: DATE, field: 'login_time' },
      //
      loginToken: { type: STRING(200), field: 'login_token' },
      //
      state: { type: INTEGER, field: 'state' },
      //
      remark: { type: STRING(200), field: 'remark' },
    },
    {
      timestamps: true,
      freezeTableName: true,
      tableName: 'wx_user',
      underscored: true,
      underscoredAll: true,
      paranoid: true,
      // createdAt: '',
      // updatedAt: '',
      // deletedAt: 'undefined',
    }
  );

  WxUserDo.attributes = [
    'id',
    'code',
    [ 'user_name', 'userName' ],
    [ 'user_code', 'userCode' ],
    'openid',
    [ 'session_key', 'sessionKey' ],
    'unionid',
    [ 'nick_name', 'nickName' ],
    'gender',
    'country',
    'province',
    [ 'avatar_url', 'avatarUrl' ],
    'integral',
    [ 'wx_auth', 'wxAuth' ],
    [ 'login_time', 'loginTime' ],
    [ 'login_token', 'loginToken' ],
    'state',
    'remark',
  ];

  return WxUserDo;
};

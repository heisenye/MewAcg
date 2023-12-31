export default {
  UNKNOWN_ERROR: '未知错误',
  NETWORK_ERROR: '网络错误',
  TOO_MANY_REQUESTS: '请求过于频繁',
  TOO_MANY_REQUESTS_RETRY_AFTER: (s) => `请求过于频繁，请${s}秒后重试`,
  NO_TOKEN: '未登录',
  LOGIN_SUCCESS: '登录成功',
  LOGOUT_SUCCESS: '登出成功',
  REGISTER_SUCCESS: '注册成功',
  INCOMPLETE_FORM: '请填写完整的表单',
  DELETE_FAVORITE_SUCCESS: '取消收藏成功',
  ADD_FAVORITE_SUCCESS: '收藏成功',
  ADD_FAVORITE_FAIL: '收藏失败',
  DELETE_FAVORITE_FAIL: '取消收藏失败',
  AVATAR_FORMAT_ERROR: '头像格式错误',
  AVATAR_SIZE_ERROR: '头像体积过大',
  UPLOADING: '上传中',
  UPLOAD_SUCCESS: '上传成功',
  AVATAR_LOAD_FAIL: '头像加载失败',
  UPDATE_COMIC_SUCCESS: '更新漫画成功',
  UPDATE_COMIC_FAIL: '更新漫画失败',
  SET_COMIC_COVER_SUCCESS: '设置漫画封面成功',
  CREATE_COMIC_CHAPTER_SUCCESS: '创建漫画章节成功',
  REACHED_LAST_WATCHED_POSITION: '已到达上次观看位置',
}

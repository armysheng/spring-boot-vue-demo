// 线上配置
let CONFIG
// if (process.env.NODE_ENV === 'development') {
if (process.env.NODE_ENV === 'production') {
  CONFIG = {
    url: 'http://localhost:8081',
  }
} else {
  CONFIG = {
    url: 'http://localhost:8081',
  }
}

// 接口API根地址
const url = CONFIG.url
// 定义一些API路径常量
module.exports = {
  /**
   * 通用状态码
   * */

  SYS_ERR: 'SYS_ERR', // api请求系统错误
  /**
   * 用户、登录相关
   * */
  MY_INFO_ID: MY_INFO_ID,
  MY: MY,
  EMAIL: EMAIL,
  // 登录
  login: `${url}/api/login`,
  doLogin: `${url}/api/do_login`,
  // 获取我的信息
  getMyInfo: `${url}/api/user/${MY_INFO_ID}`,
  // post 为了安全起见
  getMyInfoWithOriginal: `${url}/api/user/original/${MY_INFO_ID}`,
  postMyInfo: `${url}/api/user`,
  changePassword: `${url}/api/change_password`,
  imgUpload: `${url}/api/imgupload`,
  imgResource: `${url}/uploads/`,

  /**
   * 文章相关
   * */
  // 获取最新的十条文章
  ArticleFrom: '0',
  ArticleNum: '10',
  newUpdateArticle: `${url}/api/articles/from_to`,
  // 由文章id获取文章详情
  getArticleById: `${url}/api/article/id`,
  // 获取文章历史记录
  getArticleHistoryWithStructure: `${url}/api/article_history`,
  // 获取文章列表
  getArticleList: `${url}/api/articles`,
  // 由文章id获取文章详情(原始markdown版本)
  getRawArticleById: `${url}/api/article/raw/id`,
  // 新增(如果传入的_id不存在的电话)-修改文章,并且确定文章列表概要的文字长度和概要图片
  postArt: `${url}/api/article`,
  // delete 文章
  deleteArt: `${url}/api/article/id`,
  // get 获得文章最新num条+阅读最多Num条+引用次数最多的num条，用于文章详情的
  getArticleTop: `${url}/api/article_top/num`,

}

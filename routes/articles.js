const Router = require("express").Router();
const {articleList} = require('../controller/articleController');
Router.get('/articles', articleList);
module.exports = Router;


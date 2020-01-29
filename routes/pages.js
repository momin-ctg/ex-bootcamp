const Router = require("express").Router();
const {contactPage, servicePage} = require('../controller/pageController');

Router.get('pages/contact', contactPage);
Router.get('pages.services', servicePage);

module.exports = Router;

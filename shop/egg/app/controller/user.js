'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async get() {
    const { ctx } = this;
    ctx.body = 'uesr页面';
  }
}

module.exports = HomeController;

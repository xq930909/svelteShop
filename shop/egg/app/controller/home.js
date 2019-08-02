
'use strict';
const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    console.log(this);
    this.ctx.body = await this.service.home.index();
  }
  async getUser() {
    this.ctx.body = await this.service.home.getUser();
  }
  async geteve() {
    this.ctx.body = await this.service.home.geteve();
  }
  async gettab() {
    this.ctx.body = await this.service.home.gettab();
  }

  async getchild() {
    this.ctx.body = await this.service.home.getchild();
  }

  async getchilds() {
    this.ctx.body = await this.service.home.getchilds();
  }

  async getzh() {
    this.ctx.body = await this.service.home.getzh();
  }

  async getmapAdd() {
    this.ctx.body = await this.service.home.getmapAdd();
  }
}
module.exports = HomeController;

// 'use strict';

// const Controller = require('egg').Controller;

// class HomeController extends Controller {
//   async index() {
//     const { ctx } = this;
//     ctx.body = '<a href="http://127.0.0.1:7001/user">去user</a>';
//   }
// }

// module.exports = HomeController;

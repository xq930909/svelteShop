
'use strict';

const Service = require('egg').Service;
const users = require('../data/data.json');
const eve = require('../data/eve.json');
const tab = require('../data/tab.json');
const child = require('../data/child.json');
const childs = require('../data/childs.json');
const zh = require('../data/zh.json');

class HomeService extends Service {
  async index() {
    return '<a href="http://127.0.0.1:7001/user">获取数据</a>';
  }

  async getUser() {
    return users;
  }

  async geteve() {
    return eve;
  }

  async gettab() {
    return tab;
  }

  async getchild() {
    return child;
  }

  async getchilds() {
    return childs;
  }

  async getzh() {
    return zh;
  }
  async getmapAdd() {
    child.unshift({ id: 5, title: '新添加的数据' });
    return child;
  }
}

module.exports = HomeService;

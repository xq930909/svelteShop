'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user', controller.home.getUser);
  router.get('/eve', controller.home.geteve);
  router.get('/tab', controller.home.gettab);
  router.get('/child', controller.home.getchild);
  router.get('/childs', controller.home.getchilds);
  router.get('/zh', controller.home.getzh);
  router.get('/mapAdd', controller.home.getmapAdd);
};

'use strict';

const uuid = require('uuid');

const logger = require('../utils/logger');
const weblistCollection = require('../models/weblist-store.js');
const weblistStore = require('../models/weblist-store');

const dashboard = {
  
index(request, response) {
  logger.info('dashboard rendering');
  const viewData = {
    title: 'Webmark Dashboard',
    weblists: weblistStore.getAllWeblists(),
  };
  logger.info('about to render', weblistStore.getAllWeblists());
  response.render('dashboard', viewData);
},
  
  deleteWebList(request, response) {
    
    const weblistId = request.params.id;
    logger.debug(`Deleting Weblist ${weblistId}`);
    weblistStore.removeSource(weblistId);
    response.redirect('/dashboard');
  },
  
  addSource(request, response) {
    
    const newWeblist = {
      id: uuid(),
      title: request.body.title,
      sites: [],
    };
    logger.debug('Create new Weblist', newWeblist);
    weblistStore.addSource(newWeblist);
    response.redirect('/dashboard');
  },
  
 
  
};

module.exports = dashboard;

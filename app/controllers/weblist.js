'use strict';

const uuid = require('uuid');

const logger = require('../utils/logger');
const weblistStore = require('../models/weblist-store');

const weblist = {
  
  index(request, response) {
    const weblistId = request.params.id;
    logger.debug('Weblist id = ', weblistId);
    const viewData = {
      title:'Weblist',
      weblist: weblistStore.getWeblist(weblistId),
    };
    response.render('weblist', viewData);
  },
  
    deleteSite(request, response) {
      
    const weblistId = request.params.id;
    const siteId = request.params.siteid;
    logger.debug(`Deleting Site ${siteId} from Weblist ${weblistId}`);
    weblistStore.removeSite(weblistId, siteId);
    response.redirect('/weblist/' + weblistId);
  },
  
   addSite(request, response) {
     
    const weblistId = request.params.id;
    const weblist = weblistStore.getWeblist(weblistId);
    const newSite = {
      id: uuid(),
      title: request.body.title,
      url: request.body.url,
    };
    logger.debug('Create new Site', newSite);
    weblistStore.addSite(weblistId, newSite);
    response.redirect('/weblist/' + weblistId);
  },
  
};


module.exports = weblist;
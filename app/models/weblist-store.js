'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');

const weblistStore = {

  store: new JsonStore('./models/weblist-store.json', { weblistCollection: [] }),
  collection: 'weblistCollection',

  getAllWeblists() {
    return this.store.findAll(this.collection);
  },

  getWeblist(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  addSource(weblist) {
    this.store.add(this.collection, weblist);
  },

  removeSource(id) {
    const weblist = this.getWeblist(id);
    this.store.remove(this.collection, weblist);
  },

  removeAllWeblists() {
    this.store.removeAll(this.collection);
  },

  addSite(id, site) {
    const weblist = this.getWeblist(id);
    weblist.sites.push(site);
  },

  removeSite(id, siteId) {
    const weblist = this.getWeblist(id);
    const sites = weblist.sites;
    _.remove(sites, { id: siteId});
  },
};

module.exports = weblistStore;

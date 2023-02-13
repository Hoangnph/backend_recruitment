'use strict';

/**
 * valentine service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::valentine.valentine');

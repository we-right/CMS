'use strict';

/**
 * article-classification service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::article-classification.article-classification');

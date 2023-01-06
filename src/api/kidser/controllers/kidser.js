'use strict';

/**
 * kidser controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::kidser.kidser', ({ strapi }) => ({
  async updateKidserRegionAction(ctx) {
    try {
      const result = strapi.db.query('api::kidser.kidser').updateMany({
        where: {
          region: {
            $null: true,
          },
        },
        data: {
          region: 1,
        },
      });
      ctx.body = result;
    } catch (err) {
      ctx.body = err;
    }
  },
}));

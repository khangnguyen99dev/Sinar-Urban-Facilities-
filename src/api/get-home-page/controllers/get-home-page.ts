export default {
  async getHomePage(ctx) {
    try {
      const companyInfo = await strapi.query('api::company-info.company-info').findOne();

      ctx.body = {
        companyInfo,
      };
    } catch (err) {
      ctx.body = {
        error: 'An error occurred while fetching the summary data',
        details: err instanceof Error ? err.message : 'Unknown error',
      };
      ctx.status = 500; // Set the HTTP status code to 500 to indicate a server error
    }
  },
};
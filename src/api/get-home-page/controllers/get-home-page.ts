export default {
  async getHomePage(ctx) {
    try {
      const companyInfo = await strapi.query('api::company-info.company-info').findOne({
        where: { published_at: { $not: null } }
      });

      const about = await strapi.query('api::about-us.about-us').findOne({
        where: { published_at: { $not: null } }
      });

      const team = await strapi.query('api::team.team').findMany({
        where: { is_show_home: true, published_at: { $not: null } }, limit: 4
      });

      const impressiveCaseStudies = await strapi.query('api::impressive-case-study.impressive-case-study').findMany({
        where: { published_at: { $not: null } }
      });

      const services = await strapi.query('api::service.service').findMany({
        where: { published_at: { $not: null } }, limit: 5, populate: ['service_detail'],
      });

      const blogs = await strapi.query('api::blog.blog').findMany({
        where: { is_show_home: true, published_at: { $not: null } }, limit: 3
      });

      ctx.body = {
        companyInfo,
        services,
        about,
        team,
        impressiveCaseStudies,
        blogs,
      };
    } catch (err) {
      ctx.body = {
        error: 'An error occurred while fetching the summary data',
        details: err instanceof Error ? err.message : 'Unknown error',
      };
      ctx.status = 500; 
    }
  },
};
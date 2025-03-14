export default {
  async getHomePage(ctx) {
    try {
      const companyInfo = await strapi.query('api::company-info.company-info').findOne({
        where: { published_at: { $not: null } },
      });

      const about = await strapi.query('api::about-us.about-us').findOne({
        where: { published_at: { $not: null } },
        populate: { 
          "image": true,
          "founder_image": true,
          "thumbnail_video": true,
          "*": true
         },
         orderBy: {
          createdAt: 'desc'
         }
      });

      const team = await strapi.query('api::team.team').findMany({
        where: { is_show_home: true, published_at: { $not: null } },
        limit: 4,
        populate: {
          "avatar": true,
          "services": {
            populate: {
              "icon": true,
              "image": true,
              "service_detail": true
            }
          }
        }
      });

      const portfolio = await strapi.query('api::portfolio.portfolio').findMany({
        where: { is_show_home: true, published_at: { $not: null } },
        limit: 6,
        populate: {
          "image": true,
          "sub_image_1": true,
          "sub_image_2": true,
          "sub_image_3": true,
          "sub_image_4": true
        }
      });

      const services = await strapi.query('api::service.service').findMany({
        where: { published_at: { $not: null } },
        limit: 5,
        populate: {
          "icon": true,
          "image": true,
          "service_detail": {
            populate: ["service_qualities", "service_questions"]
          }
        }
      });

      const blogs = await strapi.query('api::blog.blog').findMany({
        where: { is_show_home: true, published_at: { $not: null } },
        limit: 3,
        populate: {
          "image": true
        }
      });

      const pricingOptions = await strapi.query('api::pricing-option.pricing-option').findMany({
        where: { published_at: { $not: null } },
        limit: 3,
        populate: {
          "pricing_plans": true
        }
      });

      const testimonials = await strapi.query('api::testimonial.testimonial').findMany({
        where: { published_at: { $not: null } },
        limit: 6,
        populate: {
          "avatar": true
        }
      });

      const pricingPlans = await strapi.query('api::pricing-plan.pricing-plan').findMany({
        where: { published_at: { $not: null } },
        populate: {
          "pricing_options": true
        }
      });

      ctx.body ={ data: {
        companyInfo,
        services,
        about,
        team,
        portfolio,
        blogs,
        pricingOptions,
        testimonials,
        pricingPlans
      }};

    } catch (err) {
      ctx.body = {
        error: 'An error occurred while fetching the summary data',
        details: err instanceof Error ? err.message : 'Unknown error',
      };
      ctx.status = 500;
    }
  },
};
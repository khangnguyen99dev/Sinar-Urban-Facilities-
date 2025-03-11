export default {
  routes: [
    {
     method: 'GET',
     path: '/get-home-page',
     handler: 'get-home-page.getHomePage',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};

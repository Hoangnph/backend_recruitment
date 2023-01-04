module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/votes-report',
     handler: 'votes-report.votesReport',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};

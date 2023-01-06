module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: 'POST',
      path: '/kidsers/update-kidser-region', 
      handler: 'kidser.updateKidserRegionAction',
    }
  ]
}

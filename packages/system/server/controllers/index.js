'use strict';

var mean = require('meanio');
var apiKeys = require('./apiKeys');
var NYTDistricts = require('nytdistricts');
var nytdistricts = var nytAPIkey
var nytAPIkey = apiKeys.nytAPIkey;
var nytdistricts = new NYTDistricts(nytAPIkey);

exports.render = function(req, res) {

    var modules = [];
    // Preparing angular modules list with dependencies
    for (var name in mean.modules) {
        modules.push({
            name: name,
            module: 'mean.' + name,
            angularDependencies: mean.modules[name].angularDependencies
        });
    }

    function isAdmin() {
        return req.user && req.user.roles.indexOf('admin') !== -1;
    }

    // Send some basic starting info to the view
    res.render('index', {
        user: req.user ? {
            name: req.user.name,
            _id: req.user._id,
            username: req.user.username,
            roles: req.user.roles
        } : {},
        modules: modules,
        isAdmin: isAdmin,
        adminEnabled: isAdmin() && mean.moduleEnabled('mean-admin')
    });
};

exports.whichDistrict = function(req,res){
    //get the latlong
    var lattitude = req.body.lat;
    var longitude = req.body.long;

    nytdistricts.getCityCouncilDistrict(lattitude,longitude, function(err,data){
      if(err) throw err;
      console.log("my City Council district: ", data)
      res.json(200, data)
    })

}

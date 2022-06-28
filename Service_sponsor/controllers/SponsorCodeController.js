const SponsorCode = require('../models/SponsorCode');

exports.get = function(req, res) {
    SponsorCode.find({}, function(err, results) {
        if(err) res.send(err);
        else  res.send(results);
    })  
};

exports.getId = function(req, res) {
  SponsorCode.findById(req.params.id, function(err, result) {
    if(err) res.send(err)
    else res.send(result);
  })
};

exports.add = function(req, res) {
  const sponsorCode = new SponsorCode()
  sponsorCode.user = req.body.user
  sponsorCode.code = req.body.code
  
  sponsorCode.save(function(err) {
    if(err) res.send(err)
    else res.send(sponsorCode);
  })
};

exports.delete = function(req, res) {
    SponsorCode.findByIdAndDelete(req.params.id, function(err, result) {
      if(err) res.send(err)
      else res.send("Le code a bien été supprimé");
    })
};
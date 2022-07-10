const SponsorCode = require('../models/SponsorCode');

/**
 * @api {get} / Get all the sponsors code
 * @apiName getAll
 * @apiGroup SponsorCode
 * @apiParam {Object} Information of the authentificated user
 * @apiSuccess {Object} results Return a list of sponsor code
 * @apiError err Return the error
 */
// Get all the sponsors code
exports.getAll = function(req, res) {
    SponsorCode.find({}, function(err, results) {
        if(err) res.send(err);
        else  res.send(results);
    })  
};

/**
 * @api {get} / Get sponsor code by ID
 * @apiName get
 * @apiGroup SponsorCode
 * @apiParam {Object} id of the selected sponsor code
 * @apiSuccess {Object} result Return details of the sponsor code
 * @apiError err Return the error
 */
// Get sponsor code by ID
exports.getId = function(req, res) {
  SponsorCode.findById(req.params.id, function(err, result) {
    if(err) res.send(err)
    else res.send(result);
  })
};

/**
 * @api {post} /add Add sponsor code
 * @apiName add
 * @apiGroup SponsorCode
 * @apiParam {Object} Details of the sponsor code and information of the authentificated user
 * @apiSuccess {String} Return "Le code de parrainage a bien été ajouté"
 * @apiError err Return the error
 */
// Add a sponsor code
exports.add = function(req, res) {
  const logged_user = req.auth;
  const sponsorCode = new SponsorCode();
  sponsorCode.user = req.body.user;
  sponsorCode.code = req.body.code;
  sponsorCode.role = req.body.role;
  
    sponsorCode.save()
      .then(() => res.send('Le code de parrainage a bien été ajouté'))
      .catch(err => res.send(err));
  }
;

/**
 * @api {delete} /delete/:id Delete the selected sponsor code
 * @apiName delete
 * @apiGroup SponsorCode
 * @apiParam {Object} id of the selected sponsor code and information of the authentificated user
 * @apiSuccess {String} Return "Le code de parrainage a bien été ajouté"
 * @apiError err Return the error
 */
// Delete a sponsor code
exports.delete = async(req, res) => {
  const logged_user = req.auth;
  const sponsorCode = await SponsorCode.findById(req.params.id);

  if(logged_user.userId != sponsorCode.user) {
    res.send("Vous n'êtes pas autorisé à effectuer cette action");
  } else {
    SponsorCode.findByIdAndDelete(req.params.id, function(err, result) {
      if(err) res.send(err)
      else res.send("Le code a bien été supprimé");
    })
  }
  
};
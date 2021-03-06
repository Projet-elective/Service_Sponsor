const SponsorCode = require('../models/SponsorCode');
const SponsorShip = require('../models/SponsorShip');

/**
 * @api {get} / Get all the sponsorships
 * @apiName getAll
 * @apiGroup Sponsorship
 * @apiParam {Object} Information of the authentificated user
 * @apiSuccess {Object} results Return a list of the sponsorships
 * @apiError err Return the error
 */
 //Get all the sponsorships
exports.getAll = function(req, res) {
    SponsorShip.find({}, function(err, results) {
        if (err) res.send(err);
        else res.send(results);
    });
};

/**
 * @api {get} /get/:id Get sponsorship by ID
 * @apiName get
 * @apiGroup Sponsorship
 * @apiParam {Object} id of the selected sponsorship and information of the authentificated user
 * @apiSuccess {Object} result Return details of the sponsorship
 * @apiError err Return the error
 */
// Get sponsorship by ID
exports.get = function(req, res) {
    const idSponsorship = req.params.id;
    SponsorShip.findById(idSponsorship, function(err, result) {
        if (err) res.send(err);
        else res.send(result);
    })
};

/**
 * @api {post} /add Add sponsorship
 * @apiName add
 * @apiGroup Sponsorship
 * @apiParam {Object} Details of the new sponsorship and information of the authentificated user
 * @apiSuccess {String} Return "Le parrainage a bien été ajouté"
 * @apiError err Return the error
 */
// Add a sponsorship
exports.add = async (req, res) => {
    const logged_user = req.auth;
    const code = req.body.code
    const sponsorCode = await SponsorCode.findOne({code: code})
    const sponsorship = new SponsorShip();
    sponsorship.idCode = sponsorCode._id;
    sponsorship.sponsor = {id: Number(sponsorCode.user), role: sponsorCode.role}
    sponsorship.sponsored = {id: req.body.sponsoredId, role: req.body.sponsoredRole}

        try{
            if(sponsorCode.role == req.body.sponsoredRole ){
            sponsorship.save()
            res.status(201).json({ message: 'Objet enregistré !'})
        }
        }
        catch(err){
            res.send(err)
        }
    }
    
;

/**
 * @api {delete} /delete/:id Delete the selected sponsorship
 * @apiName delete
 * @apiGroup Sponsorship
 * @apiParam {Object} id of the selected sponsorship and information of the authentificated user
 * @apiSuccess {String} Return "Le parrainage a bien été supprimé"
 * @apiError err Return the error
 */
// Delete a sponsorship
exports.delete =  async(req, res) => {
    const logged_user = req.auth;
    const idSponsorship = req.params.id;
    const sponsorship = await SponsorShip.findById(req.params.id);
    
    if(logged_user.userId != sponsorship.sponsored.id) {
        res.send("Vous n'êtes pas autorisé à effectuer cette action");
      } else {
        SponsorShip.findByIdAndDelete(idSponsorship, function(err, result) {
            if (err) res.send(err);
            else res.status(204).send("Le parrainage a bien été supprimé");
        });
      }
};
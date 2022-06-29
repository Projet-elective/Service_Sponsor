const SponsorCode = require('../models/SponsorCode');
const SponsorShip = require('../models/SponsorShip');

exports.get = function(req, res) {
    SponsorShip.find({}, function(err, results) {
        if (err) res.send(err);
        else res.send(results);
    });
};

exports.getId = function(req, res) {
    const idSponsorship = req.params.id;
    SponsorShip.findById(idSponsorship, function(err, result) {
        if (err) res.send(err);
        else res.send(result);
    })
};

exports.add = async (req, res) => {
    const sponsorship = new SponsorShip();
    sponsorship.idCode = req.body.idCode;
    const sponsorCodeRole = await SponsorCode.findById(req.body.idCode)
    sponsorcode.sponsor = sponsorcode.role
    sponsorship.sponsored = req.body.sponsored;
    try{
        if(sponsorCodeRole.role == sponsorship.sponsored.role ){
        sponsorship.save()
                .then(()=>res.status(201).json({ message: 'Objet enregistré !'}))
                .catch(error => res.send(error));
    }else{
        res.send("not the same role")
    }
    }
    catch(err){
        res.send(err)
    }
};

exports.delete = function (req, res) {
    const idSponsorship = req.params.id;
    SponsorShip.findByIdAndDelete(idSponsorship, function(err, result) {
        if (err) res.send(err.message);
        else res.status(204).send("Le menu a bien été supprimé");
    });
};
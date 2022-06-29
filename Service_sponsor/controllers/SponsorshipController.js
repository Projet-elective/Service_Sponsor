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

exports.add = function (req, res) {
    
    const sponsorship = new SponsorShip();
    sponsorship.idCode = req.body.idCode;
    sponsorship.sponsor = req.body.sponsor;
    sponsorship.sponsored = req.body.sponsored;
    
    if(sponsorship.sponsor.role == sponsorship.sponsored.role ){
        sponsorship.save()
                .then(()=>res.status(201).json({ message: 'Objet enregistré !'}))
                .catch(error => res.send(error));
    }else{
        res.send("not the same role")
    }
};

exports.delete = function (req, res) {
    const idSponsorship = req.params.id;
    SponsorShip.findByIdAndDelete(idSponsorship, function(err, result) {
        if (err) res.send(err.message);
        else res.status(204).send("Le menu a bien été supprimé");
    });
};
var fs = require('fs');

module.exports.save = function (req, res) {
    var user = req.body;
    var userName = req.params.userName;

    fs.writeFileSync('app/data/user/' + userName + '.json', JSON.stringify(user));
    res.send(user);
};
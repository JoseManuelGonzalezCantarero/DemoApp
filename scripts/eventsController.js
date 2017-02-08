var fs = require('fs');

module.exports.get = function (req, res) {
    var event = fs.readFileSync('app/data/event/' + req.params.id + '.json', 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.send(event);
};

module.exports.save = function (req, res) {
    var event = req.body;
    var maxId = 0;
    var files = fs.readdirSync('app/data/event/');
    if(files.length >= 1)
    {
        var stringId = files[0].split('.');
        maxId = parseInt(stringId[0]);
        for(var i = 0; i < files.length; i++)
        {
            stringId = files[i].split('.');
            if(parseInt(stringId[0]) > maxId)
            {
                maxId = parseInt(stringId[0]);
            }
        }

        maxId = maxId + 1;
    }
    else
    {
        maxId = 1;
    }

    fs.writeFileSync('app/data/event/' + maxId + '.json', JSON.stringify(event));
    res.send(event);
};
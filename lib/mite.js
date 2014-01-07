var https = require("https");
var options = {
  method: 'GET',
  headers: {
  }
}
var data = undefined, pack = undefined;
var parseString = require('xml2js').parseString;

/**
 * Parse the configuration
 */
function parseConfig(callback) {
  try {
    data = require('../mite-config.json');
    pack = require('../package.json');
    
    callback(data);
  } catch (e) {
    console.log("Uuups. There was an error while trying to load the configuration file:");
    console.log(e);
    console.log("Please make sure, that you have read the README.md file and have a valid mite-config.json with your configured mite. credentials in the project root.")
  }
}

/**
 * Function to do a call against the mite backend. Configuration is used
 * form the package.json
 */
function mitecall(data, config, callback) {
  var thisoptions = options;
  thisoptions.headers['User-Agent'] = pack.name + "/" + pack.version;
  thisoptions["path"] = data.path;
  
  if (data.key == "source") {
    thisoptions["host"] = config.source.host;
    thisoptions.headers["X-MiteApiKey"] = config.source.apikey;
    
    console.log(thisoptions);
    
    var req = https.request(thisoptions, function(res)
    {
        var output = '';
        console.log(thisoptions.host + ':' + res.statusCode);
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
          output += chunk;
        });

        res.on('end', function() {
          parseString(output, function (err, result) {
            callback(JSON.stringify(result));
          });
        });
    });
    
    req.on('error', function(err) {
      console.log(err.message);
        //res.send('error: ' + err.message);
    });

    req.end();
  } else {
    console.log(data.key);
  }
  
}

exports.getProjects = function getProjects(callback) {
  var reqop = {
    key: "source",
    path: "/projects.xml",
  }
  parseConfig(function configPresent(config) {
    mitecall(reqop, config, function(data) {
      console.dir(data);
      });
  });
}
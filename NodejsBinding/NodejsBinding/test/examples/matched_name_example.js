"use strict";

var Api = require("../Api");
var ArgumentParser = require("argparse").ArgumentParser;

var parser = new ArgumentParser({
  addHelp: true,
  description: "Get the similarity score of two names"
});
parser.addArgument(["--key"], {help: "Rosette API key", required: true});
var args = parser.parseArgs();
var api = new Api(args.key);
var endpoint = "matchedName";

var matched_name_data1 = "Michael Jackson";
var matched_name_data2 = "迈克尔·杰克逊";

api.parameters.name1 = {"text": matched_name_data1, "language": "eng", "entityType": "PERSON"};
api.parameters.name2 = {"text": matched_name_data2, "entityType": "PERSON"};

api.rosette(endpoint, function(err, res){
	if(err){
		console.log(err);
	} else {
		console.log(JSON.stringify(res, null, 2));
	}
});
"use strict";

var Api = require("../Api");
var ArgumentParser = require("argparse").ArgumentParser;

var parser = new ArgumentParser({
  addHelp: true,
  description: "Get the complete morphological analysis of a piece of text"
});
parser.addArgument(["--key"], {help: "Rosette API key", required: true});
var args = parser.parseArgs();
var api = new Api(args.key);
var endpoint = "morphology";

var morphology_parts_of_speech_data = "The fact is that the geese just went back to get a rest and I'm not banking on their return soon";
var content = morphology_parts_of_speech_data;

api.parameters.content = content;
api.parameters.morphology = "parts-of-speech";

api.rosette(endpoint, function(err, res){
	if(err){
		console.log(err);
	} else {
		console.log(JSON.stringify(res, null, 2));
	}
});
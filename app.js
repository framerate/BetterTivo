'use strict';
var _ = require('underscore');
var fs = require('fs');

var config = require('./config.json');

require('colors');
var utils = require('./lib/utils');

var dir = config.scanDirectory;
var files = fs.readdirSync(dir);

files = _.reject(files, function(file){
    return file.split('.')[0].length === 0;
});

_.each(files, function(file){
    var info = utils.createInfoObject(file);
    utils.organizeFile(info);
});

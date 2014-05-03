'use strict';
var _ = require('underscore');
var fs = require('fs');

var validShows = require('./config.json').validShows;

// var string = 'The.Big.Bang.Theory.S07E22.HDTV.x264-LOL.torrent';

require('colors');
var utils = require('./lib/utils');

var dir = '/Volumes/Media/_DOWNLOADS/_tvshows/';
var files = fs.readdirSync(dir);

files = _.reject(files, function(file){
    return file.split('.')[0].length === 0;
});

_.each(files, function(file){
    console.log('\nScanning: '.cyan + file.green);
    utils.createInfoObject(file);
});

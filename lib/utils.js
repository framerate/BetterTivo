'use strict';
var validShows = require('../config.json').validShows;
var _ = require('underscore');

function isSeasonAndEpisode(s) {
    if (s[0].toLowerCase() ==='s' && s[3].toLowerCase() === 'e') {
        return true;
    }
    return false;
}

function parseTitle(array, index) {
    // console.log(array);
    var s = '';

    for (var i = 0; i < index; ++i) {
        s = s + array[i] + ' ';
    }

    return s.trim();
}

function createInfoObject(filename) {
    var infoObject = {};
    infoObject.path = filename;
    infoObject.date = null;
    infoObject.show = null;
    infoObject.season = null;
    infoObject.episode = null;

    // console.log('test: ' + filename);
    var parsed = filename.split('.');
    var indexOfSeason = -1;
    _.each(parsed, function(p, i) {
        if (isSeasonAndEpisode(p)) {
            indexOfSeason = i;
        }
    });

    // we need to check this index to see if it's a date
    var checkDate = indexOfSeason - 1;
    var checkTitle = parseTitle(parsed, indexOfSeason);
    // console.log(' >> Checking for: ' + checkTitle);
    if (_.contains(validShows, checkTitle)) {
        console.log('We found a show! '.green + checkTitle);
        infoObject.show = checkTitle;
    }
    else {
        console.log('Invalid Show: '.red + checkTitle);
        checkTitle = parseTitle(parsed, checkDate);
        if (_.contains(validShows, checkTitle)) {
            console.log('Found it on pass 2 '.green + checkTitle);
            infoObject.show = checkTitle;
            // assume the reasoning is a date....
            infoObject.year = parsed[checkDate];
        }
    }

    if (indexOfSeason > 0) {
        var season = parsed[indexOfSeason].substr(1,2);
        var episode = parsed[indexOfSeason].substr(4,2);
        infoObject.season = season;
        infoObject.episode = episode;
    }

    if (infoObject.show === null) {
        infoObject = {};
    }
    console.log(JSON.stringify(infoObject));
}

module.exports = {
    'isSeasonAndEpisode': isSeasonAndEpisode,
    'parseTitle': parseTitle,
    'createInfoObject': createInfoObject
};

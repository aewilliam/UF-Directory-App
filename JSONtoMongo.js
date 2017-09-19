'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./server/config/config.js');

/* Connect to your database */
mongoose.connect(config.db.uri, {useMongoClient: true});

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
fs.readFile('./listings.json', 'utf8', function(err, listing){
  
  console.log("begin file reading");

  if (err){

    throw err;

  } 

  var listings = JSON.parse(listing);

  listings.entries.forEach(function(listing) {

    console.log("Adding listing: " + listing.code);

    var listingModel = new Listing(listing);

    listingModel.save(function(err) {

      if (err){

        throw err;

      }

      console.log("Saved listing: " + listing.code);

    });

  });

  console.log("finish file reading");

});

process.exit();

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */
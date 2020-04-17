var MongoClient = require('mongodb').MongoClient;
//var _ = require('lodash');
//assuming mongodb is running on a local instance on this port.
var MONGO_HOST = "localhost";
var MONGO_PORT = "27017";
var DB_NAME = "reader";
var file_prefix = "records";
var fs = require('fs');
var url = `mongodb://${MONGO_HOST}:${MONGO_PORT}/`;

var filterResults = function filterResults(results) {
    //this is specified apriori.
    let cutOff = Date.parse("January 1 2016");
    res = [];
    for(var i = 0; i < results.length; i++) {

        let trimmedBalance =  results[i]["balance"].replace("$", "");
        let fixedDate = Date.parse(results[i]["registered"]);
        trimmedBalance = trimmedBalance.replace(",", "");
        trimmedBalance = parseInt(trimmedBalance, 10);
        
        if( trimmedBalance > 2000 && fixedDate > cutOff && results[i]["isActive"]) {
            res.push(results[i]);
        }
    }
    return res;
}

async function processRecords(i) {

    var results = [];
    return MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(`${DB_NAME}`);
        dbo.collection(`${file_prefix}${i}`).find({}).toArray(function(err, result) {
            if (err) throw err;
            results = filterResults(result);
            dbo.collection("filteredrecords").insertMany(results, {ordered: false}, function(err, res) {
                if (err) {
                    console.log(`An error was encountered on the insert: ${err} \n`);
                    if (res) {
                    console.log(`Inserted ${res.insertedCount}  items.`);
                    }
                }
                else {
                    console.log(`Inserted ${res.insertedCount}  items.`);
                }
                db.close();
            });
            db.close();
        });
        return results;
    });
}

async function writeRecords() {

    return MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(`${DB_NAME}`);
        dbo.collection(`filteredrecords`).find({}).toArray(function(err, result) {
            if (err) throw err;
            try {
                res = "";
                for(var i=0; i < result.length; i++) {
                    res += JSON.stringify(result[i]);
                }
                fs.appendFileSync('./filtered_output.json', res);
            } catch (err) {
            console.error(err);
        }
            db.close();
        });
    });
}

function main() {
    for(var i =0; i < 7; i++)  {
        processRecords(i).then(writeRecords());
    }
}

exports.main = main;
exports.filterResults = filterResults;
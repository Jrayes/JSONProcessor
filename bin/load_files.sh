ls | sed 's/.json$//' | xargs -I{} mongoimport -d reader --type json -c {} {}.json --jsonArray

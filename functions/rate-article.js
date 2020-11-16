require("dotenv").config({ debug: process.env.DEBUG })


const Airtable = require("airtable")
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_PASS,
})
var base = Airtable.base(process.env.AIRTABLE_ID)

exports.handler = function(event, context, callback) {
  const allRecords = []
  base('Main')
    .select({
      maxRecords: 100,
      view: 'all'
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function(record) {
          allRecords.push(record)
        })
        fetchNextPage()
      },
      function done(err) {
        if (err) {
          callback(err)
        } else {
          const body = JSON.stringify({ records: allRecords })
          const response = {
            statusCode: 200,
            body: body,
            headers: {
              'content-type': 'application/json',
              'cache-control': 'Cache-Control: max-age=300, public'
            }
          }
          callback(null, response)
        }
      }
    )
}


// return {
//   statusCode: 301,
//   headers: {
//     Location: "https://www.hearthisidea.com/thanks-for-rating",
//   },
// }
// return { statusCode: 500, body: err.message }

// Trim fron /

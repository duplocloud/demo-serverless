/**
 * Form Submit
 */

 const get_emails = (event, context, callback) => {

  if (event['queryStringParameters'] && event['queryStringParameters']['error']) {
    let r = Math.random().toString(36).substring(7);
    throw new Error(`Random error ${r}`)
  }

  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(["ganesh@duploloud.net3"]),
  })
}

module.exports = { get_emails }

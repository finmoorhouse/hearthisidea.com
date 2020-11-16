exports.handler = function(event, context, callback) {
    const { name } = JSON.parse(event.body)
    if (name === 'Fin'){
        console.log(event)
        callback(null, {
            statusCode: 200,
            body: "Hello, World",
        })
    }
    else {
        callback(new Error("You're not Fin!"))
    }
}

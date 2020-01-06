module.exports = {
    body: x => JSON.parse(x.body),
    success: x => ({
        statusCode: 200,
        body: JSON.stringify(x)
    }),
    validationError: x => ({
        statusCode: 400,
        body: JSON.stringify(x)
    }),
    serverError: x => ({
        statusCode: 500,
        body: JSON.stringify(x)
    })
}

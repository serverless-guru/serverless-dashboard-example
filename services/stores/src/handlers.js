const db = require('./db')
const io = require('./io')
const validation = require('./validation')
const getCustomerFeedback = require('./thirdPartyService')

module.exports.getStore = async event => {
    try {
        const feedback = getCustomerFeedback()
        const store = await db.getStore({
            id: event.pathParameters.id
        })

        return io.success({
            feedback,
            ...store
        })
    } catch (e) {
        return io.serverError(e)
    }
}

module.exports.addStore = async event => {
    try {
        const input = io.body(event)
        const { valid, error } = validation.addStore(input)

        if (!valid) {
            return io.validationError(error)
        }

        const result = await db.addStore(input)

        return io.success(result)
    } catch (e) {
        return io.serverError(e)
    }
}

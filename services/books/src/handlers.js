const db = require('./db')
const io = require('./io')
const validation = require('./validation')

module.exports.getAllStoresBooks = async event => {
    try {
        const input = io.body(event)
        const { valid, error } = validation.getStoresBooks(input)

        if (!valid) {
            return io.validationError(error)
        }

        const books = await db.getAllStoresBooks(input)
        return io.success(books)
    } catch (e) {
        return io.serverError(e)
    }
}

module.exports.addBook = async event => {
    try {
        const input = io.body(event)
        const { valid, error } = validation.addBook(input)

        if (!valid) {
            return io.validationError(error)
        }

        const result = await db.addBook(input)
        return io.success(result)
    } catch (e) {
        return io.serverError(e)
    }
}

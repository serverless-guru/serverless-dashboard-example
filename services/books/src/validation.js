module.exports = {
    addBook: data => {
        if (!data.storeId) {
            return {
                valid: false,
                error: 'A book must have a store id'
            }
        }

        if (!data.isbn) {
            return {
                valid: false,
                error: 'A book must have an isbn'
            }
        }

        if (!data.name) {
            return {
                valid: false,
                error: 'A book must have a name'
            }
        }

        if (!data.author) {
            return {
                valid: false,
                error: 'A book must have an author'
            }
        }

        return {
            valid: true,
            error: false
        }
    },
    getStoresBooks: data => {
        if (!data.storeId) {
            return {
                valid: false,
                error: 'Input must have a store id'
            }
        }

        return {
            valid: true,
            error: false
        }
    }
}

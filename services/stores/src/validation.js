module.exports = {
    addStore: data => {
        if (!data.storeId) {
            return {
                valid: false,
                error: 'A book must have a store id'
            }
        }

        if (!data.name) {
            return {
                valid: false,
                error: 'A book must have a name'
            }
        }

        return {
            valid: true,
            error: false
        }
    }
}

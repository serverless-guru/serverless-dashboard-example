const validation = require('../validation')

describe('validation.getAllStoreBooks', () => {
    test('throws error if there is no storeId', () => {
        const input = {
            misspelledStoreIdParam: 'store_1234'
        }

        const result = validation.getStoresBooks(input)
        expect(result.valid).toBe(false)
        expect(result.error).toBe('Input must have a store id')
    })
})

describe('validation.addBook', () => {
    test('throws error if there is no storeId', () => {
        const input = {
            // storeId: 'store_1234',
            isbn: '12355',
            name: 'The Book',
            author: 'The Author'
        }

        const result = validation.addBook(input)
        expect(result.valid).toBe(false)
        expect(result.error).toBe('A book must have a store id')
    })

    test('throws error if there is no isbn', () => {
        const input = {
            storeId: 'store_1234',
            // isbn: '12355',
            name: 'The Book',
            author: 'The Author'
        }

        const result = validation.addBook(input)
        expect(result.valid).toBe(false)
        expect(result.error).toBe('A book must have an isbn')
    })

    test('throws error if there is no name', () => {
        const input = {
            storeId: 'store_1234',
            isbn: '12355',
            // name: 'The Book',
            author: 'The Author'
        }

        const result = validation.addBook(input)
        expect(result.valid).toBe(false)
        expect(result.error).toBe('A book must have a name')
    })

    test('throws error if there is no author', () => {
        const input = {
            storeId: 'store_1234',
            isbn: '12355',
            name: 'The Book'
            // author: 'The Author'
        }

        const result = validation.addBook(input)
        expect(result.valid).toBe(false)
        expect(result.error).toBe('A book must have an author')
    })
})

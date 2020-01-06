const validation = require('../validation')

describe('validation.addStore', () => {
    test('throws error if there is no storeId', () => {
        const input = {
            // storeId: 'store_1234',
            name: 'The Book'
        }

        const result = validation.addStore(input)
        expect(result.valid).toBe(false)
        expect(result.error).toBe('A book must have a store id')
    })

    test('throws error if there is no name', () => {
        const input = {
            storeId: 'store_1234'
            // name: 'The Book',
        }

        const result = validation.addStore(input)
        expect(result.valid).toBe(false)
        expect(result.error).toBe('A book must have a name')
    })
})

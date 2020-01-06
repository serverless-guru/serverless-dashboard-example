const AWS = require('aws-sdk')
const TABLE = process.env.TABLE
const dynamoDb = new AWS.DynamoDB.DocumentClient({
    region: process.env.REGION || 'us-east-1'
})

const addBook = async data => {
    const params = {
        TableName: TABLE,
        Item: {
            PK: data.storeId,
            SK: 'book_' + data.isbn,
            name: data.name,
            author: data.author
        }
    }

    await dynamoDb.put(params).promise()

    return data
}

const getAllBooks = async data => {
    const params = {
        TableName: TABLE,
        KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
        ExpressionAttributeValues: {
            ':pk': data.storeId,
            ':sk': 'book_'
        }
    }

    const result = await dynamoDb.query(params).promise()
    return result.Items.map(x => ({
        storeId: x.PK,
        isbn: x.SK.split('_')[1],
        name: x.name,
        author: x.author
    }))
}

module.exports = {
    addBook,
    getAllBooks
}

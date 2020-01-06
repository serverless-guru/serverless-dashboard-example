const AWS = require('aws-sdk')
const TABLE = process.env.TABLE
const dynamoDb = new AWS.DynamoDB.DocumentClient({
    region: process.env.REGION || 'us-east-1'
})

const addStore = async data => {
    const params = {
        TableName: TABLE,
        Item: {
            PK: 'store',
            SK: data.storeId,
            name: data.name
        }
    }

    await dynamoDb.put(params).promise()
    return data
}

const getStore = async data => {
    const params = {
        TableName: TABLE,
        Key: {
            PK: 'store',
            SK: data.id
        }
    }

    const result = await dynamoDb.get(params).promise()
    return {
        id: result.Item.SK,
        name: result.Item.name
    }
}

module.exports = {
    addStore,
    getStore
}

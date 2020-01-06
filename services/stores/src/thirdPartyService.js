const callMockThirdPartyService = (password, storeId) => {
    if (password && storeId) {
        return {
            customerFeedbackScore: Math.floor(Math.random() * 10)
        }
    }
}

module.exports = storeId => {
    const password = process.env.ACME_PASSWORD
    const dataFromThirdPartyService = callMockThirdPartyService(
        password,
        storeId
    )
    return dataFromThirdPartyService
}

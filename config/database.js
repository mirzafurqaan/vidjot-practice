if (process.env.NODE_ENV === 'production') {
    module.exports = { mongoURI: 'mongodb+srv://root:admin@cluster0-4inkv.mongodb.net/test?retryWrites=true' }
} else {
    module.exports = { mongoURI: 'mongodb://localhost/vidjot-dev' }
}

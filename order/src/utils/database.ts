import mongoose from 'mongoose'
export const connect = () => {
    // const MONGO_URL = 'mongodb+srv://imule:imule@cluster0-rekgb.mongodb.net/jRoute?retryWrites=true&w=majority'
    const MONGO_URL = 'mongodb+srv://Aashu:Aashu@cluster0.csgff3h.mongodb.net/Order?retryWrites=true&w=majority'

    mongoose.Promise = Promise
    mongoose.connect(MONGO_URL);
    console.log('Database connected')
    mongoose.connection.on('error', (error: Error) => console.log(error))
}

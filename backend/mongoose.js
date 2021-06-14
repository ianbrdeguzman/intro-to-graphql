import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectMongoose = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('MongoDB connection stablished.');
    } catch (error) {
        console.log(error);
    }
};

export default connectMongoose;

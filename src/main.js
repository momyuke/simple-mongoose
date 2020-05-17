import server from './server';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

var optionConns = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

mongoose.connect('mongodb://localhost:27017', optionConns, () => {

    if (mongoose.connection.readyState === 1) {
        if (process.env.APP_NAME) {
            server.listen(process.env.APP_PORT, '0.0.0.0', () => {
                console.log(`Server has been running in port ${process.env.APP_PORT}`);
            });
        }
    } else {
        process.exit(1);
    }

});




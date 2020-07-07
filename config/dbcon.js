var mongoose = require('mongoose');
module.exports.connect = async () => {
    try {
        const con = await mongoose.connect('mongodb://localhost:27017/amazon', { useNewUrlParser: true });
        if (con) {
            console.log("mongo connection success");
            return (true);

        }
        else {
            console.log("mongo connection fail!");
            return (false);


        }
    }
    catch (err) {
        console.log("Err in Connection" + err);
        return (false);

    }
}
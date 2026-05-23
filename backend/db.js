const mongoose = require("mongoose");

const connectDB = async () => {

    try {

        await mongoose.connect(
            "mongodb+srv://saipranavi2108:Sirinavi1234@cluster0.mjrks0y.mongodb.net/taskmanager"
        );

        console.log("MongoDB Connected");

    } catch (err) {

        console.log(err);

    }

};

module.exports = connectDB;
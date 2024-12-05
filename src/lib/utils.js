const { default: mongoose } = require("mongoose");

const connection = {
    isConnected: null, // Initialize to null
};

export const connectToDB = async () => {
    try {
        if (connection.isConnected) {
            console.log("Using existing connection");
            return;
        }

        const db = await mongoose.connect(process.env.DB);
        console.log("Connected to DB");
        connection.isConnected = db.connections[0].readyState; // Set connection status
    } catch (error) {
        console.log("ERROR ALLA:", process.env.DB);
        console.log("Error connecting to DB:", error);
    }
};

import mongoose from "mongoose";

const connectToMongoDB = async () => {
	console.log("URI used:", "mongodb+srv://mayanksamant09_db_user..."); // ye line add kar
	try {
		await mongoose.connect("mongodb+srv://mayanksamant09_db_user:zDusgsHjQ83BXaKR@chatapp.thf346v.mongodb.net/chat-app?retryWrites=true&w=majority&appName=chatapp");
		console.log("MongoDB Connected");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect("mongodb+srv://mayanksamant09_db_user:zDusgsHjQ83BXaKR@chatapp.thf346v.mongodb.net/chat-app?retryWrites=true&w=majority&appName=chatapp");
		console.log("MongoDB Connected");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
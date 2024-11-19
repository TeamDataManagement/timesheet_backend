import mongoose from 'mongoose';

const connectDB = async () => {
    try {
      await mongoose.connect('mongodb+srv://tdm:mdpmongo@myproject.bnuwbq8.mongodb.net/ExtensionTS?retryWrites=true&w=majority');
      console.log('MongoDB connected to ExtensionTS');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      process.exit(1);
    }
  };

  export default connectDB
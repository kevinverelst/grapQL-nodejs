import mongoose from 'mongoose';

let blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});

export default mongoose.model('BlogPost', blogPostSchema);

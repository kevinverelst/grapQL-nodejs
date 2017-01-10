import mongoose from 'mongoose';

let commentSchema = mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

export default mongoose.model('Comment', commentSchema);

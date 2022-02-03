import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const infoSchema = new Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: [String],
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const infoModel = mongoose.model('infoModel', infoSchema, 'Info');

export default infoModel;
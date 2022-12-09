import mongoose from 'mongoose';

const Activity = new mongoose.Schema({
    title: {type: String, required: true},
    startDate: {type: String, required: true},
    expDate: {type: String, required: true},
})

export default mongoose.model('Activity', Activity)

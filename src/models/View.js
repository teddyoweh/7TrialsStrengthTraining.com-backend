/* eslint-disable prettier/prettier */

import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// Addition of  the Schema for the User model

const ViewsSchema = new Schema({
    ip: {},
    userdata: {},
    pageviewed: {
        type: String
    },
    viewedno: {
        type: Number,
        default: 0
    },
    browser: {},
    operatingSystem: {},

    date: {
        type: Date,
        default: Date.now
    },


});

const Views = mongoose.model('views', ViewsSchema);

export {Views}
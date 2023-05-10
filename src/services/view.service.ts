/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
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
@Injectable()
export class ViewService {
  getHello(): string {
    return 'Hello World!';
  }
  addView(body):object{
    console.log(body)
    const newView = new Views({
        ip: body.ip,
        userdata: body.userdata,
        pageviewed: body.pageviewed,
        viewedno: body.viewedno,
        browser: body.browser,
        operatingSystem: body.operatingSystem,
        date: body.date
    });
    newView.save();
    return {};
  }
}

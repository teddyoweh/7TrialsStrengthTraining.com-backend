import { Injectable } from '@nestjs/common';
//import { planhashmap } from '../data/data.js';
/* eslint-disable prettier/prettier */
const planshashmap={
    'One Time': {
        'Normal':
          {
        name: 'Normal',
              price:'$40',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eu nulla tincidunt tincidunt. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultricies nunc,',
              rate:'/One-time Payment',
        benefits: [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  
              ],
              
  
  
          },
          
          'College Student':{
              name:'College Student',
              price:'$25',
              desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eu nulla tincidunt tincidunt. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultricies nunc,',
              rate:'/One-time Payment',
              benefits:[
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  
              ]
  
  
          }
      },
  
    'Monthly': {
             'Competition': {
                  name:'Competition',
                  price:'$150',
                  desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eu nulla tincidunt tincidunt. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultricies nunc,',
                  rate:'/Per Month',
                  benefits:[
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  
                  ]
  
  
              },
              'Normal':{
                  name:'Normal',
                  price:'$100',
                  desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eu nulla tincidunt tincidunt. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultricies nunc,',
                  rate:'/Per Month',
                  benefits:[
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                      
                  ]
  
  
              },
              'College Student':{
                  name:'College Student',
                  price:'$50',
                  desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eu nulla tincidunt tincidunt. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultricies nunc,',
                  rate:'/Per Month',
                  benefits:[
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                      
                  ]
  
  
              }
          },
    'In Person': {
          
            'Competition' : {
                  name:'Competition',
                  price:'$20',
                  desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eu nulla tincidunt tincidunt. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultricies nunc,',
                  rate:'/Per Session',
                  benefits:[
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  
                  ]
  
  
              },
              'Normal':{
                  name:'Normal',
                  price:'$25',
                  desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eu nulla tincidunt tincidunt. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultricies nunc,',
                  rate:'/Per Session',
                  benefits:[
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                      
                  ]
  
  
              },
             'College Student':{
                  name:'College Student',
                  price:'$15',
                  desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eu nulla tincidunt tincidunt. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultricies nunc,',
                  rate:'/Per Session',
                  benefits:[
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                      
                  ]
  
  
              }
          },
  };
  
  export {planshashmap}
  import mongoose from 'mongoose';

  const Schema = mongoose.Schema;
  // Addition of  the Schema for the User model
  
  const PaymentSchema = new Schema({
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
      firstname:{},
      lastname:{},
        email:{},
        planrate:{},
        plan:{}

  
  
  });
  
  const PaymentModel = mongoose.model('PaymentActions', PaymentSchema);
@Injectable()
export class PaymentService {
  getHello(): string {
    return 'Hello World!';
  }
  makePayment(body) {
    console.log(body);
    console.log(planshashmap[body.planrate]);
    const newPayment = new PaymentModel({
        ip: body.ip,
        userdata: body.userdata,
        pageviewed: body.pageviewed,
        viewedno: body.viewedno,
        browser: body.browser,
        operatingSystem: body.operatingSystem,
        firstname:body.firstname,
        lastname:body.lastname,
        email:body.email,
        planrate:body.planrate,
        plandetails:planshashmap[body.planrate][body.plan],
        plan:body.plan
    
    })
    newPayment.save();
    return 'Payment made';
  }
}

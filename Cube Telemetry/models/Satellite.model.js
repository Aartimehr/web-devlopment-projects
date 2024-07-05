const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SatelliteSchema = new Schema({
      name :{
        type:String,
        required:true
    },
    Lati:{
        type:Number,
        required: true
    },
    Long:{
        type:Number,
        required: true
    },
    Alt:{
        type:Number,
        required: true
    },
    Pitch:  {
        type:Number,
        required: true
    },
    Yaw: {
        type:Number,
        required: true
    },
    Roll: {
        type:Number,
        required: true
    },
    Temp: {
        type:Number,
        required: true
    },
    Humid: {
        type:Number,
        required: true
    },
    Pressure:  {
        type:Number,
        required: true
    },
    Bat_remain: {
        type:Number,
        required: true
    },
    Bat_time:  {
        type:Number,
        required: true
    },
    NORAD_ID:  {
        type:Number,
        required: true
    },
    organisation: {
        type:String,
        required:true
    }
});


const Satellite = mongoose.model('Satellite',SatelliteSchema)
module.exports = Satellite;

import {Schema,model} from 'mongoose'

new Schema({
    username:{
        type: String,
        unique: true
    },
    email:{
        type: String,
        unique: true
    },
    password:{
        type: String,
        unique: true
    },
    roles:[
        
    ]

})
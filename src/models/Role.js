import {Schema, model} from 'mongoose';

const roleSchema = new Schema({
    name: String,
},{
    versionKey: False


});

export default model('Role', roleSchema)
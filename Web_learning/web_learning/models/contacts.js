import mongoose from 'mongoose'
const Schema = mongoose.Schema // читай инфу в другом файле этой дирректории

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
})

const Contacts = mongoose.model('Contact', contactSchema)

export {
    Contacts,
}
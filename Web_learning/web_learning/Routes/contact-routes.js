import express from 'express'
const router = express.Router() // роутер это элемент кода который дает возможность разносить приложение в модули а потом использовать его чпосле импорта через use()
import { getContacts } from '../controllers/contact-controllers.js'

router.get('/contacts', getContacts) // роутер с контроллером 


export {
    router
}

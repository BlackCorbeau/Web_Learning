import { createPath } from '../helpers/createPath.js'
import { Contacts } from '../models/contacts.js'
import { handlerEror } from '../helpers/handlerError.js'

const getContacts = (req, res) => { // контроллер это вспомогательный элемент кода помогающий делать код более модульным и содержащтй в нутри себя функции и методы рута
    const title = 'Contacts'
    Contacts
        .find()
        .then((contacts) => res.render(createPath('contacts'), { title, contacts }))
        .catch((err) => handlerEror(res, err))
}

export {
    getContacts,
}
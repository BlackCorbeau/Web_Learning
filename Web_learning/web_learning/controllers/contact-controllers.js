import { createPath } from '../helpers/createPath.js'
import { Contacts } from '../models/contacts.js'
import { handlerEror } from '../helpers/handlerError.js'

const getContacts = (req, res) => { // ���������� ��� ��������������� ������� ���� ���������� ������ ��� ����� ��������� � ���������� � ����� ���� ������� � ������ ����
    const title = 'Contacts'
    Contacts
        .find()
        .then((contacts) => res.render(createPath('contacts'), { title, contacts }))
        .catch((err) => handlerEror(res, err))
}

export {
    getContacts,
}
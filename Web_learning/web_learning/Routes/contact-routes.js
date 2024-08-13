import express from 'express'
const router = express.Router() // ������ ��� ������� ���� ������� ���� ����������� ��������� ���������� � ������ � ����� ������������ ��� ������ ������� ����� use()
import { getContacts } from '../controllers/contact-controllers.js'

router.get('/contacts', getContacts) // ������ � ������������ 


export {
    router
}

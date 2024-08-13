import mongoose from 'mongoose' // 
const Schema = mongoose.Schema // ��� ��������� ������ � �� � ��� � ������ �� �������� �������� ����� � ������� ����� ������������� ������ 

const postSchema = new Schema({ // ��� ����� 
    text: { // �������� ��� � ������� �� DB ������ ���� ���� ����� ������� �������� ������ � ������ ���� ����������� � ����������
        type: String,
        required: true,
    },
    title: { // �� �� ����� � �����
        type: String,
        required: true,
    },
    author: { // �� �� ����� � �������
        type: String,
        required: true,
    }

}, { timestamps: true })

const Post = mongoose.model('Post', postSchema) // ������ �� ����� � ������� ������ ������ � ������� ������ ����� ������������ � ��

export { // ������������ ���� ������
    Post
}
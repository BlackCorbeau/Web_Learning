import path from 'path' // ������� ������� ��� �������� ����� � ��������� ����������� ��� ��� ������ ��� ������� ������������� �� � 4-� ������

const createPath = (name) => path.resolve('.', 'ejs_views', `${name}.ejs`)

export {
    createPath
}
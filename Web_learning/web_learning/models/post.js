import mongoose from 'mongoose' // 
const Schema = mongoose.Schema // дл€ коректной работы с бд и что б ничего не ломалось пишетьс€ схема в которую будут подставл€тьс€ данные 

const postSchema = new Schema({ // вот схема 
    text: { // указывае что в запросе на DB должен быть поле текст которое содержит стринг и должно быть об€зательно к заполнению
        type: String,
        required: true,
    },
    title: { // то же самое с тайтл
        type: String,
        required: true,
    },
    author: { // то же самое с тайтлом
        type: String,
        required: true,
    }

}, { timestamps: true })

const Post = mongoose.model('Post', postSchema) // делаем из этого и шаблона особый обьект в котором данные будут перемещатьс€ в Ѕƒ

export { // экспортируем этот обьект
    Post
}
const {MongoClient: MongoClient} = require('mongodb')
const MongoDBclient = new MongoClient('mongodb://admin:12345@docker_api_server-master-mongo-1:27017')
const { ObjectId } = require('mongodb');

const select_medicine = async () =>{
    try {
        const category_name = require('../route/routes')
        await MongoDBclient.connect()
        console.log("Успешно подключились к базе данных")
        const [result_select_medicine] = await Promise.all([MongoDBclient
            .db('test_db')
            .collection('medicine')
            .find()
            .toArray()]);
        await MongoDBclient.close()
        return result_select_medicine
    } catch (e) {
        console.log(e)
    }
}

const add_medicine = async () =>{
    try {
        const new_medicine = require('../route/routes')
        await MongoDBclient.connect()
        console.log("Успешно подключились к базе данных")
        await Promise.all([MongoDBclient
            .db('test_db')
            .collection('medicine')
            .insertOne(new_medicine.new_medicine)]);
        await MongoDBclient.close()
        return "Данные добавлены"
    } catch (e) {
        console.log(e)
    }
}
const delete_medicine = async () =>{
    try {
        const id_delete_medicine = require('../route/routes')
        const id_delete_medicine_form = { '_id': new ObjectId(id_delete_medicine.id_delete_medicine) };
        await MongoDBclient.connect()
        console.log("Успешно подключились к базе данных")
        await Promise.all([MongoDBclient
            .db('test_db')
            .collection('medicine').deleteOne(id_delete_medicine_form)]);
        await MongoDBclient.close()
        return "Данные удалены"
    } catch (e) {
        console.log(e)
    }
}


module.exports = {select_medicine, add_medicine, delete_medicine};

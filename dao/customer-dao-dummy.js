import fs from 'fs';

const source = `${__dirname}/../config/customer.db.json`;
const customers = (fs.existsSync(source) ? JSON.parse(fs.readFileSync(source, {encoding: 'utf8'})) : []);

function getList(callback){
    callback(null, customers);
}

function getById(cif, callback){
    const findCust = customers.find(cus => {return cus.customerNumber == cif;});
    callback(null, findCust);
}

function getListPromise(){
    return new Promise((resolve, reject)=>{
        resolve(customers);
    });
}

function getByIdPromise(cif){
    console.log(cif);
    return new Promise((resolve, reject)=>{
        resolve(customers.find(cus => {return cus.customerNumber == cif;}));
    });
}

function insert(data, callback){
    const index = customers.findIndex((cus) => {
        return cus.id == data.customerNumber;
    });

    if (index < 0) {
        customers.push(data);
    }

    save(customers);
    getById(data.customerNumber, callback);
}

function save(data) {
  fs.writeFileSync(source, JSON.stringify(customers));
}

module.exports = {getList, getById, insert, getListPromise, getByIdPromise};
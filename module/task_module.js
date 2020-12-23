const db=require('../data/knexConfig')

async function find(){
    return await db('tasks').select('*');
}

async function insert(task){
    return await db('tasks').insert(task);
}

module.exports={
    find,
    insert
}
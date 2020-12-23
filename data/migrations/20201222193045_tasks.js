
exports.up = async function(knex) {
    await knex.schema.createTable('tasks',(tbl)=>{
        tbl.increments();
        tbl.text('task').notNull();
    })
  
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('tasks')
  
};

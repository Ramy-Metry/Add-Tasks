
exports.seed = async function(knex) {
  
  await knex('tasks').del()
    .then(function () {
      
      // return knex('tasks').insert([
      //   {}
        
      // ]);
    });
};


exports.seed = async function(knex) {
  
  await knex('tasks').del()
    .then(function () {
      
      return knex('tasks').insert([
        {id: 1, task: 'study nodeJS'},
        {id: 2, task: 'Cleaning table'},
        {id: 3, task: 'walking'}
      ]);
    });
};

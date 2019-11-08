
exports.seed = function(knex) {
  return knex('tasks').insert([
    {project_id:1, task_description: 'get idea',task_completed:false},
    {project_id:1, task_description: 'code',task_completed:false},
    {project_id:1, task_description: 'add to portfolio',task_completed:false}
  ]);
};

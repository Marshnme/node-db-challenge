
exports.seed = function(knex) {
      return knex('project').insert([
        {project_name: 'make website', project_completed: false},
        {project_name: 'learn ukulele', project_completed: false},
        {project_name: 'draw', project_completed: false}
      ]);
};

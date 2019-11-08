
exports.seed = function(knex) {
  return knex('resources').insert([
    {resource_name: 'vscode',resource_description:'coding software'},
    {resource_name: 'computer',resource_description:'machine to get coding software'},
    {resource_name: 'portfolio',resource_description:'website to display your websites'}
  ]);
};

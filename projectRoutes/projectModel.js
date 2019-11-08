const db = require('../data/dbConfig');


module.exports = {
    findResources,
    findTasks,
    findProjects,
    addResources,
    addTasks,
    addProjects
}


    function findResources(){
        return db.select('resources.resource_name','resources.resource_description')
        .from('resources');
    }
    function findTasks(){
        return db.select('project.project_name','project.project_description','tasks.task_description','tasks.task_completed')
        .from('tasks')
        .join('project', 'project.project_id', 'tasks.project_id');
    }
    function findProjects(){
        return db.select('project.project_name', 'project.project_description','project.project_completed')
        .from('project');
    }
    function addResources(body){
        return db('resources')
        .insert(body)
    }
    function addTasks(projectId,body){
        return db('tasks')
        .join('project', 'project.project_id', 'tasks.project_id')
        .insert(body)
        .where( 'tasks.project_id', projectId)
    }
    function addProjects(body){
        return db('project')
        .insert(body)
    }
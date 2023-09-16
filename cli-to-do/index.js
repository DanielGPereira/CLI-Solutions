const db = require('./db');

const userIndex = process.argv.indexOf('--user');
const operationIndex = process.argv.indexOf('--operation');
const taskIndex = process.argv.indexOf('--task');

const user = process.argv[userIndex + 1];
const operation = process.argv[operationIndex + 1];
const task = process.argv[taskIndex + 1];


if(operation === "create-task"){
    db.createTask(user, task).then( () => process.exit());
}

if(operation === "show-tasks" ){
    db.readTasks(user).then( res => {
        console.log('------------Tasks----------');

        res.forEach( queryTask => {
            console.log(`${queryTask.id} | [${queryTask.complete}] | ${queryTask.description}`);
        });
        process.exit();
    });
}

if(operation === "complete-task"){
    db.completeTask(task).then(() => process.exit());
}

if(operation === "delete-task"){
    db.deleteTask(task).then( () => process.exit());
}

if(operation === "add-user"){
    db.createUser(user).then(res => {
        console.log(user + ' Insert with sucess.');
        process.exit();
    });
}

if(operation === "delete-user"){
    db.deleteUser(user).then(res => {
        console.log(user + ' Deleted with sucess.')
        process.exit();
    });
}

if(operation === 'show-users'){

    console.log('-----------Users------------');
    db.selectAllUsers().then( res =>{
        res.forEach( queryUser => {
            console.log(`${res.indexOf(queryUser)} - ${queryUser.name}`);
        });
        console.log('----------------------------');
        process.exit();
    })

    
}


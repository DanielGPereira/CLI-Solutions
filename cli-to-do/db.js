const connection_string = 'postgresql://postgres:1234@localhost/postgres';

async function connect(){
    

    if(global.connection){
        return global.connection;
    }

    const { Pool } = require('pg');

    const pool = new Pool({
        connectionString: connection_string
    });

    const client = await pool.connect();

    client.release();

    global.connection = pool;
    return pool.connect();

    
}


async function createTask(user, description){
    const client = await connect();
    await client.query('INSERT INTO tasks(name, description) VALUES($1, $2)', [user, description]);
    client.release();
    console.log(`Task created with success.`);
}

async function deleteTask(taskId){
    const client = await connect();
    await client.query('DELETE FROM tasks WHERE id = $1', [taskId]);
    client.release();
    console.log(`${taskId} task deleted with success.`);
}

async function readTasks(user){
    const client = await connect();
    const res = await client.query('SELECT * FROM tasks WHERE name = $1;', [user]);
    return res.rows;
}

async function completeTask(taskId){
    const client = await connect();
    await client.query('UPDATE tasks SET complete = $1 WHERE id = $2', [true, taskId]);
    console.log(`Task ${taskId} completed.`);
    client.release();
}

async function selectAllUsers(){
    const client = await connect();
    const res = await client.query('SELECT * FROM users;');
    client.release();
    return res.rows;
}

async function createUser(userName){
    const client = await connect();
    const res = await client.query('INSERT INTO users(name) VALUES($1);', [userName]);
    client.release();
    console.log(`${userName} created with success.`);
}

async function deleteUser(userName){
    const client = await connect();
    const res = await client.query('DELETE FROM users WHERE name = $1', [userName]);
    client.release();
    console.log(`${userName} deleted with success.`);
}

module.exports = {
    selectAllUsers,
    createUser,
    deleteUser,
    createTask,
    readTasks,
    deleteTask,
    completeTask
}
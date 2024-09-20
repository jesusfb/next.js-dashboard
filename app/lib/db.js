const { Client } = require('@vercel/postgres');

const client = new Client({
    connectionString:
        process.env.DATABASE_URL,
});

async function connect() {
    try{
        await client.connect();
        console.log ('Connected to the database!');
    } catch (error) {
        console.error ('Connection error:; error');   
    }
}
connect();
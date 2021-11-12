import mysql from 'serverless-mysql';

const db = mysql({
  config: {
    host: 'sql6.freesqldatabase.com',
    port: '3306',
    database: 'sql6450414',
    user: 'sql6450414',
    password: 'micDmdq8HB'
  }
});


export default async function excuteQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const bdFile = process.cwd() + '/database/db.json';
const db = () => low(new FileSync(bdFile));

export const getEvents = async () => await db().get('events').value();
export const getEventById = async (id) => await db().get('events').filter({ id }).value();

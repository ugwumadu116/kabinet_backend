import pool from '../config/db';

pool.on('connect', () => {
  console.log('Connected');
});

const drop = () => {
  const eventsTable = 'DROP TABLE IF EXISTS kabinetevents CASCADE';
  const interestTable = 'DROP TABLE IF EXISTS kabinetinterest CASCADE';
  const billsTable = 'DROP TABLE IF EXISTS balance CASCADE';
  const dropTables = `${eventsTable};${interestTable};${billsTable};`;

  pool.query(`${dropTables}`, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Tables dropped');
    }
    pool.end();
  });
};


const create = () => {
  const eventsTable = `CREATE TABLE IF NOT EXISTS
  kabinetevents(
    id SERIAL PRIMARY KEY,
    date VARCHAR(50) NOT NULL,
    title TEXT NOT NULL,
    event_type TEXT NOT NULL,
    location TEXT NOT NULL,
    organization_name TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    organizer_info TEXT NOT NULL,
    website TEXT NOT NULL,
    organizer_contact TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`;

const interestTable = `CREATE TABLE IF NOT EXISTS
kabinetinterest(
    id SERIAL PRIMARY KEY,
    eventid INTEGER NOT NULL,
    contact VARCHAR(50) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_owner FOREIGN KEY (eventid) REFERENCES  kabinetevents (id)
  )`;

const balanceTable = `CREATE TABLE IF NOT EXISTS
  balance(
    id SERIAL PRIMARY KEY,
    userid INTEGER NOT NULL,
    wallet_amount VARCHAR(100) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_owner FOREIGN KEY (userid) REFERENCES  users (id)
  )`;
 
  const migrationQueries = `${eventsTable};${balanceTable};${interestTable};`;
  pool.query(`${migrationQueries}`, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Database migration successfully executed!');
    }
    pool.end();
  });
};

export { drop, create };

// eslint-disable-next-line eol-last
require('make-runnable/custom')({
  printOutputFrame: false,
});

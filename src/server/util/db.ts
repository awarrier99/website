// import mysql from 'mysql2';
// import type { Pool, QueryError } from 'mysql2';
//
// let pool: Pool;
//
// export const connect = (): Pool => {
//   if (pool) return pool;
//
//   pool = mysql.createPool({
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//   });
//
//   pool.query('SELECT 1=1', (err: QueryError | null): void => {
//     if (err) {
//       console.log('Unable to connect to database');
//       throw err;
//     }
//     console.log('Successfully connected to database');
//   });
//
//   return pool;
// };
//
// const queryError = (reject: (val: Error) => void, sql: string, values: Array<string | number> | undefined, err: QueryError): void => {
//   console.log('An error occurred while executing the query:');
//   console.log(sql);
//   if (values && values.length) {
//     console.log('With values:');
//     console.log(values);
//   }
//   console.log(); // newline
//   return reject(err);
// };
//
// export function exec(sql: string): Promise<IDBObject | undefined>;
// export function exec(sql: string, values: Array<string | number>): Promise<IDBObject | undefined>;
// export function exec(sql: string, values: Array<string | number>, multiple: boolean): Promise<Array<IDBObject> | undefined>;
// export function exec(sql: string, values?: Array<string | number>, multiple?: boolean): Promise<Array<IDBObject> | IDBObject | undefined> {
//   return new Promise((resolve: (val?: Array<IDBObject> | IDBObject) => void, reject: (val: Error) => void): void => {
//     if (!values && sql.includes('?')) throw new TypeError('Bind values cannot be undefined');
//
//     let rows: Array<IDBObject> = [];
//     sql.trim();
//     if (sql.toLowerCase().includes('select')) {
//       pool.query(sql, values, (err: QueryError | null, results: Array<IDBObject>): void => {
//         if (err) return queryError(reject, sql, values, err);
//
//         rows = Array.from(results);
//         if (!rows.length) return resolve();
//         if (!multiple) return resolve(rows[0]);
//         return resolve(rows);
//       });
//     } else {
//       pool.query(sql, values, (err: QueryError | null): void => {
//         if (err) return queryError(reject, sql, values, err);
//         return resolve();
//       });
//     }
//   });
// }

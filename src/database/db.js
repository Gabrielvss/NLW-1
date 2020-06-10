//import sqlite3
const sqlite3 = require("sqlite3").verbose();

//creating a db object
const db = new sqlite3.Database("./src/database/database.db");

module.exports = db;

// db.serialize(() => {
//   //create table
//   db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//      `);

//   const query = `
//     INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//     ) VALUES (?,?,?,?,?,?,?);
// `;
//   const values = [
//     "https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//     "Coletoria",
//     "Guilherme Gambella, Jardim América",
//     "Nº 260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Resíduos Eletrônicos, Lâmpadas",
//   ];

//   function afterInsetData(err) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("Cadastrado com Sucesso");
//     console.log(this);
//   }

//   //update table
//   //db.run(query, values, afterInsetData);

//   //search on table
//   db.all(`SELECT * FROM places`, function (err, rows) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("Aqui estão são dados");
//     console.log(rows);
//   });

//   //delete data from table
//   db.run(`DELETE FROM places WHERE id=?`, [4], function (err) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("Registro deletado");
//   });
// });

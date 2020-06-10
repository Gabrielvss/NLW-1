const express = require("express");
const server = express();

//get the database
const db = require("./database/db");

//configurar pasta publica
server.use(express.static("public"));

//habilitar o req.body
server.use(express.urlencoded({ extended: true }));

//utilizando template engine
const nunjuncks = require("nunjucks");
nunjuncks.configure("src/views", {
  express: server,
  noCache: true,
});

server.get("/", (req, res) => {
  return res.render("index.html", { title: "Seu Marketplace de Coleta" });
});

server.get("/create-point", (req, res) => {
  // const queryes = req.query;
  // console.log(queryes);
  return res.render("create-point.html");
});

server.post("/savepoint", (req, res) => {
  const query = `
  INSERT INTO places (
      image,
      name,
      address,
      address2,
      state,
      city,
      items
  ) VALUES (?,?,?,?,?,?,?);
`;
  const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items,
  ];

  function afterInsetData(err) {
    if (err) {
      return console.log(err);
    }
    // console.log("Cadastrado com Sucesso");
    // console.log(this);
    return res.render("create-point.html", { saved: true });
  }

  //update table
  db.run(query, values, afterInsetData);
});

server.get("/search", (req, res) => {
  db.all(`SELECT * FROM places`, function (err, rows) {
    if (err) {
      return console.log(err);
    }

    total = rows.length;
    return res.render("search-page.html", { places: rows, total: total });
  });
});

server.listen(3000);

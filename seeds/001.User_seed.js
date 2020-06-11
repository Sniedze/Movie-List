const bcrypt = require("bcrypt");
const password = "bob666666";
const hash = bcrypt.hashSync(password, 10);
const password2 = "dod666666";
const hash2 = bcrypt.hashSync(password2, 10);

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("movies")
    .del()
    .then(() => {
      return knex("users").del();
    })
    .then(() => {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "bob",
          email: "u.sniedze@gmail.com",
          password: hash,
        },
        {
          username: "dod",
          email: "pu@mail.com",
          password: hash2,
        },
      ]);
    })
    .then((userId) => {
      return knex("movies").insert([
        {
          user_id: userId[0],
          title: "Life Is Beautiful",
          year: "1997",
          watched: false,
        },
      ]);
    });
};

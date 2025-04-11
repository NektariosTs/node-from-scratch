//se periptwhs pou to porject mas htan megalo edw sta srvices tha mporouse na ulopoioume thn logikh pou theloume
//gia na mhn grafoume sto controller polles grammes kwdika kai na einai oso pio aplos kai katanohtos ginetai

const User = require("../models/user.model");


function findAll() {
  const result = User.find();
  return result;
}

function findOne(username) {
  const result = User.findOne({ username: username });
  return result;
}

module.exports = { findAll, findOne }

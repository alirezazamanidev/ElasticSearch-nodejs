const { Client } = require("es7");
const { ELASTIC_USERNAME, ELASTIC_PASSWORD, ELASTIC_HOST } = process.env;

const elasticClient = new Client({
  node: ELASTIC_HOST,
  auth:{
    username:ELASTIC_USERNAME,
    passwordL:ELASTIC_PASSWORD
  }
});

module.exports= {
    elasticClient
}
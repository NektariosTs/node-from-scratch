const m2s = require("mongoose-to-swagger");//metatrepei to model se json kai mas epitrepei na to emfanisoume st swagger
const User = require("./models/user.model");

exports.options = {
  "components": {
    "schemas": {
      User: m2s(User)
    }
  },
  "openapi": "3.1.0",
  "info": {
    "version": "1.0.0",
    "title": "Users and Products CRUD API",
    "description": "An application for creating users and choosing product",
    "contact": {
      "name": "API support",
      "url": "https://aueb.gr",
      "email": "support@example.com"
    }
  }
}
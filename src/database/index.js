const Sequelize = require('sequelize')
const dbconfig = require('./../config/database')

const User =  require('./../models/UserModel')
const Address =  require('./../models/AddressModel')
const Tech = require('./../models/Tech')

const connection = new Sequelize(dbconfig)

User.init(connection)
Address.init(connection)
Tech.init(connection)

User.associate(connection.models)
Address.associate(connection.models)
Tech.associate(connection.models)

module.exports = connection
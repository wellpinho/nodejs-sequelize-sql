const { Op } = require("sequelize")
const User = require("../models/UserModel")

module.exports = {
  async show(req, res) {
    //snontrar todos usuers que tenhma email que terminam com outlook.com
    //desses sers tdos que moram na rua brasilia
    // desses que tenham as techs nodejs opcional

    const users = await User.findAll({
      attributes: [ 'name', 'email' ],
      where: {
        email: {
          [Op.iLike]: '%@outlook.com'
        }
      },
      include: [
        { association: 'addresses', 
          where: { 
            street: 'rua brasilia'
          }
        },
        { association: 'techs', 
          required: false,
          where: { 
            name: {
              [Op.iLike]: 'NodeJS'
            }
          }
        }
      ]
    })

    return res.json(users)
  }
}
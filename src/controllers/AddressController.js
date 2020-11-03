const User = require('../models/UserModel')
const Address = require('./../models/AddressModel')

module.exports = {

  async index(req, res) {
    const { user_id } = req.params
    const user = await User.findByPk(user_id, {
      include: { association: 'addresses'}
    })

    if (!user) {
      return res.status(400).json({
        message: 'nenhum user cadastrado'
      })
    }

    return res.json(user)
  },

  async store(req, res) {
    const { user_id } = req.params
    const { zipcode, street, number } = req.body

    const user = await User.findByPk(user_id)

    if (!user) {
      return res.status(400).json({
        message: 'nenhum user cadastrado'
      })
    }

    const address = await Address.create({ zipcode, street, number, user_id })
    return res.json(address)
  }
}
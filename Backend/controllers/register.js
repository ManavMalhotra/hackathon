const bcrypt = require('bcrypt')

const registerRouter = require('express').Router()
const User = require('../model/user')

registerRouter.post('/', async (req,res)=>{

	const {name,username,password} = req.body;

	const existingUser = await User.findOne({ username })

	if (existingUser) {
		return res.status(400).json({
      	error: 'username must be unique'
    })
  }

	const saltRounds = 10
	const passwordHash = await bcrypt.hash(password,saltRounds)

	const user = new User({
		username,
		name,
		passwordHash
	})

	const savedUser = await user.save()


	res.status(201).json(savedUser)

})

module.exports = registerRouter
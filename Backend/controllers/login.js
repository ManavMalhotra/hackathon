const loginRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../model/user')


loginRouter.post('/',async (req,res)=>{
	const {username,password} = req.body
	const user = await User.findOne({username})
	const passwordCorrect = user === null ? false : bcrypt.compare(password,user.passwordHash)

	if (!(user || passwordCorrect)) {
		return res.status(401).json({
			error: "invalid username or password"
		})
	}

	const userToken = {
		username: user.username,
		id: user._id
	}

	const token = jwt.sign(userToken,process.env.SECRET)

	res
	.status(200)
	.send({
		token,
		username:user.username,
		name:user.name
		})

})

module.exports = loginRouter
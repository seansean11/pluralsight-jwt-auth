var _ = require('lodash');
var fs = require('fs');
var jwt  = require('jwt-simple');
var nodemailer = require('nodemailer');
var User = require('../models/User.js');
var config = require('./config.js');

var model = {
	verifyUrl: 'http://localhost:3000/auth/verifyEmail?token=',
	title: 'psJwt',
	subTitle: 'Thanks for signing up!',
	body: 'Please verify your email address by clicking the button below'
};

exports.send = function(email) {
	var payload = {
		sub: email
	};

	var token = jwt.encode(payload, config.EMAIL_SECRET);
	var path = './views/emailVerification.html';

	fs.readFile(path, 'utf8', function(err, data) {
		var template = _.template(data);
		model.verifyUrl += token;

		sendEmail(template(model), email);
	});
};

exports.handler = function(req, res) {
	var token = req.query.token;
	var payload = jwt.decode(token, config.EMAIL_SECRET);
	var email = payload.sub;

	if(!email) return handleError(res);

	User.findOne({email: email}, function(err, foundUser) {
		if(err) return res.status(500);
		if(!foundUser) return handleError(res);

		if(!foundUser.active)
			foundUser.active = true;

		foundUser.save(function(err) {
			if(err) return res.status(500);
			return res.redirect(config.APP_URL);
		});
	});
};

function sendEmail(htmlTemplate, email) {
	var transporter = nodemailer.createTransport({
	    host: 'smtp.gmail.com',
	    port: 465,
	    secure: true,
	    auth: {
	        user: 'jwt.tutorial@gmail.com',
	        pass: config.SMTP_PASS
	    }
	});

	transporter.sendMail({
		from: '"JWT Tut" <jwt.tutorial@gmail.com>',
		to: email,
		subject: 'JWT Tut Account Verification',
		html: htmlTemplate
	}, function(err, info) {
		if(err) return res.status(500, err);
		console.log('Message sent: ' + info.response);
	});
}

function handleError(res) {
	return res.status(401).send({
		message: 'Authentication failed, unable to verify email'
	});
}

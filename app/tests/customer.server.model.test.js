'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Customer = mongoose.model('Customer');

/**
 * Globals
 */
var user, customer;

/**
 * Unit tests
 */
describe('Customer Model Unit Tests:', function() {
	beforeEach(function(done) {
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password'
		});

		user.save(function() { 
			customer = new Customer({
				firstName: 'Customer Name',
				surname: 'Customer Name',
				suburb: 'Customer Name',
				country: 'Customer Name',
				industry: 'Customer Name',
				email: 'Customer Name',
				phone: 'Customer Name',
				referred: true,
				channel: 'Customer Name',
				user: user
			});

			done();
		});
	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return customer.save(function(err) {
				should.not.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) { 
		Customer.remove().exec();
		User.remove().exec();

		done();
	});
});
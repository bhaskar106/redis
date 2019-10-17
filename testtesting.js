var assert = require("assert");
var controller = require('./test123');

describe('set', function () {
    describe('addvalue', function () {
        it('should add the string if the command is correct', function (done) {
		controller.setMethod("sanjay", "varma", function(result){
			assert.equal(result, "OK");
			done();
		});
        });
    });
});

describe('get', function () {
    describe('getvalue', function () {
        it('should get the string if the command is correct', function (done) {
		controller.getMethod("sanjay", function(result){
			assert.equal(result, "varma");
			done();
		});
        });
    });
});

describe('hmset', function () {
    describe('addobject', function () {
        it('should add the object if the command is correct', function (done) {
		controller.hmMethod("student","Id","1","Name","sanjay","Department","cse", function(result){
			assert.equal(result, "OK");
			done();
		});
        });
    });
});

describe('hget', function () {
    describe('getobject', function () {
        it('should get the object if the command is correct', function (done) {
		controller.hgetMethod("student","Department" , function(result){
			assert.equal(result, "cse");
			done();
		});
        });
    });
});

describe('hgetall', function () {
    describe('getobject', function () {
        it('should get the object if the command is correct', function (done) {
		controller.hgetallMethod("student", function(result){
			assert.equal(result["Id"], '1');
			assert.equal(result["Name"], 'sanjay');
			assert.equal(result["Department"], 'cse');
//			assert.equal(result, "{Id: '1', Name: 'sanjay', Department: 'cse'}");
                       
			done();     
		});
        });
    });
});

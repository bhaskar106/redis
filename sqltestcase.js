var assert = require("assert");
var sqlconnection = require('./sql1');
var createtable = require('./createtable');
var tablevalues = require('./tablevalues');
var updatevalues = require('./updatevalue');
var deletevalue = require('./deletevalue') 

describe('create', function () {
   describe('connection', function () {
      it('should connect to the sql server and create database', function (done) {
	 sqlconnection.create("CREATE DATABASE sanju", function(result){
	 assert.equal(JSON.stringify(result), '{"fieldCount":0,"affectedRows":1,"insertId":0,"serverStatus":2,"warningCount":0,"message":"","protocol41":true,"changedRows":0}');
	 done();
        });
    });
});
});

describe('table', function () {
   describe('connection', function () {
      it('should create table in the sql database', function (done) {
	 createtable.table("CREATE TABLE students (name VARCHAR(50), address VARCHAR(100), phone VARCHAR(16))", function(result){
	 assert.equal(JSON.stringify(result), '{"fieldCount":0,"affectedRows":0,"insertId":0,"serverStatus":2,"warningCount":0,"message":"","protocol41":true,"changedRows":0}');
	 done();
        });
    });
});
});

describe('value', function () {
   describe('connection', function () {
      it('should Add table values in the database table', function (done) {
	 tablevalues.value("INSERT INTO students (name ,address , phone ) VALUES ('sanjay', 'office securifi' , '1234567890')", function(result){
	 assert.equal(JSON.stringify(result), '{"fieldCount":0,"affectedRows":1,"insertId":0,"serverStatus":2,"warningCount":0,"message":"","protocol41":true,"changedRows":0}');
	 done();
        });
    });
});
});

describe('update', function () {
   describe('connection', function () {
      it('should update table values in the database table', function (done) {
	 updatevalues.update("UPDATE students SET address = 'securifi' WHERE name = 'sanjay'", function(result){
	 assert.equal(JSON.stringify(result), '{"fieldCount":0,"affectedRows":1,"insertId":0,"serverStatus":34,"warningCount":0,"message":"(Rows matched: 1  Changed: 1  Warnings: 0","protocol41":true,"changedRows":1}');
	 done();
        });
    });
});
});

describe('deletev', function () {
   describe('connection', function () {
      it('should delete the values in the database table', function (done) {
	 deletevalue.deletev("DELETE FROM students WHERE address = 'securifi'", function(result){
	 assert.equal(JSON.stringify(result), '{"fieldCount":0,"affectedRows":1,"insertId":0,"serverStatus":34,"warningCount":0,"message":"","protocol41":true,"changedRows":0}');
	 done();
        });
    });
});
});
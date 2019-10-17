var redis = require('redis');
var redisClient = redis.createClient({host : 'localhost', port : 6379});
var exports = module.exports = {};

module.exports = SetController();
function SetController(){
function setMethod(key, value, callback){
redisClient.set(key,value,function(err,reply) {
 console.log(reply);
 callback(reply);
});
}
function getMethod(key, callback){
redisClient.get(key, function(err, reply){
	console.log(reply);
	callback(reply);
});
}
function hmMethod(key,field,value,field,value,field,value, callback){
redisClient.hmset(key,field,value,field,value,field,value,function(err,obj) {
        console.log(obj);
	callback(obj);
});
}
function hgetMethod(key,feild, callback){
redisClient.hget(key,feild, function(err,reply) {
        console.log(reply);
	callback(reply);
});
}
function hgetallMethod(key, callback){
redisClient.hgetall(key,function(err,reply) {
        console.log(reply);
	callback(reply);
});
}
return{setMethod, getMethod, hmMethod , hgetallMethod , hgetMethod}
}





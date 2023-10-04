//javascript function

//function greetings() (
//    return "hello";
)
//const greetings = function()
//console.log (greetings());







//iife (immediately invoked function expression)

(function(){

})();

(function() {
    var counter = 0;

    function add(a, b) {
        return a + b;
    }

    console.log(add(10,20)); // 30
}());

console.log(output);

//folback function

function createdgreeting(name, callback){
    callback(greeting);
}
 
createdgreeting("")
// Write code below this line
var myGlobalVariable;
    myGlobalVariable = 10;
function function1( ) {
    notGlobalVaribale = 5;
} 

// Write code above this line
function function2() {
    var result = "";
    if (typeof myGlobalVariable != "undenifined") {
        result += "myGlobalVariable: " + myGlobalVariable;
    }
    if (typeof notGlobalVaribale != "undefined") {
        result += " notGlobalVariable: " + notGlobalVaribale;
    }

    console.log(result);
}
function1()
function2()
module.exports = {
    function1,
    function2
};
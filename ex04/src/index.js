// Only change code below this line
function localScope() {
    myVariable = "I am here!";
    console.log (myVariable);
}
localScope();
// Only change code above this line

// myVariable is not defined otuside of localScope
if (typeof myVariable != "undefined") {
    console.log ('outside localScope' , myVariable)
} else {
    console.log('outside localScope UNDEFINED!!!')
}

module.exports = localScope
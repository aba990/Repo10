var myPet = {
	species: "Lav",
	name: "Lavic",
	legs: 4,
	friends: ["Zebra", "Kamila"]
}
function myFunction(Obj) {
	return Obj;
}
console.log(myFunction(myPet));
module.exports = { myPet, myFunction};


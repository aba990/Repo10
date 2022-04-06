var myPet = {
	species: "Lav",
	name: "Lavic",
	legs: 4,
	friends: ["zebra", "kamila"]
}
function myFunction(Obj) {
	return Obj;
};
console.log(myFunction(myPet));
module.exports = { myPet, myFunction};


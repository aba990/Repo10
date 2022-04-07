var lion = {
	name: "Simba",
	legs: 4,
	tails: 1
	
};	
function myFunction(dva, tri) {
      lion[dva] = tri;
	  return lion;
}


console.log(myFunction("roar", "roar-roar"));
module.exports = myFunction;

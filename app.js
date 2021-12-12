//function to get random number3
function getRandomNumber3() {
	return Math.floor(Math.random() * 10)
}

//get the difference between dates
function getDifference(date1, date2) {
	var difference = date1.getTime() - date2.getTime()
	return Math.floor(difference / (1000 * 60 * 60 * 24))
}
var date1 = new Date(Date.now())
var date2 = new Date(Date.now() + 20)
console.log(getDifference(date1, date2))

//inverse an array
function inverseArray(array) {
	var newArray = []
	for (var i = array.length - 1; i >= 0; i--) {
		newArray.push(array[i])
	}
	return newArray
}
//arrow function to get the sum of an array
const sum = (array) => {
	return array.reduce((a, b) => a + b, 0)
}
//arrow function for recusrion
const factorial = (n) => {
	if (n === 0) {
		return 1
	} else {
		return n * factorial(n - 1)
	}
}

// 自調用函數，共用生存域
var Counter = (function() {
	var privateCounter = 0;
	function changeBy(val) {
		privateCounter += val;
	}
	return {
		increment: function () {
			changeBy(1);
		},
		decrement: function() {
			changeBy(-1);
		},
		value: function() {
			return privateCounter;
		}
	};
})();

// console.log(privateCounter);
console.log(Counter.value());
Counter.increment();
Counter.increment();
console.log(Counter.value());
Counter.decrement();
console.log(Counter.value());




var makeCounter = function() {
	var privateCounter = 0;
	function changeBy(val) {
		privateCounter += val;
	}
	return {
		increment: function() {
			changeBy(1);
		},
		decrement: function() {
			changeBy(-1);
		},
		value: function() {
			return privateCounter;
		}
	}
}

var Counter1 = makeCounter();
var Counter2 = makeCounter();
console.log(Counter1.value());
Counter1.increment();
Counter1.increment();
console.log(Counter1.value());
Counter1.decrement();
console.log(Counter1.value());
console.log(Counter2.value());
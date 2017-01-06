for (var i = 0; i < 5; i++) {
	setTimeout(function() {
		console.log(i);
	}, 1000);
} // 全印5，迴圈都跑完了你才印出來...



for (var i = 0; i < 5; i++) {
	setTimeout((function(i) { // 就會把生存環境記下來
		return function() {
			console.log(i);
		}
	})(i), 1000);
}
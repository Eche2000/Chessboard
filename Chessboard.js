function chessboard(n) {
	let result = '';

	// loop for the rows
	for (let i = 0; i <= n; i++) {
		//for loop for the columns
		for (let j = 0; j <= n; j++) {
			//checking for odd numbers
			if (i % 2 == 0) {
				if (j % 2 == 0) {
					result += ' ';
				} else {
					result += '#';
				}

				//checking for even numbers
			} else {
				if (j % 2 == 0) {
					result += '#';
				} else {
					result += ' ';
				}
			}
		}
		result += '\n';
	}
	return result;
}

console.log(chessboard(8));
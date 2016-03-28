$(document).ready(function() {

	var user = $("#x").is(":checked") ? "X" : "O";
	var computer = $("#x").is(":checked") ? "O" : "X";
	var move = 1;
	var play = true;

	var conditionArray = [];
	var boxArray = ["1","2","3","4","5","6","7","8","9"];

	$("#reset").on("click", function () {
		move = 1;
		$(".box").text("");
		$(".box").css({
			"background": "#6BAAD6",
			"border-color": "#000"
		});
		$('#result').text("");
		return;
	});

	$("#o").on("click", function () {
		user = "O";
		computer = "X";
		compPick();
	});

	$(".box").on("click", function() {
		// if box is empty and in game
		if ($(this).text() === "" && play) {
			//check if p1(X) or p2(O)
			$(this).append(user);
			move += 1;
			setTimeout(compPick, 500);
			move += 1;

			if (checkForWinner() != -1 && checkForWinner() != "") {
				if (checkForWinner() == user) {
					$(".box").css("background", "#5FCF80");
					$("#result").text("You Win!!!");
					return;
				} else {
					$(".box").css("background", "#E94333");
					$("#result").text("The Computer Wins!!!");
					return;
				}
				play = false;
			}

			if (move > 9 && checkForWinner() == -1) {
				$("#result").text("It's a draw!!!");
				return;
			}
		}
	});


	function checkForWinner() {

		var space1 = $("#1").text();
		var space2 = $("#2").text();
		var space3 = $("#3").text();
		var space4 = $("#4").text();
		var space5 = $("#5").text();
		var space6 = $("#6").text();
		var space7 = $("#7").text();
		var space8 = $("#8").text();
		var space9 = $("#9").text();

		// checking rows (horiz)
		if ((space1==space2) && (space2==space3)) { return space3;}
		else if ((space4==space5) && (space5==space6)) { return space6; }
		else if ((space7==space8) && (space8==space9)) { return space9; }
		// checking columns (vert)
		else if ((space1==space4) && (space4==space7)) { return space7; }
		else if ((space2==space5) && (space5==space8)) { return space8; }
		else if ((space3==space6) && (space6==space9)) { return space9; }
		// checking diagonals
		else if ((space1==space5) && (space5==space9)) { return space9; } 
		else if ((space3==space5) && (space5==space7)) { return space7; }
		// no winner
		return -1;
	}

	function compPick() {

		var space1 = $("#1"),
		    space2 = $("#2"),
		    space3 = $("#3"),
		    space4 = $("#4"),
		    space5 = $("#5"),
		    space6 = $("#6"),
		    space7 = $("#7"),
		    space8 = $("#8"),
		    space9 = $("#9");


		if (space1.text() == computer && space2.text() == computer) {
			if (space3.text().length == 0) {
				space3.text(computer);
				checkForWinner();
				return;
			}
		} 
		if (space1.text() == computer && space3.text() == computer) {
			if (space2.text().length == 0) {
				space2.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space2.text() == computer && space3.text() == computer) {
			if (space1.text().length == 0) {
				space1.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space4.text() == computer && space5.text() == computer) {
			if (space6.text().length == 0) {
				space6.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space4.text() == computer && space6.text() == computer) {
			if (space5.text().length == 0) {
				space5.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space5.text() == computer && space6.text() == computer) {
			if (space4.text().length == 0) {
				space4.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space7.text() == computer && space8.text() == computer) {
			if (space9.text().length == 0) {
				space9.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space7.text() == computer && space9.text() == computer) {
			if (space8.text().length == 0) {
				space8.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space8.text() == computer && space9.text() == computer) {
			if (space7.text().length == 0) {
				space7.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space1.text() == computer && space4.text() == computer) {
			if (space7.text().length == 0) {
				space7.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space1.text() == computer && space7.text() == computer) {
			if (space4.text().length == 0) {
				space4.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space4.text() == computer && space7.text() == computer) {
			if (space1.text().length == 0) {
				space1.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space2.text() == computer && space5.text() == computer) {
			if (space8.text().length == 0) {
				space8.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space2.text() == computer && space8.text() == computer) {
			if (space5.text().length == 0) {
				space5.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space5.text() == computer && space8.text() == computer) {
			if (space2.text().length == 0) {
				space2.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space3.text() == computer && space6.text() == computer) {
			if (space9.text().length == 0) {
				space9.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space3.text() == computer && space9.text() == computer) {
			if (space6.text().length == 0) {
				space6.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space6.text() == computer && space9.text() == computer) {
			if (space3.text().length == 0) {
				space3.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space1.text() == computer && space5.text() == computer) {
			if (space9.text().length == 0) {
				space9.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space1.text() == computer && space9.text() == computer) {
			if (space5.text().length == 0) {
				space5.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space3.text() == computer && space5.text() == computer) {
			if (space7.text().length == 0) {
				space7.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space3.text() == computer && space7.text() == computer) {
			if (space5.text().length == 0) {
				space5.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space5.text() == computer && space7.text() == computer) {
			if (space3.text().length == 0) {
				space3.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space4.text() == computer && space5.text() == computer) {
			if (space6.text().length == 0) {
				space6.text(computer);
				checkForWinner();
				return;
			}
		} 




		if (space1.text() == user && space2.text() == user) {
			if (space3.text().length == 0) {
				space3.text(computer);
				checkForWinner();
				return;
			}
		} 
		if (space1.text() == user && space3.text() == user) {
			if (space2.text().length == 0) {
				space2.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space2.text() == user && space3.text() == user) {
			if (space1.text().length == 0) {
				space1.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space4.text() == user && space5.text() == user) {
			if (space6.text().length == 0) {
				space6.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space4.text() == user && space6.text() == user) {
			if (space5.text().length == 0) {
				space5.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space5.text() == user && space6.text() == user) {
			if (space4.text().length == 0) {
				space4.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space7.text() == user && space8.text() == user) {
			if (space9.text().length == 0) {
				space9.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space7.text() == user && space9.text() == user) {
			if (space8.text().length == 0) {
				space8.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space8.text() == user && space9.text() == user) {
			if (space7.text().length == 0) {
				space7.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space1.text() == user && space4.text() == user) {
			if (space7.text().length == 0) {
				space7.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space1.text() == user && space7.text() == user) {
			if (space4.text().length == 0) {
				space4.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space4.text() == user && space7.text() == user) {
			if (space1.text().length == 0) {
				space1.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space2.text() == user && space5.text() == user) {
			if (space8.text().length == 0) {
				space8.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space2.text() == user && space8.text() == user) {
			if (space5.text().length == 0) {
				space5.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space5.text() == user && space8.text() == user) {
			if (space2.text().length == 0) {
				space2.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space3.text() == user && space6.text() == user) {
			if (space9.text().length == 0) {
				space9.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space3.text() == user && space9.text() == user) {
			if (space6.text().length == 0) {
				space6.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space6.text() == user && space9.text() == user) {
			if (space3.text().length == 0) {
				space3.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space1.text() == user && space5.text() == user) {
			if (space9.text().length == 0) {
				space9.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space1.text() == user && space9.text() == user) {
			if (space5.text().length == 0) {
				space5.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space3.text() == user && space5.text() == user) {
			if (space7.text().length == 0) {
				space7.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space3.text() == user && space7.text() == user) {
			if (space5.text().length == 0) {
				space5.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space5.text() == user && space7.text() == user) {
			if (space3.text().length == 0) {
				space3.text(computer);
				checkForWinner();
				return;
			}
		}
		if (space4.text() == user && space5.text() == user) {
			if (space6.text().length == 0) {
				space6.text(computer);
				checkForWinner();
				return;
			}
		} 
		else {
			if (space5.text().length == 0) {
				space5.text(computer);
				checkForWinner();
				return;
			}
			if (space3.text().length == 0) {
				space3.text(computer);
				checkForWinner();
				return;
			}
			if (space1.text().length == 0) {
				space1.text(computer);
				checkForWinner();
				return;
			}
			if (space4.text().length == 0) {
				space4.text(computer);
				checkForWinner();
				return;
			}
			if (space6.text().length == 0) {
				space6.text(computer);
				checkForWinner();
				return;
			}
			if (space7.text().length == 0) {
				space7.text(computer);
				checkForWinner();
				return;
			}
			if (space8.text().length == 0) {
				space8.text(computer);
				checkForWinner();
				return;
			}
			if (space9.text().length == 0) {
				space9.text(computer);
				checkForWinner();
				return;
			}
		}
	}  // func compPick()

});



  
  var start = false,
      switchOn = false,
      strict = false,
      userTurn = false,  // user go
      level = "--",
      gameArray = [],
      colorDelay = 400,  // lights
      userWaitTimer = 1000,  // 
      errWait = 1500,  // after loss
      userTimerCtrl,
      userArray = [];
     
  // game object
  var Simon = {

    //initializes game
    init: function () {
      level = "--";
      gameArray = [];
      userArray = [];
      strict = false;
      start = false;
      $("#power-switch").removeClass('active');
    },
    
    // plays beeps and buzzes
    playSound: function(sound) {
      // id passed into function
       var a = document.getElementById(sound);
       //jQuery method
       a.play();
    },
    
    //returns number 0-3
    getRandomNum: function () {
      return Math.floor(Math.random() * 4);
    },
    
    // takes level and adds zero pad if necessary
    lvlPad: function (level) {
      return (level <= 9) ? "0" + level : level;
    },
    
    // padded level, displayed to screen
    displayLevel: function (level) {
      $("#display").text(this.lvlPad(level));
    },

    // check if current computer array matches current user array
    compareArrays: function (game, user) {
      // check both are same length, don't want success if time runs out
      if (game.length !== user.length) return false;

      // must iterate and check for equality
      for (var i = 0; i < game.length; i++) {
        if (game[i] !== user[i]) return false;
      }

      return true;
    },

    // adds new number that will match color
    addNumToGameArray: function () {
      gameArray.push(this.getRandomNum());
    },

    // plays the compArray sequence of numbers
    showColorSeq: function (index, max) {
      if (!start) return;
      // max is current level/last index
      if (index >= max) return;

      switch (gameArray[index]) {
        case 0:
          $('#green').addClass("active");
          break;

        case 1: 
          $("#red").addClass("active");
          break;

        case 2: 
          $("#yellow").addClass("active");
          break;

        case 3:
          $("#blue").addClass("active");
          break;
        //no default needed
      };

      // play sound for each index 
      this.playSound("beep" + gameArray[index]);

      // lights out on all colors
      setTimeout(function () {
        $(".color-btn").removeClass("active");

        // short pause before recursion
        setTimeout(function () {
          Simon.showColorSeq(index+1, max);
        }, colorDelay);
      }, colorDelay);
    },

    gameOn: function (play) {
      userTurn = false;
      if (!start) return;

      this.displayLevel(level);
      if (play) this.addNumToGameArray();

      this.showColorSeq(0, gameArray.length);

      // new color added and shown to user
      setTimeout(function () {
        // users turn to guess
        userTurn = true;
        userArray = [];

        userTimerCtrl = setTimeout(function () {
          
          if (Simon.compareArrays(gameArray, userArray)) {  // check arrays for perfect match
            //success, increment level, recursion
            level++;
            Simon.gameOn(true);
          } else {
            //fail
            Simon.playSound("buzzer");
            Simon.displayLevel("XX");

            setTimeout(function () {
              // repeat sequence if on normal mode
              var newGame = false;

              if (strict) {
                // new game if strict mode
                level = "0";
                userArray = [];
                gameArray = [];
                newGame = true;
              }

              // either true or false depending on mode
              Simon.gameOn(newGame)
            }, errWait); // time after a loss to start new turn/game
          }
        }, userWaitTimer*(gameArray.length+1));  // user time to play before checking again
      }, (colorDelay*2)*gameArray.length);  // waits for showColorSeq to finish, extra time for user to make first choice
    }

  }; // Simon object


$(document).ready(function() {

  $("#power-switch").click(function () {
    switchOn = !switchOn;
    $(this).toggleClass("active");
    level = "--";
    $("#display").text(level);
    $("#display").toggleClass("active");
    if (!switchOn) Simon.init();
  });

  $("#strict-btn").click(function () {
    strict = !strict;

    $("#strict-light").toggleClass("active");
  });

  // on start click with switch on, 
  // reset everything and begin game
  $("#start").click(function () {
    if (!switchOn) return;

    start = !start;

    if (start) {
      level = 0;
      userArray = [];
      gameArray = [];
      Simon.gameOn(true);
    } else {
      Simon.init();
    }
    Simon.displayLevel(level);
  });


  // ==============
  //  Color Buttons
  // ==============

  // Every clicked color pushes choice into 
  // userArray to be compared with gameArray.
  // Clicks only count when it's the users turn,
  // if not, no buttons are pushed, nor colors 
  // pushed into userArray.

  $("#green").mousedown(function () {
    if (userTurn) {
      $(this).toggleClass("active");
      userArray.push(0);
      Simon.playSound("beep0");
    }
  }).mouseup(function () {
    if (userTurn) {
      $(this).removeClass("active");
    }
  });

  $("#red").mousedown(function () {
    if (userTurn) {
      $(this).toggleClass("active");
      userArray.push(1);
      Simon.playSound("beep1");
    }
  }).mouseup(function () {
    if (userTurn) {
      $(this).removeClass("active");
    }
  });

  $("#yellow").mousedown(function () {
    if (userTurn) {
      $(this).toggleClass("active");
      userArray.push(2);
      Simon.playSound("beep2");
    }
  }).mouseup(function () {
    if (userTurn) {
      $(this).removeClass("active");
    }
  });

  $("#blue").mousedown(function () {
    if (userTurn) {
      $(this).toggleClass("active");
      userArray.push(3);
      Simon.playSound("beep3");
    }
  }).mouseup(function () {
    if (userTurn) {
      $(this).removeClass("active");
    }
  });

}); // doc.ready






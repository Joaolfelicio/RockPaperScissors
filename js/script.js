$(function() {
  let userType;
  let typePc;

  $("#userChoice img")
    .eq(0)
    .on("click", function() {
      $("#userGame img")
        .eq(0)
        .css("display", "block");
      $("#userGame img")
        .eq(1)
        .css("display", "none");
      $("#userGame img")
        .eq(2)
        .css("display", "none");

      reset();

      userType = 0;
    });

  $("#userChoice img")
    .eq(1)
    .on("click", function() {
      $("#userGame img")
        .eq(0)
        .css("display", "none");
      $("#userGame img")
        .eq(1)
        .css("display", "block");
      $("#userGame img")
        .eq(2)
        .css("display", "none");

      reset();

      userType = 1;
    });

  $("#userChoice img")
    .eq(2)
    .on("click", function() {
      $("#userGame img")
        .eq(0)
        .css("display", "none");
      $("#userGame img")
        .eq(1)
        .css("display", "none");
      $("#userGame img")
        .eq(2)
        .css("display", "block");

      reset();

      userType = 2;
    });

  $("#playGame").on("click", play);

  function play() {
    typePc = Math.floor(Math.random() * 3);

    if (typePc == 0) {
      $("#computerGame img")
        .eq(0)
        .css("display", "block");
      $("#computerGame img")
        .eq(1)
        .css("display", "none");
      $("#computerGame img")
        .eq(2)
        .css("display", "none");
    } else if (typePc == 1) {
      $("#computerGame img")
        .eq(0)
        .css("display", "none");
      $("#computerGame img")
        .eq(1)
        .css("display", "block");
      $("#computerGame img")
        .eq(2)
        .css("display", "none");
    } else {
      $("#computerGame img")
        .eq(0)
        .css("display", "none");
      $("#computerGame img")
        .eq(1)
        .css("display", "none");
      $("#computerGame img")
        .eq(2)
        .css("display", "block");
    }

    $("#playGame").css("display", "none");
    $("#playAgain").css("display", "block");

    if (userType == 0) {
      if (typePc == 0) {
        draw();
      } else if (typePc == 1) {
        lose();
      } else {
        win();
      }
    } else if (userType == 1) {
      if (typePc == 0) {
        win();
      } else if (typePc == 1) {
        draw();
      } else {
        lose();
      }
    } else {
      if (typePc == 0) {
        lose();
      } else if (typePc == 1) {
        win();
      } else {
        draw();
      }
    }
  }

  $("#playAgain").on("click", play);

  //                         FUNCTIONS
  function draw() {
    $("#resultGame")
      .text("DRAW")
      .css({
        display: "block",
        "background-color": "grey"
      });
  }

  function win() {
    $("#resultGame")
      .text("WINNER")
      .css({
        display: "block",
        "background-color": "green"
      });
  }

  function lose() {
    $("#resultGame")
      .text("LOSER")
      .css({
        display: "block",
        "background-color": "red"
      });
  }

  function reset() {
    $("#playGame").css("display", "block");
    $("#playAgain").css("display", "none");
    $("#resultGame").css("display", "none");
    $("#computerGame img")
      .eq(0)
      .css("display", "none");
    $("#computerGame img")
      .eq(1)
      .css("display", "none");
    $("#computerGame img")
      .eq(2)
      .css("display", "none");
  }
});

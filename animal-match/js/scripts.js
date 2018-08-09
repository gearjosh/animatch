$(document).ready(function() {
  $("button#uhhRadio").click(function(event) {
    event.preventDefault();
    var vBee = 0
    var vPossum = 0
    var vRaccoon = 0
    var vFox = 0
    var vButton = 0
    var vFat = 0
    var trash = $("input:radio[name=first]:checked").val();
    console.log(trash);
    var lazy = $("input:radio[name=second]:checked").val();
    console.log(lazy);
    var bee = $("input:radio[name=third]:checked").val();
    console.log(bee);
    var scream = $("input:radio[name=fourth]:checked").val();
    console.log(scream);


    if (trash === "trashYes") {
      vRaccoon += 1
      vPossum += 1
    }

    if (lazy === "lazyYes") {
      vRaccoon += 1
    }

    if (bee === "beeYes") {
      vBee += 1000
    }

    if (scream === "screamYes") {
      vFox += 1
      vPossum += 1
    }

    if (vBee > vPossum && vBee > vRaccoon && vBee > vFox) {
      alert("bee!");
    }

    if (vRaccoon > vPossum && vRaccoon > vBee && vRaccoon > vFox) {
      alert("raccoon!");
    }

    if (vPossum > vBee && vPossum > vRaccoon && vPossum > vFox) {
      alert("possum!");
    }

    if (vFox > vPossum && vFox > vRaccoon && vFox > vBee) {
      alert("fox!");
    }


    console.log(vRaccoon);
    console.log(vPossum);
    console.log(vBee);
    console.log(vFox);


    // if (bee === "beeYes"){
    //   alert("bee!");
    // }
    //
    // else if (scream === "screamYes" && "trashYes" || "lazyYes"){
    //   alert("Fox");
    // }
    //
    // else if (scream === "screamYes" && "trashYes"){
    //   alert("AAAAA");
    // }
    //
    //
    // else if (trash === "trashYes") {
    //   alert("trash panda!");
    // }


    $('input[type="radio"]').prop('checked', false);

  });

  // document.getElementByName("first").checked = false;
  // // document.getElementById("Choose_No").checked = false;
  // // document.getElementById("Choose_Yes").checked = false;
  // // document.getElementById("Choose_No").checked = false;
});

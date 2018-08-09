$(document).ready(function() {

  // $("button#ageClick").click(function(event) {
  //   event.preventDefault();
  //   var age = parseInt($("#ageInput").val());
  //   console.log(age);
  //
  //   if (age >= 1000) {
  //     $('.forKids').hide();
  //     $('.forAdults').show();
  //     alert("Cool.");
  //   } else if (age < 18) {
  //     $('.forAdults').hide();
  //     $('.forKids').show();
  //   } else {
  //     $('.forKids').hide();
  //     $('.forAdults').show();
  //   }
  // });
  $("button#uhhRadio").click(function(event) {
    event.preventDefault();
    var first = parseInt($("input:radio[name=first]:checked").val());
    console.log(first);
  });
});

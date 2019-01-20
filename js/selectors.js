// declare your functions here...

$(document).ready(function() {
  paragraphSelector();
  lastImageSelector();
  ninjaBabySelector();
  divSelector();
  firstListItem();
});

function paragraphSelector() {
  $("p");
}

function lastImageSelector() {
  $("img:last")
}

function ninjaBabySelector() {
  $("#baby-ninja");
}

function divSelector() {
  $(".pics");
}

function firstListItem() {
  $("#pic-list ul li:first-child")
}

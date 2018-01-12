$(document).ready(function(){

$("form#triangle").submit(function(event) {
  var side1 = parseInt($("input#length1").val());
  var side2 = parseInt($("input#length2").val());
  var side3 = parseInt($("input#length3").val());

  if (equilateral(side1, side2, side3)) {
      $(".result1").text("This is an equilateral triangle");
    }
  else if(isosceles(side1, side2, side3)) {
    $(".result1").text("This is an isosceles triangle");
    }
  else if (scalene(side1, side2, side3)) {
    $(".result1").text("This is an scalene triangle");
    }
  else {
    $(".result1").text("This is not a triangle :-(");
  }

  event.preventDefault();

});

});

function equilateral (s1, s2, s3) {
  if (s1 === s2 && s2 === s3) {
    return true;
  } else {
    return false;
  }
};

function isosceles (s1, s2, s3) {
  if (s1 === s2 || s1 === s3 || s2 === s3) {
    return true;
  } else {
    return false;
  }
};

function scalene (s1, s2, s3) {
  if ((s1 != s2 && s1 != s3 && s2 != s3 ) && (s1 + s2 >= s3 && s2 + s3 >= s1 && s3 + s1 >= s2)) {
    return true;
  } else {
    return false;
  }
};

function nottri (s1, s2, s3) {
  if (s1 + s2 >= s3 && s2 + s3 >= s1 && s3 + s1 >= s2) {
    return true;
  } else {
    return false;
  }
};

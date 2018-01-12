$(document).ready(function(){

$("form#triangle").submit(function(event) {
  var side1 = parseInt($("input#length1").val());
  var side2 = parseInt($("input#length2").val());
  console.log(side2);
  var side3 = parseInt($("input#length3").val());
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
  if (s1 != s2 && s1 != s3 && s2 != s3) {
    return true;
  } else {
    return false;
  }
};

function nottri (s1, s2, s3) {
  if (s1 + s2 <= s3 && s2 + s3 <= s1 && s3 + s1 <= s2) {
    return true;
  } else {
    return false;
  }
};

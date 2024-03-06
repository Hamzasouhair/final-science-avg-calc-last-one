// Button click listener
document.getElementById("btn1").addEventListener("click", finalGrade);

function finalGrade() {
  //Input
  let one = Math.round(+document.getElementById("one").value);
  let two = Math.round(+document.getElementById("two").value);
  let three = Math.round(+document.getElementById("three").value);

  //Proccess
  let avg = Math.round((one + two + three) / 3);
  let msg = `Grade = ${avg}`;

  // Output
  Math.round((document.getElementById("out").innerHTML = avg));
  console.log(Math.round(avg));

  if (avg >= 90) {
    alert("your average is really good");
  } else if (avg >= 80) {
    alert("your average is good");
  } else if (avg >= 70) {
    alert("Better luck next time");
  } else if (avg >= 60) {
    alert("Study better ");
  } else if (avg >= 50) {
    alert("gotta do your work");
  }
}

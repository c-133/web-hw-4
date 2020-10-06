const submit = () => {
  let Quizes = document.getElementById("Quizes").value;
  let Midterm = document.getElementById("Midterm").value;
  let FinalTest = document.getElementById("FinalTest").value;
  let Oral = document.getElementById("Oral").value;
  let final_grade = "";

  let total_grades =
    parseFloat(Quizes) +
    parseFloat(Midterm) +
    parseFloat(FinalTest) +
    parseFloat(Oral);

  let perc = (total_grades / 400) * 100;

  debugger;

  if (perc <= 100 && perc >= 90) {
    final_grade = "A";
    var img = document.createElement("img");

    img.src = "../img/meliodas.gif";
    var src = document.getElementById("x");

    src.appendChild(img);
  } else if (perc < 90 && perc >= 80) {
    final_grade = "B";
    var img = document.createElement("img");

    img.src = "../img/simon.gif";
    var src = document.getElementById("x");

    src.appendChild(img);
  } else if (perc < 80 && perc >= 70) {
    final_grade = "C";
    var img = document.createElement("img");

    img.src = "../img/meh.gif";
    var src = document.getElementById("x");

    src.appendChild(img);
  } else if (perc < 70 && perc >= 60) {
    final_grade = "D";
    var img = document.createElement("img");

    img.src = "../img/d.gif";
    var src = document.getElementById("x");

    src.appendChild(img);
  } else if (perc < 60 && perc >= 0) {
    final_grade = "F";
    var img = document.createElement("img");

    img.src = "../img/tenor.gif";
    var src = document.getElementById("x");

    src.appendChild(img);
  }
  if (perc >= 0) {
    document.getElementById("total_grades").innerHTML = ` ${perc} `;
    document.getElementById("final_grade").innerHTML = ` ${final_grade} `;
  }
};

var i = 0;
var txt1 = "没有我们的文化，";
var txt2 = "就没有我们的历史。";
var txt3 = "没有我们的历史，";
var txt4 = "就没有我们的将来。";

function typeWriter1() {
  if (i < txt1.length) {
    document.getElementsByClassName("js-typewrite")[0].innerHTML +=
      txt1.charAt(i);
    i++;
    setTimeout(typeWriter1, 65);
  } else {
    // First line is loaded, set a delay and start loading the second line
    setTimeout(startSecondLine, 500);
  }
}

function startSecondLine() {
  document.getElementsByClassName("js-typewrite")[0].innerHTML +=
    "<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;"; // Add a line break
  i = 0; // Reset the index for the second line
  setTimeout(typeWriter2, 0);
}

function typeWriter2() {
  if (i < txt2.length) {
    document.getElementsByClassName("js-typewrite")[0].innerHTML +=
      txt2.charAt(i);
    i++;
    setTimeout(typeWriter2, 65);
  } else {
    // Second line is loaded, set a delay and start loading the third line
    setTimeout(startThirdLine, 500);
  }
}

function startThirdLine() {
  document.getElementsByClassName("js-typewrite")[0].innerHTML += "<br><br>"; // Add two line breaks
  i = 0; // Reset the index for the third line
  setTimeout(typeWriter3, 0);
}

function typeWriter3() {
  if (i < txt3.length) {
    document.getElementsByClassName("js-typewrite")[0].innerHTML +=
      txt3.charAt(i);
    i++;
    setTimeout(typeWriter3, 65);
  } else {
    // Third line is loaded, set a delay and start loading the fourth line
    setTimeout(startFourthLine, 500);
  }
}

function startFourthLine() {
  document.getElementsByClassName("js-typewrite")[0].innerHTML +=
    "<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;"; // Add a line break
  i = 0; // Reset the index for the fourth line
  setTimeout(typeWriter4, 0);
}

function typeWriter4() {
  if (i < txt4.length) {
    document.getElementsByClassName("js-typewrite")[0].innerHTML +=
      txt4.charAt(i);
    i++;
    setTimeout(typeWriter4, 65);
  } else {
    // 文本加载完毕，显示按钮
    document.getElementById("index-button").style.display = "flex";
  }
}

setTimeout(typeWriter1, 700);

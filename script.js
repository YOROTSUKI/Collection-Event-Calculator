var submit = document.querySelector("#calc");
var buyskindom = document.querySelector("#buyskin");
var buykbdom = document.querySelector("#buykb");
var needboxdom = document.querySelector("#needbox");
var needcoindom = document.querySelector("#needcoin");
var costmetaldom = document.querySelector("#costmetal");
var leftmetaldom = document.querySelector("#leftmetal");
var leftcoindom = document.querySelector("#leftcoin");
var buygold = 0,
  buypurple = 0,
  buykb = 0,
  costmetal = 0,
  needcoin = 0,
  leftmetal = 0;
submit.addEventListener(
  "click",
  function calc() {
    var coin = document.querySelector("#coin").value;
    var metal = document.querySelector("#metal").value;
    if (metal >= 38400) {
      buygold = buypurple = 12;
      costmetal = 38400;
    } else if (metal >= 9600) {
      buygold = Math.floor((metal - 9600) / 2400);
      buypurple = 12;
      costmetal = 9600 + buygold * 2400;
    } else if (metal >= 0) {
      buygold = 0;
      buypurple = Math.floor(metal / 800);
      costmetal = buypurple * 800;
    } else {
      console.log("Error Metal");
      alert("Metal cannot be" + metal + "！");
      return;
    }
    var leftbox = 24 - buygold - buypurple,
      needbox = leftbox;
    if (leftbox >= 12) {
      needcoin = (leftbox - 12) * 700 + 7500 - coin;
      buykb = "10 + 5";
      needbox = leftbox - 12;
    } else if (leftbox <= 0) {
      needcoin = 0;
      buykb = "NULL";
    } else if (leftbox < 4) {
      needcoin = leftbox * 700 - coin;
      buykb = "NULL";
    } else if (leftbox < 8) {
      needcoin = (leftbox - 4) * 700 + 2500 - coin;
      buykb = "5";
      needbox = leftbox - 4;
    } else if (leftbox < 12) {
      needcoin = (leftbox - 8) * 700 + 5000 - coin;
      buykb = "10";
      needbox = leftbox - 8;
    }
    console.log("Need Coin：" + needcoin);
    if (needcoin < 0) {
      needcoindom.innerHTML = 0;
      leftcoindom.innerHTML = -needcoin;
    } else {
      needcoindom.innerHTML = needcoin;
      leftcoindom.innerHTML = 0;
    }
    needboxdom.innerHTML = needbox;
    buyskindom.innerHTML = "<span style='color:#FF8C00'>" + buygold + "</span> + <span style='color:#8A2BE2'>" + buypurple + "</span>";
    buykbdom.innerHTML = buykb;
    costmetaldom.innerHTML = costmetal;
    leftmetal = metal - costmetal;
    leftmetaldom.innerHTML = leftmetal;
  },
  false
);

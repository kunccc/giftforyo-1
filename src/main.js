let html = document.querySelector("#html")
let style = document.querySelector("#style")
let string = `  /*Hello小吴，这里是小郑。
   *今天是圣诞节，我想送你一个特别的礼物。
   *好开始，嗯，先画一个黄色的皮肤。
   **/
  #face {
    background: #ffe600;
  }
  /*接着，画两个眼睛。
   **/
  .eye {
    border: 3px solid black;
    background: #2e2e2e;
    border-radius: 50%;
  }
  .eye.left {
    transform: translateX(-100px);
  }
  .eye.right {
    transform: translateX(100px);
  }
  .eye::before {
    border: 3px solid black;
    background: white;
    transform: translateX(9px);
  }
  /*我猜你应该知道是啥了哈哈，莫得事，继续看~
   *因为主要是来秀技术的(不是)
   *好继续~接下来是鼻子~
   **/
  .nose {
    border: 12px solid;
    margin-left: -12px;
  }
  /*画一下俏皮的上嘴唇~
   **/
  .mouth .upper .lip {
    border: 3px solid black;
  }
  .mouth .upper .lip.left {
    border-bottom-left-radius: 40px 25px;
    transform: rotate(-19deg) translateX(-37px);
  }
  .mouth .upper .lip.right {
    border-bottom-right-radius: 40px 25px;
    transform: rotate(19deg) translateX(37px);
  }
  .mouth .upper .lip {
    background: #ffe600;
  }
  /*然后是一个大嘴巴..?
   **/
  .mouth .lower .circle1 {
    border: 3px solid black;
    background: #9b000a;
  }
  /*还有舌头~
   **/
  .mouth .lower .circle1 .circle2 {
    background: #ff485f;
  }
  /*最后加上圆圆的脸蛋~
   **/
  .cheek {
    border: 3px solid black;
    background: red;
  }
  .cheek.left {
    transform: translateX(-160px);
  }
  .cheek.right {
    transform: translateX(160px);
  }
  /*好啦，可爱的皮卡丘送给可爱的你~
   *试试用鼠标移到鼻子上~
   **/
` 

let n = 1
let player = setInterval(() => {
  html.innerText = string.substr(0, n)
  style.innerHTML = string.substr(0, n)
  html.scrollTop = html.scrollHeight
  n += 1
  if(n > string.length){
    window.clearInterval(player)
  }
},50)
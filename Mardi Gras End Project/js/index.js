var countDownDate = new Date("March,5 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s" + "<br>" + "Until Mardi Gras";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

const button1 = document.getElementById('1');
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');
const button4 = document.getElementById('4');
const button5 = document.getElementById('5');
const button6 = document.getElementById('6');
const button7 = document.getElementById('7');
const button8 = document.getElementById('8');

    const container = document.querySelector('.container1');
    const close = document.querySelector('.close');

    button1.addEventListener('click', () => {
      container.style.display = 'block';
    });
    button2.addEventListener('click', () => {
      container.style.display = 'block';
    });
    button3.addEventListener('click', () => {
      container.style.display = 'block';
    });
    button4.addEventListener('click', () => {
      container.style.display = 'block';
    });
    button5.addEventListener('click', () => {
      container.style.display = 'block';
    });
    button6.addEventListener('click', () => {
      container.style.display = 'block';
    });
    button7.addEventListener('click', () => {
      container.style.display = 'block';
    });
    button8.addEventListener('click', () => {
      container.style.display = 'block';
    });
    close.addEventListener('click', () => {
      container.style.display = 'none';
    });
const menu = document.querySelector('.icon-foo')
const nav =  document.querySelector('.nav')

// Menu
// const showMenu = () => {

//     this.classList.toggle('activ')

//     if (nav.style.display === 'block') {
//         nav.style.display = 'none'
//     } else {
//         nav.style.display = 'block'
//     }
//     console.log('hello')
//     }
    menu.addEventListener('click', function() {

    this.classList.toggle("activ");

    if (nav.style.maxHeight) {
        nav.style.maxHeight = null
    } else {
        nav.style.maxHeight = nav.scrollHeight + 'vh'
    }

    console.log('hi')
    })


//   Timer
// Set the date we're counting down to
const countDownDate = new Date("Jun 16, 2021 15:37:25").getTime();

// Update the count down every 1 second
const x = setInterval(function () {
  // Get today's date and time
    const now = new Date().getTime();

  // Find the distance between now and the count down date
    const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element
    document.querySelector(".day").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;

  // If the count down is over, write some text
    if (distance < 0) {
    clearInterval(x);
    document.querySelector(".app-closed").innerHTML ="Application Closed,Check back in twelve months";
}
}, 1000);

// Toggle Accordion

const questions = document.querySelectorAll('.title')

questions.forEach(item => {
  
  item.addEventListener('click', function(){

    this.classList.toggle("active");
        let content = this.nextElementSibling
        
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        }else {
            content.style.maxHeight = content.scrollHeight + 'px'
        }

  })
});



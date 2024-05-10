// Define the typeWriter function
function typeWriter() {
  const text = "Umar Siddiqui";
  const speed = 80; // Adjust typing speed (milliseconds)
  let i = 0;
  const logoElement = document.querySelector(".logo");

  function type() {
    if (i < text.length) {
      logoElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      cursorElement.style.display = "none"; // Hide cursor when typing is complete
    }
  }
  type();
}

// Wrap the code in a DOMContentLoaded event listener to ensure it runs after the HTML is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Call typeWriter function when DOM content is loaded
  typeWriter();



  //toggle
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  // create instance of kinet with custom settings
  var kinet = new Kinet({
    acceleration: 0.06,
    friction: 0.20,
    names: ["x", "y"],
  });

  // select circle element
  var circle = document.getElementById('circle');

  // set handler on kinet tick event
  kinet.on('tick', function(instances) {
    circle.style.transform = `translate3d(${instances.x.current}px, ${instances.y.current}px, 0) rotateX(${instances.x.velocity / 2}deg) rotateY(${instances.y.velocity / 2}deg)`;
  });

  // call kinet animate method on mousemove
  document.addEventListener('mousemove', function (event) {
    kinet.animate('x', event.clientX - window.innerWidth/2);
    kinet.animate('y', event.clientY - window.innerHeight/2);
  });

  // log
  kinet.on('start', function() {
    console.log('start');
  });

  kinet.on('end', function() {
    console.log('end');
  });
});

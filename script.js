// Define the typeWriter function
function typeWriter() {
  const text = "Umar Siddiqui";
  const speed = 80; // Adjust typing speed (milliseconds)
  let i = 0;
  const titleElement = document.querySelector(".title");

  function type() {
    if (i < text.length) {
      titleElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  titleElement.innerHTML = ""; // Clear the title before typing
  type();
}

// Toggle menu function
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Wrap the code in a DOMContentLoaded event listener to ensure it runs after the HTML is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Call typeWriter function when DOM content is loaded
  typeWriter();

  // create instance of kinet with custom settings
  var kinet = new Kinet({
    acceleration: 0.06,
    friction: 0.20,
    names: ["x", "y"],
  });

  // select circle element
  var circle = document.getElementById('circle');
  if (circle) {
    // set handler on kinet tick event
    kinet.on('tick', function(instances) {
      circle.style.transform = `translate3d(${instances.x.current}px, ${instances.y.current}px, 0) rotateX(${instances.x.velocity / 2}deg) rotateY(${instances.y.velocity / 2}deg)`;
    });

    // call kinet animate method on mousemove
    document.addEventListener('mousemove', function (event) {
      kinet.animate('x', event.clientX - window.innerWidth/2);
      kinet.animate('y', event.clientY - window.innerHeight/2);
    });
  }

  // log
  kinet.on('start', function() {
    console.log('start');
  });

  kinet.on('end', function() {
    console.log('end');
  });

  // EmailJS Initialization
  (function() {
    emailjs.init('GCRVLHPwnhmgMPkw3'); 
  })();

  const btn = document.getElementById('button');

  document.getElementById('contact-form')
    .addEventListener('submit', function(event) {
      event.preventDefault();

      btn.value = 'Sending...';

      const serviceID = 'service_3767v2o'; 
      const templateID = 'template_oxj02w1';
      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Send';
          alert('Sent!');
          this.reset(); // Clear the form fields
        }, (err) => {
          btn.value = 'Send';
          alert(JSON.stringify(err));
        });
    });
});

const backToTopButton = document.getElementById('back-to-top');
if (backToTopButton) {
  backToTopButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Add this code to load the Spline Viewer script lazily
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const script = document.createElement("script");
        script.type = "module";
        script.src = "https://unpkg.com/@splinetool/viewer@1.4.7/build/spline-viewer.js";
        document.body.appendChild(script);
        observer.unobserve(entry.target);
      }
    });
  });

  const responsiveSpline = document.querySelector(".responsive-spline");
  if (responsiveSpline) {
    observer.observe(responsiveSpline);
  }
});

// Hotjar  installation


    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:5046368,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })
    (window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

    
//global navbar

window.addEventListener('scroll', function() {
  const nav = document.querySelector('.global-nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
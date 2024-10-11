const navs=document.querySelectorAll('.nav-list li');
const cube=document.querySelector('.box');
const resumeLists=document.querySelectorAll('.resume-list');
const sections=document.querySelectorAll('.section');
const resumeBoxs=document.querySelectorAll('.resume-box');
const portfolioLists=document.querySelectorAll('.portfolio-list');
const portfolioBoxs=document.querySelectorAll('.portfolio-box');
navs.forEach((nav,idx) => {
  nav.addEventListener('click',()=>{
    if (nav.id === 'light-mode-toggle') {
        return; // Do nothing if the light mode toggle is clicked
      }
        document.querySelector('.nav-list li.active').classList.remove('active');
        nav.classList.add('active');
   
    if (idx === 4) {
        cube.style.transform = `rotateY(${idx * -90}deg)`; 
      }
      else if(idx===5){
        cube.style.transform = `rotateY(0deg)`; 
      } 
      else {
        cube.style.transform = `rotateY(${idx * -90}deg)`; 
      }
      const contactSection = document.querySelector('.section.contact');
  if (idx === 4) {
    contactSection.style.visibility = 'visible';
    contactSection.style.transitionDelay = '0s';
  } else {
    contactSection.style.visibility = 'hidden';
  }
      document.querySelector('.section.active').classList.remove('active');
      sections[idx].classList.add('active');
      const array=Array.from(sections);
      const arrSecs=array.slice(1,-1)
      arrSecs.forEach(arrSecs =>{
if(arrSecs.classList.contains('active')){
   sections[4].classList.add('action-contact')
   contactSection.style.transitionDelay = '0s';
}
      });
      if(sections[0].classList.contains('active')){
        sections[4].classList.remove('action-contact');
      }
    });
});
resumeLists.forEach((list,idx) => {
    list.addEventListener('click',()=>{
        document.querySelector('.resume-list.active').classList.remove('active');
        list.classList.add('active');
       
        document.querySelector('.resume-box.active').classList.remove('active');
       resumeBoxs[idx].classList.add('active');
    })
});

portfolioLists.forEach((list,idx) => {
    list.addEventListener('click',()=>{
        document.querySelector('.portfolio-list.active').classList.remove('active');
        list.classList.add('active');
       
        document.querySelector('.portfolio-box.active').classList.remove('active');
        portfolioBoxs[idx].classList.add('active');
      
    })
});

const lightModeToggle = document.getElementById('light-mode-toggle');
const body = document.body;

lightModeToggle.addEventListener('click', (event) => {
    event.stopPropagation(); 
  body.classList.toggle('light-mode');

 
  if (body.classList.contains('light-mode')) {
    lightModeToggle.innerHTML = `
      <i class="bx bx-moon"></i>
      <span class="tooltip">Toggle Dark</span>
    `;
  } else {
    lightModeToggle.innerHTML = `
      <i class="bx bx-sun"></i>
      <span class="tooltip">Toggle Light</span>
    `;
  }
  
});

(function () {
    emailjs.init("tvOnFBaok9yYjCTXB"); 
})();

document.querySelector(".contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.querySelector('input[placeholder="Full Name"]');
  const emailInput = document.querySelector('input[placeholder="Email Address"]');
  const subjectInput = document.querySelector('input[placeholder="Email Subject"]');
  const phoneInput = document.querySelector('input[placeholder="Phone Number"]'); 
  const messageInput = document.querySelector('textarea[placeholder="Your Message"]');

  const name = nameInput.value;
  const email = emailInput.value;
  const subject = subjectInput.value;
  const phone = phoneInput.value; 
  const message = messageInput.value;

  const templateParams = {
      name: name,
      email: email,
      subject: subject,
      phone: phone, 
      message: message,
      template: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Form Submission</title>
      </head>
      <body>
          <h2>You have a new contact form submission!</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p> <!-- Add phone number here -->
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
      </body>
      </html>
      `
  };

  emailjs.send("service_vbw42nx", "template_exu3qy8", templateParams)
      .then(function(response) {
          console.log("Email sent successfully!", response.status, response.text);
          alert("Your message has been sent successfully!");

       
          nameInput.value = "";
          emailInput.value = "";
          subjectInput.value = "";
          phoneInput.value = ""; 
          messageInput.value = "";
      }, function(error) {
          console.error("Failed to send email. Error: ", error);
          alert("There was an error sending your message. Please try again.");
      });
});

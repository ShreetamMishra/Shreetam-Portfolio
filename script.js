const navs=document.querySelectorAll('.nav-list li');
const cube=document.querySelector('.box');
const resumeLists=document.querySelectorAll('.resume-list');
const sections=document.querySelectorAll('.section');
const resumeBoxs=document.querySelectorAll('.resume-box');
const portfolioLists=document.querySelectorAll('.portfolio-list');
const portfolioBoxs=document.querySelectorAll('.portfolio-box');
navs.forEach((nav,idx) => {
  nav.addEventListener('click',()=>{
        document.querySelector('.nav-list li.active').classList.remove('active');
        nav.classList.add('active');
   
    if (idx === 4) {
        cube.style.transform = `rotateY(${idx * -90}deg)`; 
      } else {
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


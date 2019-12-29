
// opacity animation

var observer = new IntersectionObserver(function (entries) {

    var slides = document.getElementsByClassName('slide-in');
  
    if (entries[0].isIntersecting === true) {
      entries[0].target.style.opacity = '1';
      observer.unobserve(entries[0].target);
      console.log('working');
    }
  }, { threshold: [0.3] });
  
  observer.observe(document.getElementById("thx"));
  
  
  
  
  
  
  
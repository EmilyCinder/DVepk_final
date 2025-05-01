document.addEventListener('DOMContentLoaded', function() {
   
    const parallaxBg = document.getElementById('parallax-bg');
    
    window.addEventListener('scroll', function() {
      let offset = window.pageYOffset;
      parallaxBg.style.transform = `translateY(${offset * 0.2}px) rotate(${offset * 0.05}deg)`;
    });
  

    const mobileMenuButton = document.querySelector('.md\\:hidden');
    const mobileMenu = document.querySelector('.md\\:flex');
    
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex');
      mobileMenu.classList.toggle('flex-col');
      mobileMenu.classList.toggle('absolute');
      mobileMenu.classList.toggle('top-16');
      mobileMenu.classList.toggle('right-4');
      mobileMenu.classList.toggle('bg-black');
      mobileMenu.classList.toggle('p-4');
      mobileMenu.classList.toggle('rounded-lg');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
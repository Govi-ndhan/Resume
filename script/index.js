document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const pageElements = document.querySelectorAll('.page');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        pageElements.forEach(page => {
          page.style.display = 'none';
        });
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.style.display = 'block';
        }
        
      });
    });
    
    //display first page default
    if (pageElements.length > 0) {
      pageElements.forEach(page => {
        page.style.display = 'none';
      });
      pageElements[0].style.display = 'block';
      
      // Also set the first nav link as active
      if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
      }
    }
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
      return false;
    });
    
    // Disable keyboard shortcuts
    document.addEventListener('keydown', function(e) {
      // Prevent F12
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        return false;
      }
      
      // Prevent Ctrl+Shift+I (Chrome, Firefox, Safari)
      if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.keyCode === 73)) {
        e.preventDefault();
        return false;
      }
      
      // Prevent Ctrl+Shift+J (Chrome)
      if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.keyCode === 74)) {
        e.preventDefault();
        return false;
      }
      
      // Prevent Ctrl+U (Chrome)
      if (e.ctrlKey && (e.key === 'U' || e.keyCode === 85)) {
        e.preventDefault();
        return false;
      }
    });
    
    document.addEventListener('keyup', function(e) {
    // Detect print screen attempt
    // Detect Ctrl+Shift+S or Cmd+Shift+S  or PrtSc (Windows/Mac screenshot shortcuts)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'S' || e.key === 'PrintScreen') {
        document.body.style.display = 'none';
        function disalt(){
          alert('Screenshots are Restricted on this Website.')
        }
        setTimeout(disalt,1000);
        return false;
      }
    });
  });

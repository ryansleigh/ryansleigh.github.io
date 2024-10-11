function redirectAfterCrawl() {
    setTimeout(function() {
      window.location.href = 'about_me.html';
    }, 29000); // 10 seconds delay
  }
  
  window.onload = redirectAfterCrawl;

    // Wait 5 seconds (5000 milliseconds), then play the sound
    setTimeout(function() {
      const sound = document.getElementById("Knock");
      sound.play();
    }, 5000);

    const hoverArea = document.getElementById('hoverArea');
    const sound = document.getElementById('hoverSound');
    let timer;
    hoverArea.addEventListener('mouseenter', () => {
      //Start a timer when mouse hovers over my id selector (picture)
      timer = setTimeout(() => {
        sound.currentTime = 0; // rewind to start
        sound.play();
      }, 5000); // delay in milliseconds (1000 = 1 second) i have mine set to 5 seconds
    });
    hoverArea.addEventListener('mouseleave', () => {
      // Cancel timer if mouse leaves the picture early
      clearTimeout(timer);
    });
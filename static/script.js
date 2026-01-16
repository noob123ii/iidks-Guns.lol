let hasUserInteracted = false;

function initMedia() {
  console.log("initMedia called");
  const backgroundVideo = document.getElementById('background');
  if (!backgroundVideo) {
    console.error("Background video not found");
    return;
  }
  backgroundVideo.volume = 0.3;
}

document.addEventListener('DOMContentLoaded', () => {
  const startScreen = document.getElementById('start-screen');
  const startText = document.getElementById('start-text');
  const profileName = document.getElementById('profile-name');
  const profileBio = document.getElementById('profile-bio');
  const visitorCount = document.getElementById('visitor-count');
  const resultsButton = document.getElementById('results-theme');
  const volumeIcon = document.getElementById('volume-icon');
  const volumeSlider = document.getElementById('volume-slider');
  const glitchOverlay = document.querySelector('.glitch-overlay');
  const profileBlock = document.getElementById('profile-block');
  const skillsBlock = document.getElementById('skills-block');
  const pythonBar = document.getElementById('python-bar');
  const javaBar = document.getElementById('java-bar');
  const cssBar = document.getElementById('css3-bar');
  const htmlBar = document.getElementById('html5-bar');
  const javascriptBar = document.getElementById('javascript-bar');
  const nodejsBar = document.getElementById('nodejs-bar');
  const typescriptBar = document.getElementById('typescript-bar');
  const cplusplusBar = document.getElementById('cplusplus-bar');
  const csharpBar = document.getElementById('csharp-bar');
  const resultsHint = document.getElementById('results-hint');
  const profilePicture = document.querySelector('.profile-picture');
  const profileContainer = document.querySelector('.profile-container');

  const startMessages = ["click to view"];
  const startMessage = startMessages[Math.floor(Math.random() * startMessages.length)];
  let startTextContent = '';
  let startIndex = 0;
  let startCursorVisible = true;

  function typeWriterStart() {
    if (startIndex < startMessage.length) {
      startTextContent = startMessage.slice(0, startIndex + 1);
      startIndex++;
    }
    startText.textContent = startTextContent + (startCursorVisible ? '|' : ' ');
    setTimeout(typeWriterStart, 100);
  }


  setInterval(() => {
    startCursorVisible = !startCursorVisible;
    startText.textContent = startTextContent + (startCursorVisible ? '|' : ' ');
  }, 500);


  async function initializeVisitorCounter() {
    try {
      const response = await fetch('/api/views');
      const data = await response.json();
      visitorCount.textContent = data.count.toLocaleString();
    } catch (err) {
      console.error("Failed to fetch visitor count:", err);
      visitorCount.textContent = "1";
    }
  }

  initializeVisitorCounter();

  startScreen.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    const backgroundVideo = document.getElementById('background');
    backgroundVideo.muted = false;
    backgroundVideo.play().catch(err => {
      console.error("Failed to play video after start screen click:", err);
    });
    profileBlock.classList.remove('hidden');
    gsap.fromTo(profileBlock,
      { opacity: 0, y: -50 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power2.out', onComplete: () => {
          profileBlock.classList.add('profile-appear');
          profileContainer.classList.add('orbit');
        }
      }
    );

    typeWriterName();
  });

  startScreen.addEventListener('touchstart', (e) => {
    e.preventDefault();
    startScreen.classList.add('hidden');
    const backgroundVideo = document.getElementById('background');
    backgroundVideo.muted = false;
    backgroundVideo.play().catch(err => {
      console.error("Failed to play video after start screen touch:", err);
    });
    profileBlock.classList.remove('hidden');
    gsap.fromTo(profileBlock,
      { opacity: 0, y: -50 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power2.out', onComplete: () => {
          profileBlock.classList.add('profile-appear');
          profileContainer.classList.add('orbit');
        }
      }
    );

    typeWriterName();
  });


  const name = "NotlucySigma";
  let nameText = '';
  let nameIndex = 0;
  let nameCursorVisible = true;

  function typeWriterName() {
    if (nameIndex < name.length) {
      nameText = name.slice(0, nameIndex + 1);
      nameIndex++;
      profileName.textContent = nameText + (nameCursorVisible ? '|' : ' ');
      setTimeout(typeWriterName, Math.floor(Math.random() * 101) + 30);
    } else {
      profileName.textContent = nameText + (nameCursorVisible ? '|' : ' ');
    }

    if (Math.random() < 0.05) {
      profileName.classList.add('glitch');
      setTimeout(() => profileName.classList.remove('glitch'), 200);
    }
  }

  setInterval(() => {
    nameCursorVisible = !nameCursorVisible;
    profileName.textContent = nameText + (nameCursorVisible ? '|' : ' ');
  }, 500);





  let currentAudio = document.getElementById('background');
  let isMuted = false;

  volumeIcon.addEventListener('click', () => {
    isMuted = !isMuted;
    currentAudio.muted = isMuted;
    volumeIcon.innerHTML = isMuted
      ? `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path>`
      : `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>`;
  });

  volumeIcon.addEventListener('touchstart', (e) => {
    e.preventDefault();
    isMuted = !isMuted;
    currentAudio.muted = isMuted;
    volumeIcon.innerHTML = isMuted
      ? `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path>`
      : `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>`;
  });

  volumeSlider.addEventListener('input', () => {
    currentAudio.volume = volumeSlider.value;
    isMuted = false;
    currentAudio.muted = false;
    volumeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>`;
  });

  function handleTilt(e, element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    let clientX, clientY;

    if (e.type === 'touchmove') {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const mouseX = clientX - centerX;
    const mouseY = clientY - centerY;

    const maxTilt = 15;
    const tiltX = (mouseY / rect.height) * maxTilt;
    const tiltY = -(mouseX / rect.width) * maxTilt;

    gsap.to(element, {
      rotationX: tiltX,
      rotationY: tiltY,
      duration: 0.3,
      ease: 'power2.out',
      transformPerspective: 1000
    });
  }

  profileBlock.addEventListener('mousemove', (e) => handleTilt(e, profileBlock));
  profileBlock.addEventListener('touchmove', (e) => {
    e.preventDefault();
    handleTilt(e, profileBlock);
  });

  skillsBlock.addEventListener('mousemove', (e) => handleTilt(e, skillsBlock));
  skillsBlock.addEventListener('touchmove', (e) => {
    e.preventDefault();
    handleTilt(e, skillsBlock);
  });

  profileBlock.addEventListener('mouseleave', () => {
    gsap.to(profileBlock, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  });
  profileBlock.addEventListener('touchend', () => {
    gsap.to(profileBlock, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  });

  skillsBlock.addEventListener('mouseleave', () => {
    gsap.to(skillsBlock, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  });
  skillsBlock.addEventListener('touchend', () => {
    gsap.to(skillsBlock, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  });


  profilePicture.addEventListener('click', () => {
    profileContainer.classList.remove('fast-orbit');
    profileContainer.classList.remove('orbit');
    void profileContainer.offsetWidth;
    profileContainer.classList.add('fast-orbit');
    setTimeout(() => {
      profileContainer.classList.remove('fast-orbit');
      void profileContainer.offsetWidth;
      profileContainer.classList.add('orbit');
    }, 500);
  });

  profilePicture.addEventListener('touchstart', (e) => {
    e.preventDefault();
    profileContainer.classList.remove('fast-orbit');
    profileContainer.classList.remove('orbit');
    void profileContainer.offsetWidth;
    profileContainer.classList.add('fast-orbit');
    setTimeout(() => {
      profileContainer.classList.remove('fast-orbit');
      void profileContainer.offsetWidth;
      profileContainer.classList.add('orbit');
    }, 500);
  });


  let isShowingSkills = false;
  resultsButton.addEventListener('click', () => {
    if (!isShowingSkills) {
      gsap.to(profileBlock, {
        x: -100,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          profileBlock.classList.add('hidden');
          skillsBlock.classList.remove('hidden');
          gsap.fromTo(skillsBlock,
            { x: 100, opacity: 0, position: 'fixed', top: '50%', left: '50%', yPercent: -50, xPercent: -50 },
            { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
          );
          gsap.to(pythonBar, { width: '95%', duration: 2, ease: 'power2.out' });
          gsap.to(javaBar, { width: '35%', duration: 2, ease: 'power2.out' });
          gsap.to(cssBar, { width: '70%', duration: 2, ease: 'power2.out' });
          gsap.to(htmlBar, { width: '65%', duration: 2, ease: 'power2.out' });
          gsap.to(javascriptBar, { width: '75%', duration: 2, ease: 'power2.out' });
          gsap.to(nodejsBar, { width: '70%', duration: 2, ease: 'power2.out' });
          gsap.to(typescriptBar, { width: '75%', duration: 2, ease: 'power2.out' });
          gsap.to(cplusplusBar, { width: '20%', duration: 2, ease: 'power2.out' });
          gsap.to(csharpBar, { width: '100%', duration: 2, ease: 'power2.out' });
        }
      });
      resultsHint.classList.remove('hidden');
      isShowingSkills = true;
    } else {
      gsap.to(skillsBlock, {
        x: 100,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          skillsBlock.classList.add('hidden');
          profileBlock.classList.remove('hidden');
          gsap.fromTo(profileBlock,
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
          );
        }
      });
      resultsHint.classList.add('hidden');
      isShowingSkills = false;
    }
  });

  resultsButton.addEventListener('touchstart', (e) => {
    e.preventDefault();
    if (!isShowingSkills) {
      gsap.to(profileBlock, {
        x: -100,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          profileBlock.classList.add('hidden');
          skillsBlock.classList.remove('hidden');
          gsap.fromTo(skillsBlock,
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
          );
          gsap.to(pythonBar, { width: '95%', duration: 2, ease: 'power2.out' });
          gsap.to(javaBar, { width: '35%', duration: 2, ease: 'power2.out' });
          gsap.to(cssBar, { width: '70%', duration: 2, ease: 'power2.out' });
          gsap.to(htmlBar, { width: '65%', duration: 2, ease: 'power2.out' });
          gsap.to(javascriptBar, { width: '75%', duration: 2, ease: 'power2.out' });
          gsap.to(nodejsBar, { width: '70%', duration: 2, ease: 'power2.out' });
          gsap.to(typescriptBar, { width: '75%', duration: 2, ease: 'power2.out' });
          gsap.to(cplusplusBar, { width: '20%', duration: 2, ease: 'power2.out' });
          gsap.to(csharpBar, { width: '100%', duration: 2, ease: 'power2.out' });
        }
      });
      resultsHint.classList.remove('hidden');
      isShowingSkills = true;
    } else {
      gsap.to(skillsBlock, {
        x: 100,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          skillsBlock.classList.add('hidden');
          profileBlock.classList.remove('hidden');
          gsap.fromTo(profileBlock,
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
          );
        }
      });
      resultsHint.classList.add('hidden');
      isShowingSkills = false;
    }
  });


  typeWriterStart();
});

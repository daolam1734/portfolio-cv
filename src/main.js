import './style.scss';
import * as bootstrap from 'bootstrap';
import gsap from 'gsap';

document.addEventListener("DOMContentLoaded", () => {
  // --- Universe Tech Background Animations ---
  const starfield = document.getElementById("starfield");
  
  if (starfield) {
    for (let i = 0; i < 60; i++) {
      const star = document.createElement("div");
      star.className = "star";
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.opacity = Math.random();
      starfield.appendChild(star);

      gsap.to(star, {
        opacity: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 2 + 1,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: Math.random() * 2
      });
    }

    for (let i = 0; i < 4; i++) {
      const line = document.createElement("div");
      line.className = "tech-line";
      starfield.appendChild(line);

      function animateLine(el) {
        gsap.set(el, {
          left: "-150px",
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 200 + 50}px`,
          opacity: 0
        });

        gsap.to(el, {
          left: "100%",
          opacity: 1,
          duration: Math.random() * 2 + 1.5,
          ease: "power1.inOut",
          onComplete: () => {
            gsap.delayedCall(Math.random() * 4, () => animateLine(el));
          }
        });
      }
      animateLine(line);
    }
  }

  // --- Scroll Animations via IntersectionObserver ---
  const sections = document.querySelectorAll(".section-anim");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        gsap.fromTo(entry.target, 
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(sec => observer.observe(sec));

  // --- API #2: Fetch Projects ---
  const projectsContainer = document.getElementById('projects-container');
  if (projectsContainer) {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects.json');
        if (!response.ok) throw new Error("Failed to load projects");
        
        const projects = await response.json();
        projectsContainer.innerHTML = ''; // Clear loading spinner
        
        if (projects.length === 0) {
          projectsContainer.innerHTML = `<div class="col-12 text-center text-secondary py-5"><i class="bi bi-folder2-open fs-1"></i><p class="mt-2">No projects to display yet. Add data to /api/projects.json.</p></div>`;
          return;
        }

        projects.forEach((proj, index) => {
          const badges = proj.tech_stack.map(tech => `<span class="skill-badge">${tech}</span>`).join('');
          const cardHtml = `
            <div class="col-md-6 col-lg-4">
              <div class="glass-card h-100 d-flex flex-column" style="opacity:0; transform:translateY(30px);" id="proj-card-${index}">
                <h3 class="h5 text-primary fw-bold mb-3">${proj.title}</h3>
                <p class="text-secondary small flex-grow-1">${proj.description}</p>
                <div class="mb-4">
                  ${badges}
                </div>
                <div class="d-flex gap-2 mt-auto">
                  <a href="${proj.github_url}" target="_blank" class="btn btn-sm btn-outline-secondary border-primary-subtle text-light"><i class="bi bi-github"></i> Code</a>
                  <a href="${proj.live_url}" target="_blank" class="btn btn-sm btn-outline-info text-primary border-primary-subtle"><i class="bi bi-box-arrow-up-right"></i> Demo</a>
                </div>
              </div>
            </div>
          `;
          projectsContainer.innerHTML += cardHtml;
        });

        projects.forEach((_, index) => {
          gsap.to(`#proj-card-${index}`, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: "back.out(1.7)"
          });
        });

      } catch (error) {
        projectsContainer.innerHTML = `<div class="col-12 text-center text-danger py-5"><i class="bi bi-exclamation-triangle fs-1"></i><p class="mt-2">Failed to load projects data.</p></div>`;
      }
    };
    setTimeout(fetchProjects, 1000); 
  }

  // --- API #3: Fetch GitHub Repos ---
  const githubContainer = document.getElementById('github-container');
  if (githubContainer) {
    const fetchGithubRepos = async () => {
      try {
        // Replace with actual GitHub username. Using daolam1734 based on links.
        const response = await fetch('https://api.github.com/users/daolam1734/repos?sort=updated&per_page=6');
        if (!response.ok) throw new Error("Failed to load GitHub repos");
        
        const repos = await response.json();
        githubContainer.innerHTML = ''; 
        
        repos.forEach((repo, index) => {
          const cardHtml = `
            <div class="col-md-6 col-lg-4">
              <div class="glass-card h-100 d-flex flex-column" style="opacity:0; transform:translateY(30px);" id="github-card-${index}">
                <div class="d-flex justify-content-between align-items-start mb-3">
                  <h3 class="h6 text-primary fw-bold mb-0">
                    <a href="${repo.html_url}" target="_blank" class="text-primary text-decoration-none hover-primary">
                      <i class="bi bi-journal-code me-2"></i>${repo.name}
                    </a>
                  </h3>
                  <span class="badge border border-primary-subtle text-secondary bg-transparent"><i class="bi bi-star-fill text-warning me-1"></i>${repo.stargazers_count}</span>
                </div>
                <p class="text-secondary small flex-grow-1">${repo.description || "No description provided."}</p>
                <div class="d-flex justify-content-between align-items-center mt-3">
                  <span class="small text-info"><i class="bi bi-circle-fill me-1" style="font-size: 8px;"></i>${repo.language || "Unknown"}</span>
                  <a href="${repo.html_url}" target="_blank" class="contact-link small"><i class="bi bi-github"></i> Repository</a>
                </div>
              </div>
            </div>
          `;
          githubContainer.innerHTML += cardHtml;
        });

        repos.forEach((_, index) => {
          gsap.to(`#github-card-${index}`, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power2.out"
          });
        });

      } catch (error) {
        githubContainer.innerHTML = `<div class="col-12 text-center text-danger py-5"><i class="bi bi-exclamation-triangle fs-1"></i><p class="mt-2">Failed to fetch GitHub repositories. API Rate limit might be exceeded.</p></div>`;
      }
    };
    setTimeout(fetchGithubRepos, 1500); 
  }

  // --- API #1: EmailJS Contact Form ---
  const contactForm = document.getElementById('contact-form');
  const contactStatus = document.getElementById('contact-status');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = document.getElementById('contact-submit');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Sending...';
      submitBtn.disabled = true;
      contactStatus.innerHTML = '';

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: document.getElementById('user_name').value,
          from_email: document.getElementById('user_email').value,
          message: document.getElementById('message').value,
        }
      };

      try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          contactStatus.innerHTML = '<span class="text-success"><i class="bi bi-check-circle me-1"></i> Message sent successfully!</span>';
          contactForm.reset();
        } else {
          const error = await response.text();
          contactStatus.innerHTML = `<span class="text-danger"><i class="bi bi-exclamation-triangle me-1"></i> Error: ${error}</span>`;
        }
      } catch (error) {
        contactStatus.innerHTML = `<span class="text-danger"><i class="bi bi-exclamation-triangle me-1"></i> Network error. Please try again later.</span>`;
      } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        setTimeout(() => {
          contactStatus.innerHTML = '';
        }, 5000);
      }
    });
  }

  // --- Background Music Logic ---
  const musicBtn = document.getElementById('music-btn');
  const bgMusic = document.getElementById('bg-music');
  const musicIcon = document.getElementById('music-icon');
  
  if (musicBtn && bgMusic) {
    let hasInteracted = false;
    bgMusic.volume = 0.5; // Set volume to 50% so it's not too loud
    
    // Autoplay on first interaction to bypass browser autoplay restrictions
    const playMusicOnInteraction = () => {
      if (!hasInteracted) {
        hasInteracted = true;
        bgMusic.play().then(() => {
          musicIcon.className = "bi bi-volume-up-fill fs-4";
        }).catch((err) => {
          console.warn("Autoplay blocked or failed:", err);
        });
        
        // Clean up listeners
        ['click', 'scroll', 'keydown', 'touchstart'].forEach(evt => {
          document.removeEventListener(evt, playMusicOnInteraction);
        });
      }
    };

    ['click', 'scroll', 'keydown', 'touchstart'].forEach(evt => {
      document.addEventListener(evt, playMusicOnInteraction, { once: true });
    });

    // Manual toggle via button
    musicBtn.addEventListener('click', (e) => {
      e.stopPropagation(); 
      hasInteracted = true; 
      if (bgMusic.paused) {
        bgMusic.play();
        musicIcon.className = "bi bi-volume-up-fill fs-4";
      } else {
        bgMusic.pause();
        musicIcon.className = "bi bi-volume-mute-fill fs-4";
      }
    });
  }
});

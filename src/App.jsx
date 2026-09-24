import React from 'react';
import './index.css';

function App() {
  return (
    <div className="container">
      <header className="animate-fade-in">
        <h1 className="text-gradient">Nguyễn Hoàng Lâm</h1>
        <p>Software Engineer | Creative Thinker | Problem Solver</p>
        <div className="badges" style={{ justifyContent: 'center', marginTop: '2rem' }}>
          <a href="#about" className="btn">About Me</a>
          <a href="#cv" className="btn">My CV</a>
          <a href="#cool-things" className="btn">Cool Things</a>
        </div>
      </header>

      <main>
        {/* About Section */}
        <section id="about" className="glass animate-fade-in delay-1">
          <h2>About Me</h2>
          <p>
            Hi! I am a passionate developer who loves building beautiful, high-performance web applications. 
            I enjoy transforming complex problems into simple, elegant, and intuitive solutions.
          </p>
          <div className="badges">
            <span className="badge">JavaScript</span>
            <span className="badge">React</span>
            <span className="badge">Node.js</span>
            <span className="badge">HTML/CSS</span>
            <span className="badge">UI/UX Design</span>
          </div>
        </section>

        {/* CV Section */}
        <section id="cv" className="animate-fade-in delay-2">
          <h2>Experience & Education</h2>
          <div className="grid-2">
            <div className="glass">
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-color)' }}>💼 Experience</h3>
              <div className="timeline-item">
                <div className="timeline-date">2023 - Present</div>
                <div className="timeline-title">Senior Frontend Engineer</div>
                <div className="timeline-content">
                  Led the development of multiple scalable web applications using React and modern CSS architectures. Improved performance by 40%.
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2021 - 2023</div>
                <div className="timeline-title">Web Developer</div>
                <div className="timeline-content">
                  Developed interactive UI components and collaborated closely with designers to ensure pixel-perfect implementation.
                </div>
              </div>
            </div>

            <div className="glass">
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-color)' }}>🎓 Education</h3>
              <div className="timeline-item">
                <div className="timeline-date">2017 - 2021</div>
                <div className="timeline-title">B.S. in Computer Science</div>
                <div className="timeline-content">
                  University of Science. Graduated with Honors. Specialized in Software Engineering and Human-Computer Interaction.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cool Things Section */}
        <section id="cool-things" className="animate-fade-in delay-3">
          <h2>Cool Things About Me</h2>
          <div className="grid-3">
            <div className="glass">
              <h3 style={{ marginBottom: '1rem', color: 'var(--accent-color)' }}>🌌 Generative Art</h3>
              <p>I write code that creates algorithmic, generative art using p5.js and canvas APIs. Merging logic with creativity.</p>
            </div>
            <div className="glass">
              <h3 style={{ marginBottom: '1rem', color: 'var(--accent-color)' }}>☕ Specialty Coffee</h3>
              <p>I am a huge coffee nerd. I roast my own beans and have mastered the art of the perfect V60 pour-over.</p>
            </div>
            <div className="glass">
              <h3 style={{ marginBottom: '1rem', color: 'var(--accent-color)' }}>🕹️ Retro Gaming</h3>
              <p>I collect and repair vintage game consoles. Nothing beats the charm of 16-bit graphics and chiptune music.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="glass animate-fade-in delay-3" style={{ textAlign: 'center' }}>
          <h2>Let's Connect</h2>
          <p style={{ marginBottom: '2rem' }}>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
          <a href="mailto:hello@example.com" className="btn">Say Hello</a>
        </section>
      </main>
    </div>
  );
}

export default App;

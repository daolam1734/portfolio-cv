import React from 'react';
import './index.css';

function App() {
  return (
    <div className="container">
      {/* ================= HEADER ================= */}
      <header className="cv-header animate-fade-in">
        <div>
          <p className="cv-label">SOFTWARE ENGINEERING STUDENT</p>

          <h1 className="text-gradient">
            ĐÀO CÔNG HOÀNG LAM
          </h1>

          <h2>Full-stack Developer | AI Applications</h2>

          <div className="contact-info">
            <a href="mailto:daolam7134@gmail.com">
              ✉ daolam7134@gmail.com
            </a>

            <a
              href="https://github.com/daolam1734"
              target="_blank"
              rel="noreferrer"
            >
              ◉ github.com/daolam1734
            </a>

            <span>☎ [Số điện thoại]</span>

            <span>⌖ [Tỉnh/Thành phố]</span>
          </div>
        </div>
      </header>

      <main>
        {/* ================= SUMMARY ================= */}
        <section className="glass animate-fade-in delay-1">
          <h2>TÓM TẮT CHUYÊN MÔN</h2>

          <p>
            Sinh viên Kỹ thuật Phần mềm định hướng Full-stack Development
            và AI Applications, có kinh nghiệm phát triển frontend, backend,
            cơ sở dữ liệu và tích hợp LLM/AI API. Tập trung xây dựng các
            ứng dụng web thực tế với React, Node.js, Python và FastAPI.
          </p>
        </section>

        {/* ================= EDUCATION ================= */}
        <section className="animate-fade-in delay-1">
          <h2>HỌC VẤN</h2>

          <div className="glass">
            <div className="cv-item">
              <div>
                <h3>ĐẠI HỌC TRÀ VINH</h3>

                <p>
                  Trường Kỹ thuật và Công nghệ – Khoa Công nghệ Thông tin
                </p>

                <p>
                  <strong>Ngành:</strong> Công nghệ Thông tin / Kỹ thuật Phần mềm
                </p>
              </div>

              <span className="date">
                [Thời gian học]
              </span>
            </div>
          </div>
        </section>

        {/* ================= INTERNSHIP ================= */}
        <section className="animate-fade-in delay-1">
          <h2>KINH NGHIỆM THỰC TẬP</h2>

          <div className="glass">
            <div className="cv-item">
              <div>
                <h3>
                  THỰC TẬP SINH – VIỆN PHÁT TRIỂN NGUỒN LỰC,
                  ĐẠI HỌC TRÀ VINH
                </h3>

                <p>
                  <strong>Dự án:</strong> Auto-Slide Creator –
                  Chuyển đổi tài liệu thành Slides tùy chỉnh
                </p>
              </div>

              <span className="date">
                [Thời gian]
              </span>
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section className="animate-fade-in delay-2">
          <h2>DỰ ÁN</h2>

          <div className="project-list">
            <div className="glass project-item">
              <div className="project-header">
                <h3>
                  TVU – HỆ THỐNG QUẢN LÝ HỒ SƠ VIÊN CHỨC ĐI NƯỚC NGOÀI
                </h3>
              </div>

              <div className="badges">
                <span className="badge">React</span>
                <span className="badge">Node.js</span>
                <span className="badge">Express</span>
                <span className="badge">PostgreSQL</span>
                <span className="badge">Gemini API</span>
                <span className="badge">Docker</span>
              </div>
            </div>

            <div className="glass project-item">
              <div className="project-header">
                <h3>
                  LinkUp – Community Chat & AI Assistant
                </h3>
              </div>

              <div className="badges">
                <span className="badge">React</span>
                <span className="badge">TypeScript</span>
                <span className="badge">Python</span>
                <span className="badge">FastAPI</span>
                <span className="badge">MongoDB</span>
                <span className="badge">Gemini API</span>
              </div>
            </div>

            <div className="glass project-item">
              <div className="project-header">
                <h3>
                  GrowTech – E-commerce Laptop
                </h3>
              </div>

              <div className="badges">
                <span className="badge">PHP</span>
                <span className="badge">MySQL</span>
                <span className="badge">Bootstrap</span>
                <span className="badge">JavaScript</span>
                <span className="badge">AJAX</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section className="animate-fade-in delay-2">
          <h2>KỸ NĂNG</h2>

          <div className="grid-2">
            <div className="glass">
              <h3>Programming</h3>

              <div className="badges">
                <span className="badge">JavaScript</span>
                <span className="badge">TypeScript</span>
                <span className="badge">Python</span>
                <span className="badge">Java</span>
                <span className="badge">PHP</span>
              </div>
            </div>

            <div className="glass">
              <h3>Frontend</h3>

              <div className="badges">
                <span className="badge">HTML5</span>
                <span className="badge">CSS3</span>
                <span className="badge">React</span>
                <span className="badge">Vite</span>
                <span className="badge">Tailwind CSS</span>
              </div>
            </div>

            <div className="glass">
              <h3>Backend</h3>

              <div className="badges">
                <span className="badge">Node.js</span>
                <span className="badge">Express</span>
                <span className="badge">FastAPI</span>
              </div>
            </div>

            <div className="glass">
              <h3>Database</h3>

              <div className="badges">
                <span className="badge">PostgreSQL</span>
                <span className="badge">MongoDB</span>
                <span className="badge">MySQL</span>
              </div>
            </div>

            <div className="glass">
              <h3>AI / LLM</h3>

              <div className="badges">
                <span className="badge">LLM Applications</span>
                <span className="badge">Gemini API</span>
              </div>
            </div>

            <div className="glass">
              <h3>Tools</h3>

              <div className="badges">
                <span className="badge">Git</span>
                <span className="badge">GitHub</span>
                <span className="badge">Docker</span>
                <span className="badge">VS Code</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CERTIFICATION ================= */}
        <section className="animate-fade-in delay-3">
          <h2>CHỨNG CHỈ</h2>

          <div className="glass">
            <div className="cv-item">
              <div>
                <h3>Google UX Design Professional Certificate</h3>
                <p>Google / Coursera</p>
              </div>

              <span className="date">
                09/11/2025
              </span>
            </div>
          </div>
        </section>

        {/* ================= CAREER OBJECTIVE ================= */}
        <section className="glass animate-fade-in delay-3">
          <h2>ĐỊNH HƯỚNG NGHỀ NGHIỆP</h2>

          <p>
            Tìm kiếm cơ hội Internship / Fresher ở vị trí
            <strong> Full-stack Developer </strong>
            hoặc
            <strong> AI Application Developer</strong>,
            tập trung phát triển sản phẩm web và ứng dụng tích hợp AI.
          </p>
        </section>

        {/* ================= FOOTER ================= */}
        <footer>
          <p>
            © 2026 Đào Công Hoàng Lam
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
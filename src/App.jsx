import React from 'react';
import './index.css';
import { FiMail, FiMapPin, FiPhone, FiGithub, FiCalendar, FiUser, FiSettings, FiBriefcase, FiCode, FiAward, FiTarget } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';

function App() {
  return (
    <div className="container">
      <div className="cv-page">
        {/* ================= HEADER ================= */}
        <header className="cv-header animate-fade-in">
          <div className="header-left">
            <div className="profile-img">
              {/* Thay src bằng link ảnh của bạn */}
              <img src="https://i.pravatar.cc/300" alt="Profile" />
            </div>
          </div>

          <div className="header-center">
            <h1>ĐÀO CÔNG HOÀNG LAM</h1>
            <h2>FULL-STACK DEVELOPER | AI APPLICATIONS</h2>
            <div className="contact-info">
              <a href="mailto:daolam1734@gmail.com"><FiMail /> daolam1734@gmail.com</a>
              <span><FiMapPin /> Vĩnh Long, Việt Nam</span>
              <span><FiPhone /> +84 343 166 883</span>
              <a href="https://github.com/daolam1734" target="_blank" rel="noreferrer"><FiGithub /> github.com/daolam1734</a>
            </div>
          </div>

          <div className="header-right">
            <div className="header-edu-item">
              <span className="icon"><FaGraduationCap /></span>
              <div>
                <strong>Đại học Trà Vinh</strong>
                <p>Trường Kỹ thuật và Công nghệ<br />Khoa Công nghệ thông tin</p>
              </div>
            </div>
            <div className="header-edu-item">
              <span className="icon"><FiCalendar /></span>
              <div>
                <strong>2022 – 2026</strong>
              </div>
            </div>
          </div>
        </header>

        <main className="cv-layout">
          {/* ================= CỘT TRÁI ================= */}
          <aside className="cv-left animate-fade-in delay-1">

            <section>
              <h2><FiUser /> TÓM TẮT CHUYÊN MÔN</h2>
              <p className="text-justify text-sm">
                Sinh viên Kỹ thuật Phần mềm định hướng Full-stack Development
                và AI Applications, có kinh nghiệm phát triển frontend, backend,
                cơ sở dữ liệu và tích hợp LLM/AI API.<br /><br />
                Tập trung xây dựng các ứng dụng web thực tế, có khả năng
                làm việc với React, Node.js, Python và FastAPI.
              </p>
            </section>

            <section>
              <h2><FiSettings /> KỸ NĂNG</h2>

              <div className="skill-group">
                <strong>Ngôn ngữ lập trình</strong>
                <div className="badges">
                  <span className="badge">JavaScript</span>
                  <span className="badge">TypeScript</span>
                  <span className="badge">Python</span>
                  <span className="badge">Java</span>
                  <span className="badge">PHP</span>
                </div>
              </div>

              <div className="skill-group">
                <strong>Phát triển Web</strong>
                <div className="badges">
                  <span className="badge">HTML5</span>
                  <span className="badge">CSS3</span>
                  <span className="badge">React (nếu có)</span>
                  <span className="badge">Node.js</span>
                  <span className="badge">REST API</span>
                </div>
              </div>

              <div className="skill-group">
                <strong>Công cụ & nền tảng</strong>
                <div className="badges">
                  <span className="badge">Git</span>
                  <span className="badge">GitHub</span>
                  <span className="badge">VS Code</span>
                  <span className="badge">Postman</span>
                  <span className="badge">Figma</span>
                  <span className="badge">Antigravity</span>
                </div>
              </div>

              <div className="skill-group">
                <strong>AI / LLM</strong>
                <div className="badges">
                  <span className="badge">Large Language Models</span>
                  <span className="badge">Prompt Engineering</span>
                  <span className="badge">Tích hợp AI vào ứng dụng</span>
                </div>
              </div>
            </section>
          </aside>

          {/* ================= CỘT PHẢI ================= */}
          <div className="cv-right animate-fade-in delay-2">

            <section>
              <h2><FiBriefcase /> KINH NGHIỆM THỰC TẬP</h2>
              <div className="timeline-header">
                <span className="date-badge">06/2026 – 08/2026</span>
                <span className="location"><FiMapPin /> Trà Vinh</span>
              </div>
              <h3 className="job-title">THỰC TẬP SINH – VIỆN PHÁT TRIỂN NGUỒN LỰC, ĐẠI HỌC TRÀ VINH</h3>
              <p className="project-name"><strong>Dự án:</strong> Auto-Slide Creator – Chuyển đổi tài liệu thành Slides tùy chỉnh</p>
              <ul className="bullet-list">
                <li>Tham gia xây dựng ứng dụng hỗ trợ chuyển đổi tài liệu thành các slide trình bày có thể tùy chỉnh.</li>
                <li>Phân tích quy trình xử lý tài liệu và tổ chức nội dung phù hợp với cấu trúc bài trình chiếu.</li>
                <li>Phát triển và hoàn thiện các chức năng của ứng dụng theo yêu cầu dự án.</li>
                <li>Tham gia kiểm thử, phát hiện và xử lý lỗi trong quá trình phát triển.</li>
                <li>Phối hợp với nhóm để hoàn thiện sản phẩm và cải thiện trải nghiệm người dùng.</li>
              </ul>
            </section>

            <section>
              <h2><FiCode /> DỰ ÁN HỌC TẬP NỔI BẬT</h2>

              <div className="project-item">
                <h3>TVU – Hệ thống quản lý hồ sơ viên chức đi nước ngoài</h3>
                <div className="badges" style={{ marginBottom: '0.75rem' }}>
                  <span className="badge">React</span>
                  <span className="badge">Node.js</span>
                  <span className="badge">Express</span>
                  <span className="badge">PostgreSQL</span>
                  <span className="badge">Gemini API</span>
                  <span className="badge">Docker</span>
                </div>
                <ul className="bullet-list">
                  <li>Xây dựng hệ thống quản lý hồ sơ và quy trình xử lý hồ sơ.</li>
                  <li>Phát triển giao diện frontend bằng React và quản lý trạng thái.</li>
                  <li>Tích hợp Gemini API cho các chức năng AI của hệ thống.</li>
                </ul>
              </div>

              <div className="project-item">
                <h3>LinkUp – Community Chat & AI Assistant</h3>
                <div className="badges" style={{ marginBottom: '0.75rem' }}>
                  <span className="badge">React</span>
                  <span className="badge">TypeScript</span>
                  <span className="badge">Python</span>
                  <span className="badge">FastAPI</span>
                  <span className="badge">MongoDB</span>
                  <span className="badge">Gemini API</span>
                </div>
                <ul className="bullet-list">
                  <li>Phát triển nền tảng cộng đồng với chat cá nhân và nhóm.</li>
                  <li>Xây dựng backend API bằng FastAPI/Python.</li>
                  <li>Tích hợp Google Gemini API cho AI Assistant và AI memory.</li>
                </ul>
              </div>

              <div className="project-item">
                <h3>GrowTech – E-commerce Laptop</h3>
                <div className="badges" style={{ marginBottom: '0.75rem' }}>
                  <span className="badge">PHP</span>
                  <span className="badge">MySQL</span>
                  <span className="badge">Bootstrap</span>
                  <span className="badge">JavaScript</span>
                  <span className="badge">AJAX</span>
                </div>
                <ul className="bullet-list">
                  <li>Xây dựng website thương mại điện tử chuyên về laptop.</li>
                  <li>Phát triển giỏ hàng, đặt hàng và quản lý sản phẩm.</li>
                  <li>Xây dựng khu vực quản trị và các chức năng voucher, flash sale.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2><FiAward /> CHỨNG CHỈ</h2>
              <div className="cert-item">
                <h3>Google UX Design Professional Certificate</h3>
                <p className="text-secondary">Google / Coursera &nbsp;|&nbsp; 09/11/2025</p>
              </div>
            </section>

            <section>
              <h2><FiTarget /> ĐỊNH HƯỚNG PHÁT TRIỂN</h2>
              <p className="text-justify text-sm">
                Tìm kiếm cơ hội việc làm / Fresher ở vị trí <strong>Full-stack Developer</strong> hoặc <strong>AI Application Developer</strong>, nơi có thể áp dụng kiến thức và kỹ năng để xây dựng các sản phẩm thực tế và tạo ra giá trị cho người dùng.
              </p>
            </section>
          </div>
        </main>
      </div>

      <footer>
        <p>© 2026 daolam1734. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
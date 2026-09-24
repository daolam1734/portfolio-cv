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
              <img src="/profile.jpg" alt="Profile" />
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
                Sinh viên năm cuối ngành Kỹ thuật Phần mềm, định hướng phát triển chuyên sâu với vị trí Full-stack Developer. Nắm vững kiến thức nền tảng về cấu trúc dữ liệu, thuật toán và thiết kế cơ sở dữ liệu.<br /><br />
                Có khả năng tự nghiên cứu, làm việc độc lập cũng như kỹ năng làm việc nhóm tốt. Mục tiêu mang lại các sản phẩm công nghệ có tính ứng dụng cao và giao diện người dùng tối ưu.
              </p>
            </section>

            <section>
              <h2><FiSettings /> KỸ NĂNG CÔNG NGHỆ</h2>

              <div className="skill-group">
                <strong>Ngôn ngữ lập trình & Database</strong>
                <div className="badges">
                  <span className="badge">JavaScript / TypeScript</span>
                  <span className="badge">Python</span>
                  <span className="badge">Java</span>
                  <span className="badge">PHP</span>
                  <span className="badge">PostgreSQL</span>
                  <span className="badge">MongoDB</span>
                  <span className="badge">MySQL</span>
                </div>
              </div>

              <div className="skill-group">
                <strong>Frontend Development</strong>
                <div className="badges">
                  <span className="badge">React.js</span>
                  <span className="badge">HTML5/CSS3</span>
                  <span className="badge">Tailwind CSS</span>
                  <span className="badge">Bootstrap</span>
                </div>
              </div>

              <div className="skill-group">
                <strong>Backend & API</strong>
                <div className="badges">
                  <span className="badge">Node.js</span>
                  <span className="badge">Express.js</span>
                  <span className="badge">FastAPI</span>
                  <span className="badge">RESTful API</span>
                </div>
              </div>

              <div className="skill-group">
                <strong>Công cụ & Triển khai</strong>
                <div className="badges">
                  <span className="badge">Git / GitHub</span>
                  <span className="badge">Docker</span>
                  <span className="badge">Postman</span>
                  <span className="badge">Figma</span>
                </div>
              </div>

              <div className="skill-group">
                <strong>Kỹ năng khác (AI)</strong>
                <div className="badges">
                  <span className="badge">Tích hợp Gemini API</span>
                  <span className="badge">Prompt Engineering cơ bản</span>
                </div>
              </div>
            </section>
          </aside>

          {/* ================= CỘT PHẢI ================= */}
          <div className="cv-right animate-fade-in delay-2">

            <section>
              <h2><FiTarget /> MỤC TIÊU NGHỀ NGHIỆP</h2>
              <p className="text-justify text-sm" style={{marginBottom: '1rem'}}>
                <strong>Ngắn hạn:</strong> Ứng tuyển vị trí Intern / Fresher Full-stack Developer để rèn luyện kỹ năng thực tế, làm quen với quy trình làm việc chuẩn mực tại doanh nghiệp và đóng góp trực tiếp vào sự thành công của các dự án.<br />
                <strong>Dài hạn:</strong> Trở thành một Software Engineer chuyên nghiệp, có khả năng phân tích, thiết kế và xây dựng các kiến trúc hệ thống lớn, bền vững.
              </p>
            </section>

            <section>
              <h2><FiBriefcase /> KINH NGHIỆM THỰC TẬP</h2>
              <div className="timeline-header">
                <span className="date-badge">06/2026 – 08/2026</span>
                <span className="location"><FiMapPin /> Trà Vinh</span>
              </div>
              <h3 className="job-title">THỰC TẬP SINH LẬP TRÌNH WEB</h3>
              <p className="project-name"><strong>Tổ chức:</strong> Viện Phát triển Nguồn lực, Đại học Trà Vinh</p>
              <ul className="bullet-list">
                <li>Tham gia phân tích yêu cầu và phát triển ứng dụng "Auto-Slide Creator" – tự động hóa việc trích xuất tài liệu thành slides.</li>
                <li>Xây dựng luồng xử lý tài liệu (Backend) và thiết kế giao diện (Frontend).</li>
                <li>Phối hợp làm việc nhóm theo quy trình, quản lý mã nguồn qua Git.</li>
                <li>Tối ưu hóa chức năng giúp tự động hóa và giảm thiểu thời gian thao tác cho người dùng.</li>
              </ul>
            </section>

            <section>
              <h2><FiCode /> DỰ ÁN NỔI BẬT</h2>

              <div className="project-item">
                <h3>Hệ thống Quản lý Hồ sơ Viên chức đi Nước ngoài (TVU)</h3>
                <div className="badges" style={{ marginBottom: '0.75rem' }}>
                  <span className="badge">React</span>
                  <span className="badge">Node.js</span>
                  <span className="badge">Express</span>
                  <span className="badge">PostgreSQL</span>
                  <span className="badge">Gemini API</span>
                </div>
                <ul className="bullet-list">
                  <li><strong>Vai trò:</strong> Full-stack Developer (Team size: 3)</li>
                  <li><strong>Mô tả:</strong> Xây dựng hệ thống số hóa quy trình quản lý hồ sơ theo nghiệp vụ thực tế của trường.</li>
                  <li><strong>Tính năng chính:</strong> Thiết kế Database chuẩn hóa, phát triển các endpoint RESTful API bảo mật và giao diện quản trị React. Tích hợp AI (Gemini) hỗ trợ trích xuất thông tin tự động từ văn bản.</li>
                </ul>
              </div>

              <div className="project-item">
                <h3>LinkUp – Nền tảng Cộng đồng & Trợ lý ảo AI</h3>
                <div className="badges" style={{ marginBottom: '0.75rem' }}>
                  <span className="badge">React / TypeScript</span>
                  <span className="badge">FastAPI (Python)</span>
                  <span className="badge">MongoDB</span>
                  <span className="badge">WebSocket</span>
                </div>
                <ul className="bullet-list">
                  <li><strong>Vai trò:</strong> Backend Developer / API Integration</li>
                  <li><strong>Mô tả:</strong> Nền tảng mạng xã hội thu nhỏ cho phép chat realtime và tương tác với trợ lý ảo.</li>
                  <li><strong>Tính năng chính:</strong> Xử lý backend API hiệu năng cao bằng FastAPI. Xây dựng tính năng chat realtime với WebSocket. Tích hợp AI Assistant với khả năng ghi nhớ ngữ cảnh (AI memory).</li>
                </ul>
              </div>

              <div className="project-item">
                <h3>GrowTech – Website E-commerce Thiết bị số</h3>
                <div className="badges" style={{ marginBottom: '0.75rem' }}>
                  <span className="badge">PHP</span>
                  <span className="badge">MySQL</span>
                  <span className="badge">Bootstrap</span>
                  <span className="badge">AJAX</span>
                </div>
                <ul className="bullet-list">
                  <li><strong>Vai trò:</strong> Web Developer (Dự án cá nhân)</li>
                  <li><strong>Mô tả:</strong> Website thương mại điện tử chuyên kinh doanh laptop và phụ kiện.</li>
                  <li><strong>Tính năng chính:</strong> Xây dựng trọn vẹn luồng xác thực người dùng, giỏ hàng, thanh toán và trang quản trị CMS để quản lý đơn hàng/sản phẩm, xử lý tương tác mượt mà với AJAX.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2><FiAward /> CHỨNG CHỈ & ĐÀO TẠO</h2>
              <div className="cert-item">
                <h3>Google UX Design Professional Certificate</h3>
                <p className="text-secondary">Cấp bởi: Google (thông qua Coursera) &nbsp;|&nbsp; 09/2025</p>
              </div>
            </section>
          </div>
        </main>
      </div>

      <footer>
        <p>© 2026 Đào Công Hoàng Lam. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
import React from 'react';
import './index.css';

import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiGithub,
  FiCalendar,
  FiUser,
  FiSettings,
  FiBriefcase,
  FiCode,
  FiAward,
  FiTarget,
} from 'react-icons/fi';

import { FaGraduationCap } from 'react-icons/fa';

function App() {
  return (
    <div className="container">
      <div className="cv-page">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <header className="cv-header animate-fade-in">

          <div className="header-left">
            <div className="profile-img">
              {/* Thay bằng ảnh cá nhân */}
              <img
                src="/profile.jpg"
                alt="Đào Công Hoàng Lam"
              />
            </div>
          </div>

          <div className="header-center">
            <h1>ĐÀO CÔNG HOÀNG LAM</h1>

            <h2>
              FULL-STACK DEVELOPER
            </h2>

            <div className="contact-info">

              <a href="mailto:daolam7134@gmail.com">
                <FiMail />
                daolam7134@gmail.com
              </a>

              <span>
                <FiPhone />
                +84 343 166 883
              </span>

              <span>
                <FiMapPin />
                Vĩnh Long, Việt Nam
              </span>

              <a
                href="https://github.com/daolam1734"
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub />
                github.com/daolam1734
              </a>

            </div>
          </div>

          <div className="header-right">

            <div className="header-edu-item">
              <span className="icon">
                <FaGraduationCap />
              </span>

              <div>
                <strong>Đại học Trà Vinh</strong>

                <p>
                  Trường Kỹ thuật và Công nghệ
                  <br />
                  Khoa Công nghệ Thông tin
                </p>
              </div>
            </div>

            <div className="header-edu-item">
              <span className="icon">
                <FiCalendar />
              </span>

              <div>
                <strong>2022 – 2026</strong>
                <p>Dự kiến tốt nghiệp</p>
              </div>
            </div>

          </div>
        </header>


        <main className="cv-layout">

          {/* =====================================================
              LEFT COLUMN
          ===================================================== */}
          <aside className="cv-left animate-fade-in delay-1">

            {/* SUMMARY */}
            <section>

              <h2>
                <FiUser />
                TÓM TẮT CHUYÊN MÔN
              </h2>

              <p className="text-justify text-sm">
                Sinh viên Kỹ thuật Phần mềm định hướng
                <strong> Full-stack Development</strong>, có kinh nghiệm
                xây dựng ứng dụng web với React, TypeScript,
                Node.js, Python và FastAPI.
              </p>

              <p className="text-justify text-sm">
                Có kiến thức về phát triển frontend, backend,
                REST API, cơ sở dữ liệu và Git. Có kinh nghiệm
                tích hợp LLM/AI API vào ứng dụng thực tế.
              </p>

            </section>


            {/* SKILLS */}
            <section>

              <h2>
                <FiSettings />
                KỸ NĂNG
              </h2>


              {/* Programming */}
              <div className="skill-group">

                <strong>Ngôn ngữ lập trình</strong>

                <div className="badges">

                  <span className="badge">
                    JavaScript
                  </span>

                  <span className="badge">
                    TypeScript
                  </span>

                  <span className="badge">
                    Python
                  </span>

                  <span className="badge">
                    Java
                  </span>

                  <span className="badge">
                    PHP
                  </span>

                </div>

              </div>


              {/* Frontend */}
              <div className="skill-group">

                <strong>Frontend</strong>

                <div className="badges">

                  <span className="badge">
                    HTML5
                  </span>

                  <span className="badge">
                    CSS3
                  </span>

                  <span className="badge">
                    React
                  </span>

                  <span className="badge">
                    Vite
                  </span>

                  <span className="badge">
                    Tailwind CSS
                  </span>

                </div>

              </div>


              {/* Backend */}
              <div className="skill-group">

                <strong>Backend & API</strong>

                <div className="badges">

                  <span className="badge">
                    Node.js
                  </span>

                  <span className="badge">
                    Express.js
                  </span>

                  <span className="badge">
                    Python
                  </span>

                  <span className="badge">
                    FastAPI
                  </span>

                  <span className="badge">
                    REST API
                  </span>

                </div>

              </div>


              {/* Database */}
              <div className="skill-group">

                <strong>Cơ sở dữ liệu</strong>

                <div className="badges">

                  <span className="badge">
                    PostgreSQL
                  </span>

                  <span className="badge">
                    MySQL
                  </span>

                  <span className="badge">
                    MongoDB
                  </span>

                </div>

              </div>


              {/* Software Engineering */}
              <div className="skill-group">

                <strong>Software Engineering</strong>

                <div className="badges">

                  <span className="badge">
                    OOP
                  </span>

                  <span className="badge">
                    Git
                  </span>

                  <span className="badge">
                    GitHub
                  </span>

                  <span className="badge">
                    Postman
                  </span>

                  <span className="badge">
                    Docker
                  </span>

                </div>

              </div>


              {/* AI */}
              <div className="skill-group">

                <strong>AI / LLM</strong>

                <div className="badges">

                  <span className="badge">
                    Gemini API
                  </span>

                  <span className="badge">
                    LLM Applications
                  </span>

                  <span className="badge">
                    Prompt Engineering
                  </span>

                </div>

              </div>


              {/* English */}
              <div className="skill-group">

                <strong>Ngoại ngữ</strong>

                <p className="text-sm">
                  Tiếng Anh: [Mức độ / chứng chỉ nếu có]
                </p>

              </div>

            </section>

          </aside>


          {/* =====================================================
              RIGHT COLUMN
          ===================================================== */}
          <div className="cv-right animate-fade-in delay-2">


            {/* =====================================================
                EDUCATION
            ===================================================== */}
            <section>

              <h2>
                <FaGraduationCap />
                HỌC VẤN
              </h2>

              <div className="timeline-header">

                <span className="date-badge">
                  2022 – 2026
                </span>

                <span className="location">
                  <FiMapPin />
                  Trà Vinh
                </span>

              </div>

              <h3 className="job-title">
                ĐẠI HỌC TRÀ VINH
              </h3>

              <p>
                Trường Kỹ thuật và Công nghệ –
                Khoa Công nghệ Thông tin
              </p>

              <p>
                <strong>Chuyên ngành:</strong> Kỹ thuật Phần mềm
              </p>

            </section>


            {/* =====================================================
                INTERNSHIP
            ===================================================== */}
            <section>

              <h2>
                <FiBriefcase />
                KINH NGHIỆM
              </h2>

              <div className="timeline-header">

                <span className="date-badge">
                  06/2026 – 08/2026
                </span>

                <span className="location">
                  <FiMapPin />
                  Trà Vinh
                </span>

              </div>

              <h3 className="job-title">
                THỰC TẬP SINH
              </h3>

              <p>
                <strong>
                  Viện Phát triển Nguồn lực –
                  Đại học Trà Vinh
                </strong>
              </p>

              <p className="project-name">
                <strong>Dự án:</strong>{' '}
                Auto-Slide Creator – Chuyển đổi tài liệu
                thành Slides tùy chỉnh
              </p>

            </section>


            {/* =====================================================
                PROJECTS
            ===================================================== */}
            <section>

              <h2>
                <FiCode />
                DỰ ÁN NỔI BẬT
              </h2>


              {/* Project 1 */}
              <div className="project-item">

                <h3>
                  TVU – Hệ thống quản lý hồ sơ viên chức
                  đi nước ngoài
                </h3>

                <div
                  className="badges"
                  style={{ marginBottom: '0.5rem' }}
                >

                  <span className="badge">
                    React
                  </span>

                  <span className="badge">
                    Node.js
                  </span>

                  <span className="badge">
                    Express.js
                  </span>

                  <span className="badge">
                    PostgreSQL
                  </span>

                  <span className="badge">
                    Gemini API
                  </span>

                  <span className="badge">
                    Docker
                  </span>

                </div>

                <ul className="bullet-list">

                  <li>
                    Phát triển frontend với React và
                    backend REST API với Node.js/Express.
                  </li>

                  <li>
                    Làm việc với PostgreSQL và
                    authentication/authorization.
                  </li>

                  <li>
                    Tích hợp Gemini API vào các chức năng
                    AI của hệ thống.
                  </li>

                </ul>

              </div>


              {/* Project 2 */}
              <div className="project-item">

                <h3>
                  LinkUp – Community Chat & AI Assistant
                </h3>

                <div
                  className="badges"
                  style={{ marginBottom: '0.5rem' }}
                >

                  <span className="badge">
                    React
                  </span>

                  <span className="badge">
                    TypeScript
                  </span>

                  <span className="badge">
                    Python
                  </span>

                  <span className="badge">
                    FastAPI
                  </span>

                  <span className="badge">
                    MongoDB
                  </span>

                  <span className="badge">
                    Gemini API
                  </span>

                </div>

                <ul className="bullet-list">

                  <li>
                    Phát triển ứng dụng chat cá nhân và
                    nhóm bằng React/TypeScript.
                  </li>

                  <li>
                    Xây dựng backend API bằng
                    Python/FastAPI.
                  </li>

                  <li>
                    Tích hợp Gemini API cho AI Assistant
                    và các chức năng AI.
                  </li>

                </ul>

              </div>


              {/* Project 3 */}
              <div className="project-item">

                <h3>
                  GrowTech – E-commerce Laptop
                </h3>

                <div
                  className="badges"
                  style={{ marginBottom: '0.5rem' }}
                >

                  <span className="badge">
                    PHP
                  </span>

                  <span className="badge">
                    MySQL
                  </span>

                  <span className="badge">
                    JavaScript
                  </span>

                  <span className="badge">
                    Bootstrap
                  </span>

                  <span className="badge">
                    AJAX
                  </span>

                </div>

                <ul className="bullet-list">

                  <li>
                    Phát triển website thương mại điện tử
                    với chức năng sản phẩm, giỏ hàng và
                    đặt hàng.
                  </li>

                  <li>
                    Xây dựng chức năng quản trị sản phẩm
                    và đơn hàng.
                  </li>

                </ul>

              </div>

            </section>


            {/* =====================================================
                CERTIFICATION
            ===================================================== */}
            <section>

              <h2>
                <FiAward />
                CHỨNG CHỈ
              </h2>

              <div className="cert-item">

                <h3>
                  Google UX Design Professional Certificate
                </h3>

                <p className="text-secondary">
                  Google / Coursera
                  &nbsp;|&nbsp;
                  09/11/2025
                </p>

              </div>

            </section>


            {/* =====================================================
                CAREER OBJECTIVE
            ===================================================== */}
            <section>

              <h2>
                <FiTarget />
                MỤC TIÊU NGHỀ NGHIỆP
              </h2>

              <p className="text-justify text-sm">

                Ứng tuyển vị trí{' '}
                <strong>Intern / Fresher Full-stack Developer</strong>,
                định hướng phát triển chuyên sâu về frontend,
                backend và xây dựng các ứng dụng web thực tế.

              </p>

            </section>

          </div>

        </main>

      </div>


      <footer>
        <p>
          © 2026 Đào Công Hoàng Lam
        </p>
      </footer>

    </div>
  );
}

export default App;

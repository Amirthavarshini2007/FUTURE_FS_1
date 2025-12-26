* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", sans-serif;
}
body {
  background-color: #f5f7fa;
  color: #333;
}
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 20px 10%;
  background: #0f172a;
}
.logo {
  color: #38bdf8;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 25px;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
}
.hero {
  height: 90vh;
  text-align: center;
  padding-top: 120px;
  background: linear-gradient(120deg, #0f172a, #1e293b);
  color: white;
}
.hero h1 {
  font-size: 3rem;
}
.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 30px;
  background: #38bdf8;
  color: #000;
  border-radius: 30px;
  text-decoration: none;
}
.section {
  padding: 80px 10%;
}
.section-title {
  text-align: center;
  margin-bottom: 40px;
}
.resume-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
.resume-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}
.project-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.3s;
}
.project-card:hover {
  transform: translateY(-8px);
}
form {
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
input, textarea {
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
}
footer {
  text-align: center;
  padding: 20px;
  background: #0f172a;
  color: white;
}
.reveal {
  opacity: 0;
  transform: translateY(60px);
  transition: all 0.8s ease-out;
}
.reveal.active {
  opacity: 1;
  transform: translateY(0);
}
.reveal-left {
  opacity: 0;
  transform: translateX(-80px);
  transition: all 0.8s ease-out;
}

.reveal-left.active {
  opacity: 1;
  transform: translateX(0);
}
.reveal-right {
  opacity: 0;
  transform: translateX(80px);
  transition: all 0.8s ease-out;
}
.reveal-right.active {
  opacity: 1;
  transform: translateX(0);
}

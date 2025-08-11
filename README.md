# 🧠 Brain Care – Mental Health Prediction & Support Platform

Brain Care is a full-stack AI-powered mental health assistance platform.  
It predicts potential mental health issues using machine learning and offers a chatbot for instant support, appointment scheduling, and more.  
Built with **ReactJS** (frontend), **Node.js/Express** (backend), and **Python/Flask** (ML microservice) — all connected via a **SQLite** database.

---

## 📌 Features
- AI-based **Mental Health Prediction** from user symptoms
- **Interactive Chatbot** for mental health tips & guidance
- **Appointment Booking** with mental health professionals
- **User Authentication** (Login/Register)
- Real-time Communication between frontend, backend & ML service

---

## 🛠 Tech Stack

**Frontend:** ReactJS, Vite, Axios, TailwindCSS  
**Backend:** Node.js, Express.js  
**Machine Learning:** Python, Flask, Scikit-learn, Pandas  
**Database:** SQLite  
**Deployment:** Vercel (Frontend), Render/Heroku (Backend & ML API)

---

## 📂 Project Structure
```

Brain-Care/
│── backend/           # Node.js + Express API
│── frontend/          # ReactJS + Vite frontend
│── ml-service/        # Python + Flask ML model
│── database.sqlite    # SQLite database
│── package.json
│── README.md

````


## ⚙️ Prerequisites

Make sure you have installed:
- **Node.js** (v16 or later)
- **npm** or **yarn**
- **Python** (3.8 or later)
- **pip** (Python package manager)

---

## 📥 Installation & Setup

## 1️⃣ Clone the Repository
```bash
git clone https://github.com/theefatymah/FYP-Brain-Care.git
cd FYP-Brain-Care
````

---

## 2️⃣ Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

### 3️⃣ Install Backend Dependencies

```bash
cd ../backend
npm install
```

---

### 4️⃣ Install ML Service Dependencies

```bash
cd ../ml-service
pip install -r requirements.txt
```

---

## 🚀 Running the Project Locally

## Start Frontend (React + Vite)

```bash
cd frontend
npm run dev
```

## Start Backend (Node + Express)

```bash
cd backend
node index.js
```

### Start ML Service (Flask API)

```bash
cd ml-service
python app.py
```

---

## 🌐 Deployment

* **Frontend (React)** → [Vercel](https://brain-care-lime.vercel.app/)"
---

## 📊 Database Schema

**Tables:**

* **users** → stores user login info
* **support** → appointment details
* **predictions** → mental health prediction results
* **reviews** → feedback from users


---

## 🧪 Testing

* **Unit Testing** → Jest for backend, Pytest for ML service
* **Integration Testing** → API endpoint testing
* **System Testing** → End-to-end workflows

---

## 📜 License

This project is licensed under the MIT License.

---

## 🤝 Contributors

* **Mah Noor Fatima** – Project Lead & Full-stack Developer

---

## 💡 How to Contribute

1. Fork the repo
2. Create a feature branch
3. Commit changes
4. Push and create a Pull Request

---




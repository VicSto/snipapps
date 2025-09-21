# 🧠 Snipapps

**Snipapps** is a full-stack Python workspace for showcasing modular tools ("Snip Apps") built with FastAPI, SQLAlchemy, and React. Designed for rapid prototyping, learning, and portfolio presentation — all served from a single Heroku instance.

---

## 🚀 Technologies Used

### Backend

- **FastAPI** – Modern, async Python web framework
- **SQLAlchemy** – ORM for database modeling and queries
- **Jinja2** – Server-side HTML templating
- **PostgreSQL** – Production database (Heroku-compatible)

### Frontend

- **React** – Component-based UI framework
- **Vite** – Fast build tool for bundling React
- **Jinja2 + React Hybrid** – Server-rendered pages with embedded React components

### Dev & Deployment

- **Heroku** – Cloud platform for hosting full-stack apps
- **Gunicorn** – WSGI server for FastAPI
- **Whitenoise** – Static file serving in production
- **Pytest** – Testing framework

---

## 🧩 Adding a New Snip App

Each Snip App is a self-contained tool. To add one:

1. **Backend Logic**

   - Create a new service in `app/services/your_tool.py`
   - Add any models to `app/models/` if needed
   - Define routes in `app/routes/tools.py`

2. **Frontend Component**

   - Add a React component in `frontend/src/components/YourTool.jsx`
   - Mount it in `index.jsx` or embed via Jinja2 in `templates/your_tool.html`

3. **Template**

   - Create a new HTML file in `app/templates/`
   - Reference React bundle via `<script src="/static/js/main.js" defer></script>`

4. **Database (Optional)**
   - Add models and migrations
   - Use SQLAlchemy session in your service logic

---

## 🛠️ Build, Run, and Test

### 1. Install Dependencies

```bash
# Python
pip install -r requirements.txt
# React
cd frontend
npm install
```

### 2. Build Frontend

```bash
npm run build
# Output goes to /static/js/
```

### 3. Run Locally

```bash
uvicorn app.main:app --reload
```

### 4. Run Tests

```bash
pytest
```

## 📦 Release Instructions (Heroku)

### 1. Build Frontend

```bash
cd frontend
npm run build
```

### 2. Commit Static Files

```bash
git add static/js/
git commit -m "Add compiled React build"
```

### 3. Push to Heroku

```bash
git push heroku main
```

### 4. Scale Dynos

```bash
heroku ps:scale web=1
```

## 📚 License

MIT License. Feel free to fork, remix, and contribute.

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from app.routes import pages

app = FastAPI()

# Mount static files (for CSS, JS, etc.)
# app.mount("/static", StaticFiles(directory="static"), name="static")

# Include page routes
app.include_router(pages.router)

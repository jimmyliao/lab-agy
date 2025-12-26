from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
import asyncio
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy import text
from pymilvus import connections, utility

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database Config
DATABASE_URL = os.getenv("DATABASE_URL", "postgresql+asyncpg://user:password@localhost:5432/dbname")
engine = create_async_engine(DATABASE_URL, echo=True)

# Milvus Config
MILVUS_HOST = os.getenv("MILVUS_HOST", "localhost")
MILVUS_PORT = os.getenv("MILVUS_PORT", "19530")

@app.get("/")
def read_root():
    return {"message": "Hello from FastAPI Agentic Backend"}

@app.get("/api/health")
async def health_check():
    status = {"api": "ok", "postgres": "unknown", "milvus": "unknown"}
    
    # Check Postgres
    try:
        async with engine.connect() as conn:
            await conn.execute(text("SELECT 1"))
        status["postgres"] = "connected"
    except Exception as e:
        status["postgres"] = f"error: {str(e)}"

    # Check Milvus
    try:
        connections.connect("default", host=MILVUS_HOST, port=MILVUS_PORT)
        if utility.get_server_version():
            status["milvus"] = "connected"
    except Exception as e:
        status["milvus"] = f"error: {str(e)}"
    
    return status

@app.get("/api/articles")
async def get_articles():
    # In a real scenario, this would fetch from Postgres
    # For now, we move the mock data to the backend to demonstrate API connectivity
    return [
        {
            "id": "1",
            "title": "Apple releases new M5 Chip for Enterprise AI (Fetched from Backend)",
            "excerpt": "The new chip promises 5x performance improvements for local LLM inference.",
            "category": "Enterprise",
            "date": "2025-12-26",
            "author": "Tim Cook",
            "imageUrl": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        },
        {
            "id": "2",
            "title": "Agentic Workflows: The Future of Automation (Fetched from Backend)",
            "excerpt": "How multi-agent systems are redefining productivity in the modern workplace.",
            "category": "Agentic",
            "date": "2025-12-24",
            "author": "Sam Altman",
            "imageUrl": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
        },
        {
            "id": "3",
            "title": "Understanding Transformer Architectures (Fetched from Backend)",
            "excerpt": "A deep dive into the underlying technology powering ChatGPT and Gemini.",
            "category": "AI",
            "date": "2025-12-23",
            "author": "Yann LeCun",
            "imageUrl": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        },
        {
            "id": "4",
            "title": "Microsoft Copilot Pro for Business Review (Fetched from Backend)",
            "excerpt": "Is it worth the investment for small to medium businesses?",
            "category": "Enterprise",
            "date": "2025-12-22",
            "author": "Satya Nadella",
            "imageUrl": "https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80&w=800"
        }
    ]

# AGENTS.md

[English](AGENTS.md) | [繁體中文](AGENTS.zh-TW.md)

---

## English

### Project Overview
**The Agentic Lens** is a full-stack news platform focused on Agentic AI and Enterprise technology.

### Technical Stack
- **Frontend**: Next.js 14+ (App Router), Tailwind CSS, TypeScript.
- **Backend**: FastAPI (Python 3.11+).
- **Database**: PostgreSQL (Relational), Milvus (Vector database for AI features).
- **Environment**: Docker Compose orchestrated services.

### Coding Conventions
- **Language**: Use Traditional Chinese for user-facing communication.
- **Components**: Functional components with TypeScript interfaces.
- **Styling**: Vanilla CSS or Tailwind CSS (check `globals.css` first).
- **Docker**: Always ensure native dependencies (like `lightningcss`) are built within the container (see `docker-compose.yml`).

---

## 繁體中文

### 專案概覽
**The Agentic Lens (代理人透鏡)** 是一個專注於代理式 AI (Agentic AI) 與企業級技術的全端新聞平台。

### 技術棧
- **前端**: Next.js 14+ (App Router), Tailwind CSS, TypeScript。
- **後端**: FastAPI (Python 3.11+)。
- **資料庫**: PostgreSQL (關聯式), Milvus (向量資料庫，用於 AI 功能)。
- **環境**: 使用 Docker Compose 進行服務編排。

### 開發規範
- **語言**: 與使用者溝通時預設使用 **繁體中文**。
- **組件**: 使用帶有 TypeScript 介面的功能性組件。
- **樣式**: 使用 Vanilla CSS 或 Tailwind CSS (請先參考 `globals.css`)。
- **容器化**: 確保原生依賴項 (如 `lightningcss`) 在容器內建置，以避免跨平台相容性問題。

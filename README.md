# PT Sari Segar Laut Indonesia - Website

Premium seafood supplier and exporter website built with Next.js 15.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI Assistant**: Google Gemini AI
- **Icons**: Lucide React

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file from `.env.example`:
```bash
cp .env.example .env.local
```

3. Add your Gemini API key to `.env.local`:
```
GEMINI_API_KEY=your_api_key_here
```

## 🛠️ Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## 🏗️ Build

Create a production build:

```bash
npm run build
```

## 🚢 Production

Start the production server:

```bash
npm start
```

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/          # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Products.tsx
│   │   ├── Certificates.tsx
│   │   ├── GeminiAssistant.tsx
│   │   ├── Footer.tsx
│   │   └── VisionMission.tsx
│   ├── services/
│   │   └── geminiService.ts # Gemini AI integration
│   └── types.ts             # TypeScript types
├── public/                  # Static assets
└── next.config.ts          # Next.js configuration
```

## 🌟 Features

- 🐟 Premium seafood product showcase
- 🤖 AI-powered customer assistant (Gemini)
- 📱 Fully responsive design
- 🎨 Custom Tailwind CSS design system
- 📜 Quality certifications display
- 🌍 International B2B focused

## 🔑 Environment Variables

| Variable | Description |
|----------|-------------|
| `GEMINI_API_KEY` | Google Gemini API key for AI assistant |

## 📝 License

Private - PT Sari Segar Laut Indonesia
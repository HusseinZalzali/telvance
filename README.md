# Telvance Solutions - Angular Frontend

A modern, professional Angular frontend website for Telvance Solutions, a telecom & software solutions company.

## Tech Stack

- **Angular 17+** - Modern Angular with standalone components
- **TypeScript** - Type-safe development
- **SCSS** - Advanced styling with variables and mixins
- **Responsive Design** - Mobile, tablet, and desktop optimized

## Features

- 🎨 Modern UI/UX inspired by enterprise leaders (Cisco, Ericsson, AWS, Palantir)
- 🌈 Glassmorphism effects and gradient accents
- 📱 Fully responsive design
- ⚡ Smooth animations and transitions
- 🎯 Clean component architecture
- 🚀 Standalone components (Angular 17+)

## Project Structure

```
src/
├── app/
│   ├── core/              # Layout components
│   │   ├── navbar/
│   │   └── footer/
│   ├── shared/            # Reusable components
│   │   ├── hero/
│   │   ├── service-card/
│   │   └── section-title/
│   ├── pages/             # Page components
│   │   ├── home/
│   │   ├── about/
│   │   ├── services/
│   │   ├── solutions/
│   │   └── contact/
│   ├── data/              # Mock data
│   │   ├── services.data.ts
│   │   └── solutions.data.ts
│   └── styles/            # Global styles
│       ├── _variables.scss
│       ├── _mixins.scss
│       └── _global.scss
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to:
```
http://localhost:4200
```

## Pages

- **Home** (`/`) - Hero section, stats, services preview, why choose us
- **About** (`/about`) - Mission, vision, values, timeline, expertise
- **Services** (`/services`) - All services with detailed cards
- **Solutions** (`/solutions`) - Industry-specific solutions
- **Contact** (`/contact`) - Contact form and company information

## Branding

- **Primary Colors:**
  - Deep Blue: `#0A1AFF`
  - Cyan: `#00E5FF`
  - Dark Gray: `#0F172A`
  - Soft White: `#F8FAFC`

- **Font:** Inter (Google Fonts)

## Development

### Build

```bash
npm run build
```

### Watch Mode

```bash
npm run watch
```

## Customization

### Colors

Edit `src/app/styles/_variables.scss` to customize the color scheme.

### Content

- Services: `src/app/data/services.data.ts`
- Solutions: `src/app/data/solutions.data.ts`
- Page content: Individual component TypeScript files

### Favicon

Add your favicon.ico file to `src/favicon.ico` to replace the default Angular favicon.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - Telvance Solutions

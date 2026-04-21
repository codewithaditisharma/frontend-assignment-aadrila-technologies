# AI-Powered Document Automation & Fraud Detection

A modern, responsive React application showcasing AI-powered document automation and fraud detection solutions. Built with React, Vite, TypeScript, and Tailwind CSS.

## Link
https://frontend-assignment-aadrila.netlify.app/

## 🚀 Features

- **Fully Responsive Design**: Optimized for mobile (320px+), tablet, and desktop viewports
- **Modern UI/UX**: Clean, professional interface with smooth animations and transitions
- **Interactive Components**: 
  - Fixed navigation header with mobile menu
  - Carousel/slider for team members and blog posts
  - Functional contact forms with validation
  - Smooth scrolling navigation
- **Multi-page Routing**: React Router integration for seamless navigation
- **Production Ready**: Optimized build with no console errors

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher) - [Download Node.js](https://nodejs.org/en/)
- **npm** (comes with Node.js) or **yarn**

## 🛠️ Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd /path/to/project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

   This will install all required dependencies including:
   - React & React DOM
   - React Router DOM
   - Vite
   - Tailwind CSS
   - Radix UI components
   - Lucide React icons
   - And other project dependencies

## 🏃 Running the Development Server

To start the development server:

```bash
npm run dev
```

After a few seconds, the application will be available at:
- **Local**: [http://localhost:5173/](http://localhost:5173/)
- The server will automatically reload when you make changes to the code

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```

This will:
- Compile and optimize all assets
- Generate production-ready files in the `dist/` directory
- Minify JavaScript and CSS
- Optimize images and assets

The build output will be in the `dist/` directory, ready for deployment.

## 📁 Project Structure

```
project/
├── public/                 # Static assets (images, SVGs)
├── src/
│   ├── components/
│   │   └── ui/            # Reusable UI components (Button, Card, Input, etc.)
│   ├── lib/
│   │   └── utils.ts       # Utility functions
│   ├── screens/
│   │   ├── Website/       # Main website pages
│   │   │   └── sections/  # Website sections (Hero, Products, Contact, etc.)
│   │   └── AboutUs/       # About Us page
│   └── index.tsx          # Application entry point
├── index.html             # HTML template
├── package.json           # Project dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tailwind.css           # Tailwind CSS styles
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## 🎨 Technologies Used

- **React 18.2.0** - UI library
- **TypeScript** - Type safety
- **Vite 6.0.4** - Build tool and dev server
- **Tailwind CSS 3.4.16** - Utility-first CSS framework
- **React Router DOM 6.8.1** - Client-side routing
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **Tailwind CSS Animate** - Animation utilities

## 📱 Pages & Routes

- `/` - Home page with all sections
- `/about-us` - About Us page with team information

## 🎯 Key Sections

1. **Hero Section**: Main banner with call-to-action buttons
2. **Industries Section**: Showcase of industries served
3. **Products Section**: Product features and benefits
4. **Contact Us Section**: Contact form with validation
5. **Blogs Section**: Blog posts carousel
6. **Footer Section**: Contact information and footer
##
**Built with ❤️ using React, Vite, and Tailwind CSS**

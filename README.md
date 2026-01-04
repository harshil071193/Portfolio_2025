# Harshil Dave - Frontend Developer Portfolio

A modern, elegant, and professional portfolio website showcasing 7+ years of frontend development experience. Built with React.js, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Elegant & Professional Design** - Clean, modern UI that reflects your expertise
- 🌓 **Dark/Light Mode** - Auto theme switcher with persistent preferences
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- ✨ **Smooth Animations** - Scroll-triggered animations using Framer Motion
- 🚀 **Fast Performance** - Built with Vite for optimal loading speeds
- 📧 **Contact Form** - Integrated Netlify Forms for easy client communication
- 🎯 **SEO Optimized** - Meta tags and Open Graph for better discoverability

## Tech Stack

- **React.js** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment to Netlify

### Option 1: Deploy via Netlify Dashboard

1. **Push to GitHub/GitLab/Bitbucket**
   - Create a new repository
   - Push your code to the repository

2. **Connect to Netlify**
   - Go to [Netlify](https://www.netlify.com/)
   - Sign up or log in
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider and select your repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Configure Netlify Forms** (for contact form)
   - The contact form is already configured with `data-netlify="true"`
   - Netlify will automatically detect and handle form submissions
   - You can view submissions in the Netlify dashboard under "Forms"

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Login to Netlify**
```bash
netlify login
```

3. **Initialize and Deploy**
```bash
netlify init
netlify deploy --prod
```

### Custom Domain

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow the instructions to configure your DNS

## Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/     # React components
│   │   ├── Header/     # Navigation header
│   │   ├── Hero/       # Hero section
│   │   ├── About/      # About section
│   │   ├── Experience/ # Work experience timeline
│   │   ├── Skills/     # Skills showcase
│   │   ├── Projects/   # Projects grid
│   │   ├── Contact/    # Contact form
│   │   └── Footer/     # Footer component
│   ├── context/        # React context (Theme)
│   ├── data/           # Data files (experience, skills, projects)
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── netlify.toml        # Netlify configuration
└── package.json        # Dependencies
```

## Customization

### Update Personal Information

1. **Contact Information**: Edit `src/components/Contact/Contact.jsx`
2. **Experience**: Update `src/data/experience.js`
3. **Skills**: Update `src/data/skills.js`
4. **Projects**: Update `src/data/projects.js`
5. **About Section**: Edit `src/components/About/About.jsx`

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
  },
}
```

### Add Your Photo

1. Add your profile image to `public/` directory
2. Update the Hero component to include your image

## Form Handling

The contact form uses Netlify Forms. To test locally:

1. Run `netlify dev` instead of `npm run dev`
2. This enables Netlify Forms in development

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Contact

**Harshil Dave**
- Email: harshildave10@gmail.com
- Phone: +91 9033667800
- Location: Ahmedabad, India

---

Built with ❤️ using React.js and Tailwind CSS

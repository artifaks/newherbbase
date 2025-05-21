# Herb Harmony Visualizer

A comprehensive web application for exploring and learning about medicinal herbs, featuring a detailed herb database, blog posts, and premium ebooks with Stripe integration.

## Features

- 🌿 Extensive herb database with detailed information on 48+ medicinal herbs across six categories
- 📚 Blog posts about herbal medicine and wellness
- 📖 Premium ebook store with secure Stripe payment integration
- 🔐 User authentication with email and Google OAuth
- 🛒 Shopping cart and purchase verification system
- 🔍 Advanced search and filtering capabilities
- 💬 AI-powered herb chat assistant
- 📱 Responsive design for all devices
- 🌐 WordPress.com Business integration

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Supabase (Backend and Authentication)
- Stripe (Payment Processing)
- Shadcn UI
- React Router
- React Query
- WordPress.com Business (CMS Integration)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/pureherbalwisdom/herb-harmony-visualizer.git
   cd herb-harmony-visualizer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

The application can be deployed in multiple ways:

### WordPress.com Business Integration

This application is designed to be embedded in a WordPress.com Business site. Use the included deployment script to automate the process:

```bash
npm run deploy
```

The script will:
1. Build the application
2. Deploy it to Netlify
3. Generate WordPress embed code
4. Synchronize content with WordPress

### Standalone Deployment

For standalone deployment on Netlify:

```bash
npm run build
npx netlify deploy --prod
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

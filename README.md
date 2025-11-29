# Full-Stack E-Commerce Web Application

A modern, responsive e-commerce platform built with React, TypeScript, and Supabase. This application provides a complete shopping experience with product browsing, user authentication, shopping cart functionality, and a beautiful, accessible user interface.

## 🚀 Features

### Core Functionality
- **Product Catalog**: Browse through a diverse range of products including electronics, clothing, photography equipment, and home & office items
- **Product Details**: Detailed product pages with descriptions, pricing, ratings, and stock information
- **Shopping Cart**: Add/remove items, adjust quantities, and view cart summary
- **User Authentication**: Register and login functionality (currently using mock authentication)
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between light and dark themes for better user experience

### User Experience
- **Modern UI**: Clean, intuitive interface built with Radix UI components
- **Smooth Animations**: Framer Motion animations for enhanced interactivity
- **Toast Notifications**: Real-time feedback for user actions
- **Loading States**: Proper loading indicators throughout the application
- **Error Handling**: Comprehensive error handling and user feedback

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **Form Validation**: Robust form validation using React Hook Form and Zod
- **State Management**: Context-based state management for authentication and cart
- **Routing**: Client-side routing with React Router
- **Performance**: Optimized with Vite for fast development and building

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with concurrent features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI components
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **React Toastify** - Toast notifications
- **Lucide React** - Icon library

### Backend
- **Supabase** - Backend-as-a-Service for database and authentication

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── ProductCard.tsx # Product display card
│   ├── LoadingSpinner.tsx # Loading indicator
│   └── ProtectedRoute.tsx # Route protection
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Products.tsx    # Product listing
│   ├── ProductDetail.tsx # Individual product page
│   ├── Cart.tsx        # Shopping cart
│   ├── Login.tsx       # User login
│   ├── Register.tsx    # User registration
│   ├── About.tsx       # About page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
│   ├── useAuth.tsx     # Authentication logic
│   ├── useCart.tsx     # Cart management
│   └── useTheme.tsx    # Theme management
├── data/               # Static data
│   └── products.ts     # Product catalog
└── types.ts            # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd full-stack-e-commerce-web-application
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your Supabase configuration:
   ```env
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Supabase Setup
1. Create a new project on [Supabase](https://supabase.com)
2. Go to Settings > API to get your project URL and anon key
3. Add these to your `.env` file as shown above

### Database Schema
The application expects the following tables in Supabase:
- `products` - Product catalog
- `users` - User accounts
- `cart_items` - Shopping cart items
- `orders` - Order history

## 🎨 Customization

### Styling
The application uses Tailwind CSS for styling. You can customize the theme by modifying:
- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Global styles

### Components
All components are built with Radix UI primitives, making them highly customizable. Refer to the [Radix UI documentation](https://www.radix-ui.com) for customization options.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Product images from [Unsplash](https://unsplash.com)
- Icons from [Lucide React](https://lucide.dev)
- UI components from [Radix UI](https://www.radix-ui.com)

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the development team.

---

**Happy Shopping! 🛒**

# SOW99 - Full Stack Web Application

## Project Overview
A full-stack web application with Terms and Pricelist pages, built for SOW (Statement of Work) demonstration. The application supports both English and Swedish languages with responsive design for desktop, tablet, and mobile devices.

## Live Demo
- **Frontend**: https://sowfrontend-bcmv.vercel.app
- **Backend API**: https://sowbackend.onrender.com

## Technology Stack

### Frontend
- **Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Language**: JavaScript (ES6+)
- **Styling**: Vanilla CSS
- **Routing**: React Router DOM 7.8.2
- **HTTP Client**: Axios 1.11.0
- **Deployment**: Vercel

### Backend
- **Framework**: Express.js 5.1.0
- **Language**: JavaScript (ES6+)
- **Database**: PostgreSQL
- **ORM**: Sequelize 6.37.7
- **CORS**: cors 2.8.5
- **Environment**: dotenv 17.2.2
- **Deployment**: Render

### Database
- **Type**: PostgreSQL
- **Hosting**: Render (Free Tier)
- **Tables**: 
  - `terms_contents` - Terms and conditions data
  - `pricelist_items` - Product/service pricing data

## Project Structure

```
SOW99/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   └── styles.css
│   │   ├── context/
│   │   │   └── LanguageContext.jsx
│   │   ├── pages/
│   │   │   ├── Terms.jsx
│   │   │   ├── terms.css
│   │   │   ├── Pricelist.jsx
│   │   │   └── pricelist.css
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── vercel.json
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   ├── TermsContent.js
│   │   └── PricelistItem.js
│   ├── routes/
│   │   ├── terms.js
│   │   └── pricelist.js
│   ├── server.js
│   ├── package.json
│   └── render.yaml
└── README.md
```

## Features

### Terms Page
- ✅ Responsive design (desktop, tablet, mobile)
- ✅ Language toggle (English/Swedish)
- ✅ Database-driven content
- ✅ Hamburger menu for mobile
- ✅ Smooth scrolling behavior

### Pricelist Page
- ✅ Responsive table design
- ✅ Editable fields with real-time updates
- ✅ Database persistence
- ✅ Search functionality
- ✅ Mobile-optimized layout

### Language Support
- ✅ English (EN)
- ✅ Swedish (SV)
- ✅ Context-based language switching
- ✅ Persistent language selection

## API Endpoints

### Terms
- `GET /api/terms` - Fetch all terms content
- Response: `{ success: true, data: [...] }`

### Pricelist
- `GET /api/pricelist` - Fetch all pricelist items
- `PUT /api/pricelist/:id` - Update pricelist item
- Response: `{ success: true, data: [...] }`

### Health Check
- `GET /health` - Server health status
- `GET /health/db` - Database connection status

## Database Schema

### Terms Content Table
```sql
CREATE TABLE terms_contents (
  id SERIAL PRIMARY KEY,
  title_en VARCHAR(255) NOT NULL,
  title_sv VARCHAR(255) NOT NULL,
  content_en TEXT NOT NULL,
  content_sv TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  "order" INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Pricelist Items Table
```sql
CREATE TABLE pricelist_items (
  id SERIAL PRIMARY KEY,
  article_no VARCHAR(50),
  product_service VARCHAR(255) NOT NULL,
  in_price DECIMAL(10,2),
  price DECIMAL(10,2) NOT NULL,
  unit VARCHAR(50),
  in_stock INTEGER DEFAULT 0,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

## Installation & Setup

### Prerequisites
- Node.js 18.0.0 or higher
- PostgreSQL database
- Git

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
npm install
# Create .env file with database credentials
npm start
```

### Environment Variables

#### Frontend (.env)
```bash
VITE_API_URL=https://sowbackend.onrender.com/api
```

#### Backend (.env)
```bash
DB_HOST=your_db_host
DB_PORT=5432
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
PORT=8001
NODE_ENV=production
```

## Deployment

### Frontend (Vercel)
1. Connect GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add environment variable: `VITE_API_URL`

### Backend (Render)
1. Connect GitHub repository to Render
2. Set build command: `npm install`
3. Set start command: `npm start`
4. Configure PostgreSQL database
5. Set environment variables

## Development Notes

### Code Quality
- ESLint configuration for code linting
- Consistent code formatting
- Error handling in API routes
- Responsive design principles

### Performance Optimizations
- Code splitting with Vite
- Lazy loading for components
- Optimized bundle size
- Efficient database queries

### Security Considerations
- CORS configuration
- Input validation
- SQL injection prevention (Sequelize ORM)
- Environment variable protection

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Mobile Support
- iOS Safari 14+
- Android Chrome 90+
- Responsive breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## Future Enhancements
- User authentication
- Advanced search filters
- Export functionality
- Real-time updates
- Offline support

## License
This project is created for SOW demonstration purposes.

## Contact
For questions or support, please contact the development team.

---

**Last Updated**: December 2024
**Version**: 1.0.0

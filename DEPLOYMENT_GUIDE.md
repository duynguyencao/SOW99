# Deployment Guide - SOW99

## Overview
This guide covers the complete deployment process for the SOW99 application on Vercel (Frontend) and Render (Backend).

## Prerequisites
- GitHub account
- Vercel account (free)
- Render account (free)
- PostgreSQL database access

## Frontend Deployment (Vercel)

### Step 1: Prepare Repository
```bash
# Ensure all files are committed
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### Step 2: Vercel Configuration
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure project settings:
   - **Framework Preset**: Vite
   - **Root Directory**: `./frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Step 3: Environment Variables
Add the following environment variable in Vercel dashboard:
```
VITE_API_URL=https://sowbackend.onrender.com/api
```

### Step 4: Deploy
Click "Deploy" and wait for the build process to complete.

## Backend Deployment (Render)

### Step 1: Prepare Repository
```bash
# Ensure render.yaml is in the root of backend directory
# Ensure package.json has correct scripts
```

### Step 2: Render Configuration
1. Go to [render.com](https://render.com)
2. Click "New Web Service"
3. Connect your GitHub repository
4. Configure service:
   - **Name**: `sow99-backend`
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

### Step 3: Database Setup
1. In Render dashboard, create "New PostgreSQL"
2. Configure database:
   - **Name**: `sow99-db`
   - **Database**: `sow99`
   - **User**: `sow99_user`
   - **Plan**: Free

### Step 4: Environment Variables
Render will automatically set database variables from the connected database:
- `DB_HOST`
- `DB_PORT`
- `DB_NAME`
- `DB_USER`
- `DB_PASSWORD`

Additional variables:
- `NODE_ENV`: `production`
- `PORT`: `8001`

### Step 5: Deploy
Click "Create Web Service" and wait for deployment.

## Database Initialization

### Step 1: Connect to Database
```bash
# Using psql
psql -h your-db-host -U your-username -d your-database
```

### Step 2: Create Tables
```sql
-- Terms content table
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

-- Pricelist items table
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

### Step 3: Insert Sample Data
```sql
-- Sample terms data
INSERT INTO terms_contents (title_en, title_sv, content_en, content_sv, "order") VALUES
('Terms of Service', 'Användarvillkor', 'These are the terms of service...', 'Detta är användarvillkoren...', 1),
('Privacy Policy', 'Integritetspolicy', 'This is our privacy policy...', 'Detta är vår integritetspolicy...', 2);

-- Sample pricelist data
INSERT INTO pricelist_items (article_no, product_service, in_price, price, unit, in_stock, description, sort_order) VALUES
('A001', 'Web Development', 50.00, 100.00, 'hour', 10, 'Custom web development services', 1),
('A002', 'Mobile App', 75.00, 150.00, 'hour', 5, 'Mobile application development', 2),
('A003', 'Consulting', 100.00, 200.00, 'hour', 20, 'Technical consulting services', 3);
```

## Verification Steps

### Step 1: Backend Health Check
```bash
# Test backend endpoints
curl https://sowbackend.onrender.com/health
curl https://sowbackend.onrender.com/api/terms
curl https://sowbackend.onrender.com/api/pricelist
```

### Step 2: Frontend Testing
1. Open your Vercel URL
2. Test navigation between pages
3. Test language toggle
4. Test responsive design
5. Check browser console for errors

### Step 3: Database Connectivity
1. Verify data is loading from database
2. Test CRUD operations
3. Check for any connection errors

## Troubleshooting

### Common Issues

#### Backend Not Starting
- Check environment variables
- Verify database connection
- Check Render logs for errors

#### Frontend Build Failing
- Check Vite configuration
- Verify all dependencies are installed
- Check for TypeScript errors

#### Database Connection Issues
- Verify database credentials
- Check network connectivity
- Ensure database is accessible from Render

#### CORS Issues
- Verify CORS configuration in backend
- Check if frontend URL is allowed
- Test API calls directly

### Debug Commands
```bash
# Check backend logs
# In Render dashboard, go to Logs tab

# Check frontend build
npm run build
npm run preview

# Test API locally
curl http://localhost:8001/api/terms
```

## Performance Optimization

### Frontend
- Enable Vercel's edge caching
- Optimize images and assets
- Use CDN for static resources

### Backend
- Enable database connection pooling
- Implement caching strategies
- Monitor memory usage

## Monitoring

### Vercel Analytics
- Enable Vercel Analytics for performance monitoring
- Monitor Core Web Vitals
- Track user interactions

### Render Monitoring
- Monitor service health
- Check database performance
- Set up alerts for downtime

## Backup Strategy

### Database Backup
- Regular automated backups (Render Pro)
- Export data periodically
- Test restore procedures

### Code Backup
- Git repository as primary backup
- Regular commits and pushes
- Tag releases for version control

## Security Considerations

### Environment Variables
- Never commit .env files
- Use secure variable storage
- Rotate credentials regularly

### Database Security
- Use strong passwords
- Enable SSL connections
- Regular security updates

### API Security
- Implement rate limiting
- Validate all inputs
- Use HTTPS only

## Maintenance

### Regular Tasks
- Monitor service health
- Update dependencies
- Check for security vulnerabilities
- Review performance metrics

### Updates
- Test updates in staging
- Deploy during low-traffic periods
- Have rollback plan ready

---

**Deployment Guide Version**: 1.0.0
**Last Updated**: December 2024

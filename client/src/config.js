// API Configuration
// Automatically uses production or development API URL

const config = {
  apiUrl: process.env.REACT_APP_API_URL || 
          (process.env.NODE_ENV === 'production' 
            ? 'https://nomopix-designs.onrender.com'
            : 'http://localhost:5000'),
};

export default config;

import React from 'react';

import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom
import './i18n'; // This line imports and runs your i18n.js file
import Resume from './components/Resume';
import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root')).render(<Resume />); // Use createRoot instead of ReactDOM.render

reportWebVitals(console.log); // Pass the log function to reportWebVitals

// The rest of your code remains the same
reportWebVitals();

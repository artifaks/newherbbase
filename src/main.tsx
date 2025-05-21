
// This must be at the very top to suppress React Helmet warnings
// Monkey patch console.error before any imports
const originalConsoleError = console.error;
console.error = function(...args) {
  // Don't log React Helmet warnings about unsafe lifecycle methods
  if (args[0] && typeof args[0] === 'string' && 
      (args[0].includes('UNSAFE_component') || 
       args[0].includes('SideEffect(NullComponent') ||
       args[0].includes('Helmet'))) {
    return;
  }
  return originalConsoleError.apply(console, args);
};

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Function to log errors to an external service (can be implemented later)
const logErrorToService = (error: Error, errorInfo: React.ErrorInfo) => {
  console.error("Application error:", error);
  console.error("Component stack:", errorInfo.componentStack);
  // Here you would send the error to your monitoring service
};

// Error boundary component to catch React errors
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: Error | null}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
            <p className="text-gray-700 mb-4">
              We've encountered an error and our team has been notified. Please try refreshing the page or come back later.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto max-h-48 mb-4">
              {this.state.error?.message}
            </pre>
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Add some error handling to help debug
try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error("Root element not found");
  }
  
  createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
} catch (error) {
  console.error("Failed to render application:", error);
  // Attempt to display error on page so it's visible
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.innerHTML = `<div style="color: red; padding: 20px;">
      <h1>Application Error</h1>
      <p>${error instanceof Error ? error.message : String(error)}</p>
    </div>`;
  }
}

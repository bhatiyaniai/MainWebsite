import { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Only log details in development mode to avoid leaking internals
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught an unhandled error:', error, errorInfo);
    }
  }

  handleReload = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-secondary-950 px-4">
          <div className="max-w-md w-full text-center p-8 bg-secondary-50 dark:bg-secondary-900 rounded-2xl shadow-lg border border-secondary-200 dark:border-secondary-800">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">Something went wrong</h2>
            <p className="text-secondary-600 dark:text-secondary-300 mb-6 text-sm">
              We encountered an unexpected issue while rendering this page. Please try refreshing or returning to our homepage.
            </p>
            <button
              onClick={this.handleReload}
              className="btn btn-primary w-full"
            >
              Return to Homepage
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node
};

export default ErrorBoundary;


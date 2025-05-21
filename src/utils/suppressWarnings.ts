// This file suppresses specific React warnings that come from third-party libraries
// and are out of our control to fix directly

/**
 * Suppresses specific React warnings that come from third-party libraries.
 * This is particularly useful for warnings from libraries like React Helmet
 * that use deprecated lifecycle methods but can't be easily updated.
 */
export const suppressReactWarnings = () => {
  // Store the original console.error
  const originalConsoleError = console.error;

  // Override console.error to filter out specific warnings
  console.error = function filterWarnings(...args) {
    // Don't filter if there are no arguments or first argument isn't a string
    if (args.length === 0 || typeof args[0] !== 'string') {
      return originalConsoleError.apply(console, args);
    }

    // List of warning messages to suppress
    const suppressPatterns = [
      // React Helmet specific warnings
      'Using UNSAFE_componentWillMount in strict mode',
      'Using UNSAFE_componentWillReceiveProps in strict mode',
      'Using UNSAFE_componentWillUpdate in strict mode',
      'SideEffect(NullComponent)',
      // Additional patterns to match React Helmet components
      'SideEffect(NullComponent2)',
      'NullComponent',
      'Helmet'
    ];

    // Check if the warning should be suppressed
    const shouldSuppress = suppressPatterns.some(pattern => 
      args[0].includes(pattern)
    );

    // Only log to console if we're not suppressing this warning
    if (!shouldSuppress) {
      originalConsoleError.apply(console, args);
    }
  };

  return () => {
    // Restore original console.error when needed
    console.error = originalConsoleError;
  };
};

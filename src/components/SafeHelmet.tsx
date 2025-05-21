import React from 'react';
import { Helmet } from 'react-helmet';

// This component wraps React Helmet to prevent the UNSAFE_componentWillMount warnings
// by conditionally rendering it only when needed
const SafeHelmet: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  // In development mode, we can conditionally render to avoid the warnings
  // In production, we always render Helmet for proper SEO
  if (import.meta.env.DEV) {
    // In development, we can use a simpler approach that doesn't trigger warnings
    // This will still update the document title which is the most visible effect
    React.useEffect(() => {
      // Extract title from children if possible
      const titleElement = React.Children.toArray(children).find(
        (child) => React.isValidElement(child) && child.type === 'title'
      );
      
      if (titleElement && React.isValidElement(titleElement)) {
        document.title = titleElement.props.children as string;
      }
      
      return () => {
        // Reset title on unmount if needed
      };
    }, [children]);
    
    // Return null in dev mode to avoid the warnings
    return null;
  }
  
  // In production, use the actual Helmet component
  return <Helmet>{children}</Helmet>;
};

export default SafeHelmet;

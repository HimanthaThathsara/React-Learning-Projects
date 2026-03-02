// Define the props interface for type safety
// This ensures any component using Container must pass valid children
type ContainerProps = {
  children: React.ReactNode; // Accepts any valid React content (JSX, text, components, etc.)
};

// Functional component with TypeScript typing
// React.FC<ContainerProps> explicitly types this as a React Functional Component
const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className="container 2xl mx-auto w-full">
      {children} {/* Render whatever content is passed between <Container></Container> tags */}
    </div>
  );
};

// Export for use in other components
export default Container;

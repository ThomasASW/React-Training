import "./App.css";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <ErrorBoundary fallback={<p>Error</p>}>
      <>
        <div>Content</div>
        <p>Hello</p>
        <div>
          <h1>Heading</h1>
        </div>
      </>
    </ErrorBoundary>
  );
}

export default App;

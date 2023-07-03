import "./App.css";
import { Suspense, lazy } from "react";

const LazySuspenseDemo = lazy(() =>
  delayForDemo(import("./components/lazyComponent.js"))
);

function App() {
  return (
    <div>
      <Suspense fallback={<div>loading</div>}>
        <LazySuspenseDemo />
      </Suspense>
    </div>
  );
}

function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 5000);
  }).then(() => promise);
}

export default App;

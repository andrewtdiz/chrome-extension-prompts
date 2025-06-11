import { useState, useEffect } from "react";
import "./App.css";

//import shadcn ui button
import { Button } from "@/components/ui/button";

// Add Chrome types
declare global {
  interface Window {
    chrome: typeof chrome;
  }
}

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Get the current tab's URL
    console.log("Current website:", chrome?.tabs);
    chrome?.tabs?.query(
      { active: true, currentWindow: true },
      (tabs: chrome.tabs.Tab[]) => {
        console.log("Tabs:", tabs);
        const currentTab = tabs[0];
        if (currentTab?.url) {
          console.log("Current website:", currentTab.url);
        }
      }
    );
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR v1.02
          {window.location.href}
        </p>
      </div>
      <div>
        <Button
          onClick={() => {
            console.log("Button clicked");
            console.log("Current URL:", window.location.href);
            setCount((count) => count + 1);
            chrome?.tabs?.query(
              { active: true, currentWindow: true },
              (tabs: chrome.tabs.Tab[]) => {
                console.log("Tabs:", tabs);
                const currentTab = tabs[0];
                if (currentTab?.url) {
                  console.log("Current website:", currentTab.url);
                }
              }
            );
          }}
        >
          Count: {count}
        </Button>
      </div>
    </>
  );
}

export default App;

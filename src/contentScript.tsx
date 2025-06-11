import ReactDOM from 'react-dom/client';
import './index.css';
import { Button } from '@/components/ui/button';

function insertReactButton() {
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.bottom = '10px';
  container.style.right = '10px';
  document.body.appendChild(container);

  ReactDOM.createRoot(container).render(
    <Button onClick={() => console.log('Hello World')}>Hello World</Button>
  );
}

function run() {
  console.log('Current website:', window.location.href);
  if (window.location.hostname.includes('chatgpt.com')) {
    insertReactButton();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', run);
} else {
  run();
}

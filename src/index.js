
import { Provider } from 'react-redux';
import store from './components/Homepage/Store/store';
import App from './App';
// import "./index.css"
import { createRoot } from 'react-dom/client';
// import "./components/AllStyle/Foter.css";
const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>

);


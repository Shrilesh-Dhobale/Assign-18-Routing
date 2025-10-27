
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'



const root=createRoot(document.getElementById('root'));
const path=window.location.pathname;

if(path==="/"){
    root.render(<Home />);
}
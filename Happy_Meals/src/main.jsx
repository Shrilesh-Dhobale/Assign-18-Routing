
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import About from './About.jsx'
import Order from './Order.jsx'

const root=createRoot(document.getElementById('root'));
const path=window.location.pathname;

if(path==="/"){
    root.render(<Home />);
}
else if(path==="/about"){
    root.render(<About />);
}
else if(path==="/order"){
    root.render(<Order />);
}
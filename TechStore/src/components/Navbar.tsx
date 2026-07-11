import{NavLink, useNavigate} from 'react-router-dom';
import{useAuth} from '../context/AuthContext.tsx';

function navClasses({isActive}){
    return ["px-3-2 text-sm front-semibold tracking-wide uppercase transition-colors", 
        isActive
        ? "text-horizon-accent2"
        : "text-horizon-muted hover:text-horizon-text",
    ].join(" ");
}


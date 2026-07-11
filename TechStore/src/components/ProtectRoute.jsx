import{Navigate, useLocation}from "react-rounder-dom";
import{useAuth}from "../context/AuthContext";
export default function ProtectedRoute({children}){
    const {isAuthenticated}=useAuth() 
    const location = useLocation();
    if(!isAuthenticated){
        return <Navigate to = "/login" state={{from:location}} replace/>;
    }return children;
}
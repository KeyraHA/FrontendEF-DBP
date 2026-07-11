import{useState} from "react";
import{Link, useNavigate}from "react-router-dom";
import{useAuth}from "../context/AuthContext.tsx";

export default function Register(){
    const{register, loading, error, setError}=useAuth();
}
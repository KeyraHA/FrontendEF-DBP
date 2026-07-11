import{useState} from "react";
import{Link, useNavigate}from "react-router-dom";
import{useAuth}from "../context/AuthContext.tsx";

export default function Register(){
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const {register, error}=useAuth();
    const navigate=useNavigate();
}
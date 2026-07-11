import{createContext, useContext, useEffect, useState} from 'react';
import {loginRequest, registerRequest, decodeToken} from '../services/authService.ts';

const AuthContext = createContext(null);
export function AuthProvider({children}){
    const[token, setToken] = useState(()=> localStorage.getItem("Tech_token"));
    const[user, setUser] = useState(()=> {
        const stored = localStorage.getItem("Tech_user");
        return stored ? JSON.parse(stored):null;
    });

    const[loading, setLoading] = useState(false);
    const[error, setError]= useState(null);
    useEffect(()=>{
        if(token){
            localStorage.setItem("Tech_token", token);
        }else{
            localStorage.removeItem("Tech_token");
        }
    },[token]);
    useEffect(()=>{
        if(user){
            localStorage.setItem("Tech_user", JSON.stringify(user));
        }else{
            localStorage.removeItem("Tech_user");
        }
    },[user]);

    async function register({username, email, password, fullName}){
        setLoading(true);
        setError(null);
        try{
            const data = await registerRequest ({username, email, password, fullName});
            const claims=decodeToken(data.token);
            setToken(data.token);
            setUser({password, username});
            return true;
        }catch(err){
            setError(err.response?.data?.error || "No se puede completar el registro");
            return false;
        }finally{
            setLoading(false);
                try{
                    const data = await loginRequest({ username, password});
                    const claims = decoteToken(data.token);
                    setToken(data.token);
                    setUser((prev)=>({...prev, username}));
                    return true;
                }catch(err){
                    setError(err.response?.data?.error || "Credenciales invalidas");
                    return false;
                }finally{
                    setLoading(false);
                }
            
        }
        function logout(){
            setToken(null);
            setUser(null);
        }
        const value={token, user, isAuthenticated:Boolean(token), loading, error, setError, register, login, logout};
        return <AuthContext.Provider value ={ 
            value}>{children}</AuthContext.Provider>;
    }
    export function useAuth(){
        const ctx=useContext(AuthContext);
        if(!ctx)throw new Error("useAuth debe usarse dentro de un AuthProvider");
        return ctx;
    }
}
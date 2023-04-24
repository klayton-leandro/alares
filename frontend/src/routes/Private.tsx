import { useMemo } from 'react'
import { Outlet, Navigate } from "react-router-dom"
import { parseCookies } from "nookies";
import jwt_decode from "jwt-decode";

const PrivateRoute = ()=> {

    const { 'alares.token': token } = parseCookies();        



    const isLogged = useMemo(() => {        
        if(!token) {
            return false
        }
        return true
    },[])
    
    return (
        <>
            { isLogged ? <Outlet />: <Navigate to='/landing' /> }
        </>
    )
}

export default PrivateRoute
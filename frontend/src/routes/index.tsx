import { BrowserRouter, Routes, Route } from "react-router-dom"

import PrivateRoute from './Private'

import { DefaultLayout } from 'layouts'

import { 
    Login,
    Home,
    Users,
    Landing,
    Plans,
    Purchase
 } from 'pages'

export default function RoutesComponent() {
   return(
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/landing' element={<Landing />} />
            

            <Route element={<PrivateRoute />}>
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/usuarios" element={<Users.Home />} />
                    <Route path="/planos" element={<Plans.Home />} />
                    <Route path="/pedidos" element={<Purchase.Home />} />
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
   )
}
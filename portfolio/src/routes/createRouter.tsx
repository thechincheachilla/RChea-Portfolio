import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom"
import { App } from "../components/App"
import { Experience, Home } from "../components/Views"

export const createRouter = () => {
    const routes = createRoutesFromElements([
        <Route path ="/*" element={<App/>}>
            <Route path="home" element={<Home/>}/> 
            <Route path="experience" element={<Experience/>}/> 
            <Route path="projects" element={<App/>}/> 
            <Route path="powerlifting" element={<App/>}/> 
            <Route path="about" element={<App/>}/> 
            <Route path="desk-of-the-day" element={<App/>}/> 
            <Route path="*" element={<Navigate to="/home"/>}/>
        </Route>
    ])
    return createBrowserRouter(routes)
}
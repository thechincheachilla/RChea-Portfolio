import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import { App } from "../components/App"

export const createRouter = () => {
    const routes = createRoutesFromElements([
        <Route path ="/*" element={<App/>}>
            <Route path="home" element={<App/>}/> 
            <Route path="experience" element={<App/>}/> 
            <Route path="projects" element={<App/>}/> 
            <Route path="powerlifting" element={<App/>}/> 
            <Route path="about" element={<App/>}/> 
            <Route path="desk-of-the-day" element={<App/>}/> 
        </Route>
    ])
    return createBrowserRouter(routes)
}
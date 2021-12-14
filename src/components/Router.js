import { Routes, Route, HashRouter, Link } from "react-router-dom"
import AddEmployee from "./AddEmployee"
import Employee from "./Employee"
import Home from "./Home"
import PageNotFound from "./PageNotFound"

const Router = () => {
    return(
        <div>
            {/* <HashRouter>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/employees" element={<Employee/>}/>
                    <Route exact path="/add" element={<AddEmployee/>}/>
                    <Route exact path="/edit/:employeeId" element={<AddEmployee/>}/>
                    <Route exact path="*" element={<PageNotFound/>}/>
                </Routes>
            </HashRouter> */}
            <HashRouter basename='/'>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/employees" element={<Employee/>} />
                    <Route path="/add" element={<AddEmployee/>} />
                    <Route path="/edit/:employeeId" element={<AddEmployee/>} />
                    <Route path="*" element={<PageNotFound/>} />
                </Routes>
            </HashRouter>
        </div>
    )
}

export default Router;
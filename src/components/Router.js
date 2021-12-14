import { Routes, Route, HashRouter } from "react-router-dom"
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
            <div>
                <hr />
                <Route exact path="/" component={Home} />
                <Route path="/employees" component={<Employee/>} />
                <Route path="/add" component={<AddEmployee/>} />
                <Route path="/edit/:employeeId" component={<AddEmployee/>} />
                <Route path="*" component={<PageNotFound/>} />
            </div>
            </HashRouter>
        </div>
    )
}

export default Router;
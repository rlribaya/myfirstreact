import { Routes, Route, HashRouter} from "react-router-dom"
import AddEmployee from "./AddEmployee"
import Employee from "./Employee"
import Home from "./Home"
import PageNotFound from "./PageNotFound"

const Router = () => {
    // HashRouter must be used for gh pages!
    return(
        <div>
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
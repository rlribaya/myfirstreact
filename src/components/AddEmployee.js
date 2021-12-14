import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import employeeService from "../services/employeeService";

const AddEmployee = () => {

    const  [name, setName] = useState("");
    const  [location, setLocation] = useState("");
    const  [department, setDepartment] = useState("");
    const navigate = useNavigate();
    const {employeeId} = useParams();

    

    
    const saveEmployee = (e) => {
        if (employeeId) {
            e.preventDefault()
            const employee = {employeeId, name, location, department};
            employeeService.putEmployee(employee) //promise
            .then(
                response => {
                    console.log("updated employee", response.data);
                    navigate("/employees");
                }
            )
            .catch(
                error => {
                    console.error("something went wrong!")
                }
            )
        }
        else if (name && location && department) {
            e.preventDefault()
            const employee = {name, location, department};
            employeeService.postEmployee(employee) //promise
            .then(
                response => {
                    console.log("added new employee", response.data);
                    navigate("/employees");
                }
            )
            .catch(
                error => {
                    console.error("something went wrong!")
                }
            )
        }
        else {
            e.preventDefault();
            alert("ERROR! One or more values missing!")
        }
    }

    useEffect(() => {
        if (employeeId){
            employeeService.getEmployee(employeeId) // promise
            .then(
                response => {
                    setName(response.data.name);
                    setLocation(response.data.location);
                    setDepartment(response.data.department);
                }
            )
            .catch(
                error => {
                    console.error("error");
                }
            )
        }
    },[])

    return(
        <div id="AddEmployeeDiv">
        <div className="container">
            <form>
            <div className="mb-3">
                <label for="Name" className="form-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="Name"
                    placeholder="Add Employee Name"
                    value={name}
                    onChange={
                        (e) => {
                            setName(e.target.value)
                        }
                    }
                />
            </div>
            <div className="mb-3">
                <label for="Location" className="form-label">Location</label>
                <input
                    type="text"
                    className="form-control"
                    id="Location"
                    placeholder="Add Employee Location"
                    value={location}
                    onChange={
                        (e) => {
                            setLocation(e.target.value)
                        }
                    }
                />
            </div>
            <div className="mb-3">
                <label for="Department" className="form-label">Department</label>
                <input
                    type="text"
                    className="form-control"
                    id="Department"
                    placeholder="Add Employee Department"
                    value={department}
                    onChange={
                        (e) => {
                            setDepartment(e.target.value)
                        }
                    }
                />
            </div>
            <button
                id="add-employee"
                type="submit"
                className="btn btn-primary"
                onClick={(e) => saveEmployee(e)}> Save
            </button>
            </form>
        </div>
        </div>
    )
}

export default AddEmployee;
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import employeeService from '../services/employeeService';

const Employee = () =>{
	const [employees, setEmployees] = useState([])

	useEffect(() => {
		refreshEmployeeTable();
	})

	const refreshEmployeeTable = () => {
		employeeService.getEmployees() // promise
		.then(
			response => {
				setEmployees(response.data)
			}
		)
		.catch(
			() => {
				console.log("employees api error...")
			}
		)
	}

	const deleteEmployee = (employeeId, name) => {
		if(window.confirm("Confirm deletion of employee with name \"" + name + "\" ?")) {
			employeeService.deleteEmployee(employeeId) //promise
			.then(
				response => {
					console.log("successfully deleted employee");
					refreshEmployeeTable();
				}
			)
			.catch(
				error => {
					console.error("an error occurred while deleting employee");
				}
			)
		}
	}

	return (
		<div id="outer-div">
		<div className="container">
			<h3 style={{color:"white"}}>List of Employees</h3>
			<div>
				<table className="table table-dark table-hover">
					<thead>
						<tr>
							<td>Name</td>
							<td>Department</td>
							<td>Location</td>
							<td width="20%">Action</td>
						</tr>
					</thead>
					<tbody>
					{
						employees.map(
							employee => (
								<tr key={employee.employeeId}>
									<td>{employee.name}</td>
									<td>{employee.location}</td>
									<td>{employee.department}</td>
									<td id="actions">
										<Link className="btn btn-light" to={`/edit/${employee.employeeId}`}>Update</Link>
										<button className="btn btn-danger" onClick={()=>deleteEmployee(employee.employeeId,employee.name)}>
											Delete
										</button>
									</td>
								</tr>
							)
						)
					}
					</tbody>
				</table>
			</div>
		</div>
		</div>
	)
}

export default Employee;
import axios from "axios";

export default axios.create({
	baseURL:'https://react-website-api-2csa.herokuapp.com/api/v1',
	headers: {
		'content-type':'application/json'
	}
})
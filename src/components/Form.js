import React, { useState } from "react";

function Form() {
	const [firstName, setFirstName] = useState("John");
	const [lastName, setLastName] = useState("Henry");

	const handleFirstNameChange = (e) => {
		setFirstName(e.target.value)
	}
	const handleLastNameChange = (e) => {
		console.log(e.target.value)
		setLastName(e.target.value)
	}

	return (
		<form>
			<input type="text" onChange={handleFirstNameChange} value={firstName} />
			<input type="text" onChange={handleLastNameChange} value={lastName} />
			<button type="submit">Submit</button>
		</form>
	);
}

export default Form;

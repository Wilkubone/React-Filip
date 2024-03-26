import { useState } from "react";
import { Form } from "./components/Form";
import { PersonInfo } from "./components/PersonInfo";

const people = [
	{
		name: "Tomcio",
		tel: 123456,
		city: "Cedynia",
	},
	{
		name: "Misiek",
		tel: 123444546,
		city: "MasterKik",
	},
	{
		name: "Romek",
		tel: 1234888546,
		city: "MasterBitch",
	},
];

function App() {
	const [isFormShown, setIsFormShown] = useState(false);
	const handleShowFormClick = () => setIsFormShown(true);
	return (
		<>
			<h1>Lista Kontaktów</h1>
			{isFormShown ? (
				<Form />
			) : (
				<button onClick={handleShowFormClick}>Dodaj</button>
			)}

			{people.map(person => (
				<PersonInfo
					key={person.tel}
					name={person.name}
					tel={person.tel}
					city={person.city}
				/>
			))}
		</>
	);
}

export default App;

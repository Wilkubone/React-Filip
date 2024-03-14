import { PersonInfo } from "./components/PersonInfo";


const person = {
	name: "Tomcio",
	tel: 123456,
	city: "Cedynia",
};

const newPerson = {
	name: "Misiek",
	tel: 123444546,
	city: "MasterKik",
};

function App() {
	return (
		<>
			<h1>Lista Kontaktów</h1>
			<PersonInfo name={person.name} tel={person.tel} city={person.city} />
			<PersonInfo
				name={newPerson.name}
				tel={newPerson.tel}
				city={newPerson.city}
			/>
		</>
	);
}

export default App;

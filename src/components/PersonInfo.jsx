import { Tel } from "./Tel";

export const PersonInfo = props => (
		<>
			<h2>{props.name}</h2>
			<h3>
				Tel: <Tel tel={props.tel} />
			</h3>
			<h3>Miasto: {props.city}</h3>
		</>
	);

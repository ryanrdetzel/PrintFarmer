import { Router, Location } from "@reach/router"

import { Nav } from '../Nav';
import { Queue } from '../Queue';
import { Printers } from '../Printers';
import { Filament } from '../Filament';

import styles from './styles.module.css'; 

function App() {
	return (
		<div className="container">
			<h1>Print Farm</h1>

			<Location>
				<Nav />
				<Router>
					<Queue path="/queue" default/>
					<Printers path="/printers" />
					<Filament path="/filament" />
				</Router>
			</Location>
		</div>
		);
}

export default App;

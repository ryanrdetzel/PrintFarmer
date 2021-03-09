import { Router, Location } from "@reach/router"

import { Nav } from '../Nav';
import { Queue } from '../Queue';
import { Printers } from '../Printers';
import { Filament } from '../Filament';
import { History } from '../History';
import { Dashboard } from '../Dashboard';
import { Models } from '../Models';


function App() {
	return (
		<div className="container">
			<h1>Print Farmer</h1>

			<Location>
				<Nav />
				<Router>
					<Dashboard path="/" default/>
					<Queue path="/queue"/>
					<History path="/history"/>
					<Models path="/models" />
					<Printers path="/printers" />
					<Filament path="/filament" />
				</Router>
			</Location>
		</div>
		);
}

export default App;

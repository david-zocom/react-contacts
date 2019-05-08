import React from 'react';
import Contact from './Contact';

const data = [
	{  name: 'Anna Andersson', email: 'anna@email.com', phone: '031-1234567' },
	{  name: 'Per Persson', email: 'per@email.com', phone: '077-7777777' },
	{  name: 'Sydöjättemoa', email: 'PETA@email.com', phone: '098765678' }
];

class AddressBook extends React.Component {
	// State can be initialized either in the constructor or as a class property
	// state = { contactData: null };
	constructor(props) {
		super(props);
		this.state = {
			contactData: null
		};
		// Use bind if you don't use "arrow function as class property" for event functions
		// this.fetchData = this.fetchData.bind(this);
	}
	fetchData = () => {
		this.setState({ contactData: data });
	}
	clearData = () => {
		this.setState({ contactData: null });
	}
	render() {
		let contacts;
		// Conditional rendering - if-sats eller conditional operator (?)
		if( this.state.contactData ) {
			contacts = this.state.contactData.map(p => (
				<Contact person={p} key={p.name + p.email + p.phone} />
			))
		} else {
			contacts = (
				<li>Inga kontakter <span role="img" aria-label="sad">😢</span></li>
			);
		}
		// const contacts = this.state.contactData ? this.state.contactData.map(p => ( <Contact person={p} key={p.name + p.email + p.phone} /> )) : null

		return (
			<div>
				<h1>Adressbok <span role="img" aria-label="phone">☎️</span> </h1>
				
				<button onClick={this.fetchData}>Fetch data</button>
				<button onClick={this.clearData}>Clear data</button>

				<ul>
					{contacts}
				</ul>
			</div>
		);
	}
}

export default AddressBook;

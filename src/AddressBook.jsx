import React from 'react';
import Contact from './Contact';

const data = [
	{  name: 'Anna Andersson', email: 'anna@email.com', phone: '031-1234567' },
	{  name: 'Per Persson', email: 'per@email.com', phone: '077-7777777' },
	{  name: 'Sydöjättemoa', email: 'PETA@email.com', phone: '098765678' }
];

class AddressBook extends React.Component {
	// state = { contactData: null };
	constructor(props) {
		super(props);
		this.state = {
			contactData: null
		};
		this.fetchData = this.fetchData.bind(this);
	}
	fetchData = () => {
		this.setState({ contactData: data });
	}
	clearData = () => {
		this.setState({ contactData: null });
	}
	render() {
		let contacts;
		if( this.state.contactData ) {
			contacts = this.state.contactData.map(p => (
				<Contact person={p} key={p.name + p.email + p.phone} />
			))
		} else {
			contacts = null;
		}
		// const contacts = this.state.contactData ? this.state.contactData.map(p => ( <Contact person={p} key={p.name + p.email + p.phone} /> )) : null
		return (
			<div>
				<h1>Adressbok</h1>
				<span role="img" aria-label="Radioactive">☎️</span>
				<ul>
					{contacts}
				</ul>
				<button onClick={this.fetchData}>Fetch data</button>
				<button onClick={this.clearData}>Clear data</button>
			</div>
		);
	}
}

export default AddressBook;

import React from 'react';


const Contact = ({ person }) => (
	<li>{person.name} <br/>
	{person.email} <br/>
	{person.phone}
	</li>
)

export default Contact;

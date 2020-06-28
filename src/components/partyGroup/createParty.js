import React from 'react';

const createParty = ({
	deleteEntry,
	uniqueId
}) => {
	return (
		<li className='eachEntry' key={uniqueId}>
			<button onClick={deleteEntry}><i class="fa fa-trash" aria-hidden="true"></i>
			</button>
			<div className='content'>
				<h3>{countryInput}</h3>
				<p>{date}</p>
				<div className="textEntry">{attrOne}</div>
			</div>
		</li>
	);
};

export default createParty;
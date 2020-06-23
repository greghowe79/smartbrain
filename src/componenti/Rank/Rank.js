import React from 'react';

const Rank = ({name, entries}) => {
	return (
		<div>
			<div className='white f3'>
				{`${name} , il conteggio attuale dei tuoi inserimenti è...`}
			</div>
			<div className='white f1'>
				{entries}
			</div>
		</div>
	);
}
export default Rank;
import React from 'react';

const Navigazione = ({ onRouteChange, isSignedIn }) => {
	if (isSignedIn) {
		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Disconnetti</p>
			</nav>
		);
	} else {
		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Accedi</p>
				<p onClick={() => onRouteChange('registrati')} className='f3 link dim black underline pa3 pointer'>Registrati</p>
			</nav>
		);
	}
}
export default Navigazione;
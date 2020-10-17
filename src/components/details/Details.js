import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Youtube from 'react-youtube';
import './details.css';
import Main from '../main/Main';
import useLaunches from '../../Hooks/useLaunches';


const Details = (props) => {
	
	const [launch, setLaunch] = useState(null);

	const { getLaunch } = useLaunches();

	useEffect(() => {
		setLaunch(getLaunch(props.match.params.id));
	}, [getLaunch])

	const history = useHistory()	

	if(!launch) {return null}
		
console.log('launch', launch);

	return (
		<>
			<Main name={launch.name}/>
			<main className="details">
					<div className="container">
						<div className="details-row">
							<div className="details-image">

								<img src={launch.links.patch.small} alt={launch.name} />
							</div>
							<div className="details-content">
								<p className="details-description">{launch.details}</p>
							</div>
						</div>
						<Youtube className="details-youtube" videoId={launch.links.youtube_id}/>
					</div>
					<a className="button button-back" onClick={history.goBack}>go back</a>
			</main>
		</>
	)
}

export default Details;
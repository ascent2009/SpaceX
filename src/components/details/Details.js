import React from 'react';
import './details.css';
import Main from '../main/Main';
import { Link } from 'react-router-dom';

const goBack = () => {
    window.history.back();
  };

const Details = (props) => {
	
const {name, links, details, webcast} = props;	
console.log('data', props);

	return (
		<>
			<Main />
			<main className="details">
					<div className="container">
						<div className="details-row">
							<div className="details-image">
								{/* <img src="https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png" alt="" /> */}
								{/* <img src={links.patch.small} alt="" /> */}
							</div>
							<div className="details-content">
								<p className="details-description">{details}</p>
							</div>
						</div>
						<div>
							<iframe className="details-youtube" width="560" height="315" src={webcast} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullScreen></iframe>
						</div>
					</div>
					<Link to='' className="button button-back" onClick={goBack}>go back</Link>
			</main>
		</>
	)
}

export default Details;
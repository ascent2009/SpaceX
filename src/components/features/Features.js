import React from 'react';
import './features.css';
// import rocket from '../../falcon-1.png';
import RellaxWrapper from 'react-rellax-wrapper';

const rocketImg = {
	'Falcon 1': 'falcon-1',
	'Falcon 9': 'falcon-9',
	'Falcon Heavy': 'falcon-heavy',
	'Starship': 'starship',
};

const Features = (props) => (
	<section className="features">
		<h2 className="features-title">
			{props.rocket} <br/>Overview
		</h2>
		<div className="overview">

			<table className="table">
				<caption className="table-title">
					Size
				</caption>
				<thead>
					<tr>
						<td className="table-column">HEIGHT</td>
						<td className="table-column">
							{/* {props.rocketFeatures.height} */}
							22.25 m / 73 ft
						</td>
					</tr>
					<tr>
						<td className="table-column">DIAMETER</td>
						<td className="table-column">
							{/* {rocketFeatures.diameter} */}
							1.68 m / 5.5 ft
						</td>
					</tr>
					<tr>
						<td className="table-column">MASS</td>
						<td className="table-column">
							{/* {rocketFeatures.mass} */}
							30,146 kg / 66,460 lb
						</td>
					</tr>
					<tr>
						<td className="table-column">PAYLOAD TO LEO</td>
						<td className="table-column">
							{/* {rocketFeatures.payload_weights} */}
							450 kg / 992 lb
						</td>
					</tr>
				</thead>
			</table>
			<RellaxWrapper speed={20}>
                <img
                        src={`./img/${rocketImg[props.rocket]}.png`}
                        alt="rocket"
                        className="rocket"
    			/>
            </RellaxWrapper>
			<article>
				<h3 className="features-subtitle">DESCRIPTION</h3>
				<p className="features-text">
					{/* {rocketFeatures.description} */}
					The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.
				</p>
			</article>
		</div>
	</section>

)

export default Features;
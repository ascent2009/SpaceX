import React from 'react';
import { Link } from 'react-router-dom';
import './calendar.css'
import Main from '../main/Main'
import useLaunches from '../../Hooks/useLaunches';



const Calendar = () => {
	
	const {data} = useLaunches();
	
	return (
		<>
		<Main name='Клаендарь SpaceX'/>
		<section className="calendar">
			<div className="container">
				<ul className="calendar-list">
					{data.map(item => (
					<li className="calendar-item" key={item.id}>
						<article className="launches">
							<div className="launches-image">
								<img src={item.links.patch.small} alt="" />
								{/* <a className="launches-youtube" href="https://www.youtube.com/watch?v=dLQ2tZEH6G0"></a> */}
							</div>
							<div className="launches-content">
								<h2 className="launches-title">{item.name}</h2>
								<Link to={`/details/${item.id}`} className="button launches-details">Подробнее</Link>
							</div>
						</article>
					</li>))}
					

				

				</ul>
			</div>
		</section>
		</>
	)
	
}

export default Calendar;
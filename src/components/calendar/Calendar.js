import React from 'react';
import './calendar.css'
import logo from '../../logo.svg';

const Calendar = () => (
    <>
    <header className="header">
		<img
				src={logo}
				alt="Logo Space X"
				className="logo"
		/>
		<nav className="main-nav nav">
			<ul className="list">
				<li className="item">
					<a href="#" className="item-link">Falcon 1</a>
				</li>
				<li className="item">
					<a href="#" className="item-link">Falcon 9</a>
				</li>
				<li className="item">
					<a href="#" className="item-link">Falcon Heavy</a>
				</li>
				<li className="item">
					<a href="#" className="item-link">Updates</a>
				</li>
			</ul>
		</nav>
		<nav className="secondary-nav">
			<ul className="list">
				<li className="item">
					<a href="#" className="item-link">Home</a>
				</li>
				<li className="item">
					<a href="calendar.html" className="item-link">Calendar</a>
				</li>
			</ul>
		</nav>
	</header>
	<section className="main">
		<h1 className="title">
			Calendar SpaceX
		</h1>
	</section>

	<section className="calendar">
		<div className="container">
			<ul className="calendar-list">
				<li className="calendar-item">
					<article className="launches">
						<div className="launches-image">
							<img src="https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png" alt="" />
							<a className="launches-youtube" href="https://www.youtube.com/watch?v=dLQ2tZEH6G0"></a>
						</div>
						<div className="launches-content">
							<h2 className="launches-title">FalconSat</h2>
							<a href="./details.html" className="button launches-details">Подробнее</a>
						</div>
					</article>
				</li>

				<li className="calendar-item">
					<article className="launches">
						<div className="launches-image">
							<img src="https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png" alt="" />
						</div>
						<div className="launches-content">
							<h2 className="launches-title">
								<a href="https://www.space.com/3590-spacex-falcon-1-rocket-fails-reach-orbit.html">
									DemoSat
								</a>
							</h2>
							<a href="./details.html" className="button launches-details">Подробнее</a>
						</div>
					</article>
				</li>

				<li className="calendar-item">
					<article className="launches">
						<div className="launches-image">
							<img src="https://images2.imgbox.com/3d/86/cnu0pan8_o.png" alt="" />
						</div>
						<div className="launches-content">
							<h2 className="launches-title">
								<a href="http://www.spacex.com/news/2013/02/11/falcon-1-flight-3-mission-summary">
									Trailblazer
								</a>
							</h2>
							<a href="./details.html" className="button launches-details">Подробнее</a>
						</div>
					</article>
				</li>

				<li className="calendar-item">
					<article className="launches">
						<div className="launches-image">
							<img src="https://images2.imgbox.com/e9/c9/T8CfiSYb_o.png" alt="" />
						</div>
						<div className="launches-content">
							<h2 className="launches-title">
								<a href="https://en.wikipedia.org/wiki/Ratsat">
									RatSat
								</a>
							</h2>
							<a href="./details.html" className="button launches-details">Подробнее</a>
						</div>
					</article>
				</li>

			</ul>
		</div>
	</section>

	<footer className="footer">
		<img src={logo} alt="logo Space X" className="logo"/>
		<nav className="footer-nav">
			<ul className="list">
				<li className="item"><a href="#" className="item-link">Elon Musk Twitter</a></li>
				<li className="item"><a href="#" className="item-link">Twitter</a></li>
				<li className="item"><a href="#" className="item-link">Flickr</a></li>
				<li className="item"><a href="#" className="item-link">website</a></li>
			</ul>
		</nav>
		<p className="footer-text">
			For additional questions, contact
			<a className="footer-link" href="mailto:rideshare@spacex.com"
			>rideshare@spacex.com</a
			>
		</p>

	</footer>
    </>
)

export default Calendar;
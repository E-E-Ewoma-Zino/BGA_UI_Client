// landing page
import ROUTES_LINKS from "../../constants/routes";
import Components from "../../components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import landingPic from '../../assets/image/a.png'
import landingPic2 from '../../assets/image/b.png'
import './landing.css'

export default function Landing() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
			console.log("is loading", isLoading);
		}, 2000);
	});


	return (
		
		<div className="nk-app-root">
			<Helmet>
				<title>BGA Matrix</title>
				{/* <!-- Landing Page StyleSheet --> */}
				<link rel="stylesheet" href="/assets/css/landingPage/dashlite.css?ver=3.2.3" />
				<link id="skin-default" rel="stylesheet" href="/assets/css/landingPage/theme.css?ver=3.2.3" />
				<link rel="stylesheet" href="/assets/css/skins/theme-red.css" />
			</Helmet>

			{/* main @s */}
			<div className="nk-main">
				<header className="header has-header-main-s1 bg-lighter" id="home">
					<div className="header-main header-main-s1 is-sticky is-transparent">
						<div className="container header-container">
							<div className="header-wrap">
								<div className="header-logo">
									<Link to={ROUTES_LINKS.home} className="logo-link">
										<img className="logo-light logo-img" src="/assets/images/logo.png" srcSet="/assets/images/logo2x.png 2x" alt="logo" />
										<img className="logo-dark logo-img" src="/assets/images/logo-dark.png" srcSet="/assets/images/logo-dark2x.png 2x" alt="logo-dark" />
									</Link>
								</div>
								<div className="header-toggle">
									<button className="menu-toggler" data-target="mainNav">
										<em className="menu-on icon ni ni-menu" />
										<em className="menu-off icon ni ni-cross" />
									</button>
								</div>
								{/* .header-nav-toggle */}
								<nav className="header-menu" data-content="mainNav">
									<ul className="menu-list ms-lg-auto">
										<li className="menu-item"><a href="#home" className="menu-link nav-link">Home</a></li>
										<li className="menu-item"><a href="#service" className="menu-link nav-link">Service</a></li>
										<li className="menu-item"><a href="#feature" className="menu-link nav-link">Features</a></li>
										{/* <li className="menu-item"><a href="#pricing" className="menu-link nav-link">Pricing</a></li> */}
										<li className="menu-item"><a href="#reviews" className="menu-link nav-link">Reviews</a></li>
										{/* <li className="menu-item"><a href={ROUTES_LINKS.auth} className="menu-link nav-link">SignIn</a></li> */}
									</ul>
									<ul className="menu-btns">
										<li>
											<Link to={ROUTES_LINKS.auth} rel="noreferrer" target="_blank" className="btn btn-primary btn-lg">SignIn</Link>
										</li>
									</ul>
								</nav>
								{/* .nk-nav-menu */}
							</div>
							{/* .header-warp*/}
						</div>
						{/* .container*/}
					</div>
					{/* .header-main*/}
					<div className="header-content my-auto py-5">
						<div className="container">
							<div className="row flex-lg-row align-items-center justify-content-between g-gs">
								{/* .col- */}
								<div className="col-lg-5 col-md-10">
									<div className="header-caption">
										{/* <div className="header-rating rating">
											<ul className="rating-stars">
												<li><em className="icon ni ni-star-fill" /></li>
												<li><em className="icon ni ni-star-fill" /></li>
												<li><em className="icon ni ni-star-fill" /></li>
												<li><em className="icon ni ni-star-fill" /></li>
												<li><em className="icon ni ni-star-fill" /></li>
											</ul>
											<div className="rating-text">Client SEO Management Platform</div>
										</div> */}
										<h1 className="header-title">Centralize and Streamline Data on a Unified Platform.</h1>
										<div className="header-text">
											<p>Integrate with various platform and interact with them, all in one place.</p>
										</div>
										<ul className="header-action btns-inline">
											<li><a href={ROUTES_LINKS.overview} className="btn btn-primary btn-lg"><span>Go to Dashboard</span></a></li>
											{/* <li><a href="#x" className="link link-block link-gray"><em className="icon icon-lg ni ni-play-circle" /><span>Watch video</span></a></li> */}
										</ul>
									</div>
									{/* .header-caption */}
								</div>
								<div className="col-lg-6 mb-n3 mb-lg-0">
									<div className="header-image header-image-s2">
										<img src={landingPic} alt='' />
									</div>
									{/* .header-image */}
								</div>
								{/* .col */}
							</div>
							{/* .row */}
						</div>
						{/* .container */}
					</div>
					{/* .header-content */}
					{/* <div className="header-brand pb-4 pt-2 pb-lg-5">
						<div className="container">
							<div className="row align-items-center g-gs">
								<div className="col-4 col-md-2">
									<div className="brand-item">
										<img src="/assets/images/brand/brand-a.png" alt='' />
									</div>
								</div>
								<div className="col-4 col-md-2">
									<div className="brand-item">
										<img src="/assets/images/brand/brand-b.png" alt='' />
									</div>
								</div>
								<div className="col-4 col-md-2">
									<div className="brand-item">
										<img src="/assets/images/brand/brand-c.png" alt='' />
									</div>
								</div>
								<div className="col-4 col-md-2">
									<div className="brand-item">
										<img src="/assets/images/brand/brand-d.png" alt='' />
									</div>
								</div>
								<div className="col-4 col-md-2">
									<div className="brand-item">
										<img src="/assets/images/brand/brand-a.png" alt='' />
									</div>
								</div>
							</div>
						</div>
					</div> */}
				</header>
				{/* .header */}
				<section className="section section-service pb-0" id="service">
					<div className="container">
						<div className="row justify-content-center text-center">
							<div className="col-sm-7 col-md-6 col-9">
								<div className="section-head">
									<h2 className="title">We provide various kind of service for you</h2>
								</div>
								{/* .section-head */}
							</div>
							{/* .col */}
						</div>
						{/* .row */}
						<div className="section-content">
							<div className="row justify-content-center text-center g-gs">
								<div className="col-9 col-sm-7 col-md-4">
									<div className="service service-s2">
										<div className="service-icon styled-icon styled-icon-s2 bg-primary">
											<svg x="0px" y="0px" viewBox="0 0 512 512" style={{ fill: 'currentColor' }} xmlSpace="preserve">
												<path d="M488.4,492h-21.9V173.5c0-14.8-12.1-26.9-26.9-26.9h-49c-14.8,0-26.9,12.1-26.9,26.9V492H308V317.8
		c0-14.8-12.1-26.9-26.9-26.9h-49c-14.8,0-26.9,12.1-26.9,26.9V492h-55.7v-90.2c0-14.8-12.1-26.9-26.9-26.9h-49
		c-14.8,0-26.9,12.1-26.9,26.9V492H23.6c-5.5,0-10,4.5-10,10s4.5,10,10,10h464.8c5.5,0,10-4.5,10-10S493.9,492,488.4,492L488.4,492z
		M129.5,492H66.7v-90.2c0-3.8,3.1-6.9,6.9-6.9h49c3.8,0,6.9,3.1,6.9,6.9L129.5,492z M288,492h-62.8V317.8c0-3.8,3.1-6.9,6.9-6.9h49
		c3.8,0,6.9,3.1,6.9,6.9V492z M446.5,492h-62.8V173.5c0-3.8,3.1-6.9,6.9-6.9h49c3.8,0,6.9,3.1,6.9,6.9L446.5,492z" />
												<path d="M466.4,10.5c0.1-2.7-0.8-5.5-2.9-7.6s-4.9-3-7.6-2.9c-0.2,0-0.3,0-0.5,0H395c-5.5,0-10,4.5-10,10s4.5,10,10,10h37.4
		l-98.9,98.9l-37.3-37.3c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2,1.1-7.1,2.9L102.3,261.3c-3.9,3.9-3.9,10.2,0,14.1c2,2,4.5,2.9,7.1,2.9
		s5.1-1,7.1-2.9l172.7-172.7l37.3,37.3c3.9,3.9,10.2,3.9,14.1,0L446.5,34.1V68c0,5.5,4.5,10,10,10s10-4.5,10-10V11
		C466.5,10.8,466.4,10.7,466.4,10.5L466.4,10.5z" />
												<circle cx="75.6" cy="303.3" r={10} />
											</svg>
										</div>
										<div className="service-text">
											<h4 className="title">Advanced Statistics</h4>
											<p>Data and reports on all your client activities.</p>
										</div>
									</div>
									{/* .service */}
								</div>
								{/* .col */}
								<div className="col-9 col-sm-7 col-md-4">
									<div className="service service-s2">
										<div className="service-icon styled-icon styled-icon-s2 bg-pink">
											<svg viewBox="0 0 512 512" style={{ fill: 'currentColor' }} xmlSpace="preserve">
												<g>
													<path d="M462.5,276.9V115c28-4,49.5-28.1,49.5-57.1C512,25.9,486.1,0,454.2,0s-57.8,25.9-57.8,57.8H0v330.3h248.2
		c4.3,69,61.6,123.9,131.7,123.9c72.9,0,132.1-59.3,132.1-132.1C512,338.3,492.6,301.1,462.5,276.9z M454.2,16.5
		c22.8,0,41.3,18.5,41.3,41.3S477,99.1,454.2,99.1s-41.3-18.5-41.3-41.3S431.4,16.5,454.2,16.5z M16.5,74.3h382.3
		c2,6.6,5.1,12.7,9.1,18l-50.5,50.5c-3.2-1.6-6.8-2.5-10.6-2.5s-7.4,0.9-10.6,2.5l-16.6-16.6c1.5-3.2,2.5-6.8,2.5-10.6
		c0-13.7-11.1-24.8-24.8-24.8c-13.7,0-24.8,11.1-24.8,24.8c0,3.8,0.9,7.4,2.5,10.6l-41.4,41.4c-3.2-1.5-6.8-2.5-10.6-2.5
		c-13.7,0-24.8,11.1-24.8,24.8s11.1,24.8,24.8,24.8s24.8-11.1,24.8-24.8c0-3.8-0.9-7.4-2.5-10.6l41.4-41.4c3.2,1.5,6.8,2.5,10.6,2.5
		s7.4-0.9,10.6-2.5l16.6,16.6c-1.5,3.2-2.5,6.8-2.5,10.6c0,13.7,11.1,24.8,24.8,24.8c13.7,0,24.8-11.1,24.8-24.8
		c0-3.8-0.9-7.4-2.5-10.6l50.5-50.5c7.6,5.7,16.5,9.5,26.3,10.9v150.7c-19.5-11.3-42-17.9-66.1-17.9c-39.5,0-74.9,17.5-99.1,45V256
		h-49.5v99.1h18.9c-1,5.4-1.6,10.9-2,16.5H16.5V74.3z M346.8,156.9c4.6,0,8.3,3.7,8.3,8.3c0,4.6-3.7,8.3-8.3,8.3
		c-4.6,0-8.3-3.7-8.3-8.3C338.6,160.6,342.3,156.9,346.8,156.9z M289,115.6c0-4.6,3.7-8.3,8.3-8.3c4.6,0,8.3,3.7,8.3,8.3
		c0,4.6-3.7,8.3-8.3,8.3C292.7,123.9,289,120.2,289,115.6z M231.2,189.9c0,4.6-3.7,8.3-8.3,8.3s-8.3-3.7-8.3-8.3s3.7-8.3,8.3-8.3
		S231.2,185.4,231.2,189.9z M379.9,445.9c-36.4,0-66.1-29.6-66.1-66.1s29.6-66.1,66.1-66.1s66.1,29.6,66.1,66.1
		S416.3,445.9,379.9,445.9z M264.3,316c-4,7.1-7.2,14.7-9.8,22.5h-6.7v-66.1h16.5V316z M371.6,264.7v33
		c-41.7,4.2-74.3,39.4-74.3,82.2c0,12.1,2.7,23.5,7.4,33.9L276,430.3c-7.4-15.3-11.7-32.3-11.7-50.4
		C264.3,318.9,311.7,268.9,371.6,264.7L371.6,264.7z M379.9,495.5c-39.8,0-74.9-20.2-95.7-50.8l28.8-16.6
		c15,20.8,39.4,34.4,66.9,34.4s51.9-13.6,66.9-34.4l28.8,16.6C454.8,475.3,419.6,495.5,379.9,495.5z M483.7,430.3l-28.6-16.5
		c4.7-10.4,7.4-21.8,7.4-33.9c0-42.7-32.7-78-74.3-82.2v-33c59.9,4.3,107.4,54.2,107.4,115.2C495.5,398,491.2,415,483.7,430.3
		L483.7,430.3z" />
													<path d="M379.9,330.3c-27.3,0-49.5,22.2-49.5,49.5c0,27.3,22.2,49.5,49.5,49.5s49.5-22.2,49.5-49.5
		C429.4,352.5,407.2,330.3,379.9,330.3z M379.9,412.9c-18.2,0-33-14.8-33-33c0-18.2,14.8-33,33-33c18.2,0,33,14.8,33,33
		C412.9,398.1,398.1,412.9,379.9,412.9z" />
													<path d="M33,90.8h16.5v16.5H33V90.8z" />
													<path d="M66.1,90.8h115.6v16.5H66.1V90.8z" />
													<path d="M33,123.9h16.5v16.5H33V123.9z" />
													<path d="M66.1,123.9h115.6v16.5H66.1V123.9z" />
													<path d="M33,156.9h16.5v16.5H33V156.9z" />
													<path d="M66.1,156.9h115.6v16.5H66.1V156.9z" />
													<path d="M33,189.9h16.5v16.5H33V189.9z" />
													<path d="M66.1,189.9h115.6v16.5H66.1V189.9z" />
													<path d="M33,355.1h49.5v-82.6H33V355.1z M49.5,289h16.5v49.5H49.5V289z" />
													<path d="M99.1,355.1h49.5V289H99.1V355.1z M115.6,305.5h16.5v33h-16.5V305.5z" />
													<path d="M165.2,355.1h49.5V223h-49.5V355.1z M181.7,239.5h16.5v99.1h-16.5V239.5z" />
												</g>
											</svg>
										</div>
										<div className="service-text">
											<h4 className="title">Powerful Admin</h4>
											<p>Gain control over all activities in the platform. Nothing will gets pass you.</p>
										</div>
									</div>
									{/* .service */}
								</div>
								{/* .col- */}
								<div className="col-9 col-sm-7 col-md-4">
									<div className="service service-s2">
										<div className="service-icon styled-icon styled-icon-s2 bg-success">
											<svg x="0px" y="0px" viewBox="0 0 512 512" style={{ fill: 'currentColor' }} xmlSpace="preserve">
												<g>
													<g>
														<g>
															<path d="M472,236.7c3.7-10.2,5.7-21,5.6-31.9c-0.1-42-28.1-78.9-68.5-90.3C406.5,49.5,352.3-1.3,287.4,0S170.5,54.5,170.5,119.4
				c0,3.4,0.2,6.8,0.5,10.2c-27.5-5.3-55.9,1.9-77.5,19.8s-34,44.4-34,72.4c0,3,0.2,6.1,0.5,9.1c-35.7,4.4-61.9,35.9-59.7,71.8
				s31.8,64,67.8,64.2H135c11.3,40.7,40.7,100.9,116.6,144c2.6,1.5,5.8,1.5,8.4,0c75.9-43.1,105.3-103.3,116.6-144h66.9
				c32.1,0,59.9-22.3,66.7-53.6C517.1,282,501.2,250.1,472,236.7z M366.8,322.7c-0.4,10.9-1.9,21.7-4.6,32.2
				c-0.3,0.8-0.5,1.6-0.6,2.4c-9.2,36.5-34.7,94.4-105.8,136.4c-71.1-42-96.6-99.8-105.8-136.4c-0.1-0.8-0.3-1.6-0.6-2.4
				c-2.6-10.5-4.2-21.3-4.5-32.2V213.3c0-4.7,3.8-8.5,8.5-8.5h204.8c4.7,0,8.5,3.8,8.5,8.5L366.8,322.7L366.8,322.7z M479.8,334.8
				L479.8,334.8c-9.6,9.7-22.6,15.1-36.2,15h-62.9c1.8-9,2.9-18.1,3.1-27.2V213.3c0-14.1-11.5-25.6-25.6-25.6H153.4
				c-14.1,0-25.6,11.5-25.6,25.6v109.3c0.2,9.1,1.3,18.2,3.1,27.2H68.1c-27.3,0-49.8-21.4-51.1-48.7c-1.3-27.3,19-50.8,46.2-53.4
				c4.6,16.3,13.6,31,26,42.5c2.2,2.2,5.4,3,8.4,2.1c3-0.9,5.3-3.3,5.9-6.3c0.7-3-0.3-6.2-2.7-8.3c-11.6-10.8-19.5-25-22.6-40.6
				c-5.5-27,3.9-54.9,24.6-73.1s49.6-23.9,75.6-15c0.2,0,0.3,0.1,0.5,0.1c0.6,0.1,1.1,0.2,1.7,0.2c0.5,0.1,1.1,0.1,1.6,0
				c0.2,0,0.4,0,0.5,0c0.4-0.1,0.7-0.3,1-0.4c0.5-0.2,1.1-0.4,1.6-0.6c0.5-0.3,0.9-0.6,1.3-1c0.9-0.7,1.6-1.6,2-2.6
				c0.2-0.3,0.4-0.6,0.5-0.9c0.1-0.2,0-0.3,0.1-0.5c0.1-0.6,0.2-1.1,0.2-1.7c0.1-0.6,0.1-1.1,0-1.7c0-0.2,0-0.3,0-0.5
				c-1.3-6.6-1.9-13.3-2-20c0.1-36.6,19.7-70.3,51.4-88.5s70.8-18.1,102.4,0.3s51.1,52.2,51,88.8c0,0.4-0.1,0.7-0.1,1.1
				c-0.1,15-3.6,29.7-10.2,43.2c-2.1,4.2-0.3,9.4,3.9,11.4c4.2,2.1,9.4,0.3,11.4-3.9c6-12.4,9.9-25.8,11.2-39.6
				c31,10.6,51.9,39.8,52,72.6c0,11.1-2.4,22-7,32.1c-0.2,0.3-0.4,0.6-0.5,1c-7,14.9-18.7,27.1-33.2,34.8c-3.4,1.9-5.2,5.8-4.2,9.6
				c1,3.8,4.4,6.5,8.3,6.5c1.4,0,2.8-0.3,4-1c15.3-8.2,27.9-20.6,36.6-35.6c15.3,6.9,26.3,20.9,29.4,37.4
				C496.9,306,491.6,322.9,479.8,334.8z" />
															<path d="M332.6,221.8c-4.7,0-8.5,3.8-8.5,8.5s3.8,8.5,8.5,8.5v83.6c-0.1,3.2-2.2,79.5-81.6,133.7c-2.6,1.7-4.1,4.6-3.9,7.7
				c0.2,3.1,2.1,5.8,4.9,7.2s6.1,1,8.6-0.8c86.7-59,89-143.9,89.1-147.7v-83.7C349.7,229.5,342,221.8,332.6,221.8z" />
															<path d="M179,322.7v-83.7h93.9c4.7,0,8.5-3.8,8.5-8.5s-3.8-8.5-8.5-8.5H179c-9.4,0-17.1,7.6-17.1,17.1v83.7
				c2.4,34.9,14.8,68.4,35.8,96.4c2.8,3.8,8.1,4.7,11.9,1.9s4.7-8.1,1.9-11.9C192.7,383.9,181.5,354,179,322.7z" />
															<path d="M313.1,283c-3.3-3.3-8.7-3.3-12.1,0l-63.3,63.3l-10-10c-3.3-3.2-8.7-3.2-12,0.1c-3.3,3.3-3.3,8.6-0.1,12l16,16
				c3.3,3.3,8.7,3.3,12.1,0l69.3-69.3C316.4,291.7,316.4,286.3,313.1,283z" />
														</g>
													</g>
												</g>
											</svg>
										</div>
										<div className="service-text">
											<h4 className="title">Security Updates</h4>
											<p>Get all the latest updates and patches on your platforms security and features.</p>
										</div>
									</div>
									{/* .service */}
								</div>
								{/* .col */}
							</div>
							{/* .row */}
						</div>
					</div>
					{/* .container */}
				</section>
				{/* .section */}
				<section className="section section-feature pb-0" id="feature">
					<div className="container">
						<div className="row align-items-center justify-content-lg-between g-gs">
							<div className="col-lg-5">
								<div className="img-block img-block-s1 left">
									<img src={landingPic2} alt="img" />
								</div>
								{/* .img-block */}
							</div>
							{/* .col */}
							<div className="col-lg-6">
								<div className="text-block me-xl-5">
									<h2 className="title">Provides   <span className="text-primary"> access</span> to all your platforms in one <span className="text-pink">centralized location.</span></h2>
									<div className="review review-s3">
										<div className="review-content">
											
											<div className="review-text">
												<p>Open new doors for you and your business by utilizing your platforms all in one place.</p>
												{/* <h6 className="review-name text-dark">CTO - Maro</h6> */}
											</div>
										</div>
									</div>
									{/* .review */}
									{/* <ul className="btns-inline">
										<li><a href="#x" className="btn btn-lg btn-primary"><span>Learn More</span></a></li>
									</ul> */}
								</div>
								{/* .text-block */}
							</div>
							{/* .col */}
						</div>
						{/* .row */}
					</div>
					{/* .container */}
				</section>
				{/* .section */}
				{/* <section className="section section-feature pb-0">
					<div className="container">
						<div className="row flex-row-reverse align-items-center justify-content-between g-gs">
							<div className="col-lg-5">
								<div className="img-block img-block-s1 right">
									<img src="/assets/images/lms/theme/c.jpg" alt="img" />
								</div>
							</div>
							<div className="col-lg-6">
								<div className="text-block">
									<h2 className="title">Some unique features and awesome experience</h2>
									<div className="g-gs">
										<div className="service service-s3">
											<div className="service-icon styled-icon styled-icon-s3 text-primary">
												<svg x="0px" y="0px" viewBox="0 0 512 512" style={{ fill: 'currentColor' }} xmlSpace="preserve">
													<path d="M436.6,175c-26.7-22.5-53.8-40.5-80.7-53.3C322,105.4,288.4,97.2,256,97.2s-66,8.2-99.9,24.5
	c-26.9,12.9-54.1,30.8-80.7,53.3c-45.3,38.2-73,75.8-74.2,77.4c-1.6,2.1-1.6,5.1,0,7.2c1.2,1.6,28.9,39.2,74.2,77.4
	c26.7,22.5,53.8,40.5,80.7,53.3c33.9,16.2,67.5,24.5,99.9,24.5s66-8.2,99.9-24.5c26.9-12.9,54.1-30.8,80.7-53.3
	c45.3-38.2,73-75.8,74.2-77.4c1.6-2.1,1.6-5.1,0-7.2C509.7,250.8,481.9,213.2,436.6,175L436.6,175z M428.7,327.7
	c-25.9,21.8-52.1,39.2-78.1,51.7c-32.2,15.4-64.1,23.3-94.6,23.3c-30.5,0-62.3-7.8-94.5-23.2c-26-12.4-52.2-29.8-78-51.6
	c-25.5-21.6-48.9-45.7-69.7-71.9c20.7-26.1,44-50.1,69.5-71.7c25.9-21.8,52.1-39.2,78.1-51.7c32.2-15.4,64.1-23.3,94.6-23.3
	c30.5,0,62.3,7.8,94.5,23.2c26,12.4,52.2,29.8,78,51.6c25.5,21.6,48.9,45.7,69.7,71.9C477.5,282.1,454.2,306.1,428.7,327.7z" />
													<path d="M249.9,20.1v54.6c0,3.4,2.7,6.1,6.1,6.1c3.4,0,6.1-2.7,6.1-6.1V20.1c0-3.4-2.7-6.1-6.1-6.1C252.6,14,249.9,16.7,249.9,20.1z
	" />
													<path d="M444.3,73.9l-42.8,42.6c-2.4,2.4-2.4,6.2,0,8.6c2.4,2.4,6.3,2.4,8.7,0L453,82.5c2.4-2.4,2.3-6.3-0.1-8.6
	C450.5,71.5,446.7,71.5,444.3,73.9z" />
													<path d="M101.8,125.1c2.4,2.4,6.3,2.4,8.7,0s2.4-6.2,0-8.6L67.7,73.9c-2.4-2.4-6.3-2.3-8.7,0.1c-2.3,2.4-2.3,6.2,0,8.6L101.8,125.1z
	" />
													<path d="M256,431.2c-3.4,0-6.1,2.7-6.1,6.1v54.6c0,3.4,2.7,6.1,6.1,6.1c3.4,0,6.1-2.7,6.1-6.1v-54.6
	C262.1,433.9,259.4,431.2,256,431.2z" />
													<path d="M101.8,386.9L59,429.5c-2.4,2.4-2.3,6.3,0.1,8.6c2.4,2.3,6.2,2.3,8.6,0l42.8-42.6c2.4-2.4,2.4-6.2,0-8.6
	C108,384.5,104.2,384.5,101.8,386.9C101.8,386.9,101.8,386.9,101.8,386.9z" />
													<path d="M410.2,386.9c-2.4-2.4-6.3-2.4-8.7,0c-2.4,2.4-2.4,6.2,0,8.6l42.8,42.6c2.4,2.4,6.3,2.3,8.7-0.1c2.3-2.4,2.3-6.2,0-8.6
	L410.2,386.9z" />
													<path d="M74.3,208.5c-14.1,13.2-27.5,27.1-40.1,41.8c-2.2,2.6-1.9,6.4,0.7,8.6c2.6,2.2,6.4,1.9,8.6-0.7
	c12.3-14.3,25.3-27.9,39.1-40.8c2.5-2.3,2.7-6.1,0.4-8.6S76.9,206.1,74.3,208.5C74.4,208.4,74.4,208.5,74.3,208.5L74.3,208.5z" />
													<path d="M93.8,191.3c-1.2,1-2.4,2-3.6,3.1c-2.6,2.2-2.9,6-0.7,8.6c2.2,2.6,6.1,2.9,8.6,0.7c1.2-1,2.3-2,3.5-3c2.6-2.2,2.9-6,0.8-8.6
	C100.3,189.5,96.4,189.2,93.8,191.3z" />
													<path d="M259.3,113.3c-30.8-0.7-61.1,8.5-86.2,26.4c-2.8,1.9-3.4,5.7-1.5,8.5c1.9,2.8,5.8,3.4,8.5,1.5c0,0,0,0,0.1-0.1
	c23.1-16.5,51.1-24.9,79.5-24.1c68.9,1.9,124.9,57.4,127.2,126.1c2.5,74.4-57.9,135.7-132.2,135c-70.7-0.7-128.5-58-129.6-128.4
	c-0.5-28.8,8.6-56.9,25.9-80c1.8-2.4,1.6-5.8-0.6-8c-2.4-2.4-6.3-2.4-8.7,0c-0.2,0.2-0.4,0.4-0.6,0.7
	c-19.4,25.9-29.4,57.7-28.2,90.1c2.5,75.3,64.3,136.2,139.9,137.8c81.5,1.8,148.2-64.7,146.4-145.9
	C397.5,176.8,335.5,115,259.3,113.3L259.3,113.3z" />
													<path d="M256.6,308c29.8,0,53.9-24.1,53.9-53.7c0-29.7-24.1-53.7-53.9-53.7c-29.8,0-53.9,24.1-53.9,53.7c0,0,0,0,0,0
	C202.7,283.9,226.8,308,256.6,308z M256.6,212.7c23,0,41.7,18.6,41.7,41.5c0,22.9-18.7,41.5-41.7,41.5c-23,0-41.7-18.6-41.7-41.5
	c0,0,0,0,0,0C215,231.3,233.6,212.8,256.6,212.7z" />
													<path d="M256.6,277.1c12.6,0,22.9-10.2,22.9-22.8c0-12.6-10.3-22.8-22.9-22.8s-22.9,10.2-22.9,22.8c0,0,0,0,0,0
	C233.7,266.9,243.9,277.1,256.6,277.1z M256.6,243.6c5.9,0,10.7,4.8,10.7,10.6c0,5.9-4.8,10.6-10.7,10.6c-5.9,0-10.7-4.8-10.7-10.6
	c0,0,0,0,0,0C245.9,248.4,250.7,243.6,256.6,243.6z" />
													<path d="M160,272.6l19.9,3.2c1.7,6,4.1,11.9,7.1,17.3l-12,16.4c-1.8,2.4-1.5,5.8,0.6,7.9l17.5,17.5c2.1,2.1,5.5,2.4,7.9,0.6
	l16.4-11.9c5.5,3.1,11.3,5.5,17.4,7.2l3.2,19.8c0.5,2.9,3.1,5.1,6,5H269c3,0.1,5.6-2.1,6-5l3.2-19.9c6.1-1.7,11.9-4.1,17.4-7.1
	l16.4,11.9c2.4,1.8,5.8,1.5,7.9-0.6l17.5-17.5c2.1-2.1,2.4-5.5,0.6-7.9l-11.9-16.4c3.1-5.5,5.5-11.3,7.2-17.3l20.3-3.2
	c3-0.5,5.3-3,5.4-6v-24.7c-0.1-3-2.4-5.6-5.4-6l-20.2-3.2c-1.7-6-4.2-11.9-7.3-17.3l11.9-16.4c1.8-2.4,1.5-5.8-0.6-7.9l-17.5-17.5
	c-2.1-2.1-5.5-2.4-7.9-0.6l-16.4,11.9c-5.5-3.1-11.3-5.5-17.4-7.2l-3.2-20.1c-0.5-3-3-5.2-6-5.3h-24.8c-3,0.1-5.6,2.3-6,5.3
	l-3.2,20.1c-6.1,1.7-11.9,4.1-17.4,7.2L201.1,173c-2.4-1.8-5.8-1.5-7.9,0.6l-17.5,17.5c-2.1,2.1-2.4,5.5-0.6,7.9l11.9,16.4
	c-3.1,5.5-5.5,11.3-7.2,17.3l-19.8,3.2c-2.9,0.5-5,3.1-4.9,6v24.7C154.9,269.6,157,272.1,160,272.6L160,272.6z M167.3,247.1l18.7-3
	c2.5-0.4,4.4-2.3,4.9-4.7c1.7-7.5,4.6-14.6,8.7-21.1c1.3-2.1,1.2-4.8-0.2-6.8L188.1,196l10.1-10.1l15.5,11.2c2,1.5,4.7,1.6,6.9,0.2
	c6.5-4.1,13.7-7.1,21.2-8.8c2.5-0.6,4.3-2.6,4.7-5.1l3-19h14.3l3,19c0.4,2.5,2.2,4.5,4.7,5.1c7.5,1.7,14.7,4.7,21.2,8.8
	c2.1,1.3,4.8,1.3,6.9-0.2l15.5-11.2l10.1,10.1l-11.2,15.4c-1.5,2-1.6,4.7-0.2,6.8c4.1,6.5,7.1,13.6,8.8,21.1
	c0.6,2.5,2.7,4.3,5.2,4.7l19.1,3v14.3l-19.1,3c-2.5,0.4-4.5,2.2-5.1,4.7c-1.7,7.5-4.7,14.6-8.8,21.1c-1.3,2.1-1.3,4.8,0.2,6.8
	l11.2,15.4L315,322.6l-15.5-11.2c-2-1.5-4.8-1.6-6.9-0.2c-6.5,4.1-13.7,7.1-21.2,8.8c-2.4,0.5-4.3,2.4-4.7,4.8l-3,18.7h-14.3
	l-3-18.7c-0.4-2.5-2.3-4.4-4.7-4.9c-7.5-1.7-14.7-4.6-21.2-8.7c-2.1-1.3-4.8-1.2-6.9,0.2l-15.5,11.2l-10.1-10.1l11.2-15.4
	c1.5-2,1.6-4.7,0.2-6.8c-4.1-6.5-7.1-13.6-8.8-21.1c-0.5-2.4-2.4-4.3-4.8-4.7l-18.7-3L167.3,247.1z" />
												</svg>
											</div>
											<div className="service-text">
												<h4 className="title">Easy to manage</h4>
												<p>Organise your client and workers easily. Our platform gives you full control over all features</p>
											</div>
										</div>
										<div className="service service-s3">
											<div className="service-icon styled-icon styled-icon-s3 text-success">
												<svg x="0px" y="0px" viewBox="0 0 512 512" style={{ fill: 'currentColor' }} xmlSpace="preserve">
													<g>
														<g>
															<path d="M346.8,337.2h-200c-2.1,0-4.2,0.8-5.7,2.3l-96,96l11.3,11.3l93.7-93.7H338c-1.7,9.5-6.9,24-23.2,24h-88v16h88
			c31.6,0,40-31.4,40-48C354.8,340.8,351.2,337.2,346.8,337.2z" />
														</g>
													</g>
													<g>
														<g>
															<path d="M448.5,283.5c-3.1-3.1-8.2-3.1-11.3,0l-72,72l11.3,11.3l65.7-65.7c10.8,14.4,8.6,34.7-5,46.4l-93.7,93.7H178.8
			c-2.1,0-4.2,0.8-5.7,2.3l-56,56l11.3,11.3l53.7-53.7h164.7c2.1,0,4.2-0.8,5.7-2.3l96-96C478.3,329,461.5,296.5,448.5,283.5z" />
														</g>
													</g>
													<g>
														<g>
															<path d="M322.8,249.2c-7.5,0-14.4,2.6-19.8,6.9c-6.4-13.5-20.2-22.9-36.2-22.9s-29.8,9.4-36.2,22.9c-5.5-4.3-12.3-6.9-19.8-6.9
			c-17.7,0-32,14.3-32,32s14.3,32,32,32c10.8,0,20.3-5.3,26.1-13.5c7.3,8.3,18,13.5,29.9,13.5c11.9,0,22.6-5.2,29.9-13.5
			c5.8,8.2,15.3,13.5,26.1,13.5c17.7,0,32-14.3,32-32C354.8,263.5,340.5,249.2,322.8,249.2z M210.8,297.2c-8.8,0-16-7.2-16-16
			s7.2-16,16-16s16,7.2,16,16S219.7,297.2,210.8,297.2z M266.8,297.2c-13.3,0-24-10.7-24-24s10.7-24,24-24s24,10.7,24,24
			S280.1,297.2,266.8,297.2z M322.8,297.2c-8.8,0-16-7.2-16-16s7.2-16,16-16s16,7.2,16,16S331.7,297.2,322.8,297.2z" />
														</g>
													</g>
													<g>
														<g>
															<path d="M464.5,107.5l-40-40l-11.3,11.3l26.3,26.3H330.8c-0.2,0-0.4,0-0.7,0c-8.7,0.2-15.5,7.3-15.3,16v48h16v-48h108.7
			l-26.3,26.3l11.3,11.3l40-40C467.6,115.7,467.6,110.6,464.5,107.5z" />
														</g>
													</g>
													<g>
														<g>
															<path d="M272.5,3.5c-3.1-3.1-8.2-3.1-11.3,0l-40,40l11.3,11.3l26.3-26.3v124.7h16V28.5l26.3,26.3l11.3-11.3L272.5,3.5z" />
														</g>
													</g>
													<g>
														<g>
															<rect x="314.8" y="185.2" width={16} height={48} />
														</g>
													</g>
													<g>
														<g>
															<rect x="202.8" y="185.2" width={16} height={48} />
														</g>
													</g>
													<g>
														<g>
															<rect x="258.8" y="169.2" width={16} height={48} />
														</g>
													</g>
													<g>
														<g>
															<path d="M202.8,105.2H94.1l26.3-26.3l-11.3-11.3l-40,40c-3.1,3.1-3.1,8.2,0,11.3l40,40l11.3-11.3l-26.3-26.3h108.7v48h16v-48
			c0-0.2,0-0.4,0-0.7C218.6,111.9,211.5,105,202.8,105.2z" />
														</g>
													</g>
												</svg>
											</div>
											<div className="service-text">
												<h4 className="title">A complete feature</h4>
												<p>Get every update and feature we have to offer without any drawback</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="section section-feature">
					<div className="container">
						<div className="row align-items-center justify-content-between g-gs">
							<div className="col-lg-5">
								<div className="img-block img-block-s1 left">
									<img src="/assets/images/lms/theme/d.jpg" alt="img" />
								</div>
							</div>
							<div className="col-lg-6">
								<div className="text-block">
									<h2 className="title">List building tools and lead generation</h2>
									<p className="lead">Build your team of workers. Assign them clients to manage and manage your activities.</p>
									<p>Utilize the widget feature and generate a perfect lead magnet for your client </p>
									<ul className="btns-inline">
										<li><a href={ROUTES_LINKS.overview} className="btn btn-lg btn-primary"><span>Go to Dashboard</span></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section> */}
				<section className="section section-testimonial pb-0" id="reviews">
					<div className="container">
						<div className="row justify-content-center text-center">
							<div className="col-xl-7 col-md-8 col-10">
								<div className="section-head">
									<h2 className="title">This is what our esteemed clients have to say for us</h2>
								</div>
							</div>
							{/* .col */}
						</div>
						{/* .row */}
						<div className="row g-gs justify-content-center">
							<div className="col-lg-6">
								<div className="card card-shadow round-xl">
									<div className="card-inner card-inner-lg">
										<div className="review review-s2">
											<div className="review-portrait review-portrait-s1">
												<div className="portrait portrait-s1">
													<img src="/assets/images/client/client-a.png" alt='' />
												</div>
											</div>
											<div className="review-content">
												<div className="review-rating rating rating-sm">
													<ul className="rating-stars">
														<li><em className="icon ni ni-star-fill" /></li>
														<li><em className="icon ni ni-star-fill" /></li>
														<li><em className="icon ni ni-star-fill" /></li>
														<li><em className="icon ni ni-star-fill" /></li>
														<li><em className="icon ni ni-star-fill" /></li>
													</ul>
												</div>
												<div className="review-text">
													<p>I never thought managing my cliens would be this easy. All users have their own access right to different clients</p>
													<h6 className="review-name text-dark">Sarah</h6>
												</div>
											</div>
										</div>
										{/* .review */}
									</div>
								</div>
								{/* .testimonial-block */}
							</div>
							{/* .col */}
							<div className="col-lg-6">
								<div className="card card-shadow round-xl">
									<div className="card-inner card-inner-lg">
										<div className="review review-s2">
											<div className="review-portrait review-portrait-s1">
												<div className="portrait portrait-s1">
													<img src="/assets/images/client/client-b.png" alt='' />
												</div>
											</div>
											<div className="review-content">
												<div className="review-rating rating rating-sm">
													<ul className="rating-stars">
														<li><em className="icon ni ni-star-fill" /></li>
														<li><em className="icon ni ni-star-fill" /></li>
														<li><em className="icon ni ni-star-fill" /></li>
														<li><em className="icon ni ni-star-fill" /></li>
														<li><em className="icon ni ni-star-fill" /></li>
													</ul>
												</div>
												<div className="review-text">
													<p>I never thought managing my cliens would be this easy. All users have their own access right to different clients</p>
													<h6 className="review-name text-dark">Mitch Andrew</h6>
												</div>
											</div>
											{/* .review */}
										</div>
									</div>
								</div>
								{/* .testimonial-block */}
							</div>
							{/* .col */}
						</div>
						{/* .row */}
					</div>
					{/* .container */}
				</section>
				{/* .section */}
				<section className="section section-cta">
					<div className="container">
						<div className="row justify-content-center text-center">
							<div className="col-xl-6 col-lg-7 col-md-8">
								<div className="text-block is-compact">
									<div className="img-block h-150px mb-4">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 118">
											<path d="M8.916,94.745C-.318,79.153-2.164,58.569,2.382,40.578,7.155,21.69,19.045,9.451,35.162,4.32,46.609.676,58.716.331,70.456,1.845,84.683,3.68,99.57,8.694,108.892,21.408c10.03,13.679,12.071,34.71,10.747,52.054-1.173,15.359-7.441,27.489-19.231,34.494-10.689,6.351-22.92,8.733-34.715,10.331-16.181,2.192-34.195-.336-47.6-12.281A47.243,47.243,0,0,1,8.916,94.745Z" transform="translate(0 -1)" fill="#f6faff" />
											<rect x={18} y={32} width={84} height={50} rx={4} ry={4} fill="#fff" />
											<rect x={26} y={44} width={20} height={12} rx={1} ry={1} fill="#e5effe" />
											<rect x={50} y={44} width={20} height={12} rx={1} ry={1} fill="#e5effe" />
											<rect x={74} y={44} width={20} height={12} rx={1} ry={1} fill="#e5effe" />
											<rect x={38} y={60} width={20} height={12} rx={1} ry={1} fill="#e5effe" />
											<rect x={62} y={60} width={20} height={12} rx={1} ry={1} fill="#e5effe" />
											<path d="M98,32H22a5.006,5.006,0,0,0-5,5V79a5.006,5.006,0,0,0,5,5H52v8H45a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2H73a2,2,0,0,0,2-2V94a2,2,0,0,0-2-2H66V84H98a5.006,5.006,0,0,0,5-5V37A5.006,5.006,0,0,0,98,32ZM73,94v4H45V94Zm-9-2H54V84H64Zm37-13a3,3,0,0,1-3,3H22a3,3,0,0,1-3-3V37a3,3,0,0,1,3-3H98a3,3,0,0,1,3,3Z" transform="translate(0 -1)" fill="#798bff" />
											<path d="M61.444,41H40.111L33,48.143V19.7A3.632,3.632,0,0,1,36.556,16H61.444A3.632,3.632,0,0,1,65,19.7V37.3A3.632,3.632,0,0,1,61.444,41Z" transform="translate(0 -1)" fill="#6576ff" />
											<path d="M61.444,41H40.111L33,48.143V19.7A3.632,3.632,0,0,1,36.556,16H61.444A3.632,3.632,0,0,1,65,19.7V37.3A3.632,3.632,0,0,1,61.444,41Z" transform="translate(0 -1)" fill="none" stroke="#6576ff" strokeMiterlimit={10} strokeWidth={2} />
											<line x1={40} y1={22} x2={57} y2={22} fill="none" stroke="#fffffe" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
											<line x1={40} y1={27} x2={57} y2={27} fill="none" stroke="#fffffe" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
											<line x1={40} y1={32} x2={50} y2={32} fill="none" stroke="#fffffe" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
											<line x1="30.5" y1="87.5" x2="30.5" y2="91.5" fill="none" stroke="#9cabff" strokeLinecap="round" strokeLinejoin="round" />
											<line x1="28.5" y1="89.5" x2="32.5" y2="89.5" fill="none" stroke="#9cabff" strokeLinecap="round" strokeLinejoin="round" />
											<line x1="79.5" y1="22.5" x2="79.5" y2="26.5" fill="none" stroke="#9cabff" strokeLinecap="round" strokeLinejoin="round" />
											<line x1="77.5" y1="24.5" x2="81.5" y2="24.5" fill="none" stroke="#9cabff" strokeLinecap="round" strokeLinejoin="round" />
											<circle cx="90.5" cy="97.5" r={3} fill="none" stroke="#9cabff" strokeMiterlimit={10} />
											<circle cx={24} cy={23} r="2.5" fill="none" stroke="#9cabff" strokeMiterlimit={10} />
										</svg>
									</div>
									<h2 className="title">Get Started with Gorilla Metrics</h2>
									<p className="lead">People have chosen Gorilla Metrics to power the place on the web they call “home” — join the family.</p>
									<ul className="btns-inline justify-center">
										<li>
											<Link to={ROUTES_LINKS.overview} rel="noreferrer" target="_blank" className="btn btn-xl btn-primary">Get Gorilla Metrics</Link>
										</li>
									</ul>
								</div>
							</div>
							{/* ,col */}
						</div>
						{/* .row */}
					</div>
					{/* .container */}
				</section>
				{/* .section */}
				<footer className="footer bg-lighter" id="footer">
					<div className="container">
						<div className="row g-3 align-items-center justify-content-md-between py-4 py-md-5">
							<div className="col-md-3">
								<div className="footer-logo">
									<Link to={ROUTES_LINKS.home} className="logo-link">
										<img className="logo-light logo-img" src="/assets/images/logo.png" srcSet="/assets/images/logo2x.png 2x" alt="logo" />
										<img className="logo-dark logo-img" src="/assets/images/logo-dark.png" srcSet="/assets/images/logo-dark2x.png 2x" alt="logo-dark" />
									</Link>
								</div>
								{/* .footer-logo */}
							</div>
							{/* .col */}
							<div className="col-md-9 d-flex justify-content-md-end">
								<ul className="link-inline gx-4">
									<li><a href="#x">How it works</a></li>
									<li><a href="#x">Service</a></li>
									<li><a href="#x">Help</a></li>
									<li><a href="#x">Contact</a></li>
								</ul>
								{/* .footer-nav */}
							</div>
							{/* .col */}
						</div>
						<hr className="hr border-light mb-0 mt-n1" />
						<div className="row g-3 align-items-center justify-content-md-between py-4">
							<div className="col-md-8">
								<div className="text-base">Copyright © 2023 Gorilla Metrics.</div>
							</div>
							{/* .col */}
							<div className="col-md-4 d-flex justify-content-md-end">
								<ul className="social">
									<li><a href="#x"><em className="icon ni ni-twitter" /></a></li>
									<li><a href="#x"><em className="icon ni ni-facebook-f" /></a></li>
									<li><a href="#x"><em className="icon ni ni-instagram" /></a></li>
									<li><a href="#x"><em className="icon ni ni-pinterest" /></a></li>
								</ul>
								{/* .footer-icon */}
							</div>
							{/* .col */}
						</div>
						{/* .row */}
					</div>
					{/* .container */}
				</footer>
				{/* .footer */}
			</div>
			{/* main @e */}
			{
				isLoading && <div className="position-fixed top-0 w-100 h-100 bg-dark d-flex justify-center align-center flex-column" style={{ zIndex: 1000 }}>
					{/* <img src="/assets/images/logo-dark.png" alt="loading state" className="img-fluid" width="10%" /> */}
					<Components.Spinner color="primary" />
				</div>
			}
		</div>

	);
}
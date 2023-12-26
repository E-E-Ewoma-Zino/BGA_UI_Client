// Sign in page for App
import { authError, clientSignIn } from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import ROUTES_LINKS from "../../constants/routes";
import { useNavigate } from "react-router-dom";
import Components from "../../components";
import { login } from "../../api/auth";
import { useState } from "react";

export default function SignIn() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const loginState = useSelector(state => {
		return state.auth
	});
	const [input, setInput] = useState({
		username: '',
		password: ''
	});

	// get the input when the text is chagned
	const handleInputChange = (e) => {
		const { name, value } = e.target;

		setInput(prev => {
			return {
				...prev,
				[name]: value
			}
		});
	}


	// on user submit
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const client = await login(input.username, input.password);
			console.log("in client signin page", client);

			if (client.error) {
				dispatch(authError(client));
				console.log(">>>fowiha", client);
				window.NioApp.Toast(client.message || "Failled to login", "error");
			} else {
				dispatch(clientSignIn(client));

				window.NioApp.Toast("Successful Login", "success");
				setTimeout(() => {
					navigate(ROUTES_LINKS.overview);
				}, 1000);
			}
		} catch (error) {
			console.error("Submit Error", error);
			dispatch(authError(error));
		}
	}

	return (
		<div className="nk-app-root">
			{/* main @s */}
			<div className="nk-main ">
				{/* wrap @s */}
				<div className="nk-wrap nk-wrap-nosidebar">
					{/* content @s */}
					<div className="nk-content ">
						<div className="nk-split nk-split-page nk-split-md">
							<div className="nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white">
								<div className="nk-block nk-block-middle nk-auth-body">
									<div className="brand-logo pb-5">
										<a href="html/index.html" className="logo-link">
											<img className="logo-light logo-img logo-img-lg" src="/assets/images/logo.png" srcSet="/assets/images/logo2x.png 2x" alt="logo" />
											<img className="logo-dark logo-img logo-img-lg" src="/assets/images/logo-dark.png" srcSet="/assets/images/logo-dark2x.png 2x" alt="logo-dark" />
										</a>
									</div>
									<div className="nk-block-head">
										<div className="nk-block-head-content">
											<h5 className="nk-block-title">Sign-In</h5>
											<div className="nk-block-des">
												<p>Access the {process.env.REACT_APP_NAME} panel using your email and passcode.</p>
											</div>
										</div>
									</div>
									{/* .nk-block-head */}
									<form action="#X" onSubmit={handleSubmit}>
										{/* .form-group */}
										<div className="form-group">
											<div>
												<div className="form-label-group">
													<label className="form-label" htmlFor="default-01">Email</label>
													<a className="link link-primary link-sm" tabIndex={-1} href="#x">Need Help?</a>
												</div>
												<div className="form-control-wrap">
													<input type="email" className="form-control form-control-lg" id="default-01" name="username" value={input.username} onChange={handleInputChange} placeholder="Enter your email address or username" required={true} />
												</div>
											</div>
										</div>

										{/* .form-group */}
										<div className="form-group">
											<div className="form-label-group">
												<label className="form-label" htmlFor="password">Passcode</label>
												<a className="link link-primary link-sm" tabIndex={-1} href="html/pages/auths/auth-reset-v3.html">Forgot Code?</a>
											</div>
											<div className="form-control-wrap">
												<a tabIndex={-1} href="#x" className="form-icon form-icon-right passcode-switch lg" data-target="password">
													<em className="passcode-icon icon-show icon ni ni-eye" />
													<em className="passcode-icon icon-hide icon ni ni-eye-off" />
												</a>
												<input type="password" className="form-control form-control-lg" id="password" name="password" value={input.password} onChange={handleInputChange} placeholder="Enter your passcode" required={true} />
											</div>
										</div>
										{/* .form-group */}
										<div className="form-group">
											<button className="btn btn-lg btn-primary btn-block" type="submit">
												{
													loginState.loading ? "Sign in" : <Components.Spinner color="light" />
												}
											</button>
										</div>
									</form>
									{/* form */}
								</div>
								{/* .nk-block */}
								<div className="nk-block nk-auth-footer">
									<div className="nk-block-between">
										<ul className="nav nav-sm">
											<li className="nav-item">
												<a className="link link-primary fw-normal py-2 px-3 fs-13px" href="#x">Terms &amp; Condition</a>
											</li>
											<li className="nav-item">
												<a className="link link-primary fw-normal py-2 px-3 fs-13px" href="#x">Privacy Policy</a>
											</li>
											<li className="nav-item">
												<a className="link link-primary fw-normal py-2 px-3 fs-13px" href="#x">Help</a>
											</li>
											<li className="nav-item dropup">
												<a href="#x" className="dropdown-toggle dropdown-indicator has-indicator link link-primary fw-normal py-2 px-3 fs-13px" data-bs-toggle="dropdown" data-offset="0,10"><small>English</small></a>
												<div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
													<ul className="language-list">
														<li>
															<a href="#x" className="language-item">
																<img src="/assets/images/flags/english.png" alt='' className="language-flag" />
																<span className="language-name">English</span>
															</a>
														</li>
														<li>
															<a href="#x" className="language-item">
																<img src="/assets/images/flags/spanish.png" alt='' className="language-flag" />
																<span className="language-name">Español</span>
															</a>
														</li>
														<li>
															<a href="#x" className="language-item">
																<img src="/assets/images/flags/french.png" alt='' className="language-flag" />
																<span className="language-name">Français</span>
															</a>
														</li>
														<li>
															<a href="#x" className="language-item">
																<img src="/assets/images/flags/turkey.png" alt='' className="language-flag" />
																<span className="language-name">Türkçe</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
										</ul>
										{/* .nav */}
									</div>
									<div className="mt-3">
										<p>© 2023 {process.env.REACT_APP_NAME}. All Rights Reserved.</p>
									</div>
								</div>
								{/* .nk-block */}
							</div>
							{/* .nk-split-content */}
							<div className="nk-split-content nk-split-stretch bg-dark d-flex justify-center align-center flex-column">
								<img src="/assets/images/bga1.png" alt="bga" />
								<h2 className="ff-base fw-bold text-center text-light mt-5">
									WE PROVIDE <em className="text-primary">MARKETING</em> & DEVELOPMENT SERVICES
								</h2>
							</div>
							{/* .nk-split-content */}
						</div>
						{/* .nk-split */}
					</div>
					{/* wrap @e */}
				</div>
				{/* content @e */}
			</div>
			{/* main @e */}
		</div>
	);
}
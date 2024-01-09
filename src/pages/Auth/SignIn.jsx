// Sign in page for App
import { authError, clientSignIn } from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import ROUTES_LINKS from "../../constants/routes";
import { useNavigate } from "react-router-dom";
import Components from "../../components";
import { login } from "../../api/auth";
import { useState } from "react";
import logo from '../../assets/image/logo.png'
import './auth.css'

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
		dispatch(clientSignIn(null)); // to start the loading

		try {
			const client = await login(input.username, input.password);
			console.log("in client signin page", client);

			if (client.error) {
				dispatch(authError(client));
				window.NioApp.Toast(client.message || "Failled to login", "error");
			} else {
				dispatch(clientSignIn(client));

				window.NioApp.Toast("Successful Login", "success");
				setTimeout(() => {
					dispatch(authError(null));
					navigate(ROUTES_LINKS.overview);
				}, 1000);
			}
		} catch (error) {
			console.error("Submit Error", error);
			dispatch(authError(error));
		}
	}
console.log(loginState)
	return (
		<div className="nk-app-root">
			{/* main @s */}
			<div className="nk-main ">
				{/* wrap @s */}
				<div className="nk-wrap nk-wrap-nosidebar">
					{/* content @s */}
					<div className="nk-content ">
						<div className="nk-split nk-split-page nk-split-md">
							<div className="nk-split-content nk-split-stretch d-none d-md-flex justify-center align-center flex-column">
								<div className="side-login">
									<img src={logo} style={{maxWidth: '85%'}} alt="bga" />
									<h3 className="fw-bold text-center mt-5">
										It’s not about what make. It’s about what you make possible.
									</h3>
									<p>Welcome to Big Gorilla Apps!</p>
								</div>
							</div>
							{/* .nk-split-content */}
							<div className="nk-split-content nk-block-area nk-block-area-column nk-auth-container">
								<div className="nk-block ms-0 nk-block-middle nk-auth-body">
									{/* <div className="brand-logo pb-5">
										<a href="html/index.html" className="logo-link">
											<img className="logo-light logo-img logo-img-lg" src="/assets/images/logo.png" srcSet="/assets/images/logo2x.png 2x" alt="logo" />
											<img className="logo-dark logo-img logo-img-lg" src="/assets/images/logo-dark.png" srcSet="/assets/images/logo-dark2x.png 2x" alt="logo-dark" />
										</a>
									</div> */}
									<div className="nk-block-head auth-img">
										<img src={"/assets/images/bga1.png"} alt="bga" />
									</div>
									{/* .nk-block-head */}
									<form action="#X" onSubmit={handleSubmit}>
										{/* .form-group */}
										<div className="form-group">
											<div>
												<div className="form-label-group">
													<label className="form-label" htmlFor="default-01">Email</label>
													{/* <a className="link link-primary link-sm" tabIndex={-1} href="#x">Need Help?</a> */}
												</div>
												<div className="form-control-wrap">
													<span  className="form-icon form-icon-right input-icon  lg">
														{/* <em className="passcode-icon icon-show icon ni ni-eye" /> */}
														<em className="icon ni ni-user" />
													</span>
													<input type="email" className="form-control p-4 bga-input form-control-lg" id="default-01" name="username" value={input.username} onChange={handleInputChange} placeholder="Enter your email here" required={true} />
												</div>
											</div>
										</div>

										{/* .form-group */}
										<div className="form-group">
											<div className="form-label-group">
												<label className="form-label" htmlFor="password">Password</label>
												{/* <a className="link link-primary link-sm" tabIndex={-1} href="html/pages/auths/auth-reset-v3.html">Forgot Code?</a> */}
											</div>
											<div className="form-control-wrap">
												<a tabIndex={-1} href="#x" className="form-icon form-icon-right input-icon passcode-switch lg" data-target="password">
													<em className="passcode-icon icon-show icon ni ni-eye" />
													<em className="passcode-icon icon-hide icon ni ni-eye-off" />
												</a>
												<input type="password" className="form-control p-4 bga-input form-control-lg" id="password" name="password" value={input.password} onChange={handleInputChange} placeholder="***********" required={true} />
												<p className="mb-0 text-white text-right mt-2 cursor-pointer">Forget password?</p>
											</div>
										</div>
										{/* .form-group */}
										<div className="form-group flex-center mt-4">
											<button className="btn btn-lg btn-primary py-4 btn-bga" type="submit">
												{
													loginState.loading ? <Components.Spinner color="light"  /> :  "Login" 
												}
											</button>
										</div>
									</form>
									{/* form */}
								</div>
								{/* .nk-block */}
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
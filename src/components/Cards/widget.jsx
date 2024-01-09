export default function Widget ({ label, }){
	return (
	  <div className="custom-menu-item ">
		<div className="menu-item-icon">
		</div>
		<div className="menu-item-image">
			<span  className=" input-icon  lg">
				{/* <em className="passcode-icon icon-show icon ni ni-eye" /> */}
				<em class="icon ni ni-user" />
			</span>
		</div>
		<div className="menu-item-label">{label}</div>
	  </div>
	);
  };
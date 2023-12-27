// Spinner component

export default function Spinner({color, className}) {
	return (
		<div className={`spinner-border ${className} text-${color}`} role="status">
			<span className="visually-hidden">Loading...</span>
		</div>
	);
}

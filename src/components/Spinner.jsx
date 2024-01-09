// Spinner component

export default function Spinner({color, className}) {
	return (
		<div className={`spinner-border spinner-border-sm ${className} text-${color}`} role="status">
			<span className="visually-hidden">Loading...</span>
		</div>
	);
}

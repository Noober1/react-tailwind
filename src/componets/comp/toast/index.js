import React from 'react'
import PropTypes from 'prop-types'

const Toast = ({title, message, iconUrl}) => {
	return (
		<div className="toast">
			<div className="toast-icon">
				<img className="h-12 w-12" src={iconUrl ?? "/logo192.png"} alt={title ?? "Untitled"}/>
			</div>
			<div>
				<h5 className="toast-title">{title ?? "Untitled"}</h5>
				<p className="toast-message">{message ?? "No message"}</p>
			</div>
		</div>
	)
}

Toast.propTypes = {
	title: PropTypes.string,
	message: PropTypes.string,
	iconUrl: PropTypes.string
}

export default Toast

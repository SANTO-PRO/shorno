import PropTypes from 'prop-types';

const Button = ({
	children,
	variant = 'primary',
	size = 'medium',
	disabled = false,
	onClick,
	className,
	...restProps
}) => {
	// custom styles for button based on props
	const baseClasses =
		'inline-flex items-center px-4 py-2 rounded-md font-medium';

	const variantClasses = {
		primary: 'text-white bg-blue-600 hover:bg-blue-700 focus:outline-none ',
		secondary:
			'text-black font-bold bg-gray-200 hover:bg-gray-300 focus:outline-none ',
		tertiary: 'text-blue-600 hover:text-blue-700 focus:outline-none',
		link: 'text-blue-600 hover:underline focus:outline-none',
	};

	const sizeClasses = {
		small: 'text-sm',
		medium: 'text-base',
		large: 'text-lg',
	};

	const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';

	const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClass} ${className}`;

	return (
		<button
			type="button"
			className={classes}
			{...restProps}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'link']),
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	className: PropTypes.string,
};

export default Button;

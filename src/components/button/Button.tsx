import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

type ButtonProps = {
	title: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	type?: 'submit' | 'reset' | 'button';
};

export const Button = ({ title, onClick, type = 'button' }: ButtonProps) => {
	const isPrimary = type === 'submit';
	return (
		<button
			className={clsx(styles.button, { [styles.primary]: isPrimary })}
			type={type}
			onClick={onClick}>
			{title}
		</button>
	);
};

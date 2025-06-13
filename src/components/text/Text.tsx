import React from 'react';
import clsx from 'clsx';
import styles from './Text.module.scss';

type TextProps = {
	children: React.ReactNode;
	as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'span';
	size?: 12 | 22 | 31;
	weight?: 400 | 800;
	uppercase?: boolean;
};

export const Text = ({
	children,
	as: Component = 'div',
	size,
	weight,
	uppercase,
}: TextProps) => {
	const className = clsx(
		styles.text,
		size && styles[`size-${size}`],
		weight && styles[`weight-${weight}`],
		{ [styles.uppercase]: uppercase }
	);

	return <Component className={className}>{children}</Component>;
};

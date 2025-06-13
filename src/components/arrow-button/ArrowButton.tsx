import React from 'react';
import clsx from 'clsx';
import { ArrowIcon } from 'components/icons/arrow-icon';
import styles from './ArrowButton.module.scss';

type ArrowButtonProps = {
	isOpen: boolean;
	onClick: () => void;
};

export const ArrowButton = ({ isOpen, onClick }: ArrowButtonProps) => {
	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, { [styles.container_open]: isOpen })}
			onClick={onClick}>
			<ArrowIcon />
		</div>
	);
};

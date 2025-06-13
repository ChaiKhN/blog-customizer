import React from 'react';
import { Text } from 'components/text';
import styles from './Select.module.scss';
import clsx from 'clsx';
import type { OptionType } from 'src/constants/articleProps';

type SelectProps = {
	label: string;
	options: OptionType[];
	selected: OptionType;
	onChange: (selected: OptionType) => void;
};

export const Select = ({ label, options, selected, onChange }: SelectProps) => (
	<div className={styles.container}>
		<Text size={12} uppercase>
			{label}
		</Text>
		<select
			className={styles.select}
			value={selected.value}
			onChange={(e) => {
				const newSelected = options.find((opt) => opt.value === e.target.value);
				if (newSelected) onChange(newSelected);
			}}>
			{options.map((option) => (
				<option
					key={option.value}
					value={option.value}
					className={clsx(styles.option, styles[option.optionClassName || ''])}>
					{option.title}
				</option>
			))}
		</select>
	</div>
);

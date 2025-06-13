// src/components/radio-group/RadioGroup.tsx
import React from 'react';
import { Text } from 'components/text';
import styles from './RadioGroup.module.scss';
import type { OptionType } from 'src/constants/articleProps';

type RadioGroupProps = {
	name: string;
	options: OptionType[];
	selected: OptionType;
	onChange: (selected: OptionType) => void;
};

export const RadioGroup = ({
	name,
	options,
	selected,
	onChange,
}: RadioGroupProps) => (
	<div className={styles.container}>
		{options.map((option) => (
			<label key={option.value} className={styles.label}>
				<input
					type='radio'
					name={name}
					value={option.value}
					checked={selected.value === option.value}
					onChange={() => onChange(option)}
				/>
				<Text>{option.title}</Text>
			</label>
		))}
	</div>
);

import { OptionType } from 'src/constants/articleProps';
import { Text } from 'src/ui/text';
import { Option } from './Option';
import styles from './RadioGroup.module.scss';

type RadioGroupProps = {
	title: string;
	name: string;
	options: OptionType[];
	selected: OptionType;
	onChange: (value: OptionType) => void;
};

export const RadioGroup = (props: RadioGroupProps) => {
	const { name, options, selected, onChange, title } = props;

	return (
		<div className={styles.container}>
			<Text size={12} weight={800} uppercase>
				{title}
			</Text>
			<div className={styles.group}>
				{options.map((option) => (
					<Option
						key={option.value}
						groupName={name}
						value={option.value}
						title={option.title}
						selected={selected}
						onChange={() => onChange(option)}
						option={option}
					/>
				))}
			</div>
		</div>
	);
};

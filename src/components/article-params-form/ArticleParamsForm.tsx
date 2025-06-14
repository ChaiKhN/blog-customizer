import { ArrowButton } from 'src/ui/arrow-button';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { Button } from 'src/ui/button';
import clsx from 'clsx';
import { useState, useRef, FormEvent } from 'react';
import { useOutsideClickClose } from 'src/ui/select/hooks/useOutsideClickClose';
import styles from './ArticleParamsForm.module.scss';
import {
	fontFamilyOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	fontSizeOptions,
	OptionType,
	ArticleStateType,
	defaultArticleState,
} from 'src/constants/articleProps';

type ArticleParamsFormProps = {
	date: ArticleStateType;
	setDate: (date: ArticleStateType) => void;
};

export const ArticleParamsForm = ({
	date,
	setDate,
}: ArticleParamsFormProps) => {
	const [form, setForm] = useState(false);
	const [state, setState] = useState(date);

	const formRef = useRef<HTMLDivElement>(null);

	// Закрытие по клику вне формы
	useOutsideClickClose({
		isOpen: form,
		rootRef: formRef,
		onClose: () => setForm(false),
		onChange: setForm,
	});

	function openFrom() {
		setForm(!form);
	}

	function handleFontFamily(item: OptionType) {
		setState({ ...state, fontFamilyOption: item });
	}
	function handleFontSize(item: OptionType) {
		setState({ ...state, fontSizeOption: item });
	}
	function handleFontColor(item: OptionType) {
		setState({ ...state, fontColor: item });
	}
	function handleBackgroundColor(item: OptionType) {
		setState({ ...state, backgroundColor: item });
	}
	function handlecontentWidth(item: OptionType) {
		setState({ ...state, contentWidth: item });
	}

	function handleReset() {
		setState(defaultArticleState);
		setDate(defaultArticleState);
	}

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setDate(state);
	}

	return (
		<>
			<ArrowButton state={form} openForm={openFrom} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: form })}
				ref={formRef}>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
					onReset={handleReset}>
					<Text
						as='h2'
						size={31}
						weight={800}
						family='open-sans'
						uppercase
						dynamicLite>
						Задайте параметры
					</Text>
					<Select
						title='Шрифт'
						options={fontFamilyOptions}
						selected={state.fontFamilyOption}
						onChange={handleFontFamily}
					/>
					<RadioGroup
						name='font size'
						title='размер шрифта'
						options={fontSizeOptions}
						selected={state.fontSizeOption}
						onChange={handleFontSize}
					/>
					<Select
						title='Цвет шрифта'
						options={fontColors}
						selected={state.fontColor}
						onChange={handleFontColor}
					/>
					<Separator />
					<Select
						title='Цвет фона'
						options={backgroundColors}
						selected={state.backgroundColor}
						onChange={handleBackgroundColor}
					/>
					<Select
						title='Ширина контента'
						options={contentWidthArr}
						selected={state.contentWidth}
						onChange={handlecontentWidth}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};

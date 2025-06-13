import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Article } from 'components/article';
import { ArticleParamsForm } from 'components/article-params-form';
import {
	defaultArticleState,
	ArticleStateType,
} from './constants/articleProps';
import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
	const [articleState, setArticleState] =
		useState<ArticleStateType>(defaultArticleState);

	useEffect(() => {
		const root = document.documentElement;
		root.style.setProperty(
			'--font-family',
			articleState.fontFamilyOption.value
		);
		root.style.setProperty('--font-size', articleState.fontSizeOption.value);
		root.style.setProperty('--font-color', articleState.fontColor.value);
		root.style.setProperty(
			'--background-color',
			articleState.backgroundColor.value
		);
		root.style.setProperty('--content-width', articleState.contentWidth.value);
	}, [articleState]);

	return (
		<div className={styles.main}>
			<ArticleParamsForm
				isOpen={isSidebarOpen}
				setIsOpen={setIsSidebarOpen}
				currentStyles={articleState}
				onApplyStyles={setArticleState}
			/>
			<Article />
		</div>
	);
};

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

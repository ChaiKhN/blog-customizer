import { CSSProperties, useState } from 'react';
import clsx from 'clsx';
import { Article } from 'src/components/article/Article';
import { ArticleParamsForm } from 'src/components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from 'src/constants/articleProps';
import styles from './app.module.scss';

export const App = () => {
	const [datePage, setDatePage] = useState(defaultArticleState);

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': datePage.fontFamilyOption.value,
					'--font-size': datePage.fontSizeOption.value,
					'--font-color': datePage.fontColor.value,
					'--container-width': datePage.contentWidth.value,
					'--bg-color': datePage.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm date={datePage} setDate={setDatePage} />
			<Article />
		</div>
	);
};

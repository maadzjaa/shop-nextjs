import { MDXComponents } from 'mdx/types';

export const Markdown: MDXComponents = {
	a: ({ children, ...props }) => {
		return (
			<a {...props} className='underline hover:text-blue-600 duration-100' target='_blank'>
				{children}
			</a>
		);
	},
	h2: ({ children, ...props }) => {
		return (
			<h2 {...props} style={{ color: 'gold' }}>
				{children}
			</h2>
		);
	},
};

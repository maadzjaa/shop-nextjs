import { MDXRemote } from 'next-mdx-remote/rsc';
import { Markdown } from '../atoms/Markdown';

export function Post({ children }: { children: string }) {
	return (
		<MDXRemote
			source={children}
			options={{
				mdxOptions: {},
			}}
			components={Markdown}
		/>
	);
}

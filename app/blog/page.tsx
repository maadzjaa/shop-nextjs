import { getPosts } from '@/utils/posts';

export default async function Page() {
	const posts = await getPosts();

	return (
		<div>
			{posts
				.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
				.map((post) => (
					<article key={post.slug}>
						<a href={`/blog/${post.slug}`}>
							<p>{post.date}</p>
							<img src={post.img} alt={post.title} />
							<h1>{post.title}</h1>
							<p>{post.description}</p>
						</a>
					</article>
				))}
		</div>
	);
}

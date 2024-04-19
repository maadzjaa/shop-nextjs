import { getPosts } from '@/utils/posts';
import styles from '@/app/blog/page.module.css';

export default async function Page() {
	const posts = await getPosts();

	return (
		<div className={styles.wrapper}>
			{posts
				.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
				.map((post) => (
					<article className={styles.article} key={post.slug}>
						<a className={styles.singleLink} href={`/blog/${post.slug}`}>
							<img className={styles.image} src={post.img} alt={post.title} />
							<p>{post.date}</p>
							<h1>{post.title}</h1>
							<p>{post.description}</p>
						</a>
					</article>
				))}
		</div>
	);
}

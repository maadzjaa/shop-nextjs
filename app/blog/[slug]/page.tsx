import { getPost, getPosts } from '@/utils/posts';
import { Post } from '@/components/organisms/Post';
import { notFound } from 'next/navigation';
import styles from '@/app/blog/[slug]/page.module.css';

export async function generateStaticParams() {
	const posts = await getPosts();
	return posts.map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
	const post = await getPost(params.slug);
	if (!post) return notFound();

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.heading}>{post.title}</h1>
			<p className={styles.text}>
				<Post>{post.body}</Post>
			</p>
		</div>
	);
}

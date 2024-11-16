// app/blog/page.js
import Link from 'next/link';
import styles from './Blog.module.css'; // We will create this CSS module

// Sample blog articles data
const articles = [
  { id: 1, title: 'Benefits of Yoga for Mental Health', preview: 'Discover how yoga can improve your mental wellbeing by reducing stress and enhancing focus.', image: '/yoga1.avif' },
  { id: 2, title: 'Top 5 Yoga Poses for Beginners', preview: 'Learn about the best beginner-friendly poses to start your yoga journey.', image: '/yoga2.avif' },
  { id: 3, title: 'How Yoga Can Improve Flexibility', preview: 'Yoga can help increase your flexibility, balance, and posture. Find out how!', image: '/yoga3.avif' },
];

export default function BlogPage() {
  return (
    <div className={styles.blogPage}>
      <h1>Yoga and Wellness Articles</h1>
      <div className={styles.articleList}>
        {articles.map((article) => (
          <div key={article.id} className={styles.articleItem}>
            <img src={article.image} alt={article.title} className={styles.articleImage} />
            <div className={styles.articleContent}>
              <h3>{article.title}</h3>
              <p>{article.preview}</p>
              <Link href={`/blog/${article.id}`}>
                <button className={styles.readMoreButton}>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

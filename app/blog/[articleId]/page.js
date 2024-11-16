// app/blog/[articleId]/page.js
"use client"
import { useParams } from 'next/navigation';

const articles = [
  { id: 1, title: 'Benefits of Yoga for Mental Health', content: 'Yoga has been shown to reduce stress...', image: '/yoga1.avif' },
  { id: 2, title: 'Top 5 Yoga Poses for Beginners', content: 'Starting yoga can be intimidating...', image: '/yoga2.avif' },
  { id: 3, title: 'How Yoga Can Improve Flexibility', content: 'Yoga improves flexibility by...', image: '/yoga3.avif' },
];

export default function ArticlePage() {
  const { articleId } = useParams();
  const article = articles.find((a) => a.id === parseInt(articleId));

  if (!article) return <p>Article not found.</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{article.title}</h1>
      <img src={article.image} alt={article.title} style={{ width: '100%', maxHeight: '900px', objectFit: 'cover',objectPosition:'center', borderRadius: '5px' }} />
      <p style={{ marginTop: '1rem' }}>{article.content}</p>
    </div>
  );
}

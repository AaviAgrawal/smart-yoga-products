// app/products/page.js
import Link from 'next/link';

const products = [
  { id: 1, name: 'Smart Yoga Mat', description: 'A smart mat with sensors.', price: '$99', image: '/product1.jpeg' },
  { id: 2, name: 'Yoga Tracker', description: 'Tracks your yoga sessions and vitals.', price: '$49', image: '/product2.webp' },
  { id: 3, name: 'Smart Yoga Block', description: 'Adjustable yoga block with sensors.', price: '$29', image: '/product3.webp' },
];

export default function ProductsPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Our Smart Yoga Products</h1>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '5px', textAlign: 'center', width: '200px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '5px' }} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>{product.price}</strong></p>
            <Link href={`/products/${product.id}`}>
              <button style={{ padding: '0.5rem 1rem', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}>
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

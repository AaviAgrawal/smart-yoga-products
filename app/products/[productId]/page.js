// app/products/[productId]/page.js
"use client";

import Image from 'next/image';

const products = [
  { id: 1, name: 'Smart Yoga Mat', description: 'A smart mat with sensors.', price: '$99', image: '/product1.jpeg' },
  { id: 2, name: 'Yoga Tracker', description: 'Tracks your yoga sessions and vitals.', price: '$49', image: '/product2.webp' },
  { id: 3, name: 'Smart Yoga Block', description: 'Adjustable yoga block with sensors.', price: '$29', image: '/product3.webp' },
];

export default function ProductPage({ params }) {
  const productId = parseInt(params.productId); // Get productId from params
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{product.name}</h1>
      <Image src={product.image} alt={product.name} width={400} height={400} />
      <p>{product.description}</p>
      <p><strong>{product.price}</strong></p>
      <button>Add to Cart</button>
    </div>
  );
}

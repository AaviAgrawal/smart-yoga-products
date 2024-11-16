// pages/index.js
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <Image
            src="/yoga-hero.avif"
            alt="Smart Yoga Products"
            layout="fill"
            objectFit="cover"
            className={styles.heroImage}
          />
          <div className={styles.heroContent}>
            <h1>Elevate Your Yoga Experience</h1>
            <p className='mb-4'>Discover smart yoga products designed to enhance your practice.</p>
            <Link href="/products" className={styles.shopNowButton}>
              Shop Now
            </Link>

          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefits}>
          <h2 className='mb-8'>Why Buy Our Smart Yoga Products?</h2>
          <div className={styles.benefitItems}>
            <div className={styles.benefitItem}>
              <h3>Advanced Tracking Technology</h3>
              <p>Our products come with built-in sensors to provide real-time insights into your yoga practice, helping you track progress effectively.</p>
            </div>
            <div className={styles.benefitItem}>
              <h3>Premium Quality and Durability</h3>
              <p>Made from high-quality, eco-friendly materials, our products are designed to last, ensuring a sustainable and long-lasting practice experience.</p>
            </div>
            <div className={styles.benefitItem}>
              <h3>Personalized Experience</h3>
              <p>Every product is tailored to meet individual needs, offering customized routines and feedback based on your fitness goals and level.</p>
            </div>
            <div className={styles.benefitItem}>
              <h3>Trusted by Professionals</h3>
              <p>Recommended by yoga experts, our smart products are designed to enhance your practice with professional-grade feedback and insights.</p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

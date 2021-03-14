import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainLayout from '../components/HomeLayout'
import Hero1 from '../components/Hero1'

export default function Home() {
  return (
    <div>
      <MainLayout>
        <Hero1 />
      </MainLayout>

      <footer className={styles.footer}>
        <a
          href="https:vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

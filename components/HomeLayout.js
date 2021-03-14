import Nav from './HorizontalMenu'
import Head from 'next/head'

export default function HomeLayout({ children }) {
    return (
        <>
          <Head>
            <title>Website Ngaji</title>
            <link rel="icon" href="/koran.ico" />
          </Head>
          <Nav />
          {children}
        </>
    )
}

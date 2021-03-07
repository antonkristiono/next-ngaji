import Nav from './HorizontalMenu'

export default function HomeLayout({ children }) {
    return (
        <>
            <Nav />
            {children}
        </>
    )
}
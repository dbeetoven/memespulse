import Link from 'next/link'

export const Footer = ({title}) => {
  return (
    <>
      <footer className="site-foot footer">
        &copy; {new Date().getFullYear()} <Link href="/">Memes Pulse </Link>
        &mdash; Built by{' '}
        <Link href="/">
          <a>@dbeetoven</a>
        </Link>
      </footer>
    </>
  )
}

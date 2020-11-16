import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <>
      <ul>
        <li>
          <Link to={routes.home()}>Home</Link>
        </li>
        <li>
          <Link to={routes.about()}>About</Link>
        </li>
        <li>
          <Link to={routes.contact()}>Contact</Link>
        </li>
      </ul>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout

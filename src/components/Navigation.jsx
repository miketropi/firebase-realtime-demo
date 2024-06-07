import { Link, NavLink } from "react-router-dom";

export default function Navigation() {
  const navItems = [
    {
      name: 'Home',
      to: '/'
    },
    {
      name: 'Contact',
      to: '/contact'
    },
    {
      name: 'My Portfolio',
      to: '/project'
    }
  ]

  return <nav className="site-nav">
    <ul>
      {
        navItems.map((item, __i_index) => {
          const { name, to } = item;
          return <li key={ __i_index }>
            <NavLink to={ to } activeClassName="active">{ name }</NavLink>
          </li>
        })
      }
    </ul>
  </nav>
}
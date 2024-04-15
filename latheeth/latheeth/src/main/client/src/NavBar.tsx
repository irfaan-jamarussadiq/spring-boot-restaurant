type Link = {
    path: string,
    name: string,
}
  
type Props = {
    links: Array<Link>
}

function NavBar({ links }: Props) {
    return (
        <nav className="NavBar">
            <ul className="nav-links">
                {links.map((link: Link) => (
                    <li key={link.path} className="nav-link">
                        <a href={link.path}>{link.name}</a>
                    </li>
                ))}    
            </ul>
        </nav>
    ); 
}

export default NavBar;
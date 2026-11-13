"use client";

// css imports
import '@/css/ui/menu.css'

export function Menu() {
    const links = [
        {id: 1, name: 'About Me', link: '#About'},
        {id: 2, name: 'Skills', link: '#Skills'},
        {id: 3, name: 'Experience', link: '#Experience'},
        {id: 4, name: 'Stats', link: '#Stats'},
        {id: 5, name: 'Projects', link: '#Projects'}
    ]

    // manually hide menu when clicking a menu link
    function hideMenu() {
        document.getElementById('Menu').hidePopover();
    }

    return (
        <>
            <MenuButton target="Menu" />
            <nav className="menu" popover="auto" id="Menu">
                <MenuButton target="Menu" action="hide" />
                <ul>
                    {links.map((item) => (
                        <li key={item.id}>
                            <a className="blk" href={item.link} onClick={hideMenu}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export function MenuButton({ target, action = 'show' }) {
    return (
        <button className="menu-btn" type="button" popoverTarget={target} popoverTargetAction={action}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )    
}
// ui components
import Logo from '@/components/ui/Logo'
import { MenuButton, Menu } from '@/components/ui/Menu'
import Theme from '@/components/ui/Theme'

// css imports
import '@/css/sections/header.css'

function Header() {
    return (
        <header className="header">
            <Logo />
            <Menu />
            <Theme />
        </header>
    )
}

export default Header
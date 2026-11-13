// ui components
import Logo from '@/components/ui/Logo'
import {MenuButton, Menu} from '@/components/ui/Menu'

// css imports
import '@/css/sections/header.css'

function Header() {
    return (
        <header className="header">
            <Logo />
            <Menu />
        </header>
    )
}

export default Header
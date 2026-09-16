function Header({ kicker, title, subtitle, description }) {
    return (
        (kicker || title) &&
        <header>
            {kicker && <small>{kicker}</small>}
            {title && <h2>{title}</h2>}
            {subtitle && <h3>{subtitle}</h3>}
            {description && <p>{description}</p>}
        </header>
    )
}

export default Header
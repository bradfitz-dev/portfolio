function Heading({ className, kicker, title, subtitle, description }) {
    return (
        (kicker || title) &&
        <header className={className}>
            {kicker && <small>{kicker}</small>}
            {title && <h2>{title}</h2>}
            {subtitle && <h3>{subtitle}</h3>}
            {description && <p>{description}</p>}
        </header>
    )
}

export default Heading
function Button({ version = "v1", link, text, target }) {
    return (
        <a href={link} className={`btn ${version}`} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>
            {text}
        </a>
    )
}

export default Button
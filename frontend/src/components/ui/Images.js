export function Img({ src, alt = '', loading = 'lazy', ...rest }) {
    return <img src={src} alt={alt} loading={loading} {...rest} />
}

export function Picture({ children, className, imgClassName, ...imgProps }) {
    return (
        <picture className={className}>
            {children}
            <Img className={imgClassName} {...imgProps} />
        </picture>
    )
}
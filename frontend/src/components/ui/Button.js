// asset imports
import icons from '@/data/icons';

function Button({ version = 'v1', link, text, icon, target, ...btnProps }) {
    const Icon = icons[icon];

    return (
        <a href={link} className={`btn ${version}`} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} {...btnProps}>
            {text}
            {Icon && <Icon aria-hidden="true" />}
        </a>
    )
}

export default Button
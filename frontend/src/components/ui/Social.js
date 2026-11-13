// asset imports
import icons from '@/data/icons';

// css imports
import '@/css/ui/social.css'

function Social({ className = '' }) {
    const socialList = [
        { id: 1, name: 'Mail', link: 'mailto:bradfitz03@gmail.com', icon: 'mail' },
        { id: 2, name: 'LinkedIn', link: 'https://www.linkedin.com/in/brad-fitzgerald-542a26423/', icon: 'linkedin', target: '_blank' },
        { id: 3, name: 'GitHub', link: 'https://github.com/bradfitz-dev', icon: 'git', target: '_blank' }
    ];

    return (
        <ul className={`social flx gp-sm f_wrp ${className}`}>
            {socialList.map((item) => {
                const Icon = icons[item.icon];

                return (
                    <li key={item.id}>
                        <a className="blk" href={item.link} title={item.name} target={item.target}>
                            {Icon && <Icon aria-hidden="true" />}
                        </a>
                    </li>
                );
            })}
        </ul>
    )
}

export default Social
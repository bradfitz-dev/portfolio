// react-icons library imports
import { FaAws, FaReact, FaNodeJs, FaGitAlt, FaWordpressSimple, FaLinkedinIn, FaDatabase } from 'react-icons/fa';
import { FaRegAddressCard } from 'react-icons/fa6';
import { TbBrandNextjs, TbMail, TbDownloadFilled, TbLambda } from 'react-icons/tb';
import { SiGraphql, SiTailwindcss, SiClaude, SiBricks } from 'react-icons/si';
import { RxAccessibility } from 'react-icons/rx';
import { RiCloseLargeLine } from 'react-icons/ri';
import { GoDatabase } from 'react-icons/go';
import { BsBucket } from 'react-icons/bs';

const icons = {
    // general icons
    download: TbDownloadFilled,
    close: RiCloseLargeLine,

    // technologies icons
    aws: FaAws,
    react: FaReact,
    next: TbBrandNextjs,
    node: FaNodeJs,
    git: FaGitAlt,
    graphql: SiGraphql,
    tailwind: SiTailwindcss,
    ada: RxAccessibility,
    claude: SiClaude,
    bricks: SiBricks,
    wordpress: FaWordpressSimple,
    dynamodb: GoDatabase,
    s3: BsBucket,
    lambda: TbLambda,
    iam: FaRegAddressCard,

    // social icons
    mail: TbMail,
    linkedin: FaLinkedinIn
};

export default icons;
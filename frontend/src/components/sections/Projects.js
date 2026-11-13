// ui components
import Heading from '@/components/ui/Heading'
import { Img, Picture } from '@/components/ui/Images'
import Popup from '@/components/ui/Popup'

// css imports
import '@/css/sections/projects.css'

// asset imports
import projectAssets from '@/data/projectAssets';

function Projects() {
    return (
        <section id="Projects" className="projects">
            <div className="mn">
                <Heading title="Past Projects" description="Check out some of my recent work using a variety of technical skills." />
                <ul className="project-grid">
                    <li className="flx">
                        <div className="bx flx f_clm f_t full">
                            <small className="flx f_t f_sb gp-sm fit rlt full">
                                B2B
                                <span className="fit">01</span>
                            </small>
                            <strong className="fnt_t-2 rlt fit">Scorpion</strong>
                            <ul className="flx f_wrp fit">
                                <li className="tag">HTML</li>
                                <li className="tag">CSS</li>
                                <li className="tag">JavaScript</li>
                                <li className="tag">T-SQL</li>
                            </ul>
                            <Picture className="ato str flx" src="/projects/scorpion.jpg" />
                        </div>
                    </li>
                    <li className="flx">
                        <div className="bx flx f_clm f_t full">
                            <small className="flx f_t f_sb gp-sm fit rlt full">
                                Franchise
                                <span className="fit">02</span>
                            </small>
                            <strong className="fnt_t-2 rlt fit">Merry Maids</strong>
                            <ul className="flx f_wrp fit">
                                <li className="tag">HTML</li>
                                <li className="tag">CSS</li>
                                <li className="tag">JavaScript</li>
                                <li className="tag">T-SQL</li>
                            </ul>
                            <Picture className="ato str flx" src="/projects/merrymaids.jpg" />
                        </div>
                    </li>
                    <li className="flx">
                        <div className="bx flx f_clm f_t full">
                            <small className="flx f_t f_sb gp-sm fit rlt full">
                                Legal
                                <span className="fit">03</span>
                            </small>
                            <strong className="fnt_t-2 rlt fit">Arnold & Itkin</strong>
                            <ul className="flx f_wrp fit">
                                <li className="tag">HTML</li>
                                <li className="tag">CSS</li>
                                <li className="tag">JavaScript</li>
                                <li className="tag">T-SQL</li>
                            </ul>
                            <Picture className="ato str flx" src="/projects/arnolditkin.jpg" />
                        </div>
                    </li>
                    <li className="flx">
                        <div className="bx flx f_clm f_t full">
                            <small className="flx f_t f_sb gp-sm fit rlt full">
                                Med Spa
                                <span className="fit">04</span>
                            </small>
                            <strong className="fnt_t-2 rlt fit">Faces of South Tampa</strong>
                            <ul className="flx f_wrp fit">
                                <li className="tag">HTML</li>
                                <li className="tag">Twig</li>
                                <li className="tag">CSS</li>
                                <li className="tag">SASS</li>
                                <li className="tag">JavaScript</li>
                                <li className="tag">GraphQL</li>
                            </ul>
                            <Picture className="ato str flx" src="/projects/facesofsouthtampa.jpg" />
                        </div>
                    </li>
                    <li className="flx">
                        <div className="bx flx f_clm f_t full">
                            <small className="flx f_t f_sb gp-sm fit rlt full">
                                Security
                                <span className="fit">05</span>
                            </small>
                            <strong className="fnt_t-2 rlt fit">Allied Protect</strong>
                            <ul className="flx f_wrp fit">
                                <li className="tag">HTML</li>
                                <li className="tag">CSS</li>
                                <li className="tag">JavaScript</li>
                                <li className="tag">T-SQL</li>
                            </ul>
                            <Picture className="ato str flx" src="/projects/alliedprotect.jpg" />
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Projects
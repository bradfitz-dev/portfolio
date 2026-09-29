// ui components
import Header from '@/components/ui/Header'
import Popup from '@/components/ui/Popup'

// css imports
import '@/css/sections/projects.css'

// asset imports
import projectAssets from '@/data/projectAssets';

function Projects() {
    return (
        <section id="Projects" className="projects">
            <div className="mn">
                <Header kicker="Featured" title="Projects" description="Check out some of my past projects using a variety of technical skills." />
                <ul>
                    <li className="flx">
                        <button className="bx flx f_clm f_t full" type="button" popoverTarget="Scorpion" popoverTargetAction="show">
                            <small className="flx f_t f_sb gp-sm fit rlt full">
                                B2B
                                <span className="fit">01</span>
                            </small>
                            <strong className="fnt_t-2 rlt fit">Scorpion</strong>
                            <ul className="flx f_wrp gp-sm fit">
                                <li className="tag">HTML</li>
                                <li className="tag">CSS</li>
                                <li className="tag">JavaScript</li>
                                <li className="tag">T-SQL</li>
                            </ul>
                            <picture className="ato str">
                                <img src="/projects/scorpion.jpg" alt="" loading="lazy"></img>
                            </picture>
                        </button>
                        <Popup id="Scorpion">
                            Scorpion
                        </Popup>
                    </li>
                    <li className="flx">
                        <button className="bx flx f_clm f_t full" type="button" popoverTarget="Arnold & Itkin" popoverTargetAction="show">
                            <small className="flx f_t f_sb gp-sm fit rlt full">
                                Legal
                                <span className="fit">02</span>
                            </small>
                            <strong className="fnt_t-2 rlt fit">Arnold & Itkin</strong>
                            <ul className="flx f_wrp gp-sm fit">
                                <li className="tag">HTML</li>
                                <li className="tag">CSS</li>
                                <li className="tag">JavaScript</li>
                                <li className="tag">T-SQL</li>
                            </ul>
                            <picture className="ato str">
                                <img src="/projects/arnolditkin.jpg" alt="" loading="lazy"></img>
                            </picture>
                        </button>
                        <Popup id="Arnold & Itkin">
                            Arnold & Itkin
                        </Popup>
                    </li>
                    <li className="flx">
                        <button className="bx flx f_clm f_t full" type="button" popoverTarget="Merry Maids" popoverTargetAction="show">
                            <small className="flx f_t f_sb gp-sm fit rlt full">
                                Franchise
                                <span className="fit">03</span>
                            </small>
                            <strong className="fnt_t-2 rlt fit">Merry Maids</strong>
                            <ul className="flx f_wrp gp-sm fit">
                                <li className="tag">HTML</li>
                                <li className="tag">CSS</li>
                                <li className="tag">JavaScript</li>
                                <li className="tag">T-SQL</li>
                            </ul>
                            <picture className="ato str">
                                <img src="/projects/merrymaids.jpg" alt="" loading="lazy"></img>
                            </picture>
                        </button>
                        <Popup id="Merry Maids">
                            Merry Maids
                        </Popup>
                    </li>
                    <li className="flx">
                        <button className="bx flx f_clm f_t full" type="button" popoverTarget="Allied Protect" popoverTargetAction="show">
                            <small className="flx f_t f_sb gp-sm fit rlt full">
                                Security
                                <span className="fit">04</span>
                            </small>
                            <strong className="fnt_t-2 rlt fit">Allied Protect</strong>
                            <ul className="flx f_wrp gp-sm fit">
                                <li className="tag">HTML</li>
                                <li className="tag">CSS</li>
                                <li className="tag">JavaScript</li>
                                <li className="tag">T-SQL</li>
                            </ul>
                            <picture className="ato str">
                                <img src="/projects/alliedprotect.jpg" alt="" loading="lazy"></img>
                            </picture>
                        </button>
                        <Popup id="Allied Protect">
                            Allied Protect
                        </Popup>
                    </li>
                    <li className="flx">
                        <button className="bx flx f_clm f_t full" type="button" popoverTarget="Faces of South Tampa" popoverTargetAction="show">
                            <small className="flx f_t f_sb gp-sm fit rlt full">
                                Med Spa
                                <span className="fit">05</span>
                            </small>
                            <strong className="fnt_t-2 rlt fit">Faces of South Tampa</strong>
                            <ul className="flx f_wrp gp-sm fit">
                                <li className="tag">HTML</li>
                                <li className="tag">Twig</li>
                                <li className="tag">CSS</li>
                                <li className="tag">SASS</li>
                                <li className="tag">JavaScript</li>
                                <li className="tag">GraphQL</li>
                            </ul>
                            <picture className="ato str">
                                <img src="/projects/facesofsouthtampa.jpg" alt="" loading="lazy"></img>
                            </picture>
                        </button>
                        <Popup id="Faces of South Tampa">
                            Faces of South Tampa
                        </Popup>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Projects
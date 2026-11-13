// ui components
import Heading from '@/components/ui/Heading'
import Button from '@/components/ui/Button'

// css imports
import '@/css/sections/stats.css'

function Stats() {
    return (
        <section id="Stats" className="stats">
            <div className="mn">
                <Heading 
                    kicker="Stats" 
                    title={<><strong>Notable Accomplishments</strong></>} 
                    description={<>Overall milestones that have molded <em>my succes</em> while shaping my future.</>} 
                />
                <div className="stat-list">
                    <ul className="flx gp f_t f_wrp">
                        <li className="half">
                            <strong className="fnt_t-2">5</strong> CMS projects and frameworks
                        </li>
                        <li className="half">
                            <strong className="fnt_t-2">400+</strong> Web projects developed
                        </li>
                        <li className="half">
                            <strong className="fnt_t-2">500+</strong> Shared components / tools built
                        </li>
                        <li className="half">
                            <strong className="fnt_t-2">65+</strong> Web awards won
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Stats
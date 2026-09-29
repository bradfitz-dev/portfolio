// ui components
import Header from '@/components/ui/Header'
import Button from '@/components/ui/Button'

// css imports
import '@/css/sections/about.css'

function About() {
    return (
        <section id="About" className="about">
            <div className="mn">
                <Header 
                    kicker="About" 
                    title={<><strong>Lorem Ipsum</strong></>} 
                    description={<>Vestibulum <em>gravida</em>, justo eget laoreet elementum, lacus dui blandit libero, non fermentum tellus sapien eu ipsum.</>} 
                />
                <div className="values">
                    <ul className="grd mx-4 gp">
                        <li>
                            <strong className="blk">65+</strong> Web awards won
                        </li>
                        <li>
                            <strong className="blk">65+</strong> Web awards won
                        </li>
                        <li>
                            <strong className="blk">65+</strong> Web awards won
                        </li>
                        <li>
                            <strong className="blk">65+</strong> Web awards won
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About
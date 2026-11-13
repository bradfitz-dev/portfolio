// ui components
import { Img, Picture } from '@/components/ui/Images'

// css imports
import '@/css/sections/hero.css'

function Hero() {
    return (
        <section id="Hero" className="hero flx f_m">
            <figure className="bg">
                <Picture className="bg" src="/mainstage/background.png" role="presentation" />
                <Picture className="bg" src="/mainstage/foreground.png" role="presentation" />
            </figure>
            <div className="mn gp">
                <h1>
                    Brad 
                    <strong>FitzGerald</strong>
                </h1>
                <h2>Full-Stack Developer</h2>
                <p>I build a variety of things on the internet with a high level of speed and quality!</p>
                <span className="blk">
                    <strong className="blk">13+</strong> 
                    years of experience.
                </span>
            </div>
            <Picture src="/mainstage/mainstage-img.png" role="presentation" />
        </section>
    )
}

export default Hero
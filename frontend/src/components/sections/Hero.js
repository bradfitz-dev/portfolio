import Image from "next/image";

// css imports
import '@/css/sections/hero.css'

function Hero() {
    return (
        <section id="Hero" className="hero">
            <picture className="bg"></picture>
            <div className="mn flx f_m">
                <div className="info fourth">
                    <h1>
                        Brad 
                        <strong>FitzGerald</strong>
                    </h1>
                    <h2>Full-Stack Developer</h2>
                </div>
                <div className="value ato rlt">
                    <p className="fnt_t-2">I build a variety of things on the internet!</p>
                    <span className="blk">
                        <strong className="blk">14+</strong> 
                        years of experience.
                    </span>
                </div>
                <picture className="fit rlt str">
                    <img src="https://static.vecteezy.com/system/resources/previews/024/558/262/non_2x/businessman-isolated-illustration-ai-generative-free-png.png" alt="" role="presentation" loading="lazy"></img>
                </picture>
            </div>
        </section>
    )
}

export default Hero
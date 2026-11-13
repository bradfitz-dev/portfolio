// ui components
import Heading from '@/components/ui/Heading'
import Button from '@/components/ui/Button'

// css imports
import '@/css/sections/about.css'

function About() {
    return (
        <section id="About" className="about">
            <div className="mn">
                <Heading 
                    kicker="About Me" 
                    title={<><strong>Hey, I'm Brad</strong></>} 
                    description={<>I pride myself on building various products with <em>clean code</em> while producing <em>high quality</em> and <em>scalable</em> solutions.</>} 
                />
                <div className="content">
                    <p>
                        I'm a developer with 13 years of experience building solutions that are fast, scalable, and polished, without trading away quality. 
                        My range runs from small APIs to high-value products to company-wide frameworks, and a design background gives me a strong eye for how things should look as well as how they should work.
                    </p>
                    <p>
                        I've built a reputation as a fast developer, and that comes with real expectations. 
                        Tight turnarounds, high-pressure deadlines, and several projects running at once have been routine, and they've sharpened my prioritization, multitasking, and time management.
                    </p>
                    <p>
                        I'm a natural team player and do my best work alongside people who care about craft and want to push things further. 
                        I bring curiosity, drive, and a habit of looking for innovative approaches, and I'm confident that combination can take a project well beyond expectations.
                    </p>
                    <Button link="/resume.pdf" text="Resume" icon="download" download />
                </div>
            </div>
        </section>
    )
}

export default About
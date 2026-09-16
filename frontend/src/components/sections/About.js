import Header from '@/components/ui/Header'
import Button from "@/components/ui/Button";

function About() {
    return (
        <section id="About" className="about">
            <div className="main">
                <Header kicker="About Me" title="Building Digital Experiences" />
                <Button text="Learn More" link="/" />
            </div>
        </section>
    )
}

export default About
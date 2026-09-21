"use client";
import { useState, useEffect } from 'react';
import { getExperience } from '@/lib/api'

// ui components
import Header from '@/components/ui/Header'
import Button from '@/components/ui/Button'

function formatDate(value) {
    if (value === 'present') return 'Present';
    const [year, month] = value.split('-');
    const date = new Date(year, month - 1);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

function ExperienceList() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function loadData(fetchName, setState, errorLabel) {
            try {
                const data = await fetchName();
                setState(data);
            } catch (err) {
                console.error(`Failed to fetch ${errorLabel}:`, err);
            }
        }

        loadData(getExperience, setJobs, 'experience');
    }, []);

    const groups = [];

    jobs.forEach((job) => {
        const lastGroup = groups[groups.length - 1];

        if (lastGroup && lastGroup.employer === job.employer) {
            lastGroup.positions.push(job);
        } else {
            groups.push({ employer: job.employer, positions: [job] });
        }
    });

    return (
        <ol>
            {groups.map((group, groupIndex) => (
                <li key={`${group.employer}-${groupIndex}`}>
                    <strong>{group.employer}</strong>
                    <ol>
                        {group.positions.map((position) => (
                            <li key={position.title + position.startDate}>
                                {position.title}
                                <time>{formatDate(position.startDate)} - {formatDate(position.endDate)}</time>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}

function About() {
    return (
        <section id="About" className="about">
            <div className="mn">
                <Header kicker="About Me" title="Full-Stack Developer" />
                <div className="flx-at-1000 f_m gp-gtr">
                    <div className="half">
                        <h3 className="kicker">Experience</h3>
                        <ExperienceList />
                    </div>
                    <div className="half">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum ante sit amet velit convallis, nec tristique elit imperdiet. Quisque egestas lectus cursus, semper nulla quis, accumsan justo. Integer imperdiet, mauris in ultrices congue, tellus augue lobortis ante, quis porta arcu felis ac elit. Cras dictum ipsum ut enim ultrices, a tristique dui blandit. Fusce eu pulvinar dolor, quis dapibus purus. Donec rhoncus convallis metus sit amet imperdiet. Nulla consectetur purus ipsum, eu bibendum odio hendrerit ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus nec mauris eget massa faucibus accumsan. Vestibulum gravida, justo eget laoreet elementum, lacus dui blandit libero, non fermentum tellus sapien eu ipsum.</p>
                        <Button text="Learn More" link="/" />
                    </div>
                </div>
            </div>
        </section>
    )
}

const Jobs = [
    { employer: 'Scorpion', title: 'Enterprise Lead Developer', interval: 'October 2026 - Present' },
    { employer: 'Studio3 Marketing', title: 'Senior Front-End Developer', interval: 'November 2025 - July 2026' },
    { employer: 'Scorpion', title: 'Senior Product Developer', interval: 'August 2023 - November 2025' },
    { employer: 'Scorpion', title: 'Senior Front-End Developer', interval: 'June 2016 - August 2023' },
    { employer: 'Scorpion', title: 'Lead Developer', interval: 'December 2015 - June 2016' },
    { employer: 'Scorpion', title: 'Front-End Web Developer', interval: 'September 2014 - December 2015' },
    { employer: 'Scorpion', title: 'Front-End Developer', interval: 'July 2013 - September 2014' }
]

export default About
"use client";
import { useState, useEffect } from 'react';
import { getExperience } from '@/lib/api'

// ui components
import Header from '@/components/ui/Header'
import Button from '@/components/ui/Button'

// css imports
import '@/css/sections/experience.css'

// asset imports
import companyLogos from '@/data/companyLogos';

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

    const sortedJobs = [...jobs].sort((a, b) =>
        b.startDate.localeCompare(a.startDate)
    );

    const groups = [];

    sortedJobs.forEach((job) => {
        const lastGroup = groups[groups.length - 1];

        if (lastGroup && lastGroup.employer === job.employer) {
            lastGroup.positions.push(job);
        } else {
            groups.push({ employer: job.employer, positions: [job] });
        }
    });

    return (
        <ol className="job-history">
            {groups.map((group, groupIndex) => (
                <li className="flx f_t gp-lg" key={`${group.employer}-${groupIndex}`}>
                    <h3 className="fnt_t-2 third">{group.employer}</h3>
                    <ol className="ato">
                        {group.positions.map((position) => (
                            <li key={position.title + position.startDate}>
                                <strong className="fnt_t-3">{position.title}</strong>
                                <time className="blk">{formatDate(position.startDate)} - {formatDate(position.endDate)}</time>
                            </li>
                        ))}
                    </ol>
                    <picture className="two-fifths fit">
                        <img
                            src={companyLogos[group.employer]}
                            className="half"
                            alt={`${group.employer} logo`}
                            loading="lazy"
                        />
                    </picture>
                </li>
            ))}
        </ol>
    )
}

function Experience() {
    return (
        <section id="Experience" className="experience">
            <div className="mn">
                <Header 
                    kicker="Roadmap"
                    title={<><strong>Past Experiences</strong></>} 
                    description={<>Checkout the timeline of what <em>made me</em>, me.</>} 
                />
                <ExperienceList />
            </div>
        </section>
    )
}

export default Experience
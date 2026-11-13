"use client";
import { useState, useEffect } from 'react';
import { getSkills, getTechs } from '@/lib/api'

// ui components
import Heading from '@/components/ui/Heading'

// asset imports
import icons from '@/data/icons';

// css imports
import '@/css/sections/skills.css'

function Skills() {
    const [skillList, setSkillList] = useState([]);
    const [techList, setTechList] = useState([]);

    useEffect(() => {
        async function loadData(fetchName, setState, errorLabel) {
            try {
                const data = await fetchName();
                setState(data);
            } catch (err) {
                console.error(`Failed to fetch ${errorLabel}:`, err);
            }
        }

        loadData(getSkills, setSkillList, 'skills');
        loadData(getTechs, setTechList, 'technologies');
    }, []);

    return (
        <section id="Skills" className="skills">
            <div className="mn">
                <Heading kicker="Expertise" title="Skills & Technologies" />
                <div className="flx-at-1280 f_t gp-gtr">
                    <ul className="skill-list two-fifths">
                        {skillList.map((skill) => (
                            <li className="flx f_t gp-sm" key={skill.id}>
                                <div className="ato">
                                    {skill.name}
                                    <span className="progress-bar blk" data-progress={skill.level}></span>
                                </div>
                                <em className="fit">{skill.level}<sup>%</sup></em>
                            </li>
                        ))}
                    </ul>
                    <ul className="tech-list three-fifths gp-sm">
                        {techList.map((tech) => {
                            const Icon = icons[tech.icon];
                            return (
                                <li className="bx flx f_clm f_m f_c" key={tech.id}>
                                    {Icon && <Icon aria-hidden="true" />}
                                    {tech.name}
                                </li>
                            );
                        })}             
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skills
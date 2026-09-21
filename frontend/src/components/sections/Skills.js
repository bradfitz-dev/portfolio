"use client";
import { useState, useEffect } from 'react';
import { getSkills, getTechs } from '@/lib/api'

// ui components
import Header from '@/components/ui/Header'

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
                <Header kicker="Expertise" title="Skills & Technologies" />
                <div className="flx f_t gp-gtr">
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
                    <ul className="tech-list three-fifths grd mx-7 gp-sm">
                        {techList.map((tech) => (
                            <li className="bx flx f_clm f_m f_c" key={tech.id}>
                                {tech.name}
                            </li>
                        ))}                        
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skills
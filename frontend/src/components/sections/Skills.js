"use client";
import { useState, useEffect } from 'react';
import Header from '@/components/ui/Header'
import '@/css/modules/skills.css'

function Skills() {
    const BASE_URL = "https://1bocmls39h.execute-api.us-east-1.amazonaws.com/api";
    const [skillList, setSkillList] = useState([]);
    const [techList, setTechList] = useState([]);

    useEffect(() => {
        async function fetchData(ext, setState, errorLabel) {
            try {
                const res = await fetch(`${BASE_URL}${ext}`);
                const data = await res.json();
                setState(data);
            } catch (err) {
                console.error(`Failed to fetch ${errorLabel}:`, err);
            }
        }

        fetchData('/skills', setSkillList, 'skills');
        fetchData('/techs', setTechList, 'technologies');
    }, []);

    return (
        <section id="Skills" className="skills">
            <div className="main">
                <Header kicker="Expertise" title="Skills & Technologies" />
                <div className="flx f_t gp">
                    <ul className="skill-list two-fifths">
                        {skillList.map((skill) => (
                            <li key={skill.id}>
                                {skill.name} - {skill.level}%
                            </li>
                        ))}
                    </ul>
                    <ul className="tech-list three-fifths grd mx-6 gp-sm">
                        {techList.map((tech) => (
                            <li className="bx" key={tech.id}>
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
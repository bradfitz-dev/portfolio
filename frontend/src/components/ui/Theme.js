"use client";
import { useState, useEffect } from 'react';

// asset import
import icons from '@/data/icons';

// css imports
import '@/css/ui/theme.css'

const themeTypes = [
    { id: 1, value: 'system', name: 'system', icon: 'monitor' },
    { id: 2, value: 'light', name: 'light', icon: 'sun' },
    { id: 3, value: 'dark', name: 'dark', icon: 'moon' }
]

function applyTheme(value) {
    const root = document.documentElement;

    if (value === 'system') {
        root.removeAttribute('data-theme');
    } else {
        root.setAttribute('data-theme', value)
    }
}

function Theme() {
    const [theme, setTheme] = useState('system');

    useEffect(() => {
        try {
            const saved = localStorage.getItem('theme');
            if (saved === 'light' || saved === 'dark' ) setTheme(saved);
        } catch {}
    }, []);

    function themeChange(value) {
        setTheme(value);
        applyTheme(value);
        try {
            localStorage.setItem('theme', value);
        } catch {}
    }

    return (
        <ul className="theme flx">
            {themeTypes.map((type) => {
                const Icon = icons[type.icon];

                return (
                    <li key={type.id}>
                        <label className="flx f_m f_c" htmlFor={type.value}>
                            {Icon && <Icon aria-hidden="true" />}
                        </label>
                        <input type="radio" name="theme" value={type.value} checked={theme === type.value} onChange={() => themeChange(type.value)} />
                    </li>
                )
            })}
        </ul>
    )

}

export default Theme
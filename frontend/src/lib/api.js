const BASE_URL = "https://1bocmls39h.execute-api.us-east-1.amazonaws.com/api";

async function fetchFromApi(extension) {
    const res = await fetch(`${BASE_URL}${extension}`);
    if (!res.ok) {
        throw new Error(`Request to ${extension} failed`);
    }
    return res.json();
}

export function getSkills() {
    return fetchFromApi('/skills');
}

export function getTechs() {
    return fetchFromApi('/techs');
}

export function getExperience() {
    return fetchFromApi('/experience');
}
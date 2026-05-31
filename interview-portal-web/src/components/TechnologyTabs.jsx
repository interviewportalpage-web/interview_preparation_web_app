import { NavLink } from "react-router-dom";

const technologies = [
    "react",
    "angular",
    "nodejs",
    "sql",
    "mongodb",
    "dotnetcore"
];

export default function TechnologyTabs() {
    return (
        <div className="tabs">
            {technologies.map((tech) => (
                <NavLink
                    key={tech}
                    to={`/technology/${tech}`}
                    className="tab"
                >
                    {tech.toUpperCase()}
                </NavLink>
            ))}
        </div>
    );
}
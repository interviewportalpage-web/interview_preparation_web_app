import { NavLink } from "react-router-dom";

const technologies = [
    "reactjs",
    "angularjs",
    "nodejs",
    "sql",
    "mongodb",
    "dotnet core"
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
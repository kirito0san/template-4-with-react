import { Link } from "react-router-dom";
import "./index.css"
import { useState } from "react";

const Aside = () => {
    let asides = [{
        name: `dashboard`,
        icon: `fa-regular fa-rectangle-list`
    }
        , {
        name: `settings`,
        icon: 'fa-solid fa-gear'
    }
        , {
        name: `profile`,
        icon: 'fa-regular fa-user'
    }
        , {
        name: `projects`,
        icon: 'fa-solid fa-diagram-project'
    }
        , {
        name: `courses`,
        icon: 'fa-solid fa-graduation-cap'
    }
        , {
        name: `friends`,
        icon: 'fa-solid fa-user-group'
    }
        , {
        name: `files`,
        icon: 'fa-regular fa-file'
    }
        , {
        name: `plans`,
        icon: 'fa-regular fa-credit-card'
    }

    ]
    let [active, setactive] = useState(``)

    return (
        <aside className="p-[30px] mx-auto">
            <h2>elzero</h2>
            {asides.map((e) => (
                <Link className={e.name === active ? "choose" : ``} key={e.name} onClick={() => {
                    setactive(e.name)
                    console.log(active)
                }
                } to={e.name}>
                    <i className={e.icon}></i>
                    <p>{e.name}</p>
                </Link>
            ))}

        </aside>
    );
}

export default Aside;





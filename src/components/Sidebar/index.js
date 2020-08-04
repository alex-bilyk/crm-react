import React from 'react'

import {
    Link
} from 'react-router-dom'

import FeatherIcon from 'feather-icons-react'

function Sidebar ({ routes }) {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="sidebar-sticky pt-3">
                <ul className="nav flex-column">
                    {routes.map((route, index) => (
                        <li
                            className="nav-item"
                            key={index}
                        >
                            <FeatherIcon icon={route.icon} />
                            <Link to={route.path}>{route.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar
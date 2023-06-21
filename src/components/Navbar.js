import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>

                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>

                            </li>

                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>

                        <form className="d-flex" role="search">
                            <div className={`form-check form-switch text-${props.mode === "dark"?"light":"dark"}`}>
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick = {props.toggleMode} />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode === "light" ? "dark" : "light"} Mode`}</label>
                            </div>

                        </form>

                    </div>
                </div>
            </nav>
        </div>
    )
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,            // .isRequired is used to specify that the prop must be supplied with a value, atleast by defaultProps.
    about: PropTypes.string,
}

Navbar.defaultProps = {
    title: "Title",
    about: "About"
}
import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import H6 from '@material-tailwind/react/Heading6';

function Sidebar() {
    const [showSidebar, setShowSidebar] = useState('-left-64');
    return (
        <>
            <div
                className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-3xl bg-pur w-64 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 text-center w-full inline-block"
                    >
                        <H6 color="white">SecurePe</H6>
                    </a>
                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />

                        <ul className="flex-col min-w-full flex list-none">
                            <li className="rounded-lg mb-4">
                                <NavLink
                                    to="/dashboard"
                                    exact
                                    className="flex items-center gap-4 text-sm text-white font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-purple-500 to-purple-700 text-white shadow-md"
                                >
                                    Personalised Dashboard
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/motorform"
                                    className="flex items-center gap-4 text-sm text-white font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-purple-500 to-purple-700  text-white shadow-md"
                                >
                                    Motor
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 ">
                                <NavLink
                                    to="/healthform"
                                    className="flex items-center gap-4 text-sm text-white font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-purple-500 to-purple-700  text-white shadow-md"
                                >
                                    Health
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/cardview"
                                    className="flex items-center gap-4 text-sm text-white font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-purple-500 to-purple-700  text-white shadow-md"
                                >
                                    View Claims
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Sidebar;
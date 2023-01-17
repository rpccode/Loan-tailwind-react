import React from 'react'
import { Navbar } from './components/Navbar'

export const Layout = ({ children }) => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col">

                <Navbar />


                <div className="md:container md:mx-auto">
                    {children}
                </div>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>

                </ul>

            </div>

        </div>
    )
}

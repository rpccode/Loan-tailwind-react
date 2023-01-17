import React from 'react'
import { Link } from 'react-router-dom'

const navigation = [
    { name: 'Product', href: '/clientes' },
    { name: 'Features', href: '/prestamos' },
    { name: 'Marketplace', href: '/presupuesto' },
    { name: 'Company', href: '#' },
]


export const Navbar = () => {
    return (
        <>
            {/* <!-- Navbar --> */}
            <div className="w-full navbar bg-base-300">
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
                <div className="flex-1 px-2 mx-2 text-primary">Prestamos RPC-CODE</div>
                <div className="flex-none hidden lg:block">
                    <ul className="menu menu-horizontal ">
                        {/* <!-- Navbar menu content here --> */}
                        {navigation.map((item) => (
                            <li > <Link
                                key={item.name}
                                to={item.href}
                            >
                                {item.name}
                            </Link></li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* <!-- Page content here --> */}

        </>
    )
}

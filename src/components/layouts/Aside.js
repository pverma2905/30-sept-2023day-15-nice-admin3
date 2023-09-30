import React from 'react'
import Link from 'next/link'

export default function Aside() {
    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <Link className="nav-link " href="/admin/dashboard">
                        <i className="bi bi-grid" />
                        <span>Dashboard</span>
                    </Link>
                </li>{/* End Dashboard Nav */}
                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                        <i className="bi bi-menu-button-wide" /><span>Purchase</span><i className="bi bi-chevron-down ms-auto" />
                    </a>
                    <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <a href="/admin/purchase-start">
                                <i className="bi bi-circle" /><span>Purchase Start</span>
                            </a>
                        </li>
                        <li>
                            <a href="/admin/purchase-processing">
                                <i className="bi bi-circle" /><span>Purchase Processing</span>
                            </a>
                        </li>
                        <li>
                            <a href="/admin/purchase-completed">
                                <i className="bi bi-circle" /><span>Purchase Completed</span>
                            </a>
                        </li>

                    </ul>
                </li>{/* End Components Nav */}


            </ul>
        </aside>
    )
}

'use client';
import React from 'react'
import { usePathname } from 'next/navigation';
export default function Breadcrum() {
    const currentPage = usePathname();
    // console.log(currentPage.split('/').pop())
    const title1 = currentPage.split('/')[1]
    const title2 = currentPage.split('/')[2]
    return (
        <div className="pagetitle">
            <h1>Dashboard</h1>
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">{title1}</a></li>
                    <li className="breadcrumb-item active">{title2}</li>
                </ol>
            </nav>
        </div>
    )
}

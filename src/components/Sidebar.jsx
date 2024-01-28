import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

function Sidebar() {
    const { activeMenu, setActiveMenu, screenSize } = useStateContext();
    const activeLink = 'flex items-center gap-5 m-2 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md';
    const normalLink = 'flex items-center gap-5 m-2 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray text-md';

    const handleCloseSideBar = () => {
        if (activeMenu && screenSize <= 900) {
            setActiveMenu(false)
        }
    }

    return (
        <div className='ml-3 pb-10 h-screen overflow-auto md:overflow-hidden md:hover:overflow-auto'>
            {activeMenu && (
                <>
                    <div className='flex justify-between items-center'>
                        <Link to='/' onClick={handleCloseSideBar} className='flex items-center gap-3 ml-3 mt-4 text-lg font-bold tracking-tight dark:text-white text-slate-900'><SiShopware /> Shoopy</Link>
                        <TooltipComponent content='Menu' position='BottomCenter'>
                            <button type='button' onClick={() => { setActiveMenu((prevActiveMenu) => !prevActiveMenu) }} className='p-3 mt-4 block text-xl rounded-full hover:bg-light-gray md:hidden'><MdOutlineCancel /></button>
                        </TooltipComponent>
                    </div>
                    <div className='mt-10'>
                        {
                            links.map((i) => (
                                <div key={i.title} >
                                    <p className='m-3 mt-4 tex-gray-400 uppercase'>
                                        {i.title}
                                    </p>
                                    {i.links.map((link) => (
                                        <NavLink to={`/${link.name}`} key={link.name} onClick={handleCloseSideBar}
                                            className={({ isActive }) =>
                                                isActive ? activeLink : normalLink
                                            }>
                                            {link.icon}
                                            <span className='capitalize'>{link.name}</span>
                                        </NavLink>
                                    ))}
                                </div>
                            ))
                        }
                    </div>
                </>)}
        </div>
    )
}

export default Sidebar
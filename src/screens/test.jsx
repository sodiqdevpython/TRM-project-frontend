import React from 'react'

import Search from '../components/search'
import LanguageSelect from '../components/languageSelect'
import NotificationsDropdown from '../components/notificationsDropdown'
import SidebarItem from '../components/sidebarItem'
import UserDropdown from '../components/userDropdown'
import SimpleCard from '../components/simpleCard'

export default function Test() {
    return (
        <div className='p-20 bg-slate-500'>
            <Search />
            <LanguageSelect />
            <NotificationsDropdown />
            <div className='w-64'>
                <SidebarItem text={'home'} isActive={true} />
                <UserDropdown />
            </div>
            <SimpleCard />

        </div>
    )
}

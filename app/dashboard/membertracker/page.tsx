"use client"
/* use client */
import React, { useState } from 'react';
import Navside from '@/components/Navside';
import Editname from '@/components/Editname';
import Container from '@/components/Container';
import { Heading } from '@/components';
import {CustomButton} from '@/components';
import {InputElement} from '@/components'
import {ContactInput} from '@/components';
import {Member} from '@/components'
import { Members } from '@/constants';



export default function Home() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [editClick, setEditClick] = useState(false);
  const toggleEdit = () => {
    setEditClick(!editClick);
  };
  const [botName, setBotName] = useState('');

  const handleBotName = (value: React.SetStateAction<string>) => {
    setBotName(value);

  };
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
    console.log("adi")
  };

  return (
    <main className=' flex flex-row h-screen w-full'>
      <Navside editClick={toggleEdit} botName={botName} active='Member Tracker' toggle={toggleMenu}/>
      {editClick && <Editname editClick={toggleEdit} setBotName={handleBotName} />}
      <Container menuClick={toggleNav} active={toggleMenu}>
        <Heading icon='/whitemembertracker.svg' title='Members' description='View your server members'/>
        <div className='w-full flex flex-col  mt-6'>
        <div className='flex justify-between w-full max-sm:flex-col items-center'>
            <h1 className='font-bold text-lg '>Members</h1>
            <form action="" className='w-60'>
              <ContactInput icon='/search.svg' type='text' name='commandsearch' placeholder='Search' Width='72'/>
            </form>
          </div>
          <form action="">
            <CustomButton title='Export as CVV' btnType='submit' containerStyles='mt-5 max-sm:w-full' />
          </form>
          <div className='flex w-full flex-col overflow-x-scroll '>
          <div className='flex w-full flex-col min-w-[700px]'>
            <div className='w-full border-b flex mt-10 border-gray-200 py-3 '>
                <div className='w-4/12 pl-4'>
                    <h1 className='text-indigo-600 uppercase font-medium text-sm'>NAME</h1>
                </div>
                <div className='w-6/12 pl-4'>
                    <h1 className='text-indigo-600 uppercase font-medium text-sm'>ROLES</h1>
                </div>
                <div className='w-2/12 pl-4 '>
                    <h1 className='text-indigo-600 uppercase font-medium text-sm'>Joined at</h1>
                </div>
            </div>


          <div className='w-full flex flex-col '>
            {Members.map((member) => (
                <Member image={member.profile} roles={member.roles} date={member.date} name={member.name}/>
            ))}
          </div>
          </div>
            
          </div>
         </div> 
        
      </Container>
    </main>
  );
}


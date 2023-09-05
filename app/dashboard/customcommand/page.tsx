"use client"
import React, { useState } from 'react';
import Navside from '@/components/Navside';
import Editname from '@/components/Editname';



export default function Home() {
  return (
    <main className='bg-gray-400 flex flex-row min-h-full w-full'>
      <Navside/>
      <Editname/>
    </main>
  );
}

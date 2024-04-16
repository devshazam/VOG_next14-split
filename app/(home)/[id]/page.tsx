// "use client"
import React from 'react';
import {
Flex
} from 'antd';

import Calc from '../ui/Calc';
import Cards from '../ui/Cards';

// Config: 

export function generateStaticParams() {
  return [{ id: 'rss' }, { id: 'vgr' }, { id: 'vgv' }, { id: 'vgd' }, { id: 'vgm' }, { id: 'vgd' }, { id: 'vgr' }, { id: 'rsa' }, { id: 'rsm' }, { id: 'vge' }, { id: 'vgs' }]
}



export default function Item({ params }: { params: { id: string } }) {
  const id = params.id || '';

  return (

        <>
            <div id='map'>
              <Flex vertical gap={24} className="">
                  <img src={`/map/${id.toLowerCase()}.jpg`} alt='map' className='rounded-xl hidden md:block'/>
                  <img src={`/map/${id.toLowerCase()}2.jpg`} alt='map' className='rounded-xl md:hidden'/>
    
              </Flex>
            </div>

            <Calc id={id}/>

            <Cards />
         
        </>
  );
}

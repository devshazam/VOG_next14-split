"use client"
import React from 'react';
import {
Flex
} from 'antd';

import Calc from './ui/Calc';
import Cards from './ui/Cards';
import CustomCarousel from "./ui/CustomCarousel"
import Script from 'next/script';

export default function Home() {


  return (

        <>
        <CustomCarousel/>
            <Calc />

            <Cards />

            <div id='map'>
            <Flex vertical gap={24} className="mt-8">

                <div id="mymap"></div>

        <Script type="text/javascript" charSet="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A1c0e2882a77ef4f5b918be307930c1a2563d1705183455a9c32a7d244815023d&amp;width=100%25&amp;height=500&amp;id=mymap&amp;lang=ru_RU&amp;scroll=true"></Script>
  
            </Flex>
            </div>

         
        </>
  );
}

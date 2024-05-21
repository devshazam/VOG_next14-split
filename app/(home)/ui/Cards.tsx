"use client"
import React from 'react';
import {
  Row, Col, Flex
} from 'antd';
import { Card, Badge,} from 'antd';
import Image from 'next/image';
const { Meta } = Card;

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';



export default function Home() {
  return (
        <>
            <div id='tarif'>
            <Row gutter={[12, 12]}>

                    <Col  span={24} md={8} >
                        {/* <Link href={`/discounts/${item?.id}`}> */}
                            {/* <Badge.Ribbon color="red" text={`Скидка 5%`}> */}
                                <Card hoverable cover={<img alt="example" src="/2da230d57f6c7e104175462c2a40a1e9.jpg" />} >
                                    <Meta title='Чистка и ремонт' description='Очистка паром, мойка под давлением!' />
                                    <ButtonElements/>
                                </Card>
                            {/* </Badge.Ribbon> */}
                        {/* </Link> */}
                    </Col>
                    <Col  span={24} md={8} >
                        {/* <Link href={`/discounts/${item?.id}`}> */}
                            <Badge.Ribbon color="red" text={`Скидка 3%`}>
                                <Card hoverable cover={<img alt="example" src="/zapravka-bytovyh-kondicionerov.jpg" />} >
                                    <Meta title='Замена фреона' description='Заправка фреоном под давлением!'/>
                                    <ButtonElements/>
                                  
                                </Card>
                            </Badge.Ribbon>
                        {/* </Link> */}
                    </Col>
                    <Col  span={24} md={8} >
                        {/* <Link href={`/discounts/${item?.id}`}> */}
                            <Badge.Ribbon color="red" text={`Скидка 8%`}>
                                <Card hoverable cover={<img alt="example" src="/shutterstock767932195.jpg" />} >
                                    <Meta title='Установка кондиционера' description='Установка всех типов кондиционеров!' />
                                    <ButtonElements/>
                                    
                                </Card>
                            </Badge.Ribbon>
                        {/* </Link> */}
                    </Col>
            </Row>
            </div>
         
        </>
  );
}

function ButtonElements() {
  return(
    <div className='w-full text-center mt-3'>
    <ButtonGroup variant="contained" aria-label="Basic button group" className=' mx-auto'>
      <Button > 
        <a title={"Telegramm"} href={"https://t.me/+79377283649"} target="_blank"  className='phone-ya'>
                <Image src={"/img/telegramm.png"} width='44' height='44' alt='phone' />
        </a>
        </Button>
      <Button>
         <a title={"Whatsapp"} href={"https://wa.me/+79377283649"} target="_blank"  className='phone-ya'>
                <Image src={"/img/whatsapp.png"} width='48' height='48' alt='phone' />
        </a>
     
      </Button>
      <Button>
        <a title={"phone"} href={"tel:+79377283649"} target="_blank"  className='phone-ya'>
                <Image src={"/img/phone.png"} width='44' height='44' alt='phone' />
        </a>
      </Button>
    </ButtonGroup>
    </div>
  );
}


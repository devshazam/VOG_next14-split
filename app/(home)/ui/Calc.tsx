"use client"
import React , {useEffect, useState} from 'react';
import {
  Select,
  Slider, Flex,} from 'antd';


// Config:
const cityArray:any = [480, 260, 1000, 720, 1000, 300, 1300, 1254, 620, 480, 0];
const costOfMetr: any = [25, 30, 35, 42];
const saleValue: any = [0, 3, 3, 6];
const mapArray: any = ['vgr', 'vgv', 'vgs', 'vgd', 'vgm', 'vge', 'rss', 'rse', 'rsa', 'rsm']

type CalcProps = {
  id?: string
}

export default function Calc(props: CalcProps) {
  const [main, setMain] = useState({tarif: 0, range: 0});
  const [cost, setCost] = useState(0);
  const [sale, setsale] = useState(0);


  useEffect(() => {
    setsale(Math.round(costOfMetr[main.tarif] * main.range * saleValue[main.tarif] / 100));
    setCost(Math.round(costOfMetr[main.tarif] * main.range * (100 - saleValue[main.tarif]) / 100))

  }, [main.tarif, main.range]);

  return (

        <>
        <div id="calc" className='mb-6 rounded' style={{backgroundColor: "#f5f5f5"}} >
                <div className='mt-2 ml-2'><h2 className='text-2xl '>Калькулятор услуг:</h2></div>


            <div className="flex justify-center " >

                  <div className="w-4/5 my-4 ">
                  <Flex vertical gap={24} className="mt-8">
                        <Select  placeholder="Тариф:" value={main.tarif} 
                        onChange={(value: any) =>
                           setMain({...main, tarif: value})
                        }>
                            <Select.Option value={0}>Чистка и обслуживание</Select.Option>
                            <Select.Option value={1}>Заправка хладогентом</Select.Option>
                            <Select.Option value={2}>Установка Кондиционера</Select.Option>
                        </Select>

{/* 
                        <Select  placeholder="Маршрут:" defaultValue={(mapArray.indexOf(props.id) > 0 ? mapArray.indexOf(props.id) : 0)}
                            onChange={(value: any) =>
                          setMain({...main, range: cityArray[value]})
                        }>
                            <Select.Option value={0}>Волгоград ↔️ Ростов</Select.Option>
                            <Select.Option value={1}>Волгоград ↔️ Волгодонск</Select.Option>
                            <Select.Option value={2}>Волгоград ↔️ Сочи</Select.Option>
                            <Select.Option value={3}>Волгоград ↔️ Донецк</Select.Option>
                            <Select.Option value={4}>Волгоград ↔️ Москва</Select.Option>
                            <Select.Option value={5}>Волгоград ↔️ Элиста</Select.Option>
                            <Select.Option value={6}>Ростов ↔️ Самара</Select.Option>
                            <Select.Option value={7}>Ростов ↔️ Элиста</Select.Option>
                            <Select.Option value={8}>Ростов ↔️ Астрахань</Select.Option>
                            <Select.Option value={9}>Ростов ↔️ Мин. Воды</Select.Option>
                            <Select.Option value={10}>Россия и новые территории (произвольный маршрут)</Select.Option>
                        </Select> */}
                        


                    {/* Срок */}
                        <Slider max={100} min={0} 
                            marks={{
                            0: 'Метраж помещения',
                            21: '21 кв.м.',
                            100: '100 кв.м.',
                            }} 
                            value={main.range}
                            onChange={(value: any) =>
                              setMain({...main, range: value})
                            }
                        />
                      <div className='flex justify-center '>
                            <div className='w-1/2 box-border text-left' >
                                <h2 className='text-xl'>Цена: {cost}руб.</h2>
                            </div>
                            <div className='w-1/2 box-border text-left'>
                                <h2 className='text-xl'>Скидка: {sale}руб.</h2>
                            </div>
                      </div>
                  </Flex>
                  </div>
            </div>
            </div>


        </>
  );
}

"use client"
import React , {useEffect, useState} from 'react';
import {
  Select,
  Slider, Flex,} from 'antd';


// Config:
  // Чистка
  const tarifArray = [1700, 2000];
  const saleTo = 7;

  // Заправка
  const costHladogent = 7;
  const saleZap = 10;

  // Заправка
  const costTrace = 700;

const rangeArray =[{max: 100, min: 0, marks:{ 0: 'Метраж помещения', 28: '28 кв.м.', 100: '100 кв.м.'}}, {max: 1000, min: 0, marks:{ 0: 'граммовка', 400: '400 грамм', 1000: '1000 грамм',}}, {max: 100, min: 0, marks:{0: 'Свыше 2,5 метров', 100: '100 метров',}}];
const funcArray = [
        function(range: any) {
          if(range < 28) {
            return [Math.round(tarifArray[0] * ( 100 - saleTo )  / 100), Math.round(tarifArray[0] * saleTo / 100)]
          }else{
            return [Math.round(tarifArray[1] * ( 100 - saleTo )  / 100), Math.round(tarifArray[1] * saleTo / 100)]}
      },
      function(range: any) {
        return [Math.round(costHladogent * range * ( 100 - saleZap )  / 100), Math.round(costHladogent * range * saleZap / 100)]
    },
    function(range: any) {
      return [Math.round(costTrace * range + 7000), 0]

  },
]


export default function Calc() {
  const [main, setMain] = useState({tarif: 0, range: 0});
  const [cost, setCost] = useState(0);
  const [sale, setSale] = useState(0);


  useEffect(() => {
    setCost(funcArray[main.tarif](main.range)[0]);
    setSale(funcArray[main.tarif](main.range)[1])

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
                           setMain({...main, tarif: value, range: 0})
                        }>
                            <Select.Option value={0}>Чистка и обслуживание - 7% скидка</Select.Option>
                            <Select.Option value={1}>Заправка хладогентом - 10% скидка</Select.Option>
                            <Select.Option value={2}>Установка Кондиционера*</Select.Option>
                        </Select>
                        <Slider max={rangeArray[main.tarif].max} min={rangeArray[main.tarif].min} 
                            marks={rangeArray[main.tarif].marks} 
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
                            {main.tarif === 2 && <p>* - цена установки с трассой до 2,5 метров - 7000 руб.</p>}
                  </Flex>
                  </div>
            </div>
            </div>


        </>
  );
}

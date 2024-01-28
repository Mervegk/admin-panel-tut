import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

function ECommerce() {
    return (
        <div className='mt-12'>
            <div className='flex flex-wrap lg:flex-nowrap justify-center'>
                <div className='bg-white dark:bg-secondary-dark-bg dark:dark:text-gray-200 bg-hero-pattern bg-no-repeat bg-cover bg-center h-44 w-full lg:w-[80%] rounded-lg p-8 pt-9 m-3'>
                    <div>
                        <p className='font-bold text-[#EEF5FF]'>Earnings</p>
                        <p className='text-white text-2xl'>$63,448,78</p>
                    </div>
                    <div className='mt-4'>
                        <Button color="#071952"
                            bgColor="#B4D4FF"
                            text="Download"
                            borderRadius="10px"
                            size="md"
                        />
                    </div>
                </div>
                <div className='flex flex-wrap justify-center gap-1 m-3'>
                    {earningData.map((i) => (
                        <div key={i.title} className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
                            <button type='button' style={{ color: i.iconColor, backgroundColor: i.iconBg }}
                                className='text-2xl rounded-full opacity-0.9 p-4 hover:drop-shadow-xl'
                            >{i.icon}</button>
                            <p className='mt-3'><span className='text-lg font-semibold'>{i.amount}</span>
                                <span className={`text-sm text-${i.pcColor} ml-2`}>{i.percentage}</span></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ECommerce
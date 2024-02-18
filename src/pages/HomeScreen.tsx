import React from 'react';
import { Hero } from 'react-daisyui';
import { HomePrimaryBoxText } from '../components/home/HomePrimaryBoxText';
import { HomeBoxButtons } from '../components/home/HomeBoxButtons';
import { HomeSecondaryBoxText } from '../components/home/HomeSecondaryBoxText';
import { FooterCopyright } from '../components/FooterCopyright';

export const HomeScreen: React.FC<any> = (props) => {

  return (
    <>
      <div className='w-screen absolute w-full justify-center flex flex-col items-center'>
          <div className='flex min-h-screen'>
            <Hero>
              <Hero.Content className="flex-col lg:flex-row ">
                <HomePrimaryBoxText />
                <HomeBoxButtons />
                <HomeSecondaryBoxText />
              </Hero.Content>
            </Hero>
          </div>
        <div className=''>
          <FooterCopyright />
        </div>
      </div>
    </>
  )
}

import React from 'react';
import { Hero } from 'react-daisyui';
import { HomePrimaryBoxText } from '../components/home/HomePrimaryBoxText';
import { HomeBoxButtons } from '../components/home/HomeBoxButtons';
import { HomeSecondaryBoxText } from '../components/home/HomeSecondaryBoxText';
import { FooterCopyright } from '../components/FooterCopyright';
import { NavbarApp } from '../components/NavbarApp';

export const HomeScreen: React.FC<any> = () => {

  return (
    <>
      <div className='w-screen h-screen flex flex-col relative'>
        <NavbarApp />
        <div className='w-screen  justify-center flex flex-col items-center'>
          <div className='flex-grow'>
            <Hero>
              <Hero.Content className="flex-col lg:flex-row ">
                <HomePrimaryBoxText />
                <HomeBoxButtons />
                <HomeSecondaryBoxText />
              </Hero.Content>
            </Hero>
          </div>
        </div>
      </div>
      <div className='w-screen bottom-0 bg-base-100'>
        <FooterCopyright />
      </div>
    </>
  )
}

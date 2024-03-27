import React from 'react';
import { Hero } from 'react-daisyui';
import { HomePrimaryBoxText } from '../components/home/HomePrimaryBoxText';
import { HomeBoxButtons } from '../components/home/HomeBoxButtons';
import { HomeSecondaryBoxText } from '../components/home/HomeSecondaryBoxText';
import { FooterCopyright } from '../components/FooterCopyright';
import { NavbarApp } from '../components/NavbarApp';

export const AboutScreen: React.FC<any> = () => {

  return (
    <>
      <div className='flex flex-col'>
        <NavbarApp />
        <div className='w-screen lg:h-screen max-sm:h-lvh justify-center flex flex-col items-center'>
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
      <div className='w-screen bottom-0 bg-base-100 relative'>
        <FooterCopyright />
      </div>
    </>
  )
}

import React from 'react';
import { Hero } from 'react-daisyui';
import { HomePrimaryBoxText } from '../components/home/HomePrimaryBoxText';
import { HomeBoxButtons } from '../components/home/HomeBoxButtons';
import { HomeSecondaryBoxText } from '../components/home/HomeSecondaryBoxText';
import cardimg from './../assets/background-home.jpg';
import { FooterCopyright } from '../components/FooterCopyright';

export const HomeScreen: React.FC<any> = (props) => {

  return (
    <>
      <div className='bg-cover bg-fixed bg-center' style={{ backgroundImage: `url(${cardimg})` }}>
        <body className='flex h-screen min-h-screen '>
          <div className='m-auto'>
            <Hero>
              {/* <Hero.Content className="flex-col lg:flex-row gap-y-5 gap-x-63 "> */}
              <Hero.Content className="flex-col lg:flex-row m-auto">
                <HomePrimaryBoxText></HomePrimaryBoxText>
                <HomeBoxButtons></HomeBoxButtons>
                <HomeSecondaryBoxText></HomeSecondaryBoxText>
              </Hero.Content>
            </Hero>
          </div>
        </body>
        <div className='flex h-screen '>
          <FooterCopyright></FooterCopyright>
        </div>
      </div>
    </>
  )
}
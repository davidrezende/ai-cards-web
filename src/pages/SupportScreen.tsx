import React from 'react';
import { Divider, Hero } from 'react-daisyui';
import { HomePrimaryBoxText } from '../components/home/HomePrimaryBoxText';
import { HomeBoxButtons } from '../components/home/HomeBoxButtons';
import { HomeSecondaryBoxText } from '../components/home/HomeSecondaryBoxText';
import { FooterCopyright } from '../components/FooterCopyright';
import { NavbarApp } from '../components/NavbarApp';

export const SupportScreen: React.FC<any> = () => {

  return (
    <>
      <div className='flex flex-col'>
        <NavbarApp />
        <div className='w-screen lg:h-screen max-sm:h-lvh justify-center flex flex-col items-center'>
          <div className='flex-grow'>
            <Hero>
              <Hero.Content className="flex-col lg:flex-row ">
                <div className="text-center lg:text-left rounded-lg bg-base-100 bg-opacity-80 p-5">
                  <h1 className="text-5xl font-bold">Suporte <b>Eufor-IA</b></h1>
                  <p className="py-6">
                  </p>
                  <h2 className="text-4xl">Quer sugerir melhorias, dúvidas ou relatar algum problema?</h2>
                  <Divider/>
                  <h3 className="text-3xl"> Fale conosco através dos nossos canais oficiais:</h3>
                </div>

              </Hero.Content>
            </Hero>

          </div>
          <div className='flex-grow'>
            <Hero>
              <HomeBoxButtons />
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

import React from 'react';
import { Divider, Hero } from 'react-daisyui';
import { HomePrimaryBoxText } from '../components/home/HomePrimaryBoxText';
import { HomeBoxButtons } from '../components/home/HomeBoxButtons';
import { HomeSecondaryBoxText } from '../components/home/HomeSecondaryBoxText';
import { FooterCopyright } from '../components/FooterCopyright';
import { NavbarApp } from '../components/NavbarApp';
import { useNavigate } from 'react-router-dom';

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
                  <h1 className="text-5xl ">Suporte <b>Eufor-IA</b></h1>
                  <p className="py-6">
                  </p>
                  <h2 className="text-3xl font-normal">Quer sugerir melhorias, dúvidas ou relatar algum problema?</h2>
                  <Divider />
                  <h3 className="text-2xl font-normal"> Fale conosco através dos nossos canais oficiais:</h3>
                </div>
              </Hero.Content>
            </Hero>
            <div className='flex-grow h-full text-center'>
              <a href="https://discord.gg/fuBf3SCYnH">
                <button
                  type="button"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  className="animate-pulse p-16 mb-2 inline-block rounded bg-[#7289da] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                  <span className="[&>svg]:h-20 [&>svg]:w-20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 640 512">
                      <path
                        d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
                    </svg>
                    Discord
                  </span>
                </button>
              </a>
              <br/><br/>
              <p className='pb-10'>ou se preferir, envie-nos um email:<br/><b>support@eufor-ia.com</b></p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-screen bottom-0 bg-base-100 relative'>
        <FooterCopyright />
      </div>
    </>
  )
}

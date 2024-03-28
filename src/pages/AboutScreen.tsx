import React from 'react';
import { Divider, Hero } from 'react-daisyui';
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
                <div className="text-center lg:text-left rounded-lg bg-base-100 bg-opacity-80 p-5">
                  <h1 className="text-5xl font">Sobre</h1>
                  <p className="py-6">
                  </p>
                  <h2 className="text-3xl font-bold">Conheça melhor nossa plataforma</h2>
                  <Divider />
                  <p className="text-2xl font-normal text-justify">Somos responsáveis por dar forma as suas palavras. Criar heróis, vilões, ou personagens que possam contar suas próprias histórias.
                    Você tem uma história pra contar e quer dar vida a ela? Ou então gostaria de ajuda para terminá-la? Através da combinação de inteligências artificiais podemos 
                    criar um enredo para sua história baseado nos detalhes que você nos conta. Tornamos sua história realidade e a colocamos em campo de batalha para competir com 
                    outros jogadores.<br/><br/>Saiba qual ideia se tornou a mais forte e tente ultrapassá-la! Boa sorte.</p>
                  <p className="text-2xl font-light"></p>
                  <br/><br/>

                </div>
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

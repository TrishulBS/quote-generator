import React, {useState} from 'react';

import { 
  BackgroundImage1, 
  BackgroundImage2, 
  GradientBackgroundCon, 
  FooterCon, 
  FooterLink,
  QuoteGeneratorCon,
  QuoteGeneratorInnerCon,
  QuoteGeneratorTitle,
  QuoteGeneratorSubTitle,
  GenerateQuoteButton,
  GenerateQuoteButtonText } 
  from '@/components/QuoteGenerator/QuoreGenerator'

import Head from 'next/head'
import Image from 'next/image'
import budda1 from '../assests/image.png'
import rocky from '../assests/image2.png'




export default function Home() {
  const [numberOfQuotes, setNumberofQuotes] = useState<Number | null>(0);
  return (
    <>
      <Head>
        <title>Inspirational Quote Generator</title>
        <meta name="description" content="A fun project to generate quote" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GradientBackgroundCon>

        <QuoteGeneratorCon>
          <QuoteGeneratorInnerCon>
            <QuoteGeneratorTitle>
              Movivational Quote Generator
            </QuoteGeneratorTitle>
            <QuoteGeneratorSubTitle>
              Looking to get movition? Generate a quote card to get inspired provided by     
              <FooterLink href="https://zenquotes.io/" target="_blank" rel="noopener noreferrer">
                 ZenQuotes API
              </FooterLink>
            </QuoteGeneratorSubTitle>
            <GenerateQuoteButton>
              <GenerateQuoteButtonText onClick={null}>
                Make a Quote
              </GenerateQuoteButtonText>
            </GenerateQuoteButton>
          </QuoteGeneratorInnerCon>
        </QuoteGeneratorCon>


        <BackgroundImage1
          src={budda1}
          height="300"
          alt="Budda"
        />
        <BackgroundImage2
          src={rocky}
          height="260"
          alt="Conor"
        />

        {/* Footer */}
        <FooterCon>
          <>
            Quotes Generated: {numberOfQuotes}
            <br/>
            Developed by <FooterLink 
            href="https://www.linkedin.com/in/trishulbs/"
            target="_blank" rel="noopener noreferrer"> Trishul B S </FooterLink>
          </>
        </FooterCon>

      </GradientBackgroundCon>
    </>
  )
}
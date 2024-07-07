import React from 'react'
import { Organization } from '@davidcraig/react-schema'
import PageWithWidgets from '../Components/PageWithWidgets'

export default function Home(props) {
  return <PageWithWidgets className={props.className}>
    <h1 className={props.className}>&lt;Not Safe for Azeroth&gt;</h1>
    <p className={props.className}>A raiding guild aiming at heroic progression, the name is a play on the phrase "Not Safe for Work" as we are a dark humoured guild so we recruit only players who have a sense of humour and aren't easily offended (aka no snowflakes).</p>
    <Organization
      name='Not Safe for Azeroth'
      description='A World of Warcraft guild on Silvermoon EU.'
      url='https://notsafeforazeroth.netlify.app/'
    />

    <img className='mt-4' src='/NSFA-Recruitment.jpg' />
  </PageWithWidgets>
}

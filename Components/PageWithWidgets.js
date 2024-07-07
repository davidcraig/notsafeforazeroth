import Head from 'next/head'
import React from 'react'
import { Column, Columns } from '@davidcraig/react-bulma'
import Recruitment from './Widgets/Recruitment'
import Progress from './Widgets/Progress'

function PageWithWidgets(props) {
  let title = 'Not Safe for Azeroth'
  if (props.title) { title += ' | ' + props.title }
  const pageClass = props.className ? props.className : ''

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Columns>
        <Column class='is-two-thirds'>
          <main className={pageClass}>
            {props.children}
          </main>
        </Column>
        <Column>
          <Recruitment />
          {/* <Progress /> */}
        </Column>
      </Columns>
    </div>
  )
}

export default PageWithWidgets

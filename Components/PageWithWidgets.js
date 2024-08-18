import Head from 'next/head'
import React from 'react'
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

      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-12 lg:col-span-4 p-4'>
          <main className={pageClass}>
            {props.children}
          </main>

        </div>
        <div className='col-span-12 lg:col-span-4 p-4'>
          <Recruitment />
        </div>
        <div className='col-span-12 lg:col-span-4 p-4'>
          <Progress />
        </div>
      </div>
    </div>
  )
}

export default PageWithWidgets

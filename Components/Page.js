import Head from 'next/head'
import React from 'react'

function Page(props) {
  let title = 'Not Safe for Azeroth'
  if (props.title) { title += ' | ' + props.title }
  const pageClass = props.className ? props.className : ''

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-12 gap-4 p-4'>
        <div className='col-span-12'>
          <main className={pageClass}>
            {props.children}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Page

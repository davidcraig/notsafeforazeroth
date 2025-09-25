import * as React from 'react'

const externalLinkSvg = <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill='#ececec' d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>;

export default function ExternalLink({ url, text, wowClass }) {
  return <a className={`fg-${wowClass.css || 'default'}`} href={url} target='_blank' rel='noopener noreferrer'>
    {text}
    <span style={{marginLeft: '0.5rem', marginRight: '0.5rem'}}>{externalLinkSvg}</span>
  </a>


  // <a onClick={() => setMobileOpen(false)} className='ml-4 p-4 md:p-0 flex' href='https://raider.io/guilds/eu/tarren-mill/Not%20Safe%20for%20Azeroth' target='_blank' rel='noopener noreferrer'>Raider.IO </a>
}

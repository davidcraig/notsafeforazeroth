import * as React from 'react'

export default function ExternalLink({ url, text, wowClass }) {
  return <a className={`fg-${wowClass.css || 'default'}`} href={url} target='_blank' rel='noopener noreferrer'>
    {text}
  </a>
}

import React from 'react'
import Page from './Page'
import ExternalLink from './ExternalLink'

type Spec = {
  name: string
  key: string
  guides?: Guide[]
}

type Guide = {
  name: string
  url: string
}

type Props = {
  title: string
  class: {
    name: string
    css: string
  }
  discord?: string | string[]
  guides?: Record<string, Guide[]>
  specs: Spec[]
  specContent?: Record<string, React.ReactNode>
  children?: React.ReactNode
}

function RenderDiscord(discord?: string | string[]) {
  if (!discord) return null

  const renderLink = (url: string) => (
    <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
  )

  if (Array.isArray(discord)) {
    return (
      <>
        <p>
          Discords:
        </p>
        <ul>
          {discord.map(d => <li key={d}>{renderLink(d)}</li>)}
        </ul>
      </>
    )
  }

  return <p>Discord: {renderLink(discord)}</p>
}

export default function WoWClassPage(props: Props) {
  const { title, class: classData, discord, guides, specs, specContent, children } = props

  if (!classData || !classData.css || !classData.name) {
    return (
      <Page title="Invalid Class">
        <p>Class data is missing or malformed.</p>
      </Page>
    )
  }

  const css = classData.css
  const name = classData.name
  const specCount = specs.length
  const gridCols = Math.min(Math.max(specCount, 1), 4) // Clamp between 1 and 4

  return (
    <Page title={title} className={css}>
      <h1 className={`h1 text-2xl fg-${css} mb-4`}>{name}</h1>
      <div className="mb-4">
        {RenderDiscord(discord)}
      </div>

      <div className={`grid gap-4 mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-${gridCols}`}>
        {specs.map(spec => {
          const specGuides = spec.guides ?? []
          const content = specContent?.[spec.key] ?? null

          return (
            <div key={spec.key} className="card">
              <div className="card-header">
                <div className={`card-header-title fg-${css}`}>
                  {spec.name}
                </div>
              </div>
              <div className="p-4">
                {content}
                {specGuides && specGuides.length > 0 && (
                  <>
                    <p className="mt-2 mb-1">Guides:</p>
                    <ul>
                      {specGuides.map(guide => (
                        <li key={guide.url}>
                          <ExternalLink url={guide.url} text={guide.name} />
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {children}
    </Page>
  )
}
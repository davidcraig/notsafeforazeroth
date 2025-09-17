import React from 'react'
import Page from './Page'
import ExternalLink from './ExternalLink'
import type { WoWClass } from '../Types/WoWClass'

type Spec = {
  name: string
  key: string
  img?: string
  guides?: Guide[]
  role: { name: string, icon?: string }
}

type Guide = {
  name: string
  url: string
}

type Props = {
  title: string
  class: WoWClass
  discord?: string | string[]
  guides?: Record<string, Guide[]>
  specContent?: Record<string, React.ReactNode>
  children?: React.ReactNode
}

function RenderDiscord(wowClass: WoWClass, discord?: string | string[]) {
  if (!discord) return null

  const renderLink = (url: string) => (
    <a className={`fg-${wowClass.css}`} href={url} target="_blank" rel="noopener noreferrer">{url}</a>
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
  const { title, class: classData, guides, specContent, children } = props

  if (!classData || !classData.css || !classData.name) {
    return (
      <Page title="Invalid Class">
        <p>Class data is missing or malformed.</p>
      </Page>
    )
  }

  const css = classData.css
  const name = classData.name
  const specCount = classData.specs?.length || 0
  const gridCols = Math.min(Math.max(specCount, 1), 4) // Clamp between 1 and 4

  return (
    <Page title={title} className={css}>
      <h1 className={`h1 text-2xl fg-${css} mb-4 flex`}>
        {classData.img && (
          <img
            src={classData.img}
            alt={`${name} Class Icon`}
            className='mr-2 h-8 w-8'
          />
        )}
        {name}
        </h1>
      <div className="mb-4">
        {RenderDiscord(classData, classData.discord)}
      </div>

      <div className={`grid gap-4 mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-${gridCols}`}>
        {classData?.specs?.map(spec => {
          const specGuides = spec.guides ?? []
          const content = specContent?.[spec.key] ?? null

          return (
            <div key={spec.key} className="card">
              <div className="card-header relative">
                <div className={`card-header-title fg-${css} flex items-center justify-between w-full relative`}>
                  {/* Left Icon */}
                  {spec.img && (
                    <img
                      src={spec.img}
                      alt={`${spec.name} Spec Icon`}
                      className="absolute left-2 h-6 w-6"
                    />
                  )}

                  {/* Center Text */}
                  <span className={`mx-auto text-xl font-bold text-center fg-${classData.css}`}>
                    {spec.name}
                  </span>

                  {/* Right Icon */}
                  {spec.role.icon && (
                    <img
                      src={spec.role.icon}
                      alt={`${spec.name} Role Icon`}
                      className="absolute right-2 h-6 w-6"
                    />
                  )}
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
                          <ExternalLink wowClass={classData} url={guide.url} text={guide.name} />
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

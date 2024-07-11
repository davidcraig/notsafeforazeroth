import Page from './PageWithWidgets'
import React from 'react'
import ExternalLink from './ExternalLink'
import { Card, Column, Columns, TabbedContent } from '@davidcraig/react-bulma'

function RenderDiscord(discord) {
  return <a href={discord} target='_blank'>{discord}</a>
}

function RenderDiscords(discord) {
  if (!discord) {
    return false
  }

  if (Array.isArray(discord)) {
    return <p>Discords: <ul>{discord.map(d => <li key={d}>{RenderDiscord(d)}</li>)}</ul></p>
  }

  return <p>Discord: {RenderDiscord(discord)}</p>
}

export function renderClassGuides(guides) {
  return (
    <ul>
      {
        guides.map(guide => {
          return <li key={guide.url}>
            <ExternalLink url={guide.url} text={guide.name} />
          </li>
        })
      }
    </ul>
  )
}

function renderSpecCard(index, props) {
  const spec = props.specs[index]
  const guides = props.guides[spec.key]

  return (
    <Card title={spec.name}>
      {guides.length > 0 && (
        <>
          Guides:
          <ul>
            {
              guides.map(guide => {
                return <li><ExternalLink url={guide.url} text={guide.name} /></li>
              })
            }
          </ul>
        </>
      )}
      {props.specContent && props.specContent[spec.key]}
    </Card>
  )
}

function renderSpecTab(index, props) {
  const spec = props.specs[index]
  const guides = Object.prototype.hasOwnProperty.bind(props, 'guides')
    ? props.guides[spec.key]
    : []

  return (
    <Columns>
      <Column>
        {props.specContent && props.specContent[spec.key]}
      </Column>
      <Column>
        {guides.length > 0 && (
          <>
            Guides:
            <ul>
              {
                guides.map(guide => {
                  return <li><ExternalLink url={guide.url} text={guide.name} /></li>
                })
              }
            </ul>
          </>
        )}
      </Column>
    </Columns>
  )
}

export default function WoWClassPage(props) {
  const css = props.class.css
  const name = props.class.name
  const discord = RenderDiscords(props.discord)

  let tabContent = []
  if (props.specs) {
    props.specs.forEach((spec, index) => {
      tabContent.push({
        title: spec.name,
        content: renderSpecTab(index, props)
      })
    })
  }

  return (
    <Page title={props.title} className={css}>
      <h1 className={`h1 fg-${css}`}>{name}</h1>
      {discord}
      <TabbedContent content={tabContent} />
      {props.children}
    </Page>
  )
}

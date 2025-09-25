import React, { useState } from 'react'

export interface Tab {
  title: string
  content?: React.ReactNode
}

export interface TabbedContentProps {
  content: Tab[]
}

export const TabbedContent: React.FC<TabbedContentProps> = ({ content }) => {
  const [activeTab, setActiveTab] = useState<string>('0')

  const changeTab = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const key = e.currentTarget.getAttribute('data-tab')
    if (key !== null) {
      setActiveTab(key)
    }
  }

  const renderTabs = () => {
    return content.map((tab, index) => {
      const key = String(index)
      const isActive = key === activeTab

      return (
        <li key={key} className={`p-2 ${isActive ? 'is-active' : ''}`}>
          {isActive ? tab.title : (
            <a data-tab={key} onClick={changeTab}>{tab.title}</a>
          )}
        </li>
      )
    })
  }

  const renderActiveTabContent = () => {
    const index = parseInt(activeTab, 10)
    const tab = content?.[index]

    if (!tab || tab.content === undefined || tab.content === null) {
      return <p className="has-text-grey">No tab content found</p>
    }

    return React.isValidElement(tab.content)
      ? tab.content
      : <p className="has-text-grey">Invalid tab content</p>
  }

  if (!Array.isArray(content) || content.length === 0) {
    console.error(content, 'content is undefined?')
    return <p className="has-text-grey">-</p>
  }

  return (
    <>
      <div className="tabs">
        <ul className="flex">
          {renderTabs()}
        </ul>
      </div>
      <div className="tab-body">
        {renderActiveTabContent()}
      </div>
    </>
  )
}

export default TabbedContent

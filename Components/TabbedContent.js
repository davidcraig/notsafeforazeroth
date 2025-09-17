import React from 'react'

/**
 * TabbedContent
 *
 * @param {Object} props
 * @param {Object[]} props.content - Array of tabs/content.
 * @param {string} props.content[].title - Tab title.
 * @param {any} props.content[].content - Tab content.
 */
export class TabbedContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: '0'
    }
    this.changeTab = this.changeTab.bind(this)
  }

  changeTab(e) {
    const key = e.target.getAttribute('data-tab')
    if (key !== null) {
      this.setState({ activeTab: key })
    }
  }

  renderTabs() {
    const { content } = this.props
    return content.map((tab, index) => {
      const key = String(index)
      const isActive = key === this.state.activeTab
      const title = tab?.title ?? `Tab ${index + 1}`

      return (
        <li key={key} className={`p-2 ${isActive ? 'is-active' : ''}`}>
          {isActive ? title : (
            <a data-tab={key} onClick={this.changeTab}>{title}</a>
          )}
        </li>
      )
    })
  }

  renderActiveTabContent() {
    const index = parseInt(this.state.activeTab, 10)
    const tab = this.props.content?.[index]

    if (!tab || !tab.content) {
      return <p className="has-text-grey">No tab content found</p>
    }

    // Defensive: only render if it's a valid React element
    return React.isValidElement(tab.content)
      ? tab.content
      : <p className="has-text-grey">Invalid tab content</p>
  }

  render() {
    const { content } = this.props

    if (!Array.isArray(content) || content.length === 0) {
      return <p className="has-text-grey">-</p>
    }

    return (
      <>
        <div className="tabs">
          <ul className="flex">
            {this.renderTabs()}
          </ul>
        </div>
        <div className="tab-body">
          {this.renderActiveTabContent()}
        </div>
      </>
    )
  }
}

export default TabbedContent

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
    this.setState({ activeTab: key })
  }

  renderTabs() {
    return this.props.content.map((tab, index) => {
      const key = String(index)
      const isActive = key === this.state.activeTab
      return (
        <li key={key} className={`p-2 ${isActive ? 'is-active' : ''}`}>
          {isActive ? tab.title : (
            <a data-tab={key} onClick={this.changeTab}>{tab.title}</a>
          )}
        </li>
      )
    })
  }

  renderActiveTabContent() {
    const index = parseInt(this.state.activeTab, 10)
    const tab = this.props.content[index]
    return tab?.content ?? <>No tab content found</>
  }

  render() {
    if (!Array.isArray(this.props.content) || this.props.content.length === 0) {
      return <>No content</>
    }

    return (
      <>    
        <div className='tabs'>
          <ul className='flex'>{this.renderTabs()}</ul>
        </div>
        {this.renderActiveTabContent()}
      </>
    )
  }
}

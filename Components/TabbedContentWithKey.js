import React from 'react'

function TabbedContentWithKey(WrappedComponent) {
  return function TabbedContentWithIdentity(props) {
    const { id } = props

    if (!id) {
      console.error('TabbedContent is missing an "id" prop:', props)
    }

    const keyName = `${id}-tabs` || `auto-tab-${Math.random().toString(36).slice(2)}`
    return (
      <WrappedComponent
        {...props}
        key={keyName}
      />
    )
  }
}

export default TabbedContentWithKey
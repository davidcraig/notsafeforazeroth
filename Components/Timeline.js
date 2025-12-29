import React from 'react'

function TimelineRow(date, content, even = true) {
  return (
    <tr key={`${date}-${content}`}>
      <td width='40%'>{even ? content : ''}</td>
      <td width='20%'>{date}</td>
      <td widht='40%'>{even ? '' : content}</td>
    </tr>
  )
}

function Timeline(props) {
  let even = true
  const entries = props.entries.map(entry => {
    even = !even
    return TimelineRow(entry.date, entry.content, even)
  })

  return (
    <table>
      <tbody>
        {entries}
      </tbody>
    </table>
  )
}

export default Timeline

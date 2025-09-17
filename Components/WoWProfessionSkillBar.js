import React from 'react'

export function WoWProfessionSkillBar({ skill, cap, label, color }) {
  const baseSkill = Math.min(skill, cap)
  const bonus = skill > cap ? skill - cap : 0
  const percent = (baseSkill / cap) * 100
  const displayText = bonus > 0 ? `${cap} + ${bonus} / ${cap}` : `${baseSkill} / ${cap}`
  const barWidth = '100px'

  return (
    <div className="skill-bar-container" style={{ marginBottom: '1rem' }}>
      {label && (
        <div className="skill-label" style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>
          {label}
        </div>
      )}

      <div className="skill-bar" style={{
        position: 'relative',
        height: '20px',
        backgroundColor: 'rgba(0,0,0,0.2)',
        border: '1px solid #000',
        overflow: 'hidden',
        width: barWidth,
        fontSize: '0.9rem',
        color: '#fff',
        textAlign: 'center',
      }}>
        {/* Fill bar */}
        <div className={`skill-fill bg-${color}`} style={{
          width: `${percent}%`,
          backgroundColor: color,
          height: '100%',
          transition: 'width 0.3s ease',
        }} />

        {/* Centered text */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          textShadow: '0 0 2px #000, 0 0 2px #000',
          pointerEvents: 'none', // ensures clicks pass through
        }}>
          {displayText}
        </div>
      </div>
    </div>
  )
}

export default WoWProfessionSkillBar
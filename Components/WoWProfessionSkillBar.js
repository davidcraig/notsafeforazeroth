import React from 'react'

const barWidth = '120px'

export function WoWProfessionSkillBar({ skill, cap, label, color }) {
  const baseSkill = Math.min(skill, cap)
  const isCapped = skill >= cap
  const bonus = skill > cap ? skill - cap : 0
  const percent = (baseSkill / cap) * 100

  const SkillDisplayValue = (
    <>

      {isCapped && bonus > 0 && (
        <>
          <span className='mr-1' style={{ fontWeight: 'bold' }}>{cap}</span>
          <span style={{ color: 'var(--wow-rarity-uncommon)' }}> +{bonus}</span>
          <span style={{ marginLeft: '4px', fontSize: '0.75em', color: 'rgba(255, 255, 255, 0.8)' }}>/ {cap}</span>
        </>
      )}

      {isCapped && bonus === 0 && (
        <span style={{ fontWeight: 'bold' }}>{cap}</span>
      )}

      {!isCapped && bonus === 0 && (
        <>
          {baseSkill}
          <span className='mr-1' style={{ marginLeft: '4px', fontSize: '0.75em', color: 'rgba(255, 255, 255, 0.8)' }}>/ {cap}</span>
        </>
      )}
    </>
  )

  return (
    <div className="skill-bar-container" style={{ marginBottom: '1rem' }}>
      {label && (
        <div className="skill-label" style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>
          {label}
        </div>
      )}

      <div className="skill-bar" style={{
        position: 'relative',
        height: '24px',
        backgroundColor: 'rgba(0,0,0,0.2)',
        border: `2px solid ${isCapped ? 'var(--wow-rarity-legendary)' : 'rgba(0,0,0,0.4)'}`,
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
          {SkillDisplayValue}
        </div>
      </div>
    </div>
  )
}

export default WoWProfessionSkillBar

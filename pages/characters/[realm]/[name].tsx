import { useState } from 'react'
import { useRouter } from 'next/router'
import Page from '@nsfa/Components/Page'
import WoWProfessionSkillBar from '@nsfa/Components/WoWProfessionSkillBar.js'

const buildProfessionData = (characterData) => {
  const professionRows = []

  const professions = {}

  {Object.keys(characterData?.professions).forEach((profession) => {
    {Object.keys(characterData.professions[profession]).forEach((expansion) => {

      professionRows.push(
        <tr>
          <td></td>
          <td>
            {profession}
            {expansion}
          </td>
          <td>
            <WoWProfessionSkillBar
              skill={characterData.professions[profession][expansion].skill}
              cap={characterData.cap || 100}
              label={null}
              color={characterData?.wowclass?.css || ''}
            />
          </td>
        </tr>
      )
      
    })}
  })}

  return professionRows
}

export default function Character() {
  const router = useRouter()
  const realm = router.query.realm
  const character = router.query.name
  const [characterData, setCharacterData] = useState(null);

  import(`../../../data/characters/${realm}/${character}.ts`)
  .then((module) => {setCharacterData(module.default)})

  if (characterData == null) {
    return <Page><p>Character not found</p></Page>
  }

  const professionData = buildProfessionData(characterData)

  console.log(characterData)

  return (
    <Page>
      <h1 className={`text-xl fg-${characterData.wowclass.css}`}>{characterData.name}-{characterData.realm}</h1>

      <h2>Professions</h2>
      <table>
        <tbody>

          {professionData}
        </tbody>
      </table>
      
    </Page>
  )
}

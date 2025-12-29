import { useState } from 'react'
import { useRouter } from 'next/router'
import Page from '@nsfa/Components/Page'
import WoWProfessionSkillBar from '@nsfa/Components/WoWProfessionSkillBar.js'
import { getLatestSortedExpansionKeys } from 'Types/expansions'
import ucFirst from 'Functions/ucFirst'

const buildProfessionData = (characterData) => {
  const professionRows = []
  const expKeys = getLatestSortedExpansionKeys();

  professionRows.push(
    <tr>
      <th>Profession</th>
      {Object.values(expKeys).map(expKey => {
        return <th>{expKey.toLocaleUpperCase()}</th>
      })}
    </tr>
  )

  {Object.keys(characterData?.professions).forEach((profession) => {
    professionRows.push(
      <tr>
        <td>{ucFirst(profession)}</td>
        {Object.values(expKeys).map(expKey => {
          if (!characterData.professions[profession][expKey]) return <td>-</td>
          return <td><WoWProfessionSkillBar
            skill={characterData.professions[profession][expKey]?.skill}
            cap={characterData.cap || 100}
            label={null}
            color={characterData?.wowclass?.css || ''}
          /></td>
        })}
        <td>
          
        </td>
      </tr>
    )
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

      <h2 className='text-lg my-4'>Professions</h2>
      <table>
        <tbody>

          {professionData}
        </tbody>
      </table>
      
    </Page>
  )
}

import { useState } from 'react'
import { useRouter } from 'next/router'
import Page from '@nsfa/Components/Page'

export default function Character() {
  const router = useRouter()
  //const { realm, name } = router.query
  const realm = router.query.realm
  const character = router.query.name
  const [characterData, setCharacterData] = useState(null);

  import(`../../../data/characters/${realm}/${character}.ts`)
  .then((module) => {setCharacterData(module.default)})

  if (characterData == null) {
    return <Page><p>Character not found</p></Page>
  }

  return (
    <Page>
      <h1 className={`text-xl fg-${characterData.wowclass.css}`}>{characterData.name}-{characterData.realm}</h1>
    </Page>
  )
}

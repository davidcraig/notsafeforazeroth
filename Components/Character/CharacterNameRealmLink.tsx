import Link from "next/link"

const CharacterNameRealmLink = ({ character }) => {
  return <Link className={`fg-${character?.wowclass?.css || character?.wowclass?.wowclass?.css}`} href={`/characters/${character.realm}/${character.name}`}>
    {character.name}-{character.realm}
  </Link>
}

export default CharacterNameRealmLink

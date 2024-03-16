import ImageVO from "./ImageVO"
import Attribute from "./AttributeVO"

export default interface Card {
    cardHash: string
    name: string
    description: string
    attributes: Attribute
    status: string
    rarity: string
    userId: string
    image: ImageVO
    collectionSeries: string
    datCreation: string 
  } 

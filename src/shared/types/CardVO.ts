import { List } from "postcss/lib/list"
import ImageVO from "./ImageVO"

export default interface Card {
    cardHash: string
    name: string
    description: string
    attributes: Map<string, number>
    status: string
    image: ImageVO
  }

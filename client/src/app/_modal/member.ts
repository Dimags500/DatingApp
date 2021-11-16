import { Photo } from "./photo";


export interface Member {
  id: number
  userName: string
  photoUrl: string
  knowAs: any
  created: Date
  lastActive: Date
  gender: string
  introduction: string
  interests: string
  city: string
  country: string
  photos: Photo[]
  age: number
}



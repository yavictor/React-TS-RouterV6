export interface IUserShort {
    id: number;
    username: string
    city: string
    company: string
}

interface Address {

}

export interface IUserFull {
    id: number
    name: string
    username: string
    email: string
    address: {
      street: string
      suite: string
      city: string
      zipcode: number
      geo: {
        lat: string,
        lng: string
      }
    }
    phone: string
    website: string
    company: {
      name: string
      catchPhrase: string
      bs: string
    }
}

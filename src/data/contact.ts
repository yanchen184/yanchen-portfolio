export interface Social {
  readonly name: string
  readonly url: string
}

export interface ContactInfo {
  readonly email: string
  readonly location: string
  readonly socials: readonly Social[]
}

export const contactInfo: ContactInfo = {
  email: 'bobchen184@gmail.com',
  location: '台北市，台灣',
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/yanchen184',
    },
    {
      name: 'iT幫忙',
      url: 'https://ithelp.ithome.com.tw/users/20111603',
    },
  ],
}

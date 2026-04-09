export interface Social {
  readonly name: string
  readonly url: string
  readonly icon: string
}

export interface ContactInfo {
  readonly email: string
  readonly location: string
  readonly socials: readonly Social[]
}

export const contactInfo: ContactInfo = {
  email: 'bobchen184@gmail.com',
  location: '台北市',
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/yanchen184',
      icon: '🐙',
    },
    {
      name: 'iT幫忙',
      url: 'https://ithelp.ithome.com.tw/users/20111603',
      icon: '📝',
    },
  ],
}

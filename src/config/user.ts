interface UserModel {
  introduce: string
  mail: string
  url: string
  name: string
  avatar: string
}

export const user: UserModel = {
  introduce: 'FE',
  mail: 'kexin@korix.top',
  url: '',
  name: 'Kori',
  avatar: 'https://avatars.githubusercontent.com/u/116903901?v=4'
}

export const icp: {
  text: string
  link: string
} = {
  text: '苏ICP备2023042732号',
  link: '#'
}

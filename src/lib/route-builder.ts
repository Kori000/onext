export const enum Routes {
  Home = '',

  Login = '/login',

  Page = '/'
}

type Pagination = {
  size?: number
  page?: number
}

export type PostsParams = Pagination & {
  sortBy?: string
  orderBy?: 'desc' | 'asc'
}

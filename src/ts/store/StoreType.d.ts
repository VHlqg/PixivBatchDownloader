import { UgoiraInfo } from '../crawl/CrawlResult'
export type IDListType = 'illusts' | 'manga' | 'novels' | 'ugoira' | 'unknown'

export interface IDData {
  type: IDListType
  id: string
}

export interface NovelMeta {
  id: string
  title: string
  content: string
  description: string
  coverUrl: string
  createDate: string
  userName: string
  meta: string
}

// 保存每个要下载的作品的信息
export interface Result {
  idNum: number
  id: string
  original: string
  thumb: string
  regular: string
  small: string
  pageCount: number
  dlCount: number
  /**该文件在作品中的索引，从 0 开始。所有类型的文件都有这个值
   */
  index: number
  title: string
  tags: string[]
  tagsWithTransl: string[]
  tagsTranslOnly: string[]
  user: string
  userId: string
  fullWidth: number
  fullHeight: number
  ext: string
  bmk: number
  bookmarked: boolean
  date: string
  type: 0 | 1 | 2 | 3
  rank: number | null
  ugoiraInfo: UgoiraInfo | null
  seriesTitle: string | null
  seriesOrder: string | null
  novelMeta: NovelMeta | null
  likeCount: number
  viewCount: number
  commentCount: number
  xRestrict: 0 | 1 | 2
  sl: 0 | 2 | 4 | 6 | null
}

export interface ResultOptional {
  idNum?: number
  id?: string
  original?: string
  thumb?: string
  regular?: string
  small?: string
  pageCount?: number
  dlCount?: number
  title?: string
  tags?: string[]
  tagsWithTransl?: string[]
  tagsTranslOnly?: string[]
  user?: string
  userId?: string
  fullWidth?: number
  fullHeight?: number
  ext?: string
  bmk?: number
  bookmarked?: boolean
  date?: string
  type?: 0 | 1 | 2 | 3
  rank?: number | null
  ugoiraInfo?: UgoiraInfo | null
  seriesTitle?: string | null
  seriesOrder?: string | null
  novelMeta?: NovelMeta | null
  likeCount?: number
  viewCount?: number
  commentCount?: number
  xRestrict?: 0 | 1 | 2
  sl?: 0 | 2 | 4 | 6 | null
}

// 储存作品在排行榜中的排名
export interface RankList {
  [key: string]: number
}

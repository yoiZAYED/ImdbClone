export type VideosDto = {
  results: Video[]
  id: string
}

export type Video = {
  key: string // is needed inorder to gain access to the site
  site: string // is the website youtube /vimeo say what not
}

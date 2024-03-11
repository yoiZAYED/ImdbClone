export type ImagesDto = {
  backdrops: Image[] // this is used to retrieve images of the movies/tv series
}

export type Image = {
  file_path: string
}

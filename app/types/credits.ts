export type CreditsDto = {
  cast: Actor[]
} // this here is created inorder to get access to the different credits here cast is the dataelement/ feature which is the set of actors

export type Actor = {
  profile_path: string
  name: string
  character: string
}

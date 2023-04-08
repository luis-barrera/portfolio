export interface WorkArea {
  name: String,
  technologies: {
    name: String,
    iconUrl: String,
    desc: String
  },
  projects: {
    name: String,
    iconUrl: String,
    desc:String
    date?: String,
    place?: String
  }
}
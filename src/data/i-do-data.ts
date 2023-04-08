import faviconUrl from "$lib/assets/favicon.png";

export interface WorkArea {
  name: String,
  technologies: {
    name: String,
    iconUrl: String,
    desc: String,
    sinceYear: number  // Año desde el cual empezar a contar la experiencia
  }[],
  projects: {
    name: String,
    iconUrl: String,
    desc: String,
    dateBegin?: Date,
    dateEnd?: Date | null,
    place?: String
  }[]
}

export var WorkAreaData: WorkArea[] = [
  {
    name: "Frontend",
    technologies: [
      {
        name: "Javascript",
        iconUrl: faviconUrl,
        desc: "Frontend Frameworks and UI libraries",
        sinceYear: 2020
      }
    ],
    projects: [
      {
        name: "SAT GNL",
        iconUrl: faviconUrl,
        desc: "Development of Frontend using Angular",
        dateBegin: new Date("September 2022"),
        dateEnd: null,
        place: "Lean4IT"
      }
    ]
  }
]

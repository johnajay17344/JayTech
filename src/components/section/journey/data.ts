export interface JourneyItem {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  side: "left" | "right";
}

export const journeyData: JourneyItem[] = [
  {
    title: "ALX Africa",
    subtitle: "Backend Pro Developer Program .",
    period: "2025–till date",
    description:
    "undergoed intensive training in backend development, software engineering principles, and collaborative project building through the ALX program. Gaining hands-on experience with modern web technologies, problem-solving, teamwork, and building scalable, user-focused applications.",
    side: "left",
  },
  {
    title: "ALX Africa",
    subtitle: "Frontend Pro Developer Program .",
    period: "2024–2024",
    description:
    "undergoed intensive training in frontend development, software engineering principles, and collaborative project building through the ALX program. Gaining hands-on experience with modern web technologies, problem-solving, teamwork, and building scalable, user-focused applications.",
    side: "right",
  },
  {
    title: "B.Tech – Industrial Chemistry",
    subtitle: "Ondo State University of Science and Technology",
    period: "2016–2021",
    description:
      "Focused on analytical chemistry, environmental chemistry, and industrial chemical processes, with research experience in heavy metal adsorption and water treatment using agricultural waste materials. Developed strong laboratory, research, and problem-solving skills through academic projects and experimental analysis..",
    side: "left",
  },
  {
    title: "Frontend Developer Internship",
    subtitle: "Akinsmarble Enterprise",
    period: "2022 · 2024",
    description:
      "Worked on developing and maintaining responsive web interfaces, improving user experience, and implementing modern frontend technologies. Collaborated on projects involving website design, performance optimization, and scalable UI development while strengthening practical skills in web development and problem-solving..",
    side: "right",
  },
];
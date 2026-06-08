import axios from "axios"
import {GitHubStats,GitHubActivity,GitHubLanguage} from "@/types/github"

const BASE = "https://api.github.com/users/johnajay17344"

const githubAccess = {
  userProfile:  `${BASE}`,
  repositories: `${BASE}/repos?sort=pushed&per_page=100`,
  activity:     `${BASE}/events?per_page=30`,
}



const github = axios.create({
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
     Accept: "application/vnd.github+json",
    "User-Agent": "NextJS-App",
  },
})
console.log(`Bearer ${process.env.GITHUB_TOKEN}`);



export async function fetchStats(): Promise<GitHubStats> {
  try {
    const [profileRes, reposRes, eventsRes] = await Promise.all([
    github.get(githubAccess.userProfile),
    github.get(githubAccess.repositories),
    github.get(githubAccess.activity),
  ])

  const totalStars = reposRes.data.reduce(
    (sum: number, repo: { stargazers_count: number }) => sum + repo.stargazers_count, 0
  )

  const recentCommits = eventsRes.data.filter(
    (e: { type: string }) => e.type === "PushEvent"
  ).length


  return {
    publicRepos:   profileRes.data.public_repos,
    totalStars,
    followers:     profileRes.data.followers,
    recentCommits,
  }
}catch (error) {
    console.error("Error fetching GitHub stats:", error)
    return { publicRepos: 0, totalStars: 0, followers: 0, recentCommits: 0 }
}}


export async function fetchActivity(): Promise<GitHubActivity[]> {
  try {
    const res = await github.get(githubAccess.activity)

    return res.data
      .slice(0, 5)
      .map(
        (event: {
          id: string
          type: string
          repo: { name: string }
          created_at: string
        }) => ({
          id: event.id,
          type: event.type,
          repo: event.repo.name,
          date: event.created_at,
          url: `https://github.com/${event.repo.name}`,
        })
      )

  } catch (error) {
    console.error("Failed to fetch GitHub activity:", error)

    return []
  }
}


export async function fetchLanguages(): Promise<GitHubLanguage[]> {
  try{
  const res = await github.get(githubAccess.repositories)
  const map: Record<string, number> = {}
  for (const repo of res.data) {
    if (repo.language) {
      map[repo.language] = (map[repo.language] ?? 0) + 1
    }
  }
  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])  
    .map(([name, count]) => ({ name, count }))
  }catch (error) {
    console.error("Failed to fetch GitHub languages:", error)
    return []
  }
}


import { fetchStats, fetchActivity, fetchLanguages} from "../../../app/api/github"

// --- Types ---

export interface StatCard {
  title: string
  value: number
}

export interface ActivityItem {
  id: string
  label: string
  repo: string         
  date: string
  url: string
}

export interface LanguageItem {
  name: string
  count: number
  label: string       
}

export interface GithubDashboardData {
  stats: StatCard[]
  activity: ActivityItem[]
  languages: LanguageItem[]
}

// --- Event type → readable label ---


function getActivityLabel(type: string): string {
  const map: Record<string, string> = {
    PushEvent:         "Pushed to",
    WatchEvent:        "Activity in",
    CreateEvent:       "Created",
    ForkEvent:         "Forked",
    IssuesEvent:       "Opened issue in",
    PullRequestEvent:  "Pull request in",
  }
  return map[type] ?? "Activity in"
}




// --- Main data fetcher ---

export async function getGithubDashboardData(): Promise<GithubDashboardData> {
  const [stats, activity, languages] = await Promise.all([
    fetchStats(),
    fetchActivity(),
    fetchLanguages(),
  ])

  const statCards: StatCard[] = [
    { title: "Public Repositories", value: stats.publicRepos },
    { title: "Total Stars",         value: stats.totalStars },
    { title: "Followers",           value: stats.followers },
    { title: "Recent Commits",      value: stats.recentCommits },
  ]

  const activityItems: ActivityItem[] = activity.map((item) => ({
    id:    item.id,
    label: getActivityLabel(item.type),
    repo:  item.repo,
    date:  item.date,
    url:   item.url,
  }))

  const languageItems: LanguageItem[] = languages.map((lang) => ({
    name:  lang.name,
    count: lang.count,
    label: `${lang.count} ${lang.count === 1 ? "repository" : "repositories"}`,
  }))

  return {
    stats:     statCards,
    activity:  activityItems,
    languages: languageItems,
  }
}
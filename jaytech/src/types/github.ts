
export interface GitHubStats {
  publicRepos: number
  totalStars:  number
  followers:   number
  recentCommits: number
}

export interface GitHubActivity {
  id:      string
  type:    string
  repo:    string
  date:    string
  url:     string
}

export interface GitHubLanguage {
  name:  string
  count: number
}

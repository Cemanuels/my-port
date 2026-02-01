import type { LucideIcon } from 'lucide-react'

export type SkillLevel = 'iniciante' | 'intermediário' | 'avançado'

export interface SkillWithLevel {
  name: string
  level: SkillLevel
  icon: LucideIcon
}

export interface SkillCard {
  title: string
  items: string
  icon: LucideIcon
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  highlights: string[]
}

export interface EducationItem {
  course: string
  place: string
  notes: string
}

export interface HobbyItem {
  name: string
  icon: LucideIcon
}

export type SectionVisibility = Record<string, boolean>

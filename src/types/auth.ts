import type { Role } from '@/types/role'
import type { Workspace } from '@/types/workspace'

export interface User {
  id: string
  username: string
  email: string
  role: Role
  workspace: Workspace
}

export interface AuthState {
  token: string | null
  user: User | null
}

import type { Audit } from '@/types/audit'
import type { User } from '@/types/auth'

export interface Workspace {
  id: number
  name: string
  audit: Audit
  created_by: User
  updated_by: User
}

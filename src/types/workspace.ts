import type { AuditType } from '@/types/audit'
import type { User } from '@/types/auth'

export interface Workspace {
  id: number
  name: string
  audit: AuditType
  created_by: User
  updated_by: User
}

import type { User } from '@/types/auth'

export interface AuditType {
  status: string
  created_by: User
  last_updated_by: User
  deleted_by: User
}

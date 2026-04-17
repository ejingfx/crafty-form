import type { AuditType } from '@/types/audit'

export interface Role {
  id: number
  name: string
  audit: AuditType
  created_at: string
  updated_at: string
}

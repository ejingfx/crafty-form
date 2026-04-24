import type { Audit } from '@/types/audit'

export interface Role {
  id: number
  name: string
  audit: Audit
  created_at: string
  updated_at: string
}

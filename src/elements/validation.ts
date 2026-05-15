export default {
  required: (v: any, m?: string) => !!v || (m || 'Field is required'),
  nullable: (v: any, m?: string) => v === null || (m || 'Field is not nullable'),
  email: (v: any, m?: string) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || (m || 'E-mail must be valid'),
}

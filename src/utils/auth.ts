export function getToken () {
  return window.localStorage.getItem('token')
}

export function setToken (token: string) {
  window.localStorage.setItem('token', token)
}

export function clearToken () {
  window.localStorage.removeItem('token')
}

export function removeToken () {
  return window.localStorage.removeItem('token')
}

export function getUser () {
  return window.localStorage.getItem('user')
}

export function setUser (user: any) {
  window.localStorage.setItem('user', user)
}

export function removeUser () {
  window.localStorage.removeItem('user')
}

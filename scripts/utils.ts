import path from 'path'

export function resolve (...value) {
  return path.resolve(__dirname, '..', ...value)
}

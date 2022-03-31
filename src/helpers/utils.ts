export function bytesToSize(bytes: number): string {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (bytes === 0) return '0 Byte'
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)).toString())
  return (bytes / Math.pow(1024, i)).toString().substr(0, 4) + '' + sizes[i]
}

export function getValIfDefined<T, D>(value?: T, def?: D): T | D {
  if (value === undefined) {
    return def
  }

  return value
}

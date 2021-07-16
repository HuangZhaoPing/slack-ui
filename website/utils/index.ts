import Clipboard from 'clipboard'

export function copyToClipboard (val: string) {
  return new Promise((resolve, reject) => {
    const id = 'copy-to-clipboard-span'
    const span = document.createElement('span')
    span.setAttribute('id', id)
    span.setAttribute('data-clipboard-text', val)
    document.body.append(span)
    const clipboard = new Clipboard(`#${id}`)
    clipboard.on('success', e => (resolve(e)))
    clipboard.on('error', e => (reject(e)))
    span.click()
    document.body.removeChild(span)
    clipboard.destroy()
  })
}

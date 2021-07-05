export default function scss () {
  return {
    name: 'scss',
    transform: (code, id) => {
      return code.replace('.scss', '.css')
    }
  }
}
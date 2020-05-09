export function detectBlur (node) {
  if (!node.parentElement) {
    console.log('Blur')
    return true
  } else {
    var result = node.parentElement.className.match(/.*__(.*)___.*/)
    if (result && result[1] === 'menu') {
      console.log('No Blur')
      return false
    }
    return detectBlur(node.parentElement)
  }
}

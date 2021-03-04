/*
 * @Author: hesw
 * @Date: 2021-03-03 17:46:37
 * @Description: 
 */
const title = ''

export default function getPageTitle(key) {
  const hasKey = `${key}`
  if (hasKey && title) {
    const pageName = `${key}`
    return `${title} - ${pageName}`
  }
  return `${hasKey}`
}

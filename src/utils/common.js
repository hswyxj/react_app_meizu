import md5 from 'js-md5'

/**
 * @returns {string} game_name
 */
export function getcurrentgamename(currentgame, gameLists) {
  if (gameLists) {
    for (var i = 0; i < gameLists.length; i++) {
      if (currentgame === gameLists[i].game_id) {
        return gameLists[i].game_name
      }
    }
  }
}

// /**
//  * @returns {string} urlParamsStr
//  */
// export function parseParams(data) {
//   try {
//     const tempArr = []
//     for (var i in data) {
//       if (data[i]) {
//         var key = encodeURIComponent(i)
//         var value = encodeURIComponent(data[i])
//         tempArr.push(key + '=' + value)
//       }
//     }
//     const urlParamsStr = tempArr.join('&')
//     return urlParamsStr
//   } catch (err) {
//     return ''
//   }
// }

/**
 * @param {string} str
 * @returns {string} Md5
 */
export function getMd5(str) {
  const getmd5 = md5(str)
  return getmd5
}

/**
 * @returns {string} time
 */
export function getTime() {
  // const nowtime = new Date().getTime() // 精确到豪秒
  const nowtime = Math.round(new Date().getTime() / 1000).toString() // 接口要求精确到秒
  return nowtime
}

/**
 * @returns {string} n
 */
export function randomString() {
  const t = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  const a = t.length
  var n = ''
  for (var i = 0; i < 8; i++) n += t.charAt(Math.floor(Math.random() * a))
  return n
}

/** 换行文本转成数组
 * @returns {string} item
 */
export function getLineseparatedList(data) {
  // line separated
  let item = []
  item = data.split(/[(\r\n)\r\n]+/)
  for (var i = 0; i < item.length; i++) {
    if (!item[i]) {
      item.splice(i, 1)
    }
  }
  return item
}

/** 换行文本换行符号替换成分号;
 * @returns {string} item
 */
export function LineSplitList(data) {
  let item = []
  // 先所有空换行替换成一个分号; ->中间换行符替换成分号; -> 去掉首尾的分号
  item = data.replace(/\s+/g, ';').replace(/[\r\n]/g, ';').replace(/(^;)|(;$)/, '')
  for (var i = 0; i < item.length; i++) {
    if (!item[i]) {
      item.splice(i, 1)
    }
  }
  return item
}

/**
 * @returns {string} str
 */
export function getpath(str) {
  str.substring(1)
  return str
}

/** 报表api路径配置
 * @returns {string} httpstr
 */
export function rptapi() {
  let httpstr = document.location.protocol + '//adminsuper.kushidai8.com/rpt'
  if (process.env.NODE_ENV === 'development') {
    // 本地环境报表api路径
    httpstr = document.location.protocol + '//apirpt.kushidai8.com'
  }
  return httpstr
}

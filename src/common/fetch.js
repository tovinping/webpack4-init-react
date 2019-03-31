export const get = function(url, data, timeout) {
  let arr =[]
  for (const key in data) {
    arr.push(`${key}=${data[key]}`)
  }
  arr = arr.join('&')
  arr = arr ? '?' + arr : ''
  return Promise.race([
    fetchTimeout(timeout),
    fetch(url + arr).then(response => {
      return utilsResponse(response)
    })
  ])
}

export const post = async (url, data={}, header={}, timeout) => { // 'application/x-www-form-urlencoded'
  let headers = Object.assign({'Content-Type': 'application/json'}, header)
  return Promise.race([
    fetchTimeout(timeout),
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers,
      body: JSON.stringify(data)
    }).then(response => {
      return utilsResponse(response)
    })
  ])
}

function fetchTimeout(timeout) {
  return  new Promise((resolve,reject) => { 
    setTimeout(()=>{
      reject(new Error('请求超时'))
    }, timeout) 
  })
}

function utilsResponse(response) {
  if (response.status >= 500) {
    throw new Error('服务器出错')
  } else if (response.status >= 400) {
    throw new Error('找不到请求地址')
  } else {
    return response.json()
  }
}
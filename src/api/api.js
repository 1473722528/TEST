export function mymsg(data) {
    return request({
      url: '/api/mymsg',
      method: 'post',
      data
    })
  }
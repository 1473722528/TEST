// 权限管理API
import request from '@/utils/request.js'

export function editUserData(data) {      //修改用户数据
    return request({
        url: '/editUserData',
        method: 'POST',
        data
    })
}


export function getAllUserData() {        //获取全部用户
    return request({
        url: '/getAllUserData',
        method: 'GET',
    })
}

export function deleteUserData(data){       //删除用户
    return request({
        url:'/deleteUserData',
        method:'POST',
        data
    })
}

export function searchUserData(query){      //搜索用户
    return request({
        url:'/searchUserData',
        method:'GET',
        params:query
    })
}

export function register(data){             //注册、新增用户
    return request({
        url:'/register',
        method:'POST',
        data
    })
}

export function login(query){
    return request({
        url:'/login',
        method:'GET',
        params:query
    })
}
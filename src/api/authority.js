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

export function login(query){               //用户登录
    return request({
        url:'/login',
        method:'GET',
        params:query
    })
}

export function getAllHotelData(){      //获取全部酒店数据
    return request({
        url:'/getAllHotelData',
        method:'GET'
    })
}

export function getRoomData(query){       //获取指定酒店的房间数据
    return request({
        url:'/getRoomData',
        method:'GET',
        params:query
    })
}

export function addHotel(data){     //新增酒店
    return request({
        url:'/addHotel',
        method:'POST',
        data
    })
}

export function deleteHotelData(data){      //删除酒店数据
    return request({
        url:'/deleteHotelData',
        method:'POST',
        data
    })
}

export function editHotelData(data){        //编辑酒店数据
    return request({
        url:'/editHotelData',
        method:'POST',
        data
    })
}

export function searchHotelData(query){     //搜索酒店数据
    return request({
        url:'/searchHotelData',
        method:'GET',
        params:query
    })
}

export function getAllOrderData(){      //获取全部订单
    return request({
        url:'/getAllOrderData',
        method:'GET'
    })
}

export function searchOrderData(query){
    return request({
        url:'/searchOrderData',
        method:'GET',
        params:query
    })
}
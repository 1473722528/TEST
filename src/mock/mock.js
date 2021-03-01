import Mock from 'mockjs'

Mock.mock('/api/mymsg',{
    data:[{
        userId:1222,
        userName: 'lisa',
        userAge: 22,
        userPhone: 12222222
    }]
})

export default Mock;



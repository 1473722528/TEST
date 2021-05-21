
  /* 是否手机号码*/
  export function validatePhone(rule, value, callback) {
    const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (value == '' || value == undefined || value == null) {
      callback();
    } else {
      if ((!reg.test(value)) && value != '') {
        callback(new Error('请输入正确的电话号码'));
      } else {
        callback();
      }
    }
  }
  /* 是否身份证号码*/
  export function validateIdCard(rule, value, callback) {
    const reg = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[X])$)$/;
    if (value == '' || value == undefined || value == null) {
      callback();
    } else {
      if ((!reg.test(value)) && value != '') {
        callback(new Error('请输入正确的身份证号码'));
      } else {
        callback();
      }
    }
  }

  /* 是否邮箱*/
   export function validateEmail(rule, value, callback) {
    if (value === '') {
        callback(new Error('请正确填写邮箱'));
      } else {
        if (value !== '') { 
          var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
          if(!reg.test(value)){
            callback(new Error('请输入有效的邮箱'));
          }
        }
        callback();
      }
   }


  
  /*用户ID*/
  export function checkUserId(rule, value, callback) {
    if (value == '' || value == undefined || value == null) {
      callback();
    } else if (!Number(value)) {
      callback(new Error('请输入7位数的用户ID'));
    } else if (value < 1000000 || value > 9999999) {
      callback(new Error('请输入7位数的用户ID'));
    } else {
      callback();
    }
  }
   /*酒店ID*/
   export function checkHotelId(rule, value, callback) {
    if (value == '' || value == undefined || value == null) {
      callback();
    } else if (!Number(value)) {
      callback(new Error('请输入8位数的酒店ID'));
    } else if (value < 10000000 || value > 99999999) {
      callback(new Error('请输入8位数的酒店ID'));
    } else {
      callback();
    }
  }
   /*房间ID*/
   export function checkRoomId(rule, value, callback) {
    if (value == '' || value == undefined || value == null) {
      callback();
    } else if (!Number(value)) {
      callback(new Error('请输入4位数的房间ID'));
    } else if (value < 1000 || value > 9999) {
      callback(new Error('请输入4位数的房间ID'));
    } else {
      callback();
    }
  }
  
  //验证金额
  export function checkPrice(rule, value, callback) {
    if (value < 0 ){
      callback(new Error('请输入正确的金额'));
    } else {
      callback();
    }
  }

   //验证数量
   export function checkNum(rule, value, callback) {
    if (value < 0 ){
      callback(new Error('请输入正确的数量'));
    } else {
      callback();
    }
  }
   //验证年龄
   export function checkUserAge(rule, value, callback) {
    if (value < 16 || value > 150) {
      callback(new Error('请输入正确的年龄'));
    } else {
      callback();
    }
  }

  //验证权限输入
  export function checkUserRole(rule, value, callback) {
    if (value!='用户'&&value!='管理员') {
      callback(new Error('请输入用户或管理员'));
    } else {
      callback();
    }
  }
//验证订单状态输入
  export function checkOrderState(rule, value, callback) {
    if (value!='预定中'&&value!='已完成') {
      callback(new Error('请输入预定中或已完成'));
    } else {
      callback();
    }
  }

  //验证是否1-99之间
  export function isOneToNinetyNine(rule, value, callback) {
    if (!value) {
      return callback(new Error('输入不可以为空'));
    }
    setTimeout(() => {
      if (!Number(value)) {
        callback(new Error('请输入正整数'));
      } else {
        const re = /^[1-9][0-9]{0,1}$/;
        const rsCheck = re.test(value);
        if (!rsCheck) {
          callback(new Error('请输入正整数，值为【1,99】'));
        } else {
          callback();
        }
      }
    }, 0);
  }

  // 验证是否是[1-100]的小数,即不可以等于0
  export function isBtnOneToHundred(rule, value, callback) {
    if (!value) {
      return callback(new Error('输入不可以为空'));
    }
    setTimeout(() => {
      if (!Number(value)) {
        callback(new Error('请输入整数，值为[1,100]'));
      } else {
        if (value < 1 || value > 100) {
          callback(new Error('请输入整数，值为[1,100]'));
        } else {
          callback();
        }
      }
    }, 100);
  }

  
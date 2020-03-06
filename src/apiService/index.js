import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://open.duyiedu.com',
    timeout: 5000,
});

instance.interceptors.request.use(function (config) {
    //为了防止每天请求次数超过限制，对appkey做了限制
    //appkey为每个接口都需要使用的公共参数
    config.params = {
        // appkey:'ll58333_1547734753802',
        ...config.params
    }
    return config;
});


/**
 * 获取全部学生
 */   
function getAllStudents() {
    return instance.get('/api/student/findAll');
}

/**
 * 添加学生
 */
function addStuduent(params) {
   return instance.get('/api/student/addStudent', {
        params
    })
};

// addStuduent({
//     appkey:'ll58333_1547734753802',
//     sNo:'1102',
//     name:'小蔡同学',
//     sex:1,
//     brith:1994,
//     phone:'123456',
//     address:'杭州市',
//     email:'35666666@163.com'
// });

export {
    getAllStudents,
    addStuduent
};
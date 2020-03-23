import  axios from 'axios'
import {Message} from "element-ui"

let service = axios.create({
    timeout: 50000
});

service.interceptors.response.use(
    response => {
        var code = response.data.code;
        if (code  === 600 || code === 700) {
            sessionStorage.removeItem("userInfo")
            Message.error("您未登录系统，请登录！")
            setTimeout(()=>{
                window.location.href = this.$util.returnUrl() + "/login"
            },2000)

        }else {
            return response;
        }

    }

)
export default  service;

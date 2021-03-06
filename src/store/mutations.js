export default {
    changeisMobile(state){
        state.isMobile = ! state.isMobile
    },
    changeisShowLogRegDialog(state){
        state.isShowLogRegDialog = ! state.isShowLogRegDialog
    },
    changeisShowUserInfoDialog(state){

        state.isShowUserInfoDialog = ! state.isShowUserInfoDialog
    },
    changeisShowNavBarInMobile(state){
        state.isShowNavBarInMobile = ! state.isShowNavBarInMobile
    },
    changeisShowNavInfoInMobile(state){
        state.isShowNavInfoInMobile = ! state.isShowNavInfoInMobile
    },
    isMobile(state,val){
        state.isMobile = val
    },
    changeUserInfo(state,user){
        state.userInfo  = user
    },
    changeLoginType(state,type){

        state.loginType = type
    } ,
    changeAdminUserInfo(state,user){
        state.adminUserInfo  = user
    },
    changeAdminLoginType(state,type){

        state.adminLoginType = type
    },
    changeHotTags(state, hotTags)  {
        state.hotTags = hotTags
    },
    changeNavBarIndex(state, index)  {
        state.navBarIndex = index
    },
    changeHotTagChoice(state, hotTagChoice) {
        state.hotTagChoice = hotTagChoice
    }

}

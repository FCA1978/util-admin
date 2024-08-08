import { defineStore } from "pinia";
import {} from "../utils";

export const useUserStore = defineStore({
  id: "pure-user",
  state: (): userType => ({
    // 头像
    avatar: storageLocal().getItem<DataInfo<number>>(userKey)?.avatar ?? "",
    // 用户名
    username: storageLocal().getItem<DataInfo<number>>(userKey)?.username ?? "",
    // 昵称
    nickname: storageLocal().getItem<DataInfo<number>>(userKey)?.nickname ?? "",
    // 页面级别权限
    roles: storageLocal().getItem<DataInfo<number>>(userKey)?.roles ?? [],
    // 前端生成的验证码
    verifyCode: "",
    // 判断登陆页面显示哪个组件(0:登录(默认)，1：手机登陆、2：二维码登陆、3：注册、4：忘记密码)
    currentPage: 0,
    // 是否勾选了登录页的免登陆
    isRemembered: false,
    // 登录页的免登陆存储几天，默认7天
    loginDay: 7,
  }),
});

export function useUserStoreHook() {
  return useUserStore(store);
}

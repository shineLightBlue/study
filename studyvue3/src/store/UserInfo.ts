import axios from "../api/request";
import { defineStore } from "pinia";
interface UserInfoDto {
  username: string;
  name: string;
  sex: string;
}
export const useUserInfo = defineStore("userInfo", {
  state: () => ({ username: "", name: "", sex: "" }),
  actions: {
    async get(username: string) {
      const resp = await axios.get(`/api/info/${username}`);
      // console.log(resp);
      Object.assign(this, resp.data.data);
    },
    async update(dto: UserInfoDto) {
      await axios.post(`/api/info`, dto);
      Object.assign(this, dto);
    },
  },
});

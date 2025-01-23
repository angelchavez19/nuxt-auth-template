import axios from "axios";
import { BACKEND_URL } from "~/config/api";
import type { UserI } from "~/interfaces";

export const useUserStore = defineStore("user-store", () => {
  const user = ref<UserI | null>(null);

  const refreshToken = useRefreshToken();

  const getUser = async () => {
    await refreshToken(async () => {
      const response = await axios.get(`${BACKEND_URL}/auth/user/info`, {
        withCredentials: true,
      });

      if (response.status === 200) {
        user.value = response.data;
      }
    });
  };

  return { getUser, user };
});

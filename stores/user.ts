import axios from "axios";
import { BACKEND_URL } from "~/config/api";
import type { UserI } from "~/interfaces";

export const useUserStore = defineStore("user-store", () => {
  const user = ref<UserI | null>(null);
  const router = useRouter();
  const localePath = useLocalePath();

  const getUser = async () => {
    const response = await axios.get(`${BACKEND_URL}/auth/user/info`, {
      withCredentials: true,
    });

    if (response.status === 200) {
      user.value = response.data;
    } else {
      router.push(localePath("/login"));
    }
  };

  return { getUser, user };
});

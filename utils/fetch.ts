import axios from "axios";
import { BACKEND_URL } from "~/config/api";

export const useRefreshToken = () => {
  const router = useRouter();
  const localePath = useLocalePath();

  return async (callback: () => Promise<void>) => {
    try {
      await callback();
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 403) {
          await axios.get(`${BACKEND_URL}/auth/refresh-token`, {
            withCredentials: true,
          });

          try {
            await callback();
          } catch (error: any) {
            router.push(localePath("/login"));
          }
        }
      }
    }
  };
};

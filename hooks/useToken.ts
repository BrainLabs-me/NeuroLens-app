import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

export function useToken() {
  const [token, setTokenValue] = useState<string | null>();

  useEffect(() => {
    async function getToken() {
      const token = await SecureStore.getItemAsync("token");
      setTokenValue(token);
    }
    getToken();
  }, []);

  async function setToken(value: string) {
    try {
      await SecureStore.setItemAsync("token", value);
      setTokenValue(value);
    } catch (error) {
      console.error("Greška pri brisanju iz AsyncStorage", error);
    }
  }
  async function removeToken() {
    try {
      await SecureStore.deleteItemAsync("token");
      setTokenValue(undefined);
    } catch (error) {
      console.error("Greška pri brisanju iz AsyncStorage", error);
    }
  }
  return { token, setToken, removeToken };
}

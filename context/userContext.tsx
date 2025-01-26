import { useToken } from "@/hooks/useToken";
import { User } from "@/lib/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { router } from "expo-router";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

interface UserContextType {
  user: User | null;
  loading: any;
  setUser: (userData: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { token, removeToken } = useToken();
  async function getUser() {
    try {
      if (token) {
        const res = await axios.get(process.env.EXPO_PUBLIC_API_URL + "/user", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setUser({
          name: res.data.name,
          email: res.data.email,
          photo: res.data.photo,
          type: "auth",
        });
        console.log("AAA", res);
        return 0;
      } else {
        const userr = await AsyncStorage.getItem("user");
        setUser(JSON.parse(userr || ""));
        return 0;
      }
    } catch (err) {
      console.log("ERR:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user === null) {
      getUser();
    }
  }, [token]);

  const logout = async () => {
    await AsyncStorage.clear();
    await removeToken();
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

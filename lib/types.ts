export type User = {
  name: string;
  email?: string;
  photo?: string;
  type: "guest" | "auth";
};

export type AuthError = {
  response: {
    data: {
      errors: {
        full_name: string[];
        email: string[];
        password: string[];
      };
      message: string;
      success: boolean;
    };
  };
};

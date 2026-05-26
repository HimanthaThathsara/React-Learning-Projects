import {createAuthClient} from "better-auth/react";
import {customSessionClient} from "better-auth/client/plugins";
import type {auth} from "./auth";
import env from "../config/env";

export const authClient = createAuthClient({
  baseURL: env.NEXT_PUBLIC_APP_URL,
  plugins: [customSessionClient<typeof auth>()],
});

import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   webpack(config, { isServer }) {
      if (!isServer) {
         config.resolve = {
            ...(config.resolve ?? {}),
            alias: {
               ...(config.resolve?.alias ?? {}),
               "react-remove-scroll": path.resolve(
                  __dirname,
                  "src/lib/react-remove-scroll-proxy.tsx"
               ),
            },
         };
      }
      return config;
   },
};

export default nextConfig;

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
                  "src/utils/react-remove-scroll-proxy"
               ),
            },
            extensions: [
               ...(config.resolve?.extensions || []),
               ".tsx",
               ".ts",
               ".js",
            ],
         };
      }

      return config;
   },
};

export default nextConfig;

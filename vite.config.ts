import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// This enables absolute imports like `import { useOidc } from "oidc";`
// instead of `import { useOidc } from "../../oidc";`
// You also need to add "compilerOptions": { "baseUrl": "src" } in your tsconfig.json for it to work
import tsconfigPaths from "vite-tsconfig-paths";
import { viteEnvs } from "vite-envs";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        viteEnvs({
            declarationFile: ".env"
        }),
        TanStackRouterVite()
    ],
    server: {
        proxy: {
            "/api": {
                target: "https://sndil-codification-deterministe.developpement.insee.fr",
                changeOrigin: true,
                secure: false,
                rewrite: path => path.replace(/^\/api/, ""),
                onProxyReq: (proxyReq, req, res) => {
                    proxyReq.setHeader("Accept", "application/json");
                    proxyReq.setHeader("Content-Type", "application/json");
                },
                onProxyRes: (proxyRes, req, res) => {},
                onError: (err, req, res) => {
                    console.error("Proxy error:", err);
                    res.writeHead(500, {
                        "Content-Type": "text/plain"
                    });
                    res.end("Something went wrong. And we are reporting a custom error message.");
                }
            }
        }
    }
});

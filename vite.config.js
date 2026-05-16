import { defineConfig } from 'vite';

export default defineConfig({
  // base 的值必须是你 GitHub 仓库的名字，例如 '/my-three-repo/'
  // 如果是部署到自定义域名或 <user>.github.io/ 则设为 '/'
  base: './',
});

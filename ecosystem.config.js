module.exports = {
  apps: [
    {
      name: "API",
      script: "./src/index.mjs",
      args: "--experimental-modules",
      instances: "max",
      // eslint-disable-next-line camelcase
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      // eslint-disable-next-line camelcase
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PORT: "3030"
      },
      // eslint-disable-next-line camelcase
      env_production: {
        NODE_ENV: "production",
        PORT: "8080"
      }
    }
  ]
};

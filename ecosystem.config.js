module.exports = {
  apps: [
    {
      name: "API",
      script: "./src/index.mjs",
      args: ["--experimental-modules", "--experimental-json-modules"],
      instances: "max",
      // eslint-disable-next-line camelcase
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      // eslint-disable-next-line camelcase
      max_memory_restart: "1G",
      env: {
        // eslint-disable-next-line prettier/prettier
        "NODE_ENV": "development",
        // eslint-disable-next-line prettier/prettier
        "PORT": "3001"
      },
      // eslint-disable-next-line camelcase
      env_production: {
        // eslint-disable-next-line prettier/prettier
        "NODE_ENV": "production",
        // eslint-disable-next-line prettier/prettier
        "PORT": "80"
      },
    },
  ],
};

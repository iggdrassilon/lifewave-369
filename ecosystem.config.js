module.exports = {
  apps: [
    {
      name: 'candysh_shop_client',
      script: 'yarn',
      args: 'start',
      exec_mode: 'fork',
      instances: '1',
      autorestart: true,
      watch: true,
      max_memory_restart: '700M',
    },
  ],
}

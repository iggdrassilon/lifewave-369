module.exports = {
  apps: [
    {
      name: 'LifeWave',
      script: 'http-server',
      args: '--no-dotfiles -p 8088',
      exec_mode: 'fork',
      instances: '1',
      autorestart: true,
      watch: true,
      max_memory_restart: '700M',
    },
  ],
}

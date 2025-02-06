module.exports = {
  apps: [
    {
      name: 'LifeWave',
      script: 'http-server',
      args: '-p 8086',
      exec_mode: 'fork',
      instances: '1',
      autorestart: true,
      watch: true,
      max_memory_restart: '700M',
    },
  ],
}

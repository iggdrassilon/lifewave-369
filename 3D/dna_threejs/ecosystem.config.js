export const apps = [
  {
    name: 'dna_demo',
    script: 'http-server',
    args: '-p 8082',
    autorestart: true,
    watch: true,
    max_memory_restart: '400M',
  },
]

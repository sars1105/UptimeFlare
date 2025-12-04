import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "群晖NAS监控",
  links: [
    { link: 'https://github.com/sars1105', label: 'GitHub' },
  ],
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,
  
  monitors: [
    {
      id: 'synology_nas',
      name: '群晖NAS',
      method: 'GET',
      target: 'https://www.lgmx.site:10503/',  // ← 改成你的群晖实际IP
      tooltip: '我的群晖NAS服务器',
      statusPageLink: 'https://www.lgmx.site:10503/',  // ← 改成你的群晖实际IP
      expectedCodes: [200],
      timeout: 10000,
    },
  ],
  
  notification: {
    webhook: {
      url: 'http://www.lgmx.site:8080/fpzMd84kbUir5LEuB82bdH',  // ← 改成你的实际Bark密钥
      method: 'POST',
      payloadType: 'json',
      payload: {
        title: '群晖监控通知',
        body: '$MSG',
        sound: 'alarm',
        level: 'timeSensitive',
      },
      timeout: 5000,
    },
    timeZone: 'Asia/Shanghai',
    gracePeriod: 1,
  },
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // 状态页标题
  title: "群晖NAS监控",
  // 顶部链接（可选）
  links: [
    { link: 'https://github.com/sars1105', label: 'GitHub' },
  ],
}

const workerConfig: WorkerConfig = {
  // 定义所有监控项
  monitors: [
    {
      // 唯一ID，不要改动
      id: 'synology_nas',
      // 监控名称
      name: '群晖NAS',
      // HTTP方法
      method: 'GET',
      // 你的群晖地址（改成你的实际IP和端口）
      target: 'https://www.lgmx.site:10503/',
      // 鼠标悬停提示
      tooltip: '我的群晖NAS服务器',
      // 点击后跳转的链接（可选）
      statusPageLink: 'https://www.lgmx.site:10503/',
      // 期望的HTTP状态码
      expectedCodes: [200],
      // 超时时间（毫秒）
      timeout: 10000,
    },
  ],
  
  // 通知设置
  notification: {
    // Webhook通知配置
    webhook: {
      // Bark的webhook地址
      url: 'http://www.lgmx.site:8080/fpzMd84kbUir5LEuB82bdH/$MSG',
      // 使用GET方法，参数附加在URL上
      method: 'GET',
      // 负载类型
      payloadType: 'param',
      // 发送的内容，$MSG会被替换为实际的通知消息
      payload: {},
      // 超时时间
      timeout: 5000,
    },
    // 时区设置
    timeZone: 'Asia/Shanghai',
    // 宽限期（分钟）：连续失败多少次后才发送通知，避免误报
    gracePeriod: 1,
  },
}

// 维护计划（可以留空）
const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }

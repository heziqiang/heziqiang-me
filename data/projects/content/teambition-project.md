## 项目背景

Teambition是业界领先的团队协作工具，通过共享项目、任务、文件、日程等内容，让团队高效协同。活跃企业数超50万，用户数超1000万，2018年并入阿里巴巴作为“钉钉项目”。

我参与了公司从A轮到C轮的创业过程，作为Node.js工程师，主要负责企业版核心功能的系统设计与开发实现。

时间：2015 - 2017

![这是图片](/teambition_office_outside.jpg)
位于上海浦东张江的开放式圆形办公室。
可怜的Florian(右一 法国人) 不会说中文，常常一个人😄
![这是图片](/teambition_office_inside.jpg)

## 主要功能

- 项目管理
- 多维度任务看板
- 实时文档协同编辑
- 团队日程安排
- 企业级角色权限管控

![这是图片](/teambition_project.png)

## 技术架构

前端采用自研的MVVM框架，基于Backbone.js，是国内最早实现双向数据绑定的大规模前端应用。彼时 React、Vue 尚未流行。

服务端全部使用 Node.js 开发，基于 Express 框架定制，采用 Mongodb + Redis 分布式部署，是国内最早的JS全栈践行者。

### 企业版

企业版是我主要负责的核心模块。 例如企业级角色权限管控：

在企业中会涉及到很多协作角色、比如 HR、项目经理、销售、财务等。Teambition 按行业模板会默认提供一些角色，企业可以根据实际需要定制角色，让职责划分更清晰。
![这是图片](/teambition_roles.png)

当我们将企业角色设置好后，即可通过勾选，更精细地控制他们的权限，以避免权限过大造成的安全风险。
![这是图片](/teambition_permissions.png)

### 数据安全

在数据安全方面，我们也极为重视，可以参考：[《Teambition安全白皮书》](https://dn-st.oss.aliyuncs.com/public%2FTeambition%E5%AE%89%E5%85%A8%E7%99%BD%E7%9A%AE%E4%B9%A6(v1.0).pdf)


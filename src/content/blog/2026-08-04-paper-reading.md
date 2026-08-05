---
title: 2026-08-04 Paper Reading
description: 今日 arXiv 论文速读：10 篇入选 shortlist。
date: '2026-08-04'
tags:
- paper reading
- arXiv
category: Research
comments: true
draft: false
---

今日从 arXiv 订阅中筛选 10 篇论文。

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2608.01755" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2608.01755</a><a href="https://hjfy.top/arxiv/2608.01755" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2608.01755</a></div>

## ⚡ Deferred Exposure of Future Trajectories for Verifiable Reasoning in Autonomous Driving VLMs

<p class="paper-card-summary">真方法：发现 AD VLM 的 CoT 标注暴露 GT 未来轨迹会造成锚定偏差（trajectory anchoring bias），提出 AD-MCQ 选择题范式 + DEFT-RLVR 延迟暴露做可验证的规划推理。</p>

<figure class="paper-card-figure"><img src="/images/blog/paper-2608.01755.png" alt="Deferred Exposure of Future Trajectories for Verifiable Reasoning in Autonomous Driving VLMs" loading="lazy" /></figure>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2608.02449" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2608.02449</a><a href="https://hjfy.top/arxiv/2608.02449" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2608.02449</a></div>

## ⚡ MoRAL: Sensor-Grounded BEV Reasoning for Compact VLMs toward Edge-Oriented Autonomous Driving

<p class="paper-card-summary">真方法：两阶段微调把 2B 紧凑 VLM 训练成"读物理编码 BEV（LiDAR 距离色带+雷达多普勒楔形）"的驾驶推理模型，8GB 显卡 42 tok/s 部署，紧急制动召回 10.8%→47.8%。</p>

<figure class="paper-card-figure"><img src="/images/blog/paper-2608.02449.png" alt="MoRAL: Sensor-Grounded BEV Reasoning for Compact VLMs toward Edge-Oriented Autonomous Driving" loading="lazy" /></figure>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2608.01636" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2608.01636</a><a href="https://hjfy.top/arxiv/2608.01636" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2608.01636</a></div>

## ⚡ A Forward-Inverse Dynamic Game Framework for Enhanced Multi-Agent Trajectory Planning

<p class="paper-card-summary">真方法：KL 正则化动态博弈 + 状态相关权重，在未知对手目标与有界理性下求解反馈纳什均衡，用于多智能体轨迹规划。</p>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2608.02365" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2608.02365</a><a href="https://hjfy.top/arxiv/2608.02365" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2608.02365</a></div>

## ⚡ Faster-WAM: Do World Action Models Need Deep Action Modules?

<p class="paper-card-summary">真方法（效率）：提出 DoT 视频中心设计原则，动作头只挂 1 层 Transformer 到 30 层视频骨干，66.5ms/次推理，比 Fast-WAM 快 3.2 倍且泛化更好。</p>

<figure class="paper-card-figure"><img src="/images/blog/paper-2608.02365.png" alt="Faster-WAM: Do World Action Models Need Deep Action Modules?" loading="lazy" /></figure>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2608.01899" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2608.01899</a><a href="https://hjfy.top/arxiv/2608.01899" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2608.01899</a></div>

## ⚡ SpatioLM: Towards General Physical Spatial Intelligence in Vision-Language Models

<p class="paper-card-summary">真方法：参数高效 SpatioLM 不加 3D 先验/外部编码器提升 VLM 空间智能，15 个数据集 SOTA，可平滑接 VLA 做操作。</p>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2608.01761" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2608.01761</a><a href="https://hjfy.top/arxiv/2608.01761" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2608.01761</a></div>

## ⚡ DecoupleGS: Interactive 3D Gaussian Splatting for End-to-End Autonomous Driving Testing

<p class="paper-card-summary">真方法（仿真）：解耦 3DGS 把场景拆成静态背景+可操控动态智能体，配压缩/配准/重光照三模块，为 E2E 自动驾驶提供闭环传感器仿真测试平台。</p>

<figure class="paper-card-figure"><img src="/images/blog/paper-2608.01761.png" alt="DecoupleGS: Interactive 3D Gaussian Splatting for End-to-End Autonomous Driving Testing" loading="lazy" /></figure>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2608.02150" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2608.02150</a><a href="https://hjfy.top/arxiv/2608.02150" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2608.02150</a></div>

## ⚡ PhyCheck: Fine-Grained Evidence-Grounded Dataset for Physical Law Understanding in Video-LLMs

<p class="paper-card-summary">数据贡献：细粒度物理规律理解数据集，粗/细粒度 + 因果诊断子集，揭示 Video-LLM 只会识别表面不一致、无法结合因果条件。</p>

<figure class="paper-card-figure"><img src="/images/blog/paper-2608.02150.png" alt="PhyCheck: Fine-Grained Evidence-Grounded Dataset for Physical Law Understanding in Video-LLMs" loading="lazy" /></figure>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2608.01805" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2608.01805</a><a href="https://hjfy.top/arxiv/2608.01805" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2608.01805</a></div>

## ⚡ CockpitHAT: Dependency-Graph-Driven Hierarchical Attribution for Embodied Multi-Agent Cockpits

<p class="paper-card-summary">方法+基准：依赖图驱动分层归因，多通道证据 + ISO 26262 ASIL 安全加权，定位座舱多智能体系统"正确性崩塌"的过程级故障。</p>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2608.01802" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2608.01802</a><a href="https://hjfy.top/arxiv/2608.01802" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2608.01802</a></div>

## ⚡ CoNav-UAV: Cooperative Dual-Altitude Aerial Navigation via Stackelberg Learning

<p class="paper-card-summary">真方法：把双高度 UAV 视觉语言导航建模为 Stackelberg 博弈，leader 记忆式 ICL 推理 + follower DAgger 蒸馏，成功率高 30.8 点。</p>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2608.02197" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2608.02197</a><a href="https://hjfy.top/arxiv/2608.02197" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2608.02197</a></div>

## ⚡ Look Where It Matters: Adaptive Visual Refinement for Vision-Language-Action Models

<p class="paper-card-summary">真方法：VLA 视觉编码器插入 register tokens 修复 attention 伪影，配不确定性门控局部高分辨率精化，LIBERO 94.2%→98.4%。</p>

<figure class="paper-card-figure"><img src="/images/blog/paper-2608.02197.png" alt="Look Where It Matters: Adaptive Visual Refinement for Vision-Language-Action Models" loading="lazy" /></figure>

</div>

---
*自动生成于 2026-08-04 · 基于 arXiv Daily Digest*

---
title: '2026-07-03 Paper Reading'
description: 今日 arXiv 论文速读：7 篇入选 shortlist，自动驾驶 VLA、3D 空间推理、可控世界模型本期最亮眼。
date: '2026-07-03'
tags:
  - paper reading
  - arXiv
category: Research
comments: true
draft: false
---

今日从 arXiv 订阅 19 篇中筛选 7 篇。主线：VLA+自动驾驶 / 3D 空间推理 / 可控世界模拟器。

<div class="paper-card">

<div class="paper-links paper-links-inline">
<a href="https://arxiv.org/abs/2607.01658" target="_blank" rel="noreferrer"><span>Arxiv</span>2607.01658</a>
<a href="https://hjfy.top/arxiv/2607.01658" target="_blank" rel="noreferrer"><span>翻译</span>2607.01658</a>
</div>

## ⚡ Teaching Vision-Language-Action Models What to See and Where to Look

<p class="paper-card-summary">DriveTeach-VLA — 显式教 VLA 模型"看什么、往哪看"进行轨迹预测。DVD 注入驾驶感知先验，2D-TGP 提供空间轨迹引导，GRPO 强化规划推理。NAVSIM 和 nuScenes SOTA。真方法，本日最值得读。</p>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline">
<a href="https://arxiv.org/abs/2607.01784" target="_blank" rel="noreferrer"><span>Arxiv</span>2607.01784</a>
<a href="https://hjfy.top/arxiv/2607.01784" target="_blank" rel="noreferrer"><span>翻译</span>2607.01784</a>
</div>

## ⚡ SpaceEra++: A Unified Framework Towards 3D Spatial Reasoning in Video

<p class="paper-card-summary">视频 3D 空间推理统一框架 (NeurIPS 2025 Spotlight 扩展)。ScenePick 帧采样 + SpaceAlign 成对约束对齐。对 trajectory、scene understanding 有直接价值。</p>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline">
<a href="https://arxiv.org/abs/2607.02517" target="_blank" rel="noreferrer"><span>Arxiv</span>2607.02517</a>
<a href="https://hjfy.top/arxiv/2607.02517" target="_blank" rel="noreferrer"><span>翻译</span>2607.02517</a>
</div>

## ⚡ WorldDirector: Building Controllable World Simulators with Persistent Dynamic Memory

<p class="paper-card-summary">可控世界模拟器实现"持久动态对象记忆"——解耦语义运动编排与视觉生成，对象离开视野后再次出现仍保持一致。对自动驾驶仿真、embodied AI 训练有直接应用价值。</p>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline">
<a href="https://arxiv.org/abs/2607.01531" target="_blank" rel="noreferrer"><span>Arxiv</span>2607.01531</a>
<a href="https://hjfy.top/arxiv/2607.01531" target="_blank" rel="noreferrer"><span>翻译</span>2607.01531</a>
</div>

## ⚡ OPINE-World: Programmatic World Modeling with Ontology-error-Prioritized Interactive Exploration

<p class="paper-card-summary">LLM agent 在线学习程序化世界模型。双 agent 假说-验证循环 + 贝叶斯本体论错误探索驱动。ARC-AGI-3 上 20/25 游戏零训练启动，方法可迁移至自动驾驶 world model 表达。</p>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline">
<a href="https://arxiv.org/abs/2607.02490" target="_blank" rel="noreferrer"><span>Arxiv</span>2607.02490</a>
<a href="https://hjfy.top/arxiv/2607.02490" target="_blank" rel="noreferrer"><span>翻译</span>2607.02490</a>
</div>

## ⚡ Visually Grounded Self-Reflection for Vision-Language Models via Reinforcement Learning

<p class="paper-card-summary">VRRL: 用 RL 训练 VLM 视觉接地自反思。随机遮蔽轨迹前缀 + 经验回放 buffered roll-ins 让模型学会从错误中恢复。在表格/图表/空间导航任务上显著改善 OOD 准确率。</p>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline">
<a href="https://arxiv.org/abs/2607.01370" target="_blank" rel="noreferrer"><span>Arxiv</span>2607.01370</a>
<a href="https://hjfy.top/arxiv/2607.01370" target="_blank" rel="noreferrer"><span>翻译</span>2607.01370</a>
</div>

## ⚡ MapDreamer: Aerial Imagery Conditioned Latent Diffusion for Lane-Level Map Generation

<p class="paper-card-summary">从单张航拍图像隐空间扩散生成车道级矢量地图 + 拓扑结构。车道基数模块 + ghost latents 处理可变车道数，滑窗图聚合拼接城市级地图。Bosch/UTN 出品，实用型 AD 基础设施工作。</p>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline">
<a href="https://arxiv.org/abs/2607.02083" target="_blank" rel="noreferrer"><span>Arxiv</span>2607.02083</a>
<a href="https://hjfy.top/arxiv/2607.02083" target="_blank" rel="noreferrer"><span>翻译</span>2607.02083</a>
</div>

## ⚡ DeepGaze3.5-VL: Modeling Scanpaths via Autoregressive Token Prediction

<p class="paper-card-summary">将人类视觉扫描路径预测建模为离散序列预测，复用 VLM 预训练。MIT1003 上 IG 2.18 bits，比 DeepGaze III 提升 46%。与驾驶感知注意力有潜在连接。</p>

</div>

---
*自动生成于 2026-07-03 · 基于 arXiv Daily Digest*

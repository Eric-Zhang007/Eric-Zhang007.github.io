---
title: 2026-05-08 Paper Reading
description: 今日 arXiv 论文速读：8 篇入选 shortlist，聚焦世界模型、视频推理、具身智能、自动驾驶。
date: '2026-05-08'
tags:
- paper reading
- arXiv
category: Research
comments: true
draft: false
---

今日从 arXiv 订阅中筛选 8 篇论文，覆盖 **世界模型**、**视频推理**、**具身智能**、**自动驾驶安全** 等方向。

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2605.06298" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2605.06298</a><a href="https://hjfy.top/arxiv/2605.06298" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2605.06298</a></div>

## ⚡ Render, Don't Decode: Weight-Space World Models with Latent Structural Disentanglement

<p class="paper-card-summary">【世界模型全新范式】将世界模型构建在 INR 权重空间上，A/B 解耦实现内容-运动自然分离，解析渲染消除解码器瓶颈，单卡 40M 参数，支持零样本 ×32 超分。</p>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2605.05997" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2605.05997</a><a href="https://hjfy.top/arxiv/2605.05997" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2605.05997</a></div>

## ⚡ 4DThinker: Thinking with 4D Imagery for Dynamic Spatial Understanding

<p class="paper-card-summary">【视频推理 SOTA】首个让 VLM 通过动态 4D 潜在心理意象进行空间推理，DIFT+4DRL 管线，DSR-Bench 从 28.0 提升至 62.0，超越 GPT-5 和 Gemini-2.5-Pro。</p>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2605.05407" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2605.05407</a><a href="https://hjfy.top/arxiv/2605.05407" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2605.05407</a></div>

## ⚡ PRISM: Perception Reasoning Interleaved for Sequential Decision Making

<p class="paper-card-summary">【具身智能闭环感知】LLM 主动向 VLM 追问缺失关键信息，合成紧凑任务驱动场景描述，ALFWorld 80% 成功率 / R2R SR 46%，无需人工预设问答。</p>

<figure class="paper-card-figure"><img src="/images/blog/paper-2605.05407.png" alt="PRISM: Perception Reasoning Interleaved for Sequential Decision Making" loading="lazy" /></figure>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2605.06388" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2605.06388</a><a href="https://hjfy.top/arxiv/2605.06388" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2605.06388</a></div>

## ⚡ Reconstruction or Semantics? What Makes a Latent Space Useful for Robotic World Models

<p class="paper-card-summary">【世界模型实证分析】系统比较 6 种重建型 vs 语义型编码器，V-JEPA 2.1 策略成功率 0.344 远高于 VAE 的 0.169，为潜空间选择提供明确设计指引。</p>

<figure class="paper-card-figure"><img src="/images/blog/paper-2605.06388.png" alt="Reconstruction or Semantics? What Makes a Latent Space Useful for Robotic World Models" loading="lazy" /></figure>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2605.06192" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2605.06192</a><a href="https://hjfy.top/arxiv/2605.06192" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2605.06192</a></div>

## ⚡ EA-WM: Event-Aware Generative World Model with Structured Kinematic-to-Visual Action Fields

<p class="paper-card-summary">【机器人世界模型】将关节动作投影到图像域消除域偏差，WorldArena P3CScore 76.60，超 CogVideoX 5.52 分，六项指标五项最优。</p>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2605.06264" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2605.06264</a><a href="https://hjfy.top/arxiv/2605.06264" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2605.06264</a></div>

## ⚡ Can Attribution Predict Risk? From Multi-View Attribution to Planning Risk Signals in End-to-End Autonomous Driving

<p class="paper-card-summary">【自动驾驶碰撞预测】层级归因框架从六视角定位风险区域，归因熵/空间方差/Gini 系数联合预测碰撞 AUROC 0.77，首次将归因从解释提升为预测信号。</p>

<figure class="paper-card-figure"><img src="/images/blog/paper-2605.06264.png" alt="Can Attribution Predict Risk? From Multi-View Attribution to Planning Risk Signals in End-to-End Autonomous Driving" loading="lazy" /></figure>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2605.05714" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2605.05714</a><a href="https://hjfy.top/arxiv/2605.05714" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2605.05714</a></div>

## ⚡ TriRelVLA: Triadic Relational Structure for Generalizable Embodied Manipulation

<p class="paper-card-summary">【具身操控泛化】显式构建物体-手-任务三元关系图，用"学关系"替代"记外观"，跨场景泛化 79%（隐式 41%）、跨物体 81%（隐式 32%）。</p>

<figure class="paper-card-figure"><img src="/images/blog/paper-2605.05714.png" alt="TriRelVLA: Triadic Relational Structure for Generalizable Embodied Manipulation" loading="lazy" /></figure>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2605.05951" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2605.05951</a><a href="https://hjfy.top/arxiv/2605.05951" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2605.05951</a></div>

## ⚡ HaM-World: Soft-Hamiltonian World Models with Selective Memory for Planning

<p class="paper-card-summary">【物理驱动世界模型】将潜变量分解为哈密顿规范坐标对 (q,p)，Mamba 选择性记忆补偿可观性，DMC 连续控制奖励 AUC 117.9（提升 9.5%）。</p>

</div>

---
*自动生成于 2026-05-08 · 基于 arXiv Daily Digest*

---
title: 2026-05-09 Paper Reading
description: 今日 arXiv 论文速读：10 篇入选 shortlist — 世界模型、自动驾驶风险预测、视频推理。
date: '2026-05-09'
tags:
- paper reading
- arXiv
category: Research
comments: true
draft: false
---

今日从 arXiv 订阅中筛选 10 篇论文，覆盖世界模型、自动驾驶风险预测、视频推理、具身智能等方向。

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2605.06298" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2605.06298</a><a href="https://hjfy.top/arxiv/2605.06298" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2605.06298</a></div>

## ⭐ 优先1 Render, Don't Decode: Weight-Space World Models with Latent Structural Disentanglement (NOVA)

<p class="paper-card-summary">真正方法创新：用INR权重作为world model状态表示，消除解码器瓶颈，零样本超分+场景解耦。40M参数消费级GPU即可运行，有实操价值。</p>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2605.06264" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2605.06264</a><a href="https://hjfy.top/arxiv/2605.06264" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2605.06264</a></div>

## ⭐ 优先2 Can Attribution Predict Risk? From Multi-View Attribution to Planning Risk Signals in End-to-End Autonomous Driving

<p class="paper-card-summary">直击主线：用attribution做端到端自动驾驶碰撞风险预测。Spearman 0.30+AUROC 0.77，跨场景泛化稳定，实用性高。</p>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2605.06192" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2605.06192</a><a href="https://hjfy.top/arxiv/2605.06192" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2605.06192</a></div>

## ⭐ 优先3 EA-WM: Event-Aware Generative World Model with Structured Kinematic-to-Visual Action Fields

<p class="paper-card-summary">真方法：将运动学投影到视觉空间做world model，保留几何精确性。WorldArena SOTA，闭环了控制与感知。</p>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2605.05997" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2605.05997</a><a href="https://hjfy.top/arxiv/2605.05997" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2605.05997</a></div>

##  4DThinker: Thinking with 4D Imagery for Dynamic Spatial Understanding

<p class="paper-card-summary">视频理解+推理：让VLM在隐空间内部模拟场景演化（4D mental imagery），DIFT+4DRL训练框架，多个动态空间推理benchmark SOTA。</p>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2605.06388" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2605.06388</a><a href="https://hjfy.top/arxiv/2605.06388" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2605.06388</a></div>

##  Reconstruction or Semantics? What Makes a Latent Space Useful for Robotic World Models

<p class="paper-card-summary">好分析：系统性对比reconstruction vs semantic latent space对robot world model的影响。结论：语义编码器（V-JEPA）在策略层面全面优于重建编码器。</p>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2605.05407" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2605.05407</a><a href="https://hjfy.top/arxiv/2605.05407" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2605.05407</a></div>

##  PRISM: Perception Reasoning Interleaved for Sequential Decision Making

<p class="paper-card-summary">真方法：VLM+LLM通过DQA（动态问答）pipeline闭环交互，LLM主动提问VLM获取目标导向信息。ALFWorld和R2R上SOTA。</p>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2605.06094" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2605.06094</a><a href="https://hjfy.top/arxiv/2605.06094" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2605.06094</a></div>

##  VISD: Enhancing Video Reasoning via Structured Self-Distillation

<p class="paper-card-summary">视频推理+训练效率：结构化自蒸馏框架，将推理质量分解为正确答案、逻辑一致性和时空定位多维指标，2x更快收敛。</p>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2605.05714" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2605.05714</a><a href="https://hjfy.top/arxiv/2605.05714" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2605.05714</a></div>

##  TriRelVLA: Triadic Relational Structure for Generalizable Embodied Manipulation

<p class="paper-card-summary">VLA泛化核心问题：用object-hand-task三元关系结构替代隐式视觉表示，跨场景/跨物体/跨任务泛化均显著提升。</p>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2605.06522" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2605.06522</a><a href="https://hjfy.top/arxiv/2605.06522" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2605.06522</a></div>

##  Agentic AIs Are the Missing Paradigm for Out-of-Distribution Generalization in Foundation Models

<p class="paper-card-summary">理论框架：论证agentic AI是foundation model OOD泛化的missing paradigm，值得关注思想层面。</p>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2605.05951" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2605.05951</a><a href="https://hjfy.top/arxiv/2605.05951" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2605.05951</a></div>

##  HaM-World: Soft-Hamiltonian World Models with Selective Memory for Planning

<p class="paper-card-summary">world model规划：用哈密顿动力学做可微world model，selective memory解决长程rollout不稳定问题。</p>

</div>

---
*自动生成于 2026-05-09 · 基于 arXiv Daily Digest*

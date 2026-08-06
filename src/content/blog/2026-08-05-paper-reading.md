---
title: 2026-08-05 Paper Reading
description: 今日 arXiv 论文速读：10 篇入选 shortlist。
date: '2026-08-05'
tags:
- paper reading
- arXiv
category: Research
comments: true
draft: false
---

今日从 arXiv 订阅中筛选 10 篇论文。

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2608.03084" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2608.03084</a><a href="https://hjfy.top/arxiv/2608.03084" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2608.03084</a></div>

## ⚡ SUV: Future Scene Understanding as Video Generation for End-to-End Driving

<p class="paper-card-summary">真方法：端到端驾驶把未来场景理解统一为视频生成（外观/语义/相对深度/实例动态四路视频流共享一个视频专家，无任务特定 head），joint video-action attention 让动作专家读所有未来流生成轨迹。</p>

<figure class="paper-card-figure"><img src="/images/blog/paper-2608.03084.png" alt="SUV: Future Scene Understanding as Video Generation for End-to-End Driving" loading="lazy" /></figure>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2608.03244" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2608.03244</a><a href="https://hjfy.top/arxiv/2608.03244" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2608.03244</a></div>

## ⚡ UniNav: A Unified World-Action Diffusion Model for Visual Navigation

<p class="paper-card-summary">真方法：把导航策略与世界模型统一进单个扩散过程，联合去噪视觉 token 与 waypoint token，几何感知相机 token 强化空间接地，视频-only 数据也能训练；0.1s 延迟版本不掉精度。</p>

<figure class="paper-card-figure"><img src="/images/blog/paper-2608.03244.png" alt="UniNav: A Unified World-Action Diffusion Model for Visual Navigation" loading="lazy" /></figure>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2608.02713" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2608.02713</a><a href="https://hjfy.top/arxiv/2608.02713" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2608.02713</a></div>

## ⚡ Quo Vadis, World Modeling? Towards Interactive World Proxies for Continually Improving Agents

<p class="paper-card-summary">综述/立场：把世界模型重新定义为 Agent-Centric Interactive World Proxies，按反馈模态分 6 类（dynamics/spatial/execution/memory/skill/reward-verification），按赋能层次分 3 级（推理引导/训练优化/共进化）。</p>

<figure class="paper-card-figure"><img src="/images/blog/paper-2608.02713.png" alt="Quo Vadis, World Modeling? Towards Interactive World Proxies for Continually Improving Agents" loading="lazy" /></figure>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2608.02953" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2608.02953</a><a href="https://hjfy.top/arxiv/2608.02953" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2608.02953</a></div>

## ⚡ RealWeather: Realistic and Scene-Faithful Weather Translation with Driving World Models

<p class="paper-card-summary">真方法（数据）：驾驶世界模型做双向场景保真天气转换（晴→雨雪 / 雨雪→晴），Progressive Realism Bootstrapping 直接从真实视频学天气动力学，含雨刮、轮胎溅水等动态交互。</p>

<figure class="paper-card-figure"><img src="/images/blog/paper-2608.02953.png" alt="RealWeather: Realistic and Scene-Faithful Weather Translation with Driving World Models" loading="lazy" /></figure>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2608.03918" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2608.03918</a><a href="https://hjfy.top/arxiv/2608.03918" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2608.03918</a></div>

## ⚡ When and Where to Look: Adaptive Visual Evidence Scheduling for Efficient Long Video Understanding

<p class="paper-card-summary">真方法（效率）：EcoFrame 训练-free 自适应视觉证据调度——熵门控决定何时加帧预算，注意力引导决定去哪搜证据；Qwen2.5-VL 上 64.4 平均分超 BOLT，比 agent 式调度快 13.5×。</p>

<figure class="paper-card-figure"><img src="/images/blog/paper-2608.03918.png" alt="When and Where to Look: Adaptive Visual Evidence Scheduling for Efficient Long Video Understanding" loading="lazy" /></figure>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2608.03207" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2608.03207</a><a href="https://hjfy.top/arxiv/2608.03207" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2608.03207</a></div>

## ⚡ DRIFT: Derailing Denoising Trajectories of Flow-Matching VLAs with Adversarial Patch Attack

<p class="paper-card-summary">真方法（攻击）：证明 flow-matching VLA（π0/π0.5）的对抗鲁棒性报告是假象——只攻击去噪第一步最强且更便宜（输入空间梯度冲突），手爪上一小块 patch 即可击穿 4 个 LIBERO suite 几乎所有任务。</p>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2608.03119" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2608.03119</a><a href="https://hjfy.top/arxiv/2608.03119" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2608.03119</a></div>

## ⚡ Don't Peek at the Answer: Outcome-Masked Group Relative Policy Optimization for Label-Free RLVR

<p class="paper-card-summary">真方法：label-free RLVR 中"同一答案级信号既做奖励又驱动 token 级优化"会导致 collapse（模型直接强化答案 token 而非推理）；OM-GRPO 用 answer span 梯度掩码 + 软共识奖励解耦二者，配 Contrast-Augmented Reward 逼近 GT 监督。</p>

<figure class="paper-card-figure"><img src="/images/blog/paper-2608.03119.png" alt="Don't Peek at the Answer: Outcome-Masked Group Relative Policy Optimization for Label-Free RLVR" loading="lazy" /></figure>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2608.03979" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2608.03979</a><a href="https://hjfy.top/arxiv/2608.03979" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2608.03979</a></div>

## ⚡ Video-DeepResearch: Towards the Next-Generation Multimodal Deepresearch Agent

<p class="paper-card-summary">系统报告：deep research agent 从静态图扩展到连续视频流，指出当前模型两大瓶颈（模态偏置：绕过视觉工具走文本搜索；参数知识泄漏：靠记忆而非工具），decoupled perception-exploration + 两阶段训练（SFT→GRPO）。</p>

<figure class="paper-card-figure"><img src="/images/blog/paper-2608.03979.png" alt="Video-DeepResearch: Towards the Next-Generation Multimodal Deepresearch Agent" loading="lazy" /></figure>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2608.03779" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2608.03779</a><a href="https://hjfy.top/arxiv/2608.03779" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2608.03779</a></div>

## ⚡ AgenticVAU: Multi-Agent Explore-Verify Reasoning for Video Anomaly Understanding

<p class="paper-card-summary">真方法：训练-free 四智能体 explore-verify 框架做视频异常理解（视觉规则构建/搜索规划/视频观察/决策），anchor registry 共享证据记忆，ECVA/UCF-Crime/MSAD 超零样本与 RL 基线。</p>

<figure class="paper-card-figure"><img src="/images/blog/paper-2608.03779.png" alt="AgenticVAU: Multi-Agent Explore-Verify Reasoning for Video Anomaly Understanding" loading="lazy" /></figure>

</div>

<div class="paper-card">

<div class="paper-links paper-links-inline"><a href="https://arxiv.org/abs/2608.03330" target="_blank" rel="noreferrer"><span>Arxiv ID</span>2608.03330</a><a href="https://hjfy.top/arxiv/2608.03330" target="_blank" rel="noreferrer"><span>幻觉翻译</span>2608.03330</a></div>

## ⚡ Long-term Traffic Scene Prediction via Polynomial Representations in Autonomous Driving

<p class="paper-card-summary">学位论文：多项式表示（轨迹+地图几何）做长期交通场景预测，近 SOTA 精度 + 更强分布偏移泛化；扩散框架生成多智能体场景更合理；Argoverse 2/Waymo Open 验证，212 页。</p>

<figure class="paper-card-figure"><img src="/images/blog/paper-2608.03330.png" alt="Long-term Traffic Scene Prediction via Polynomial Representations in Autonomous Driving" loading="lazy" /></figure>

</div>

---
*自动生成于 2026-08-05 · 基于 arXiv Daily Digest*

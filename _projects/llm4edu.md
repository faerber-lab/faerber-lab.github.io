---
layout: page
title: LLM4Edu
description: Learning Large Language Models on Graphs for Education
img: assets/img/Logo_LLM4EDU.jpg
importance: 2
category: work
related_publications: true
---

Educational platforms generate rich interaction data, but adapting large language models to real educational settings is still expensive, opaque, and often hard to justify to stakeholders. LLM4Edu develops graph-based methods to build education-specific benchmarks and to fine-tune LLMs efficiently and transparently, in collaboration with Macmillan Learning and Holtzbrinck Publishing Group.

## What we do

We pursue three tightly connected research directions:

1. **Data and benchmarks**  
   We turn educational interaction data into structured, graph-based representations (learners, content, activities, dependencies). Based on this, we create a benchmark dataset that enables systematic evaluation of personalization in educational scenarios.

2. **Efficient and interpretable adaptation**  
   We develop parameter-efficient fine-tuning methods that keep the core LLM largely frozen and train a lightweight Graph Neural Network (GNN) for adaptation. The goal is not just to reduce training cost but also to make the adaptation mechanism more interpretable than standard PEFT pipelines. Parameter-efficient fine-tuning is increasingly recognized as essential for adapting large models to specific domains under practical resource constraints. 

3. **Evaluation in realistic educational workflows**  
   We benchmark LLMs and graph-based variants, analyze what matters for educational tasks, and validate the approach in settings that reflect real learning and teaching processes.

## Why it matters

AI can **enhance personalized learning** by adapting content and pacing to individual needs, improving engagement and outcomes beyond traditional one-size-fits-all approaches.
However, the technical challenges of adapting large models to real educational data limit adoption in practice. LLM4Edu targets this bottleneck by combining efficiency and transparency:

- **Scalable personalization:** By reducing the need for full re-training, our methods make it feasible to tailor models to diverse curricula and learner profiles without prohibitive compute costs.
- **Transparent adaptation:** Educators and practitioners need to understand *why* a model behaves as it does. A graph perspective helps reveal what structures in the data drive model adaptation.
- **Benchmarking rooted in educational reality:** Standard NLP benchmarks do not reflect the structural dependencies of learning data. Our dataset enables evaluation that aligns with real teaching and learning needs.
- **Responsible deployment:** Clear indicators of adaptation and systematic evaluation support more reliable and accountable AI in education.

## Get involved

**Students:** Thesis / HiWi opportunities are available; please contact *Shuzhou Yuan* (project lead) or see [/student_thesis/](/student_thesis/).  
**Media:** For expert interviews on AI in education, LLMs, and trustworthy AI, see [/media/](/media/).

---

**Lead:** Shuzhou Yuan  
**Academic Advisor:** Michael Färber  
**Partners:** Macmillan Learning; Holtzbrinck Publishing Group  
**Start:** 01/2025 · **Duration:** 17 months

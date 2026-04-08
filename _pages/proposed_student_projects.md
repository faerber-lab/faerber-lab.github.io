---
layout: page
permalink: /proposed-student-projects/
title: Proposed Student Projects
description: Research topics for internships, research projects, and student theses in the research group of Michael Färber.
nav: false
nav_order: 6
og_image: /assets/press/Michael_Faerber_2024_700p.jpg
search: true
---

This page lists selected research topics in our group, primarily for the courses provided in the summer semester 2026 (e.g., *Forschungsprojekt*, *Komplexpraktikum*, *Teamprojekt*).

Some of these topics may also be extended into **Bachelor's** or **Master's theses**. For further thesis topics, see **[/student_thesis/](/student_thesis/)**. In practice, if you are strongly interested in a topic — whether listed here or there — feel free to contact the **corresponding supervisor directly** (see email addresses below).

<div style="border-left: 3px solid #2a6592; padding: 12px 16px; margin: 18px 0 22px 0; background:#f8fbff;">
  <strong>Application period (Summer Semester 2026).</strong><br>
  <strong>Published:</strong> April 7, 2026<br>
  <strong>Deadline:</strong> April 15, 2026<br>
  Applications are reviewed on a rolling basis — <strong>the earlier, the better</strong>.<br><br>
  Please include your <strong>CV</strong>, <strong>current transcript of records</strong>, and a short note on the topic(s) you are applying for, your background, and your motivation. As these projects are research-oriented and supervision capacity is limited, we will give preference to students with a strong academic record, relevant skills, and a convincing fit to the topic.<br><br>
  <strong>Note:</strong> Additional topics will be added in the coming days. Some topics may be filled early.
</div>

How we work: **[/teaching/](/teaching/)**, **[/how-we-work/](/how-we-work/)**, **[/faq/](/faq/)**

---

# Proposed Project Descriptions

---

## Automatic Tool Discovery and Registration Mechanisms

### Supervisor

A F M Mohimenul Joaa <a_f_m_mohimenul.joaa@mailbox.tu-dresden.de>

### Description

LLM-based agents can only use the tools they are given upfront. When a task requires a capability that no existing tool covers, the agent simply fails. Recent work has started tackling parts of this problem: LATM (2023) showed LLMs can write reusable Python tools, ToolGen (2024) embedded tools as tokens so retrieval and calling become a single generation step, ToolFactory (2025) automated turning messy API docs into usable tools, ToolACE-R (2025) added self-refinement so models can fix their own tool calls, and OpenAgent (2025) let agents pull in tools from GitHub on the fly. Each of these solves one piece, but none addresses the full lifecycle — detecting a gap, finding or building the right tool, checking that it works, and making it available for reuse.

This project brings these ideas together into a single pipeline with four stages: gap detection (recognizing when the current toolset falls short), tool synthesis (choosing whether to generate code, wrap an API, or adapt an existing repository), validation (testing the new tool in a sandbox before it can be used), and registration (storing it with metadata for future retrieval). We build a benchmark of tasks that require the agent to acquire new tools at varying difficulty levels, and evaluate the pipeline on success rate, synthesis reliability, and cost.

Through experiments and ablations, this work aims to clarify when each synthesis strategy works best, what validation is actually needed to keep things safe, and how to design a tool registry that supports reuse across tasks and sessions.

### References

1. LATM (2023): https://arxiv.org/abs/2305.17126  
2. ToolGen (2024): https://arxiv.org/abs/2410.03439  
3. ToolFactory (2025): https://arxiv.org/abs/2501.16945  
4. ToolACE-R (2025): https://arxiv.org/abs/2504.01400  
5. OpenAgent (2025): https://aclanthology.org/2025.acl-long.845/

---

## Phonetic-Aware Letter-Based Next Word Prediction for Transliterated South Asian Languages

### Supervisor

A F M Mohimenul Joaa <a_f_m_mohimenul.joaa@mailbox.tu-dresden.de>

### Problem


Over 1.1 billion South Asian users type their native languages using English keyboards (transliteration), but current autocomplete systems fail them. Type "ami kh" in Bangla — no suggestion until you finish the word. Sometimes the same word has multiple valid spellings ("shiksha", "siksha", "shikkha"), yet suggestion systems treat these as different words. Users naturally mix languages ("ami lunch korbo" mixing Bangla and English), confusing single-language models. Existing solutions require cloud connectivity, drain batteries, and raise privacy concerns.

### Solution

We propose a single, unified edge-deployed model supporting Hindi-English (600M), Urdu-English (230M), Bangla-English (260M), and Tamil-English (75M speakers). The model runs entirely on-device — no cloud, no internet, complete privacy.

### Methodology

Unlike traditional token-based systems, we employ letter-based training where each keystroke generates predictions. Every character typed produces a sample: `{context: "ami(I) ", prefix: "kh", targets: ["khabar"(food), "khai"(eat), "khabo"(will eat)], scores: [1.0, 0.87, 0.82]}`. The system can use weighted Levenshtein distance across phonetic sound, consonant patterns, and edit distance, treating spelling variations as phonetically equivalent. Training data (100k+ sentences per language using only Latin scripts) incorporates 30% deliberate misspelling injection for robustness. Outputs Top-K descending, context-aware ranking: "ami kh" in a food context ranks "khabar"(food) higher than "khub(very)". Running AI on phones faces hardware constraints — limited memory, battery & processing. Our advantage: we only predict one word or complete the current sentence, not generate paragraphs. This narrow scope makes edge deployment realistic with model quantization and pruning.

We can also extend the model's capability by enabling intelligent text commands, all running on-device:

- `?fix` – Fix grammar/spelling: "i dont no" → "I don't know."
- `?formal` – Professional tone: "hey send me that" → "Could you please share that?"
- `?shorten` – Condense: "I will not be able to attend tomorrow" → "I can't attend tomorrow."
- `?translate:es` – Translate: "Hello" → "Hola"
- `?emoji`, `?expand`, `?reply`, `?undo` – And more

### Impact

For 1.1B+ speakers, this means typing naturally in transliterated text with smart suggestions that work offline, respect privacy, and handle language-mixing seamlessly. The letter-based approach removes tokenization barriers, while the command system extends utility beyond autocomplete.

### Current Progress

We have successfully collected and curated datasets comprising 102,069 Bangla transliterated sentences and 70,386 English sentences from diverse sources. A phonetic target generation system has been implemented for Bangla transliteration. The training data generation pipeline is also operational for Bangla transliteration and English sentences, producing character-level training samples with `{context, prefix, cursor_position, target_words, target_scores}` structure.

### References

1. T-Board Paper: https://ieeexplore.ieee.org/abstract/document/11022532
2. T-Board Web Implementation: https://infai.xyz/td-search
3. T-Board Android Keyboard: https://play.google.com/store/apps/details?id=xyz.infai.tboard

---

## Complementing Autoregressive Models with Diffusion for Structured Generation Tasks

### Supervisor

A F M Mohimenul Joaa <a_f_m_mohimenul.joaa@mailbox.tu-dresden.de>

### Description

Autoregressive (AR) language models dominate text generation due to their strong sequential modeling capabilities, yet they often struggle with global consistency and structured output generation. Recent research shows that diffusion-based language models enable parallel generation and iterative refinement, offering improved controllability and efficiency, though they typically lag behind AR models in accuracy. This suggests that diffusion models may be better suited for structured and constraint-driven tasks rather than general text generation.

This project aims to investigate whether diffusion models can complement AR models in structured generation tasks, focusing on code snippet generation in CodeAct-style systems. We propose using diffusion models to generate or refine structured code outputs, while AR models handle general language generation. Under equal training conditions, we evaluate whether diffusion models can match or outperform AR models in producing syntactically valid, consistent, and semantically correct code.

In addition, this work explores how both paradigms can be combined effectively by leveraging their respective strengths — sequential reasoning from AR models and global refinement from diffusion models — and dynamically selecting the appropriate model based on task requirements. Through controlled experiments, this study aims to provide a clearer understanding of when and how diffusion models can serve as a practical complement to autoregressive approaches in structured generation tasks.

### References

1. Planner and Executor: https://arxiv.org/abs/2510.15244
2. CodeFusion: https://aclanthology.org/2023.emnlp-main.716/
3. CodeAct: https://arxiv.org/abs/2402.01030
4. SEDD: https://arxiv.org/abs/2310.16834
5. Block Diffusion: https://arxiv.org/abs/2507.07050

---

## KGNode v2: Self-Tuning Agentic Framework for Universal Knowledge Graph Question Answering

### Supervisor

A F M Mohimenul Joaa <a_f_m_mohimenul.joaa@mailbox.tu-dresden.de>

### Description

Large language models need factual grounding from knowledge graphs, but existing systems either require expensive per-KG training or lack query-awareness. KGNode (currently under review) introduced a training-free framework achieving 60–72% accuracy on DBLP-QuAD and QALD-10. However, the system has critical limitations: it blindly executes all pipeline stages even when early steps fail (wasting computation), requires manual tuning of 12+ hyperparameters for each new domain, and uses static prompts that aren't systematically optimized. This suggests that while the core algorithm is sound, the system needs intelligent orchestration and automatic optimization to become production-ready.

This project proposes KGNode v2, extending the submitted paper by transforming the pipeline into a self-optimizing agentic system. We introduce three key innovations: (1) LangGraph-based agentic workflow with quality gates that halt execution early when intermediate stages produce low-quality results, preventing wasted computation; (2) DSPy-driven prompt optimization that automatically improves prompts for entity extraction, template generation, and SPARQL synthesis without manual engineering; (3) Hyperparameter adaptation that dynamically selects optimal parameters based on query characteristics and KG properties, eliminating manual tuning across domains. Additionally, we plan to package the system as a Model Context Protocol (MCP) server, enabling any LLM client to query arbitrary knowledge graphs through standardized tools. We evaluate on DBLP-QuAD and QALD-10, comparing v2 against baseline v1 across accuracy, execution time, and cross-domain transferability. Ablation studies will isolate each component's impact. We expect 5–7% accuracy improvements, 30–40% faster execution through early stopping, and better cross-domain transfer via automatic adaptation.

---

## Mechanistic Analysis and Control of Persona Representations in LLM Agents

### Supervisor

Shuzhou Yuan <shuzhou.yuan@tu-dresden.de>

### Description

This project investigates how different persona traits (e.g., politeness, formality, or toxicity) are represented inside large language models and how these representations can be analyzed and controlled in an agent setting. The student will generate or curate prompts with varying personas, extract internal activations from a transformer model, and apply interpretability techniques such as probing, clustering, and activation steering to identify components (e.g., directions, neurons, or attention heads) associated with specific traits. The project further explores whether these representations can be manipulated to reliably steer the persona of an LLM-based agent across multi-turn interactions, providing insights into both the structure and controllability of persona in modern language models.

---

## Advanced Multimodal Learning for Electronic Health Records: Toward Comprehensive and Interpretable Clinical Intelligence

### Supervisor

Zhan Qu <zhan.qu@tu-dresden.de>

### Description

This thesis invites you to work at the intersection of machine learning, multimodal AI, and digital health. Electronic Health Records (EHRs) increasingly combine several data types: structured tabular data (diagnoses, procedures, lab values), unstructured clinical text (reports, summaries), medical images (e.g., X-rays), and clinical time series (vital signs, monitoring data). Most current models focus on a single modality – but real clinical understanding requires joint reasoning over all of them.

In this thesis, you will explore how advanced multimodal learning can be used to build unified, interpretable representations of patients from heterogeneous EHR data. The work will be supervised at TU Dresden (AI / ML), with the possibility of exchange with clinical partners. The aim is a methodologically solid thesis that is ambitious enough to form the basis for a peer-reviewed publication.

### What are the tasks?

- **Analyse multimodal EHR data & problem setting**
  - Get familiar with typical EHR data types (tabular codes, free text, images, time series).
  - Identify realistic downstream tasks, e.g., risk prediction, length-of-stay estimation, readmission prediction, or anomaly detection.
  - Review recent literature on multimodal learning in healthcare and identify gaps (e.g., limited interpretability, weak use of certain modalities).
- **Develop multimodal modeling strategies**
  - Implement strong single-modality baselines (e.g., models for tabular data and/or clinical text) as reference points.
  - Design and implement a multimodal learning framework that jointly uses two or more modalities (e.g., tabular + text, tabular + time series, or tabular + images).
  - Experiment with different fusion strategies (early fusion, late fusion, cross-attention, contrastive or representation learning).
  - Optionally explore the use of pre-trained foundation models (e.g., clinical language models or vision encoders) as building blocks.
- **Interpretability & clinical reasoning**
  - Integrate interpretability techniques (e.g., attention analysis, feature attribution, modality contribution analysis) into your models.
  - Analyze how each modality contributes to predictions: Which signals matter most? When does a modality help, when does it confuse?
  - Propose simple visualizations or explanation schemes that a clinician could plausibly understand.
- **Evaluation & analysis**
  - Evaluate your models on one or more well-defined prediction / modeling tasks with appropriate metrics (e.g., AUROC, AUPRC, calibration).
  - Perform ablation studies: What happens if you remove a modality, or restrict to single-modality baselines?
  - Critically discuss strengths, weaknesses, and potential clinical usefulness and limitations of your approach.

### What prerequisites do you need?

- Strong motivation for applying AI/ML to healthcare.
- Good programming skills in Python and experience with deep learning.
- Familiarity with transformer-based or sequence models, and at least basic knowledge of one of: NLP, time-series modeling, or computer vision.
- Very good English skills (for reading literature and writing the thesis).

### Why this thesis is special

- **High-impact application:** Multimodal EHR modeling is central to the future of clinical decision support, risk prediction, and patient safety.
- **Technically challenging & modern:** You will work with state-of-the-art multimodal and deep learning methods rather than "toy" examples.
- **Research proximity:** The topic is closely aligned with ongoing research activities, offering a realistic chance for a publication if results are strong.
- **Method + insight:** You will not only build models, but also analyze *why* they behave as they do — a crucial step toward trustworthy clinical AI.

---

## Does Retrieval Granularity Matter? Analyzing the Effect of Context Noise on LLM-based Scientific Question Answering

### Supervisor

Jingbo He <jingbo.he@tu-dresden.de>

### Description

Large language models (LLMs) have demonstrated remarkable semantic understanding, raising a fundamental question for retrieval-augmented generation (RAG) systems: if an LLM is powerful enough, does it matter how precisely we retrieve context?

Current scientific QA systems, including our own [SQuAI](link-to-squai) system, built on 2.3 million arXiv papers from the [unarXive dataset](link-to-unarxive), retrieve relevant papers based on abstract-level similarity, and then provide the full paper as context to the LLM for answer generation. While this ensures that relevant content is included, it also introduces substantial noise: for any given question, typically only one or two sections of a paper contain the answer-bearing information, while the remaining sections are irrelevant distractors.

This project systematically investigates whether LLMs can compensate for this imprecision through their own semantic understanding or whether noisy context leads to measurably higher hallucination rates and lower answer quality in scientific QA.

### What are the tasks?

- **Design a controlled evaluation framework**
  - Define a precise operationalization of context noise (proportion of irrelevant sections alongside answer-bearing content)
  - Construct a focused evaluation set of scientific QA pairs with section-level ground truth annotations
  - Define evaluation metrics including hallucination rate, answer faithfulness, and context noise ratio
- **Run systematic noise experiments**
  - Evaluate LLM answer quality under controlled context conditions, ranging from ideal retrieval (ground truth section only) to real-world scenarios (full paper as context) and current baselines (abstract only)
  - Analyze across multiple dimensions: model size, query type, paper structure, and distractor type
- **Derive actionable conclusions**
  - Identify noise thresholds at which answer quality degrades significantly
  - Discuss implications for retrieval system design in scientific QA

### What prerequisites do you need?

- Good programming skills in Python
- Experience with LLM APIs (OpenAI, Anthropic, or open-source models such as LLaMA, Mistral)
- Basic familiarity with NLP or information retrieval concepts
- Interest in scientific literature and academic question answering
- Good English skills for reading papers and writing up results

### Why this thesis is special

- **An open research question:** The literature does not yet systematically address whether LLM semantic understanding compensates for retrieval noise in scientific QA, your experiments will produce a concrete, publishable finding either way.
- **Real-world relevance:** Results will directly inform the design of SQuAI, a running scientific QA system processing millions of arXiv papers.

---

## Dissertation Analytics in Computer Science: Understanding PhD Publication Patterns and Research Impact

### Supervisor

Michael Färber <michael.faerber@tu-dresden.de>

### Description

This thesis invites you to work at the intersection of scientometrics, natural language processing, information extraction, and research analytics. Every year, many doctoral dissertations are written in computer science worldwide, yet we still lack a systematic, data-driven understanding of what publication output is typically associated with a successful PhD: How many papers are part of a dissertation? Which venues matter? How much of a candidate’s publication record is actually reflected in the thesis? And how do expectations differ across research groups, universities, and subfields?

These questions are relevant for multiple stakeholders. Prospective PhD candidates want to understand what is realistically expected before starting a doctorate. Current doctoral researchers want to benchmark their progress. Professors and supervisors want to better understand common practices across institutions. Universities and research centers are interested in how doctoral training translates into scientific visibility and impact.

In this thesis, you will build the foundations for a dissertation-centric analytics system. Starting from a large collection of dissertations, you will automatically extract publication-related evidence, link it to external scholarly metadata, and analyze patterns across candidates, groups, and institutions. The work combines large-scale data collection, LLM-based information extraction, and data analysis, with optional system-building components. The aim is a methodologically strong thesis with clear research potential and possible follow-up toward a peer-reviewed publication.

### What are the tasks?

- **Collect and analyze dissertations**
  - Build a corpus of doctoral dissertations in computer science or a selected subfield.
  - Study structural differences and publication practices across institutions and research areas.
  - Define concrete research questions (e.g., number of publications, venue quality, variation across groups).

- **Extract publication evidence**
  - Identify publications associated with the doctoral candidate directly from the dissertation text.
  - Distinguish between publications that count toward the dissertation and those that are only mentioned.
  - Use LLM-based prompting and/or classical information extraction to resolve ambiguities.

- **Enrich and integrate metadata**
  - Link extracted publications to external sources (e.g., OpenAlex, DBLP, Semantic Scholar).
  - Collect metadata on venues, citations, co-authorship, supervisors, and institutions.
  - Build a structured database connecting dissertations, publications, and institutional context.

- **Analyze patterns and research impact**
  - Study how doctoral publication records vary across institutions, groups, and subfields.
  - Explore indicators beyond simple counts (e.g., venue quality, collaboration patterns, citation impact).
  - Critically discuss strengths and limitations of such metrics.

- **Optional: Build an exploration tool**
  - Create a simple search or exploration interface.
  - Optionally prototype a recommender system for prospective PhD candidates.

### What prerequisites do you need?

- Strong interest in AI/ML, NLP, data analytics, or scientometrics.
- Good programming skills in Python.
- Interest in working with real-world PDFs, metadata, and noisy document collections.
- Basic familiarity with NLP, information extraction, or LLM prompting is beneficial.
- Very good English skills (for reading literature and writing the thesis).

### Why this thesis is special

- **Novel perspective:** Focus on dissertation-level analysis rather than professor- or institution-level metrics.
- **High relevance:** Useful for PhD candidates, supervisors, and research institutions.
- **Technically rich:** Combines document mining, LLM-based extraction, metadata integration, and data analysis.
- **Research potential:** Ambitious and timely topic with realistic publication potential.

---

## Citation-Worthiness Detection for Evidence-Based Text Generation with Large Language Models

### Supervisor

Tobias Schreieder <tobias.schreieder@tu-dresden.de>

### Description

Evidence-based text generation with large language models aims to generate text together with explicit references that make the output traceable to supporting evidence. Today, this is typically implemented via retrieval-augmented generation (RAG): relevant sources are retrieved, inserted into the prompt, and then cited by the model. However, such systems usually do not decide explicitly whether a citation is actually needed at a given point in the generated text. As a result, they often overcite by adding unnecessary references, or undercite by failing to support factual claims. :contentReference[oaicite:0]{index=0}

This project investigates **citation-worthiness detection** for evidence-based text generation. The core idea is to equip the generation pipeline with a component that decides during generation whether a claim is **cite-worthy**, that is, whether it should trigger retrieval and citation generation. This enables a more precise and context-aware use of evidence and helps align citation behavior with the actual informational needs of the generated text. The project is particularly relevant for scientific question answering and literature-oriented generation, where both correctness and appropriate citation behavior matter. :contentReference[oaicite:1]{index=1}

### Research Goal

The goal of this project is to develop a citation-worthiness-aware pipeline for evidence-based text generation with four main components:

- **Evidence-based text generation:** Use an LLM to generate answers to scientific user queries, for example in scholarly question answering or literature overview generation.
- **Citation-worthiness detection:** Develop a classification model that detects during text generation whether a generated claim requires a citation, enabling real-time decisions on when retrieval should be triggered.
- **Scholarly information retrieval:** Integrate retrieval models over large-scale scholarly corpora such as unarXive 2024 to provide relevant supporting evidence for detected cite-worthy claims.
- **System evaluation:** Design an evaluation framework that measures answer correctness, citation quality, and citation-worthiness behavior such as overcitation and undercitation. :contentReference[oaicite:2]{index=2}

### Prerequisites

- Very good programming skills in **Python**
- Experience with the implementation of **search or retrieval systems**
- Background in **machine learning**
- Basic understanding of **RAG pipelines**

### References

1. Schreieder, T., Schopf, T., Färber, M. (2025): *Attribution, Citation, and Quotation: A Survey of Evidence-based Text Generation with Large Language Models*. arXiv. https://arxiv.org/abs/2508.15396 :contentReference[oaicite:3]{index=3}
2. Gao, T., Yen, H., Yu, J., Chen, D. (2023): *Enabling Large Language Models to Generate Text with Citations*. EMNLP 2023. https://aclanthology.org/2023.emnlp-main.398/ :contentReference[oaicite:4]{index=4}
3. Wright, D., Augenstein, I. (2021): *CiteWorth: Cite-Worthiness Detection for Improved Scientific Document Understanding*. Findings of ACL-IJCNLP 2021. https://aclanthology.org/2021.findings-acl.157/ :contentReference[oaicite:5]{index=5}

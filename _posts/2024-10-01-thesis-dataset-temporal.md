---
layout: post
title: Creating a Dataset of Complex Temporal Questions for Testing Large Language Models (LLMs)
date: 2024-10-01 00:32:13
description: open thesis topic
categories: open-thesis
---

**Objective**

Automatic question answering (QA) has recently received increasing attention in the NLP and Information Retrieval (IR) research communities. Open-domain question answering involves providing answers to natural language questions extracted from large text collections. The focus of this thesis is on developing resources for training LLM models to answer complex questions from large-scale temporal news article collections [1,2].

Traditionally, QA systems rely on either span selection and extraction or direct querying of Large Language Models. However, complex questions—such as those requiring comparison, summarization, or aggregation—cannot be easily answered using traditional approaches. For example, questions like “How many US presidents were there after Reagan?” (count-type question) or “Were avalanches in South Tyrol in the 1990s more devastating than those in Tyrol in the 2000s?” (comparative question) require answers to be “computed” or “inferred,” rather than directly extracted from documents, as would be the case for simpler extractive-type questions (e.g., “When was Nixon born?”).

The thesis will involve using Wikipedia and Wikidata to create a large number of questions that require aggregation operations, such as counting events, summing attribute values (e.g., the sum of casualties from disasters in a certain region), comparing computed sums or values of other attributes, detecting trends over time, and more. These questions will be generated through a series of crafted SPARQL queries, similar to those in [2], but designed to be more complex. This will enable more rigorous testing of LLM models on non-trivial types of knowledge and their inference capabilities. Additionally, LLMs could be trained with this dataset to improve their performance.

As part of the thesis work, motivated students will also have the opportunity to experiment with several common LLMs (e.g., Llama 3) to establish baseline performance on different types of questions. This allows for deeper insights into how well these models handle complex reasoning tasks.

Relevant prior work can be found in [1] and [2], providing a foundation for the research direction of this thesis.

**Contact Person**
Prof. Dr. Adam Jatowt, adam.jatowt@uibk.ac.at (in collaboration with Prof. Dr.-Ing. Michael Färber)

[1] Jiexin Wang, Adam Jatowt, Masatoshi Yoshikawa, Michael Färber: Improving Question Answering for Event-focused Questions in Temporal Collections of News Articles, Information Retrieval Journal (IRJ), Springer 24(1):29-54 [PDF]

[2] Raphael Gruber, Abdelrahman Abdallah, Michael Färber, Adam Jatowt: ComplexTempQA: A Large-Scale Dataset for Complex Temporal Question Answering. CoRR abs/2406.04866 (2024) [PDF]

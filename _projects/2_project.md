---
layout: page
title: LLM4Edu
description: Learning Large Language Models on Graphs for Education
img: assets/img/Logo_LLM4EDU.jpg
importance: 2
category: work
related_publications: true
---

## **Project Overview**
Large Language Models (LLMs) have demonstrated **remarkable in-context learning (ICL) capabilities**, requiring minimal or no training data for general tasks. However, fine-tuning these models for domain-specific applications—especially in education—is **crucial for their adaptability and impact**. 

In collaboration with **Macmillan Learning**, the **LLM4Edu** project aims to **develop next-generation AI tools for education**. By leveraging **graph-based methods**, we will extract structured datasets from unstructured user data and **optimize fine-tuning techniques** to create **parameter-efficient, interpretable models**.

## **Challenges in Fine-Tuning LLMs**
Traditional fine-tuning methods impose significant **computational costs**, making it impractical to update all parameters as model sizes grow. Several **Parameter-Efficient Fine-Tuning (PEFT) methods**, such as **Adapters, Prefix-tuning, Prompt-tuning, and LoRA**, have been introduced to address this issue. However, these methods often **lack interpretability** and a **deep understanding of their internal mechanisms**.

### **Our Approach**
We propose a **novel benchmark** by creating a **graph-based dataset** tailored for **personalized education**. Additionally, we will develop an **interpretable PEFT method** that integrates **Graph Neural Networks (GNNs)**, aiming to:
1. **Reduce training costs** while maintaining performance.
2. **Improve model transparency** for educators and stakeholders.
3. **Enhance learning experiences** by tailoring AI models to **individual educational needs**.

## **Project Goals**
1. **Develop an educational benchmark dataset**  
   - Design a high-quality dataset from **unstructured data** provided by Macmillan Learning.  
   - Ensure it accurately captures the **complexities of educational content**.  

2. **Optimize fine-tuning with a graph-based PEFT method**  
   - Identify **key LLM parameters** for **efficient** and **targeted** fine-tuning.  
   - Increase model **transparency and interpretability**, fostering trust in AI-driven education.  

3. **Bridge LLMs and GNNs for personalized learning**  
   - Use GNNs to **model relationships between LLM parameters** and **user learning patterns**.  
   - Enable **adaptive, student-centered AI solutions** for education.  

## **Key Research Questions**
1. **Dataset Creation**: How can we **design and curate an education-specific dataset** from Macmillan Learning’s data?  
2. **Model Optimization**: Which **LLM components** are **most significant** for education, and can we fine-tune them selectively?  
3. **Educational Impact**: How can **customized LLMs** enhance student engagement and teaching effectiveness?  

## **Technological Approach**
LLM4Edu will **combine PEFT techniques** with **graph-based modeling** to improve fine-tuning efficiency and interpretability.  

- **Graph-Based Token Selection**:  
  - Inspired by **saliency scores in ICL**, we will **hardwire important token connections** in input text.  
  - Unlike conventional approaches, we will **explore diverse token interconnections** to enhance PEFT explainability.  

- **Integrating GNNs with LLMs**:  
  - Keep **LLM parameters frozen** and only update **GNN parameters** to reduce training overhead.  
  - Apply **Graph Neural Networks (GNNs)** such as **GCN, GAT, and GraphSAGE** to extract structural knowledge.  

- **Cross-Model Knowledge Transfer**:  
  - Transfer learning is widely used in NLP, but **cross-model knowledge transfer remains underexplored**.  
  - We will develop a **GNN-based approach** for transferring knowledge **from small to large LLMs**, improving efficiency.  

## **Project Team**
**Lead:**  
- Shuzhou Yuan  

**Team Members:**  
- Prof. Dr.-Ing. Michael Färber  

**Partners:**  
- Macmillan Learning  
- Holtzbrinck Publishing Group  

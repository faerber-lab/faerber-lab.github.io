---
layout: post
title: Creating a Multimodal Dataset of Actions Labeled with their Expected Durations
date: 2024-10-01 00:32:13
description: open thesis supervision topic
categories: open-thesis
---

**Objective**

The goal of this thesis is to develop a multimodal action dataset based on a combination of crowdsourcing and large language models. The dataset will contain sentences or phrases expressing common actions, such as “tidy the house” or “paint a room,” accompanied by related images depicting the object on which the action is performed (e.g., small house, large house, messy room, clean room) and optional context information (e.g., additional help from others, day/time information, room size). The aim is to assign an expected duration to these actions, such as “1 hour,” “a few hours,” “1 day,” “a few days,” “1 week,” etc., to represent the difficulty and expected time required for each task as depicted in the text and image.

 

This dataset can be valuable for training decision-making systems (e.g., reasoning models in robots) that need to estimate the time required to perform an action based on both audio input and image data. One related work, albeit involving only text without accompanying images, can be found in [1].

 

In this thesis, the dataset will be constructed in stages: first, by generating text (phrases or sentences) using LLMs (e.g., GPT-4) based on carefully curated prompts with selective human assessment. Then, a search engine API (e.g., Google or Bing) will be used to find relevant images, or Vision LLMs could be used to generate images. Finally, a crowdsourcing campaign (e.g., using Amazon Mechanical Turk or other platforms) will be conducted to generate temporal labels indicating the expected duration of actions, or alternatively to express pairwise preferences (i.e., whether the same action in image 1 is expected to take more or less time than in image 2).

 

Motivated students will also have the opportunity to test common LLMs to establish baseline performance on the created dataset. This thesis will offer valuable hands-on experience in data generation and provide the chance to explore cutting-edge research in multimodal machine learning.

 

 

[1] Steven J. Lynden, Hailemariam Mehari Yohannes, Kyoung-Sook Kim, Adam Jatowt, Akiyoshi Matono, Haitao Yu, Xin Liu, Yijun Duan: Commonsense Temporal Action Knowledge (CoTAK) Dataset. CIKM 2023: 5361-5365 [PDF]


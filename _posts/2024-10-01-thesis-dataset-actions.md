---
layout: post
title: Creating a Dataset of Textual Descriptions of Planned Actions and Expectations of Entities
date: 2024-10-01 00:32:13
description: open thesis supervision topic
categories: open-thesis
---

**Objective**

In fields such as business, politics, and social studies, recognizing trends and predicting expected events (including the probability of their occurrence) at an early stage is essential. There has been significant recent research on computational approaches for forecasting the future of entities (e.g., countries, companies, cities) based on partial predictions, expressed expectations, text-based plans, and overall future-related opinions in sources like social media or news articles.

 

Some predictions expressed in text include conditionals, where an action (e.g., action x) is expected to occur after other actions (e.g., actions y and z). Other predictions contain temporal expressions indicating when the event is expected to happen, while some also provide supporting arguments to convince readers that a certain action will take place.

 

The goal of this thesis is to collect a large number of such predictions from dedicated websites and open sources such as news articles and social media posts. The next step will be to annotate these predictions through crowdsourcing platforms (e.g., Amazon Mechanical Turk) to label different components of the predictions, including:

 
- The predicted event

- The expected time of the event

- The time when the prediction was made (e.g., the publication date of the document containing the prediction)

- Any conditions for the event to occur (e.g., x will happen if y happens)

- The modality of event occurrence, defining the level of certainty (e.g., might, will, is planned, surely will happen)
 

This dataset will be useful for training LLMs or other systems to automatically detect the above components from predictions in text and enable summarization for forecasting future events. The ultimate aim of this thesis is to improve how forecasts about future events are understood, interpreted, and discussed.

 

Motivated students can also experiment with existing LLMs to establish baseline performance on the dataset. This thesis offers an exciting opportunity to explore research on future forecasting using text and contribute to advancing computational approaches in this area.

 

**Related work can be found here:**

[1] Juwal Regev, Adam Jatowt, Michael Färber: Future Timelines: Extraction and Visualization of Future-related Content from News Articles. WSDM 2024: 1082-1085 [PDF]


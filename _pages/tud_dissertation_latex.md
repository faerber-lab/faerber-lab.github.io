---
layout: page
permalink: /tud-dissertation-latex/
title: TU Dresden dissertation in LaTeX (cumulative) + PDF/A for SLUB/Qucosa
description: Practical notes and links for writing a cumulative dissertation in LaTeX at TU Dresden and producing a SLUB-valid PDF/A (incl. common pitfalls).
nav: false
---

## Overview

If you are preparing a **cumulative dissertation** at **TU Dresden** in LaTeX and need an **archive-compliant PDF/A** for **SLUB/Qucosa**, you can get there—but the last mile is often *validation-driven* and requires a bit of iteration (fonts, metadata, figures).

This page collects a compact, field-tested setup and the most relevant official resources.

---

## A pragmatic LaTeX setup for cumulative dissertations

A commonly used approach is to combine:

- **Cumulative Dissertation Template (Overleaf, Pavol Harar)**  
  Focus: clean inclusion of multiple papers as chapters, with minimal changes to the original paper sources.  
  https://www.overleaf.com/latex/templates/cumulative-dissertation-template/rdwdbhmwfyyc

- **TUD-Script (`tudscr`)** (KOMA-Script based)  
  Focus: TU Dresden corporate-design classes/packages for LaTeX documents.  
  GitHub: https://github.com/tud-cd/tudscr  
  CTAN: https://ctan.org/pkg/tudscr?lang=en

### Shared example source (optional)

A complete real-world dissertation source (LaTeX) has been shared internally in our context:
https://datashare.tu-dresden.de/s/gEHiDWMeF6qKcXB

> **Note:** Before reusing any shared template or code, ensure you have the right to do so and that no copyrighted/publisher material is redistributed inappropriately.

---

## TU Dresden corporate design: current state

In practice, `tudscr` may not yet fully match the *latest* TU Dresden corporate design out of the box. The current discussion and status are tracked in the repository issues, e.g.:

- “Update font to Noto Sans” (#104): https://github.com/tud-cd/tudscr/issues/104  
- “Change to new Corporate Design” (#105): https://github.com/tud-cd/tudscr/issues/105

**Pragmatic workaround** (often sufficient for “CD-close” output): update the default font (e.g., to **Noto Sans**) and adjust logo assets as needed.

---

## PDF/A for SLUB/Qucosa: what matters in practice

### 1) Validate early and repeatedly

SLUB provides an official validator. Use it throughout your writing process—not just at the end:

- SLUB PDF/A Validator (EN):  
  https://www.slub-dresden.de/en/publish/doctoral-and-postdoctoral-theses-at-the-tu-dresden/electronic-publication/slub-pdfa-validator

### 2) Know which PDF/A variants are accepted

SLUB’s electronic publication pages list archive-compliant PDF/A versions (including **PDF/A-2a / PDF/A-2b**).  
https://www.slub-dresden.de/en/publish/neu-dissertationen-habilitationen/electronic-publication

### 3) Typical failure modes (especially with LaTeX + external figures)

Common reasons the validator fails include:

- **Transparency** in embedded figures (often from PowerPoint exports with shadows/alpha)
- **Fonts not fully embedded** (sometimes inside imported PDFs/figures)
- **Missing or inconsistent metadata** required by PDF/A
- “One small thing” that only shows up during validation → plan for iteration

Helpful SLUB entry points:
- PDF/A background + guidance (EN):  
  https://www.slub-dresden.de/en/publish/neu-dissertationen-habilitationen/electronic-publication/erstellung-pdfa-konformer-dokumente-einfuehrende-informationen-in-den-pdfa-standard
- Technical standards / delivery requirements (EN):  
  https://www.slub-dresden.de/en/publish/pflichtmedien-einreichen/technische-standards-fuer-die-ablieferung-von-netzpublikationen
- Qucosa FAQ: technical PDF notes (DE):  
  https://tud.qucosa.de/faq/technische-hinweise-zur-pdf-erstellung/

---

## Compilation: avoid timeouts

PDF/A workflows can increase compilation time.

If compilation on a constrained Overleaf instance times out:
- compile locally using `latexmk`, or
- use an Overleaf environment with adequate limits (e.g., an institutional instance).

---

## Acknowledgement

Parts of these notes are based on practical guidance shared within TU Dresden by colleagues and publicly available documentation (SLUB/Qucosa pages, `tudscr` repository/CTAN, and the Overleaf cumulative dissertation template).

---
layout: page
permalink: /student-projects-ws2026/
title: Research Projects WS 2026/27
description: Research projects for Forschungsprojekt, Komplexpraktikum and Teamprojekt in the research group of Michael Färber, Winter Semester 2026/27.
nav: false
og_image: /assets/press/Michael_Faerber_2024_700p.jpg
search: true
# ---- Edit here ----
form_url: https://docs.google.com/forms/d/e/1FAIpQLSdSHEpbxjbcbOqz_QDY3mji-YVVYMshyCJxC0HlkzRqrzsNIg/viewform
deadline: Fri, 16 Oct 2026, 11:59 PM
deadline_short: 16 Oct
timeline:
  - date: Fri 9 Oct
    title: Topics published
    note: Initial list online
    done: true
  - date: Tue 13 Oct
    title: Joint kick-off
    note: Topic pitches, process & expectations — time and room TBA
  - date: Fri 16 Oct
    title: Application deadline
    note: 11:59 PM — form with CV, transcript & preferences
  - date: by 19 Oct
    title: Final allocation
    note: Students notified by email
# Topics live in _data/student_projects_ws2026.json
# Note: the deploy workflow ignores .json files, so after editing the topics,
# also make a small edit to this page (e.g. bump updated:) to rebuild the site.
updated: 2026-10-13
---

{% assign projects = site.data.student_projects_ws2026 %}
{% assign open_projects = projects | where: "status", "Open" %}
{% assign open_places = 0 %}{% for p in open_projects %}{% assign open_places = open_places | plus: p.places %}{% endfor %}

<style>
.sp-intro{margin-bottom:1.25rem}
.sp-stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.75rem;margin:1rem 0 1.75rem}
.sp-stat{border:1px solid var(--global-divider-color);border-radius:8px;padding:.75rem 1rem;background:var(--global-card-bg-color)}
.sp-stat b{display:block;font-size:1.5rem;line-height:1.2;color:var(--global-theme-color)}
.sp-stat span{font-size:.85rem;color:var(--global-text-color-light)}
.sp-timeline{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:.6rem;list-style:none;padding:0;margin:0 0 2rem}
.sp-timeline li{border:1px solid var(--global-divider-color);border-radius:8px;padding:.65rem .8rem;background:var(--global-card-bg-color)}
.sp-timeline li.done{opacity:.65}
.sp-timeline .d{font-weight:700;color:var(--global-theme-color);font-size:.9rem}
.sp-timeline .t{font-size:.9rem}
.sp-timeline .n{font-size:.78rem;color:var(--global-text-color-light)}
.sp-toolbar{display:flex;gap:.6rem;flex-wrap:wrap;align-items:center;margin-bottom:.9rem}
.sp-toolbar input,.sp-toolbar select{font:inherit;font-size:.92rem;padding:.45rem .7rem;border:1px solid var(--global-divider-color);border-radius:6px;background:var(--global-bg-color);color:var(--global-text-color);min-width:0}
.sp-toolbar input{flex:1 1 220px}
.sp-seg{display:inline-flex;border:1px solid var(--global-divider-color);border-radius:6px;overflow:hidden}
.sp-seg button{font:inherit;font-size:.88rem;border:0;background:none;color:var(--global-text-color-light);padding:.4rem .75rem;cursor:pointer}
.sp-seg button[aria-pressed="true"]{background:var(--global-theme-color);color:#fff}
.sp-card{border:1px solid var(--global-divider-color);border-radius:10px;margin-bottom:.75rem;background:var(--global-card-bg-color);overflow:hidden}
.sp-card.filled{opacity:.7}
.sp-card summary{list-style:none;cursor:pointer;padding:.9rem 1rem;display:grid;grid-template-columns:1fr auto;gap:.3rem 1rem}
.sp-card summary::-webkit-details-marker{display:none}
.sp-card h3{font-size:1.05rem;margin:0;line-height:1.35;font-weight:600}
.sp-badge{grid-column:2;grid-row:1;align-self:start;font-size:.75rem;font-weight:600;padding:.15rem .6rem;border-radius:999px;white-space:nowrap}
.sp-badge.open{background:rgba(25,135,84,.14);color:#198754}
.sp-badge.filled{background:rgba(253,126,20,.16);color:#c25e00}
.sp-meta{grid-column:1/-1;display:flex;gap:.25rem 1rem;flex-wrap:wrap;font-size:.86rem;color:var(--global-text-color-light);overflow-wrap:anywhere}
.sp-teaser{grid-column:1/-1;margin:.2rem 0 0;font-size:.9rem;color:var(--global-text-color-light);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
details[open] .sp-teaser{display:none}
.sp-more{grid-column:1/-1;font-size:.82rem;font-weight:600;color:var(--global-theme-color)}
details[open] .sp-more .o, details:not([open]) .sp-more .c{display:none}
.sp-body{padding:0 1rem 1rem;border-top:1px solid var(--global-divider-color)}
.sp-body h4{font-size:.78rem;text-transform:uppercase;letter-spacing:.05em;color:var(--global-text-color-light);margin:1rem 0 .35rem;font-weight:600}
.sp-body p{margin:0 0 .5rem}
.sp-body ul{margin:0;padding-left:1.2rem}
.sp-refs li{font-size:.86rem;color:var(--global-text-color-light);overflow-wrap:anywhere}
.sp-btn{display:inline-block;margin-top:.9rem;padding:.5rem 1rem;border-radius:6px;background:var(--global-theme-color);color:#fff !important;font-weight:600;text-decoration:none !important}
.sp-steps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.75rem;counter-reset:s;margin-bottom:1rem}
.sp-step{border:1px solid var(--global-divider-color);border-radius:8px;padding:.8rem .9rem .8rem 2.8rem;position:relative;background:var(--global-card-bg-color);font-size:.9rem}
.sp-step::before{counter-increment:s;content:counter(s);position:absolute;left:.8rem;top:.8rem;width:1.5rem;height:1.5rem;border-radius:50%;background:var(--global-theme-color);color:#fff;font-weight:700;display:grid;place-items:center;font-size:.8rem}
.sp-step > b{display:block}
.sp-empty{padding:1rem;text-align:center;color:var(--global-text-color-light)}
@media (max-width:767px){.sp-timeline{grid-template-columns:1fr 1fr}.sp-steps{grid-template-columns:1fr}}
@media (max-width:420px){.sp-timeline{grid-template-columns:1fr}.sp-stat b{font-size:1.2rem}}
</style>

<div class="sp-intro" markdown="0">
<p>Semester-long research projects in NLP, LLMs, information retrieval and AI for science and health — for the courses <em>Forschungsprojekt</em>, <em>Komplexpraktikum</em> and <em>Teamprojekt</em> in the Winter Semester 2026/27. Some topics can be extended into a Bachelor's or Master's thesis.</p>
<p><a class="sp-btn" style="margin-top:0" href="{{ page.form_url }}" target="_blank" rel="noopener">Apply via the registration form →</a></p>
</div>

<div class="sp-stats" markdown="0">
  <div class="sp-stat"><b>{{ open_projects | size }}</b><span>open topics</span></div>
  <div class="sp-stat"><b>{{ open_places }}</b><span>places available</span></div>
  <div class="sp-stat"><b>{{ page.deadline_short }}</b><span>application deadline</span></div>
</div>

<h2>Timeline</h2>
<ol class="sp-timeline" markdown="0">
{% for t in page.timeline %}<li class="{% if t.done %}done{% endif %}"><div class="d">{{ t.date }}</div><div class="t">{{ t.title }}</div><div class="n">{{ t.note }}</div></li>{% endfor %}
</ol>

<h2>Topics</h2>
<div class="sp-toolbar" markdown="0">
  <input id="sp-q" type="search" placeholder="Search title, method, prerequisite…" aria-label="Search topics">
  <select id="sp-sup" aria-label="Filter by supervisor"><option value="">All supervisors</option>{% assign sups = projects | map: "supervisor" | uniq | sort %}{% for s in sups %}<option>{{ s }}</option>{% endfor %}</select>
  <div class="sp-seg" role="group" aria-label="Availability">
    <button type="button" data-f="open" aria-pressed="true">Open</button>
    <button type="button" data-f="all" aria-pressed="false">All</button>
    <button type="button" data-f="filled" aria-pressed="false">Filled</button>
  </div>
</div>

<div id="sp-list" markdown="0">
{% assign sorted = open_projects %}{% assign filled_projects = projects | where: "status", "Filled" %}{% assign sorted = sorted | concat: filled_projects %}
{% for p in sorted %}{% if p.status == "Open" %}{% assign is_open = true %}{% else %}{% assign is_open = false %}{% endif %}
<details class="sp-card {% unless is_open %}filled{% endunless %}" id="{{ p.title | slugify }}" data-status="{{ p.status | downcase }}" data-supervisor="{{ p.supervisor }}">
  <summary>
    <h3>{{ p.title }}</h3>
    <span class="sp-badge {% if is_open %}open{% else %}filled{% endif %}">{{ p.status }}</span>
    <div class="sp-meta"><span><i class="fa-solid fa-user"></i> {{ p.supervisor }}</span>{% if p.email %}<a href="mailto:{{ p.email }}" onclick="event.stopPropagation()"><i class="fa-solid fa-envelope"></i> {{ p.email }}</a>{% endif %}<span><i class="fa-solid fa-users"></i> {{ p.places }} {% if p.places > 1 %}students{% else %}student{% endif %}</span></div>
    <p class="sp-teaser">{{ p.description | first }}</p>
    <span class="sp-more"><span class="o">Show details ▾</span><span class="c">Hide details ▴</span></span>
  </summary>
  <div class="sp-body">
    <h4>Description</h4>{% for d in p.description %}<p>{{ d }}</p>{% endfor %}
    {% if p.research_questions.size > 0 %}<h4>Possible research questions</h4><ul>{% for d in p.research_questions %}<li>{{ d }}</li>{% endfor %}</ul>{% endif %}
    {% if p.deliverables.size > 0 %}<h4>Expected deliverables</h4><ul>{% for d in p.deliverables %}<li>{{ d }}</li>{% endfor %}</ul>{% endif %}
    {% if p.prerequisites.size > 0 %}<h4>Prerequisites</h4><ul>{% for d in p.prerequisites %}<li>{{ d }}</li>{% endfor %}</ul>{% endif %}
    {% if p.references.size > 0 %}<h4>References</h4><ul class="sp-refs">{% for d in p.references %}<li>{{ d }}</li>{% endfor %}</ul>{% endif %}
    {% if is_open %}<a class="sp-btn" href="{{ page.form_url }}" target="_blank" rel="noopener">Apply for this topic →</a>{% endif %}
  </div>
</details>
{% endfor %}
<div class="sp-empty" id="sp-empty" hidden>No topics match these filters.</div>
</div>

<h2 id="apply" style="margin-top:2rem">How to apply</h2>
<div class="sp-steps" markdown="0">
  <div class="sp-step"><b>Pick up to two topics</b>Read the descriptions and check you meet the prerequisites. Only topics marked <em>Open</em> can be chosen.</div>
  <div class="sp-step"><b>Submit the registration form</b>Choose your 1st preference (and optionally a 2nd), upload your <strong>CV</strong> and current <strong>transcript of records</strong> (PDF), plus a few lines on your background and motivation.</div>
  <div class="sp-step"><b>Final allocation</b>Supervisors and Prof. Färber decide the final allocation based on academic record, relevant skills and fit. You'll hear from us by email.</div>
</div>

<p markdown="0"><a class="sp-btn" href="{{ page.form_url }}" target="_blank" rel="noopener">Open the registration form →</a></p>

Places are limited and some topics fill early. Questions about a specific topic? Email the supervisor or ask at the kick-off — but please submit your application only through the form.

How we work: **[/teaching/](/teaching/)**, **[/how-we-work/](/how-we-work/)**, **[/faq/](/faq/)**

<script>
(function () {
  var q = document.getElementById("sp-q"), sup = document.getElementById("sp-sup"), filter = "open";
  var cards = Array.prototype.slice.call(document.querySelectorAll("#sp-list .sp-card"));
  function render() {
    var term = q.value.trim().toLowerCase(), s = sup.value, shown = 0;
    cards.forEach(function (c) {
      var ok = (filter === "all" || c.dataset.status === filter) && (!s || c.dataset.supervisor === s) && (!term || c.textContent.toLowerCase().indexOf(term) > -1);
      c.hidden = !ok; if (ok) shown++;
    });
    document.getElementById("sp-empty").hidden = shown > 0;
  }
  q.addEventListener("input", render);
  sup.addEventListener("change", render);
  document.querySelectorAll(".sp-seg button").forEach(function (b) {
    b.addEventListener("click", function () {
      filter = b.dataset.f;
      document.querySelectorAll(".sp-seg button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
      render();
    });
  });
  if (location.hash) { var el = document.getElementById(location.hash.slice(1)); if (el && el.tagName === "DETAILS") el.open = true; }
  render();
})();
</script>

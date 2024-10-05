---
layout: page_static
title: Research
permalink: /research/
---

List of research papers
<ul>
  {% for paper in site.research %}
    <li>
      <a href="{{ paper.url }}">{{ paper.title }}</a> ({{ paper.date | date: "%B %d, %Y" }})
      <p> Journal {{ paper.journal }} </p>
    </li>
  {% endfor %}
</ul>
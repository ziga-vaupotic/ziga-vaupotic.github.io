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
      <p> {{ paper.journal }} </p>
    </li>
  {% endfor %}
</ul>


List of talks
<ul>
  {% for talk in site.talk %}
    <li>
      <a href="{{ talk.url }}">{{ talk.title }}</a>
      <p> {{ talk.conference }} ({{ talk.date | date: "%B %d, %Y" }}) </p>
    </li>
  {% endfor %}
</ul>
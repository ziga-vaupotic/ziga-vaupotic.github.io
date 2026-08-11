---
layout: page_static
title: Research
permalink: /research/
---
<br>
<h2>List of research papers</h2>
<ol>
  {% assign sorted_papers = site.research | sort: "date" | reverse %}
  {% for paper in sorted_papers %}
    <li>
      <a href="{{ paper.url }}">{{ paper.title }}</a> ({{ paper.date | date: "%B %d, %Y" }})
      <p> {{ paper.journal }} </p>
    </li>
  {% endfor %}
</ol>

<br>

<h2>List of talks</h2>
<ul>
  {% assign sorted_talks = site.talk | sort: "date" | reverse %}
  {% for talk in sorted_talks %}
    <li>
      <a href="{{ talk.url }}">{{ talk.title }}</a>
      <p> {{ talk.conference }} ({{ talk.date | date: "%B %d, %Y" }}) </p>
    </li>
  {% endfor %}
</ul>
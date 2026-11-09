---
layout: page_static
title: Research
permalink: /research/
---
## Selected papers 

<ol>
  {% assign sorted_papers = site.research | sort: "date" | reverse %}
  {% for paper in sorted_papers %}
    <li>
      <a href="{{ paper.url }}">{{ paper.title }}</a>
      <div class="flex justify-between text-sm py-2">
        <span> {{ paper.journal }} </span>
        <span class="project-year shrink-0"> ({{ paper.date | date: "%B %d, %Y" }}) </span>
      </div>
    </li>
  {% endfor %}
</ol>

<br>

## Selected Talks
<ul>
  {% assign sorted_talks = site.talk | sort: "date" | reverse %}
  {% for talk in sorted_talks %}
    <li>
      <a href="{{ talk.url }}">{{ talk.title }}</a>
    </li>
  {% endfor %}
</ul>

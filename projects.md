---
layout: page_static
title: Projects
permalink: /projects/
---


## Selected projects

<ol>
  {% assign sorted_project = site.projects | sort: "year" | reverse %}
  {% for project in sorted_project %}
    <li>
      <div class="flex justify-between min-w-0 items-baseline gap-2">
        {% if project.link %}
          <a href="{{ project.link }}" class="min-w-0 break-words">{{ project.title }}</a>
        {% else %}
          <span class="min-w-0 break-words">{{ project.title }}</span>
        {% endif %}
        <span class="project-year shrink-0">({{ project.year }})</span>
      </div>
      <p class="text-sm">{{ project.description }}</p>
    </li>
  {% endfor %}
</ol>

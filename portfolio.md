---
layout: portfolio
title: Portfolio
permalink: /portfolio/
---

<a href="{{ '/' | relative_url }}" class="portfolio-back">← Go back</a>

## Selected probono and personal projects

<br>

<div class="portfolio-list">
  {% assign portfolio_items = site.portfolio | sort: "order" %}
  {% for item in portfolio_items %}
    {% if item.title and item.image %}
    <article class="portfolio-project" id="{{ item.slug | default: item.title | slugify }}">
      <div class="portfolio-project-media">
        <img src="{{ item.image | relative_url }}" alt="{{ item.image_alt }}" width="1600" height="900" loading="lazy" decoding="async">
      </div>

      <div class="portfolio-project-info">
        <div class="portfolio-project-meta">
          <span>({{ item.order | prepend: '0' | slice: -2, 2 }})</span>
          <span>{{ item.year }}</span>
        </div>
        <h3>
          {% if item.link %}
            <a href="{{ item.link }}">{{ item.title }}</a>
          {% else %}
            {{ item.title }}
          {% endif %}
        </h3>
        <p>{{ item.description }}</p>
      </div>
    </article>
    {% endif %}
  {% endfor %}
</div>

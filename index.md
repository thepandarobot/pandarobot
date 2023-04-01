---
title: Panda Robot
layout: default
---

<h1 class="page-heading">Posts</h1>

 <ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>

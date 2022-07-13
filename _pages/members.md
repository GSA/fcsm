---
permalink: /about/members/
title: Members
layout: page
sidenav: about_navigation
---
<div class="grid-row grid-gap">
{% for member in site.members %}
  <div class="tablet:grid-col-6 padding-y-2">
    <div class="grid-row border-base-lighter border-solid border-width-1px border-top-width-05 radius-lg shadow-4 font-sans-3xs" style="min-height: 130px">
      <div class="grid-col-4 display-flex flex-row flex-align-center padding-x-2">
        <img src="{{ site.baseurl }}/assets/img/agency_logos/{{ member.agency }}.png" alt="{{ member.agency_long }} logo">
      </div> 
      <div class="grid-col-8 padding-right-2">
        <h2>{{ member.name }}</h2>
        <p>{{ member.agency_long }}</p>
        <!--<a href="mailto:{{ member.email }}">{{ member.email }}</a>-->
      </div>
    </div>
  </div>
{% endfor %}
</div>
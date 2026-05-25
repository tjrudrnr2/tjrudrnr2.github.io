---
layout: page
permalink: /publications/
title: publications
description: publications in reverse chronological order.
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

## International Conferences

<div class="publications">

{% bibliography %}

</div>

## Domestic Conferences (국내 학회)

<div class="publications">

{% bibliography --file domestic %}

</div>

## Awards &amp; Patents (수상 / 특허)

<div class="publications">

{% bibliography --file patents %}

</div>

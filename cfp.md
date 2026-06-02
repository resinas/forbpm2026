---
layout: layouts/base.njk
permalink: /
pageTitle: FOR-BPM 2026 | Workshop at BPM 2026
description: FOR-BPM 2026, the 1st International Workshop on Forgotten, Overlooked and Rejected Topics in Business Process Management.
eyebrow: BPM 2026 Workshop
heroTitle: The 1st International Workshop on Forgotten, Overlooked and Rejected Topics in Business Process Management (FOR-BPM)
glance:
  - label: Date
    value: September 28, 2026
  - label: Location
    value: Toronto, Canada
  - label: Venue
    value: BPM 2026
  - label: Submission deadline
    value: <span class="old-date">June 5, 2026</span> June 12, 2026 (extended)
organizers:
  - name: Iris Beerepoot
    affiliation: Utrecht University, The Netherlands
    profileUrl: https://www.uu.nl/staff/IMBeerepoot
    image: /assets/organizers/iris-beerepoot.jpg
  - name: Manuel Resinas
    affiliation: Universidad de Sevilla, Spain
    profileUrl: https://personal.us.es/resinas/
    image: /assets/organizers/manuel-resinas.jpg
  - name: Tijs Slaats
    affiliation: University of Copenhagen, Denmark
    profileUrl: https://di.ku.dk/english/staff/?pure=en%2Fpersons%2F561613
    image: /assets/organizers/tijs-slaats.jpg
importantDates:
  - date: <span class="old-date">June 5, 2026</span> June 12, 2026
    label: Paper submission (extended deadline)
  - date: July 10, 2026
    label: Notification to authors
  - date: July 31, 2026
    label: Camera-ready submission
  - date: September 28, 2026
    label: Workshop
contributionTypes:
  - title: Negative or null results
    description: Papers describing studies with non-confirmed hypotheses or negative results.
  - title: Forgotten topics
    description: Revisits of topics once considered important but later neglected.
  - title: Practitioner perspectives
    description: Practitioner reports on ideas that were disregarded in academic discourse but proved valuable in practice.
  - title: Vision papers
    description: Re-framing old or rejected concepts in light of new technologies and contexts.
---

## Aims and Scope

Across BPM, certain research topics, findings, or ideas quietly disappear: studies that failed, prototypes that didn’t work, promising directions reviewers discouraged, or questions no one seems to care about. Yet these elements often contain insights that never surface in published work.

The 1st International Workshop on Forgotten, Overlooked, and Rejected Topics in Business Process Management (FOR-BPM) provides a forum for ideas, studies, and perspectives in Business Process Management that, for various reasons, have not found their way into mainstream discourse. Contributions are often filtered out due to non-confirmed hypotheses, unconventional approaches, or shifting community interests. However, such "forgotten, overlooked, or rejected" work can be highly valuable, both as inspiration for new directions and as a reality check against overly selective research agendas.

## Main goals

The workshop has five goals:
1. **Resurface neglected ideas and rejected-but-loved papers:** Provide a space for topics, theories, or findings that have been overlooked but may have long-term value.
2. **Learn from negative or null results:** Create a constructive environment where unsuccessful studies or non-confirmed hypotheses can be discussed, to learn and build from them.
3. **Reignite forgotten directions:** Revisit past research that has fallen out of attention but deserves renewed exploration in light of current technological and societal shifts.
4. **Explore speculative research:** Create a space for imaginative, forward-looking, and unconventional ideas that challenge current assumptions or inspire new trajectories.
5. **Share insightful results regardless of impact or trend:** Allow space for results that provide interesting insights, regardless of their larger long-term impact or alignment with popular research directions.

## Types of contributions

We invite contributions that revisit ideas, findings, or perspectives in Business Process Management that have been overlooked, rejected, or forgotten. This includes, among others:

{% if contributionTypes %}
<div class="contribution-grid">
  {% for item in contributionTypes %}
  <section class="contribution-card">
    <h3>{{ item.title }}</h3>
    <p>{{ item.description }}</p>
  </section>
  {% endfor %}
</div>
{% endif %}

## Submission guidelines

Submissions should follow the LNBIP format and can be of two types:
- **Regular paper submissions**: no longer than 12 pages, excluding appendices.
- **Short paper submissions**: up to 8 pages, excluding appendices.

**Papers should be submitted through <a href="https://openreview.net/group?id=bpm-conference.org/BPM/2026/Workshop/FOR-BPM" target="_blank" rel="noopener noreferrer">OpenReview</a>**.

Authors are encouraged to include an optional brief history of the idea, either in the paper itself or in the appendix (for example: prior submissions, reviews, and reception). This contextual information will be used solely to evaluate topical fit and to foster constructive re-positioning within the community.

## Open reviewing process

In alignment with the workshop’s focus on overlooked and unconventional ideas, the review process is designed to be transparent and constructive.

All reviews will be **public but anonymous**. This transparency makes the evaluation process visible while preserving reviewer confidentiality, encouraging constructive commentary, mitigating bias against unconventional ideas, and helping identify promising directions that might be overlooked under standard closed review.

Reviewers will be asked to **focus on the insightfulness, discussion potential, and relevance to the workshop theme**, rather than solely on novelty or expected impact. Submissions are not required to be fully validated, but should offer **clear and thought-provoking perspectives**.

The review process may include a brief discussion phase, where authors can respond to reviews and reviewers can ask clarifying questions. This exchange is intended to improve mutual understanding and refine how the work is framed within the community.

Reviews of accepted papers will be made public. Authors of **rejected papers may opt out from having their submission and reviews shared**.

## Workshop format

During the workshop, we will work collaboratively to bring these topics back into the spotlight and explore their potential for renewed impact.

Depending on the nature of each contribution and the total number of accepted submissions, we will form groups and collectively:
- Consider how to reposition ideas for greater acceptance within the community.
- Identify possible collaborators or mentors.
- Discuss avenues for further development, including funding possibilities and suitable publication outlets.

We will also reflect on the meta-practices that shape our field, including reviewing norms, publication bias, and hype cycles that influence what becomes visible and what quietly disappears.

<a id="important-dates"></a>

## Important dates

{% if importantDates %}
<div class="timeline">
  {% for item in importantDates %}
  <div class="timeline-item">
    <p class="timeline-date">{{ item.date | safe }}</p>
    <p class="timeline-label">{{ item.label }}</p>
  </div>
  {% endfor %}
</div>
{% endif %}

All deadlines are set to 23:59 Anywhere on Earth (AoE), GMT+12.

## Organizers

{% if organizers %}
<div class="organizer-grid">
  {% for organizer in organizers %}
  <a class="organizer-card" href="{{ organizer.profileUrl }}" target="_blank" rel="noopener noreferrer">
    <img src="{{ organizer.image }}" alt="{{ organizer.name }}" loading="lazy" />
    <span>
      <strong>{{ organizer.name }}</strong>
      <span>{{ organizer.affiliation }}</span>
    </span>
  </a>
  {% endfor %}
</div>
{% endif %}

## Program committee

Coming soon

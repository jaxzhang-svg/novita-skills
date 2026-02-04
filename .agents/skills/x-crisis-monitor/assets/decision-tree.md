# Crisis Level Decision Tree

## Primary Decision Tree

```
DETECT NEGATIVE POST
         ↓
    ASSESS TIMELINE
    ├─ < 30 mins old → Proceed to analysis
    └─ > 30 mins old → Check urgency, escalate if already viral
         ↓
    CHECK ENGAGEMENT METRICS
    ├─ Total interactions < 100 → Go to LEVEL CHECK 1
    ├─ Total interactions 100-1,000 → Go to LEVEL CHECK 2
    └─ Total interactions > 1,000 → Go to LEVEL CHECK 3
         ↓
    ANALYZE POST TYPE
    ├─ Individual complaint → LEVEL 1 likely
    ├─ Influencer/creator post → Check influence level
    ├─ Media/news article → LEVEL 2 or 3
    └─ Viral/trending → Check trending status
         ↓
    CHECK INFLUENCER INVOLVEMENT
    ├─ No major influencers → LEVEL 1 or 2 (based on metrics)
    ├─ Micro-influencers (10k-100k) → LEVEL 2
    └─ Macro/celebrity influencers (100k+) → LEVEL 3
         ↓
    CHECK TRENDING STATUS
    ├─ Not trending → Previous level applies
    └─ Trending or going viral → LEVEL 3 immediately
```

---

## LEVEL CHECK 1: Low Engagement (100 interactions or less)

```
Level 1 Criteria Checklist:
- [ ] Individual user post (not organized campaign)
- [ ] < 100 total interactions
- [ ] No major influencers involved
- [ ] Not trending
- [ ] User is not verified or has < 10k followers
         ↓
ALL CHECKS PASSED?
         ↓
     YES → LEVEL 1 (Microwave)
         Action: Customer support response
         Timeline: Respond within 1 hour
         Owner: Customer support team
         ↓
     NO → Re-assess: Escalate to Level 2
```

---

## LEVEL CHECK 2: Medium Engagement (100-1,000 interactions)

```
Level 2 Criteria Checklist:
- [ ] 100-1,000 total interactions
- [ ] At least one influencer involved (10k+ followers)
- [ ] Community discussion emerging (multiple quote tweets)
- [ ] Not yet trending or barely trending
- [ ] Cross-platform mentions (Reddit, LinkedIn) minimal
- [ ] Sentiment is negative but not hostile
         ↓
ALL CHECKS PASSED?
         ↓
     YES → LEVEL 2 (Wave)
         Action: Operational response
         Timeline: Acknowledge within 2 hours, full response within 4 hours
         Owner: PR/Communications team + Customer Success
         ↓
     NO → Re-assess: May be Level 3 if any:
         - Engagement is rapidly growing (> 500/hour)
         - Major influencers (100k+ followers) involved
         - Media outlets amplifying
         - Clearly trending or viral
```

---

## LEVEL CHECK 3: High Engagement (1,000+ interactions)

```
Level 3 Criteria Checklist (Any one triggers Level 3):
- [ ] > 1,000 total interactions
- [ ] Post is trending or clearly going viral
- [ ] Major influencers/celebrities involved (100k+ followers)
- [ ] Media outlets (TechCrunch, Wired, etc.) amplifying
- [ ] Cross-platform spread (Reddit hot, LinkedIn viral)
- [ ] Engagement velocity > 500 interactions/hour
- [ ] Executive/CEO involved
- [ ] Legal or regulatory implications
- [ ] Security breach or data incident
         ↓
ANY CHECK PASSED?
         ↓
     YES → LEVEL 3 (Tsunami)
         Action: PR crisis mode
         Timeline: Acknowledge within 2 hours, continuous updates
         Owner: Full crisis team (PR, Legal, Executives, Engineering)
         ↓
     NO → Re-assess: Likely Level 2
```

---

## Content-Based Escalation Rules

### Automatic Level 3 (No metrics needed):
1. **Security Incidents:**
   - Data breach confirmed or alleged
   - Hack or unauthorized access reported
   - Privacy violation claims
   - Malware/virus accusations

2. **Legal/Regulatory:**
   - Lawsuit mentioned
   - Regulatory investigation (SEC, GDPR, etc.)
   - Government action mentioned
   - Criminal accusations

3. **Executive/Brand Reputation:**
   - CEO/founder scandal
   - Racism/discrimination allegations
   - Fraud/scam accusations
   - Financial misconduct

4. **Widespread System Failure:**
   - Complete service outage (> 50% of users)
   - Data loss affecting multiple accounts
   - Security vulnerabilities in production

### Automatic Level 2 (Regardless of metrics):
1. **Service Issues:**
   - Partial service outage
   - Major feature not working
   - API disruptions
   - Billing errors affecting multiple users

2. **Product Changes:**
   - Popular feature removal backlash
   - Controversial pricing changes
   - Terms of service changes
   - Privacy policy changes

---

## Time-Based Escalation Rules

```
MONITOR ENGAGEMENT GROWTH RATE
         ↓
MEASURE: Interactions per hour
         ↓
    GROWTH RATE ANALYSIS
    ├─ < 50/hour → Maintain current level
    ├─ 50-100/hour → Consider escalation one level
    └─ > 100/hour → Escalate immediately (prepare for next level)
         ↓
RE-EVALUATE EVERY 30 MINUTES
```

---

## Influence-Based Escalation

```
IDENTIFY KEY AMPLIFIERS
         ↓
AMPLIFIER TIER ASSESSMENT
    ├─ Tier 1: < 10k followers → Maintain current level
    ├─ Tier 2: 10k-100k followers → Consider Level 2
    ├─ Tier 3: 100k-1M followers → Consider Level 3
    └─ Tier 4: 1M+ followers or verified media → Level 3 immediately
         ↓
MULTIPLE AMPLIFIERS?
         ↓
    YES → Escalate one level higher
         ↓
    NO → Based on highest tier amplifier
```

---

## Sentiment-Based Escalation

```
ANALYZE SENTIMENT OF CONVERSATION
         ↓
SENTIMENT CLASSIFICATION
    ├─ Frustration/Disappointment → Maintain or slight escalation
    ├─ Anger/Hostility → Consider escalation
    └─ Organized attack/Coordinated → Level 3 immediately
         ↓
CHECK FOR COORDINATION:
    - [ ] Multiple accounts posting similar content
    - [ ] Hashtag campaign organized
    - [ ] Bot-like posting patterns
    - [ ] Clear call-to-action (e.g., "Cancel [brand]")
         ↓
COORDINATED ATTACK DETECTED?
         ↓
    YES → LEVEL 3 immediately (regardless of metrics)
```

---

## Cross-Platform Spread Assessment

```
CHECK OTHER PLATFORMS
         ↓
PLATFORM IMPACT ANALYSIS
    ├─ X only → Maintain current level
    ├─ X + minor mentions (personal blogs) → Consider escalation
    ├─ X + Reddit (r/technology, r/SaaS, r/startups) → Level 2 or 3
    └─ X + mainstream media (TechCrunch, NYT, etc.) → Level 3
         ↓
CHECK VIRALITY ON OTHER PLATFORMS:
    - [ ] Reddit hot page or > 1k upvotes
    - [ ] LinkedIn > 1k reactions
    - [ ] Hacker News > 50 points
    - [ ] Product Hunt discussions
         ↓
ANY PLATFORM VIRALITY?
         ↓
    YES → Escalate to Level 3
```

---

## Factual Accuracy Assessment

```
VERIFY CLAIMS IN POST
         ↓
ACCURACY ANALYSIS
    ├─ Entirely false (malicious misinformation) → Level 2 or 3
    ├ Partially true (some truth, some exaggeration) → Level 2
    └─ Entirely true (genuine issue) → Respond to level of engagement
         ↓
IF ENTIRELY FALSE:
    - [ ] Prepare fact-based rebuttal
    - [ ] Consider Community Notes request
    - [ ] Level depends on spread and amplification
    - [ ] Don't delete post (Streisand effect)
```

---

## Quick Reference Flowchart

```
                ┌─────────────────────────────────────┐
                │      DETECT NEGATIVE POST            │
                └─────────────────┬───────────────────┘
                                  ▼
                    ┌─────────────────────────────┐
                    │  CHECK ENGAGEMENT METRICS   │
                    └─────────────────┬───────────┘
                                      │
          ┌───────────────────────────┼───────────────────────────┐
          │                           │                           │
          ▼                           ▼                           ▼
    < 100 interactions      100-1,000 interactions      > 1,000 interactions
          │                           │                           │
          ▼                           ▼                           ▼
    ┌───────────┐            ┌───────────────┐          ┌───────────────┐
    │   LEVEL 1 │            │   LEVEL 2     │          │   LEVEL 3     │
    │ Microwave │            │    Wave       │          │   Tsunami     │
    └───────────┘            └───────────────┘          └───────────────┘
          │                           │                           │
          ▼                           ▼                           ▼
    Customer Support        PR/Operations            Crisis Team
    Respond 1 hour           Respond 2-4 hours        Continuous updates
```

---

## Escalation Triggers (Move up one level)

```
If any of these happen during active response:
- [ ] Engagement rate > 100/hour
- [ ] New influencer amplification (higher tier)
- [ ] Cross-platform spread detected
- [ ] Media pickup
- [ ] Hashtag campaign emerges
- [ ] Coordinated attack patterns
- [ ] Executive engagement (positive or negative)
- [ ] Legal/regulatory involvement discovered

ACTION: Immediately escalate and notify next level team
```

---

## De-escalation Criteria

```
CONSIDER MOVING DOWN ONE LEVEL IF:
- [ ] Engagement has plateaued or decreasing for 2+ hours
- [ ] No new amplifiers for 4+ hours
- [ ] Sentiment shifting to neutral or positive
- [ ] Resolution provided and accepted
- [ ] No cross-platform spread for 6+ hours
- [ ] Trending status removed

ACTION: Maintain vigilance, but reduce update frequency
```

---

## Special Cases

### Executive Posts
```
IF CEO/FOUNDER MAKES POST:
- [ ] Immediate Level 3 regardless of metrics
- [ ] Activate full crisis team
- [ ] Legal review mandatory
- [ ] Company response required (not just executive)
```

### Competitor Posts
```
IF COMPETITOR POSTS:
- [ ] Monitor engagement level
- [ ] Don't escalate to crisis (different category)
- [ ] Consider response strategy (competitive response, not crisis)
- [ ] May require PR/Comms but not crisis team
```

### Customer Support Ticket Viral
```
IF SUPPORT TICKET GOES VIRAL:
- [ ] Assess if systemic issue or isolated
- [ ] Level based on engagement and impact
- [ ] Quick, personal response critical
- [ ] Opportunity to turn critic to advocate
```

---

## Decision Tree Execution Checklist

When any negative post is detected:
1. [ ] Capture post details (timestamp, content, metrics)
2. [ ] Run through Level 1 checklist
3. [ ] If passes, proceed to Level 1 response
4. [ ] If doesn't pass, run through Level 2 checklist
5. [ ] If passes, proceed to Level 2 response
6. [ ] If doesn't pass, check Level 3 criteria
7. [ ] Any Level 3 criteria triggers Level 3 response
8. [ ] Notify appropriate team based on final level
9. [ ] Document classification decision
10. [ ] Monitor for escalation triggers
11. [ ] Re-evaluate every 30 minutes until resolved

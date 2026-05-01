export interface Deliverable {
  id: string
  name: string
  desc: string
  impressionsEach: number
  priceEach: number
  unit: string
  channels: string[]
  color: string
}

// Prices and impression counts calibrated to real-world package totals:
//   Lobby (1F+1S+1N+1E+1L)  → ~$5,250 / ~330K impressions
//   Suite (3F+3S+1N+1E+1L)  → ~$11,450 / ~940K impressions
//   Penthouse (full build)   → ~$25K+ / ~2M+ impressions
// Update these numbers in one place to keep every calculation in sync.
export const DELIVERABLES: Deliverable[] = [
  {
    id: 'feed',
    name: 'Feed Feature (Carousel or Reel)',
    desc: 'Dedicated in-feed post with editorial framing and intentional brand placement',
    impressionsEach: 280000,
    priceEach: 2500,
    unit: 'post',
    channels: ['Instagram Feed'],
    color: '#8b6b3d',
  },
  {
    id: 'story',
    name: 'Instagram Story Set',
    desc: 'Native story sequence extending the feature with link placement',
    impressionsEach: 28000,
    priceEach: 600,
    unit: 'set',
    channels: ['Instagram Stories'],
    color: '#b08acc',
  },
  {
    id: 'newsletter',
    name: 'Newsletter Placement',
    desc: "Contextual brand placement in Opulist's curated newsletter (3K subscribers)",
    impressionsEach: 3000,
    priceEach: 750,
    unit: 'placement',
    channels: ['Email / Newsletter'],
    color: '#4a7a56',
  },
  {
    id: 'editorial',
    name: 'Editorial Feature (Blog)',
    desc: 'Long-form editorial on opulist.co with evergreen SEO value',
    impressionsEach: 5000,
    priceEach: 950,
    unit: 'feature',
    channels: ['Website / Blog'],
    color: '#7a9ab8',
  },
  {
    id: 'listing',
    name: 'Site Listing (Directory)',
    desc: "Placement in Opulist's search and discovery platform — ongoing visibility",
    impressionsEach: 12000,
    priceEach: 450,
    unit: 'listing',
    channels: ['Website / Directory'],
    color: '#a06820',
  },
  {
    id: 'cityguide',
    name: 'City Guide Inclusion',
    desc: 'Featured placement in an Opulist curated city guide post',
    impressionsEach: 8000,
    priceEach: 750,
    unit: 'guide',
    channels: ['Website / Blog'],
    color: '#7a9ab8',
  },
  {
    id: 'images',
    name: 'Licensed Images (5-pack)',
    desc: "Usage rights for 5 Opulist-created images for brand's organic use",
    impressionsEach: 0,
    priceEach: 500,
    unit: 'pack',
    channels: ['Asset'],
    color: '#aaa',
  },
  {
    id: 'event',
    name: 'Sponsored Event / Co-Hosting',
    desc: 'Curated event with pre-launch teaser, on-site coverage, and post-event recap',
    impressionsEach: 75000,
    priceEach: 4500,
    unit: 'event',
    channels: ['Instagram Feed', 'Instagram Stories', 'Website / Blog'],
    color: '#8b4040',
  },
]

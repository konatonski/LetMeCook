import type { CategoryId, IngredientOption } from "@/types";

// Which categories each app type needs
export const APP_TYPES: Record<string, { required: CategoryId[]; optional: CategoryId[] }> = {
  marketplace: {
    required: ["storage", "search", "payments", "database"],
    optional: ["style", "auth", "email"],
  },
  "ai-saas": {
    required: ["ai-provider", "database", "auth"],
    optional: ["style", "email"],
  },
  "yoga-studio": {
    required: ["database", "auth"],
    optional: ["payments", "email", "maps", "style"],
  },
  "portfolio": {
    required: ["style"],
    optional: ["email", "storage"],
  },
  "ecommerce": {
    required: ["storage", "payments", "database", "search"],
    optional: ["style", "auth", "email"],
  },
};

export const OPTIONS: Record<CategoryId, IngredientOption[]> = {
  storage: [
    {
      id: "cloudinary",
      label: "Cloudinary",
      tagline: "Hosted image CDN, auto-resizes, free tier included",
      categoryId: "storage",
      color: "amber",
      npm: ["cloudinary"],
      envKeys: ["CLOUDINARY_URL"],
    },
    {
      id: "s3",
      label: "S3",
      tagline: "Amazon's storage — most scalable, pay per GB used",
      categoryId: "storage",
      color: "amber",
      npm: ["@aws-sdk/client-s3", "@aws-sdk/s3-request-presigner"],
      envKeys: ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY", "AWS_REGION", "S3_BUCKET"],
    },
    {
      id: "supabase-storage",
      label: "Supabase Storage",
      tagline: "Built-in if you're already using Supabase — zero extra setup",
      categoryId: "storage",
      color: "amber",
      npm: ["@supabase/supabase-js"],
      envKeys: ["NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_ANON_KEY"],
    },
  ],

  search: [
    {
      id: "algolia",
      label: "Algolia",
      tagline: "Best-in-class search UX, typo-tolerant, generous free tier",
      categoryId: "search",
      color: "blue",
      npm: ["algoliasearch"],
      envKeys: ["NEXT_PUBLIC_ALGOLIA_APP_ID", "NEXT_PUBLIC_ALGOLIA_SEARCH_KEY", "ALGOLIA_ADMIN_KEY"],
    },
    {
      id: "typesense",
      label: "Typesense",
      tagline: "Open-source Algolia alternative, can self-host, very fast",
      categoryId: "search",
      color: "blue",
      npm: ["typesense"],
      envKeys: ["TYPESENSE_API_KEY", "TYPESENSE_HOST"],
    },
    {
      id: "postgres-fts",
      label: "Postgres Search",
      tagline: "Built-in full-text search — no extra service or cost",
      categoryId: "search",
      color: "blue",
      npm: [],
      envKeys: [],
    },
  ],

  style: [
    {
      id: "minimal",
      label: "Minimal",
      tagline: "Clean whitespace, neutral colors, content-first",
      categoryId: "style",
      color: "violet",
      npm: [],
      envKeys: [],
    },
    {
      id: "flashy",
      label: "Flashy",
      tagline: "Bold gradients, vivid colors, high visual energy",
      categoryId: "style",
      color: "violet",
      npm: [],
      envKeys: [],
    },
    {
      id: "balanced",
      label: "Balanced",
      tagline: "Professional with personality — works for most businesses",
      categoryId: "style",
      color: "violet",
      npm: [],
      envKeys: [],
    },
  ],

  payments: [
    {
      id: "stripe-connect",
      label: "Stripe Connect",
      tagline: "Marketplace payments — sellers get paid directly, you take a cut",
      categoryId: "payments",
      color: "emerald",
      npm: ["stripe", "@stripe/stripe-js"],
      envKeys: ["STRIPE_SECRET_KEY", "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY"],
    },
    {
      id: "stripe-checkout",
      label: "Stripe Checkout",
      tagline: "Simpler — you collect all money, pay out sellers yourself",
      categoryId: "payments",
      color: "emerald",
      npm: ["stripe", "@stripe/stripe-js"],
      envKeys: ["STRIPE_SECRET_KEY", "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY"],
    },
  ],

  database: [
    {
      id: "supabase",
      label: "Supabase",
      tagline: "Hosted Postgres with auth, real-time, and storage built in",
      categoryId: "database",
      color: "teal",
      npm: ["@supabase/supabase-js", "@supabase/ssr"],
      envKeys: ["NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_ANON_KEY", "SUPABASE_SERVICE_ROLE_KEY"],
    },
    {
      id: "planetscale",
      label: "PlanetScale",
      tagline: "Serverless MySQL — scales automatically, no connection limits",
      categoryId: "database",
      color: "teal",
      npm: ["@planetscale/database"],
      envKeys: ["DATABASE_URL"],
    },
  ],

  auth: [
    {
      id: "clerk",
      label: "Clerk",
      tagline: "Drop-in auth UI with social login, orgs, and user management",
      categoryId: "auth",
      color: "red",
      npm: ["@clerk/nextjs"],
      envKeys: ["NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY", "CLERK_SECRET_KEY"],
    },
    {
      id: "supabase-auth",
      label: "Supabase Auth",
      tagline: "Free, tightly integrated if you're already using Supabase",
      categoryId: "auth",
      color: "red",
      npm: ["@supabase/ssr", "@supabase/supabase-js"],
      envKeys: ["NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_ANON_KEY"],
    },
  ],

  email: [
    {
      id: "resend",
      label: "Resend",
      tagline: "Developer-friendly email — 3,000 free per month",
      categoryId: "email",
      color: "pink",
      npm: ["resend"],
      envKeys: ["RESEND_API_KEY"],
    },
    {
      id: "sendgrid",
      label: "SendGrid",
      tagline: "Battle-tested, 100 free per day, great deliverability",
      categoryId: "email",
      color: "pink",
      npm: ["@sendgrid/mail"],
      envKeys: ["SENDGRID_API_KEY"],
    },
  ],

  maps: [
    {
      id: "google-maps",
      label: "Google Maps",
      tagline: "Most familiar UX, rich features, free up to 200 requests/day",
      categoryId: "maps",
      color: "orange",
      npm: ["@react-google-maps/api"],
      envKeys: ["NEXT_PUBLIC_GOOGLE_MAPS_KEY"],
    },
    {
      id: "mapbox",
      label: "Mapbox",
      tagline: "Fully customizable maps, generous free tier, beautiful defaults",
      categoryId: "maps",
      color: "orange",
      npm: ["react-map-gl", "mapbox-gl"],
      envKeys: ["NEXT_PUBLIC_MAPBOX_TOKEN"],
    },
  ],

  "ai-provider": [
    {
      id: "openai",
      label: "OpenAI",
      tagline: "GPT-4o — industry standard, widest ecosystem",
      categoryId: "ai-provider",
      color: "indigo",
      npm: ["openai"],
      envKeys: ["OPENAI_API_KEY"],
    },
    {
      id: "anthropic",
      label: "Anthropic",
      tagline: "Claude — best reasoning, longest context window",
      categoryId: "ai-provider",
      color: "indigo",
      npm: ["@anthropic-ai/sdk"],
      envKeys: ["ANTHROPIC_API_KEY"],
    },
    {
      id: "groq",
      label: "Groq",
      tagline: "Fastest inference available — great for real-time features",
      categoryId: "ai-provider",
      color: "indigo",
      npm: ["groq-sdk"],
      envKeys: ["GROQ_API_KEY"],
    },
  ],
};

// Resolve npm packages for a given set of option IDs
export function resolveNpmDeps(optionIds: string[]): string[] {
  const packages = new Set<string>();
  for (const [, options] of Object.entries(OPTIONS)) {
    for (const option of options) {
      if (optionIds.includes(option.id)) {
        option.npm.forEach((pkg) => packages.add(pkg));
      }
    }
  }
  return Array.from(packages);
}

// Resolve env var keys for a given set of option IDs
export function resolveEnvKeys(optionIds: string[]): string[] {
  const keys = new Set<string>();
  for (const [, options] of Object.entries(OPTIONS)) {
    for (const option of options) {
      if (optionIds.includes(option.id)) {
        option.envKeys.forEach((k) => keys.add(k));
      }
    }
  }
  return Array.from(keys);
}

// Find an option by ID across all categories
export function findOption(optionId: string): IngredientOption | undefined {
  for (const options of Object.values(OPTIONS)) {
    const found = options.find((o) => o.id === optionId);
    if (found) return found;
  }
  return undefined;
}

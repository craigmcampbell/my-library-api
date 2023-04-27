interface FeatureFlags {
  enableElasticSearch: boolean;
}

export default function getFeatureFlags(): FeatureFlags {
  return {
    enableElasticSearch: process.env.FLAG_ENABLE_ELASTIC_SEARCH === 'true',
  };
}

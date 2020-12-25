module.exports = {
  async rewrites() {
    return [
      {
        source: '/empty1',
        destination: '/Empty1',
      },
      {
        source: '/empty2',
        destination: '/Empty2',
      },
      {
        source: '/empty3',
        destination: '/Empty3',
      },
      {
        source: '/empty4',
        destination: '/Empty4',
      },
      {
        source: '/empty5',
        destination: '/Empty5',
      },
      {
        source: '/empty6',
        destination: '/Eempty6',
      },
      {
        source: '/empty7',
        destination: '/Empty7',
      },
      {
        source: '/empty8',
        destination: '/Empty8',
      }
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
}
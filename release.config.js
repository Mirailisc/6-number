export default config = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-note-generator',
    [
      '@semantic-release/git',
      {
        assets: ['dist/*.js', 'dist/*.js.map'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github',
  ],
}

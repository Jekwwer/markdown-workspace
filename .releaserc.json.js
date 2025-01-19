module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        issuePrefixes: ['#'],
        writerOpts: {
          headerPartial: '## {{version}} - {{date}}',
          commitPartial:
            '- {{type}}: {{message}} {{#if references.length}}([#{{references.[0].issue}}]({{references.[0].url}})){{/if}}',
          footerPartial: '{{#if notes}}{{~notes~}}{{/if}}',
          groupBy: 'type',
          commitGroupsSort: 'title',
          noteGroups: [
            {
              title: '⚠️ Breaking Changes',
              collapse: false,
            },
          ],
        },
        transform: (commit, context) => {
          const typeMap = {
            feat: '🚀 New Features',
            fix: '🐞 Bug Fixes',
            docs: '📖 Documentation',
            chore: '📦 Chores',
            refactor: '🛠️ Refactoring',
            test: '✅ Testing',
            perf: '⚡ Performance Improvements',
            ci: '🔧 Continuous Integration',
            style: '🎨 Style Updates',
          };
          commit.type = typeMap[commit.type] || commit.type;
          return commit;
        },
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle:
          '# Changelog\n\nAll notable changes to this project will be documented in this file.',
      },
    ],
    '@semantic-release/npm',
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json', 'package-lock.json'],
        message:
          'chore(release): update changelog and bump version to ${nextRelease.version} [skip ci]',
      },
    ],
  ],
};

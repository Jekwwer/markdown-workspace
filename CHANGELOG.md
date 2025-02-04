# Changelog

## 1.6.0 - 2025-02-04
### 🚀 New Features

* **release:** add sync rule for patch triggering in repos ([4b59d04](https://github.com/jekwwer/markdown-template/commit/4b59d042abedcdb590c53e4adec410e3abc21436))

### 🐞 Bug Fixes

* **devcontainer:** correct image version and pip install command ([429100b](https://github.com/jekwwer/markdown-template/commit/429100baa3acd241b6b64fdea09e74b4dbdb5813))

## 1.5.0 - 2025-02-03
### 🚀 New Features

* **pre-commit:** switch to repo-based hook for markdown link check and adjust autoupdate schedule ([006bd77](https://github.com/jekwwer/markdown-template/commit/006bd77ff7ebb376bbce7e709efb9e6e62282df6))
* **release:** automate version update for SECURITY.md ([b0197fd](https://github.com/jekwwer/markdown-template/commit/b0197fd004d7f314a7325f18b487d5270065ffb2))

### 🐞 Bug Fixes

* **release:** restore version update assets for semantic-release ([d7d9d60](https://github.com/jekwwer/markdown-template/commit/d7d9d608283524f8ffb894fd7b57b6422f0c78ae))

### 📦 Dependency Updates

* **npm:** bump cspell and markdownlint-cli to latest versions ([d35a43a](https://github.com/jekwwer/markdown-template/commit/d35a43ad7c11f08d7b7158223de0f8bcd7915a40)), closes [#9](https://github.com/jekwwer/markdown-template/issues/9)
* **pre-commit:** bump cspell version to v8.17.2 ([71d3734](https://github.com/jekwwer/markdown-template/commit/71d37344f243365284cef0669566b8b9e1be598a))

### 📖 Documentation

* **readme:** update markdown linting tool reference ([f0a5a9f](https://github.com/jekwwer/markdown-template/commit/f0a5a9fd9fd4a4f684d0ed34c00ca2a2a7160b3b))
* **readme:** update README with new setup info for dev environment ([4a775d9](https://github.com/jekwwer/markdown-template/commit/4a775d9548a5fdf176b94183af2955d6f7b70fe2))

### 📦 Chores

* **config:** update config files to ensure tool sync and avoid conflicts ([cc2522a](https://github.com/jekwwer/markdown-template/commit/cc2522aa57d648db14df0edb21b3d21f585324fe))
* **security:** update document to reflect support for latest version ([f8148d3](https://github.com/jekwwer/markdown-template/commit/f8148d3176e70c72d831e6b0075e76f4d3e32943))

### 🛠️ Refactoring

* **config:** simplify configuration and rename jsonc files ([4050368](https://github.com/jekwwer/markdown-template/commit/4050368e862328a9fde1b5140c083c9acba87b75))
* **devcontainer:** transition to Python+NPM devcontainer configuration ([da70207](https://github.com/jekwwer/markdown-template/commit/da7020711d3bc62d0ed76afbe868735b6598a38a))

## 1.4.0 - 2025-01-30
### 🚀 New Features

* **releaserc:** add init type for initial release; update release assets ([08b02d3](https://github.com/jekwwer/markdown-template/commit/08b02d3165011680a2a0d40a5575983e4854b83e))

### 🎨 Code Style Improvements

* format about section in issue template ([7632fb5](https://github.com/jekwwer/markdown-template/commit/7632fb54061e308a8cd6b8c0087dd96c67c09ac1))

## 1.3.1 - 2025-01-28
### 🐞 Bug Fixes

* **cspell:** update ignore paths to check commit messages ([a067412](https://github.com/jekwwer/markdown-template/commit/a06741208728f81233a88c4783dea028a7f908c0))

### 📖 Documentation

* **readme:** update readme with latest changes and mkdocs version ([2d72f2c](https://github.com/jekwwer/markdown-template/commit/2d72f2c578587503377c88d91ce3761274e08d7b))
* **security:** update SECURITY.md for new supported version ([01d7c72](https://github.com/jekwwer/markdown-template/commit/01d7c72bc5dbef55c68ecb04af1dfb2f1bd44fee))

### 📦 Chores

* **changelog:** add missing version details and sort entries by new config ([19d1f73](https://github.com/jekwwer/markdown-template/commit/19d1f73e982eedc78ae8a944eb606127c573b57f))
* **gitignore:** update .gitignore to ignore CHANGELOG.md ([2c8e5de](https://github.com/jekwwer/markdown-template/commit/2c8e5de29d51760cc81629960bb067105fa7d2ea))
* **pre-commit:** standardize hook names and scripts ([9c62403](https://github.com/jekwwer/markdown-template/commit/9c6240360ff03ff9d1744226bc0ab3ca84a8aa57))
* **pre-commit:** switch cspell hook to repo version ([5304c17](https://github.com/jekwwer/markdown-template/commit/5304c1721616829e03f764b4a0be9b7949aedb81))
* **pre-commit:** update config with Conventional Commits standard and hooks to skip ([75db623](https://github.com/jekwwer/markdown-template/commit/75db623c475edb0e0509aa4925ae79effce49914))
* **pre-commit:** update markdownlint-cli dependency ([ca36f1e](https://github.com/jekwwer/markdown-template/commit/ca36f1e5578c50a3af566f8fb12d0f0d54772016))

### 🛠️ Refactoring

* **cspell:** remove redundant exceptions ([9f5e74c](https://github.com/jekwwer/markdown-template/commit/9f5e74cae02f8be7f4fd857f5049304875c4cba2))
* **deps:** remove unused remark configuration ([c334c89](https://github.com/jekwwer/markdown-template/commit/c334c89b9294409392dc9e5bb7e38882baca0085))
* **lint:** unify hooks and configurations to markdownlint-cli ([f786617](https://github.com/jekwwer/markdown-template/commit/f7866171a6712c4807ee1e6e4bd8126867b59a4f))

## 1.3.0 - 2025-01-21

### 🚀 New Features

* **release:** add custom sort and migrate config to .js ([7aef64b](https://github.com/jekwwer/markdown-template/commit/7aef64bf0924842c7f2f682f27e562eee4b3ff48))

## 1.2.0 - 2025-01-21

### 🚀 New Features

* **build:** switch package manager from Yarn to npm ([25e92ec](https://github.com/jekwwer/markdown-template/commit/25e92ec42153f7f15082fd149d1c8e6428b37fc0)), closes [#8](https://github.com/jekwwer/markdown-template/issues/8)
* **ci:** add semantic-release configuration ([d82df5d](https://github.com/jekwwer/markdown-template/commit/d82df5d024222fb069c36a43ecfe63205d59da50))
* **dev:** migrate from Husky to Pre-Commit for git hooks ([62e9c8e](https://github.com/jekwwer/markdown-template/commit/62e9c8e65636be949a128efae5dc1f50154806b2)), closes [#7](https://github.com/jekwwer/markdown-template/issues/7)
* **docs:** transition from Docsify to MkDocs ([db1d734](https://github.com/jekwwer/markdown-template/commit/db1d734ab2cfc7f237a9eb2048cb744dddfae31b)), closes [#6](https://github.com/jekwwer/markdown-template/issues/6)
* **metadata:** add new structured metadata to package.json ([9ad8c1e](https://github.com/jekwwer/markdown-template/commit/9ad8c1e2b13bd3440c7fdf0050af48014fc5fc2b))
* **prettier:** add configuration for Prettier ([1b8da19](https://github.com/jekwwer/markdown-template/commit/1b8da190691ee66e431ed9089d60dc39e70efee7))

### 🎨 Code Style Improvements

* adjust for Prettier and pre-commit config ([1810ef7](https://github.com/jekwwer/markdown-template/commit/1810ef73add1d81fd865271125b62cf5a6d6a13e))

### 📖 Documentation

* **readme:** update pre-commit hook information ([a89b8b1](https://github.com/jekwwer/markdown-template/commit/a89b8b1623b15c5b7889f00d215dd9014f0eac2e)), closes [#7](https://github.com/jekwwer/markdown-template/issues/7)
* **readme:** update README and its MkDocs version ([59a2712](https://github.com/jekwwer/markdown-template/commit/59a27122da486b232ef976f39cbcb94085fdd2fb))

### 📦 Chores

* **config:** synchronize Prettier configuration with EditorConfig ([36527d7](https://github.com/jekwwer/markdown-template/commit/36527d76b7cea5716e73aafdd81b9b976e0ffaae))
* **release:** update release configuration format ([56eb23b](https://github.com/jekwwer/markdown-template/commit/56eb23bc9f1059258c8a96404f9c80064e58f56d))
* **release:** update supported version in SECURITY.md for new release ([a092c46](https://github.com/jekwwer/markdown-template/commit/a092c465dea2c2952f05278f2a451d195183dae1))
* **release:** update release config and package.json ([e706a59](https://github.com/jekwwer/markdown-template/commit/e706a594f8f44ef07e43452ac023089f6c974e65))

### 🔄 Continuous Integration

* **release:** enhance release process with caching and permissions ([6c93f74](https://github.com/jekwwer/markdown-template/commit/6c93f740e24fcf4bab801808776e5bfbf9d72204))

## 1.1.0 - 2025-01-09

### 🔒 Security Updates

* **deps:** resolve vulnerabilities and update dependencies ([3821e10](https://github.com/jekwwer/markdown-template/commit/3821e10ec9b634cfbc8f0497bcc6fcc33e4fe886))

### 📖 Documentation

* **templates:** add issue and pull request templates, and update metadata ([dfa65ae](https://github.com/jekwwer/markdown-template/commit/dfa65ae46860d51839967105883ea50984bc2537))

### 📦 Chores

* **release:** bump version to 1.1.0 ([3762f11](https://github.com/jekwwer/markdown-template/commit/3762f11e1b8dad66c6a5c5f688c0c846a0454013))

## 1.0.2 - 2024-12-02

### 📦 Dependency Updates

* **npm:** bump cspell to 8.16.1 and prettier to 3.4.1 ([81fda90](https://github.com/jekwwer/markdown-template/commit/81fda9005b4e298283dae0ced5358ceed06c1dd9))
* bump husky from 9.1.6 to 9.1.7 ([4befa9c](https://github.com/jekwwer/markdown-template/commit/4befa9c7ba9328229325aa350abca15a7b312ecf))

### 📖 Documentation

* update README and refine spell-check configuration ([1f51767](https://github.com/jekwwer/markdown-template/commit/1f51767ebc1b5b7be16f827c9f943f8274d29f21))

### 🎨 Code Style Improvements

* **config:** enforce consistent formatting in config files ([a4664b2](https://github.com/jekwwer/markdown-template/commit/a4664b21d182b2c9106c61a96f28d38d298bda3e))

### 📦 Chores

* refine configuration and project metadata ([b5de05d](https://github.com/jekwwer/markdown-template/commit/b5de05dfe8b22a55a6d8e5535e3ed6c1c45345a0))
* refine Dependabot configuration ([ec84fa4](https://github.com/jekwwer/markdown-template/commit/ec84fa441e850d1dad4263af79025d38001424b9))
* **release:** bump version to 1.0.2 ([f14ba2e](https://github.com/jekwwer/markdown-template/commit/f14ba2e9005b767309a92e0390222eb6377631fe))
* **devcontainer:** simplify configuration and update commands ([5c861e7](https://github.com/jekwwer/markdown-template/commit/5c861e72b3e6986d26d9d9455b29ea3042b6bf83))
* **devcontainer:** update Dockerfile and devcontainer configuration ([7ac319c](https://github.com/jekwwer/markdown-template/commit/7ac319c50014ad8d1c76ddf811b667ae3d72451d))
* **config:** update cspell configuration ([2da0008](https://github.com/jekwwer/markdown-template/commit/2da0008eb11d344046f849648aec90689679b47e))
* rename cspell configuration file ([3db2669](https://github.com/jekwwer/markdown-template/commit/3db26696fe06beee7ed79b9ea42bd5ad50065ead))

## 1.0.1 - 2025-11-15

### 📦 Chores

* **release:** bump version to 1.0.1 ([eccfe31](https://github.com/jekwwer/markdown-template/commit/eccfe31bffe9cdf100b6adeaefe8073a1649b756))

## 1.0.0 - 2025-11-12

### 🚀 New Features

* **init:** add initial configuration files ([110f0c4](https://github.com/jekwwer/markdown-template/commit/110f0c46869559946d07198a679a8fa21c5064ad))

### 🐞 Bug Fixes

* **deps:** update marked and got to resolve security vulnerabilities ([1e522e7](https://github.com/jekwwer/markdown-template/commit/1e522e7cc0a9fdbd6cf5be06eb7bc839e4040377))
* **devcontainer:** prevent interactive mode error on Docsify init ([99aed37](https://github.com/jekwwer/markdown-template/commit/99aed3707bbea9770318523fb2845c80c472bbf4))

### 🔒 Security Updates

* **deps:** bump lint-staged from 13.3.0 to 15.2.10 ([06e18c8](https://github.com/jekwwer/markdown-template/commit/06e18c8b3fc2de0a154e4a6aaa259b956477dd59))
* bump husky from 8.0.3 to 9.1.6 ([89e32ee](https://github.com/jekwwer/markdown-template/commit/89e32ee769b34602c2f6ee9301133ad2291ccbed))

### 📖 Documentation

* add README with project setup and usage instructions ([e242428](https://github.com/jekwwer/markdown-template/commit/e2424281633d65b9600eb454746e2a953ddf428f))

### 🎨 Code Style Improvements

* **devcontainer:** add final newline to .dockerignore for .editorconfig compliance ([c061c2b](https://github.com/jekwwer/markdown-template/commit/c061c2b140a559b16f4ad3f69736db16d536dd31))

### 📦 Chores

* remove deprecated code and unify yarn commands ([30160f5](https://github.com/jekwwer/markdown-template/commit/30160f5e51bd82f4339f78014733b932562c5d7b))
* add Dependabot configuration for automated updates ([4e02e7a](https://github.com/jekwwer/markdown-template/commit/4e02e7a9b8b9b01e588ba4c573f6c3a863bf99c3))
* **pre-commit:** add pre-commit hook for linting and Dockerfile checks ([9afc703](https://github.com/jekwwer/markdown-template/commit/9afc70374a921630f80af228a30f5db1de7a7d83))
* **dev-setup:** add development environment and package files ([5982fe8](https://github.com/jekwwer/markdown-template/commit/5982fe892606ca997ae326d300a153ae64884609))

### 🔄 Continuous Integration

* **deploy:** add GitHub Actions workflow for Docsify deployment ([b823b5a](https://github.com/jekwwer/markdown-template/commit/b823b5a68ea7472ceeff4608f232e5fcde90eb8a))

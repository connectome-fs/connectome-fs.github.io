# Agent notes — connectome-fs website

## Identity

- Repository: `connectome-fs/connectome-fs.github.io`
- Public site: https://connectome-fs.github.io/
- Documentation hub: https://connectome-fs.github.io/docs/
- Core product and Antora component: `connectome-fs/connectome-fs`

## Stack

- SolidStart static site with organization news, blog, and roadmap under `content/`
- Antora hub built from the core repository's `docs/` component
- GitHub Pages deployment from `.output/public/`
- System UI sans-serif typography; no externally hosted web fonts
- Allow-list `.gitignore` (`*` followed by explicit inclusions)

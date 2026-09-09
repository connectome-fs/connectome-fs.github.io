# Agent notes — connectome-fs website

## Identity

- Repository: `connectome-fs/connectome-fs.github.io`
- Public site: https://connectome-fs.github.io/
- Documentation hub (separate repo): https://connectome-fs.github.io/docs/ — owned by `connectome-fs/docs`
- Core product and Antora component source: `connectome-fs/connectome-fs` (`docs/`)

## Stack

- SolidStart static site with organization news, blog, and roadmap under `content/`
- Does **not** build Antora — the org docs hub is `connectome-fs/docs`
- GitHub Pages deployment from `.output/public/`
- System UI sans-serif typography; no externally hosted web fonts
- Allow-list `.gitignore` (`*` followed by explicit inclusions)

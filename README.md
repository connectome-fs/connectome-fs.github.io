<a id="readme-top"></a>
<div align="center">
  <a href="https://github.com/connectome-fs/connectome-fs.github.io/graphs/contributors"><img src="https://img.shields.io/github/contributors/connectome-fs/connectome-fs.github.io.svg?style=for-the-badge" alt="Contributors"></a>
  <a href="https://github.com/connectome-fs/connectome-fs.github.io/network/members"><img src="https://img.shields.io/github/forks/connectome-fs/connectome-fs.github.io.svg?style=for-the-badge" alt="Forks"></a>
  <a href="https://github.com/connectome-fs/connectome-fs.github.io/stargazers"><img src="https://img.shields.io/github/stars/connectome-fs/connectome-fs.github.io.svg?style=for-the-badge" alt="Stargazers"></a>
  <a href="https://github.com/connectome-fs/connectome-fs.github.io/issues"><img src="https://img.shields.io/github/issues/connectome-fs/connectome-fs.github.io.svg?style=for-the-badge" alt="Issues"></a>
  <a href="https://github.com/connectome-fs/connectome-fs.github.io/blob/main/LICENSE"><img src="https://img.shields.io/github/license/connectome-fs/connectome-fs.github.io.svg?style=for-the-badge" alt="License"></a>

  <h1>connectome-fs website</h1>
  <p>Organization site, news, design notes, and roadmap.</p>
  <p>
    <a href="https://connectome-fs.github.io/"><strong>Visit the site »</strong></a>
    <br />
    <a href="https://connectome-fs.github.io/docs/connectome-fs/"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/connectome-fs/connectome-fs">Core repository</a>
    &middot;
    <a href="https://github.com/connectome-fs/connectome-fs.github.io/issues">Report Bug</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about">About</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#development">Development</a></li>
    <li><a href="#changelog">Changelog</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About

This repository publishes the root organization site at
`https://connectome-fs.github.io/`. The SolidStart site owns organization-level
content (news, about, roadmap). Product documentation is published by the
dedicated docs hub [`connectome-fs/docs`](https://github.com/connectome-fs/docs)
at `https://connectome-fs.github.io/docs/` — this website does not embed Antora.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With

* **App shell** — [![SolidStart][Solid.com]][Solid-url]
* **Content** — AsciiDoc sources under `content/`
* **Docs (separate repo)** — [![Antora][Antora.com]][Antora-url] via [`connectome-fs/docs`](https://github.com/connectome-fs/docs)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Development

```powershell
pnpm install
pnpm dev
```

Run `pnpm build` for the static production output under `.output/public/`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Changelog

See [CHANGELOG.adoc](CHANGELOG.adoc) and [changelog-details/](changelog-details/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

See [LICENSE](LICENSE).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Ryan Johnson — [@amdphreak](https://twitter.com/amdphreak)

Org: [https://github.com/connectome-fs](https://github.com/connectome-fs)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[Solid.com]: https://img.shields.io/badge/SolidStart-2C4F7C?style=for-the-badge&logo=solid&logoColor=white
[Solid-url]: https://start.solidjs.com/
[Antora.com]: https://img.shields.io/badge/Antora-4C4C4C?style=for-the-badge&logo=asciidoctor&logoColor=white
[Antora-url]: https://antora.org/

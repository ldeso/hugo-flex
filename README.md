# Hugo Flex

A lightweight Hugo theme leveraging CSS Flexbox


## Features

- 100% native code, no framework used
- Fully responsive layout with no hardcoded screen sizes
- Additional CSS and JS can be [dynamically embedded](#additional-css-rules) in HTML files
- Full posts in RSS feed
- Semantic HTML
- No javascript


## Installation

From the webstie root:

```bash
git submodule add https://github.com/de-souza/hugo-flex.git themes/hugo-flex
```

The theme must be set in the website config file:

```bash
echo 'theme: hugo-flex' >> config.yaml
```


## Updating

From the webstie root:

```bash
git submodule update --remote --rebase
```

## Configuration

Configuration options may be copied and modified from the theme defaults:

```yaml
params:
  color: teal  # Any color in CSS syntax
  footer: Except where otherwise noted, content on this site is licensed under
    a <a href="http://creativecommons.org/licenses/by/4.0/" rel="license">
    Creative Commons Attribution 4.0 International License</a>.

menu:
  nav:
  - name: About
    url: /about/
    weight: 1
  - name: Posts
    url: /post/
    weight: 2
  - name: Tags
    url: /tags/
    weight: 3
  - name: Categories
    url: /categories/
    weight: 4
  - name: RSS
    url: /index.xml
    weight: 5
```


## Dynamically embedded CSS and JS

Additional CSS and JS may be embedded in specific pages. They must be saved as partials (e.g. `/layout/partials/form.css`) and added to the front matter of the relevant pages:

```yaml
css:
  - form.css
js:
  - soundcloud.js
```


## License

This theme is licensed under the [Apache License 2.0](https://github.com/de-souza/hugo-flex/blob/master/LICENSE).

# Hugo Flex

A lightweight Hugo theme leveraging CSS Flexbox


## Features

- 100% native HTML and CSS
- CSS less than 2 kB and [dynamically embedded](#additional-css-rules)
- Fully responsive layout with no hardcoded screen size
- No javascript


## Installation

From the webstie root:

```bash
git submodule add https://github.com/de-souza/hugo-flex.git themes/hugo-flex
```

The theme must be set to `hugo-flex` in the website config file:

```bash
echo 'theme: hugo-flex' >> config.yaml
```


## Updating

```bash
git submodule update --remote --merge
```

## Configuration

Configuration options may be copied from the theme's config file:

```yaml
params:
  color: teal  # Any color in CSS syntax
  footer: Copyright © 2019 <a href="/about/" rel="author">Your Name Here</a>
    – Except where otherwise noted, content on this site is licensed under a
    <a href="http://creativecommons.org/licenses/by/4.0/" rel="license">
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


## Additional CSS Rules

Additional CSS rules can be embedded in specific pages. They must be saved in a partial, e.g. `/layout/partials/form.css`, and added to the relevant pages' front matter:

```yaml
css:
  - form.css
```


## License

This theme is licensed under the [Apache License 2.0](https://github.com/de-souza/hugo-flex/blob/master/LICENSE).

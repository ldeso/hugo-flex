# Hugo Flex

A lightweight Hugo theme leveraging CSS Flexbox


## Features

- Flexbox-based responsive layout with no hardcoded screen sizes
- 100% speed score on PageSpeed Insight
- 100% native code, no framework used
- Full posts in RSS feed
- No javascript

Optional features:

- Additional CSS and JS may be [dynamically embedded](#additional-css-rules)
- Built-in shortcodes:
  - On-click Soundcloud player
  - Netlify Identify contact form


## Installation

From the webstie root:

```bash
git submodule add https://github.com/de-souza/hugo-flex.git themes/hugo-flex
```

The theme must be set in the website config:

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

Additional CSS and JS may be embedded in specific pages. Code must be saved in a partial (e.g. `/layout/partials/myscript.js`) and added to the front matter of relevant pages:

```yaml
css:
  - mystyle.css
js:
  - myscript.js
```


## Built-In Shortcodes

### Netlify Identify Contact Form

A contact form for use with the Netlify Identify service is inserted with the shortcode:

```
{{< contact >}}
```

A custom success page may be given as a parameter:

```
{{< contact "/success/" >}}
```

This shortcode requires `contact.css` in the front matter of the contact page:

```yaml
css:
  - contact.css
```

### On-Click Soundcloud Player

An on-click Soundcloud Player is inserted with the shortcode:

```
{{< soundcloud 123456789 >}}
```

The parameter is a track ID and can be extracted from the "embed" sharing menu on the track webpage.

This shortcode requires `soundcloud.js` in the front matter:
```yaml
js:
  - soundcloud.js
```


## License

This theme is licensed under the [Apache License 2.0](https://github.com/de-souza/hugo-flex/blob/master/LICENSE).

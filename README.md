# Hugo Flex

A lightweight Hugo theme leveraging CSS Flexbox


## Features

- Flexbox-based responsive layout with no hardcoded screen sizes
- 100% speed score on PageSpeed Insight
- 100% native code, no framework used
- Full posts in RSS feed
- No javascript

Optional features:

- CSS and JS can be [dynamically embedded](#dynamically-embedded-css-and-js) with shortcodes
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


## Built-In Shortcodes

### Netlify Identify Contact Form

A contact form for use with the Netlify Identify service is inserted with the shortcode:

```
{{< contact >}}
```

A custom success page URL may be given as a parameter:

```
{{< contact "/success/" >}}
```

### On-Click Soundcloud Player

An on-click Soundcloud Player is inserted with the shortcode:

```
{{< soundcloud 123456789 >}}
```

The parameter is a track ID and can be extracted from the "embed" sharing menu on the track webpage.


## Dynamically embedded CSS and JS

Additional CSS and JS may be embedded with shortcodes. Relevant code must be saved as a partial (e.g. `website/layout/partials/myscript.js`) and its its filename must be added to the page-wide `.Scratch` variable. From within the shortcode template:

```html
{{ slice "myscript.js" | .Page.Scratch.Add "js" }}
```

As an example here is the template for the on-click Soundcloud player shortcode:

```html
{{ slice "soundcloud.css" | .Page.Scratch.Add "css" }}
{{ slice "soundcloud.js" | .Page.Scratch.Add "js" }}
<div class="soundcloud" data-id="{{ .Get 0 }}"></div>
```

## License

This theme is licensed under the [Apache License 2.0](https://github.com/de-souza/hugo-flex/blob/master/LICENSE).

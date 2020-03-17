# Hugo Flex

A lightweight Hugo theme leveraging CSS Flexbox


## Features

- Flexbox-based responsive layout
- Full posts in RSS feed
- Themed RSS feed
- No framework
- No javascript
- 100% speed score on PageSpeed Insight

Optional features:

- Show summaries on homepage
- Schema.org, Open Graph and Twitter Cards metadata
- Utterances comments widget
- Custom CSS and JS can be added [site-wide](#custom-css-and-js), or [dynamically](#dynamically-embedded) with shortcodes
- Built-in shortcodes:
  - Netlify contact form
  - On-click Soundcloud player


## Installation

From the website root:

```bash
git submodule add https://github.com/de-souza/hugo-flex.git themes/hugo-flex
```

The theme must be set in the website config:

```bash
echo 'theme: hugo-flex' >> config.yaml
```


## Updating

From the website root:

```bash
git submodule update --remote --rebase
```


## Example Site

The official [hugoBasicExample](https://github.com/gohugoio/hugoBasicExample) repository may be used as an example site. For a complete starter template for using this theme with in-depth explanations, see [hugo-flex-example](https://github.com/scivision/hugo-flex-example).


## Configuration

Configuration options may be copied and modified from the theme defaults:

```yaml
params:
  color: teal           # Any color in CSS syntax
  width: 42rem          # Any length in CSS syntax
  footer: >-            # A hardcoded space is needed before each html element
    Except where otherwise noted, content on this site is licensed under a &#32;
    <a href="http://creativecommons.org/licenses/by/4.0/" rel="license">Creative
    Commons Attribution 4.0 International License</a>.
  rss: To subscribe to this RSS feed, copy its address and paste it into your
    favorite feed reader.
  summaries: false      # Set to true to show summaries of posts on homepage
  divider: \a0          # Set to false to remove divider below posts on homepage
  schema: false         # Set to true to add Schema.org metadata
  opengraph: false      # Set to true to add Open Graph metadata
  twittercards: false   # Set to true to add Twitter Cards metadata
  utterances:
    repo:               # Set to Utterances repo URL to add Utterances comments
    issueterm: pathname
    theme: github-light
  netlify:
    honeypot: false     # Set to true to add honeypot field in contact form
    recaptcha: false    # Set to true to add recaptcha challenge in contact form
  # css:                # Uncomment to add custom CSS from a list of files
  #   - css/foo.css
  #   - bar.css
  # js:                 # Uncomment to add custom JS from a list of files
  #   - js/foo.js
  #   - bar.js

menu:
  nav:
  - name: About
    url: about/
    weight: 1
  - name: Posts
    url: post/
    weight: 2
  - name: Tags
    url: tags/
    weight: 3
  - name: Categories
    url: categories/
    weight: 4
  - name: RSS
    url: index.xml
    weight: 5
```


## Built-In Shortcodes

### Netlify Contact Form

A contact form working with the built-in Netlify form handling service is inserted with the shortcode:

```
{{< contact >}}
```

A custom success page URL may be given as a parameter:

```
{{< contact "/success" >}}
```

### On-Click Soundcloud Player

An on-click Soundcloud Player is inserted with the shortcode:

```
{{< soundcloud 123456789 >}}
```

The parameter is a track ID and can be extracted from the "embed" sharing menu on the track webpage.


## Custom CSS and JS

### Site-Wide

Custom CSS and JS can be added to all the pages on the website. To do so, the relevant filenames must be added to the website config file:

```yaml
params:
  css:
    - css/foo.css
    - bar.css
  js:
    - js/foo.js
    - bar.js
```

The paths are relative to the assets directory.


### Dynamically Embedded

To embed CSS and JS resources on specific pages of the website, they must be added to the `.Scratch` variable from a shortcode template. As a result, they will be loaded in pages where the shortcode is used. For instance, a shortcode template could contain:

```html
{{ resources.Get "myscript.js" | fingerprint | .Page.Scratch.SetInMap "js" "myscript" }}
```

This would load script myscript.js on every page where the shortcode is used.

As an example, this is the template for the built-in Soundcloud shortcode:

```html
{{ resources.Get "css/soundcloud.css" | minify | fingerprint | .Page.Scratch.SetInMap "css" "soundcloud" }}
{{ resources.Get "js/soundcloud.js" | minify | fingerprint  | .Page.Scratch.SetInMap "js" "soundcloud" }}
<div class="Soundcloud" data-id="{{ .Get 0 }}"></div>
```

## License

This theme is licensed under the [Apache License 2.0](https://github.com/de-souza/hugo-flex/blob/master/LICENSE).

# Hugo Flex

A lightweight Hugo theme leveraging [CSS Flexbox](https://developer.mozilla.org/docs/Web/CSS/CSS_Flexible_Box_Layout).

This theme is verified to work with [Hugo](https://gohugo.io/) versions v0.134.0–v0.139.0.


## Features

- [Flexbox](https://developer.mozilla.org/docs/Web/CSS/CSS_Flexible_Box_Layout)-based responsive layout
- 100% performance and accessibility scores on [PageSpeed Insights](https://pagespeed.web.dev/)
- No framework
- No javascript
- Full posts in RSS feed
- RSS page looks like a normal page
- [Multilingual support](https://gohugo.io/content-management/multilingual/)
- [Dark theme](https://mzl.la/3PVbdQX)

Optional features:

- [Server-side math rendering](#math-rendering)
- [Syntax highlighting](#syntax-highlighting)
- Show [summaries](https://gohugo.io/content-management/summaries/) on homepage
- [Schema.org](https://schema.org/), [Open Graph](https://ogp.me/) and [Twitter Cards](https://developer.twitter.com/cards/) metadata
- [Utterances](https://utteranc.es/) comments widget
- Custom CSS and JS may be added [site-wide](#custom-css-and-js), or [dynamically](#dynamically-embedded) with shortcodes
- Built-in shortcodes:
  - [Netlify contact form](#netlify-contact-form)
  - Privacy-friendly [SoundCloud player](#soundcloud-player)


## Example

The [demo site](https://ldeso.github.io/hugo-flex-demo/) is built from the [hugo-flex-demo](https://github.com/ldeso/hugo-flex-demo/) repository.

A complete starter template specifically made for this theme is also available at [scivision/hugo-flex-example](https://github.com/scivision/hugo-flex-example/).


## Installation

1. [Install Hugo](https://gohugo.io/installation/).

2. [Create a Hugo site](https://gohugo.io/getting-started/directory-structure/).

3. Open a command prompt at the root of the site and download the theme:

    ```bash
    git init
    git submodule add https://github.com/ldeso/hugo-flex.git themes/hugo-flex
    ```

4. Add the theme to the [site configuration](https://gohugo.io/getting-started/configuration/). If the site configuration is a file called `hugo.yaml`:

    ```bash
    echo 'theme: hugo-flex' >> hugo.yaml
    ```


## Updating

Open a command prompt at the site's root directory and update the theme:

```bash
git submodule update --remote --rebase
```


## Configuration

Any part of the default theme configuration can be copied to the [site configuration](https://gohugo.io/getting-started/configuration/) to be modified. The default theme configuration is:

```yaml
baseURL: https://example.org/
title: My New Hugo Site
languageCode: en-US
theme: hugo-flex

params:
  color: teal           # Any color in CSS syntax
  width: 42rem          # Any length in CSS syntax / leave empty to span page
  divider: \2500\2500   # Any string in CSS syntax / leave empty for no divider
  footer: >-            # HTML spaces (&#32;) are needed before HTML elements
    Except where otherwise noted, content on this site is licensed under a &#32;
    <a href="http://creativecommons.org/licenses/by/4.0/" rel="license">Creative
    Commons Attribution 4.0 International License</a>.
  rss: To subscribe to this RSS feed, copy its address and paste it into your
    favorite feed reader.
  favicon: false        # Set to true to add a link to the favicon.ico
  noClasses: &nc false  # Set to true to use inline CSS for syntax highlighting
  katex: 0.16.11        # KaTeX version / leave empty to use the latest version
  headingoffset: 0      # Change heading levels when rendering markdown
  linkicons: false      # Set to hover or true to add a link icon to headings
  summaries: false      # Set to true to show summaries of posts on homepage
  schema: false         # Set to true to add Schema.org metadata
  opengraph: false      # Set to true to add Open Graph metadata
  twittercards: false   # Set to true to add Twitter Cards metadata
  utterances:
    repo:               # Set to Utterances repo URL to add Utterances comments
    issueterm:          # Leave empty for the default blog post to issue mapping
    theme:              # Leave empty to use the adaptive Utterances dark theme
  netlify:
    honeypot: false     # Set to true to add honeypot field in contact form
    recaptcha: false    # Set to true to add recaptcha challenge in contact form
  # css:                # Uncomment to add custom CSS from the assets directory
  #   - css/foo.css
  #   - bar.css
  # js:                 # Uncomment to add custom JS from the assets directory
  #   - js/foo.js
  #   - bar.js

markup:
  highlight:
    noClasses: *nc      # Set to same value as params.noClasses
  goldmark:
    extensions:
      passthrough:
        enable: false   # Set to true to render math in LaTeX notation globally
        delimiters:
          block:
            - ['\[', '\]']
            - ['$$', '$$']
          inline:
            - ['\(', '\)']

menu:
  main:
    - name: About
      pageRef: /about
      weight: 1
    - name: Posts
      pageRef: /post
      weight: 2
    - name: Tags
      pageRef: /tags
      weight: 3
    - name: Categories
      pageRef: /categories
      weight: 4
    - name: RSS
      pageRef: /
      weight: 5
      params:
        - format: rss

outputFormats:
  rss:
    mediatype: application/rss+xml
    baseName: feed      # Rename RSS feed URL from rss.xml to feed.xml
```

By default, the date is shown in the headings of all normal pages and hidden on special pages. This can be overriden on specific pages by setting the `showdate` parameter in their [front matter](https://gohugo.io/content-management/front-matter/). For example, the date can be hidden on an "About" page by setting its front matter as follows:

```md
+++
title = "About"
date = 2006-01-02
[params]
  showdate = false
+++
```

## Math Rendering

Mathematical formulas written in LaTeX notation can be rendered to HTML without using javascript.
Rendering can take place either globally, or in specific locations using a built-in shortcode.

1. To render math globally, [enable the passthrough extension](https://gohugo.io/content-management/mathematics/) in the site configuration.

    ```latex
    Inline formulas such as $y=ax+b$ are supported, displayed formulas as well:

    $$
      e^{i\pi}+1=0
    $$
    ```

2. To render mathematical expressions in specific locations, surround them with the `math` shortcode:

    ```latex
    Inline formulas such as {{< math >}}y=ax+b{{< /math >}} are supported, displayed formulas as well:

    {{< math displayMode=true >}}
      e^{i\pi}+1=0
    {{< /math >}}
    ```


## Syntax Highlighting

By default, [syntax highlighting in Hugo](https://gohugo.io/content-management/syntax-highlighting/) adds inline styles to the HTML code generated by the syntax highlighter.
This can be problematic if the site has a strict [Content Security Policy](https://developer.mozilla.org/docs/Web/HTTP/CSP).
This theme makes it possible to automatically use an external stylesheet for syntax highlighting.

To use an external style sheet instead of inline styles, switch the options [markup.highlight.noClasses](https://gohugo.io/getting-started/configuration-markup/#highlight) and params.noClasses to false in the [site configuration](https://gohugo.io/getting-started/configuration/).
The resulting external style sheet is only included on pages of the site that require it.

The default syntax highlighting style is called [github-dark](https://xyproto.github.io/splash/docs/longer/github-dark.html).
To use a different style, a style sheet can be [generated](https://gohugo.io/commands/hugo_gen_chromastyles/) at the location `assets/css/syntax.css` by running the following command at the site root:

```sh
hugo gen chromastyles --style style-name > assets/css/syntax.css
```

The styles featuring both a high contrast and good compatibility with dark mode are called [average](https://xyproto.github.io/splash/docs/longer/average.html), [doom-one](https://xyproto.github.io/splash/docs/longer/doom-one.html), [doom-one2](https://xyproto.github.io/splash/docs/longer/doom-one2.html), [github-dark](https://xyproto.github.io/splash/docs/longer/github-dark.html), [modus-operandi](https://xyproto.github.io/splash/docs/longer/modus-operandi.html) (light background), [modus-vivendi](https://xyproto.github.io/splash/docs/longer/modus-vivendi.html), [rrt](https://xyproto.github.io/splash/docs/longer/rrt.html), and [witchhazel](https://xyproto.github.io/splash/docs/longer/witchhazel.html).

## Built-In Shortcodes

### Netlify Contact Form

A contact form that works with the [Netlify Forms](https://docs.netlify.com/forms/setup/) service can be inserted with the shortcode:

```
{{< contact >}}
```

A custom URL for the success page may be given as a parameter:

```
{{< contact "/success" >}}
```

### SoundCloud Player

A privacy-friendly [SoundCloud player](https://help.soundcloud.com/hc/articles/115003449627) can be inserted with the shortcode:

```
{{< soundcloud https://soundcloud.com/artist/track >}}
```

The embed player will only load after user input, and will be replaced by a simple link if JavaScript is disabled.

## Custom CSS and JS

This theme offers two ways to add custom CSS or JS assets, allowing minor modifications to be applied without needing to create a fork.

### Site-Wide

Custom CSS and JS files can be loaded as part of the base assets linked by every page.
To do so, their filenames have to be added to the [site configuration](#configuration):

```yaml
params:
  css:
    - css/foo.css
    - bar.css
  js:
    - js/foo.js
    - bar.js
```

The paths are relative to the [asset directory](https://gohugo.io/getting-started/configuration/#assetdir).
In this example, the file paths relative to the site root would be: `assets/css/foo.css`, `assets/bar.css`, `assets/js/foo.js`, and `assets/bar.js`.


### Dynamically Embedded

Sometimes, custom CSS or JS is needed only on specific pages. This theme offers a mechanism to load CSS or JS assets through [shortcodes](https://gohugo.io/content-management/shortcodes/).
The assets are loaded only once per page, even if they are required by several shortcodes in the same page.

To load a CSS or a JS resource on each page where a shortcode is used, the [shortcode template](https://gohugo.io/templates/shortcode-templates/) has to add the resource to the `css` or the `js` key of the page's [scratch pad](https://gohugo.io/methods/page/store/).
For instance, a shortcode template `myshortcode.html` containing the line

```html
{{ resources.Get "myscript.js" | .Page.Store.SetInMap "js" "myscript" }}
```

will cause `myscript.js` to be loaded on every page where `myshortcode` is used.

As a real-life example, this is the template for the built-in SoundCloud shortcode:

```html
{{ resources.Get "css/soundcloud.css" | .Page.Store.SetInMap "css" "soundcloud" }}
{{ resources.Get "js/soundcloud.js" | .Page.Store.SetInMap "js" "soundcloud" }}

<div class="Soundcloud">
  <a href="{{ .Get 0 }}" target="_blank" class="Soundcloud-box Soundcloud-box--link"><span class="Soundcloud-ellipsis">{{ .Get 0 }}</span></a>
</div>
```

## License

This theme is licensed under the [Apache License 2.0](https://github.com/ldeso/hugo-flex/raw/master/LICENSE).

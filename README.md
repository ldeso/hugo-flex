# Hugo Flex

A lightweight Hugo theme leveraging [CSS Flexbox](https://developer.mozilla.org/docs/Web/CSS/CSS_Flexible_Box_Layout).

This theme is verified to work with [Hugo](https://gohugo.io) versions v0.100–v0.121.


## Features

- [Flexbox](https://developer.mozilla.org/docs/Web/CSS/CSS_Flexible_Box_Layout)-based responsive layout
- [100% performance and accessibility scores](https://pagespeed.web.dev/analysis/https-ldeso-github-io-hugo-flex-demo/qffcl2ukg4) on PageSpeed Insights
- No framework
- No javascript
- Full posts in RSS feed
- RSS page looks like a normal page
- [Multilingual support](https://gohugo.io/content-management/multilingual/)
- [Dark theme](https://mzl.la/3PVbdQX)

Optional features:

- [Syntax highlighting](#syntax-highlighting)
- Show [summaries](https://gohugo.io/content-management/summaries/) on homepage
- [Schema.org](https://schema.org/), [Open Graph](https://ogp.me/) and [Twitter Cards](https://developer.twitter.com/cards/) metadata
- [Utterances](https://utteranc.es/) comments widget
- Custom CSS and JS may be added [site-wide](#custom-css-and-js), or [dynamically](#dynamically-embedded) with shortcodes
- Built-in shortcodes:
  - [Math rendering](#math-rendering) with [KaTeX](https://katex.org/)
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
params:
  color: teal           # Any color in CSS syntax
  width: 42rem          # Any length in CSS syntax / leave empty to span page
  divider: \a0          # Any string in CSS syntax / leave empty for no divider
  footer: >-            # HTML spaces (&#32;) are needed before HTML elements
    Except where otherwise noted, content on this site is licensed under a &#32;
    <a href="http://creativecommons.org/licenses/by/4.0/" rel="license">Creative
    Commons Attribution 4.0 International License</a>.
  rss: To subscribe to this RSS feed, copy its address and paste it into your
    favorite feed reader.
  favicon: false        # Set to true to add a link to the favicon.ico
  noClasses: true       # Set to the same value as markup.highlight.noClasses
  katex: 0.16.9         # KaTeX version / leave empty to download latest version
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

mediaTypes:
  font/woff2:
    suffixes:
      - woff2
```


## Built-In Shortcodes

### Math Rendering

Mathematical formulas written in LaTeX notation can be rendered to HTML by surrounding them with the `math` shortcode:

```
{{< math >}}
Inline formulas such as $y=ax+b$ are supported, displayed formulas as well:

$$e^{i\pi}+1=0$$
{{</ math >}}
```

Using this shortcode bundles the [KaTeX](https://katex.org/) library with the website, to render math on the client side.
As of 2023, it is [not yet possible](https://github.com/gohugoio/hugo/issues/10044) to render math on the server side with Hugo.

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
{{< soundcloud 123456789 >}}
```

The parameter is the track ID and can be extracted from the track's [embed code](https://help.soundcloud.com/hc/articles/115003568008).
The player will only load after user input.


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

## Custom CSS and JS

This theme offers two ways to add custom CSS or JS assets, allowing minor modifications to be applied without needing to create a fork.

### Site-Wide

Custom CSS and JS files can be loaded as part of the base asset linked by every page. To do so, their filenames have to be added to the [site configuration](#configuration):

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

To load a CSS or a JS resource on each page where a shortcode is used, the [shortcode template](https://gohugo.io/templates/shortcode-templates/) has to add the resource to the `css` or the `js` key of the [Scratch variable](https://gohugo.io/functions/scratch/).
For instance, a shortcode template `myshortcode.html` containing the line

```html
{{ resources.Get "myscript.js" | fingerprint | .Page.Scratch.SetInMap "js" "myscript" }}
```

will cause `myscript.js` to be loaded on every page where `myshortcode` is used.

As a real-life example, this is the template for the built-in SoundCloud shortcode:

```html
{{ resources.Get "css/soundcloud.css" | minify | fingerprint | .Page.Scratch.SetInMap "css" "soundcloud" }}
{{ resources.Get "js/soundcloud.js" | minify | fingerprint  | .Page.Scratch.SetInMap "js" "soundcloud" }}
<div class="Soundcloud" data-id="{{ .Get 0 }}"></div>
```

## License

This theme is licensed under the [Apache License 2.0](https://github.com/ldeso/hugo-flex/blob/master/LICENSE).

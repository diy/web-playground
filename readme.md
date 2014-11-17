# diy-web-playground

Play with web examples in a DIY friendly environment.

This module will wrap input html in an environment setup with essential DIY
branded components like the
[apex-rounded-web](https://github.com/diy/apex-rounded-web) font and
[diy-icons](https://github.com/diy/icons).

# Usage

```
npm install diy/web-playground -g
cd /examples && web-playground
```

Assumes `examples/_index.html` and `examples/index.css` exist. The prefixed to
`index.html` is required to avoid beefy.js loading the html before we get a
chance to wrap it.

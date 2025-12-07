---
id: box-shadow
title: Box Shadow
taxonomy:
    - Tech
    - Web
    - CSS
    - Properties
---

The [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) property adds a shadow effect around an HTML element.

The `box-shadow` property can have multiple argument with the following rules:

```
box-shadow: none;
box-shadow: <offset-x> <offset-y> [blur-radius] [spread-radius] ['inset'] [color];
```

Default global values:

```
box-shadow: 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';
```

Notes:

- The order of the values numerical values is significant.
- inset and color can both be used either end of the definition, but not in the middle.
- box-shadow definitions can be repeated

```
box-shadow: <definition>, <definition>, <definition>;
```

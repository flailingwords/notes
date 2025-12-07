---
id: border-radius
title: Border Radius
taxonomy:
    - Tech
    - Web
    - CSS
    - Properties
---

## Basic definitions

The [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) property adds a radius effect on the corners of an HTML element.

The `border-radius` property can have multiple argument with the following rules:

```
border-radius: <single unit for all sides>;

border-radius: <unit top left; bottom right is same> <unit top right; bottom left is same>;

border-radius: <unit top left> <unit top right; bottom left is same> <unit bottom right>;

border-radius: <unit top left> <unit top right> <unit bottom right> <unit bottom left> ;
```

Default global values:

```
border-radius: 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';
```

## Individual corner radius definitions

Each corner can be set individually or derive from the definition above.

```
[...]
border-radius-top-left: <x=y unit>;
border-radius-top-left: <x unit> <y unit>;
[...]
```

This allows one to define asymmetric/elliptical corners.

## Slash notation

Slash notation can be used to fill each corner definition with both X and Y units in every combination.

```
border-radius: <units definitions> / <units definitions>;
```

## Notes

- units can length definitions or percentage definitions.

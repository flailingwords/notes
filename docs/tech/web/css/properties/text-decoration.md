---
id: text-decoration
title: Text Decoration
taxonomy:
    - Tech
    - Web
    - CSS
    - Properties
---

## Basic definitions

The [`text-decoration`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) sets text decoration properties on text and is shorthand for the following properties:

- text-decoration-color
    - any valid CSS color value
- text-decoration-line
    - `none`
    - any combination of:
        - `underline`
        - `overline`
        - `line-through`
        - `blink`
        - `spelling-error`
        - `grammar-error`
- text-decoration-style
    - any combination of:
        - `solid`
        - `double`
        - `dotted`
        - `dashed`
        - `wavy`
- text-decoration-thickness:
    - `auto`
    - `from-font`
    - or any valid [`<length>`](https://developer.mozilla.org/en-US/docs/Web/CSS/length) or [`<percentage>`](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage) value

## Defaults

Default values are:

- `color`: `currentcolor`
- `style`: `solid`
- `line`: `none`

## Rules

Because all arguments are unique, there are no specific rules in terms of ordering.

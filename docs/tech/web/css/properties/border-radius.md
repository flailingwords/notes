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

> _border-radius_: &lt;single unit for all sides&gt;;
>
> _border-radius_: &lt;unit top left; bottom right is same&gt; &lt;unit top right; bottom left is same&gt;;
>
> _border-radius_: &lt;unit top left&gt; &lt;unit top right; bottom left is same&gt; &lt;unit bottom right&gt;;
>
> _border-radius_: &lt;unit top left&gt; &lt;unit top right&gt; &lt;unit bottom right&gt; &lt;unit bottom left&gt; ;

Default global values:

> _border-radius_: 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';

## Individual corner radius definitions

Each corner can be set individually or derive from the definition above.

> [...]
>
> border-radius-top-left: &lt;x=y unit&gt;;
>
> border-radius-top-left: &lt;x unit&gt; &lt;y unit&gt;;
>
> [...]

This allows one to define asymmetric/elliptical corners.

## Slash notation

Slash notation can be used to fill each corner definition with both X and Y units in every combination.

> _border-radius_: &lt;units definitions&gt; / &lt;units definitions&gt;;

## Notes

- units can length definitions or percentage definitions.

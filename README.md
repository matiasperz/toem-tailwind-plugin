# <img class="not-prose" src="https://github.com/matiasperz/toem-tailwind-plugin/assets/43894343/14b223fb-2fc8-4ae9-93ef-ef0de74c921f" alt="Description of the image" style="width:44px; display:inline;"> `toem` Tailwind Plugin

A Tailwind plugin for dynamically calculate `em` values.

## Install

```bash
npm install toem-tailwind-plugin
```

Then you just need to import it and add it to the plugins array in your `tailwind.config.js`.

```javascript
import toemPlugin from 'toem-tailwind-plugin'

export default {
  /* ...your tailwind config goes here... */
  plugins: [
    toemPlugin(
      {
        /* Optional */
        defaultBase: 16 /* Default value is: 16 */
      }
    )
  ]
}
```

## How to use it?

![how to use it](https://assets.matiasperez.dev/toem-tailwind-plugin/how-to-use-it.png?v=6)

Targeting 13px on a base of 16px will result in `13px/16px = 0.8125em`.
```html
<div class="text-base flex items-center gap-x-em-[24/16]">
  <img class="size-em-[32/16]" src="..." alt="profile pic" />

  <p class="text-em-[13/16]">
    Lorem Ipsum
  </p>
<div>
```

## Preview the result
I highly recommend installing the [Tailwind IntelliSense plugin for VSCode](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss), it will display the result of the dynamic calculation.

![intellisense](https://assets.matiasperez.dev/toem-tailwind-plugin/intellisense.png?v=3)

## Supported properties
All the Tailwind classes that target css properties that accept `em` units as values are supported, but if I missed one feel free to [open a PR](https://github.com/matiasperz/toem-tailwind-plugin/pulls).

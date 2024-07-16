# <img src="https://github.com/matiasperz/toem-tailwind-plugin/assets/43894343/14b223fb-2fc8-4ae9-93ef-ef0de74c921f" alt="Description of the image" style="width:44px; display:inline;"> To-EM Tailwind Plugin
I Highly recommend installing the [Tailwind IntelliSense plugin for VSCode](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss), it will display the result of the dynamic calculation.

## How to use it?

Targeting 13px on a base of 16px will result in `13px/16px = 0.8125em`.
```html
<div class="flex items-center gap-x-em-[24/16] text-base">
  <img class="size-em-[32/16]" src="..." alt="profile pic" />

  <p class="text-em-[13/16]">
    Lorem Ipsuma
  </p>
<div>
```

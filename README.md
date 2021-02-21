## Custom tailwindcss config documentation

Generate the documentation of all the CSS classes generated with a custom tailwindcss config.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Location of tailwindcss config - `src/constants/customTailwindConfig`

## Features

1. Shows the status of the plugin ( Enabled/ Disbled ). 

Eg. I have disabled `float` and `clear` plugins as i do not want to use them. So in the Sidebar and details page of `float` and `clear`, it shows disabled so that i don't accidently try to use them.

2. Generated tailwindcss config is also shown

Shows the tailwindcss config provided and also the generated final config (after merging with the default config) used to generate the CSS classes. Eg. https://custom-tailwindcss-docs.vercel.app/config 

3. The CSS classes can be copied on click to the clipboard from the Class Table for all plugins
4. Variants available for each plugin are shown on the plugin page. 

## Getting Started

First, run the development server:

```bash
npm run dev

yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## TODO 
```
1. animation, preflight, container plugin generation not available

```
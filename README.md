# eleventy-starter-template

A barebone/minimal starter template for the eleventy static-site generator.

Includes an empty base layout, empty static files that get included in the base
layout and are available at `/static/css/style.css` and `/static/js/script.js`
and a `facicon.ico` that gets included when building the site.

## Usage

Clone the repo:
```
git clone neelkamal0310/eleventy-starter-template
cd eleventy-starter-template
```

Install dependencies:
```
npm install
```

Build the site:
```
npx eleventy
```

or

Start the development server:
```
npx eleventy --serve
```

Detailed guide on how to use eleventy can be found on their official docs
[here](https://www.11ty.dev/docs/)

## Template layout

```
.
├── .eleventyignore
├── .eleventy.js
├── favicon.ico
├── .gitignore
├── _includes
│   └── base.njk
├── index.md
├── LICENSE
├── package.json
└── static
    ├── css
    │   └── style.css
    └── js
        └── script.js
```

`.eleventyignore`: includes the files to be ignored while building the site.
This is required, because if not included eleventy will try to build the
default `README.md` and .md files from installed dependencies in `node_modules`
directory which can cause errors.

`.eleventy.js`: contains code to include the `static` and `favicon.ico` while
building the site.

`favicon.ico`: favicon for the site.

`_includes/`: directory for layouts. Contains a single layout `base`. More can
be added as per requirements.

`index.md`: contains code for the homepage of the site.

`static/`: contains static files. More directories or files can be added inside
this directory and they will be avaiable at `static/<file-or-dir>`.

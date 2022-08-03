# Vue + Ts + Navie UI

## Vue 3 + Typescript + Vite

- yarn create @vitejs/app vite_vue3_ts --template

## Vue Router + Pinia

- yarn add vue-router@4
- yarn add pinia

## Scss + Windi Css

- yarn add sass-loader dart-sass sass --dev
- yarn add vite-plugin-windicss windicss --dev

## Naive UI + xicons

- yarn add naive-ui --dev
- yarn add vfonts --dev
- yarn add @vicons/antd --dev

## ESlint + prettier

- yarn add eslint --dev
- yarn add eslint-plugin-vue --dev
- yarn add @typescript-eslint/eslint-plugin --dev
- yarn add @typescript-eslint/parser --dev
- yarn add eslint-plugin-prettier --dev
- yarn add prettier --dev
- yarn add eslint-config-prettier --dev

## husky + lint-staged
- yarn add mrm --registry=https://registry.npm.taobao.org --dev
- npx mrm lint-staged

```
// theme style
// vite.config.ts
css:{
    preprocessorOptions:{
      scss:{
        additionalData:'@import "@/assets/style/global.scss";'
      }
    }
}
// App.vue
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: "#0d9488",
    primaryColorHover: lighten("#0d9488", 6),
    primaryColorPressed: lighten("#0d9488", 6),
  },
}
// windi.config.ts
theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0d9488",
        },
      }
    }
}      
```

```
// config path alias(vite.config.ts)
const resolve = (dir: string) => join(__dirname, dir)
resolve: {
  alias: {
    "/@": resolve("src"),
  },
}
```

```
// config code standard(package.json)
"script": {
  "lint": "eslint src --fix --ext .ts,.tsx,.vue,.js,.jsx",
  "prettier": "prettier --write ."
}
```

```
// config commit auto format(package.json)
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*.{js,jsx,vue,ts,tsx}": [
    "yarn lint",
    "prettier --write",
    "git add"
  ]
}
```

```
// compress build files(vite.config.ts)
viteCompression({
  verbose: true,
  disable: false,
  threshold: 10240,
  algorithm: 'gzip',
  ext: '.gz',
}),
```
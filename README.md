## plugin和loader部分遇到报错时(遇警告3步走)
**1.先复制下面的package.json覆盖你的"devDependencies"。**
```json
package.json

"devDependencies": {
    "css-loader": "^3.2.0",
    "dart-sass": "^1.23.7",
    "file-loader": "^5.0.2",
    "html-webpack-plugin": "^3.2.0",
    "less": "^3.10.3",
    "less-loader": "^5.0.0",
    "mini-css-extract-plugin": "^0.8.0",
    "sass-loader": "^8.0.0",
    "style-loader": "^1.0.1",
    "stylus": "^0.54.7",
    "stylus-loader": "^3.0.2",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.9.0"
  }
```

`2.yarn install`

`3.yarn build`

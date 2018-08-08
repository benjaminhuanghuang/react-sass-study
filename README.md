## Reference
- Sass styles in create-react-app
    - https://www.youtube.com/watch?v=B_zZDa80FVo


## Setup
```
    create-react-app .

    npm run eject
```

## sass loader
- https://github.com/webpack-contrib/sass-loader

```
    npm i -D sass-loader css-loader
```

## webpack config
- https://github.com/webpack-contrib/sass-loader
```
{
    test: /\.(scss|sass)$/,
    use: [
        "style-loader", // creates style nodes from JS strings
        "css-loader", // translates CSS into CommonJS
        "sass-loader" // compiles Sass to CSS, using Node Sass by default
    ]
}
````
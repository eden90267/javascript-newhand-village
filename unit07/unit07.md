# Unit 7. CSS 版面配置與框架 #

## Basic Box Model ##

![css-box-model](http://i.imgur.com/AHSy5c3.png)

border-box寬度含border、padding：

```
box-sizing: border-box;
```

預設content-box不含border、padding

### Box Model ###

- 內容 `content`
- 內距(留白) `padding`
- 邊框 `border`
- 邊界 `margin`

```
margin: 上 右 下 左
```

口訣：順時針！

## 定位與排版 ##

block、inline其實就是CSS的display值

inline不能包block

### 排版定位方式 ###

- position：relative | absolute | fixed | static

    ![position](http://www.virtuosimedia.com/includes/Files/Uploaded/Images/Articles/Content/css-positioning.jpg)

- float：left | right (記得clear，把流動清除掉)

    ![float](http://i.imgur.com/4ybZXG3.png)

    float是文繞圖的意思，會破壞原本的normal flow(由上而下、由左而右的排列)

- column
- display：flex

    react native主要用flex做排版

## Bootstrap CSS 框架 ##

CSS框架定義了style guide，透過套用class可以使用其定義的component和樣式

### 網格布局 ###

![bootstrap-12-grid-overlay](http://www.ryanwright.me/sites/default/files/images/cookbooks/bootstrap/a1/12-grid-overlay.jpg)

[bootstrap_grid_examples](http://getbootstrap.com/examples/grid/)

## RWD ##

## CSS預處理器 (Sass、LESS) ##

類似程式語言、reuse的方式使用CSS。但須要轉譯。

可節省開發時間。
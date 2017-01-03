# Unit 6. CSS入門概論 #

## Web 前端三劍客 ##

1. 內容架構 - HTML
2. `外觀樣式 - CSS`
3. 行為互動 - JavaScript

## 關於CSS的一些小事 ##

層疊樣式表(原文：Cascading Style Sheets，簡寫CSS)

## CSS屬性分兩大類 ##

- 外觀

    主要負責控制如：文字顏色、大小、背景顏色等外觀

- 版面

    負責如何將元素放置在螢幕中適切的位置
    
## CSS使用方式 ##

1. 行內樣式(Inline Styles)
2. 內嵌樣式(Embeded Styles)
3. 外部樣式表(External Stylesheets) *

## 串起HTML和CSS ##

CSS運作方式是將規則和HTML的元素連結起來。這些規則定義了特定元素所呈現的外觀樣式

CSS規則包含兩部分：

1. 選擇器
2. 宣告

CSS宣告位在大括號中，每個宣告由兩部分所組成：屬性與值，每個宣告可有多個屬性，屬性間用分號區隔。

```

p {
    color: red;
    font-family: Arial;
    // 屬性(元素的面相):值(想用在該元素上的設定值)
}

```

## 常用選擇器種類 ##

- Universal selector (通用選擇器)

    使用 * 選取所有元素

- Type selectprs (型態選擇器)

    Ex. h1、p，選取該元素

- Class selectors (Class選擇器)

    使用.class，選取該class元素

- ID selectors (ID選擇器)

    使用#ID，選取該id元素
    
### Pseudo-classes (偽類選擇器) ###

指元素的狀態設置外觀

- `:link` (超連結平常的樣式)
- `:visited` (超連結點閱後的樣式)
- `:hover` (滑鼠滑入的樣式)
- `:active` (滑鼠按下的樣式)
- `:focus` (目標為焦點的樣式)

請注意順序，因為CSS後來優先，權重相同者會被覆蓋

## CSS 階層 ##

CSS是階層樣式表，在定義外觀樣式時難免會有不同的樣式去定義到同一個元素的情況

- Specificity 比大小

    ![specificity](http://www.standardista.com/wp-content/uploads/2012/01/specificityimg.png)

- 使用者優先
- `!important` 大魔王
- 後來會覆蓋之前
- 越接近元素越強
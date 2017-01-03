# Unit 4. HTML標籤基礎 #

## HTML標籤簡介 1 - 文字 ##

- 結構性標籤

    可以用來描述標題和段落的元素
    
    EX：`<h1>`、`<p>`

- 語法標籤

    提供語氣、強調或是引述的額外資訊
    
    EX：`<strong>`、`<em>`
    
## HTML標籤簡介 2 - 清單 ##

- 編號清單 *

    - 每個項目依序編號，適用於有順序性項目
    - `<ol><li></li></ol>`

- 項目清單 *

    - 每個項目前為實心圓點，為無序排列
    - `<ul><li></li></ul>`

- 定義清單

    尤其定義和項目組成
    
## HTML標籤簡介 3 - 超連結 ##

`<a href="連結網址" target="開啟方式">帶我走</a>`

- `href`：常見屬性值(純網址、mailto、tel)
- `target`：常見屬性值(`_blank` (開新視窗)、`_self` (開在自己的視窗，default))

### 相對位置、絕對位置 ###

- 絕對位置

    https://www.google.com.tw/

- 相對位置

    - 父資料夾：`../father/father.html`
    - 子資料夾：`./sample/son.html`
    - 同資料夾：`./index.html`
    
## HTML標籤簡介 4 - 影像 ##

`<img src="圖存放位置" alt="破圖說明" title="滑鼠移至圖上說明">`

## HTML標籤簡介 5 - 表格 ##

`<table></table>`表格用於呈現有系統的資料，通常於節目單、議程、時間表等，以列 (row) 為方式呈現

## HTML標籤簡介 6 - 表單 ##

`<form></form>`表單是撰寫動態網站和資料庫互動的重要一環，常用於客戶端(Client)蒐集資訊，透過提交表單可以讓資料傳送到給後端程式處理

```

<form action"input.php" method="post">
<!-- action放置後端程式位置，method為傳送方式，GET會顯示提交內容於網址列，POST則不會 -->
  <input type="text" name="query">搜尋
  <input type="submit" value="提交">
</form>

```

### 表單運作 ###

瀏覽的網頁傳遞參數給Server端主要有兩種方法：

- GET

    透過URL傳遞資料，有長度限制、安全性等問題。但執行速度較快，可加入書籤。一般用於獲取/查詢資源資訊

- POST

    資料傳遞，網址不更動。不受限URL長度。透過HTTP message body夾帶，故參數值不會顯示於URL，'常用於更新資源、登入
    
#### 文字區塊 ####

#### 單選鈕、勾選框 ####

#### 選單 ####

## 排版用 div 和 span 標籤 ##

沒有特別意涵。主要搭配 CSS 來進行排版

- `<div></div>`標籤

    屬於block level(`<h1>`、`<p>`、`<ul>`、`<li>`)，會換行將文字和元素群組在區塊中，讓CSS控制其樣式
    
- `<span></span>`標籤

    inline level(`<a>`、`<em>`、`<img>`)，不會換行作用就像`<div>`行內版，讓CSS控制其樣式
    
## 全域(Global)屬性 ##

## HTML5支援語意標籤取代傳統div ##

更語意化的標籤

`<header>`、`<section>`、`<nav>`、`<article>`、`<footer>`、`<aside>`
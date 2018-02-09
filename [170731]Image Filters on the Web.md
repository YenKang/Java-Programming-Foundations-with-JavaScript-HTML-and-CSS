

### 2017-07-31(一) 蓋樓[222]

## MiniProject: Image Filters on the Web:[Image Filters on the Web]

### Mini Project1:
- 基本功能：Upload照片＋Display照片，另外還有grayscale
-  增加功能：Red 與 reset image

思考：

1. 基本功能可以reuse，去twitter找尋之前的作業
2. reset image 要用到clear，然後再次抓取upload的file，把他放速canvas中
3. red 這個功能，應該是 紅色濾鏡的功能，但是紅色的濾鏡，要把pixel做怎樣的處理是一個問題

Check if the original image is loaded.
- If the image is loaded: display it on the canvas, and reset all of the global variables for filter images to the original image. 

- This way, if you run one of your filters after resetting, the filter will run on the original image, not on the already filtered image.

[<最後解答鏈結>](https://gist.github.com/anonymous/ae878317fd5e89f5db16a7ca01f5b16f)

### 總結：
>1. 卡住的點在於reset的步驟拆解，先是clear原本的圖片後，再重新upload（u又稱 reload）

>2. 找尋 greenScreen的方法去clear，發現一直行不通，其實自己html中打錯，
二來是，不清楚為何要用兩個clear，我猜是應該是local 變數與global變數的關係，最後微調後，終於解決。

> 3. 一個一個調適，不要想一次調4個，然後全部到位，確定成功後，再逐步迭代

### 結果圖

![Imgur](http://i.imgur.com/UFu2DI0.png)

jjj







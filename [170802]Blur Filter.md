### 2017-08-01(二) 蓋樓[225]

## Blur Filter

### 一、模糊濾鏡的原理
- 在讀[此篇]()當中，提到pixel的變化，又是找尋nearby的pixel，然後nearby pixel又會遇到邊界的問題，最後又得把nearby pixel取代原本的pixel，簡單來說，我被一連串的條件、傳遞參數、回傳值弄得很混亂，不過第一步，還是去google 到底Blur filter的原理是啥？

- [高斯（Guassian）模糊 圖像濾波 基本原理介紹](https://read01.com/zkoM2.html) ，當中作了簡短的介紹，不過在本次作業中，是隨機再x,y座標上有一定的範圍，採取其他地址的pixel值。

### 二、動作分解

1. 一開始有1/2 機率，判斷是否找尋其他位置pixel，稱作other_pixel

2. 要產生這個 other_pixel 需要一個 getPixelNearby 的 function

3. 進入 getPixelNearby()中，需要傳入參數，如同 
 ``` getPixelNearby (blurredImage, x, y, radius)  ```
 
4. 在getPixelNearby()最後的output 要return **other_pixel** 的x,y位置

5.  other_pixel的x,y位置，是由原本x,y位置，經過dx,dy的變化
	- dy,dx 是由random與radius的計算（這裡先沒提到）
	
6. 取得 other_pixel 的 x, y 位置時，就是用set把，照片的pixel 設定為，剛才獲取的位置。

6-2.  其實第6點有錯誤，那就是還得探討**邊界的問題**，所以得把剛剛獲取的x,y傳入檢查function中，探討可行性

- 檢查function，有三種情況，第一是<0，第二是點大於等於邊界，第三就是正常範圍，分別就是return 0，第二是size 減1，最後是回傳原本的值。

- 此時，才是做第6點，**取得 other_pixel 的 x, y 位置時，就是用set把，照片的pixel 設定為，剛才獲取的位**

- 最後，把修改照片drawTo(canvas)裡面

## 成功了！

[Github code](https://gist.github.com/anonymous/ebb1f5318a27e6613fd09ca2ee61a4c5)







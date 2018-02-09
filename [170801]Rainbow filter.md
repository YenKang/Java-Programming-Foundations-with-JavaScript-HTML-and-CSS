### 2017-08-01(二) 蓋樓[225]

##Rainbow fileter


1.卡點：怎麼在Y方向，做分割，然後在每一等份中，做出紅橙黃綠藍靛紫的區別，並且向X方向展開，我在[Conditional Execution 的 4:49](https://www.coursera.org/learn/duke-programming-web/lecture/7A4Ku/conditional-execution)找到概念，然後這裡，先不貪多，只先實驗紅色（1/7 塊），看可不可以成功，之後再展開。

>1. Start with the image you want to change.

>2. Figure out the width of the image.

>3. For each pixel in the image:

>Get the x-coordinate for that pixel
If the pixel’s x-coordinate is less than one-third of the image’s width, set the pixel’s red value to 255.

>If the pixel’s x-coordinate is between one-third and two-thirds of the image’s width, set the pixel’s green value to 255.

>If the pixel’s x-coordinate is more than two-thirds of the image’s width, set the pixel’s blue value to 255.

> 4. Print the image.



2.如果成功展開，就把[miniproject-challenge 提供的彩虹濾鏡的code
](https://www.coursera.org/learn/duke-programming-web/supplement/oUvMH/miniproject-challenge)，一一填上。

3.[成功的網址](https://codepen.io/YenKang/pen/rzexaW)

4.![結果圖](https://pbs.twimg.com/media/DGH5L6rVYAI6_sW.jpg:large)
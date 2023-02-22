# 在 TS 中，为什么要使用 this. 如果未在 Class 中声明属性，将引发错误。运算符，虽然您可以使用[]运算符，但它不会出错吗？

使用此选项的原因。如果未在之后声明属性，则将引发错误。TypeScript 中的运算符是因为 TypeScript 使用了一个称为“静态类型”的特性。这意味着每个变量的类型都是在编译时确定的，编译器在整个代码中强制执行此类型。运算符访问属性，TypeScript 希望在类定义中声明该属性。如果未声明，编译器将抛出错误，因为它无法确定该属性的类型。另一方面，当使用[]运算符时，TypeScript 不要求在类定义中声明该属性。这是因为[]运算符可用于访问对象的任何属性，而不管它是否已声明。然而，这也意味着编译器不检查属性的类型，如果属性不存在或类型错误，则可能导致运行时错误。

# 项目国际化如何实现？

国际化（i18n）是一种设计和开发产品、应用程序或网站的过程，它可以轻松地适应各种语言和地区，而无需进行工程更改。实现项目国际化的方法有几种，以下是一些常见的技术：
使用 Unicode：对应用程序中的所有文本数据使用 Unicode 编码。这确保了所有字符（包括非拉丁字符）都可以正确处理。
使用本地化库：有几个本地化库，例如 i18next，可以集成到项目中以处理翻译和本地化。
分离内容和代码：保持内容和代码分离，以便在不影响代码的情况下轻松翻译内容。这可以通过使用资源文件或使用内容管理系统来实现。
使用特定语言的格式：针对不同语言和地区使用适当的日期、时间和数字格式。用不同语言测试：用不同语言和地区测试您的应用程序，以确保其正常工作，并确保所有翻译文本都正确显示。RTL 和 LTR 的使用：在应用程序中同时支持从右到左（RTL）和从左到右（LTR）语言。
值得注意的是，国际化是一个持续的过程，在整个开发过程中牢记国际化非常重要。此外，考虑可访问性要求也很重要，例如为图像提供替代文本，以及为不同语言和地区提供可访问性支持。

# 可视化项目相关问题

## 比例尺问题相关

#### 画布中 canvas 对象之间距离比例尺

#### 颜色比例尺

#### 坐标轴数据分布比例尺

#### 文字大小比例尺

## canvas 中设计相关

### Chart 图表结构设计

#### canvas 数据可视化图表的鼠标事件代理方面，为单一对象直接赋予事件处理还是为图表对象赋予事件处理方法的效率或性能更高？

#### 响应式变化设计与对象方法统一导出【Engine】

#### DOM 与 canvas 通信如何实现？内容绑定。

#### 排版引擎设计？

### canvas 对象设计相关

#### 属性设计相关

#### canvas 对象的鼠标框选如何实现？【Advanced】

#### D3js 的力导向图的布局 layout.force 如何制作？在 canvas 中？【Advanced】

#### 方法设计相关【Basic】

#### canvas 对象颜色赋予方法

#### canvas 对象重心点获取方法

#### canvas 对象 Tooltip 展示位置判断方法【Tooltip】

#### 关于鼠标对象的基本 canvas 对象事件回调方法【Customize】

#### canvas 移动后对象重绘的重叠问题解决方法【Advanced】

#### 鼠标点选 canvas 两重叠元素中间部份时对象的选择方法【Advanced】

#### canvas 对象展示动画方法【Advanced】



### canvas 中字体相关

#### Word 字体的字号与像素对应关系

- 14 磅字 = 中文四号字；4.94 mm，18.7px；
- 英文字体 1 磅，相当于 1/72 英寸，约等于 1/2.8 mm
- 虽然 四号=(14/72)\*96=18.6px 更接近 19px，但是因为 18px 是点阵，所以系统还是优先显示点阵字号的。换句话说：四号=18px
-
- 字号       OpenXMl 大小     像素大小
  初号       84      　　　　　　 56      
  小初       72      　　　　　　 48  
  一号       52      　　　　　　 34  
  小一       48      　　　　　　 32  
  二号       44      　　　　　　 29  
  小二       36      　　　　　　 24  
  三号       32      　　　　　　 21  
  小三       30      　　　　　　 20  
  四号       28      　　　　　　 18  
  小四       24      　　　　　　 16  
  五号       21      　　　　　　 14  
  小五       18      　　　　　　 12  
  六号       15      　　　　　　 10  
  小六       13      　　　　　　 8  
  七号       11      　　　　　　 7  
  八号       10      　　　　　　 6
  ![[Pasted image 20230201214228.png]]

#### canvas 对象中标识 label 的展示位置与样式设计？

位置：可以使用画布上下文的`fillText（）`或`strokeText（）'方法来指定标签的 x 和 y 坐标。对齐：可以使用画布上下文的“textAlign”属性指定标签的水平对齐方式，例如左对齐、居中对齐或右对齐。基线：您可以使用画布上下文的“textBaseline”属性来指定标签的垂直对齐方式，例如顶部、中间、底部或字母。样式：可以使用画布上下文的“字体”、“fillStyle”和“strokeStyle”等属性来控制标签的样式，例如字体系列、大小、颜色和权重。变换：可以使用画布上下文的“rotate（）”、“scale（）”和“translate（）”方法来旋转、缩放或平移标签。

#### 展示图中如何避免文字重叠？canvas 对象间距离与字体大小设计？

有几种方法可以避免使用画布创建的插图中的文本重叠：
使用足够的间距：在文本元素和其他画布对象之间使用适当的间距，以确保它们不重叠。这可以通过调整文本元素和其他画布对象的位置，或者在文本元素周围添加填充或边距来实现。
使用动态字体缩放：根据容器的大小或需要显示的文本量调整字体大小。这可以通过使用响应设计方法或使用动态字体缩放算法来实现。
使用截断：如果文本太长，无法容纳可用空间，请考虑截断文本并在末尾添加省略号（…）。
使用换行：如果文本太长，无法容纳可用空间，请考虑将文本换行到多行。
使用文本对齐：使用适当的文本对齐属性将文本左对齐、右对齐、居中对齐或对齐。
TextBaseline 的使用：使用适当的文本基线属性将文本与顶部、中部、底部或字母基线对齐。
在设计画布对象和字体大小之间的距离时，必须考虑文本的可读性和可访问性。

#### canvas 中如何对文字进行截断并在末尾添加省略号？

通过使用画布上下文的“fillText（）”方法以及字符串操作和条件语句的组合，您可以截断文本并在画布末尾添加省略号（…）。以下是如何截断文本并将省略号添加到画布末尾的示例：

```JS
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var text = "This is a long text that needs to be truncated";
var maxWidth = 150;

// Set the font
ctx.font = "14px Arial";

// Check if the text is too long to fit in the available space
if (ctx.measureText(text).width > maxWidth) {
    // Truncate the text and add an ellipsis
    var truncatedText = text.substring(0, text.length - 3) + "...";

    // Draw the truncated text
    ctx.fillText(truncatedText, 10, 50);
} else {
    // Draw the text
    ctx.fillText(text, 10, 50);
}
```

在此示例中，画布上下文的“measureText（）”方法用于检查文本是否太长，无法容纳可用空间（“maxWidth”）。如果是，则使用“substring（）”方法截断文本，并在文本末尾添加省略号。如果文本不太长，则会在不进行修改的情况下绘制。您可以调整 maxWidth 和文本值以满足您的需要。值得注意的是，这是一个基本示例，可以通过添加一个动态处理截断并可重用的函数来进一步增强在画布的末尾添加省略号，根据项目的具体要求，有不同的方法可以实现这一点。例如，您可以使用能够自动处理文本截断和省略号的库或插件，也可以使用更高级的算法，该算法考虑字体大小和可用空间来确定适当的截断点，并测试不同的方法，以找到最适合您的受众的解决方案。请记住，在截断文本时，必须注意文本的上下文，必须考虑文本的含义，如果截断文本可能会改变其含义，在这种情况下，您可能需要考虑其他选项，例如换行。此外，当截断的文本悬停时，最好提供工具提示或悬停状态以显示全文。

#### 浏览器默认展示的字体大小为多少？

浏览器的默认字体大小可能因浏览器和使用的设备而异。通常，大多数浏览器的默认字体大小为 16 像素。然而，某些浏览器可能具有不同的默认值，用户也可以在其浏览器设置中调整字体大小。

##### 我在使用 canvas 制作图表，能让人较为舒适的看清图表文字表述的文字大小是多少？

使用画布创建图表时，必须考虑图表中文本的可读性。一种让文本更容易阅读的方法是增加字体大小。更大的字体大小将使文本更清晰，更容易阅读，特别是对于有视觉障碍的用户。此外，使用清晰简单的字体（如 Arial、Verdana 或 Helvetica）也有助于提高可读性。此外，您可以考虑使用不同的颜色和对比度来帮助区分图表中的不同元素。

##### 那最小让人舒适看清图表文字表述的文字大小为多少？

舒适易读性的最小字体大小可能会因个人和查看文本的上下文而异。然而，作为一般规则，大约 12-14 像素的最小字体大小被认为是数字屏幕上舒适阅读的下限。请记住，对于一些人来说，较小的字体可能很难阅读，特别是对于那些有视觉障碍或老年人。建议使用至少 16 像素的字体大小作为正文，20 像素或更大的字体大小用于标题。此外，用不同的字体大小和字体类型测试图表，为观众找到最舒适、最容易阅读的解决方案也很重要。值得注意的是，观众与屏幕的距离、屏幕大小和屏幕分辨率都会影响文本的可读性，因此，在确定合适的字体大小时，考虑这些因素很重要。

##### 图表坐标轴的单元格描述文字和标题的文字之间的大小比例关系多少合适？

图表坐标轴的单元格描述文本与标题文本之间的大小比例应根据图表的总体设计和文本的可读性来确定。通常，与单元格描述文本相比，建议标题文本使用稍大的字体大小。这有助于清楚地将标题区分为图表的主标题，并使其更加突出。一个很好的经验法则是，标题文本的字体大小至少是单元格描述文本的 1.5 倍。例如，如果单元格描述文本使用的字体大小为 12 像素，标题文本应至少为 18 像素。需要注意的是，此比例可能会因图表的上下文和设计而有所不同，因此始终建议测试不同的字体大小，以找到最适合您的读者的可读解决方案。请记住，在整个图表中保持一致的字体大小和字体类型是很好的，以保持一致性和可读性。

```JS
var maxFrequency = Math.max(...wordFrequencyList);
var minFrequency = Math.min(...wordFrequencyList);
var fontSizeRange = maxFontSize - minFontSize;

var wordFontSizes = wordFrequencyList.map(word => {
    return minFontSize + (word.frequency - minFrequency) * fontSizeRange / (maxFrequency - minFrequency);
});
```

#### 词云图最大最小字体的大小如何设计，应该为多少？

确定单词频率
缩放字体大小
定义范围：定义要用于单词云的字体大小范围。例如，字体大小可以使用 10 到 50 像素的范围。
将频率映射到字体大小：将每个单词的频率映射到定义范围内的相应字体大小。例如，您可以使用将频率映射到字体大小的函数。
绘制单词云：确定每个单词的字体大小后，可以使用画布上下文的`fillText（）`或`strokeText（）'方法绘制单词云。

#### canvas 中基准字体大小设置为多少较好？

画布中的基本字体大小由浏览器的默认字体大小决定，通常设置为 16 像素。但是，当使用画布创建图表时，您可以指定图表中文本元素的字体大小。这可以通过将画布上下文的字体属性设置为特定大小来实现，例如 context.font=“16px Arial”。值得注意的是，在画布中，字体大小以像素为单位指定，可以是任何数字，但不限于浏览器的默认字体大小。建议测试不同的字体大小，以找到最适合您的受众的可读解决方案。请记住，字体大小也可能受设备、屏幕分辨率和缩放级别的影响，因此在确定图表的适当字体大小时，必须考虑这些因素。

#### 文字大小在 canvas 中的设计规范？

在画布中设计文本元素时，考虑可读性和可访问性很重要。画布中文本大小的设计规范可能会根据上下文和图表的受众而有所不同，但一些一般准则包括：
•正文文本的字体大小至少为 12-14 像素。
•标题的字体大小至少为 16 像素或更大。
•在整个图表中保持一致的字体大小，以便于阅读。
•使用清晰简单的字体，如 Arial、Verdana 或 Helvetica，以提高可读性。
•测试不同的字体大小，以找到适合您的受众的最合适和可读的解决方案。
除了字体大小，还必须考虑其他文本设计元素，如颜色、对比度和间距。在文本和背景之间使用高对比度可以使文本更清晰，在字母、单词和行之间使用适当的间距可以使文本阅读起来更舒适，例如为有视觉障碍的用户提供增加字体大小的方法。请记住，字体大小也可能受设备、屏幕分辨率和缩放级别的影响，因此在确定图表的适当字体大小时，必须考虑这些因素。

#### 文字大小与容器高度之间关系？

在画布中设计文本元素时，文本大小和容器高度之间的关系非常重要。当文本大小太大时，它可能溢出容器并被截断，而太小的文本可能难以阅读。确保文本大小适合容器高度的一种方法是使用响应式设计方法。这意味着根据容器的高度调整文本大小。例如，可以使用 canvas 元素的 height 属性来确定适当的字体大小。另一种确保文本大小适合容器高度的方法是使用动态字体缩放。这意味着根据容器的宽度调整文本大小。例如，您可以使用 canvas 元素的 width 属性来确定适当的字体大小。测试不同的字体大小和容器高度以找到最适合您的受众的可读解决方案非常重要。请记住，字体大小也可能受设备、屏幕分辨率和缩放级别的影响，因此，在确定图表的适当字体大小时，考虑这些因素很重要。

#### canvas 中文字如何省略显示？

有几种方法可以省略画布中的文本。一种方法是使用画布上下文的“fillText（）”方法，并将 width 参数设置为小于文本长度的值。例如，如果要省略文本的最后两个字符，可以将 width 参数设置为文本长度减去 2。另一种在画布中省略文本的方法是使用画布上下文的“clip（）”方法。此方法允许您定义画布的矩形区域，该区域将用于“剪辑”或“屏蔽”文本，从而有效地隐藏位于定义区域之外的任何文本。您可以像往常一样使用“fillText（）”方法绘制文本，然后使用“clip（）”法定义文本应该可见的区域。您还可以使用画布上下文的“globalCompositeOperation”属性来更改文本的呈现方式。例如，您可以将此属性设置为“destination out”，这将导致文本以擦除或“剪切”画布中现有内容的方式呈现。需要注意的是，虽然这些方法可以用于省略画布中的文本，但它们可能不适用于所有情况，我们总是建议您测试不同的方法，以找到最适合您项目的解决方案。

#### 使用 canvas 技术的主流数据可视化图表库的文字大小与图表大小之间的关系，给我些具体数据。

使用画布技术，您可以通过创建一个在同一图形上同时显示文本大小和图表大小的图表来可视化图表库的文本大小与图表大小之间的关系。一种方法是创建一个条形图，该条形图在 y 轴上显示文本大小，在 x 轴上显示图表大小。然后，您可以使用画布上下文的“fillText（）”方法将文本标签添加到图表中，并使用“fillRect（）”创建表示图表大小的条形图。下面是如何使用画布技术创建条形图以可视化文本大小和图表大小之间的关系的示例：

```JS
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var textSizes = [10, 12, 14, 16, 18];
var chartSizes = [200, 250, 300, 350, 400];

// Set the font size for the text labels
ctx.font = "14px Arial";

// Draw the text labels
for (var i = 0; i < textSizes.length; i++) {
    ctx.fillText(textSizes[i], 20, 50 + (i * 50));
}

// Draw the chart size bars
for (var i = 0; i < chartSizes.length; i++) {
    ctx.fillRect(50, 25 + (i * 50), chartSizes[i], 25);
}
```

在本示例中，文本大小由值数组`[10、12、14、16、18]`表示，图表大小由值阵列`[200、250、300、350、400]`表示，可以根据数据调整这些值。需要注意的是，虽然本示例说明了使用画布技术可视化文本大小和图表大小之间关系的一种方法，有很多其他方法可以实现这一点，我们总是建议您测试不同的方法，以找到最适合您项目的解决方案。

#### canvas 中可以输入中文文字吗？

是的，您可以在画布中输入中文文本。canvas 元素使用与浏览器其他部分相同的字体处理，因此只要您使用的字体支持中文字符，您就可以像其他任何文本一样在画布中显示中文文本，您需要使用画布上下文的`fillText（）`或`strokeText（）'方法，并以字符串形式传入中文文本。还需要注意的是，如果您使用的字体不包含中文字符，则需要使用支持中文字符的字体，或者您需要将中文字符作为单独的图像提供。需要注意的是，如果您使用的是较旧的浏览器，它可能不支持显示中文文本。因此，始终建议您在不同的浏览器上测试代码，以确保正确显示中文文本。考虑可访问性要求也是一个很好的做法，例如为有视觉障碍的用户提供增加字体大小的方法，或为屏幕阅读器或有视觉障碍用户提供中文文本的替代文本。

#### canvas 中文字如何加粗显示？

通过将画布上下文的“font”属性设置为包含“bold”关键字，可以在画布中以粗体显示文本。以下是如何使用画布上下文的`fillText（）`方法以粗体显示文字的示例：
`ctx.font = "bold 16px Arial";`
您也可以使用“strokeText（）”方法代替“fillText（））”方法以粗体显示文本。值得注意的是，某些字体没有粗体变体，因此在这些情况下，您可以使用值为“bold”的“font weight”CSS 属性来模拟粗体字体。此外，您还可以使用“setTransform（）”来实现粗体文本效果。此方法允许您水平和垂直缩放文本，增加文本的宽度以使其看起来更为醒目。

#### canvas 中获得 window 文字大小数值？

通过使用窗口对象的“getComputedStyle（）”方法，可以在画布中获取窗口文本大小值。此方法返回一个对象，该对象包含元素的所有 CSS 属性的计算值。下面是如何获取 body 元素的文本大小的示例：

```JS
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var bodyStyle = window.getComputedStyle(document.body);
var textSize = bodyStyle.getPropertyValue("font-size");
console.log(textSize);
```

“getPropertyValue（）”方法返回指定 CSS 属性的值。在这种情况下，它返回“字体大小”属性的值。值得注意的是，返回的值是一个字符串，因此您可能需要解析它以将其转换为数字。此外，您可以使用“getComputedStyle（）”方法获取字体系列和字体权重值，以获取整个字体样式信息。请记住，此方法返回 CSS 属性的计算值，因此，如果某些样式被其他样式或 JavaScript 覆盖，则它可能与 CSS 中设置的值不匹配。需要注意的是，尽管本示例说明了如何使用画布技术获取窗口文本大小值，但有许多其他方法可以实现这一点，因此始终建议测试不同的方法，以找到最适合您项目的解决方案。

### 词云图组件设计

#### 词云图中文字的位置分布算法如何？文字重叠如何避免？

单词云中单词的位置分布算法用于确定每个单词在画布上的位置。有几种方法可以在单词云中分布单词，下面是一些常见的算法：
螺旋放置：单词以螺旋图案从画布中心开始放置。该算法减少了单词之间的重叠，但会导致画布中心出现密集的单词簇。
力定向放置：单词的放置基于模拟单词之间排斥的物理模拟。该算法可以减少单词之间的重叠，并将单词均匀地分布在画布上。
基于网格的放置：单词放置在网格图案上。该算法可以减少单词之间的重叠，并创建结构化布局。
基于优化的放置：单词的放置基于一种优化算法，该算法试图最小化单词之间的重叠，同时保持单词的良好分布。
为了避免文本重叠，可以使用冲突检测方法。例如，在将某个单词的边界框放置在画布上之前，可以检查它是否与任何其他单词的边界盒相交。如果是这样，您可以将单词移动到新的位置。测试不同的位置分布算法和冲突检测方法，以找到最适合您的项目的解决方案，并考虑单词云的可读性和可访问性是很重要的。在选择位置分布算法时，记住单词 cloud 的上下文也很重要。

#### 如何在 canvas 的三个以上对象之间模拟物理排斥？给个代码示例？

可以通过使用物理引擎（如 matter.js 或 box2d.js）或实现自己的物理模拟算法来模拟画布中三个以上对象之间的物理排斥。下面是一个示例，说明如何使用 matter.js:1 来模拟画布上三个以上物体之间的物理斥力。在您的项目中包含 matter.js：首先，您需要通过在 HTML 文件中链接到 matterjs 库，或者通过下载并将其导入到 JavaScript 文件中，将其包含在项目中。创建新引擎：接下来，您需要使用“Matter.engine（）”构造函数创建新引擎。创建实体：然后，需要为每个要模拟排斥的对象创建实体。您可以使用`Matter.Bodies.circle（）`或`Matter.Bodies.rrectangle（）`构造函数来实现这一点，具体取决于对象的形状。向世界添加实体：创建实体后，需要使用“Matter.world.Add（）”方法将它们添加到世界中。运行模拟：最后，您需要在循环中调用`Matter.Engine.update（）`方法来运行模拟。下面是代码示例：

```JS
// include the matter.js library
const {Engine, Render, Runner, World, Bodies} = Matter;

// create a new engine
const engine = Engine.create();

// create bodies for the objects
const body1 = Bodies.circle(100, 100, 20);
const body2 = Bodies.circle(200, 200, 30);
const body3 = Bodies.circle(300, 150, 25);

// add the bodies to the world
World.add(engine.world, [body1, body2, body3]);

// run the simulation
Engine.run(engine);

```

在本例中，创建了三个具有不同位置和半径的圆，并将其添加到世界中。engine.run（）方法将启动模拟，并在物体之间施加排斥力。值得注意的是，这是一个简单的示例，您可以调整物体的位置、半径和其他属性以满足您的需要。此外，您还可以使用其他属性（如质量、摩擦和恢复）来调整模拟中对象的行为。请记住，实现物理模拟算法可能很复杂，需要深入了解物理、数学和编码。测试不同的方法以找到最适合您的项目的解决方案并考虑模拟的性能非常重要。

#### 我该如何在不使用其他 npm 库的情况下，用纯 JS 在 canvas 中模拟出对象之间的物理排斥现象 ？

使用纯 JavaScript 模拟画布中对象之间的物理排斥的一种方法是使用冲突检测算法。一种常见的方法是边界框碰撞检测算法，它包括检查两个对象的边界框是否重叠。另一种方法是使用分离轴定理（SAT）来确定两个对象的形状是否重叠。下面是如何使用边界框碰撞检测算法的示例：

```JS
function detectCollision(object1, object2) {
  // Get the bounding boxes of the two objects
  let boundingBox1 = object1.getBoundingBox();
  let boundingBox2 = object2.getBoundingBox();

  // Check if the bounding boxes are overlapping
  if (boundingBox1.x < boundingBox2.x + boundingBox2.width &&
    boundingBox1.x + boundingBox1.width > boundingBox2.x &&
    boundingBox1.y < boundingBox2.y + boundingBox2.height &&
    boundingBox1.height + boundingBox1.y > boundingBox2.y) {
    // The objects are colliding
    return true;
  } else {
    // The objects are not colliding
    return false;
  }
}
```

#### 分离轴定律的代码示例

```JS
// Helper function to get the normal of a given edge
function getNormal(edge) {
  return {
    x: edge.y,
    y: -edge.x
  };
}

// Function to check if two convex polygons are colliding using SAT
function detectCollisionSAT(polygon1, polygon2) {
  // Get the edges of both polygons
  let edges1 = polygon1.getEdges();
  let edges2 = polygon2.getEdges();

  // Loop through all the edges of the first polygon
  for (let i = 0; i < edges1.length; i++) {
    let edge = edges1[i];
    let normal = getNormal(edge);

    // Get the projections of both polygons on the current edge's normal
    let projection1 = getProjection(polygon1, normal);
    let projection2 = getProjection(polygon2, normal);

    // Check if the projections are overlapping
    if (!doProjectionsOverlap(projection1, projection2)) {
      // If not, the polygons are not colliding
      return false;
    }
  }

  // Loop through all the edges of the second polygon
  for (let i = 0; i < edges2.length; i++) {
    let edge = edges2[i];
    let normal = getNormal(edge);

    // Get the projections of both polygons on the current edge's normal
    let projection1 = getProjection(polygon1, normal);
    let projection2 = getProjection(polygon2, normal);

    // Check if the projections are overlapping
    if (!doProjectionsOverlap(projection1, projection2)) {
      // If not, the polygons are not colliding
      return false;
    }
  }

  // If all projections are overlapping, the polygons are colliding
  return true;
}
```

正如您所看到的，上面的代码有点复杂，它假设您已经有了获取边缘、获取投影和检查投影是否重叠的功能。该示例还假设输入多边形是凸的，并且它们被表示为顶点数组。这是一个基本示例，您需要根据您的特定用例对其进行调整，也可以根据您的需求对其进行优化。

### 矩形树图组件设计

#### 矩形树图的矩形分割算法？

#### 我看到的效果是矩形树图吗？

### 方形占比图

### 堆叠方形图

#### - 图表堆叠顺序处理问题

### 地图组件设计

#### - 地图缩放系数如何计算？

#### - 如何将经纬度坐标转换为屏幕坐标？

### GIS 相关

#### GIS 中瓦片渲染的瓦片代表什么意思？

#### geojson 文件中，center 与 centroid 属性的区别？

#### MultiPolygon 和 Polygon 格式的地图数据区别是什么？

#### 包围盒计算中四个方向的极值计算问题，算法逻辑是什么？

#### coordinates 数据中的单个 item 数组的第一和第二个值的含义是什么？

#### 地图组件绘制中，geoCenterX 与 geoCenterY 代表的地图区域的经纬度中心是什么意思？

#### 怎么知道 GIS 绘制数据是不是 geojson 数据？ geojson 数据有统一格式吗？

首先找到文件：fckeditor\editor\js\fckeditorcode_gecko.js

然后查找代码：A=E[1]+'&nbsp;'+F[1];

将代码修改为：A=E[1]+''+F[1];或者A=E[1]+F[1];

修改完后，清空浏览器缓存刷新，问题就解决了。

出现这种情况，主要是因为fckeditor编辑器加载的js的时候，不同的浏览器对空格的识别存在差异造成的。
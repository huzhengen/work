来源：http://se.360.cn/v6/help/meta.html<br>
代码示例<br>
浏览器默认内核的指定只需在head标签中添加一行代码即可： <br>
若页面需默认用极速核，增加标签：```<meta name="renderer" content="webkit">``` <br>
若页面需默认用ie兼容内核，增加标签：```<meta name="renderer" content="ie-comp">``` <br>
若页面需默认用ie标准内核，增加标签：```<meta name="renderer" content="ie-stand">``` <br>
content的取值为webkit,ie-comp,ie-stand之一，区分大小写，分别代表用webkit内核，IE兼容内核，IE标准内核。

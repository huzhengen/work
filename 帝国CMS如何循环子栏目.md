```
<?php 
$bclassid=$GLOBALS[navclassid]; //取得本栏目id 
//取得本栏目下的子栏目 
?> 
[e:loop={"select classid, classimg,classname, classpath from `[!db.pre!]enewsclass` where bclassid='$bclassid' order by `classid` desc limit 20 ",7,24,0}]

<?=$public_r[newsurl].$bqr[classpath]?>子栏目链接
<?=$bqr[classname]?>子栏目名字
<?=$bqr[classimg]?>栏目缩略图

[/e:loop]
```

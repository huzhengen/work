<?php 
$bclassid=$GLOBALS[navclassid]; //取得本栏目id 
//取得本栏目下的子栏目 
?> 
[e:loop={"select classid, classimg,classname, classpath from `[!db.pre!]enewsclass` where bclassid='$bclassid' order by `classid` desc limit 20 ",7,24,0}]

<div class="jibing_comm_box"> 
<p class="title"><a href="<?=$public_r[newsurl].$bqr[classpath]?>" target="_blank"><?=$bqr[classname]?></a></p>
 <p class="more"><a href="<?=$public_r[newsurl].$bqr[classpath]?>" target="_blank" class="link_block">更多</a></p>
  <p class="pic"><a href="<?=$public_r[newsurl].$bqr[classpath]?>" target="_blank"><img height="88" src="<?=$bqr[classimg]?>" width="128" /></a></p>
  [ecmsinfo]$bqr[classid],1,20,0,0,26,0[/ecmsinfo]
  <ul class="list_date">
  [ecmsinfo]$bqr[classid],1,36,0,0,27,0[/ecmsinfo]
  </ul>
</div>
<?=$bqr[classimg]?>栏目缩略图

[/e:loop]



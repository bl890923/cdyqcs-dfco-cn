function search_check(obj){if(obj.keyboard.value.length==0){alert('请输入搜索关键字');return false;}return true;}document.write("<table width=99% border=0 cellpadding=3 cellspacing=1><form name=search_js2 method=post action='/e/search/index.php' onsubmit='return search_check(document.search_js2);'><tr><td height=25><div align=center>关键字: <input name=keyboard type=text size=13></div></td></tr><tr><td><div align=center>范围: <select name=show><option value=title>标题</option><option value=smalltext>简介</option><option value=newstext>内容</option><option value=writer>作者</option><option value=title,smalltext,newstext,writer>搜索全部</option></select></div></td></tr><tr><td><div align=center>栏目:<select name=classid><option value=0>所有栏目</option><option value='1'>|-产品中心</option><option value='2' style='background:#99C4E3'>&nbsp;&nbsp;|-产品老大</option><option value='3' style='background:#99C4E3'>&nbsp;&nbsp;|-产品第二</option><option value='4' style='background:#99C4E3'>&nbsp;&nbsp;|-产品小三</option><option value='5' style='background:#99C4E3'>&nbsp;&nbsp;|-产品四弟</option><option value='21' style='background:#99C4E3'>&nbsp;&nbsp;|-工商注册</option><option value='6'>|-新闻中心</option><option value='7' style='background:#99C4E3'>&nbsp;&nbsp;|-公司新闻</option><option value='8' style='background:#99C4E3'>&nbsp;&nbsp;|-行业动态</option><option value='9' style='background:#99C4E3'>&nbsp;&nbsp;|-常见问题</option><option value='10'>|-企业实力</option><option value='11' style='background:#99C4E3'>&nbsp;&nbsp;|-经典案例</option><option value='12' style='background:#99C4E3'>&nbsp;&nbsp;|-合作伙伴</option><option value='13' style='background:#99C4E3'>&nbsp;&nbsp;|-客户评价</option><option value='14' style='background:#99C4E3'>&nbsp;&nbsp;|-荣誉资质</option><option value='15'>|-关于我们</option><option value='16' style='background:#99C4E3'>&nbsp;&nbsp;|-公司简介</option><option value='17' style='background:#99C4E3'>&nbsp;&nbsp;|-企业风采</option><option value='18' style='background:#99C4E3'>&nbsp;&nbsp;|-组织机构</option><option value='19' style='background:#99C4E3'>&nbsp;&nbsp;|-企业文化</option><option value='20' style='background:#99C4E3'>&nbsp;&nbsp;|-联系我们</option></select></div></td></tr><tr><td><div align=center><input type=submit name=Submit value=搜索></div></td></tr></form></table>");
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>404错误提示 - 很抱歉，您请求的页面目前不可用！</title>
<style type="text/css">
body,html,div,p,span,h3,ol,ul,li{margin:0;padding:0;}
ol,ul,li{list-style:none;}
body,html{height:100%;}
.main{width:100%; height:100%; background:#e8e8e8; font-family:"微软雅黑", "宋体";}
.con{width:565px;*width:568px;margin:0 auto;}
.result{background:#008ead;padding:110px 0 30px;}
.result h3{width:100%;border-bottom:1px solid #fff;padding-bottom:10px;margin-bottom:10px;font-size:33px;color:#fff;font-weight:bold;}
.result h3 span{color:#ca1a0b;}
.result div{color:#e8e8e8;}
.result p{font-size:25px;}
.result ol{padding-left:25px;*padding-left:28px;}
.result ol li{list-style:decimal;font-size:20px;}
.explain{background:#e2e2e2; color:#666;font-size:12px;padding:20px 0;}
.explain .info2{margin-top:15px;}
.explain .info2 p{font-weight:bold;}
.explain .info2 ul{padding-left:15px;}
.explain .info2 li{ list-style:disc;}
.tel{padding:20px 0;color:#666;}
.tel p{font-size:16px;}
.t{font-size:30px; color:#ca1a0b; margin-top:20px;}
</style>
</head>
<body>
<div class="main">
  <div class="result">
    <div class="con">
    	<h3>很抱歉，您请求的页面目前不可用！</h3>
        <div>
            <p>这可能是因为：</p>
            <ol>
                <li>您已输入的网址不正确，或您要找的网页可能已被更新或删除</li>
                <li>您访问的网站正在备案中，暂时禁止访问</li>
            </ol>
            <p class="t" id="t">正在加载。。。</p>
        </div>
    </div>
  </div>
  <div class="explain">
    <div class="con">
    	<div class="info1">
        	<p>据工信部电管［2010］64号文件，对未进行ICP备案或备案信息不完全的网站，进行强制关停。</p>
            <p>云搜网络作为此网站的运营商，有责任和义务协助网站所有者，核实相关信息及办理相关手续。</p>
        </div>
    	<div class="info2">
        	<p>如果网站ICP备案信息已审核通过，如下原因导致页面被禁止访问：</p>
            <ul>
            	<li>网站服务已到期，云搜网络已经停止对此网站进行运营服务。</li>
                <li>网站正处于维护中，云搜网络应网站所有者要求，暂时禁止访问。</li>
            </ul>
        </div>
    </div>
  </div>
  <div class="tel">
    <div class="con">
    	<p>服务热线：4000-199-888</p>
    </div>
  </div>
</div>
<script type="text/javascript">
t = document.getElementById("t");
s = 5;
timeset = setInterval("timedec()",1000);
function timedec()
{
	if(s > 0)
	{
		t.innerHTML = s+'秒后将跳转到网站首页';
		s--;
	}
	else
	{
		t.innerHTML = '正在跳转。。。';
		location.href="/";
		clearInterval(timeset);
	}
}
</script>
</body>
</html>
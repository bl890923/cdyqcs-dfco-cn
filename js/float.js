document.writeln("<style media=\'screen\'>");
document.writeln("* {");
document.writeln("	margin: 0px;");
document.writeln("	padding: 0px;");
document.writeln("}");
document.writeln("");
document.writeln(".show {");
document.writeln("	display: none;");
document.writeln("	position: fixed;");
document.writeln("	top: 20%;");
document.writeln("	left: 50%;");
document.writeln("	width: 754px;");
document.writeln("	margin-left: -377px;");
document.writeln("	z-index: 1050;");
document.writeln("	overflow: hidden;");
document.writeln("	text-align: center;");
document.writeln("}");
document.writeln("");
document.writeln(".go-btn {");
document.writeln("	width: 178px;");
document.writeln("	height: 54px;");
document.writeln("	position: absolute;");	
document.writeln("	left: 70px;");
document.writeln("	bottom: 38px;");
document.writeln("	cursor: pointer;");
document.writeln("}");
document.writeln("");
document.writeln(".close-btn {");
document.writeln("	position: absolute;");
document.writeln("	right: 35px;");
document.writeln("	top: 10px;");
document.writeln("	width: 16px;");
document.writeln("	height: 16px;");
document.writeln("	background: url(images/close.png) center center;");
document.writeln("}");
document.writeln("");
document.writeln("@media (max-width: 992px) {");
document.writeln("	.show {");
document.writeln("		left: 8%;");
document.writeln("		top: 20%;");
document.writeln("		width: 84%;");
document.writeln("		margin-left: 0px;");
document.writeln("	}");
document.writeln("	.show img {");
document.writeln("		width: 100%;");
document.writeln("	}");
document.writeln("	.go-btn {");
document.writeln("		width: 25%;");
document.writeln("		height: 15%;");
document.writeln("		position: absolute;");
document.writeln("		left: 15%;");
document.writeln("		bottom: 16%;");
document.writeln("		cursor: pointer;");
document.writeln("	}");
document.writeln("	.close-btn {");
document.writeln("		right: 2%;");
document.writeln("		top: 5px;");
document.writeln("	}");
document.writeln("}");
document.writeln("</style>");
document.writeln("");
document.writeln("	<div class=\'show\' id=\'show\'>");
document.writeln("		<a href=\'javascript:;\' class=\'close-btn\' id=\'close-btn\'></a>");
document.writeln("		<a href=\'javascript:;\' onclick=\"openZoosUrl(\'chatwin\');LR_HideInvite();return false;\" class=\'go-btn\'></a>");
document.writeln("		<img src=\'http://style.ezcezc.com/y/w/js/show.png\' />");
document.writeln("	</div>");
document.writeln("	<script type=\'text/javascript\'>");
document.writeln("		$(document).ready(function() {");
// document.writeln("			$(\'#show\').show();");
document.writeln("			$(\'#close-btn\').click(function() {");
document.writeln("				$(\'#show\').hide();");
document.writeln("			})");
document.writeln("		})");
document.writeln("	</script>");
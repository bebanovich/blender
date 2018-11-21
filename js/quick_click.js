<b:if cond='data:blog.pageType in {&quot;static_page&quot;,&quot;item&quot;}'>
<script>
//<![CDATA[
function videoPlay(anchor){
anchor.innerHTML = anchor.innerHTML.replace('<!--','').replace('-->','');
anchor.onclick= null;
return false;
};
//]]>
</script>
</b:if>

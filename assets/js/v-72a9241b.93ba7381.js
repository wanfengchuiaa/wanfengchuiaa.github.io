"use strict";(self.webpackChunkwlblog=self.webpackChunkwlblog||[]).push([[9967],{3017:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-72a9241b",path:"/home/deploy.html",title:"部署",lang:"zh-CN",frontmatter:{tag:["部署","deploy","Github Page","自定义域名"]},excerpt:"",headers:[{level:2,title:"部署到自己的服务器",slug:"部署到自己的服务器",children:[]},{level:2,title:"GitHub Pages",slug:"github-pages",children:[{level:3,title:"deploy.sh",slug:"deploy-sh",children:[]},{level:3,title:"部署到自定义域名",slug:"部署到自定义域名",children:[]}]},{level:2,title:"Github Actions完成自动部署",slug:"github-actions完成自动部署",children:[{level:3,title:"获取token",slug:"获取token",children:[]},{level:3,title:"上传到github",slug:"上传到github",children:[]},{level:3,title:"设置Actions secrets",slug:"设置actions-secrets",children:[]}]}],git:{}}},405:(s,n,a)=>{a.r(n),a.d(n,{default:()=>dn});var e=a(6252);const o=(0,e._)("h1",{id:"部署",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#部署","aria-hidden":"true"},"#"),(0,e.Uk)(" 部署")],-1),t=(0,e.Uk)("在部署之前，请先看一下"),l={href:"https://v2.vuepress.vuejs.org/zh/guide/deployment.html",target:"_blank",rel:"noopener noreferrer"},p=(0,e.Uk)("vuepress官方介绍"),c=(0,e.Uk)("，请先看一下"),i={href:"https://v2.vuepress.vuejs.org/zh/guide/deployment.html",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("vuepress官方介绍"),u=(0,e.Uk)("，请先看一下"),g={href:"https://v2.vuepress.vuejs.org/zh/guide/deployment.html",target:"_blank",rel:"noopener noreferrer"},m=(0,e.Uk)("vuepress官方介绍"),b=(0,e.Uk)("，请先看一下"),d={href:"https://v2.vuepress.vuejs.org/zh/guide/deployment.html",target:"_blank",rel:"noopener noreferrer"},h=(0,e.Uk)("vuepress官方介绍"),k=(0,e.Uk)("，请先看一下"),_={href:"https://v2.vuepress.vuejs.org/zh/guide/deployment.html",target:"_blank",rel:"noopener noreferrer"},y=(0,e.Uk)("vuepress官方介绍"),v=(0,e.Uk)("，请先看一下"),z={href:"https://v2.vuepress.vuejs.org/zh/guide/deployment.html",target:"_blank",rel:"noopener noreferrer"},f=(0,e.Uk)("vuepress官方介绍"),U=(0,e.Uk)("..."),j=(0,e._)("h2",{id:"部署到自己的服务器",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#部署到自己的服务器","aria-hidden":"true"},"#"),(0,e.Uk)(" 部署到自己的服务器")],-1),x=(0,e.Uk)("如果你需要部署到自己的服务器，我已经安装了宝塔，如果你没安装宝塔，那么请先安装好宝塔面板,链接"),E={href:"https://www.bt.cn/download/linux.html",target:"_blank",rel:"noopener noreferrer"},P=(0,e.Uk)("宝塔linux面板，一键安装LAMP/LNMP/SSL/Tomcat (bt.cn)"),S=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211116091011851",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211116091011851.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),A=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211116091139240",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211116091139240.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),q=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211116091358145",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211116091358145.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),B=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211116091544820",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211116091544820.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),N=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211116091648397",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211116091648397.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),M=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211116091821466",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211116091821466.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),R=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211116092045376",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211116092045376.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),C=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211116092136984",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211116092136984.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),T=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211116092213963",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211116092213963.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),w=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211116092350381",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211116092350381.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),G=(0,e._)("div",{class:"custom-container tip"},[(0,e._)("p",{class:"custom-container-title"},"问题"),(0,e._)("ol",null,[(0,e._)("li",null,[(0,e._)("p",null,[(0,e.Uk)("我使用域名或者ip建立站点之后，那个文件夹名并不是"),(0,e._)("code",null,"aurora.xcye.xyz")]),(0,e._)("blockquote",null,[(0,e._)("p",null,"这个文件夹名是根据你ip或者域名命名的")])])]),(0,e._)("p",null,"不推荐使用这种方式进行部署，麻烦")],-1),W=(0,e._)("h2",{id:"github-pages",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#github-pages","aria-hidden":"true"},"#"),(0,e.Uk)(" GitHub Pages")],-1),I={class:"custom-container tip"},O=(0,e._)("p",{class:"custom-container-title"},"TIP",-1),$=(0,e._)("p",null,[(0,e.Uk)("Github pages就是会自动将你的静态文件托管在github，然后可以直接使用github提供的一个域名"),(0,e._)("code",null,"<your github username>.github.io"),(0,e.Uk)("或者使用你的自定义域名就行访问")],-1),H=(0,e.Uk)("在使用之前，请先看一下"),D={href:"https://v2.vuepress.vuejs.org/zh/guide/deployment.html",target:"_blank",rel:"noopener noreferrer"},F=(0,e.Uk)("vuepress官方介绍"),L=(0,e.Uk)("，请先看一下"),Y={href:"https://v2.vuepress.vuejs.org/zh/guide/deployment.html",target:"_blank",rel:"noopener noreferrer"},Z=(0,e.Uk)("vuepress官方介绍"),V=(0,e.Uk)("，请先看一下"),J={href:"https://v2.vuepress.vuejs.org/zh/guide/deployment.html",target:"_blank",rel:"noopener noreferrer"},K=(0,e.Uk)("vuepress官方介绍"),Q=(0,e.Uk)("，请先看一下"),X={href:"https://v2.vuepress.vuejs.org/zh/guide/deployment.html",target:"_blank",rel:"noopener noreferrer"},ss=(0,e.Uk)("vuepress官方介绍"),ns=(0,e.Uk)("..."),as=(0,e.uE)("<p>在 <code>docs/.vuepress/config.js</code> 中设置正确的 <code>base</code>。</p><p>如果你打算发布到 <code>https://&lt;USERNAME&gt;.github.io/</code>，则可以省略这一步，因为 <code>base</code> 默认即是 <code>&quot;/&quot;</code>。</p><p>如果你打算发布到 <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code>（也就是说你的仓库在 <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>），则将 <code>base</code> 设置为 <code>&quot;/&lt;REPO&gt;/&quot;</code>。</p>",3),es=(0,e._)("p",null,[(0,e.Uk)("进入github，新建一个仓库，用于托管"),(0,e._)("code",null,"npm run build"),(0,e.Uk)("打包之后的HTML文件")],-1),os=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210831133913906",originSrc:"http://ooszy.cco.vin/img/blog-note/image-20210831133913906.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),ts=(0,e._)("p",null,[(0,e.Uk)("将"),(0,e._)("code",null,"docs/.vuepress/dist"),(0,e.Uk)("下的所有文件使用git命令push到该仓库中")],-1),ls=(0,e._)("p",null,"如何push？？",-1),ps=(0,e.Uk)("请点击"),cs={href:"https://cn.bing.com/search?q=git+push%E5%88%B0github%E4%BB%93%E5%BA%93&cvid=b51557dbd8cc44b190988babb925d3ee&aqs=edge..69i57j69i64.10400j0j1&pglt=163&FORM=ANNTA1&PC=U531",target:"_blank",rel:"noopener noreferrer"},is=(0,e.Uk)("这里"),rs=(0,e._)("li",null,[(0,e._)("p",null,"进入settings--\x3epages"),(0,e._)("p",null,"进行第二步之前，表示你已经将dist目录中的文件，已push到此仓库中"),(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210831134813016",originSrc:"http://ooszy.cco.vin/img/blog-note/image-20210831134813016.png?x-oss-process=style/pictureProcess1",data:"aurora"})]),(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210831134956617",originSrc:"http://ooszy.cco.vin/img/blog-note/image-20210831134956617.png?x-oss-process=style/pictureProcess1",data:"aurora"})]),(0,e._)("p",null,"然后你就可以点击上面的那个连接，进行访问了，现在就已经将打包后的静态文件部署到github page"),(0,e._)("details",{class:"custom-container details"},[(0,e._)("summary",null,"哪个链接??"),(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211116103319349",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211116103319349.png?x-oss-process=style/pictureProcess1",data:"aurora"})])])],-1),us=(0,e.uE)('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>第一次使用github pages，不推荐直接使用自定义域名，不推荐直接使用自定义域名，不推荐直接使用自定义域名，请先使用github提供的域名，能正确的访问到博客页面之后，再改成自定义域名</p></div><h3 id="deploy-sh" tabindex="-1"><a class="header-anchor" href="#deploy-sh" aria-hidden="true">#</a> deploy.sh</h3><blockquote><p><code>下面的内容，请确保你已经能使用github提供的地址或者自定义域名访问到博客页面之后，在使用下面这种比较快速的方式</code></p></blockquote><p>在你的项目中，创建一个如下的 <code>deploy.sh</code> 文件（请自行判断去掉高亮行的注释）</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>\n\n<span class="token comment"># 确保脚本抛出遇到的错误</span>\n<span class="token builtin class-name">set</span> -e\n\n<span class="token comment"># 生成静态文件</span>\n<span class="token function">npm</span> run docs:build\n\n<span class="token comment"># 进入生成的文件夹</span>\n<span class="token builtin class-name">cd</span> docs/.vuepress/dist\n\n<span class="token comment"># 如果是发布到自定义域名</span>\n<span class="token comment"># echo &#39;www.example.com&#39; &gt; CNAME</span>\n\n<span class="token function">git</span> init\n<span class="token function">git</span> <span class="token function">add</span> -A\n<span class="token function">git</span> commit -m <span class="token string">&#39;deploy&#39;</span>\n\n<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io</span>\n<span class="token comment"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io.git master</span>\n\n<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span>\n<span class="token comment"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages</span>\n\n<span class="token builtin class-name">cd</span> -\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>下面这个是使用自定义域名进行部署的<code>deploy.sh</code>文件</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">set</span> -e\n\n<span class="token builtin class-name">cd</span> docs/.vuepress/dist\n<span class="token builtin class-name">echo</span> <span class="token string">&#39;blog.cco.vin&#39;</span> <span class="token operator">&gt;</span> CNAME\n\n<span class="token function">git</span> init\n<span class="token function">git</span> <span class="token function">add</span> -A\n<span class="token function">git</span> commit -m <span class="token string">&#39;deploy&#39;</span>\n\n<span class="token function">git</span> push -f https://github.com/qsyyke/blog.git master:gh-pages\n\n<span class="token builtin class-name">cd</span> -\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>请自己看一下自己的github仓库地址，更改上面对应的值，比如<code>git push -f https://github.com/qsyyke/blog.git master:gh-pages</code>的地址，还有分支等</p></div><p>然后进入到<code>package.json</code>文件中，输入以下内容到<code>scripts</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;deploy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bash deploy.sh&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p><code>请注意看一下这个.sh文件名是不是deploy.sh，如果不是，请改一下&quot;deploy&quot;: &quot;bash deploy.sh&quot;，将后面的deploy.sh改成自己的.sh文件名就可以</code></p></blockquote>',11),gs=(0,e._)("details",{class:"custom-container details"},[(0,e._)("summary",null,"改变package.json文件之前?"),(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211116104440846",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211116104440846.png?x-oss-process=style/pictureProcess1",data:"aurora"})])],-1),ms=(0,e._)("details",{class:"custom-container details"},[(0,e._)("summary",null,"改变package.json文件之后"),(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211116104605535",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211116104605535.png?x-oss-process=style/pictureProcess1",data:"aurora"})])],-1),bs=(0,e.uE)("<blockquote><p><code>为何你的package.json和我的不一样，package内容不需要和我的一模一样...</code></p></blockquote><p>然后你现在就可以运行<code>npm run deploy</code>命令，然后就会依次执行<code>npm run build</code>,进入dist内<code>git add . &amp;&amp; git commit -m &quot;...&quot; &amp;&amp; git push ... </code>，之后如果一切正常的话，你就可以在你github对应分支处看到dist目录下的所有内容</p><p>不能直接在比如vscode的终端处运行<code>npm run deploy</code>，否则会出现下面错误，执行此命令，你需要在cmd或者git的<code>Git Bash Here</code></p>",3),ds=(0,e._)("details",{class:"custom-container details"},[(0,e._)("summary",null,"错误信息"),(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211116105934737",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211116105934737.png?x-oss-process=style/pictureProcess1",data:"aurora"})])],-1),hs=(0,e._)("h3",{id:"部署到自定义域名",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#部署到自定义域名","aria-hidden":"true"},"#"),(0,e.Uk)(" 部署到自定义域名")],-1),ks=(0,e._)("p",null,"部署到自定义域名也是一样的方法，只是需要在github的settings--\x3epages中，添加自定义域名就可以",-1),_s=(0,e._)("h4",{id:"步骤",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#步骤","aria-hidden":"true"},"#"),(0,e.Uk)(" 步骤")],-1),ys=(0,e._)("p",null,"到阿里云，腾讯云，或其他服务商处，申请一个域名，如果使用国内服务器，域名需备案",-1),vs=(0,e.Uk)("如何申请?"),zs={href:"https://cn.bing.com/search?q=%E5%A6%82%E4%BD%95%E7%94%B3%E8%AF%B7%E5%9F%9F%E5%90%8D&cvid=c0c1efa1ddc84c3dacba8acc079f915c&aqs=edge..69i57j0l4.5982j0j3&FORM=ANAB01&PC=U531",target:"_blank",rel:"noopener noreferrer"},fs=(0,e.Uk)("点这里"),Us=(0,e._)("li",null,[(0,e._)("p",null,[(0,e.Uk)("进入到仓库中的"),(0,e._)("code",null,"Setting ---\x3e Pages")]),(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210831135358064",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20210831135358064.png?x-oss-process=style/pictureProcess1",data:"aurora"})])],-1),js=(0,e._)("p",null,[(0,e.Uk)("如果出现下面这个，那就证明你没有为这个自定义域名，添加一个"),(0,e._)("code",null,"CNAME"),(0,e.Uk)("解析")],-1),xs=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211116110931450",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211116110931450.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),Es=(0,e._)("p",null,[(0,e.Uk)("就表示，该"),(0,e._)("code",null,"newblog.cco.vin"),(0,e.Uk)("域名并没有添加一个CNAME解析，进入到域名解析处")],-1),Ps=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210831135743656",originSrc:"http://ooszy.cco.vin/img/blog-note/image-20210831135743656.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),Ss=(0,e._)("p",null,[(0,e.Uk)("对newblog添加"),(0,e._)("code",null,"CNAME"),(0,e.Uk)("记录，指向"),(0,e._)("code",null,"<user>.github.io."),(0,e.Uk)("就可以了")],-1),As=(0,e._)("p",null,[(0,e._)("code",null,"我上面的这个域名解析面板在哪?")],-1),qs=(0,e._)("p",null,"我使用的是腾讯云，所以你进入腾讯云，点击对应域名后面解析，就会出现这个，如果你使用的是其他域名服务商，请点击下面链接，改一下服务商",-1),Bs={href:"https://cn.bing.com/search?q=%E9%98%BF%E9%87%8C%E4%BA%91%E5%A6%82%E4%BD%95%E4%B8%BA%E5%9F%9F%E5%90%8D%E6%B7%BB%E5%8A%A0CNAME%E8%A7%A3%E6%9E%90&cvid=29db0c50b2574863ab82e0b0a603bfd9&aqs=edge..69i57.604425j0j4&FORM=ANAB01&PC=U531",target:"_blank",rel:"noopener noreferrer"},Ns=(0,e.Uk)("点击这里，记得在搜索框中改一下内容"),Ms=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211116111632322",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211116111632322.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),Rs=(0,e._)("h2",{id:"github-actions完成自动部署",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#github-actions完成自动部署","aria-hidden":"true"},"#"),(0,e.Uk)(" Github Actions完成自动部署")],-1),Cs=(0,e.Uk)("如何使用Github Actions进行自动部署，请查看我自己写的"),Ts={href:"https://aurora.xcye.xyz/home/deploy.html#Github%20Actions%E5%AE%8C%E6%88%90%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2",target:"_blank",rel:"noopener noreferrer"},ws=(0,e.Uk)("文章"),Gs=(0,e.Uk)("，如果你觉得不够详细的话，可以再在搜索引擎中，搜索"),Ws=(0,e._)("code",null,"vuepress github actions",-1),Is=(0,e.Uk)("关键字"),Os=(0,e._)("p",null,[(0,e.Uk)("推荐使用Github Actions完成自动部署，你只需要将站点中，除"),(0,e._)("code",null,"node_modules,docs/.vuepress/.cache,docs/.vuepress/.temp,docs/.vuepress/dist"),(0,e.Uk)("外的内容，push到你的仓库，然后简单设置下，就可以自动在github中，下载依赖，已经运行"),(0,e._)("code",null,"npm run build"),(0,e.Uk)("，从而完成自动部署，步骤为")],-1),$s=(0,e._)("h3",{id:"获取token",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#获取token","aria-hidden":"true"},"#"),(0,e.Uk)(" 获取token")],-1),Hs=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211026232416988",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211026232416988.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),Ds=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211026232442304",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211026232442304.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),Fs=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211026232532647",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211026232532647.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),Ls=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211026232831517",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211026232831517.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),Ys=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211026232853598",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211026232853598.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),Zs=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211026232948093",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211026232948093.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),Vs=(0,e._)("h3",{id:"上传到github",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#上传到github","aria-hidden":"true"},"#"),(0,e.Uk)(" 上传到github")],-1),Js=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211026233551543",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211026233551543.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),Ks=(0,e._)("div",{class:"custom-container tip"},[(0,e._)("p",{class:"custom-container-title"},"TIP"),(0,e._)("p",null,[(0,e.Uk)("这里你只需要上传"),(0,e._)("code",null,"package.json"),(0,e.Uk)("和"),(0,e._)("code",null,"docs"),(0,e.Uk)("就可以了，你也可以排除"),(0,e._)("code",null,"docs/.vuepress/.cache,docs/.vuepress/.temp,docs/.vuepress/dist"),(0,e.Uk)("文件")])],-1),Qs=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211026233853901",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211026233853901.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),Xs=(0,e._)("p",null,"然后将下面的内容，复制替换下图中的内容",-1),sn=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211026234059132",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211026234059132.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),nn=(0,e.uE)('<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> vuepress<span class="token punctuation">-</span>deploy\n<span class="token key atrule">on</span><span class="token punctuation">:</span>\n  <span class="token key atrule">push</span><span class="token punctuation">:</span>\n    <span class="token key atrule">branches</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> main <span class="token comment">#push到哪个分支时触发自动部署，推荐main</span>\n    <span class="token key atrule">paths-ignore</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> .gitignore\n      <span class="token punctuation">-</span> .mergify.yml\n      <span class="token punctuation">-</span> LICENSE\n      <span class="token punctuation">-</span> README.md\n      <span class="token punctuation">-</span> renovate.json\n<span class="token key atrule">jobs</span><span class="token punctuation">:</span>\n  <span class="token key atrule">build-and-deploy</span><span class="token punctuation">:</span>\n    <span class="token key atrule">strategy</span><span class="token punctuation">:</span>\n      <span class="token key atrule">matrix</span><span class="token punctuation">:</span>\n        <span class="token key atrule">node</span><span class="token punctuation">:</span>\n          <span class="token punctuation">-</span> <span class="token string">&#39;lts/*&#39;</span>\n        <span class="token key atrule">platform</span><span class="token punctuation">:</span>\n          <span class="token punctuation">-</span> ubuntu<span class="token punctuation">-</span>latest\n    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;${{matrix.platform}} / Node.js ${{ matrix.node }}&#39;</span>\n    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span>matrix.platform<span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token key atrule">steps</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout\n      <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@main\n      <span class="token key atrule">with</span><span class="token punctuation">:</span>\n        <span class="token key atrule">persist-credentials</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n        <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>\n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Use Node.js\n      <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@main\n      <span class="token key atrule">with</span><span class="token punctuation">:</span>\n        <span class="token key atrule">node-version</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.node <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies\n      <span class="token key atrule">run</span><span class="token punctuation">:</span> npm install <span class="token comment">#运行安装依赖和主题</span>\n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build VuePress\n      <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run build\n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to Pages\n      <span class="token key atrule">env</span><span class="token punctuation">:</span>\n        <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai\n      <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n        cd docs/.vuepress/dist\n        git config --global init.defaultBranch master\n        git init\n        git config user.name $GITHUB_ACTOR\n        git config user.email ${{ secrets.GIT_EMAIL }}\n        git add .\n        git commit -q -m &quot;Deploying to gh-pages from @ $GITHUB_SHA in $(date +&quot;%a %b %d %T %Z %Y&quot;)&quot;\n        git push -f -q https://$GITHUB_ACTOR:${{ github.token }}@github.com/$GITHUB_REPOSITORY.git master --tags</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><h3 id="设置actions-secrets" tabindex="-1"><a class="header-anchor" href="#设置actions-secrets" aria-hidden="true">#</a> 设置Actions secrets</h3>',2),an=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211026234643018",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211026234643018.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),en=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211026234710492",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211026234710492.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),on=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211026234805318",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211026234805318.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),tn=(0,e._)("p",null,[(0,e.Uk)("然后你在本地或者github中，随便在"),(0,e._)("code",null,"main"),(0,e.Uk)("分支下，修改一个文件的内容，然后"),(0,e._)("code",null,"git commit..."),(0,e.Uk)("，"),(0,e._)("code",null,"git push ..."),(0,e.Uk)("后，你便可以看到已经开始运行了")],-1),ln=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211026235130337",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211026235130337.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),pn=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211026235518279",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211026235518279.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),cn=(0,e._)("p",null,"只有这个状态变成绿色之后，才便是部署成功，如果红色，你可以看一下报错信息",-1),rn=(0,e._)("p",null,[(0,e.Uk)("你可以在"),(0,e._)("code",null,"master"),(0,e.Uk)("分支看一下，build之后的文件")],-1),un=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211026235929559",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211026235929559.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),gn=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211027000105500",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211027000105500.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),mn=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211027000121171",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211027000121171.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),bn={},dn=(0,a(3744).Z)(bn,[["render",function(s,n){const a=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)(e.HY,null,[o,(0,e._)("p",null,[t,(0,e._)("a",l,[p,(0,e.Wm)(a)]),c,(0,e._)("a",i,[r,(0,e.Wm)(a)]),u,(0,e._)("a",g,[m,(0,e.Wm)(a)]),b,(0,e._)("a",d,[h,(0,e.Wm)(a)]),k,(0,e._)("a",_,[y,(0,e.Wm)(a)]),v,(0,e._)("a",z,[f,(0,e.Wm)(a)]),U]),j,(0,e._)("p",null,[x,(0,e._)("a",E,[P,(0,e.Wm)(a)])]),S,A,q,B,N,M,R,C,T,w,G,W,(0,e._)("div",I,[O,$,(0,e._)("p",null,[H,(0,e._)("a",D,[F,(0,e.Wm)(a)]),L,(0,e._)("a",Y,[Z,(0,e.Wm)(a)]),V,(0,e._)("a",J,[K,(0,e.Wm)(a)]),Q,(0,e._)("a",X,[ss,(0,e.Wm)(a)]),ns])]),as,(0,e._)("ol",null,[(0,e._)("li",null,[es,os,ts,(0,e._)("blockquote",null,[ls,(0,e._)("p",null,[ps,(0,e._)("a",cs,[is,(0,e.Wm)(a)])])])]),rs]),us,gs,ms,bs,ds,hs,ks,_s,(0,e._)("ol",null,[(0,e._)("li",null,[ys,(0,e._)("blockquote",null,[(0,e._)("p",null,[vs,(0,e._)("a",zs,[fs,(0,e.Wm)(a)])])])]),Us,(0,e._)("li",null,[js,xs,Es,Ps,Ss,(0,e._)("blockquote",null,[As,qs,(0,e._)("p",null,[(0,e._)("a",Bs,[Ns,(0,e.Wm)(a)])])])])]),Ms,Rs,(0,e._)("p",null,[Cs,(0,e._)("a",Ts,[ws,(0,e.Wm)(a)]),Gs,Ws,Is]),Os,$s,Hs,Ds,Fs,Ls,Ys,Zs,Vs,Js,Ks,Qs,Xs,sn,nn,an,en,on,tn,ln,pn,cn,rn,un,gn,mn],64)}]])}}]);
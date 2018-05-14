webpackJsonp([50],{1528:function(n,s){n.exports={content:["article",{},["p","\u4e0b\u9762\u4ee5\u4e00\u4e2a\u7b80\u5355\u7684\u9759\u6001\u7ec4\u4ef6\u4e3a\u4f8b\u8fdb\u884c\u4ecb\u7ecd\u3002\u5047\u8bbe\u4f60\u7684\u5e94\u7528\u4e2d\u7ecf\u5e38\u9700\u8981\u5c55\u73b0\u56fe\u7247\uff0c\u8fd9\u4e9b\u56fe\u7247\u5bbd\u5ea6\u56fa\u5b9a\uff0c\u6709\u4e00\u4e2a\u7070\u8272\u7684\u80cc\u666f\u548c\u4e00\u5b9a\u7684\u5185\u8fb9\u8ddd\uff0c\u6709\u6587\u5b57\u4ecb\u7ecd\uff0c\u5c31\u50cf\u4e0b\u56fe\u8fd9\u6837\uff1a"],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/vcRltFiKfHBHFrUcsTtW.png",width:"400"}]],["p","\u4f60\u53ef\u4ee5\u7528\u4e00\u4e2a\u7ec4\u4ef6\u6765\u5b9e\u73b0\u8fd9\u4e00\u529f\u80fd\uff0c\u5b83\u6709\u9ed8\u8ba4\u7684\u6837\u5f0f\uff0c\u540c\u65f6\u53ef\u4ee5\u63a5\u6536\u7236\u7ec4\u4ef6\u4f20\u9012\u7684\u53c2\u6570\u8fdb\u884c\u5c55\u793a\u3002"],["h2","\u65b0\u5efa\u6587\u4ef6"],["p","\u5728 ",["code","src/components"]," \u4e0b\u65b0\u5efa\u4e00\u4e2a\u4ee5\u7ec4\u4ef6\u540d\u547d\u540d\u7684\u6587\u4ef6\u5939\uff0c\u6ce8\u610f\u9996\u5b57\u6bcd\u5927\u5199\uff0c\u547d\u540d\u5c3d\u91cf\u4f53\u73b0\u7ec4\u4ef6\u7684\u529f\u80fd\uff0c\u8fd9\u91cc\u5c31\u53eb ",["code","ImageWrapper"],"\u3002\u5728\u6b64\u6587\u4ef6\u5939\u4e0b\u65b0\u589e js \u6587\u4ef6\u53ca\u6837\u5f0f\u6587\u4ef6\uff08\u5982\u679c\u9700\u8981\uff09\uff0c\u547d\u540d\u4e3a ",["code","index.js"]," \u548c ",["code","index.less"],"\u3002"],["blockquote",["p","\u5728\u4f7f\u7528\u7ec4\u4ef6\u65f6\uff0c\u9ed8\u8ba4\u4f1a\u5728 ",["code","index.js"]," \u4e2d\u5bfb\u627e export \u7684\u5bf9\u8c61\uff0c\u5982\u679c\u4f60\u7684\u7ec4\u4ef6\u6bd4\u8f83\u590d\u6742\uff0c\u53ef\u4ee5\u5206\u4e3a\u591a\u4e2a\u6587\u4ef6\uff0c\u6700\u540e\u5728 ",["code","index.js"]," \u4e2d\u7edf\u4e00 export\uff0c\u5c31\u50cf\u8fd9\u6837\uff1a"],["pre",{lang:"js",highlighted:'<span class="token comment" spellcheck="true">// MainComponent.js</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// SubComponent1.js</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// SubComponent2.js</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// index.js</span>\n<span class="token keyword">import</span> MainComponent <span class="token keyword">from</span> <span class="token string">\'./MainComponent\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> SubComponent1 <span class="token keyword">from</span> <span class="token string">\'./SubComponent1\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> SubComponent2 <span class="token keyword">from</span> <span class="token string">\'./SubComponent2\'</span><span class="token punctuation">;</span>\n\nMainComponent<span class="token punctuation">.</span>SubComponent1 <span class="token operator">=</span> SubComponent1<span class="token punctuation">;</span>\nMainComponent<span class="token punctuation">.</span>SubComponent2 <span class="token operator">=</span> SubComponent2<span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> MainComponent<span class="token punctuation">;</span>'},["code","// MainComponent.js\nexport default ({ ... }) => (...);\n\n// SubComponent1.js\nexport default ({ ... }) => (...);\n\n// SubComponent2.js\nexport default ({ ... }) => (...);\n\n// index.js\nimport MainComponent from './MainComponent';\nimport SubComponent1 from './SubComponent1';\nimport SubComponent2 from './SubComponent2';\n\nMainComponent.SubComponent1 = SubComponent1;\nMainComponent.SubComponent2 = SubComponent2;\nexport default MainComponent;"]]],["p","\u4f60\u7684\u4ee3\u7801\u5927\u6982\u662f\u8fd9\u4e2a\u6837\u5b50\uff1a"],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// index.js</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">\'./index.less\'</span><span class="token punctuation">;</span>    <span class="token comment" spellcheck="true">// \u6309\u7167 CSS Modules \u7684\u65b9\u5f0f\u5f15\u5165\u6837\u5f0f\u6587\u4ef6\u3002</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> src<span class="token punctuation">,</span> desc<span class="token punctuation">,</span> style <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>imageWrapper<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>img<span class="token punctuation">}</span></span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>src<span class="token punctuation">}</span></span> <span class="token attr-name">alt</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>desc<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">{</span>desc <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>desc<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>desc<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","// index.js\nimport React from 'react';\nimport styles from './index.less';    // \u6309\u7167 CSS Modules \u7684\u65b9\u5f0f\u5f15\u5165\u6837\u5f0f\u6587\u4ef6\u3002\n\nexport default ({ src, desc, style }) => (\n  <div style={style} className={styles.imageWrapper}>\n    <img className={styles.img} src={src} alt={desc} />\n    {desc && <div className={styles.desc}>{desc}</div>}\n  </div>\n);"]],["pre",{lang:"css",highlighted:'<span class="token selector">// index<span class="token class">.less</span>\n<span class="token class">.imageWrapper</span> </span><span class="token punctuation">{</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">20</span>px <span class="token number">8</span>px<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#f2f4f5</span><span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">400</span>px<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span> auto<span class="token punctuation">;</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.img</span> </span><span class="token punctuation">{</span>\n  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>\n  <span class="token property">max-width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100%</span> - <span class="token number">32</span>px<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">2.4</span>em <span class="token number">1</span>em<span class="token punctuation">;</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">8</span>px <span class="token number">20</span>px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">143</span>, <span class="token number">168</span>, <span class="token number">191</span>, <span class="token number">0.35</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","// index.less\n.imageWrapper {\n  padding: 0 20px 8px;\n  background: #f2f4f5;\n  width: 400px;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.img {\n  vertical-align: middle;\n  max-width: calc(100% - 32px);\n  margin: 2.4em 1em;\n  box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);\n}"]],["p","\u5230\u8fd9\u513f\u7ec4\u4ef6\u5c31\u5efa\u597d\u4e86\u3002"],["h2","\u4f7f\u7528"],["p","\u5728\u8981\u4f7f\u7528\u8fd9\u4e2a\u7ec4\u4ef6\u7684\u5730\u65b9\uff0c\u6309\u7167\u7ec4\u4ef6\u5b9a\u4e49\u7684 API \u4f20\u5165\u53c2\u6570\uff0c\u76f4\u63a5\u4f7f\u7528\u5c31\u597d\uff0c\u4e0d\u8fc7\u522b\u5fd8\u4e86\u5148\u5f15\u5165\uff1a"],["pre",{lang:"js",highlighted:'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> ImageWrapper <span class="token keyword">from</span> <span class="token string">\'../../components/ImageWrapper\'</span><span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// \u6ce8\u610f\u4fdd\u8bc1\u5f15\u7528\u8def\u5f84\u7684\u6b63\u786e</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>ImageWrapper\n    src<span class="token operator">=</span><span class="token string">"https://os.alipayobjects.com/rmsportal/mgesTPFxodmIwpi.png"</span>\n    desc<span class="token operator">=</span><span class="token string">"\u793a\u610f\u56fe"</span>\n  <span class="token operator">/</span><span class="token operator">></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import React from 'react';\nimport ImageWrapper from '../../components/ImageWrapper';  // \u6ce8\u610f\u4fdd\u8bc1\u5f15\u7528\u8def\u5f84\u7684\u6b63\u786e\n\nexport default () => (\n  <ImageWrapper\n    src=\"https://os.alipayobjects.com/rmsportal/mgesTPFxodmIwpi.png\"\n    desc=\"\u793a\u610f\u56fe\"\n  />\n);"]]],meta:{order:5,title:"\u65b0\u589e\u4e1a\u52a1\u7ec4\u4ef6",type:"\u5165\u95e8",filename:"docs/new-component.zh-CN.md"},description:["section",["p","\u5bf9\u4e8e\u4e00\u4e9b\u53ef\u80fd\u88ab\u591a\u5904\u5f15\u7528\u7684\u529f\u80fd\u6a21\u5757\uff0c\u5efa\u8bae\u63d0\u70bc\u6210\u4e1a\u52a1\u7ec4\u4ef6\u7edf\u4e00\u7ba1\u7406\u3002\u8fd9\u4e9b\u7ec4\u4ef6\u4e00\u822c\u6709\u4ee5\u4e0b\u7279\u5f81\uff1a"],["ul",["li",["p","\u53ea\u8d1f\u8d23\u4e00\u5757\u76f8\u5bf9\u72ec\u7acb\uff0c\u7a33\u5b9a\u7684\u529f\u80fd\uff1b"]],["li",["p","\u6ca1\u6709\u5355\u72ec\u7684\u8def\u7531\u914d\u7f6e\uff1b"]],["li",["p","\u53ef\u80fd\u662f\u7eaf\u9759\u6001\u7684\uff0c\u4e5f\u53ef\u80fd\u5305\u542b\u81ea\u5df1\u7684 state\uff0c\u4f46\u4e0d\u6d89\u53ca dva \u7684\u6570\u636e\u6d41\uff0c\u4ec5\u53d7\u7236\u7ec4\u4ef6\uff08\u901a\u5e38\u662f\u4e00\u4e2a\u9875\u9762\uff09\u4f20\u9012\u7684\u53c2\u6570\u63a7\u5236\u3002"]]]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u65b0\u5efa\u6587\u4ef6",title:"\u65b0\u5efa\u6587\u4ef6"},"\u65b0\u5efa\u6587\u4ef6"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u4f7f\u7528",title:"\u4f7f\u7528"},"\u4f7f\u7528"]]]}}});
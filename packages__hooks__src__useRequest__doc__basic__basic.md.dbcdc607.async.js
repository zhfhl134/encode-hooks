(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"95eJ":function(e,a,t){},MZF8:function(e,a,t){"use strict";var l=t("ogwx");t.d(a,"a",(function(){return l["b"]}));t("VCU9")},v8OG:function(e,a,t){"use strict";var l=t("ahKI"),n=t.n(l),r=t("bIC1"),c=t.n(r);t("95eJ");function m(e,a){return s(e)||E(e,a)||o(e,a)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,a){if(e){if("string"===typeof e)return d(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(e,a):void 0}}function d(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,l=new Array(a);t<a;t++)l[t]=e[t];return l}function E(e,a){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var l,n,r=[],c=!0,m=!1;try{for(t=t.call(e);!(c=(l=t.next()).done);c=!0)if(r.push(l.value),a&&r.length===a)break}catch(u){m=!0,n=u}finally{try{c||null==t["return"]||t["return"]()}finally{if(m)throw n}}return r}}function s(e){if(Array.isArray(e))return e}var i=function(e){var a=e.children,t=Object(l["useRef"])(),r=Object(l["useState"])(!1),u=m(r,2),o=u[0],d=u[1],E=Object(l["useState"])(!1),s=m(E,2),i=s[0],p=s[1];return Object(l["useEffect"])((function(){var e=t.current,a=c()((function(){d(e.scrollLeft>0),p(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return a(),e.addEventListener("scroll",a),window.addEventListener("resize",a),function(){e.removeEventListener("scroll",a),window.removeEventListener("resize",a)}}),[]),n.a.createElement("div",{className:"__dumi-default-table"},n.a.createElement("div",{className:"__dumi-default-table-content",ref:t,"data-left-folded":o||void 0,"data-right-folded":i||void 0},n.a.createElement("table",null,a)))};a["a"]=i},ytLi:function(e,a,t){"use strict";t.r(a);var l=t("ahKI"),n=t.n(l),r=t("fx+Z"),c=t("1i7f"),m=t("PAHk"),u=t("v8OG"),o=n.a.memo((e=>{var a=e.demos,t=a["basic-default"].component,l=a["basic-manual-run"].component,o=a["basic-manual-runasync"].component,d=a["basic-lifecycle"].component,E=a["basic-refresh"].component,s=a["basic-mutate"].component,i=a["basic-cancel"].component,p=a["basic-params"].component;return n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"\u57fa\u7840\u7528\u6cd5"},n.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5"),n.a.createElement("p",null,"\u4ecb\u7ecd ",n.a.createElement("code",null,"useRequest")," \u6700\u6838\u5fc3\uff0c\u6700\u57fa\u7840\u7684\u80fd\u529b\uff0c\u4e5f\u5c31\u662f ",n.a.createElement("code",null,"useRequest")," \u5185\u6838\u7684\u80fd\u529b\u3002"),n.a.createElement("h2",{id:"\u9ed8\u8ba4\u8bf7\u6c42"},n.a.createElement(r["AnchorLink"],{to:"#\u9ed8\u8ba4\u8bf7\u6c42","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u9ed8\u8ba4\u8bf7\u6c42"),n.a.createElement("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",n.a.createElement("code",null,"useRequest")," \u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\uff0c\u5728\u7ec4\u4ef6\u521d\u59cb\u5316\u65f6\uff0c\u4f1a\u81ea\u52a8\u6267\u884c\u8be5\u5f02\u6b65\u51fd\u6570\u3002\u540c\u65f6\u81ea\u52a8\u7ba1\u7406\u8be5\u5f02\u6b65\u51fd\u6570\u7684 ",n.a.createElement("code",null,"loading")," , ",n.a.createElement("code",null,"data")," , ",n.a.createElement("code",null,"error")," \u7b49\u72b6\u6001\u3002"),n.a.createElement(m["a"],{code:"const { data, error, loading } = useRequest(service);",lang:"js"}),n.a.createElement("br",null)),n.a.createElement(c["default"],a["basic-default"].previewerProps,n.a.createElement(t,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"\u624b\u52a8\u89e6\u53d1"},n.a.createElement(r["AnchorLink"],{to:"#\u624b\u52a8\u89e6\u53d1","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u624b\u52a8\u89e6\u53d1"),n.a.createElement("p",null,"\u5982\u679c\u8bbe\u7f6e\u4e86 ",n.a.createElement("code",null,"options.manual = true"),"\uff0c\u5219 ",n.a.createElement("code",null,"useRequest")," \u4e0d\u4f1a\u9ed8\u8ba4\u6267\u884c\uff0c\u9700\u8981\u901a\u8fc7 ",n.a.createElement("code",null,"run")," \u6216\u8005 ",n.a.createElement("code",null,"runAsync")," \u6765\u89e6\u53d1\u6267\u884c\u3002"),n.a.createElement(m["a"],{code:"const { loading, run, runAsync } = useRequest(service, {\n  manual: true,\n});\n\n<button onClick={run} disabled={loading}>\n  {loading ? 'Loading' : 'Edit'}\n</button>;",lang:"tsx"}),n.a.createElement("p",null,n.a.createElement("code",null,"run")," \u4e0e ",n.a.createElement("code",null,"runAsync")," \u7684\u533a\u522b\u5728\u4e8e\uff1a"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("code",null,"run")," \u662f\u4e00\u4e2a\u666e\u901a\u7684\u540c\u6b65\u51fd\u6570\uff0c\u6211\u4eec\u4f1a\u81ea\u52a8\u6355\u83b7\u5f02\u5e38\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",n.a.createElement("code",null,"options.onError")," \u6765\u5904\u7406\u5f02\u5e38\u65f6\u7684\u884c\u4e3a\u3002")),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("code",null,"runAsync")," \u662f\u4e00\u4e2a\u8fd4\u56de ",n.a.createElement("code",null,"Promise")," \u7684\u5f02\u6b65\u51fd\u6570\uff0c\u5982\u679c\u4f7f\u7528 ",n.a.createElement("code",null,"runAsync")," \u6765\u8c03\u7528\uff0c\u5219\u610f\u5473\u7740\u4f60\u9700\u8981\u81ea\u5df1\u6355\u83b7\u5f02\u5e38\u3002"),n.a.createElement(m["a"],{code:"runAsync()\n  .then((data) => {\n    console.log(data);\n  })\n  .catch((error) => {\n    console.log(error);\n  });",lang:"ts"}))),n.a.createElement("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u901a\u8fc7\u4fee\u6539\u7528\u6237\u540d\u8fd9\u4e2a\u7b80\u5355\u7684\u573a\u666f\uff0c\u6765\u6f14\u793a useRequest \u624b\u52a8\u89e6\u53d1\u6a21\u5f0f\uff0c\u4ee5\u53ca ",n.a.createElement("code",null,"run")," \u4e0e ",n.a.createElement("code",null,"runAsync")," \u7684\u533a\u522b\u3002")),n.a.createElement(c["default"],a["basic-manual-run"].previewerProps,n.a.createElement(l,null)),n.a.createElement(c["default"],a["basic-manual-runasync"].previewerProps,n.a.createElement(o,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"\u751f\u547d\u5468\u671f"},n.a.createElement(r["AnchorLink"],{to:"#\u751f\u547d\u5468\u671f","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u751f\u547d\u5468\u671f"),n.a.createElement("p",null,n.a.createElement("code",null,"useRequest")," \u63d0\u4f9b\u4e86\u4ee5\u4e0b\u51e0\u4e2a\u751f\u547d\u5468\u671f\u914d\u7f6e\u9879\uff0c\u4f9b\u4f60\u5728\u5f02\u6b65\u51fd\u6570\u7684\u4e0d\u540c\u9636\u6bb5\u505a\u4e00\u4e9b\u5904\u7406\u3002"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("code",null,"onBefore"),"\uff1a\u8bf7\u6c42\u4e4b\u524d\u89e6\u53d1"),n.a.createElement("li",null,n.a.createElement("code",null,"onSuccess"),"\uff1a\u8bf7\u6c42\u6210\u529f\u89e6\u53d1"),n.a.createElement("li",null,n.a.createElement("code",null,"onError"),"\uff1a\u8bf7\u6c42\u5931\u8d25\u89e6\u53d1"),n.a.createElement("li",null,n.a.createElement("code",null,"onFinally"),"\uff1a\u8bf7\u6c42\u5b8c\u6210\u89e6\u53d1"))),n.a.createElement(c["default"],a["basic-lifecycle"].previewerProps,n.a.createElement(d,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"\u5237\u65b0\u91cd\u590d\u4e0a\u4e00\u6b21\u8bf7\u6c42"},n.a.createElement(r["AnchorLink"],{to:"#\u5237\u65b0\u91cd\u590d\u4e0a\u4e00\u6b21\u8bf7\u6c42","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5237\u65b0\uff08\u91cd\u590d\u4e0a\u4e00\u6b21\u8bf7\u6c42\uff09"),n.a.createElement("p",null,n.a.createElement("code",null,"useRequest")," \u63d0\u4f9b\u4e86 ",n.a.createElement("code",null,"refresh")," \u548c ",n.a.createElement("code",null,"refreshAsync")," \u65b9\u6cd5\uff0c\u4f7f\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4e0a\u4e00\u6b21\u7684\u53c2\u6570\uff0c\u91cd\u65b0\u53d1\u8d77\u8bf7\u6c42\u3002"),n.a.createElement("p",null,"\u5047\u5982\u5728\u8bfb\u53d6\u7528\u6237\u4fe1\u606f\u7684\u573a\u666f\u4e2d"),n.a.createElement("ol",null,n.a.createElement("li",null,"\u6211\u4eec\u8bfb\u53d6\u4e86 ID \u4e3a 1 \u7684\u7528\u6237\u4fe1\u606f ",n.a.createElement("code",null,"run(1)")),n.a.createElement("li",null,"\u6211\u4eec\u901a\u8fc7\u67d0\u79cd\u624b\u6bb5\u66f4\u65b0\u4e86\u7528\u6237\u4fe1\u606f"),n.a.createElement("li",null,"\u6211\u4eec\u60f3\u91cd\u65b0\u53d1\u8d77\u4e0a\u4e00\u6b21\u7684\u8bf7\u6c42\uff0c\u90a3\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528 ",n.a.createElement("code",null,"refresh")," \u6765\u4ee3\u66ff ",n.a.createElement("code",null,"run(1)"),"\uff0c\u8fd9\u5728\u590d\u6742\u53c2\u6570\u7684\u573a\u666f\u4e2d\u662f\u975e\u5e38\u6709\u7528\u7684"))),n.a.createElement(c["default"],a["basic-refresh"].previewerProps,n.a.createElement(E,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("p",null,"\u5f53\u7136 ",n.a.createElement("code",null,"refresh")," \u548c ",n.a.createElement("code",null,"refreshAsync")," \u7684\u533a\u522b\u548c ",n.a.createElement("code",null,"run")," \u548c ",n.a.createElement("code",null,"runAsync")," \u662f\u4e00\u81f4\u7684\u3002"),n.a.createElement("h2",{id:"\u7acb\u5373\u53d8\u66f4\u6570\u636e"},n.a.createElement(r["AnchorLink"],{to:"#\u7acb\u5373\u53d8\u66f4\u6570\u636e","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u7acb\u5373\u53d8\u66f4\u6570\u636e"),n.a.createElement("p",null,n.a.createElement("code",null,"useRequest")," \u63d0\u4f9b\u4e86 ",n.a.createElement("code",null,"mutate"),", \u652f\u6301\u7acb\u5373\u4fee\u6539 ",n.a.createElement("code",null,"useRequest")," \u8fd4\u56de\u7684 ",n.a.createElement("code",null,"data")," \u53c2\u6570\u3002"),n.a.createElement("p",null,n.a.createElement("code",null,"mutate")," \u7684\u7528\u6cd5\u4e0e ",n.a.createElement("code",null,"React.setState")," \u4e00\u81f4\uff0c\u652f\u6301 ",n.a.createElement("code",null,"mutate(newData)")," \u548c ",n.a.createElement("code",null,"mutate((oldData) => newData)")," \u4e24\u79cd\u5199\u6cd5\u3002"),n.a.createElement("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\uff0c\u6211\u4eec\u6f14\u793a\u4e86\u4e00\u79cd ",n.a.createElement("code",null,"mutate")," \u7684\u5e94\u7528\u573a\u666f\u3002"),n.a.createElement("p",null,"\u6211\u4eec\u4fee\u6539\u4e86\u7528\u6237\u540d\uff0c\u4f46\u662f\u6211\u4eec\u4e0d\u5e0c\u671b\u7b49\u7f16\u8f91\u63a5\u53e3\u8c03\u7528\u6210\u529f\u4e4b\u540e\uff0c\u624d\u7ed9\u7528\u6237\u53cd\u9988\u3002\u800c\u662f\u76f4\u63a5\u4fee\u6539\u9875\u9762\u6570\u636e\uff0c\u540c\u65f6\u5728\u80cc\u540e\u53bb\u8c03\u7528\u4fee\u6539\u63a5\u53e3\uff0c\u7b49\u4fee\u6539\u63a5\u53e3\u8fd4\u56de\u4e4b\u540e\uff0c\u53e6\u5916\u63d0\u4f9b\u53cd\u9988\u3002")),n.a.createElement(c["default"],a["basic-mutate"].previewerProps,n.a.createElement(s,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"\u53d6\u6d88\u54cd\u5e94"},n.a.createElement(r["AnchorLink"],{to:"#\u53d6\u6d88\u54cd\u5e94","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u53d6\u6d88\u54cd\u5e94"),n.a.createElement("p",null,n.a.createElement("code",null,"useRequest")," \u63d0\u4f9b\u4e86 ",n.a.createElement("code",null,"cancel")," \u51fd\u6570\uff0c\u7528\u4e8e",n.a.createElement("strong",null,"\u5ffd\u7565"),"\u5f53\u524d promise \u8fd4\u56de\u7684\u6570\u636e\u548c\u9519\u8bef"),n.a.createElement("p",null,n.a.createElement("strong",null,"\u6ce8\u610f\uff1a\u8c03\u7528 ",n.a.createElement("code",null,"cancel")," \u51fd\u6570\u5e76\u4e0d\u4f1a\u53d6\u6d88 promise \u7684\u6267\u884c")),n.a.createElement("p",null,"\u540c\u65f6 ",n.a.createElement("code",null,"useRequest")," \u4f1a\u5728\u4ee5\u4e0b\u65f6\u673a\u81ea\u52a8\u5ffd\u7565\u54cd\u5e94\uff1a"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7ec4\u4ef6\u5378\u8f7d\u65f6\uff0c\u6b63\u5728\u8fdb\u884c\u7684 promise"),n.a.createElement("li",null,"\u7ade\u6001\u53d6\u6d88\uff0c\u5f53\u4e0a\u4e00\u6b21 promise \u8fd8\u6ca1\u8fd4\u56de\u65f6\uff0c\u53c8\u53d1\u8d77\u4e86\u4e0b\u4e00\u6b21 promise\uff0c\u5219\u4f1a\u5ffd\u7565\u4e0a\u4e00\u6b21 promise \u7684\u54cd\u5e94"))),n.a.createElement(c["default"],a["basic-cancel"].previewerProps,n.a.createElement(i,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"\u53c2\u6570\u7ba1\u7406"},n.a.createElement(r["AnchorLink"],{to:"#\u53c2\u6570\u7ba1\u7406","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570\u7ba1\u7406"),n.a.createElement("p",null,n.a.createElement("code",null,"useRequest")," \u8fd4\u56de\u7684 ",n.a.createElement("code",null,"params")," \u4f1a\u8bb0\u5f55\u5f53\u6b21\u8c03\u7528 ",n.a.createElement("code",null,"service")," \u7684\u53c2\u6570\u6570\u7ec4\u3002\u6bd4\u5982\u4f60\u89e6\u53d1\u4e86 ",n.a.createElement("code",null,"run(1, 2, 3)"),"\uff0c\u5219 ",n.a.createElement("code",null,"params")," \u7b49\u4e8e ",n.a.createElement("code",null,"[1, 2, 3]")," \u3002"),n.a.createElement("p",null,"\u5982\u679c\u6211\u4eec\u8bbe\u7f6e\u4e86 ",n.a.createElement("code",null,"options.manual = false"),"\uff0c\u5219\u9996\u6b21\u8c03\u7528 ",n.a.createElement("code",null,"service")," \u7684\u53c2\u6570\u53ef\u4ee5\u901a\u8fc7 ",n.a.createElement("code",null,"options.defaultParams")," \u6765\u8bbe\u7f6e\u3002")),n.a.createElement(c["default"],a["basic-params"].previewerProps,n.a.createElement(p,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"api"},n.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"API"),n.a.createElement(m["a"],{code:"const {\n  loading: boolean,\n  data?: TData,\n  error?: Error,\n  params: TParams || [],\n  run: (...params: TParams) => void,\n  runAsync: (...params: TParams) => Promise<TData>,\n  refresh: () => void,\n  refreshAsync: () => Promise<TData>,\n  mutate: (data?: TData | ((oldData?: TData) => (TData | undefined))) => void,\n  cancel: () => void,\n} = useRequest<TData, TParams>(\n  service: (...args: TParams) => Promise<TData>,\n  {\n    manual?: boolean,\n    defaultParams?: TParams,\n    onBefore?: (params: TParams) => void,\n    onSuccess?: (data: TData, params: TParams) => void,\n    onError?: (e: Error, params: TParams) => void,\n    onFinally?: (params: TParams, data?: TData, e?: Error) => void,\n  }\n);",lang:"ts"}),n.a.createElement("h3",{id:"result"},n.a.createElement(r["AnchorLink"],{to:"#result","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Result"),n.a.createElement(u["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53c2\u6570"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"data"),n.a.createElement("td",null,"service \u8fd4\u56de\u7684\u6570\u636e"),n.a.createElement("td",null,n.a.createElement("code",null,"TData")," | ",n.a.createElement("code",null,"undefined"))),n.a.createElement("tr",null,n.a.createElement("td",null,"error"),n.a.createElement("td",null,"service \u629b\u51fa\u7684\u5f02\u5e38"),n.a.createElement("td",null,n.a.createElement("code",null,"Error")," | ",n.a.createElement("code",null,"undefined"))),n.a.createElement("tr",null,n.a.createElement("td",null,"loading"),n.a.createElement("td",null,"service \u662f\u5426\u6b63\u5728\u6267\u884c"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean"))),n.a.createElement("tr",null,n.a.createElement("td",null,"params"),n.a.createElement("td",null,"\u5f53\u6b21\u6267\u884c\u7684 service \u7684\u53c2\u6570\u6570\u7ec4\u3002\u6bd4\u5982\u4f60\u89e6\u53d1\u4e86 ",n.a.createElement("code",null,"run(1, 2, 3)"),"\uff0c\u5219 params \u7b49\u4e8e ",n.a.createElement("code",null,"[1, 2, 3]")),n.a.createElement("td",null,n.a.createElement("code",null,"TParams")," | ",n.a.createElement("code",null,"[]"))),n.a.createElement("tr",null,n.a.createElement("td",null,"run"),n.a.createElement("td",null,n.a.createElement("ul",null,n.a.createElement("li",null," \u624b\u52a8\u89e6\u53d1 service \u6267\u884c\uff0c\u53c2\u6570\u4f1a\u4f20\u9012\u7ed9 service"),n.a.createElement("li",null,"\u5f02\u5e38\u81ea\u52a8\u5904\u7406\uff0c\u901a\u8fc7 ",n.a.createElement("code",null,"onError")," \u53cd\u9988"))),n.a.createElement("td",null,n.a.createElement("code",null,"(...params: TParams) => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"runAsync"),n.a.createElement("td",null,"\u4e0e ",n.a.createElement("code",null,"run")," \u7528\u6cd5\u4e00\u81f4\uff0c\u4f46\u8fd4\u56de\u7684\u662f Promise\uff0c\u9700\u8981\u81ea\u884c\u5904\u7406\u5f02\u5e38\u3002"),n.a.createElement("td",null,n.a.createElement("code",null,"(...params: TParams) => Promise<TData>"))),n.a.createElement("tr",null,n.a.createElement("td",null,"refresh"),n.a.createElement("td",null,"\u4f7f\u7528\u4e0a\u4e00\u6b21\u7684 params\uff0c\u91cd\u65b0\u8c03\u7528 ",n.a.createElement("code",null,"run")),n.a.createElement("td",null,n.a.createElement("code",null,"() => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"refreshAsync"),n.a.createElement("td",null,"\u4f7f\u7528\u4e0a\u4e00\u6b21\u7684 params\uff0c\u91cd\u65b0\u8c03\u7528 ",n.a.createElement("code",null,"runAsync")),n.a.createElement("td",null,n.a.createElement("code",null,"() => Promise<TData>"))),n.a.createElement("tr",null,n.a.createElement("td",null,"mutate"),n.a.createElement("td",null,"\u76f4\u63a5\u4fee\u6539 ",n.a.createElement("code",null,"data")),n.a.createElement("td",null,n.a.createElement("code",null,"(data?: TData / ((oldData?: TData) => (TData / undefined))) => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"cancel"),n.a.createElement("td",null,"\u5ffd\u7565\u5f53\u524d Promise \u7684\u54cd\u5e94"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void"))))),n.a.createElement("h3",{id:"options"},n.a.createElement(r["AnchorLink"],{to:"#options","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Options"),n.a.createElement(u["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53c2\u6570"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"manual"),n.a.createElement("td",null,n.a.createElement("ul",null,n.a.createElement("li",null," \u9ed8\u8ba4 ",n.a.createElement("code",null,"false"),"\u3002 \u5373\u5728\u521d\u59cb\u5316\u65f6\u81ea\u52a8\u6267\u884c service\u3002"),n.a.createElement("li",null,"\u5982\u679c\u8bbe\u7f6e\u4e3a ",n.a.createElement("code",null,"true"),"\uff0c\u5219\u9700\u8981\u624b\u52a8\u8c03\u7528 ",n.a.createElement("code",null,"run")," \u6216 ",n.a.createElement("code",null,"runAsync")," \u89e6\u53d1\u6267\u884c\u3002 "))),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"defaultParams"),n.a.createElement("td",null,"\u9996\u6b21\u9ed8\u8ba4\u6267\u884c\u65f6\uff0c\u4f20\u9012\u7ed9 service \u7684\u53c2\u6570"),n.a.createElement("td",null,n.a.createElement("code",null,"TParams")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"onBefore"),n.a.createElement("td",null,"service \u6267\u884c\u524d\u89e6\u53d1"),n.a.createElement("td",null,n.a.createElement("code",null,"(params: TParams) => void")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"onSuccess"),n.a.createElement("td",null,"service resolve \u65f6\u89e6\u53d1"),n.a.createElement("td",null,n.a.createElement("code",null,"(data: TData, params: TParams) => void")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"onError"),n.a.createElement("td",null,"service reject \u65f6\u89e6\u53d1"),n.a.createElement("td",null,n.a.createElement("code",null,"(e: Error, params: TParams) => void")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"onFinally"),n.a.createElement("td",null,"service \u6267\u884c\u5b8c\u6210\u65f6\u89e6\u53d1"),n.a.createElement("td",null,n.a.createElement("code",null,"(params: TParams, data?: TData, e?: Error) => void")),n.a.createElement("td",null,"-")))),n.a.createElement("p",null,"\u4ee5\u4e0a\u6211\u4eec\u4ecb\u7ecd\u4e86 useRequest \u6700\u57fa\u7840\u7684\u529f\u80fd\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u4ecb\u7ecd\u4e00\u4e9b\u66f4\u9ad8\u7ea7\u7684\u80fd\u529b\u3002"))))}));a["default"]=e=>{var a=n.a.useContext(r["context"]),t=a.demos;return n.a.useEffect((()=>{var a;null!==e&&void 0!==e&&null!==(a=e.location)&&void 0!==a&&a.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.a.createElement(o,{demos:t})}}}]);
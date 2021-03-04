(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{135:function(e,t,c){},140:function(e,t,c){},161:function(e,t,c){},175:function(e,t,c){"use strict";c.r(t);var i=c(0),s=c.n(i),o=c(20),r=c.n(o),n=(c(135),c(124)),a=c(21),m=c(27),p=c(99),l=c(64),d=c(65),h=c(45),g=c(69),u=c(68),j=(c(140),c(71)),b=Object(j.b)({chatReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,c=t.type,i=t.payload;switch(c){case"ADD_CHAT":return Object.assign({},e,{chatLog:i});case"CHANGE_STATUS":return Object.assign({},e,{statusMessage:i});case"CHANGE_USERNAME":return Object.assign({},e,{userName:i});default:return e}}}),x=Object(j.c)(b),f=c(117),A=c.n(f),y=c(94),O=c.n(y);c(118);function C(){return Math.round((new Date).getTime()/1e3).toString()}var S=c(182),v=c(127),q=c(75),z=c(4),N=S.a.confirm;console.log("/api");var B=A.a.create({baseURL:"/api",withCredentials:!1,timeout:6e4}),F=x.getState().token;B.interceptors.request.use((function(e){var t;return F&&(e.headers.Authorization=(t="Authorization",O.a.get(t))),"post"===e.method&&(e.data?e.data.time=C():e.data={time:C()},e.data.time||(e.data.time=C())),e}),(function(e){return console.log(e),Promise.reject(e)})),B.interceptors.response.use((function(e){var t=e.data;return 1!==t.code?(v.b.error({content:t.msg||t.code+"error",duration:2}),105!==t.code&&104!==t.code&&103!==t.code&&102!==t.code||N({title:"\u786e\u5b9a\u767b\u51fa",icon:Object(z.jsx)(q.a,{}),content:"\u60a8\u5df2\u88ab\u767b\u51fa\uff0c\u53ef\u4ee5\u53d6\u6d88\u7ee7\u7eed\u7559\u5728\u8be5\u9875\u9762\uff0c\u6216\u8005\u91cd\u65b0\u767b\u5f55",okText:"\u91cd\u65b0\u767b\u5f55",cancelText:"\u53d6\u6d88",onOk:function(){console.log("OK"),x.dispatch("user/resetToken").then((function(){window.location.reload()}))},onCancel:function(){console.log("Cancel")}}),Promise.reject(new Error(t.msg||t.code+"Error"))):t}),(function(e){return console.log("err"+e),v.b.error({content:e.message,duration:2}),Promise.reject(e)}));var T=B;var M=c(179),P=c(180),w=c(183),D=c(50),k=M.a.Option,E=function(e){Object(g.a)(c,e);var t=Object(u.a)(c);function c(e){var i;return Object(l.a)(this,c),(i=t.call(this,e)).state={loginTip:2},i.handleClick=i.handleClick.bind(Object(h.a)(i)),i}return Object(d.a)(c,[{key:"handleClick",value:function(e){console.log(e),this.setState({loginTip:e}),console.log(x.getState())}},{key:"handleLogin",value:function(){var e;(e={username:"admin",password:"123123"},T({url:"/user/login",method:"post",data:e})).then((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.loginTip,c=Object(z.jsxs)(P.a.Group,{compact:!0,className:"input-Group",children:[Object(z.jsxs)(M.a,{placeholder:"+86",size:"large",children:[Object(z.jsx)(k,{value:"+86",size:"large",children:"+86"}),Object(z.jsx)(k,{value:"+886",size:"large",children:"+886"})]}),Object(z.jsx)(P.a,{className:"login-input",size:"large",placeholder:"\u624b\u673a\u53f7\u7801"})]}),i=Object(z.jsxs)("div",{className:"userlogin",children:[Object(z.jsx)(P.a,{className:"userlogin-input",placeholder:"\u624b\u673a\u53f7/ Flyme \u8d26\u53f7",size:"large"}),Object(z.jsx)(P.a,{className:"userlogin-input",placeholder:"\u5bc6\u7801",size:"large"}),Object(z.jsxs)("div",{className:"login-tip",children:[Object(z.jsx)(w.a,{onChange:function(){return e.onChange},children:"\u8bb0\u4f4f\u767b\u5f55\u72b6\u6001"}),Object(z.jsx)(D.a,{type:"text",children:"\u5fd8\u8bb0\u5bc6\u7801?"})]})]}),s=1===t?i:c;return Object(z.jsxs)("div",{className:1===t?"content-h":"content",children:[Object(z.jsxs)("div",{className:"tab-title",children:[Object(z.jsx)("h3",{className:1===t?"user-login":"user-login color-dark",onClick:function(){return e.handleClick(1)},children:"\u8d26\u53f7\u767b\u5f55"}),Object(z.jsx)("h3",{className:"login-line color-dark",children:"|"}),Object(z.jsx)("h3",{className:1===t?"phone-login color-dark":"phone-login",onClick:function(){return e.handleClick(2)},children:"\u9a8c\u8bc1\u7801\u767b\u5f55"})]}),s,Object(z.jsx)(D.a,{className:"login-button",type:"primary",size:"large",onClick:function(){return e.handleLogin()},children:"\u767b\u5f55"}),Object(z.jsx)(D.a,{className:"register-button",type:"text",children:"\u6ce8\u518c"})]})}}]),c}(i.Component),X=(c(161),[{path:{path:"/commodity",query:{product:"16thPlus"}},imgSrc:"https://fms.res.meizu.com/dms/2019/06/12/3ca66686-315b-4443-b1e9-e10275953bbb.jpg"},{path:{path:"/commodity",query:{product:"16Xs"}},imgSrc:"https://fms.res.meizu.com/dms/2019/06/06/159695c0-4628-463e-ba99-8f79a9a6fc72.jpg"},{path:{path:"/commodity",query:{product:"16s"}},imgSrc:"https://fms.res.meizu.com/dms/2019/06/06/7f25b296-28a7-48c9-ac34-18fe215b5b39.jpg"},{path:{path:"/commodity",query:{product:"Note9"}},imgSrc:"https://fms.res.meizu.com/dms/2019/06/06/c1242521-4a1b-4b86-85ce-ba30c92dc6e7.jpg"},{path:{path:"/commodity",query:{product:"16th"}},imgSrc:"https://fms.res.meizu.com/dms/2019/06/03/ad32912e-c956-4202-ac7f-3a3008ba42d8.jpg"},{path:{path:"/commodity",query:{product:"\u9f20\u6807\u57ab"}},imgSrc:"https://fms.res.meizu.com/dms/2019/05/31/08703cfb-5f20-4544-96f5-3a8d69121037.jpg"},{path:{path:"/commodity",query:{product:"EP52"}},imgSrc:"https://fms.res.meizu.com/dms/2019/06/10/cc5d2e32-14b7-4c70-8639-4bbd84eb76fd.jpg"}]),G=[{id:0,text:"\u9b45\u65cf\u5b98\u65b9\u76f4\u4f9b",imgSrc:"https://fms.res.meizu.com/dms/2018/03/30/99f49dfe-25c2-485a-b7b3-8b63d6487b46.png"},{id:1,text:"\u6ee180\u514d\u8fd0\u8d39",imgSrc:"https://fms.res.meizu.com/dms/2018/03/30/8f1252b1-3fb2-48e2-b992-1f38a9745314.png"},{id:3,text:"7 \u5929\u65e0\u7406\u7531\u9000\u8d27",imgSrc:"https://fms.res.meizu.com/dms/2018/03/30/3924a1e1-5b4a-41de-9e79-ee904ec69d90.png"}],V=[{path:"/personal",name:"\u4e2a\u4eba\u4e2d\u5fc3",adjust:"adjust",imgSrc:"https://fms.res.meizu.com/dms/2018/08/14/15569c6b-5e3f-41da-8dbf-edfd557191fb.png"},{path:"/flyme",name:"Flyme",imgSrc:"https://fms.res.meizu.com/dms/2018/04/11/0ba8483f-464e-4500-879a-66c834b62128.png"},{path:"/cloud",name:"\u4e91\u670d\u52a1",imgSrc:"https://fms.res.meizu.com/dms/2018/04/11/9ef59a5f-aa24-46a7-9443-275347f42773.png"},{path:"/load",name:"App\u4e0b\u8f7d",imgSrc:"https://fms.res.meizu.com/dms/2018/11/19/6d9b6d21-a84f-439b-a995-b86bbe2aba4d.png"}],K=[{path:"",imgSrc:"https://fms.res.meizu.com/dms/2018/12/26/237d883a-d669-4231-b645-d0363ac3f1df.jpg"},{path:"",imgSrc:"https://fms.res.meizu.com/dms/2018/12/26/44d9807b-1240-4637-aaef-43e1f6742f81.jpg"},{path:"",imgSrc:"https://fms.res.meizu.com/dms/2018/12/26/518fc8a2-c14d-488c-9ada-b757bbd71c08.jpg"},{path:"",imgSrc:"https://fms.res.meizu.com/dms/2018/12/26/61250d46-6eb9-4846-99ce-6d65778a84a2.jpg"}],L={titleName:"\u667a\u80fd\u624b\u673a",head:[{imgSrc:"https://fms.res.meizu.com/dms/2019/07/10/07e95fb9-5d98-4f57-96c1-3edd089a4bcf.jpg",path:"/commodity",query:"Note9"}],content:[{path:"/commodity",query:"16Xs",name:"\u9b45\u65cf 16Xs",sign:"\u65b0\u54c1",dsc:"4800W AI\u4e09\u6444 \u5c4f\u5e55\u4e0b\u6307\u7eb9",price:1499,boxTitleBold:!0,imgSrc:"https://openfile.meizu.com/group1/M00/07/2D/Cgbj0FzvRKyAcTmAAAiLh3fsE44680.png"},{path:"/commodity",query:"16s",name:"\u9b45\u65cf 16s",sign:"\u76f4\u964d",dsc:"\u9a81\u9f99855 4800W\u5149\u5b66\u9632\u6296",price:2699,beforePrice:3198,boxTitleBold:!0,imgSrc:"https://openfile.meizu.com/group1/M00/07/23/Cgbj0FzaXQqAH-L3AAeSSra0qAg862.png"},{path:"/commodity",query:"16th",name:"\u9b45\u65cf 16th",sign:"\u9886\u5238",dsc:"\u9a81\u9f99845 \u5c4f\u5e55\u4e0b\u6307\u7eb9",price:2298,boxTitleBold:!0,imgSrc:"https://openfile.meizu.com/group1/M00/05/E2/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png"},{path:"/commodity",query:"16thPlus",name:"\u9b45\u65cf 16th Plus",sign:"\u9886\u5238",dsc:"\u9a81\u9f99845  \u5c4f\u5e55\u4e0b\u6307\u7eb9 ",price:2698,boxTitleBold:!0,imgSrc:"https://openfile.meizu.com/group1/M00/05/F0/Cgbj0VtqgjeAV_ChAAfVjwwpNdw016.png"},{path:"/commodity",query:"X8",name:"\u9b45\u65cf X8",sign:"\u9886\u5238",dsc:"\u9a81\u9f99710  \u65d7\u8230\u53cc\u6444",price:1298,boxTitleBold:!0,imgSrc:"https://openfile.meizu.com/group1/M00/06/A9/Cgbj0FusSK2AQZgiAAlFKHoO-co889.png"},{path:"/commodity",query:"16x",name:"\u9b45\u65cf 16 x",sign:"\u9886\u5238",dsc:"\u9a81\u9f99710 \u5c4f\u5e55\u4e0b\u6307\u7eb9 ",price:1598,boxTitleBold:!0,imgSrc:"https://openfile.meizu.com/group1/M00/06/BC/Cgbj0FvINLWACd0AAAh2dGv5_R0516.png"},{path:"/commodity",query:"15",name:"\u9b45\u65cf 15",sign:"\u9886\u5238",dsc:"\u9a81\u9f99660  2000\u4e07\u6697\u5149\u53cc\u6444",price:1498,boxTitleBold:!0,imgSrc:"https://openfile.meizu.com/group1/M00/04/0C/Cgbj0FrcbnGANGRlAAzqchlSKjQ833.png"},{path:"/commodity",query:"15Plus",name:"\u9b45\u65cf 15 Plus",sign:"\u9886\u5238",dsc:"\u4e09\u661f8895\u5904\u7406\u5668 2000\u4e07\u6697\u5149\u53cc\u6444",price:1798,boxTitleBold:!0,imgSrc:"https://openfile.meizu.com/group1/M00/04/0D/Cgbj0FrcbqKANbtFAAu0nXkFYY4657.png"},{path:"/commodity",query:"E3",name:"\u9b45\u65cf E3",sign:"\u9886\u5238",dsc:"\u9a81\u9f99636\u5904\u7406\u5668 \u5168\u7cfb6G\u5927\u8fd0\u5b58",price:1799,boxTitleBold:!0,imgSrc:"https://openfile.meizu.com/group1/M00/03/BB/Cgbj0Vq9-m2AJr_PAAp1B7CA5GY057.png"},{path:"/commodity",query:"M15",name:"\u9b45\u65cf M15",sign:"\u9886\u5238",dsc:"\u9a81\u9f99626 \u524d\u7f6e2000\u4e07AI\u667a\u80fd\u7f8e\u989c",price:1398,boxTitleBold:!0,imgSrc:"https://openfile.meizu.com/group1/M00/05/5D/Cgbj0Fs8gimACX8QAAM3XnW4oOY310.png"}]},I={head:[{imgSrc:"https://fms.res.meizu.com/dms/2019/07/10/07e95fb9-5d98-4f57-96c1-3edd089a4bcf.jpg",path:"/commodity",query:"16s"}],content:[{path:"/commodity",query:"Note9",name:"\u9b45\u65cf Note9",sign:"\u76f4\u964d",dsc:"\u3010\u9650\u65f66\u671f\u514d\u606f\u3011\u3010\u4f4e\u81f31199\u5143\u8d77\u3011 \u9a81\u9f99675",price:1199,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png@240x240.jpg"},{path:"/commodity",query:"Note8",name:"\u9b45\u65cf Note8",sign:"\u65b0\u54c1",dsc:"\u3010\u9650\u65f6\u9886\u5238\u6700\u9ad8\u7acb\u51cf450\u5143\u3011",price:999,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/06/C4/Cgbj0FvQPnmABVZHAAM7MXAlUiQ783.png@240x240.jpg"},{path:"/commodity",query:"16Xs",name:"\u9b45\u65cf 16Xs",sign:"\u65b0\u54c1",dsc:"4800W AI\u4e09\u6444 \u5c4f\u5e55\u4e0b\u6307\u7eb9",price:1499,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/07/2D/Cgbj0FzvRKyAcTmAAAiLh3fsE44680.png"},{path:"/commodity",query:"16s",name:"\u9b45\u65cf 16s",sign:"\u76f4\u964d",dsc:"\u9a81\u9f99855 4800W\u5149\u5b66\u9632\u6296",price:2699,beforePrice:3198,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/07/23/Cgbj0FzaXQqAH-L3AAeSSra0qAg862.png"},{path:"/commodity",query:"16th",name:"\u9b45\u65cf 16th",sign:"\u9886\u5238",dsc:"\u9a81\u9f99845 \u5c4f\u5e55\u4e0b\u6307\u7eb9",price:2298,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/05/E2/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png"},{path:"/commodity",query:"16thPlus",name:"\u9b45\u65cf 16th Plus",sign:"\u9886\u5238",dsc:"\u9a81\u9f99845  \u5c4f\u5e55\u4e0b\u6307\u7eb9 ",price:2698,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/05/F0/Cgbj0VtqgjeAV_ChAAfVjwwpNdw016.png"},{path:"/commodity",query:"X8",name:"\u9b45\u65cf X8",sign:"\u9886\u5238",dsc:"\u9a81\u9f99710  \u65d7\u8230\u53cc\u6444",price:1298,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/06/A9/Cgbj0FusSK2AQZgiAAlFKHoO-co889.png"},{path:"/commodity",query:"16x",name:"\u9b45\u65cf 16 x",sign:"\u9886\u5238",dsc:"\u9a81\u9f99710 \u5c4f\u5e55\u4e0b\u6307\u7eb9 ",price:1598,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/06/BC/Cgbj0FvINLWACd0AAAh2dGv5_R0516.png"},{path:"/commodity",query:"15",name:"\u9b45\u65cf 15",sign:"\u9886\u5238",dsc:"\u9a81\u9f99660  2000\u4e07\u6697\u5149\u53cc\u6444",price:1498,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/04/0C/Cgbj0FrcbnGANGRlAAzqchlSKjQ833.png"},{path:"/commodity",query:"15Plus",name:"\u9b45\u65cf 15 Plus",sign:"\u9886\u5238",dsc:"\u4e09\u661f8895\u5904\u7406\u5668 2000\u4e07\u6697\u5149\u53cc\u6444",price:1798,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/04/0D/Cgbj0FrcbqKANbtFAAu0nXkFYY4657.png"},{path:"/commodity",query:"E3",name:"\u9b45\u65cf E3",sign:"\u9886\u5238",dsc:"\u9a81\u9f99636\u5904\u7406\u5668 \u5168\u7cfb6G\u5927\u8fd0\u5b58",price:1799,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/03/BB/Cgbj0Vq9-m2AJr_PAAp1B7CA5GY057.png"},{path:"/commodity",query:"M15",name:"\u9b45\u65cf M15",sign:"\u9886\u5238",dsc:"\u9a81\u9f99626 \u524d\u7f6e2000\u4e07AI\u667a\u80fd\u7f8e\u989c",price:1398,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/05/5D/Cgbj0Fs8gimACX8QAAM3XnW4oOY310.png"}]},Q={titleName:"\u9b45\u65cf\u58f0\u5b66",head:[{path:"/commodity",query:"EP52",imgSrc:"https://fms.res.meizu.com/dms/2019/06/10/446790dd-7670-47fb-b544-fb173c3232ec.jpg",title:"\u9b45\u65cf EP2C \u8033\u673a",dsc:"\u9495\u94c1\u787c\u5355\u5143 Type-C\u63a5\u53e3",price:129,color:"#7063C9"},{path:"/commodity",query:"EP52",imgSrc:"https://fms.res.meizu.com/dms/2019/04/23/0ad593e8-184d-43a4-8ad3-d911ae86a048.jpg",title:"\u9b45\u65cf POP2 \u771f\u65e0\u7ebf\u84dd\u7259\u8033\u673a",dsc:"\u84dd\u72595.0 \u8d85\u957f\u7eed\u822a",price:399,color:"#F55C5C"}],content:[{path:"/commodity",query:"EP63NC",name:"\u9b45\u65cf EP63NC \u65e0\u7ebf\u964d\u566a\u8033\u673a",sign:"\u70ed\u5356",dsc:"\u667a\u80fd\u964d\u566a \u58f0\u4e34\u5176\u5883",price:499,boxTitleBold:!0,imgSrc:"https://openfile.meizu.com/group1/M00/07/10/Cgbj0Fy9JYOACw2DAAMWf3vEhbA886.png"},{path:"/commodity",query:"HIFI",name:"\u9b45\u65cf HIFI \u89e3\u7801\u8033\u653e",sign:"\u70ed\u5356",dsc:"\u5c0f\u8eab\u6750 \u5927\u80fd\u91cf",price:169,beforePrice:3198,boxTitleBold:!0,imgSrc:"https://openfile.meizu.com/group1/M00/07/2F/Cgbj0Vy_C3GAN_TKAAExaPfTwFc180.png"},{path:"/commodity",query:"EP52",name:"\u9b45\u84dd EP52 \u84dd\u7259\u8033\u673a",sign:"\u7279\u60e0",dsc:"\u8f7b\u76c8\u60a6\u8033 \u52a8\u65e0\u62d8\u675f",price:199,boxTitleBold:!0,imgSrc:"https://openfile.meizu.com/group1/M00/01/D2/Cgbj0Fmb55mABV4HAAKspJD9ivQ842.png"},{path:"/commodity",query:"Flow",name:"\u9b45\u65cf Flow \u4e09\u5355\u5143\u8033\u673a",sign:"\u7279\u60e0",dsc:"\u7528\u5f97\u60ec\u610f \u542c\u5f97\u5c3d\u5174",price:379,beforePrice:599,boxTitleBold:!0,imgSrc:"https://openfile.meizu.com/group1/M00/01/BC/Cgbj0Vl22XGAC6YIAAGautlHsjo741.png"}]},H={head:[{imgSrc:"https://openfile.meizu.com/group1/M00/07/30/Cgbj0Vy_KCyAWREhAAGlVmIserw575.jpg",path:"/commodity",query:"EP63NC"}],content:[{path:"/commodity",query:"EP63NC",name:"\u9b45\u65cf EP63NC \u65e0\u7ebf\u964d\u566a\u8033\u673a",sign:"\u70ed\u5356",dsc:"\u667a\u80fd\u964d\u566a \u58f0\u4e34\u5176\u5883",price:499,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/07/10/Cgbj0Fy9JYOACw2DAAMWf3vEhbA886.png"},{path:"/commodity",query:"HIFI",name:"\u9b45\u65cf HIFI \u89e3\u7801\u8033\u653e",sign:"\u70ed\u5356",dsc:"\u5c0f\u8eab\u6750 \u5927\u80fd\u91cf",price:169,beforePrice:3198,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/07/2F/Cgbj0Vy_C3GAN_TKAAExaPfTwFc180.png"},{path:"/commodity",query:"EP52",name:"\u9b45\u84dd EP52 \u84dd\u7259\u8033\u673a",sign:"\u7279\u60e0",dsc:"\u8f7b\u76c8\u60a6\u8033 \u52a8\u65e0\u62d8\u675f",price:199,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/01/D2/Cgbj0Fmb55mABV4HAAKspJD9ivQ842.png"},{path:"/commodity",query:"Flow",name:"\u9b45\u65cf Flow \u4e09\u5355\u5143\u8033\u673a",sign:"\u7279\u60e0",dsc:"\u7528\u5f97\u60ec\u610f \u542c\u5f97\u5c3d\u5174",price:379,beforePrice:599,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/01/BC/Cgbj0Vl22XGAC6YIAAGautlHsjo741.png"},{path:"/commodity",query:"16Xs",name:"\u9b45\u65cf 16Xs",sign:"\u65b0\u54c1",dsc:"4800W AI\u4e09\u6444 \u5c4f\u5e55\u4e0b\u6307\u7eb9",price:1499,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/07/2D/Cgbj0FzvRKyAcTmAAAiLh3fsE44680.png"},{path:"/commodity",query:"16s",name:"\u9b45\u65cf 16s",sign:"\u76f4\u964d",dsc:"\u9a81\u9f99855 4800W\u5149\u5b66\u9632\u6296",price:2699,beforePrice:3198,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/07/23/Cgbj0FzaXQqAH-L3AAeSSra0qAg862.png"},{path:"/commodity",query:"16th",name:"\u9b45\u65cf 16th",sign:"\u9886\u5238",dsc:"\u9a81\u9f99845 \u5c4f\u5e55\u4e0b\u6307\u7eb9",price:2298,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/05/E2/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png"},{path:"/commodity",query:"16thPlus",name:"\u9b45\u65cf 16th Plus",sign:"\u9886\u5238",dsc:"\u9a81\u9f99845  \u5c4f\u5e55\u4e0b\u6307\u7eb9 ",price:2698,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/05/F0/Cgbj0VtqgjeAV_ChAAfVjwwpNdw016.png"},{path:"/commodity",query:"X8",name:"\u9b45\u65cf X8",sign:"\u9886\u5238",dsc:"\u9a81\u9f99710  \u65d7\u8230\u53cc\u6444",price:1298,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/06/A9/Cgbj0FusSK2AQZgiAAlFKHoO-co889.png"},{path:"/commodity",query:"16x",name:"\u9b45\u65cf 16 x",sign:"\u9886\u5238",dsc:"\u9a81\u9f99710 \u5c4f\u5e55\u4e0b\u6307\u7eb9 ",price:1598,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/06/BC/Cgbj0FvINLWACd0AAAh2dGv5_R0516.png"},{path:"/commodity",query:"15",name:"\u9b45\u65cf 15",sign:"\u9886\u5238",dsc:"\u9a81\u9f99660  2000\u4e07\u6697\u5149\u53cc\u6444",price:1498,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/04/0C/Cgbj0FrcbnGANGRlAAzqchlSKjQ833.png"},{path:"/commodity",query:"15Plus",name:"\u9b45\u65cf 15 Plus",sign:"\u9886\u5238",dsc:"\u4e09\u661f8895\u5904\u7406\u5668 2000\u4e07\u6697\u5149\u53cc\u6444",price:1798,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/04/0D/Cgbj0FrcbqKANbtFAAu0nXkFYY4657.png"},{path:"/commodity",query:"E3",name:"\u9b45\u65cf E3",sign:"\u9886\u5238",dsc:"\u9a81\u9f99636\u5904\u7406\u5668 \u5168\u7cfb6G\u5927\u8fd0\u5b58",price:1799,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/03/BB/Cgbj0Vq9-m2AJr_PAAp1B7CA5GY057.png"},{path:"/commodity",query:"M15",name:"\u9b45\u65cf M15",sign:"\u9886\u5238",dsc:"\u9a81\u9f99626 \u524d\u7f6e2000\u4e07AI\u667a\u80fd\u7f8e\u989c",price:1398,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/05/5D/Cgbj0Fs8gimACX8QAAM3XnW4oOY310.png"}]},W={head:[{imgSrc:"https://openfile.meizu.com/group1/M00/06/FC/Cgbj0VwtzU2AEp14AAF565TOmGQ380.jpg",path:"/commodity",query:"\u79fb\u52a8\u7535\u6e90"}],content:[{path:"/commodity",query:"\u79fb\u52a8\u7535\u6e90",name:"\u5feb\u5145\u7535\u6e90\u9002\u914d\u5668\uff08UP0830S\uff09",sign:"\u7279\u60e0",dsc:"\u5feb\u901f\u5145\u7535 \u5b89\u5168\u65e0\u5fe7",price:69,beforePrice:89,boxTitleBold:!1,imgSrc:"https://storeimg.meizu.com/product/1467170145-52479.png@240x240.jpg"},{path:"/commodity",query:"Type-C",name:"\u9b45\u65cf Type-C \u91d1\u5c5e\u6570\u636e\u7ebf",sign:"\u70ed\u5356",dsc:"\u652f\u63012A\u5feb\u901f\u5145\u7535 \u8010\u7528\u53c8\u653e\u5fc3",price:39,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/00/1E/CnQOjVef_HaAaD-bAAHXId4TWtA165.png"},{path:"/commodity",query:"MicroUSB",name:"\u9b45\u65cf Micro USB \u6570\u636e\u7ebf",sign:"\u7279\u60e0",dsc:"\u5e7f\u6cdb\u517c\u5bb9 \u7ecf\u4e45\u8010\u7528",price:29,boxTitleBold:!1,imgSrc:"https://storeimg.meizu.com/product/1458617159-29477.png"},{path:"/commodity",query:"\u4fdd\u62a4\u819c",name:"\u9b45\u65cf X8 \u9ad8\u900f\u4fdd\u62a4\u819c",sign:"\u7279\u60e0",dsc:"\u9ad8\u900f\u5149\u7387 \u52a9\u53cc\u773c\u6355\u6349\u6bcf\u4e00\u9897\u50cf\u7d20\u7684\u8272\u5f69",price:19,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/06/DF/Cgbj0FwRr8uAZTsVAAhGUe23fjs268.png"},{path:"/commodity",query:"Note8",name:"\u9b45\u65cf Note8",sign:"\u65b0\u54c1",dsc:"\u3010\u9650\u65f6\u9886\u5238\u6700\u9ad8\u7acb\u51cf450\u5143\u3011",price:999,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/06/C4/Cgbj0FvQPnmABVZHAAM7MXAlUiQ783.png@240x240.jpg"},{path:"/commodity",query:"16Xs",name:"\u9b45\u65cf 16Xs",sign:"\u65b0\u54c1",dsc:"4800W AI\u4e09\u6444 \u5c4f\u5e55\u4e0b\u6307\u7eb9",price:1499,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/07/2D/Cgbj0FzvRKyAcTmAAAiLh3fsE44680.png"},{path:"/commodity",query:"16s",name:"\u9b45\u65cf 16s",sign:"\u76f4\u964d",dsc:"\u9a81\u9f99855 4800W\u5149\u5b66\u9632\u6296",price:2699,beforePrice:3198,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/07/23/Cgbj0FzaXQqAH-L3AAeSSra0qAg862.png"},{path:"/commodity",query:"16th",name:"\u9b45\u65cf 16th",sign:"\u9886\u5238",dsc:"\u9a81\u9f99845 \u5c4f\u5e55\u4e0b\u6307\u7eb9",price:2298,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/05/E2/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png"},{path:"/commodity",query:"16thPlus",name:"\u9b45\u65cf 16th Plus",sign:"\u9886\u5238",dsc:"\u9a81\u9f99845  \u5c4f\u5e55\u4e0b\u6307\u7eb9 ",price:2698,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/05/F0/Cgbj0VtqgjeAV_ChAAfVjwwpNdw016.png"},{path:"/commodity",query:"X8",name:"\u9b45\u65cf X8",sign:"\u9886\u5238",dsc:"\u9a81\u9f99710  \u65d7\u8230\u53cc\u6444",price:1298,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/06/A9/Cgbj0FusSK2AQZgiAAlFKHoO-co889.png"},{path:"/commodity",query:"16x",name:"\u9b45\u65cf 16 x",sign:"\u9886\u5238",dsc:"\u9a81\u9f99710 \u5c4f\u5e55\u4e0b\u6307\u7eb9 ",price:1598,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/06/BC/Cgbj0FvINLWACd0AAAh2dGv5_R0516.png"},{path:"/commodity",query:"15",name:"\u9b45\u65cf 15",sign:"\u9886\u5238",dsc:"\u9a81\u9f99660  2000\u4e07\u6697\u5149\u53cc\u6444",price:1498,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/04/0C/Cgbj0FrcbnGANGRlAAzqchlSKjQ833.png"},{path:"/commodity",query:"15Plus",name:"\u9b45\u65cf 15 Plus",sign:"\u9886\u5238",dsc:"\u4e09\u661f8895\u5904\u7406\u5668 2000\u4e07\u6697\u5149\u53cc\u6444",price:1798,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/04/0D/Cgbj0FrcbqKANbtFAAu0nXkFYY4657.png"},{path:"/commodity",query:"E3",name:"\u9b45\u65cf E3",sign:"\u9886\u5238",dsc:"\u9a81\u9f99636\u5904\u7406\u5668 \u5168\u7cfb6G\u5927\u8fd0\u5b58",price:1799,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/03/BB/Cgbj0Vq9-m2AJr_PAAp1B7CA5GY057.png"}]},_={titleName:"\u793e\u533a\u70ed\u8d34",content:[{path:"",query:"",username:"\u5c0f\u5b87\u5148\u68ee08",name:"\u9b45\u65cf 17",dsc:"\u4e0d\u53ea\u662f\u989c\u503c\u51fa\u4f17\uff0c\u53ef\u8c13\u662f\u79c0\u5916\u6167\u4e2d\u3002",userimg:"https://img-res.mzres.com/img/download/uc/13/28/97/03/00/13289703/w100h100?t=1614252734",imgSrc:"https://fms.res.meizu.com/dms/2020/05/28/b52bce71-6af5-4684-962a-ccd3838a3b6b.png"},{path:"",query:"",username:"grayfox77",name:"\u9b45\u65cf 17 Pro \u6444\u5f71\u4f5c\u54c1",dsc:"\u73b0\u5728\u5927\u5bb6\u5bf9\u624b\u673a\u62cd\u7167\u8d28\u91cf\u7684\u9700\u6c42\u8d8a\u6765\u8d8a\u9ad8\uff0c\u6700\u53d7\u5173\u6ce8\u7684\u5c31\u662f\u7126\u6bb5\u4e0e\u753b\u8d28\u3002",userimg:"https://img-res.mzres.com/img/download/uc/58/35/18/00/00/583518/w100h100?t=1614252734",imgSrc:"https://fms.res.meizu.com/dms/2020/05/28/2ce3306c-4beb-4c4e-94c5-09c3061b66e2.png"},{path:"",query:"",username:"\u660e\u65e5\u4e4b\u65b0",name:"\u9b45\u65cf 17 Pro \u6444\u5f71\u4f5c\u54c1",dsc:"\u9b45\u65cf 17 Pro 6400W \u5168\u573a\u666f AR \u4e13\u4e1a\u5f71\u50cf\u7cfb\u7edf\u4f53\u9a8c\u3002",userimg:"https://img-res.mzres.com/img/download/uc/14/52/97/69/00/14529769/w100h100?t=1614252734",imgSrc:"https://fms.res.meizu.com/dms/2020/05/28/ffacbc87-f681-4c82-94f2-ced6093871a2.png"},{path:"",query:"",username:"\u660e\u65e5\u4e4b\u65b0",name:"\u9b45\u65cf 17 Pro \u6444\u5f71\u4f5c\u54c1",dsc:"\u591a\u4e00\u70b9\u8010\u5fc3\uff0c\u591a\u4e00\u70b9\u53d1\u73b0\uff0c\u591a\u4e00\u70b9\u60f3\u8c61\uff0c\u53bb\u7559\u610f\u8eab\u8fb9\u98ce\u666f\u3002",userimg:"https://img-res.mzres.com/img/download/uc/14/52/97/69/00/14529769/w100h100?t=1614252734",imgSrc:"https://fms.res.meizu.com/dms/2020/05/28/17310a16-5528-4235-99c7-9086cafa4006.png"}]},R={head:[{imgSrc:"https://openfile.meizu.com/group1/M00/07/1C/Cgbj0FzBs5iAZroQAAD6CRWnHr0678.jpg",path:"/commodity",query:"\u53cc\u80a9\u5305"}],content:[{path:"/commodity",query:"\u53cc\u80a9\u5305",name:"\u9b45\u65cf\u6781\u7b80\u90fd\u5e02\u53cc\u80a9\u5305",sign:"\u65b0\u54c1",dsc:"4650D\u9ad8\u8010\u78e8\u725b\u6d25\u5e03 \u5927\u5bb9\u91cf\u591a\u529f\u80fd\u6536\u7eb3",price:179,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9J36ARuB2AAVQph9X9vs749.png@240x240.jpg"},{path:"/commodity",query:"\u9f20\u6807\u57ab",name:"\u9b45\u65cf\u661f\u7403\u63a2\u7d22 \u9f20\u6807\u57ab",sign:"\u76f4\u964d",dsc:"\u661f\u7403\u65e0\u9650 \u8ffd\u6c42\u4e0d\u6b62",price:69,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/07/41/Cgbj0VzvODSALJ3OAA3y2fvxTuA532.png@240x240.jpg"},{path:"/commodity",query:"16Xs",name:"\u9b45\u65cf 16Xs",sign:"\u65b0\u54c1",dsc:"4800W AI\u4e09\u6444 \u5c4f\u5e55\u4e0b\u6307\u7eb9",price:1499,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/07/2D/Cgbj0FzvRKyAcTmAAAiLh3fsE44680.png"},{path:"/commodity",query:"16s",name:"\u9b45\u65cf 16s",sign:"\u76f4\u964d",dsc:"\u9a81\u9f99855 4800W\u5149\u5b66\u9632\u6296",price:2699,beforePrice:3198,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/07/23/Cgbj0FzaXQqAH-L3AAeSSra0qAg862.png"},{path:"/commodity",query:"16th",name:"\u9b45\u65cf 16th",sign:"\u9886\u5238",dsc:"\u9a81\u9f99845 \u5c4f\u5e55\u4e0b\u6307\u7eb9",price:2298,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/05/E2/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png"},{path:"/commodity",query:"16thPlus",name:"\u9b45\u65cf 16th Plus",sign:"\u9886\u5238",dsc:"\u9a81\u9f99845  \u5c4f\u5e55\u4e0b\u6307\u7eb9 ",price:2698,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/05/F0/Cgbj0VtqgjeAV_ChAAfVjwwpNdw016.png"},{path:"/commodity",query:"X8",name:"\u9b45\u65cf X8",sign:"\u9886\u5238",dsc:"\u9a81\u9f99710  \u65d7\u8230\u53cc\u6444",price:1298,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/06/A9/Cgbj0FusSK2AQZgiAAlFKHoO-co889.png"},{path:"/commodity",query:"16x",name:"\u9b45\u65cf 16 x",sign:"\u9886\u5238",dsc:"\u9a81\u9f99710 \u5c4f\u5e55\u4e0b\u6307\u7eb9 ",price:1598,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/06/BC/Cgbj0FvINLWACd0AAAh2dGv5_R0516.png"},{path:"/commodity",query:"15",name:"\u9b45\u65cf 15",sign:"\u9886\u5238",dsc:"\u9a81\u9f99660  2000\u4e07\u6697\u5149\u53cc\u6444",price:1498,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/04/0C/Cgbj0FrcbnGANGRlAAzqchlSKjQ833.png"},{path:"/commodity",query:"15Plus",name:"\u9b45\u65cf 15 Plus",sign:"\u9886\u5238",dsc:"\u4e09\u661f8895\u5904\u7406\u5668 2000\u4e07\u6697\u5149\u53cc\u6444",price:1798,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/04/0D/Cgbj0FrcbqKANbtFAAu0nXkFYY4657.png"},{path:"/commodity",query:"E3",name:"\u9b45\u65cf E3",sign:"\u9886\u5238",dsc:"\u9a81\u9f99636\u5904\u7406\u5668 \u5168\u7cfb6G\u5927\u8fd0\u5b58",price:1799,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/03/BB/Cgbj0Vq9-m2AJr_PAAp1B7CA5GY057.png"},{path:"/commodity",query:"M15",name:"\u9b45\u65cf M15",sign:"\u9886\u5238",dsc:"\u9a81\u9f99626 \u524d\u7f6e2000\u4e07AI\u667a\u80fd\u7f8e\u989c",price:1398,boxTitleBold:!1,imgSrc:"https://openfile.meizu.com/group1/M00/05/5D/Cgbj0Fs8gimACX8QAAM3XnW4oOY310.png"}]},Y=c(178),J=c(181),U=Y.a.TabPane,Z=window.location.href.split("index")[0];function $(e){var t=e.viewpagerLists.map((function(e,t){return Object(z.jsx)("a",{href:Z+e.path.path+"/index.html?query="+e.path.query.product,children:Object(z.jsx)("img",{src:e.imgSrc,alt:"",width:"100%"})},t)}));return Object(z.jsx)(J.a,{children:t})}function ee(e){var t=e.content.map((function(e,t){return Object(z.jsx)("div",{className:"phone-content",children:Object(z.jsxs)("a",{href:Z+e.path+"/index.html?query="+e.query,children:[Object(z.jsx)("img",{src:e.imgSrc,alt:""}),Object(z.jsxs)("div",{className:"phone-info",children:[Object(z.jsx)("p",{className:"phone-products-name",children:e.name}),Object(z.jsx)("p",{className:"phone-slogan",children:Object(z.jsx)("span",{children:e.dsc})}),Object(z.jsxs)("p",{className:"phone-price",children:[Object(z.jsx)("i",{children:"\uffe5"}),e.price]})]})]})},t)}));return Object(z.jsx)("div",{className:"section-box-row",children:Object(z.jsx)("div",{className:"phone-list",children:t})})}function te(e){var t=e.list;return Object(z.jsxs)("div",{className:"list-ad",children:[Object(z.jsxs)("a",{href:Z+t[0].path+"/index.html?query="+t[0].query,className:"ad",style:{background:t[0].color},children:[Object(z.jsx)("img",{src:t[0].imgSrc,alt:""}),Object(z.jsxs)("div",{className:"info",children:[Object(z.jsx)("h4",{children:t[0].title}),Object(z.jsx)("p",{className:"label",children:t[0].dsc}),Object(z.jsxs)("p",{className:"price",children:[Object(z.jsx)("i",{children:"\uffe5"}),t[0].price]})]})]}),Object(z.jsxs)("a",{href:Z+t[1].path+"/index.html?query="+t[1].query,className:"ad",style:{background:t[1].color},children:[Object(z.jsxs)("div",{className:"info",children:[Object(z.jsx)("h4",{children:t[1].title}),Object(z.jsx)("p",{className:"label",children:t[1].dsc}),Object(z.jsxs)("p",{className:"price",children:[Object(z.jsx)("i",{children:"\uffe5"}),t[1].price]})]}),Object(z.jsx)("img",{src:t[1].imgSrc,alt:""})]})]})}function ce(e){var t=e.tipLists.map((function(e,t){return Object(z.jsxs)("li",{children:[Object(z.jsx)("img",{src:e.imgSrc,alt:""}),e.text]},t)}));return Object(z.jsx)("div",{className:"index-hot-tip",children:Object(z.jsx)("ul",{children:t})})}function ie(e){var t=e.hotSites.map((function(e,t){return Object(z.jsx)("li",{children:Object(z.jsxs)("a",{href:e.path,children:[Object(z.jsx)("img",{src:e.imgSrc,alt:e.name}),Object(z.jsx)("span",{children:e.name})]})},t)}));return Object(z.jsx)("div",{className:"index-hot-site",children:Object(z.jsx)("ul",{children:t})})}function se(e){var t=e.commentsData.content.map((function(e,t){return Object(z.jsxs)("a",{href:"/",className:"comment-content",children:[Object(z.jsx)("img",{src:e.imgSrc,alt:"",width:"100%"}),Object(z.jsxs)("div",{className:"comment-info",children:[Object(z.jsxs)("p",{children:[Object(z.jsx)("img",{src:e.userimg,alt:""}),e.username]}),Object(z.jsxs)("p",{className:"comment-dsc",children:[" ",e.dsc]}),Object(z.jsx)("p",{className:"comment-tip",children:e.name})]})]},t)}));return Object(z.jsx)("div",{className:"comment-list",children:t})}var oe=function(e){Object(g.a)(c,e);var t=Object(u.a)(c);function c(e){var i;return Object(l.a)(this,c),(i=t.call(this,e)).state={click:!1,LangChoose:"\u7b80\u4f53\u4e2d\u6587"},i.handleClick=i.handleClick.bind(Object(h.a)(i)),i.handleChoose=i.handleChoose.bind(Object(h.a)(i)),i}return Object(d.a)(c,[{key:"handleClick",value:function(){this.setState({click:!this.state.click})}},{key:"handleChoose",value:function(e){this.setState({click:!this.state.click,LangChoose:e})}},{key:"render",value:function(){var e=this,t=this.state.LangChoose,c=["English","\u0420\u0443\u0441\u0441\u043a\u0438\u0439","T\xfcrkiye","\u7b80\u4f53\u4e2d\u6587"].map((function(t,c){return Object(z.jsx)("li",{className:"lang-choose-item",ref:"LangChoose",onClick:function(){e.handleChoose(t)},children:Object(z.jsx)("span",{className:"lang-title",children:t})},c)}));return Object(z.jsxs)("div",{className:"footer",children:[Object(z.jsxs)("div",{className:"footer-btns",children:[Object(z.jsx)(D.a,{type:"primary",size:"large",shape:"round",children:"400-788-3333"}),Object(z.jsx)(D.a,{type:"primary",size:"large",shape:"round",children:"\u5728\u7ebf\u5ba2\u670d"})]}),Object(z.jsxs)("div",{className:"footer-nav",children:[Object(z.jsxs)("div",{className:"footer-copy",children:[Object(z.jsx)("span",{children:"\u7ca4ICP\u590713003602\u53f7-2\u5408\u5b57B2-20170010"}),Object(z.jsx)("br",{}),Object(z.jsx)("span",{children:"\u8425\u4e1a\u6267\u7167\xa92018 Meizu All rights reserved"})]}),Object(z.jsx)("div",{className:"lang-choose-container",children:Object(z.jsx)("div",{className:this.state.click?"lang-choose-wrapper lang-choose-wrapper-active":"lang-choose-wrapper",children:Object(z.jsxs)("ul",{className:this.state.click?"lang-choose-list lang-choose-list-active ":"lang-choose-list ",children:[c,Object(z.jsx)("li",{className:"lang-choose-item",onClick:this.handleClick,children:Object(z.jsxs)("span",{className:"lang-title",children:[t," ",Object(z.jsx)("i",{className:"icon-more"})]})})]})})})]})]})}}]),c}(s.a.Component),re=function(e){Object(g.a)(c,e);var t=Object(u.a)(c);function c(e){var i;return Object(l.a)(this,c),(i=t.call(this,e)).state={},i}return Object(d.a)(c,[{key:"render",value:function(){return Object(z.jsxs)("div",{className:"TuiJie",children:[Object(z.jsx)(ce,{tipLists:G}),Object(z.jsx)(ie,{hotSites:V}),Object(z.jsxs)("div",{className:"index-banner",children:[Object(z.jsx)("div",{className:"row",children:Object(z.jsx)("div",{className:"banner-lg",children:Object(z.jsx)("a",{href:"/",children:Object(z.jsx)("img",{src:"https://fms.res.meizu.com/dms/2021/02/23/aef0a9ba-8eb6-4ed2-a222-ce01fd6ed394.jpg",alt:""})})})}),Object(z.jsxs)("div",{className:"row",children:[Object(z.jsx)("div",{className:"banner-lg",children:Object(z.jsx)("a",{href:"/",children:Object(z.jsx)("img",{src:"https://fms.res.meizu.com/dms/2021/02/23/42bfe896-35f8-48d4-b50b-9d526039f870.jpg",alt:""})})}),Object(z.jsx)("div",{className:"banner-lg",children:Object(z.jsx)("a",{href:"/",children:Object(z.jsx)("img",{src:"https://fms.res.meizu.com/dms/2021/01/13/0536da98-603b-4e45-a0ce-63fbb91a3cef.jpg",alt:""})})})]})]}),Object(z.jsxs)("div",{className:"section-phone-box",children:[Object(z.jsx)("div",{className:"section-title",children:Object(z.jsx)("h3",{children:this.props.phoneData.titleName})}),Object(z.jsx)("div",{className:"sectioen-box-adv",children:Object(z.jsx)("a",{href:Z+this.props.phoneData.head[0].path+"/index.html?query="+this.props.phoneData.head[0].query,children:Object(z.jsx)("img",{src:this.props.phoneData.head[0].imgSrc,width:"100%",alt:""})})}),Object(z.jsx)(ee,{content:this.props.phoneData.content})]}),Object(z.jsxs)("div",{className:"section-phone-box",children:[Object(z.jsx)("div",{className:"section-title",children:Object(z.jsx)("h3",{children:this.props.musicData.titleName})}),Object(z.jsx)(te,{list:this.props.musicData.head}),Object(z.jsx)(ee,{content:this.props.musicData.content})]}),Object(z.jsxs)("div",{className:"section-phone-box",children:[Object(z.jsx)("div",{className:"section-title",children:Object(z.jsx)("h3",{children:this.props.commentsData.titleName})}),Object(z.jsx)(se,{commentsData:this.props.commentsData})]}),Object(z.jsx)("div",{className:"index-back-center",children:Object(z.jsx)("a",{href:"#head-search",children:Object(z.jsx)("div",{children:"\u8fd4\u56de\u9876\u90e8"})})}),Object(z.jsx)(oe,{})]})}}]),c}(s.a.Component);function ne(e){var t=e.datalist;return Object(z.jsxs)("div",{children:[Object(z.jsx)("a",{href:Z+t.head[0].path+"/index.html?query="+t.head[0].query,children:Object(z.jsx)("img",{src:t.head[0].imgSrc,alt:"",width:"100%"})}),Object(z.jsx)(ee,{content:t.content})]})}function ae(e){var t=e.phoneData.content,c=t.map((function(e,c){return Object(z.jsx)("div",{className:c+1===t.length?"swiper-li swiper-li-notmargin":"swiper-li",children:Object(z.jsxs)("a",{href:Z+e.path+"/index.html?query="+e.query,children:[Object(z.jsx)("img",{src:e.imgSrc,alt:"",width:"100%"}),Object(z.jsxs)("div",{className:"info",children:[Object(z.jsx)("p",{className:"name",children:e.name}),Object(z.jsxs)("p",{className:"price",children:[Object(z.jsx)("i",{children:"\uffe5"}),e.price]})]})]})},c)})),i=e.footerServiceDate.map((function(e,t){return Object(z.jsx)("a",{href:"/",children:Object(z.jsx)("img",{src:e.imgSrc,alt:""})},t)}));return Object(z.jsxs)("div",{className:"other-footer",children:[Object(z.jsx)("div",{className:"section-phone-box",children:Object(z.jsx)("div",{className:"section-title",children:Object(z.jsx)("h3",{children:"\u4e3a\u60a8\u63a8\u8350"})})}),Object(z.jsx)("div",{className:"footer-swiper-list",children:c}),Object(z.jsx)("div",{className:"footer-service",children:i}),Object(z.jsx)(oe,{})]})}var me=function(e){Object(g.a)(c,e);var t=Object(u.a)(c);function c(e){var i;return Object(l.a)(this,c),(i=t.call(this,e)).state={value:"123"},i.callback=i.handleChange.bind(Object(h.a)(i)),i}return Object(d.a)(c,[{key:"handleChange",value:function(e){console.log(e);var t=parseInt(e)-1;document.title=["\u9b45\u65cf\u5b98\u7f51 - \u9b45\u65cf 17 \u7cfb\u5217\u624b\u673a\uff1a\u5982\u4f60\uff0c\u624d\u534e\u6a2a\u6ea2","\u624b\u673a - \u9b45\u65cf\u5b98\u7f51","Lipro - \u9b45\u65cf\u5b98\u7f51","\u58f0\u5b66 - \u9b45\u65cf\u5b98\u7f51","\u914d\u4ef6 - \u9b45\u65cf\u5b98\u7f51","\u751f\u6d3b - \u9b45\u65cf\u5b98\u7f51"][t]}},{key:"render",value:function(){return Object(z.jsxs)("div",{children:[Object(z.jsx)("div",{id:"head-search",className:"head-search",children:Object(z.jsx)("div",{className:"head-title",children:"meizu"})}),Object(z.jsx)("div",{className:"head-Tabs",children:Object(z.jsxs)(Y.a,{defaultActiveKey:"1",onChange:this.handleChange,centered:!0,children:[Object(z.jsxs)(U,{tab:"\u63a8\u8350",children:[Object(z.jsx)($,{viewpagerLists:X}),Object(z.jsx)(re,{phoneData:L,musicData:Q,commentsData:_})]},"1"),Object(z.jsxs)(U,{tab:"\u624b\u673a",children:[Object(z.jsx)(ne,{datalist:I}),Object(z.jsx)(ae,{phoneData:L,footerServiceDate:K})]},"2"),Object(z.jsxs)(U,{tab:"Lipro",children:[Object(z.jsx)(ne,{datalist:I}),Object(z.jsx)(ae,{phoneData:L,footerServiceDate:K})]},"3"),Object(z.jsxs)(U,{tab:"\u58f0\u5b66",children:[Object(z.jsx)(ne,{datalist:H}),Object(z.jsx)(ae,{phoneData:L,footerServiceDate:K})]},"4"),Object(z.jsxs)(U,{tab:"\u914d\u4ef6",children:[Object(z.jsx)(ne,{datalist:W}),Object(z.jsx)(ae,{phoneData:L,footerServiceDate:K})]},"5"),Object(z.jsxs)(U,{tab:"\u751f\u6d3b",children:[Object(z.jsx)(ne,{datalist:R}),Object(z.jsx)(ae,{phoneData:L,footerServiceDate:K})]},"6")]})})]})}}]),c}(s.a.Component),pe=function(){return Object(z.jsxs)(p.a,{children:[Object(z.jsx)(a.a,{exact:!0,path:"/",component:me}),Object(z.jsx)(a.a,{exact:!0,path:"/login",component:E})]})},le=Object(m.a)();var de=function(){return Object(z.jsx)(n.a,{store:x,children:Object(z.jsx)(a.b,{history:le,children:Object(z.jsx)(pe,{})})})},he=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,184)).then((function(t){var c=t.getCLS,i=t.getFID,s=t.getFCP,o=t.getLCP,r=t.getTTFB;c(e),i(e),s(e),o(e),r(e)}))};c(174);document.title=function(e){var t="".concat(e);return"".concat(t)}("\u9b45\u65cf\u5b98\u7f51 - \u9b45\u65cf 17 \u7cfb\u5217\u624b\u673a\uff1a\u5982\u4f60\uff0c\u624d\u534e\u6a2a\u6ea2");var ge;ge=de,r.a.render(Object(z.jsx)(ge,{className:"App"}),document.getElementById("root")),he()}},[[175,1,2]]]);
//# sourceMappingURL=main.6bc09c0d.chunk.js.map
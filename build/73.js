"use strict";(self.webpackChunkncmaz_core=self.webpackChunkncmaz_core||[]).push([[73],{6073:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var a=t(9307),r=t(9196),l=t(5736),o=t(204),s=t(6547),c=t(5548),u=t(5609),i=t(2175),d=t(3904),m=t(6419),g=t(3118),E=t(4523),_=t(9053),f=t(2135),b=t(5702),$=t(6981),S=t(9433),h=t(4720);const v=(0,r.lazy)((()=>t.e(820).then(t.bind(t,2820)))),I=(0,r.lazy)((()=>t.e(261).then(t.bind(t,3261)))),C=(0,r.lazy)((()=>t.e(696).then(t.bind(t,696)))),T=(0,r.lazy)((()=>t.e(13).then(t.bind(t,1013)))),p=(0,r.lazy)((()=>t.e(645).then(t.bind(t,6645)))),L=(0,r.lazy)((()=>t.e(167).then(t.bind(t,4167)))),y=(0,r.lazy)((()=>t.e(216).then(t.bind(t,8216)))),G=(0,r.lazy)((()=>t.e(522).then(t.bind(t,8522)))),R=(0,r.lazy)((()=>t.e(342).then(t.bind(t,1342)))),N=(0,r.lazy)((()=>t.e(825).then(t.bind(t,5825))));function P(e){const{attributes:n,setAttributes:t}=e,{filterDataBy:P,posts:x,categories:Q,tags:U,orderBy:w,order:A,numberPerPage:Y,authors:z,sectionName:O,showFilterTab:k,viewMoreHref:B,heading:F,subHeading:D,hasBackground:M}=n,{GQL_QUERY__string:Z,GQL_QUERY__string_text:H,variables:V,dataLists:q,error:J,loading:j,data:W,tabActiveId:K,handleClickTab:X}=(0,S.Z)(n);(0,a.useEffect)((()=>{W&&t({graphQLvariables:{variables:V,queryString:H},expectedNumberResults:q.length||Y})}),[W]);return(0,a.createElement)("div",(0,i.useBlockProps)(),(0,a.createElement)(i.InspectorControls,{key:"setting"},(0,a.createElement)("div",{className:"z-10 relative","data-type":"ncmaz-core/sidebar-settings"},(0,a.createElement)(u.Panel,{header:"Section settings"},(0,a.createElement)(u.PanelBody,{title:"General Settings"},(0,a.createElement)(u.PanelRow,null,(0,a.createElement)("div",{className:"space-y-2.5"},(0,a.createElement)(u.SelectControl,{label:(0,l.__)("Choose type of section","ncmaz-core"),value:O,options:[{label:"Magazine 1",value:"magazine-1"},{label:"Magazine 2",value:"magazine-2"},{label:"Magazine 3",value:"magazine-3"},{label:"Magazine 4",value:"magazine-4"},{label:"Magazine 5",value:"magazine-5"},{label:"Magazine 6",value:"magazine-6"},{label:"Magazine 7",value:"magazine-7"},{label:"Magazine 8",value:"magazine-8"},{label:"Magazine 9",value:"magazine-9"},{label:"Large slider",value:"large-slider"}],onChange:e=>t({sectionName:e})}),(0,a.createElement)(u.TextControl,{label:(0,l.__)("Heading","ncmaz-core"),value:F,type:"text",onChange:e=>t({heading:e})}),(0,a.createElement)(u.TextControl,{label:(0,l.__)("Sub heading","ncmaz-core"),value:D,type:"text",onChange:e=>t({subHeading:e})}),"by_specific"!==P&&(0,a.createElement)("div",{className:"w-full space-x-3 flex "},(0,a.createElement)(u.FormToggle,{checked:k,onChange:()=>t({showFilterTab:!k}),label:(0,l.__)("Show filter tab","ncmaz-core")}),(0,a.createElement)("legend",null,(0,l.__)("Show filter tab","ncmaz-core"))),(0,a.createElement)(u.TextControl,{label:(0,l.__)("View more href","ncmaz-core"),value:B,type:"url",onChange:e=>t({viewMoreHref:e})}),(0,a.createElement)("div",{className:"w-full space-x-3 flex "},(0,a.createElement)(u.FormToggle,{checked:M,onChange:()=>t({hasBackground:!M}),label:(0,l.__)("Enable Background","ncmaz-core")}),(0,a.createElement)("legend",null,(0,l.__)("Enable Background","ncmaz-core")))))),(0,a.createElement)(u.PanelBody,{initialOpen:!1,title:"Filter data settings"},(0,a.createElement)(u.PanelRow,null,(0,a.createElement)(u.RadioControl,{label:"",selected:P,options:h.e,onChange:e=>{t("by_specific"===e?{filterDataBy:e,showFilterTab:!1,categories:[],tags:[],authors:[]}:{filterDataBy:e,showFilterTab:!0,posts:[]})}})),(0,a.createElement)("div",{className:"border-b border-gray-600 mt-2 mb-4"}),(0,a.createElement)(u.PanelRow,null,"by_specific"===P?(0,a.createElement)(o.Z,{defaultValue:x,onChange:e=>t({posts:e})}):(0,a.createElement)("div",{className:"w-full space-y-2.5"},(0,a.createElement)(s.Z,{defaultValue:Q,onChange:e=>t({categories:e})}),(0,a.createElement)(c.Z,{defaultValue:U,onChange:e=>t({tags:e})}),(0,a.createElement)(E.Z,{defaultValue:z,onChange:e=>t({authors:e})}),(0,a.createElement)(d.Z,{defaultValue:w,onChange:e=>t({orderBy:e})}),(0,a.createElement)(m.Z,{defaultValue:A,onChange:e=>t({order:e})}),(0,a.createElement)(g.Z,{defaultValue:Y,onChange:e=>t({numberPerPage:e})}))))))),(()=>{const e=M;return(0,a.createElement)("div",{className:`nc-FactoryBlockMagazine relative ${e?"py-16":""}  `},e&&(0,a.createElement)(_.Z,null),k?(0,a.createElement)(f.Z,{tabActiveId:K,tabs:Q,viewMoreHref:B,heading:F,subHeading:D,onClickTab:X}):(0,a.createElement)(b.Z,{desc:D},F),(0,a.createElement)("div",{className:"relative"},j&&(0,a.createElement)(u.Spinner,null),J&&(0,a.createElement)("pre",{className:"text-xs text-red-500"},(0,a.createElement)("code",null,JSON.stringify(J))),!q.length&&!j&&(0,a.createElement)($.Z,null)),(()=>{switch(O){case"magazine-1":default:return(0,a.createElement)(r.Suspense,{fallback:(0,a.createElement)(u.Spinner,null)},(0,a.createElement)(v,{isLoading:j,activePosts:q}));case"magazine-2":return(0,a.createElement)(r.Suspense,{fallback:(0,a.createElement)(u.Spinner,null)},(0,a.createElement)(I,{isLoading:j,activePosts:q})," ");case"magazine-3":return(0,a.createElement)(r.Suspense,{fallback:(0,a.createElement)(u.Spinner,null)},(0,a.createElement)(C,{isLoading:j,activePosts:q}));case"magazine-4":return(0,a.createElement)(r.Suspense,{fallback:(0,a.createElement)(u.Spinner,null)},(0,a.createElement)(T,{isLoading:j,activePosts:q}));case"magazine-5":return(0,a.createElement)(r.Suspense,{fallback:(0,a.createElement)(u.Spinner,null)},(0,a.createElement)(p,{isLoading:j,activePosts:q}));case"magazine-6":return(0,a.createElement)(r.Suspense,{fallback:(0,a.createElement)(u.Spinner,null)},(0,a.createElement)(L,{isLoading:j,activePosts:q}));case"magazine-7":return(0,a.createElement)(r.Suspense,{fallback:(0,a.createElement)(u.Spinner,null)},(0,a.createElement)(y,{isLoading:j,activePosts:q}));case"magazine-8":return(0,a.createElement)(r.Suspense,{fallback:(0,a.createElement)(u.Spinner,null)},(0,a.createElement)(G,{isLoading:j,activePosts:q}));case"magazine-9":return(0,a.createElement)(r.Suspense,{fallback:(0,a.createElement)(u.Spinner,null)},(0,a.createElement)(R,{isLoading:j,activePosts:q}));case"large-slider":return(0,a.createElement)(r.Suspense,{fallback:(0,a.createElement)(u.Spinner,null)},(0,a.createElement)(N,{isLoading:j,activePosts:q}))}})())})())}},3118:function(e,n,t){var a=t(9307),r=(t(9196),t(5736)),l=t(5609);n.Z=e=>{let{onChange:n,defaultValue:t=6}=e;const[o,s]=(0,a.useState)(t);return(0,a.useEffect)((()=>{n&&n(o)}),[o]),(0,a.createElement)("div",{className:"w-full space-y-1"},(0,a.createElement)("legend",null,(0,r.__)("Number per page","ncmaz-core")),(0,a.createElement)(l.RangeControl,{onChange:e=>{s(e||6)},value:o}))}},4523:function(e,n,t){var a=t(9307),r=t(9196),l=t(2819),o=t.n(l),s=t(5736),c=t(2348),u=t(4392),i=t(9098),d=t(3359);n.Z=e=>{var n;let{onChange:t,defaultValue:l=[]}=e;const[m,g]=(0,r.useState)(l),[E,_]=(0,r.useState)("");(0,r.useEffect)((()=>{t&&t(m)}),[m]),(0,r.useEffect)((()=>{E&&$()}),[E]);let f=u.Vp;const b=i.Ps`
		${f}
	`,[$,{loading:S,error:h,data:v,called:I}]=(0,d.t)(b,{variables:{search:E}});let C=(null==v||null===(n=v.users)||void 0===n?void 0:n.edges)||[];C&&C.length&&(C=C.map((e=>({value:e.node.userId,label:e.node.name}))));const T=o().debounce((function(e){_(e)}),200);return(0,a.createElement)("div",{className:"w-full space-y-1"},(0,a.createElement)("legend",null,(0,s.__)("Type and select authors","ncmaz-core")),(0,a.createElement)(c.ZP,{placeholder:"Select authors...",isMulti:!0,isLoading:S,value:m,onInputChange:T,onChange:e=>g(e),options:C}))}},6547:function(e,n,t){var a=t(9307),r=t(9196),l=t(5736),o=t(2819),s=t.n(o),c=t(9098),u=t(3359),i=t(2348),d=t(4392);n.Z=e=>{var n;let{onChange:t,defaultValue:o=[]}=e;const[m,g]=(0,r.useState)(o),[E,_]=(0,r.useState)("");(0,r.useEffect)((()=>{t&&t(m)}),[m]),(0,r.useEffect)((()=>{E&&$()}),[E]);let f=d.SK;const b=c.Ps`
		${f}
	`,[$,{loading:S,error:h,data:v,called:I}]=(0,u.t)(b,{variables:{search:E}});let C=(null==v||null===(n=v.categories)||void 0===n?void 0:n.edges)||[];C&&C.length&&(C=C.map((e=>({id:e.node.databaseId,slug:e.node.slug,value:e.node.databaseId,label:e.node.name,name:e.node.name}))));const T=s().debounce((function(e){_(e)}),200);return(0,a.createElement)("div",{className:"w-full space-y-1"},(0,a.createElement)("legend",null,(0,l.__)("Type and select categories","ncmaz-core")),(0,a.createElement)(i.ZP,{placeholder:"Select categories...",isMulti:!0,onInputChange:T,isLoading:S,value:m,onChange:e=>g(e),options:C}))}},204:function(e,n,t){var a=t(9307),r=t(9196),l=t(5736),o=t(2819),s=t.n(o),c=t(2348),u=t(9098),i=t(3359),d=t(4392);n.Z=e=>{var n;let{onChange:t,defaultValue:o=[]}=e;const[m,g]=(0,r.useState)(o),[E,_]=(0,r.useState)("");(0,r.useEffect)((()=>{t&&t(m)}),[m]),(0,r.useEffect)((()=>{E&&$()}),[E]);let f=d.WH;const b=u.Ps`
		${f}
	`,[$,{loading:S,error:h,data:v,called:I}]=(0,i.t)(b,{variables:{search:E}});let C=(null==v||null===(n=v.posts)||void 0===n?void 0:n.edges)||[];C&&C.length&&(C=C.map((e=>({value:e.node.slug,label:e.node.title}))));const T=s().debounce((function(e){_(e)}),200);return(0,a.createElement)("div",{className:"w-full space-y-1"},(0,a.createElement)("legend",null,(0,l.__)("Type and select posts","ncmaz-core")),(0,a.createElement)(c.ZP,{placeholder:"Select posts...",isMulti:!0,onInputChange:T,isLoading:S,value:m,onChange:e=>g(e),options:C,styles:!0}))}},5548:function(e,n,t){var a=t(9307),r=t(9196),l=t(2819),o=t.n(l),s=t(5736),c=t(9098),u=t(3359),i=t(2348),d=t(4392);n.Z=e=>{var n;let{onChange:t,defaultValue:l=[]}=e;const[m,g]=(0,r.useState)(l),[E,_]=(0,r.useState)("");(0,r.useEffect)((()=>{t&&t(m)}),[m]),(0,r.useEffect)((()=>{E&&$()}),[E]);let f=d.Em;const b=c.Ps`
		${f}
	`,[$,{loading:S,error:h,data:v,called:I}]=(0,u.t)(b,{variables:{search:E}});let C=(null==v||null===(n=v.tags)||void 0===n?void 0:n.edges)||[];C&&C.length&&(C=C.map((e=>({value:e.node.databaseId,label:e.node.name}))));const T=o().debounce((function(e){_(e)}),200);return(0,a.createElement)("div",{className:"w-full space-y-1"},(0,a.createElement)("legend",null,(0,s.__)("Type and select tags","ncmaz-core")),(0,a.createElement)(i.ZP,{placeholder:"Select tags...",isMulti:!0,onInputChange:T,isLoading:S,value:m,onChange:e=>g(e),options:C}))}},6419:function(e,n,t){var a=t(9307),r=(t(9196),t(5609));n.Z=e=>{let{onChange:n,defaultValue:t="DESC"}=e;const[l,o]=(0,a.useState)(t);return(0,a.useEffect)((()=>{n&&n(l)}),[l]),(0,a.createElement)("div",null,(0,a.createElement)(r.SelectControl,{label:"Order",value:l,options:[{label:"DESC",value:"DESC"},{label:"ASC",value:"ASC"}],onChange:o}))}},3904:function(e,n,t){var a=t(9307),r=(t(9196),t(5609));n.Z=e=>{let{onChange:n,defaultValue:t="date"}=e;const[l,o]=(0,a.useState)(t);return(0,a.useEffect)((()=>{n&&n(l)}),[l]),(0,a.createElement)("div",null,(0,a.createElement)(r.SelectControl,{label:"Order By",value:l,options:[{label:"AUTHOR",value:"AUTHOR"},{label:"COMMENT_COUNT",value:"COMMENT_COUNT"},{label:"FAVORITES_COUNT",value:"FAVORITES_COUNT"},{label:"VIEWS_COUNT",value:"VIEWS_COUNT"},{label:"IN",value:"IN"},{label:"DATE",value:"DATE"},{label:"MENU_ORDER",value:"MENU_ORDER"},{label:"MODIFIED",value:"MODIFIED"},{label:"NAME_IN",value:"NAME_IN"},{label:"PARENT",value:"PARENT"},{label:"SLUG",value:"SLUG"},{label:"TITLE",value:"TITLE"}],onChange:e=>o(e)}))}},4720:function(e,n,t){t.d(n,{e:function(){return a}});const a=[{label:"Select posts by specific",value:"by_specific"},{label:"Select posts by filter",value:"by_filter"}]},4392:function(e,n,t){t.d(n,{tv:function(){return S},Yg:function(){return h},Mr:function(){return _},uk:function(){return f},BX:function(){return v},zu:function(){return I},Rg:function(){return b},S:function(){return $},SK:function(){return p},WH:function(){return C},Em:function(){return L},Vp:function(){return T},T3:function(){return a}});let a=["#ffdd00","#fbb034","#ff4c4c","#c1d82f","#f48924","#7ac143","#30c39e","#06BCAE","#0695BC","#037ef3","#146eb4","#8e43e7","#ea1d5d","#fc636b","#ff6319","#e01f3d","#a0ac48","#00d1b2","#472f92","#388ed1","#a6192e","#4a8594","#7B9FAB","#1393BD","#5E13BD","#E208A7"],r=" edges {\n  node {\n    id\n    link\n    author {\n      node {\n        id\n        avatar {\n          url\n        }\n        url\n        uri\n        username\n        name\n        slug\n        ncUserMeta {\n          featuredImage {\n            sourceUrl\n          }\n        }\n      }\n    }\n    categories {\n      edges {\n        node {\n          id\n          link\n          name\n          uri\n          slug\n          count\n          categoryId\n          ncTaxonomyMeta {\n            color\n          }\n        }\n      }\n    }\n    commentCount\n    date\n    excerpt\n    featuredImage {\n      node {\n        id\n        altText\n        caption\n        sourceUrl\n      }\n    }\n    postFormats {\n      edges {\n        node {\n          id\n          name\n          slug\n        }\n      }\n    }\n    postId\n    slug\n    title\n    ncmazVideoUrl {\n      fieldGroupName\n      videoUrl\n    }\n    ncmazAudioUrl {\n      fieldGroupName\n      audioUrl\n    }\n    ncPostMetaData {\n      favoriteButtonShortcode\n      readingTimeShortcode\n      viewsCount\n      fieldGroupName\n    }\n    ncmazGalleryImgs {\n      fieldGroupName\n      image1 {\n        id\n        sourceUrl\n      }\n      image2 {\n        id\n        sourceUrl\n      }\n      image3 {\n        id\n        sourceUrl\n      }\n      image4 {\n        id\n        sourceUrl\n      }\n      image5 {\n        id\n        sourceUrl\n      }\n      image6 {\n        id\n        sourceUrl\n      }\n      image7 {\n        id\n        sourceUrl\n      }\n      image8 {\n        id\n        sourceUrl\n      }\n    }\n  }\n}",l="edges {\n\tnode {\n\t\tid\n\t\tname\n\t\tusername\n\t\tuserId\n\t\turl\n\t\turi\n    ncUserMeta {\n\t\t\tcolor\n\t\t\tncBio\n\t\t\tfeaturedImage {\n\t\t\t\tsourceUrl\n\t\t\t\tid\n\t\t\t}\n\t\t\tbackgroundImage {\n\t\t\t\tsourceUrl\n\t\t\t}\n\t\t}\n    posts {\n      pageInfo {\n        total\n      }\n    }\n\t}\n}",o="edges {\n    node {\n        id\n        slug\n        count\n        name\n        databaseId\n        description\n        link\n        ncTaxonomyMeta {\n            color                                     \n            featuredImage {\n                sourceUrl\n            }\n        }\n    }\n}";const s=`\n  query GQL_QUERY_GET_POSTS_BY_FILTER(\n    $language: LanguageCodeFilterEnum = ${window.ncmazcoreJsData.pll_current_language}\n    $field: PostObjectsConnectionOrderbyEnum = AUTHOR\n    $order: OrderEnum = ASC\n    $categoryIn: [ID] = []\n    $tagIn: [ID] = []\n    $authorIn: [ID] = []\n    $last: Int = null\n    $first: Int = 10\n    $before: String = ""\n    $after: String = ""\n  ) {\n    posts(\n      where: {\n        language: $language\n        orderby: { field: $field, order: $order }\n        categoryIn: $categoryIn\n        tagIn: $tagIn\n        authorIn: $authorIn\n      }\n      last: $last\n      first: $first\n      before: $before\n      after: $after\n    ) {\n     ${r}\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        endCursor\n        startCursor\n      }\n    }\n  }\n`,c=`\n  query GQL_QUERY_GET_POSTS_BY_SPECIFIC(\n    $language: LanguageCodeFilterEnum = ${window.ncmazcoreJsData.pll_current_language}\n    $nameIn: [String] = ""\n    ) {\n    posts(where: {\n      language: $language\n      nameIn: $nameIn\n      orderby: {order: ASC, field: NAME_IN}\n     }) { ${r} }\n  }\n`,u=`\n\tquery GQL_QUERY_GET_CATEGORIES_BY_FILTER(\n    $language: LanguageCodeFilterEnum = ${window.ncmazcoreJsData.pll_current_language}\n\t\t$order: OrderEnum = ASC\n\t\t$orderby: TermObjectsConnectionOrderbyEnum = COUNT\n\t\t$after: String = null\n\t\t$before: String = null\n\t\t$first: Int = 10\n\t\t$last: Int = null\n\t) {\n\t\tcategories(\n\t\t\twhere: { \n        language: $language,\n        order: $order,\n        orderby: $orderby \n      }\n\t\t\tfirst: $first\n\t\t\tbefore: $before\n\t\t\tafter: $after\n\t\t\tlast: $last\n\t\t) { ${o} }\n\t}\n`,i=`\n\tquery GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC(\n    $language: LanguageCodeFilterEnum = ${window.ncmazcoreJsData.pll_current_language}\n    $termTaxonomId: [ID] = ""\n    ) {\n\t\tcategories(where: {\n      language: $language\n      termTaxonomId: $termTaxonomId\n     }) { ${o} }\n\t}\n`,d=`\n\tquery GQL_QUERY_GET_TAGS_BY_FILTER(\n    $language: LanguageCodeFilterEnum = ${window.ncmazcoreJsData.pll_current_language}\n\t\t$order: OrderEnum = ASC\n\t\t$orderby: TermObjectsConnectionOrderbyEnum = COUNT\n\t\t$after: String = null\n\t\t$before: String = null\n\t\t$first: Int = 10\n\t\t$last: Int = null\n\t) {\n\t\ttags(\n\t\t\twhere: {\n        language: $language \n        order: $order\n        orderby: $orderby \n      }\n\t\t\tfirst: $first\n\t\t\tbefore: $before\n\t\t\tafter: $after\n\t\t\tlast: $last\n\t\t) { ${o} }\n\t}\n`,m=`\n\tquery GQL_QUERY_GET_TAGS_BY_SPECIFIC(\n    $language: LanguageCodeFilterEnum = ${window.ncmazcoreJsData.pll_current_language}\n    $termTaxonomId: [ID] = ""\n    ) {\n\t\ttags(where: {\n      language: $language\n      termTaxonomId: $termTaxonomId\n    }) { ${o} }\n\t}\n`;let g=`\n  query GQL_QUERY_SEARCH_POSTS($search: String = "", $language: LanguageCodeFilterEnum = ${window.ncmazcoreJsData.pll_current_language}) {\n    posts(where: {search: $search,  language: $language})\n\t{ ${r} }\n  }\n`;const E={PLL_GET__GQL_QUERY_GET_POSTS_BY_FILTER:s,PLL_GET__GQL_QUERY_GET_POSTS_BY_SPECIFIC:c,PLL_GET__GQL_QUERY_GET_CATEGORIES_BY_FILTER:u,PLL_GET__GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC:i,PLL_GET__GQL_QUERY_GET_TAGS_BY_FILTER:d,PLL_GET__GQL_QUERY_GET_TAGS_BY_SPECIFIC:m,PLL_GET__GQL_QUERY_SEARCH_CATEGORIES:`\n  query GQL_QUERY_SEARCH_CATEGORIES($search: String = "", $language: LanguageCodeFilterEnum = ${window.ncmazcoreJsData.pll_current_language}) {\n\tcategories(where: {language: $language, search: $search})\n\t{ ${o} }\n  }\n`,PLL_GET__GQL_QUERY_SEARCH_TAGS:`\n  query GQL_QUERY_SEARCH_TAGS($search: String = "", $language: LanguageCodeFilterEnum = ${window.ncmazcoreJsData.pll_current_language}) {\n\ttags(where: {language: $language, search: $search})\n\t{ ${o} }\n  }\n`,PLL_GET__GQL_QUERY_SEARCH_POSTS:g};let _=`\n  query GQL_QUERY_GET_POSTS_BY_FILTER(\n    $field: PostObjectsConnectionOrderbyEnum = AUTHOR\n    $order: OrderEnum = ASC\n    $categoryIn: [ID] = []\n    $tagIn: [ID] = []\n    $authorIn: [ID] = []\n    $last: Int = null\n    $first: Int = 10\n    $before: String = ""\n    $after: String = ""\n  ) {\n    posts(\n      where: {\n        orderby: { field: $field, order: $order }\n        categoryIn: $categoryIn\n        tagIn: $tagIn\n        authorIn: $authorIn\n      }\n      last: $last\n      first: $first\n      before: $before\n      after: $after\n    ) {\n     ${r}\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        endCursor\n        startCursor\n      }\n    }\n  }\n`,f=`\n  query GQL_QUERY_GET_POSTS_BY_SPECIFIC($nameIn: [String] = "") {\n    posts(where: { nameIn: $nameIn,  orderby: {order: ASC, field: NAME_IN} }) { ${r} }\n  }\n`,b=`query GQL_QUERY_GET_USERS_BY_FILTER(\n\t$after: String = ""\n\t$before: String = ""\n\t$first: Int = 10\n\t$last: Int = null\n\t$field: UsersConnectionOrderbyEnum = DISPLAY_NAME\n\t$order: OrderEnum = ASC\n\t$roleIn: [UserRoleEnum] = []\n) {\n\tusers(\n\t\twhere: { orderby: { field: $field, order: $order }, roleIn: $roleIn }\n\t\tlast: $last\n\t\tfirst: $first\n\t\tbefore: $before\n\t\tafter: $after\n\t) { ${l} }\n}`,$=`query GQL_QUERY_GET_USERS_BY_SPECIFIC($include: [Int] = null) {\n\tusers(where: { include: $include }) { ${l} }\n}`,S=`\n\tquery GQL_QUERY_GET_CATEGORIES_BY_FILTER(\n\t\t$order: OrderEnum = ASC\n\t\t$orderby: TermObjectsConnectionOrderbyEnum = COUNT\n\t\t$after: String = null\n\t\t$before: String = null\n\t\t$first: Int = 10\n\t\t$last: Int = null\n\t) {\n\t\tcategories(\n\t\t\twhere: { order: $order, orderby: $orderby, hideEmpty: true  }\n\t\t\tfirst: $first\n\t\t\tbefore: $before\n\t\t\tafter: $after\n\t\t\tlast: $last\n\t\t) { ${o} }\n\t}\n`,h=`\n\tquery GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC($termTaxonomId: [ID] = "") {\n\t\tcategories(where: { termTaxonomId: $termTaxonomId }) { ${o} }\n\t}\n`,v=`\n\tquery GQL_QUERY_GET_TAGS_BY_FILTER(\n\t\t$order: OrderEnum = ASC\n\t\t$orderby: TermObjectsConnectionOrderbyEnum = COUNT\n\t\t$after: String = null\n\t\t$before: String = null\n\t\t$first: Int = 10\n\t\t$last: Int = null\n\t) {\n\t\ttags(\n\t\t\twhere: { order: $order, orderby: $orderby, hideEmpty: true }\n\t\t\tfirst: $first\n\t\t\tbefore: $before\n\t\t\tafter: $after\n\t\t\tlast: $last\n\t\t) { ${o} }\n\t}\n`,I=`\n\tquery GQL_QUERY_GET_TAGS_BY_SPECIFIC($termTaxonomId: [ID] = "") {\n\t\ttags(where: { termTaxonomId: $termTaxonomId }) { ${o} }\n\t}\n`,C=`\n  query GQL_QUERY_SEARCH_POSTS($search: String = "") {\n    posts(where: {search: $search})\n\t{ ${r} }\n  }\n`,T=`\n  query GQL_QUERY_SEARCH_USER($search: String = "") {\n\tusers(where: {search: $search})\n\t{ ${l} }\n  }\n`,p=`\n  query GQL_QUERY_SEARCH_CATEGORIES($search: String = "") {\n\tcategories(where: {search: $search})\n\t{ ${o} }\n  }\n`,L=`\n  query GQL_QUERY_SEARCH_TAGS($search: String = "") {\n\ttags(where: {search: $search})\n\t{ ${o} }\n  }\n`;window.ncmazcoreJsData.pll_current_language&&window.ncmazcoreJsData.pll_themeoption_actived&&(_=E.PLL_GET__GQL_QUERY_GET_POSTS_BY_FILTER,f=E.PLL_GET__GQL_QUERY_GET_POSTS_BY_SPECIFIC,S=E.PLL_GET__GQL_QUERY_GET_CATEGORIES_BY_FILTER,h=E.PLL_GET__GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC,v=E.PLL_GET__GQL_QUERY_GET_TAGS_BY_FILTER,I=E.PLL_GET__GQL_QUERY_GET_TAGS_BY_SPECIFIC,C=E.PLL_GET__GQL_QUERY_SEARCH_POSTS,p=E.PLL_GET__GQL_QUERY_SEARCH_CATEGORIES,L=E.PLL_GET__GQL_QUERY_SEARCH_TAGS)},6981:function(e,n,t){var a=t(9307);t(9196),n.Z=()=>(0,a.createElement)("div",{className:"inline-flex flex-col items-center justify-center text-center  pb-10"},(0,a.createElement)("img",{src:ncmazcoreJsData.img_empty_png,className:"w-36 sm:w-40",alt:"empty state"}),(0,a.createElement)("span",{className:"text-sm block text-neutral-500"},"Nothing we found!"))},2135:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(9307),r=(t(9196),t(5702)),l=e=>{let{containerClassName:n="",className:t="",children:r}=e;return(0,a.createElement)("nav",{className:`nc-Nav ${n}`,"data-nc-id":"Nav"},(0,a.createElement)("ul",{className:`flex  ${t}`},r))},o=e=>{let{className:n="px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize",radius:t="rounded-full",children:r,onClick:l=(()=>{}),isActive:o=!1,renderX:s}=e;return(0,a.createElement)("li",{className:"nc-NavItem relative","data-nc-id":"NavItem"},s&&s,(0,a.createElement)("button",{className:`block !leading-none font-medium ${n} ${t} ${o?"bg-secondary-900 text-secondary-50 ":"text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"} `,onClick:()=>{l&&l()}},r))},s=t(7462),c=t(9130),u=e=>{let{className:n=" ",...t}=e;return(0,a.createElement)(c.Z,(0,s.Z)({className:`ttnc-ButtonSecondary font-medium border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 ${n}`},t))},i=e=>{let{tabActiveId:n=-1,tabs:t,subHeading:s="",viewMoreHref:c="#",heading:i="🎈 Latest Articles",onClickTab:d}=e;return(0,a.createElement)("div",{className:"flex flex-col mb-8 relative"},(0,a.createElement)(r.Z,{desc:s},i),(0,a.createElement)("div",{className:"flex items-center justify-between"},(0,a.createElement)(l,{className:"sm:space-x-2",containerClassName:"relative flex w-full overflow-x-auto text-sm md:text-base hiddenScrollbar"},(0,a.createElement)(o,{isActive:-1===n,onClick:()=>d(-1)},"All"),t.map(((e,t)=>(0,a.createElement)(o,{key:t,isActive:n===e.id,onClick:()=>d(e)},e.name)))),c&&(0,a.createElement)("span",{className:"hidden sm:block flex-shrink-0"},(0,a.createElement)(u,{href:c,className:"!leading-none"},(0,a.createElement)("span",null,"View all"),(0,a.createElement)("i",{className:"ml-3 las la-arrow-right text-xl leading-none"})))))}},5702:function(e,n,t){var a=t(7462),r=t(9307),l=(t(9196),t(3492));n.Z=e=>{let{children:n,desc:t="Discover the most outstanding articles in all topics of life. ",className:o="mb-12 md:mb-16 text-neutral-900 dark:text-neutral-50",isCenter:s=!1,hasNextPrev:c=!1,...u}=e;return n||t?(0,r.createElement)("div",{className:`nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between ${o}`},(0,r.createElement)("div",{className:s?"text-center w-full max-w-2xl mx-auto ":"max-w-2xl"},(0,r.createElement)("h2",(0,a.Z)({className:"!text-3xl md:!text-4xl !font-semibold !m-0"},u),n||"Section Heading"),t&&(0,r.createElement)("span",{className:"!mt-2 md:!mt-3 !font-normal block !text-base sm:!text-xl text-neutral-500 dark:text-neutral-400"},t)),c&&!s&&(0,r.createElement)("div",{className:"mt-4 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0"},(0,r.createElement)(l.Z,{onClickNext:()=>{},onClickPrev:()=>{}}))):null}},3492:function(e,n,t){var a=t(9307);t(9196),n.Z=e=>{let{containerClassName:n="",onClickNext:t=(()=>{}),onClickPrev:r=(()=>{}),btnClassName:l="w-10 h-10",onlyNext:o=!1,onlyPrev:s=!1}=e;return(0,a.createElement)("div",{className:`nc-NextPrev relative flex items-center text-neutral-900 dark:text-neutral-300 ${n}`,"data-nc-id":"NextPrev","data-glide-el":"controls"},!o&&(0,a.createElement)("button",{className:`${l} ${s?"":"mr-[6px]"} bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none`,onClick:r,title:"Prev","data-glide-dir":"<"},(0,a.createElement)("i",{className:"las la-angle-left"})),!s&&(0,a.createElement)("button",{className:`${l} bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none`,onClick:t,title:"Next","data-glide-dir":">"},(0,a.createElement)("i",{className:"las la-angle-right"})))}},9433:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(9196),r=t(9098),l=t(2471),o=t(4392);function s(e){var n;const{filterDataBy:t,posts:s,categories:c,tags:u,orderBy:i,order:d,numberPerPage:m,authors:g}=e,[E,_]=(0,a.useState)(-1);let f,b="",$="",S={};"by_specific"===t?(f=null,S={nameIn:(null==s?void 0:s.map((e=>e.value)))||[]},b=o.uk,$="GQL_QUERY_GET_POSTS_BY_SPECIFIC"):(b=o.Mr,$="GQL_QUERY_GET_POSTS_BY_FILTER",S={categoryIn:(null==c?void 0:c.map((e=>e.value)))||[],tagIn:(null==u?void 0:u.map((e=>e.value)))||[],authorIn:(null==g?void 0:g.map((e=>e.value)))||[],order:d,field:i,first:Number(m)},f={...S,categoryIn:E&&-1!==E?[E]:(null==c?void 0:c.map((e=>e.value)))||[]});const h=r.Ps`
		${b}
	`,{loading:v,error:I,data:C}=(0,l.a)(h,{variables:f||S});return{GQL_QUERY__string:b,GQL_QUERY__string_text:$,variables:S,loading:v,error:I,data:C,dataLists:(null==C||null===(n=C.posts)||void 0===n?void 0:n.edges)||[],handleClickTab:e=>{-1!==e?e.id!==E&&_(e.id):_(e)},tabActiveId:E}}}}]);
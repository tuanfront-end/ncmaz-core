"use strict";(self.webpackChunkncmaz_core=self.webpackChunkncmaz_core||[]).push([[281],{8281:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var r=t(9307),a=t(9196),l=t(5736),o=t(5609),s=t(2175),c=t(6419),u=t(4523),i=t(9098),d=t(3335),m=t(9053),g=t(9931),E=t(3398),_=t(7586),f=t(5702),$=e=>{let{className:n="",userCardName:t,authors:a,gridClass:l="grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ",heading:o="",subHeading:s="",blockLayoutStyle:c}=e;return(0,r.createElement)("div",{className:`nc-SectionGridAuthorBox relative ${n}`,"data-nc-id":"SectionGridAuthorBox"},(0,r.createElement)(f.Z,{desc:s,isCenter:"layout-1"===c},o),(0,r.createElement)("div",{className:`grid gap-6 md:gap-8 ${l}`},a.map(((e,n)=>"card1"===t?(0,r.createElement)(E.Z,{key:n,author:null==e?void 0:e.node}):(0,r.createElement)(_.Z,{key:n,author:null==e?void 0:e.node})))))},b=t(6981),C=t(4392);function I(e){var n;const{attributes:t,setAttributes:E,clientId:_}=e,{filterDataBy:f,numberPerPage:I,order:h,orderBy:S,userIds:T,roleIn:v,blockLayoutStyle:y,userCardName:x,heading:G,subHeading:p,hasBackground:R,gridClass:L,gridClassCustom:N,graphQLvariables:U,graphQLData:Q}=t;let w="",A="",P={};"by_specific"===f?(P={include:T.map((e=>e.value))},w=C.S,A="GQL_QUERY_GET_USERS_BY_SPECIFIC"):(w=C.Rg,A="GQL_QUERY_GET_USERS_BY_FILTER",P={first:I,field:S,order:h,roleIn:v.map((e=>e.value))});const Y=i.Ps`
		${w}
	`,{loading:O,error:B,data:k}=(0,d.a)(Y,{variables:P}),D=(null==k||null===(n=k.users)||void 0===n?void 0:n.edges)||[];return(0,a.useEffect)((()=>{k&&E({graphQLvariables:"by_specific"!==f?{variables:P,queryString:A}:{},graphQLData:"by_specific"===f?k:{}})}),[k]),(0,r.createElement)("div",(0,s.useBlockProps)(),(0,r.createElement)(s.InspectorControls,{key:"setting"},(0,r.createElement)("div",{"data-type":"ncmaz-core/sidebar-settings"},(0,r.createElement)(o.Panel,{header:"Section settings"},(0,r.createElement)(o.PanelBody,{title:"General Settings"},(0,r.createElement)(o.PanelRow,null,(0,r.createElement)("div",{className:"space-y-2.5"},(0,r.createElement)(o.SelectControl,{label:(0,l.__)("Choose block layout","ncmaz-core"),value:y,options:[{label:"layout 1",value:"layout-1"},{label:"layout 2",value:"layout-2"}],onChange:e=>{E({blockLayoutStyle:e})}}),(0,r.createElement)(o.SelectControl,{label:(0,l.__)("Choose type of user card","ncmaz-core"),value:x,options:[{label:"User card 1",value:"card1"},{label:"User card 2",value:"card2"}],onChange:e=>{E({userCardName:e})}}),(0,r.createElement)(o.SelectControl,{label:(0,l.__)("Choose items per row","ncmaz-core"),value:L,options:[{label:"1 - sm:2 - md:3 - lg:4 - xl:5",value:"grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"},{label:"1 - sm:2 - md:2 - lg:3 - xl:4",value:"grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}],onChange:e=>E({gridClass:e})}),(0,r.createElement)("div",null,(0,r.createElement)(o.TextControl,{label:(0,l.__)("Items per row custom (advance)","ncmaz-core"),value:N,type:"text",onChange:e=>E({gridClassCustom:e}),help:(0,l.__)("If you enter this field will overwrite the field 'Choose items per row' above","ncmaz-core")})),(0,r.createElement)(o.TextControl,{label:(0,l.__)("Heading","ncmaz-core"),value:G,type:"text",onChange:e=>E({heading:e})}),(0,r.createElement)(o.TextControl,{label:(0,l.__)("Sub heading","ncmaz-core"),value:p,type:"text",onChange:e=>E({subHeading:e})}),(0,r.createElement)("div",{className:"w-full space-x-3 flex "},(0,r.createElement)(o.FormToggle,{checked:R,onChange:()=>E({hasBackground:!R}),label:(0,l.__)("Enable Background","ncmaz-core")}),(0,r.createElement)("legend",null,(0,l.__)("Enable Background","ncmaz-core")))))),(0,r.createElement)(o.PanelBody,{initialOpen:!1,title:"Filter data settings"},(0,r.createElement)(o.PanelRow,null,(0,r.createElement)(o.RadioControl,{label:"Users query by",selected:f,options:[{label:"Select users specific",value:"by_specific"},{label:"Select users by filter",value:"by_filter"}],onChange:e=>E({filterDataBy:e})})),(0,r.createElement)("div",{className:"border-b border-gray-600 mt-3 mb-4 "}),(0,r.createElement)(o.PanelRow,null,"by_specific"===f?(0,r.createElement)(u.Z,{defaultValue:T,onChange:e=>E({userIds:e})}):(0,r.createElement)("div",{className:"w-full space-y-2.5"},(0,r.createElement)("div",{className:"w-full space-y-1"},(0,r.createElement)("legend",null,(0,l.__)("Choose user role-in","ncmaz-core")),(0,r.createElement)(g.ZP,{placeholder:"Select authors...",isMulti:!0,value:v,options:[{label:"ADMINISTRATOR",value:"ADMINISTRATOR"},{label:"AUTHOR",value:"AUTHOR"},{label:"CONTRIBUTOR",value:"CONTRIBUTOR"},{label:"EDITOR",value:"EDITOR"},{label:"SUBSCRIBER",value:"SUBSCRIBER"}],onChange:e=>E({roleIn:e})})),(0,r.createElement)(o.SelectControl,{label:(0,l.__)("OrderBy","ncmaz-core"),value:S,options:[{label:"DISPLAY_NAME",value:"DISPLAY_NAME"},{label:"EMAIL",value:"EMAIL"},{label:"NICE_NAME",value:"NICE_NAME"},{label:"REGISTERED",value:"REGISTERED"}],onChange:e=>E({orderBy:e})}),(0,r.createElement)(c.Z,{defaultValue:h,onChange:e=>E({order:e})}),(0,r.createElement)("div",{className:"w-full space-y-1"},(0,r.createElement)("legend",null,(0,l.__)("Number per page","ncmaz-core")),(0,r.createElement)(o.RangeControl,{onChange:e=>E({numberPerPage:e}),min:4,max:30,value:I})))))))),(0,r.createElement)("div",{className:R?"py-16":""},R&&(0,r.createElement)(m.Z,null),(0,r.createElement)($,{blockLayoutStyle:y,userCardName:x,heading:G,subHeading:p,authors:D,gridClass:N||L}),(0,r.createElement)("div",{className:"relative"},O&&(0,r.createElement)(o.Spinner,null),B&&(0,r.createElement)("pre",{className:"text-xs text-red-500"},(0,r.createElement)("code",null,JSON.stringify(B))),!D.length&&!O&&(0,r.createElement)(b.Z,null))))}},4523:function(e,n,t){var r=t(9307),a=t(9196),l=t(2819),o=t.n(l),s=t(5736),c=t(9931),u=t(4392),i=t(9098),d=t(3359);n.Z=e=>{var n;let{onChange:t,defaultValue:l=[]}=e;const[m,g]=(0,a.useState)(l),[E,_]=(0,a.useState)("");(0,a.useEffect)((()=>{t&&t(m)}),[m]),(0,a.useEffect)((()=>{E&&b()}),[E]);let f=u.Vp;const $=i.Ps`
		${f}
	`,[b,{loading:C,error:I,data:h,called:S}]=(0,d.t)($,{variables:{search:E}});let T=(null==h||null===(n=h.users)||void 0===n?void 0:n.edges)||[];T&&T.length&&(T=T.map((e=>({value:e.node.userId,label:e.node.name}))));const v=o().debounce((function(e){_(e)}),200);return(0,r.createElement)("div",{className:"w-full space-y-1"},(0,r.createElement)("legend",null,(0,s.__)("Type and select authors","ncmaz-core")),(0,r.createElement)(c.ZP,{placeholder:"Select authors...",isMulti:!0,isLoading:C,value:m,onInputChange:v,onChange:e=>g(e),options:T}))}},6419:function(e,n,t){var r=t(9307),a=(t(9196),t(5609));n.Z=e=>{let{onChange:n,defaultValue:t="DESC"}=e;const[l,o]=(0,r.useState)(t);return(0,r.useEffect)((()=>{n&&n(l)}),[l]),(0,r.createElement)("div",null,(0,r.createElement)(a.SelectControl,{label:"Order",value:l,options:[{label:"DESC",value:"DESC"},{label:"ASC",value:"ASC"}],onChange:o}))}},4392:function(e,n,t){t.d(n,{tv:function(){return C},Yg:function(){return I},Mr:function(){return _},uk:function(){return f},BX:function(){return h},zu:function(){return S},Rg:function(){return $},S:function(){return b},SK:function(){return y},WH:function(){return T},Em:function(){return x},Vp:function(){return v},T3:function(){return r}});let r=["#ffdd00","#fbb034","#ff4c4c","#c1d82f","#f48924","#7ac143","#30c39e","#06BCAE","#0695BC","#037ef3","#146eb4","#8e43e7","#ea1d5d","#fc636b","#ff6319","#e01f3d","#a0ac48","#00d1b2","#472f92","#388ed1","#a6192e","#4a8594","#7B9FAB","#1393BD","#5E13BD","#E208A7"],a=" edges {\n  node {\n    id\n    link\n    author {\n      node {\n        id\n        avatar {\n          url\n        }\n        url\n        uri\n        username\n        name\n        slug\n        ncUserMeta {\n          featuredImage {\n            sourceUrl\n          }\n        }\n      }\n    }\n    categories {\n      edges {\n        node {\n          id\n          link\n          name\n          uri\n          slug\n          count\n          categoryId\n          ncTaxonomyMeta {\n            color\n          }\n        }\n      }\n    }\n    commentCount\n    date\n    excerpt\n    featuredImage {\n      node {\n        id\n        altText\n        caption\n        sourceUrl\n      }\n    }\n    postFormats {\n      edges {\n        node {\n          id\n          name\n          slug\n        }\n      }\n    }\n    postId\n    slug\n    title\n    ncmazVideoUrl {\n      fieldGroupName\n      videoUrl\n    }\n    ncmazAudioUrl {\n      fieldGroupName\n      audioUrl\n    }\n    ncPostMetaData {\n      favoriteButtonShortcode\n      readingTimeShortcode\n      viewsCount\n      fieldGroupName\n    }\n    ncmazGalleryImgs {\n      fieldGroupName\n      image1 {\n        id\n        sourceUrl\n      }\n      image2 {\n        id\n        sourceUrl\n      }\n      image3 {\n        id\n        sourceUrl\n      }\n      image4 {\n        id\n        sourceUrl\n      }\n      image5 {\n        id\n        sourceUrl\n      }\n      image6 {\n        id\n        sourceUrl\n      }\n      image7 {\n        id\n        sourceUrl\n      }\n      image8 {\n        id\n        sourceUrl\n      }\n    }\n  }\n}",l="edges {\n\tnode {\n\t\tid\n\t\tname\n\t\tusername\n\t\tuserId\n\t\turl\n\t\turi\n    ncUserMeta {\n\t\t\tcolor\n\t\t\tncBio\n\t\t\tfeaturedImage {\n\t\t\t\tsourceUrl\n\t\t\t\tid\n\t\t\t}\n\t\t\tbackgroundImage {\n\t\t\t\tsourceUrl\n\t\t\t}\n\t\t}\n    posts {\n      pageInfo {\n        total\n      }\n    }\n\t}\n}",o="edges {\n    node {\n        id\n        slug\n        count\n        name\n        databaseId\n        description\n        link\n        ncTaxonomyMeta {\n            color                                     \n            featuredImage {\n                sourceUrl\n            }\n        }\n    }\n}";const s=`\n  query GQL_QUERY_GET_POSTS_BY_FILTER(\n    $language: LanguageCodeFilterEnum = ${window.ncmazcoreJsData.pll_current_language}\n    $field: PostObjectsConnectionOrderbyEnum = AUTHOR\n    $order: OrderEnum = ASC\n    $categoryIn: [ID] = []\n    $tagIn: [ID] = []\n    $authorIn: [ID] = []\n    $last: Int = null\n    $first: Int = 10\n    $before: String = ""\n    $after: String = ""\n  ) {\n    posts(\n      where: {\n        language: $language\n        orderby: { field: $field, order: $order }\n        categoryIn: $categoryIn\n        tagIn: $tagIn\n        authorIn: $authorIn\n      }\n      last: $last\n      first: $first\n      before: $before\n      after: $after\n    ) {\n     ${a}\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        endCursor\n        startCursor\n      }\n    }\n  }\n`,c=`\n  query GQL_QUERY_GET_POSTS_BY_SPECIFIC(\n    $language: LanguageCodeFilterEnum = ${window.ncmazcoreJsData.pll_current_language}\n    $nameIn: [String] = ""\n    ) {\n    posts(where: {\n      language: $language\n      nameIn: $nameIn\n      orderby: {order: ASC, field: NAME_IN}\n     }) { ${a} }\n  }\n`,u=`\n\tquery GQL_QUERY_GET_CATEGORIES_BY_FILTER(\n    $language: LanguageCodeFilterEnum = ${window.ncmazcoreJsData.pll_current_language}\n\t\t$order: OrderEnum = ASC\n\t\t$orderby: TermObjectsConnectionOrderbyEnum = COUNT\n\t\t$after: String = null\n\t\t$before: String = null\n\t\t$first: Int = 10\n\t\t$last: Int = null\n\t) {\n\t\tcategories(\n\t\t\twhere: { \n        language: $language,\n        order: $order,\n        orderby: $orderby \n      }\n\t\t\tfirst: $first\n\t\t\tbefore: $before\n\t\t\tafter: $after\n\t\t\tlast: $last\n\t\t) { ${o} }\n\t}\n`,i=`\n\tquery GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC(\n    $language: LanguageCodeFilterEnum = ${window.ncmazcoreJsData.pll_current_language}\n    $termTaxonomId: [ID] = ""\n    ) {\n\t\tcategories(where: {\n      language: $language\n      termTaxonomId: $termTaxonomId\n     }) { ${o} }\n\t}\n`,d=`\n\tquery GQL_QUERY_GET_TAGS_BY_FILTER(\n    $language: LanguageCodeFilterEnum = ${window.ncmazcoreJsData.pll_current_language}\n\t\t$order: OrderEnum = ASC\n\t\t$orderby: TermObjectsConnectionOrderbyEnum = COUNT\n\t\t$after: String = null\n\t\t$before: String = null\n\t\t$first: Int = 10\n\t\t$last: Int = null\n\t) {\n\t\ttags(\n\t\t\twhere: {\n        language: $language \n        order: $order\n        orderby: $orderby \n      }\n\t\t\tfirst: $first\n\t\t\tbefore: $before\n\t\t\tafter: $after\n\t\t\tlast: $last\n\t\t) { ${o} }\n\t}\n`,m=`\n\tquery GQL_QUERY_GET_TAGS_BY_SPECIFIC(\n    $language: LanguageCodeFilterEnum = ${window.ncmazcoreJsData.pll_current_language}\n    $termTaxonomId: [ID] = ""\n    ) {\n\t\ttags(where: {\n      language: $language\n      termTaxonomId: $termTaxonomId\n    }) { ${o} }\n\t}\n`;let g=`\n  query GQL_QUERY_SEARCH_POSTS($search: String = "", $language: LanguageCodeFilterEnum = ${window.ncmazcoreJsData.pll_current_language}) {\n    posts(where: {search: $search,  language: $language})\n\t{ ${a} }\n  }\n`;const E={PLL_GET__GQL_QUERY_GET_POSTS_BY_FILTER:s,PLL_GET__GQL_QUERY_GET_POSTS_BY_SPECIFIC:c,PLL_GET__GQL_QUERY_GET_CATEGORIES_BY_FILTER:u,PLL_GET__GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC:i,PLL_GET__GQL_QUERY_GET_TAGS_BY_FILTER:d,PLL_GET__GQL_QUERY_GET_TAGS_BY_SPECIFIC:m,PLL_GET__GQL_QUERY_SEARCH_CATEGORIES:`\n  query GQL_QUERY_SEARCH_CATEGORIES($search: String = "", $language: LanguageCodeFilterEnum = ${window.ncmazcoreJsData.pll_current_language}) {\n\tcategories(where: {language: $language, search: $search})\n\t{ ${o} }\n  }\n`,PLL_GET__GQL_QUERY_SEARCH_TAGS:`\n  query GQL_QUERY_SEARCH_TAGS($search: String = "", $language: LanguageCodeFilterEnum = ${window.ncmazcoreJsData.pll_current_language}) {\n\ttags(where: {language: $language, search: $search})\n\t{ ${o} }\n  }\n`,PLL_GET__GQL_QUERY_SEARCH_POSTS:g};let _=`\n  query GQL_QUERY_GET_POSTS_BY_FILTER(\n    $field: PostObjectsConnectionOrderbyEnum = AUTHOR\n    $order: OrderEnum = ASC\n    $categoryIn: [ID] = []\n    $tagIn: [ID] = []\n    $authorIn: [ID] = []\n    $last: Int = null\n    $first: Int = 10\n    $before: String = ""\n    $after: String = ""\n  ) {\n    posts(\n      where: {\n        orderby: { field: $field, order: $order }\n        categoryIn: $categoryIn\n        tagIn: $tagIn\n        authorIn: $authorIn\n      }\n      last: $last\n      first: $first\n      before: $before\n      after: $after\n    ) {\n     ${a}\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        endCursor\n        startCursor\n      }\n    }\n  }\n`,f=`\n  query GQL_QUERY_GET_POSTS_BY_SPECIFIC($nameIn: [String] = "") {\n    posts(where: { nameIn: $nameIn,  orderby: {order: ASC, field: NAME_IN} }) { ${a} }\n  }\n`,$=`query GQL_QUERY_GET_USERS_BY_FILTER(\n\t$after: String = ""\n\t$before: String = ""\n\t$first: Int = 10\n\t$last: Int = null\n\t$field: UsersConnectionOrderbyEnum = DISPLAY_NAME\n\t$order: OrderEnum = ASC\n\t$roleIn: [UserRoleEnum] = []\n) {\n\tusers(\n\t\twhere: { orderby: { field: $field, order: $order }, roleIn: $roleIn }\n\t\tlast: $last\n\t\tfirst: $first\n\t\tbefore: $before\n\t\tafter: $after\n\t) { ${l} }\n}`,b=`query GQL_QUERY_GET_USERS_BY_SPECIFIC($include: [Int] = null) {\n\tusers(where: { include: $include }) { ${l} }\n}`,C=`\n\tquery GQL_QUERY_GET_CATEGORIES_BY_FILTER(\n\t\t$order: OrderEnum = ASC\n\t\t$orderby: TermObjectsConnectionOrderbyEnum = COUNT\n\t\t$after: String = null\n\t\t$before: String = null\n\t\t$first: Int = 10\n\t\t$last: Int = null\n\t) {\n\t\tcategories(\n\t\t\twhere: { order: $order, orderby: $orderby, hideEmpty: true  }\n\t\t\tfirst: $first\n\t\t\tbefore: $before\n\t\t\tafter: $after\n\t\t\tlast: $last\n\t\t) { ${o} }\n\t}\n`,I=`\n\tquery GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC($termTaxonomId: [ID] = "") {\n\t\tcategories(where: { termTaxonomId: $termTaxonomId }) { ${o} }\n\t}\n`,h=`\n\tquery GQL_QUERY_GET_TAGS_BY_FILTER(\n\t\t$order: OrderEnum = ASC\n\t\t$orderby: TermObjectsConnectionOrderbyEnum = COUNT\n\t\t$after: String = null\n\t\t$before: String = null\n\t\t$first: Int = 10\n\t\t$last: Int = null\n\t) {\n\t\ttags(\n\t\t\twhere: { order: $order, orderby: $orderby, hideEmpty: true }\n\t\t\tfirst: $first\n\t\t\tbefore: $before\n\t\t\tafter: $after\n\t\t\tlast: $last\n\t\t) { ${o} }\n\t}\n`,S=`\n\tquery GQL_QUERY_GET_TAGS_BY_SPECIFIC($termTaxonomId: [ID] = "") {\n\t\ttags(where: { termTaxonomId: $termTaxonomId }) { ${o} }\n\t}\n`,T=`\n  query GQL_QUERY_SEARCH_POSTS($search: String = "") {\n    posts(where: {search: $search})\n\t{ ${a} }\n  }\n`,v=`\n  query GQL_QUERY_SEARCH_USER($search: String = "") {\n\tusers(where: {search: $search})\n\t{ ${l} }\n  }\n`,y=`\n  query GQL_QUERY_SEARCH_CATEGORIES($search: String = "") {\n\tcategories(where: {search: $search})\n\t{ ${o} }\n  }\n`,x=`\n  query GQL_QUERY_SEARCH_TAGS($search: String = "") {\n\ttags(where: {search: $search})\n\t{ ${o} }\n  }\n`;window.ncmazcoreJsData.pll_current_language&&window.ncmazcoreJsData.pll_themeoption_actived&&(_=E.PLL_GET__GQL_QUERY_GET_POSTS_BY_FILTER,f=E.PLL_GET__GQL_QUERY_GET_POSTS_BY_SPECIFIC,C=E.PLL_GET__GQL_QUERY_GET_CATEGORIES_BY_FILTER,I=E.PLL_GET__GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC,h=E.PLL_GET__GQL_QUERY_GET_TAGS_BY_FILTER,S=E.PLL_GET__GQL_QUERY_GET_TAGS_BY_SPECIFIC,T=E.PLL_GET__GQL_QUERY_SEARCH_POSTS,y=E.PLL_GET__GQL_QUERY_SEARCH_CATEGORIES,x=E.PLL_GET__GQL_QUERY_SEARCH_TAGS)},5591:function(e,n,t){var r=t(9307),a=(t(9196),t(4392));n.Z=e=>{let{containerClassName:n="ring-1 ring-white dark:ring-neutral-900",sizeClass:t="h-6 w-6 text-sm",radius:l="rounded-md",imgUrl:o,userName:s}=e;const c=o||"",u=s||"John Doe";return(0,r.createElement)("div",{className:`wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner ${l} ${t} ${n}`,style:{backgroundColor:c?void 0:(e=>{const n=Math.floor(e.charCodeAt(0)%a.T3.length);return a.T3[n]})(u)}},c&&(0,r.createElement)("img",{className:"absolute inset-0 w-full h-full object-cover",src:c,alt:u}),(0,r.createElement)("span",{className:"wil-avatar__name"},u[0]))}},7586:function(e,n,t){var r=t(9307),a=(t(9196),t(5591));n.Z=e=>{let{className:n="",author:t}=e;if(!t)return null;const{avatar:l,id:o,name:s,ncUserMeta:c,url:u,uri:i,userId:d,username:m}=t,{color:g,featuredImage:E,backgroundImage:_,ncBio:f}=c;return(0,r.createElement)("a",{href:u+i,className:`nc-CardAuthorBox2 flex flex-col overflow-hidden [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${n}`,"data-nc-id":"CardAuthorBox2"},(0,r.createElement)("div",{className:"relative flex-shrink-0 "},(0,r.createElement)("div",{className:"flex aspect-w-7 aspect-h-5 sm:aspect-h-6 w-full h-0"},(0,r.createElement)("div",{className:"bg-gray-300"},(null==_?void 0:_.sourceUrl)&&(0,r.createElement)("img",{className:"!w-full !h-full object-cover",src:null==_?void 0:_.sourceUrl}))),(0,r.createElement)("div",{className:"absolute top-3 inset-x-3 flex"},(0,r.createElement)("div",{className:" py-1 px-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium"},(0,r.createElement)("i",{className:"las la-angle-right "})))),(0,r.createElement)("div",{className:"-mt-8 m-8 text-center"},(0,r.createElement)(a.Z,{containerClassName:"ring-2 ring-white",sizeClass:"w-16 h-16 text-2xl",radius:"rounded-full",imgUrl:(null==E?void 0:E.sourceUrl)||(null==l?void 0:l.url),userName:m}),(0,r.createElement)("div",{className:"mt-3"},(0,r.createElement)("h2",{className:"text-base font-medium"},(0,r.createElement)("span",{className:"line-clamp-1"},s)),(0,r.createElement)("span",{className:"block mt-1 text-sm text-neutral-500 dark:text-neutral-400"},f))))}},3398:function(e,n,t){var r=t(9307),a=(t(9196),t(5591));n.Z=e=>{let{className:n="",author:t}=e;if(!t)return null;const{avatar:l,id:o,name:s,ncUserMeta:c,url:u,uri:i,userId:d,username:m}=t,{color:g,featuredImage:E,ncBio:_}=c;return(0,r.createElement)("a",{href:u+i,className:`nc-CardAuthorBox flex flex-col items-center justify-center text-center px-3 py-5 sm:px-6 sm:py-7  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${n}`,"data-nc-id":"CardAuthorBox"},(0,r.createElement)(a.Z,{sizeClass:"w-20 h-20 text-2xl",radius:"rounded-full",imgUrl:null==l?void 0:l.url,userName:m}),(0,r.createElement)("div",{className:"mt-3"},(0,r.createElement)("h2",{className:"text-base font-medium"},(0,r.createElement)("span",{className:"line-clamp-1"},s)),(0,r.createElement)("span",{className:"block mt-1 text-sm text-neutral-500 dark:text-neutral-400"},_)),(0,r.createElement)("div",{className:"py-2 px-4 mt-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium"},999," ",(0,r.createElement)("i",{className:"las la-angle-right text-yellow-600 ml-3"})))}},6981:function(e,n,t){var r=t(9307);t(9196),n.Z=()=>(0,r.createElement)("div",{className:"inline-flex flex-col items-center justify-center text-center  pb-10"},(0,r.createElement)("img",{src:ncmazcoreJsData.img_empty_png,className:"w-36 sm:w-40",alt:"empty state"}),(0,r.createElement)("span",{className:"text-sm block text-neutral-500"},"Nothing we found!"))},5702:function(e,n,t){var r=t(7462),a=t(9307),l=(t(9196),t(3492));n.Z=e=>{let{children:n,desc:t="Discover the most outstanding articles in all topics of life. ",className:o="mb-12 md:mb-16 text-neutral-900 dark:text-neutral-50",isCenter:s=!1,hasNextPrev:c=!1,...u}=e;return n||t?(0,a.createElement)("div",{className:`nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between ${o}`},(0,a.createElement)("div",{className:s?"text-center w-full max-w-2xl mx-auto ":"max-w-2xl"},(0,a.createElement)("h2",(0,r.Z)({className:"!text-3xl md:!text-4xl !font-semibold !m-0"},u),n||"Section Heading"),t&&(0,a.createElement)("span",{className:"!mt-2 md:!mt-3 !font-normal block !text-base sm:!text-xl text-neutral-500 dark:text-neutral-400"},t)),c&&!s&&(0,a.createElement)("div",{className:"mt-4 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0"},(0,a.createElement)(l.Z,{onClickNext:()=>{},onClickPrev:()=>{}}))):null}},3492:function(e,n,t){var r=t(9307);t(9196),n.Z=e=>{let{containerClassName:n="",onClickNext:t=(()=>{}),onClickPrev:a=(()=>{}),btnClassName:l="w-10 h-10",onlyNext:o=!1,onlyPrev:s=!1}=e;return(0,r.createElement)("div",{className:`nc-NextPrev relative flex items-center text-neutral-900 dark:text-neutral-300 ${n}`,"data-nc-id":"NextPrev","data-glide-el":"controls"},!o&&(0,r.createElement)("button",{className:`${l} ${s?"":"mr-[6px]"} bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none`,onClick:a,title:"Prev","data-glide-dir":"<"},(0,r.createElement)("i",{className:"las la-angle-left"})),!s&&(0,r.createElement)("button",{className:`${l} bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none`,onClick:t,title:"Next","data-glide-dir":">"},(0,r.createElement)("i",{className:"las la-angle-right"})))}}}]);
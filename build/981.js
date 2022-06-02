"use strict";(self.webpackChunkncmaz_core=self.webpackChunkncmaz_core||[]).push([[981],{981:function(e,t,l){l.r(t),l.d(t,{default:function(){return g}});var a=l(9307),r=l(9196),n=l(5736),c=l(5609),s=l(2175),o=l(9053),i=l(5702),m=e=>{let{className:t=""}=e;return(0,a.createElement)("div",{className:`nc-NcPlayIcon bg-white bg-opacity-30 backdrop-filter backdrop-blur rounded-full w-20 h-20 p-3 lg:w-52 lg:h-52 lg:p-12 ${t}`,"data-nc-id":"NcPlayIcon"},(0,a.createElement)("div",{className:"w-full h-full bg-white rounded-full text-primary-500 relative"},(0,a.createElement)("span",{className:"absolute inset-0 flex items-center justify-center"},(0,a.createElement)("svg",{className:"w-8 h-8 md:w-12 md:h-12",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24"},(0,a.createElement)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M18.25 12L5.75 5.75V18.25L18.25 12Z"})))))},d=e=>{let{className:t="w-8 h-8 md:w-10 md:h-10",iconClass:l="w-5 h-5"}=e;return(0,a.createElement)("div",{className:`nc-NcPlayIcon2 bg-white relative rounded-full shadow-inner ${t}`,"data-nc-id":"NcPlayIcon2"},(0,a.createElement)("span",{className:"absolute inset-0 flex items-center justify-center text-primary-500"},(0,a.createElement)("svg",{className:l,width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24"},(0,a.createElement)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1",d:"M18.25 12L5.75 5.75V18.25L18.25 12Z"}))))},u=e=>{let{videoIds:t=[],className:l="",heading:n="",subHeading:c=""}=e;const[s,o]=(0,r.useState)(!1),[u,g]=(0,r.useState)(0);return(0,a.createElement)("div",{className:`nc-SectionVideos ${l}`},(0,a.createElement)(i.Z,{desc:c},n),(0,a.createElement)("div",{className:"flex flex-col relative sm:pr-4 sm:py-4 md:pr-6 md:py-6 xl:pr-14 xl:py-14 lg:flex-row"},(0,a.createElement)("div",{className:"absolute -top-4 -bottom-4 -right-4 w-2/3 rounded-3xl bg-primary-100 bg-opacity-40 z-0 sm:rounded-[50px] md:top-0 md:bottom-0 md:right-0 xl:w-1/2 dark:bg-neutral-800 dark:bg-opacity-40"}),(0,a.createElement)("div",{className:"flex-grow relative pb-2 sm:pb-4 lg:pb-0 lg:pr-5 xl:pr-6"},(()=>{const e=t[u];return(0,a.createElement)("div",{className:"group aspect-w-16 aspect-h-16 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden border-4 border-white dark:border-neutral-900 sm:rounded-[50px] sm:border-[10px]"},s?(0,a.createElement)("iframe",{src:`https://www.youtube.com/embed/${e}?autoplay=1`,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):(0,a.createElement)(a.Fragment,null,(0,a.createElement)("div",{onClick:()=>o(!0),className:"cursor-pointer absolute inset-0 flex items-center justify-center z-10"},(0,a.createElement)(m,null)),(0,a.createElement)("div",{className:"absolute inset-0 "},(0,a.createElement)("img",{className:"object-cover w-full h-full transform transition-transform group-hover:scale-105 duration-300 nc-will-change-transform",src:`https://img.youtube.com/vi/${e}/maxresdefault.jpg`}))))})()),(0,a.createElement)("div",{className:"flex-shrink-0 grid gap-2 grid-cols-4 sm:gap-6 lg:grid-cols-1 lg:w-36 xl:w-40"},t.map(((e,t)=>t===u?null:(0,a.createElement)("div",{className:"group relative aspect-h-16 aspect-w-16 rounded-2xl cursor-pointer overflow-hidden sm:aspect-h-12 sm:rounded-3xl lg:aspect-h-9",onClick:()=>{g(t),!s&&o(!0)},key:String(t)},(0,a.createElement)("div",{className:"absolute inset-0 flex items-center justify-center z-10"},(0,a.createElement)(d,null)),(0,a.createElement)("div",{className:"absolute inset-0  w-full h-full"},(0,a.createElement)("img",{className:"object-cover w-full h-full transform transition-transform group-hover:scale-110 duration-300 nc-will-change-transform",src:`https://img.youtube.com/vi/${e}/mqdefault.jpg`}))))))))};function g(e){const{attributes:t,setAttributes:l,clientId:r}=e,{hasBackground:i,heading:m,subHeading:d,videoIds:g}=t;return(0,a.createElement)("div",(0,s.useBlockProps)(),(0,a.createElement)(s.InspectorControls,{key:"setting"},(0,a.createElement)("div",{"data-type":"ncmaz-core/sidebar-settings"},(0,a.createElement)(c.Panel,{header:"Section settings"},(0,a.createElement)(c.PanelBody,{initialOpen:!0,title:"General settings"},(0,a.createElement)(c.PanelRow,null,(0,a.createElement)("div",null,(0,a.createElement)(c.TextControl,{label:"Heading",value:m,onChange:e=>l({heading:e})}),(0,a.createElement)(c.TextareaControl,{label:"Sub heading",value:d,onChange:e=>l({subHeading:e})}),(0,a.createElement)("div",{className:"mb-3"},(0,a.createElement)(c.FormTokenField,{value:g,suggestions:[],onChange:e=>l({videoIds:e}),label:(0,n.__)("Video IDs","ncmaz-core"),placeholder:(0,n.__)("Enter youtube video id","ncmaz-core")})),(0,a.createElement)("div",{className:"w-full space-x-3 flex "},(0,a.createElement)(c.FormToggle,{checked:i,onChange:()=>l({hasBackground:!i}),label:(0,n.__)("Enable Background","ncmaz-core")}),(0,a.createElement)("legend",null,(0,n.__)("Enable Background","ncmaz-core"))))))))),(0,a.createElement)("div",{className:i?"py-16":""},i&&(0,a.createElement)(o.Z,null),(0,a.createElement)(u,{heading:m,subHeading:d,videoIds:g})))}},5702:function(e,t,l){var a=l(7462),r=l(9307),n=(l(9196),l(3492));t.Z=e=>{let{children:t,desc:l="Discover the most outstanding articles in all topics of life. ",className:c="mb-12 md:mb-16 text-neutral-900 dark:text-neutral-50",isCenter:s=!1,hasNextPrev:o=!1,...i}=e;return t||l?(0,r.createElement)("div",{className:`nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between ${c}`},(0,r.createElement)("div",{className:s?"text-center w-full max-w-2xl mx-auto ":"max-w-2xl"},(0,r.createElement)("h2",(0,a.Z)({className:"!text-3xl md:!text-4xl !font-semibold !m-0"},i),t||"Section Heading"),l&&(0,r.createElement)("span",{className:"!mt-2 md:!mt-3 !font-normal block !text-base sm:!text-xl text-neutral-500 dark:text-neutral-400"},l)),o&&!s&&(0,r.createElement)("div",{className:"mt-4 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0"},(0,r.createElement)(n.Z,{onClickNext:()=>{},onClickPrev:()=>{}}))):null}},3492:function(e,t,l){var a=l(9307);l(9196),t.Z=e=>{let{containerClassName:t="",onClickNext:l=(()=>{}),onClickPrev:r=(()=>{}),btnClassName:n="w-10 h-10",onlyNext:c=!1,onlyPrev:s=!1}=e;return(0,a.createElement)("div",{className:`nc-NextPrev relative flex items-center text-neutral-900 dark:text-neutral-300 ${t}`,"data-nc-id":"NextPrev","data-glide-el":"controls"},!c&&(0,a.createElement)("button",{className:`${n} ${s?"":"mr-[6px]"} bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none`,onClick:r,title:"Prev","data-glide-dir":"<"},(0,a.createElement)("i",{className:"las la-angle-left"})),!s&&(0,a.createElement)("button",{className:`${n} bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none`,onClick:l,title:"Next","data-glide-dir":">"},(0,a.createElement)("i",{className:"las la-angle-right"})))}}}]);
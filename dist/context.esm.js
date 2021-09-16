function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var context = createCommonjsModule(function (module, exports) {
!function(e,t){for(var n in t)e[n]=t[n];}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){const r=n(1),a=n(2),{CONTEXT_URL_V1:o,CBORLD_VALUE:c}=a,s=new Map;s.set(o,r);const i=new Map;i.set(o,c),e.exports={constants:a,contexts:s,appContextMap:i,CONTEXT_URL_V1:o,CONTEXT_V1:r};},function(e,t,n){e.exports={"@context":{"@protected":!0,id:"@id",type:"@type",schema:"http://schema.org/",obi:"https://w3id.org/openbadges#",dcc:"https://w3id.org/dcc/v1#",EducationalOccupationalCredential:"schema:EducationalOccupationalCredential",EducationalOccupationalProgram:"schema:EducationalOccupationalProgram",Course:"schema:Course",CourseInstance:"schema:CourseInstance",Person:"schema:Person",name:"schema:name",url:"schema:url",identifier:"schema:identifier",courseCode:"schema:courseCode",numberOfCredits:"schema:numberOfCredits",startDate:"schema:startDate",endDate:"schema:endDate",value:"schema:value",educationalCredentialAwarded:"schema:educationalCredentialAwarded",hasCourseInstance:"schema:hasCourseInstance",description:{"@id":"schema:description"},image:{"@id":"schema:image","@type":"@id"},awardedOnCompletionOf:{"@reverse":"schema:educationalCredentialAwarded"},hasCredential:"schema:hasCredential",assertion:"dcc:assertion",Issuer:"obi:Issuer",ProgramCompletionCredential:"dcc:ProgramCompletionCredential",CourseCompletionCredential:"dcc:CourseCompletionCredential",LearningCredential:"dcc:LearningCredential",Assertion:"dcc:Assertion"}};},function(e,t,n){e.exports={CONTEXT_FILENAME:"dcc-context-v1.json",CONTEXT_URL_V1:"https://w3id.org/dcc/v1",CBORLD_VALUE:32769};}]));
});

var context$1 = unwrapExports(context);
var context_1 = context.contexts;
var context_2 = context.constants;
var context_3 = context.CONTEXT_V1;
var context_4 = context.CONTEXT_URL_V1;
var context_5 = context.appContextMap;

export { context_4 as CONTEXT_URL_V1, context_3 as CONTEXT_V1, context_5 as appContextMap, context_2 as constants, context_1 as contexts, context$1 as default };

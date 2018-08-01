// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('antizer_examples.common');
goog.require('cljs.core');
goog.require('cljs.core.constants');
antizer_examples.common.form_style = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label_DASH_col,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$span,(6)], null),cljs.core.cst$kw$wrapper_DASH_col,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$span,(13)], null)], null);
antizer_examples.common.pagination = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$show_DASH_size_DASH_changer,true,cljs.core.cst$kw$page_DASH_size_DASH_options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["5","10","20"], null),cljs.core.cst$kw$show_DASH_total,(function (p1__18093_SHARP_){
return ["Total: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18093_SHARP_)," users"].join('');
})], null);
antizer_examples.common.comparison = (function antizer_examples$common$comparison(data1,data2,field){
return cljs.core.compare(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0)),field),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0)),field));
});
antizer_examples.common.columns = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Name",cljs.core.cst$kw$dataIndex,"name",cljs.core.cst$kw$sorter,(function (p1__18094_SHARP_,p2__18095_SHARP_){
return antizer_examples.common.comparison(p1__18094_SHARP_,p2__18095_SHARP_,cljs.core.cst$kw$name);
})], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Age",cljs.core.cst$kw$dataIndex,"age",cljs.core.cst$kw$sorter,(function (p1__18096_SHARP_,p2__18097_SHARP_){
return antizer_examples.common.comparison(p1__18096_SHARP_,p2__18097_SHARP_,cljs.core.cst$kw$age);
})], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Address",cljs.core.cst$kw$dataIndex,"address",cljs.core.cst$kw$sorter,(function (p1__18098_SHARP_,p2__18099_SHARP_){
return antizer_examples.common.comparison(p1__18098_SHARP_,p2__18099_SHARP_,cljs.core.cst$kw$address);
})], null)], null);
antizer_examples.common.people = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Tracey Davidson",cljs.core.cst$kw$age,(43),cljs.core.cst$kw$address,"5512 Pockrus Page Rd"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$name,"Pierre de Wiles",cljs.core.cst$kw$age,(41),cljs.core.cst$kw$address,"358 Fermat's St"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$name,"Lydia Weaver",cljs.core.cst$kw$age,(23),cljs.core.cst$kw$address,"1251 Fourth St"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(4),cljs.core.cst$kw$name,"Willie Reynolds",cljs.core.cst$kw$age,(26),cljs.core.cst$kw$address,"2984 Beechcrest Rd"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(5),cljs.core.cst$kw$name,"Richard Perelman",cljs.core.cst$kw$age,(51),cljs.core.cst$kw$address,"2003 Poincar\u00E9 Ricci Rd"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(6),cljs.core.cst$kw$name,"Srinivasa Ramanujan",cljs.core.cst$kw$age,(32),cljs.core.cst$kw$address,"1729 Taxi Cab St"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(7),cljs.core.cst$kw$name,"Zoe Cruz",cljs.core.cst$kw$age,(31),cljs.core.cst$kw$address,"8593 Pine Rd"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(8),cljs.core.cst$kw$name,"Adam Turing",cljs.core.cst$kw$age,(41),cljs.core.cst$kw$address,"1936 Automata Lane"], null)], null);
antizer_examples.common.set_locale = (function antizer_examples$common$set_locale(country,locale_atom){
var locale_val = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(country,"zh_CN"))?null:country);
return cljs.core.reset_BANG_(locale_atom,locale_val);
});

import fetch from '../config/fetch'

/**
 * 获取最新列表   
 */

export const zuixin = () => fetch('/zuixin');


/**
 * 获取新车列表
 */

export const xinche = () => fetch('/xinche');


/**
 * 获取导购列表
 */

export const daogou = () => fetch('/daogou');


/**
 * 获取用车列表
 */

export const yongche = () => fetch('/yongche');


/**
 * 获取行业列表
 */

export const hangye= () => fetch('/hangye');


/**
 * 获取试驾列表
 */

export const shijia= () => fetch('/shijia');


/**
 * 获取改装列表
 */

export const gaizhuang= () => fetch('/gaizhuang');


/**
 * 获取智能列表
 */

export const zhineng= () => fetch('/zhineng');


/**
 * 获取问答列表
 */

export const wenda= () => fetch('/wenda');


/**
* 获取牛车大讲堂
*/


export const jiangtang = () => fetch('/jiangtang');




/**
 * 获取牛车百嗑
 */


export const baike = () => fetch('/baike');




/**
 * 获取改装集锦
 */


export const jijin = () => fetch('/jijin');




/**
 * 获取牛车实验室
 */


export const shiyan = () => fetch('/shiyan');

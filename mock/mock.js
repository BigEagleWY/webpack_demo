var mock = require('mockjs');

/**
 * mock.mock()
 * 
 * url -- ajax地址
 * type -- ajax请求的类型(get or post)
 * template -- 匹配到符合上述两个数据的 ajax 请求时返回 template 中的数据
 * 
 */
mock.mock(url,type,template);


/**
 * mock.setup()
 * mock的配置项
 * timeout -- 设置多少毫秒延迟之后返回响应数据，默认是10-100
 */
mock.setup({
    timeout:400
});

/**
 * mock.random 占位符，用于生成接口中用以返回的各种随机数据
 */
mock.random


/**
 * mock.valid 校验真实数据和末班数据是否匹配
 */
mock.valid();
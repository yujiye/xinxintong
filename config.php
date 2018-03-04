<?php
/**
 * for long time execution.
 */
@set_time_limit(0);
/**
 * local timezone
 */
date_default_timezone_set('Asia/Shanghai');
/**
 * character set
 */
ini_set('default_charset', 'utf-8');
/**
 * memory limit
 */
!defined('SAE_TMP_PATH') && ini_set('memory_limit', '-1');
/**
 * database resource.
 */
error_reporting(E_ERROR); // 控制系统的报错信息，否则数据库连接失败会报warning
/**
 * 加载本地化设置
 */
file_exists(dirname(__FILE__) . '/cus/app.php') && include_once dirname(__FILE__) . '/cus/app.php';
/*********************************************
 * 常量定义不允许被覆盖，需要检查常量是否已经被定义
 *********************************************/
/**
 * 定义应用的主机名
 */
!defined('APP_HTTP_HOST') && define('APP_HTTP_HOST', $_SERVER['HTTP_HOST']);
/**
 * 定义应用的标题
 */
!defined('APP_TITLE') && define('APP_TITLE', '信信通');
/**
 * 定义应用的logo
 */
!defined('APP_LOGO') && define('APP_LOGO', '/static/img/logo.png');
/**
 * 定义应用登录注册也的bannner图
 */
!defined('APP_ACCESS_BANNER') && define('APP_ACCESS_BANNER', '/static/img/access.png');
/**
 * 微信要求采用TLSv1
 */
!defined('CURL_SSLVERSION_TLSv1') && define('CURL_SSLVERSION_TLSv1', 1);
/**
 * 是否缺省返回autoid
 */
define('DEFAULT_DB_AUTOID', true);
/**
 * cookie
 */
/* 定义 Cookies 作用域 */
define('G_COOKIE_DOMAIN', '');
/* 定义 Cookies 前缀 */
define('G_COOKIE_PREFIX', 'xxt');
/* 定义应用加密 KEY */
define('G_COOKIE_HASH_KEY', 'gzuhhqnckcryrrd');
/* 用户信息在cookie中保存的天数 */
define('TMS_COOKIE_SITE_USER_EXPIRE', 3650);
define('TMS_COOKIE_SITE_LOGIN_EXPIRE', 7);
/* 重新绑定公众号未关注用户信息的间隔 */
define('TMS_COOKIE_SITE_USER_BIND_INTERVAL', 600);
/**
 * app's local position.
 */
/* 应用程序起始目录 */
define('TMS_APP_DIR', dirname(__FILE__));
/* 应用程序视图名称，起始路径为：TMS_APP_DIR.'/views/'.TMS_APP_VIEW_NAME */
!defined('TMS_APP_VIEW_NAME_DEFAULT') && define('TMS_APP_VIEW_NAME_DEFAULT', 'default');
!defined('TMS_APP_VIEW_NAME') && define('TMS_APP_VIEW_NAME', TMS_APP_VIEW_NAME_DEFAULT);
/* 应用程序模版起始目录 */
define('TMS_APP_TEMPLATE_DEFAULT', dirname(__FILE__) . '/_template');
!defined('TMS_APP_TEMPLATE') && define('TMS_APP_TEMPLATE', TMS_APP_TEMPLATE_DEFAULT);
/**
 * app's uri.
 */
!defined('TMS_APP_URI') && define('TMS_APP_URI', '');
/**
 * prefix for rest.
 * 需要和web服务器的配置一致
 */
!defined('TMS_APP_API_PREFIX') && define('TMS_APP_API_PREFIX', '/rest'); // 前缀API前缀
!defined('TMS_APP_VIEW_PREFIX') && define('TMS_APP_VIEW_PREFIX', '/page'); // 请求页面前缀

/***********************
 * 设置平台入口
 ***********************/
/**
 * 平台首页，未指定，或未找到指定地址时跳转到首页。
 */
!defined('TMS_APP_HOME') && define('TMS_APP_HOME', '/rest/home');
/**
 * 用户未认证通过时缺省页
 */
!defined('TMS_APP_UNAUTH') && define('TMS_APP_UNAUTH', '/rest/site/fe/user/access');
define('TMS_APP_AUTHED', '/pl/fe'); // 认证通过后的缺省页

/*************************
 * default upload directory
 *************************/
if (defined('SAE_TMP_PATH')) {
	define('TMS_UPLOAD_DIR', SAE_TMP_PATH);
} else {
	define('TMS_UPLOAD_DIR', 'kcfinder/upload/');
}
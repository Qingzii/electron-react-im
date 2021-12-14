import $http from './http'
export const API = {
    liveAll: data => $http('get', '/app/live-all', data), //全部直播(v2)

    bgimgList: data => $http('get', '/home/bgimg-list', data), //首页背景/直播间背景

    subCategories: data => $http('get', '/app/sub-categories', data), //热门分类(v2)

    attentionInfo: data => $http('get', '/app/attention-info', data), //我的关注信息(v2)

    // matchNow: (data) => $http('get', '/match/now', data),//直播赛程(v2)

    categoryData: data => $http('get', '/app/category-data', data), //分类数据(v2)

    attentionLive: data => $http('get', '/app/attention-live', data), //我的关注直播数据(v2)

    attentionHistory: data => $http('get', '/app/attention-history', data), //我的关注历史数据(v2)

    advertIndex: data => $http('get', '/advert/index', data), //广告位数据

    topMenu: data => $http('get', '/app/top-menu', data), //顶部菜单分类

    checkInInfo: data => $http('get', '/user/check-in-info', data), //签到数据(v2)

    checkInActivity: data => $http('get', '/user/check-in-activity', data), //签到活动信息(v2)

    coinRecords: data => $http('get', '/shop/coin-records', data), //虚拟豆记录

    coinRecordDetail: data => $http('post', '/shop/coin-record-detail', data), //虚拟豆记录详情

    taskIndex: data => $http('post', '/task/index', data), //获取任务列表

    taskGetBonus: data => $http('post', '/task/get-bonus', data), //领取任务奖励

    liveQuestion: data => $http('post', '/quiz/live-question', data), //获取直播竞猜题

    newQuestion: data => $http('post', '/quiz/new-question', data), //创建竞猜问题

    cancelQuestion: data => $http('post', '/quiz/cancel-question', data), //取消竞猜问题

    quizParams: data => $http('get', '/quiz/params', data), //竞猜参数

    quizJoin: data => $http('post', '/quiz/join', data), //参与竞猜

    closeQuestion: data => $http('post', '/quiz/close-question', data), //结算竞猜问题

    voidQuestion: data => $http('post', '/quiz/void-question', data), //流局竞猜问题

    quizRecords: data => $http('get', '/quiz/records', data), //竞猜记录

    recordDetail: data => $http('post', '/quiz/record-detail', data), //竞猜记录详情

    manageList: data => $http('get', '/quiz/manage-list', data), //竞猜管理

    goodsList: data => $http('get', '/shop/goods-list', data), //商品列表

    goodsBuy: data => $http('post', '/shop/goods-buy', data), //购买商品

    buyRecord: data => $http('get', '/shop/buy-record', data), //购买记录

    buyRecordDetail: data => $http('post', '/shop/buy-record-detail', data), //商品订单详情

    userGiftList: data => $http('get', '/live/user-gift-list', data), //用户礼物列表

    useGift: data => $http('post', '/live/use-gift', data), //使用礼物

    sendCode: data => $http('post', '/site/send-code', data), //发送验证码

    captcha: data => $http('get', '/site/captcha', data), //图形验证码

    indexPc1: data => $http('get', '/home/index-pc1', data), //首页数据(PC01)

    indexPc2: data => $http('get', '/home/index-pc2', data), //首页数据(PC02)

    banners: data => $http('get', '/home/banners', data), //首页Banners

    cateData: data => $http('get', '/home/cate-data', data), //分类数据

    categories: data => $http('post', '/home/categories', data), //所有分类

    homeLive: data => $http('get', '/home/live', data), //直播详情

    homeRank: data => $http('get', '/home/rank', data), //直播排行榜

    anchorRank: data => $http('get', '/home/anchor-rank', data), //明星主播排行榜

    giftList: data => $http('get', '/live/gift-list', data), //礼物列表

    attention: data => $http('post', '/user/attention', data), //关注主播(v3)

    search: data => $http('post', '/home/search', data), //检索结果

    friendLinks: data => $http('get', '/home/friend-links', data), //友情链接

    dlConfig: data => $http('get', '/home/dl-config', data), //下载地址配置

    homePact: data => $http('get', '/home/pact', data), //网站协议(v3)

    activityIndex: data => $http('get', '/activity/index', data), //活动列表

    checkInDetail: data => $http('post', '/activity/check-in-detail', data), //签到活动详情|签到活动领取奖品

    signUpBonus: data => $http('get', '/activity/sign-up-bonus', data), //注册送活动详情

    matchLive: data => $http('get', '/match/live', data), //可关联比赛

    matchTypes: data => $http('get', '/match/types', data), //赛事分类

    // matchList: (data) => $http('get', '/match/list', data),//赛程列表

    bookMatch: data => $http('post', '/user/book-match', data), //赛事预约(v2)

    bulletinIndex: data => $http('get', '/bulletin/index', data), //首页公告

    bulletinList: data => $http('get', '/bulletin/list', data), //公告列表

    bulletinDetail: data => $http('get', '/bulletin/detail', data), //公告详情PC

    rechargeIndex: data => $http('get', '/recharge/index', data), //充值参数获取(v3)

    exchangeParams: data => $http('get', '/recharge/exchange-params', data), //虚拟豆兑换参数(v3)

    exchangeShopCoin: data => $http('post', '/recharge/exchange-shop-coin', data), //虚拟豆兑换(v3)

    rechargeCards: data => $http('get', '/recharge/cards', data), //线下转账银行卡

    rechargePay: data => $http('post', '/recharge/pay', data), //提交充值

    rechargeRecord: data => $http('get', '/recharge/record', data), //充值记录

    rechargeCheck: data => $http('post', '/recharge/check', data), //订单检查

    rechargeDetail: data => $http('post', '/recharge/detail', data), //订单详情

    login: data => $http('post', '/site/login', data), //用户登录

    forgetPassword: data => $http('post', '/site/forget-password', data), //找回密码

    modifyInfo: data => $http('post', '/user/modify-info', data), //修改资料

    userInfo: data => $http('get', '/user/info', data), //用户信息(v3)

    balance: data => $http('get', '/user/balance', data), //虚拟币余额(v3)

    myAttention: data => $http('get', '/user/my-attention', data), //关注列表

    logout: data => $http('post', '/user/logout', data), //退出登录

    changePassword: data => $http('post', '/user/change-password', data), //修改密码

    uploadAvatar: data => $http('post', '/user/upload-avatar', data), //修改头像

    anchorApply1: data => $http('post', '/user/anchor-apply1', data), //主播认证申请1

    anchorApply2: data => $http('post', '/user/anchor-apply2', data), //主播认证申请2

    anchorStatus: data => $http('post', '/user/anchor-status', data), //主播认证结果

    getLivePage: data => $http('post', '/anchor/get-live-page', data), //获取主播房间封面图

    setLivePage: data => $http('post', '/anchor/set-live-page', data), //设置主播房间封面图

    openLive: data => $http('get', '/anchor/open-live', data), //直播配置(开播1)

    livePic: data => $http('post', '/anchor/live-pic', data), //直播封面图(开播2)

    setRoom: data => $http('post', '/anchor/set-room', data), //配置房间(开播3)

    stopLive: data => $http('get', '/anchor/stop-live', data), //关闭直播

    liveRecords: data => $http('get', '/anchor/live-records', data), //直播记录

    managerRooms: data => $http('get', '/live/manager-rooms', data), //房间管理

    checkIn: data => $http('post', '/user/check-in', data), //签到接口

    checkInData: data => $http('post', '/user/check-in-data', data), //签到记录

    setAddress: data => $http('post', '/user/set-address', data), //新增(修改)用户地址

    getAddress: data => $http('get', '/user/address', data), //获取收货地址

    prizeRecord: data => $http('get', '/user/prize-record', data), //奖品记录

    prizestatus: data => $http('get', '/user/prize-status', data), //奖品详细

    giftSendRecord: data => $http('get', '/live/gift-send-record', data), //礼物赠送记录

    giftSendDetail: data => $http('get', '/live/gift-send-detail', data), //礼物赠送详情

    giftAcceptRecord: data => $http('get', '/live/gift-accept-record', data), //礼物记录(收到)

    giftAcceptDetail: data => $http('get', '/live/gift-accept-detail', data), //礼物记录(收到)详情

    chatHistory: data => $http('post', '/live/chat-history', data), //历史聊天记录

    sendMessage: data => $http('post', '/live/send-message', data), //发送消息(http)

    setManager: data => $http('post', '/live/set-manager', data), //设置房间管理员

    mutedList: data => $http('post', '/live/muted-list', data), //禁言列表

    liveMuted: data => $http('post', '/live/muted', data), //禁言操作

    delMessage: data => $http('post', '/live/del-message', data), //删除用户消息

    quitManager: data => $http('post', '/live/quit-manager', data), //退出房间管理

    checkStatus: data => $http('post', '/live/check-status', data), //检查用户禁言状态

    forceLeaveRoom: data => $http('post', '/live/force-leave-room', data), //踢出房间

    blackUser: data => $http('post', '/live/black-user', data), //拉黑用户

    managerList: data => $http('post', '/live/manager-list', data), //房管列表

    blackList: data => $http('post', '/live/black-list', data), //黑名单列表

    cancelBlack: data => $http('post', '/live/cancel-black', data), //取消黑名单

    disableUser: data => $http('post', '/live/disable-user', data), //禁用用户

    sendGift: data => $http('post', '/live/send-gift', data), //赠送礼物

    changeNotice: data => $http('post', '/live/change-notice', data), //修改公告

    teamRanking: data => $http('get', '/match/team-ranking', data), //积分榜

    matchListSimple: data => $http('get', '/match/match-list-simple', data), //请求比赛数据

    intelligenceList: data => $http('get', '/match/intelligence-list', data), //情报列表

    matchNow: data => $http('get', '/match/now', data), //根据比赛ID获取直播间列表

    intelligenceDetail: data => $http('get', '/match/intelligence-detail', data), //情报-详情

    matchTypesV2: data => $http('get', '/match/types-v2', data), //联赛类型

    matchList: data => $http('get', '/match/list', data), //赛程列表

    allTypes: data => $http('get', '/match/all-types', data), //所有联赛列表
}

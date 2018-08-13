class SdkManager {

  constructor() {
    this.connectSDK()
  }

  nim = null

  //网易云SDK连接
  connectSDK() {
    var appkey = '45c6af3c98409b18a84451215d0bdd6e';
    var account = 'greatcs4';
    var token = 'e10adc3949ba59abbe56e057f20f883e';
    this.nim = SDK.NIM.getInstance({
      appKey: appkey,
      account: account,
      token: token,
      onconnect: this.onConnect,
      onwillreconnect: this.onWillReconnect,
      ondisconnect: function (obj) {
        console.log('SDK 连接断开', obj)
      },
      onerror: function (error) {
        console.log('SDK 连接失败', error)
      }
    })
  }
  
  onConnect() {
    console.log('连接成功');
  }

  onWillReconnect() {
    // 此时说明 SDK 已经断开连接, 请开发者在界面上提示用户连接已断开, 而且正在重新建立连接
    console.log('即将重连');
    console.log(obj.retryCount);
    console.log(obj.duration);
  }

  startWhiteboardById(id) {
    let container = document.getElementById(id)
    container.style.backgroundColor = "#fff"
    //修改直播状态为直播中
    this.onLive = true
    // step1 初始化白板实例
    const whiteboard = WhiteBoard.getInstance({
      nim: window.sdkManager.nim, //nim实例
      debug: true
    })
    // step2 初始化绘制插件
    const drawPlugin = new DrawPlugin(container, {
      UID: whiteboard.getAccount(),
      nim: window.sdkManager.nim // nim实例
    })
    drawPlugin.enableDraw(true)
    // step3 注册绘制插件的data事件，并交由白板转发数据
    drawPlugin.on("data", obj => {
      let { toAccount = 0, data } = obj
      whiteboard.sendData({ toAccount, data })
    })
    // step4 注册白板data事件，并交由绘制插件执行
    whiteboard.on("data", obj => {
      console.log("白板step4:", obj)
      drawPlugin.act({ account: obj.account, data: obj.data })
    })
  }
}

export default new SdkManager()
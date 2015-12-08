<<<<<<< HEAD
(function(ulizaplayer,window) {
  var speedButtonSetupPlugIn = function(obj) {

    //javascript call back function start
    var javascriptCallback = function(playerId, event, data) {
      if (event !== "ready") return;
      ulizaplayer(playerId).removeAllButton();
      try {
        var PlaybackRateData = ulizaplayer(playerId).getPlaybackRateData();
        for (var i = 0; i < PlaybackRateData.length; i++) {
        var padding = i * obj.pluginSetup.padding,
            //img url 生成
            url = obj.pluginSetup.imgUrl.split(/(?=\.[^.]+$)/),
            urlCreate = url[0] + PlaybackRateData[i].playbackrate + url[1],
            imgUrl = urlCreate.toString(),
            //ボタンオブジェクト生成
            speedButtonObject;

          //ボタンonclick 関数
          function speedButtonClick(speedButtonId) {
            var PlaybackRate = speedButtonId.split("_"),
                crentPlaybackRate = ulizaplayer(playerId).getPlaybackRate();

                //button click 処理 start
                //click button用 object 作成
                var clickButton = {
                  id:"click_" + this.id,
                  url:this.url,
                  layoutInfo: {
                    right: this.layoutInfo.right,
                    top: this.layoutInfo.top+100,
                    left: this.layoutInfo.left,
                    alpha: 1
                  },
                  style: {　
                    up: {　　
                      x: this.style.up.x,
                      y: this.style.up.y,
                      width: this.style.up.width,
                      height: this.style.up.height,
                      alpha: 1
                    }
                  }
                };
                //click されたボタン消去
                ulizaplayer(playerId).removeButton(speedButtonId);
                //click後　のボタン消去
                ulizaplayer(playerId).removeButton("click_speed_"+crentPlaybackRate);

                ulizaplayer(playerId).changePlaybackRate(Number(PlaybackRate[1]));

            //debug start log
            // console.log(re+"speedButtonId");
            // console.log(re2+"crentPlaybackRate");
            // console.log(crentPlaybackRate2);
            // console.log(clickButton);
            // console.log(this + "debug");
            // console.log(clickButton.id + "debug");
            // console.log(this.layoutInfo.top + "debug");
            //debug end

            //click用の button を埋め込み
            ulizaplayer(playerId).addButton(clickButton);

          };
          //button click 処理 end

          //ボタンオブジェクト生成
          if (!obj.pluginSetup.hasOwnProperty("style")) {
            speedButtonObject = {
              id: "speed_" + PlaybackRateData[i].playbackrate,
              url: imgUrl,
              onClick: speedButtonClick,
              layoutInfo: {
                right: obj.pluginSetup.right + padding,
                top: obj.pluginSetup.top,
                left: obj.pluginSetup.left + padding,
                alpha: 1
              }
            }
          }
          else {
            speedButtonObject = {
              id: "speed_" + PlaybackRateData[i].playbackrate,
              url: imgUrl,
              onClick: speedButtonClick,
              layoutInfo: {
                right: obj.pluginSetup.right + padding,
                top: obj.pluginSetup.top,
                left: obj.pluginSetup.left + padding,
                alpha: 1
              },
              style: {　
                up: {　　
                  x: obj.pluginSetup.style.up.x,
                  y: obj.pluginSetup.style.up.y,
                  　　width: obj.pluginSetup.style.up.width,
                  　　height: obj.pluginSetup.style.up.height,
                  alpha: 1　
                },
                　over: {　　
                  x: obj.pluginSetup.style.over.x,
                  y: obj.pluginSetup.style.over.y,
                  　　width: obj.pluginSetup.style.over.width,
                  　　height: obj.pluginSetup.style.over.height,
                  alpha: 1　
                },
                　down: {　　
                  x: obj.pluginSetup.style.down.x,
                  y: obj.pluginSetup.style.down.y,
                  　　width: obj.pluginSetup.style.down.width,
                  　　height: obj.pluginSetup.style.down.height,
                  alpha: 1
                }
              }
            }
          } //else

          //ボタン追加
          ulizaplayer(playerId).addButton(speedButtonObject);
=======
(function(ulizaplayer, window){
var speedButtonSetupPlugIn = function(obj) {
        var javascriptCallback = function javascriptCallback(playerId) {
                var PlaybackRateData = ulizaplayer(playerId).getPlaybackRateData();
                for (var i = 0; i < PlaybackRateData.length; i++) {
                    var padding = i * obj.pluginSetup.padding,
                        //img url 生成
                        url = obj.pluginSetup.imgUrl.split(/(?=\.[^.]+$)/),
                        urlCreate = url[0] + PlaybackRateData[i].playbackrate + url[1],
                        imgUrl = urlCreate.toString(),
                        //ボタンオブジェクト生成
                        speedButtonObject;
                     if(!obj.pluginSetup.hasOwnProperty('style')){
                       speedButtonObject = {
                         id:'speed_'+PlaybackRateData[i].playbackrate,
                         url:imgUrl,
                         onClick:speedButtonClick,
                         layoutInfo:{
                           right:obj.pluginSetup.right+padding,top:obj.pluginSetup.top,left:obj.pluginSetup.left+padding,alpha:1
                         }
                       }
                    }else{
                       speedButtonObject = {
                            id: 'speed_' + PlaybackRateData[i].playbackrate,
                            url: imgUrl,
                            onClick: speedButtonClick,
                            layoutInfo: {
                                right: obj.pluginSetup.right + padding,
                                top: obj.pluginSetup.top,
                                left: obj.pluginSetup.left + padding,
                                alpha:1
                            },
                            style: {　
                                up: {　　
                                    x: obj.pluginSetup.style.up.x,
                                    y: obj.pluginSetup.style.up.y,
                                    　　width: obj.pluginSetup.style.up.width,
                                    　　height: obj.pluginSetup.style.up.height,
                                    alpha: obj.pluginSetup.style.up.alpha　
                                },
                                　over: {　　
                                    x: obj.pluginSetup.style.over.x,
                                    y: obj.pluginSetup.style.over.y,
                                    　　width: obj.pluginSetup.style.over.width,
                                    　　height: obj.pluginSetup.style.over.height,
                                    alpha: obj.pluginSetup.style.over.alpha　
                                },
                                　down: {　　
                                    x: obj.pluginSetup.style.down.x,
                                    y: obj.pluginSetup.style.down.y,
                                    　　width: obj.pluginSetup.style.down.width,
                                    　　height: obj.pluginSetup.style.down.height,
                                    alpha: obj.pluginSetup.style.down.alpha
                                }
                            }
                        };
                        //ボタンonclick 関数
                    };

                    function speedButtonClick(speedButtonId) {
                            var PlaybackRate = speedButtonId.split('_');
                            ulizaplayer(playerId).removeButton(speedButtonId);　
                            ulizaplayer(playerId).changePlaybackRate(Number(
                                PlaybackRate[1]));
                        }
                        //ボタン追加
                    ulizaplayer(playerId).addButton(speedButtonObject);
                }
            };
            
        //playerId 退避　及び　idがしかるべき場所になくても再生可能にする
        var playerId,
            arry = [];
            
        if (obj.ulizaPlayerSetup.hasOwnProperty('id')) {
            playerId = obj.ulizaPlayerSetup.id;
        } else {
            playerId = obj.pluginSetup.id;
        }
        //player　にコールバック関数挿入
        if(obj.ulizaPlayerSetup.hasOwnProperty('javascriptCallbackFunction')){
          var objArray = obj.ulizaPlayerSetup.javascriptCallbackFunction;
          arry.push(objArray);
          obj.ulizaPlayerSetup.javascriptCallbackFunction = arry;
          obj.ulizaPlayerSetup.javascriptCallbackFunction.push(javascriptCallback);
        }else{
          obj.ulizaPlayerSetup.javascriptCallbackFunction = arry;
          obj.ulizaPlayerSetup.javascriptCallbackFunction.push(javascriptCallback);
        }

        if(obj.ulizaPlayerSetup.design.hasOwnProperty('style')){
          obj.ulizaPlayerSetup.design.style.speedButton = {show:false};
        }else{
          obj.ulizaPlayerSetup.design.style = {};
          obj.ulizaPlayerSetup.design.style.speedButton = {show:false};
        }
>>>>>>> c2e86df2ec2b9b9aabd1d85528f145180f60e025

        }
      }
      catch (error) {
        console.log(error + "debug");
        console.log(error.name);
        console.log(error.stack.toString());
      }
    };
    //javascript call back function end

    //ulizaPlayer Setup start
    //playerId 退避　及び　idがしかるべき場所になくても再生可能にする
    var playerId;
    if (obj.ulizaPlayerSetup.hasOwnProperty("id")) {
      playerId = obj.ulizaPlayerSetup.id;
    }
    else {
      playerId = obj.pluginSetup.id;
    }

    // toggle button消去
    if (obj.ulizaPlayerSetup.design.hasOwnProperty("style")) {
      obj.ulizaPlayerSetup.design.style.speedButton = {
        show: false
      };
    }
    else {
      obj.ulizaPlayerSetup.design.style = {};
      obj.ulizaPlayerSetup.design.style.speedButton = {
        show: false
      };
    }

    //player　にコールバック関数挿入
    var arry = [];
    if (obj.ulizaPlayerSetup.hasOwnProperty("javascriptCallbackFunction")) {
      var objArray = obj.ulizaPlayerSetup.javascriptCallbackFunction;
      arry.push(objArray);
      obj.ulizaPlayerSetup.javascriptCallbackFunction = arry;
      obj.ulizaPlayerSetup.javascriptCallbackFunction.push(javascriptCallback);
    }
    else {
      obj.ulizaPlayerSetup.javascriptCallbackFunction = arry;
      obj.ulizaPlayerSetup.javascriptCallbackFunction.push(javascriptCallback);
    }

    //player setup
    ulizaplayer(playerId).setup(obj.ulizaPlayerSetup);
  }
  //ulizaPlayerSetup end
  window.speedButtonSetupPlugIn = speedButtonSetupPlugIn;


})(ulizaplayer,window);

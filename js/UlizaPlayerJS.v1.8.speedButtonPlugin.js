(function(ulizaplayer, window) {
  var UlizaSpeedPlugInSetup = function(obj) {
      //javascript call back function start
      var UlizaSpeedPlugInCallback = function(playerId, event, data) {
          if (event == 'onPlayerViewInitialize') {
            upDateDisplay();
            speedButtonReady();
          }
          else if (event == 'onChangePlaylist') {
            var removeAllButton = ulizaplayer(playerId)
              .removeAllButton();
            if (removeAllButton) {
              upDateDisplay();
              speedButtonReady();
            }
            else {
              throw new Error('I was not able to delete button');
            }
          }
          else {
            throw new Error('It is an exception handling');
          }

          function speedButtonReady() {
            var getPlaybackRate2 = ulizaplayer(playerId)
              .getPlaybackRate();

            var id = "speed_" + getPlaybackRate2;
            var uw = ulizaplayer(playerId)
              .getButtonInfo();

            for (var prop in uw) {
              var a5 = uw[prop].id.indexOf(id);
              var ty = obj.pluginSetup.imgUrl.split(/(?=\.[^.]+$)/);
              var ty4 = ty[0] + getPlaybackRate2 + "_click" + ty[1];

              var clickButton2 = {
                id: 'click_speed_' + getPlaybackRate2,
                url: ty4,
                layoutInfo: {
                  right: uw[a5].layoutInfo.right,
                  top: uw[a5].layoutInfo.top,
                  left: uw[a5].layoutInfo.left,
                  bottom: uw[a5].layoutInfo.bottom,
                  alpha: 1
                }
              }

              var fr = ulizaplayer(playerId)
                .removeButton(id);
              if (fr) {
                ulizaplayer(playerId)
                  .addButton(clickButton2);
              }
            } //in
          }

          function speedButtonClick(speedButtonId) {
            //click imgcreate
            var t2 = this.url.split(/(?=\.[^.]+$)/)
            var t3 = t2[0] + "_click" + t2[1];
            var t4 = t3.toString();

            var PlaybackRate = speedButtonId.split('_'),
              crentPlaybackRate = ulizaplayer(playerId)
              .getPlaybackRate(),
              oldClickButtonId = 'click_speed_' + crentPlaybackRate,
              clickButton = {
                id: 'click_' + this.id,
                url: t4,
                layoutInfo: {
                  right: this.layoutInfo.right,
                  top: this.layoutInfo.top,
                  left: this.layoutInfo.left,
                  bottom: this.layoutInfo.bottom,
                  alpha: 1
                }
              };


            var da = ulizaplayer(playerId).changePlaybackRate(Number(PlaybackRate[1]));
            if (da) {
              upDateDisplay(speedButtonId, clickButton, oldClickButtonId);
            }
          }


          function upDateDisplay(speedButtonId, clickButton, oldClickButtonId) {

              var PlaybackRateData = ulizaplayer(playerId)
                .getPlaybackRateData();
              var count = PlaybackRateData.length;
              for (var i = 0; i < PlaybackRateData.length; i++) {
                var padding,

                  //img url 生成
                  url = obj.pluginSetup.imgUrl.split(/(?=\.[^.]+$)/),
                  urlCreate = url[0] + PlaybackRateData[i].playbackrate + url[
                    1],
                  imgUrl = urlCreate.toString(),
                  //ボタンオブジェクト生成
                  speedButtonObject;

                //padding 設定
                if (!obj.pluginSetup.hasOwnProperty('padding') && obj.pluginSetup
                  .hasOwnProperty('style')) {
                  padding = i * (obj.pluginSetup.style.up.width + 20);
                }
                else if (obj.pluginSetup.hasOwnProperty('padding') && obj.pluginSetup
                  .hasOwnProperty('style')) {
                  padding = i * (obj.pluginSetup.style.up.width + obj.pluginSetup
                    .padding);
                }
                else {
                  padding = i * obj.pluginSetup.padding;
                }
                //
                // //ソート
                if (obj.pluginSetup.right !== undefined && obj.pluginSetup.layout !=="line") {
                  count--;
                  padding = count * obj.pluginSetup.padding;
                }
                //ソート
                //ボタンオブジェクト生成
                if (!obj.pluginSetup.hasOwnProperty('style')) {
                  speedButtonObject = {
                    id: 'speed_' + PlaybackRateData[i].playbackrate,
                    url: imgUrl,
                    onClick: speedButtonClick,
                    layoutInfo: {
                      right: obj.pluginSetup.right + padding,
                      top: obj.pluginSetup.top,
                      left: obj.pluginSetup.left + padding,
                      bottom: obj.pluginSetup.bottom,
                      alpha: 1
                    }
                  }

                  if (obj.pluginSetup.layout == "line") {
                    speedButtonObject = {
                      id: 'speed_' + PlaybackRateData[i].playbackrate,
                      url: imgUrl,
                      onClick: speedButtonClick,
                      layoutInfo: {
                        right: obj.pluginSetup.right,
                        top: obj.pluginSetup.top + padding,
                        left: obj.pluginSetup.left,
                        bottom: obj.pluginSetup.bottom + padding,
                        alpha: 1
                      }
                    }
                  }

                }
                else if (obj.pluginSetup.layout == "line") {
                  speedButtonObject = {
                      id: 'speed_' + PlaybackRateData[i].playbackrate,
                      url: imgUrl,
                      onClick: speedButtonClick,
                      layoutInfo: {
                        right: obj.pluginSetup.right,
                        top: obj.pluginSetup.top + padding,
                        left: obj.pluginSetup.left,
                        bottom: obj.pluginSetup.bottom + padding,
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
                        } //down
                      } //style
                    } //speedButtonObject

                }
                else {
                  speedButtonObject = {
                      id: 'speed_' + PlaybackRateData[i].playbackrate,
                      url: imgUrl,
                      onClick: speedButtonClick,
                      layoutInfo: {
                        right: obj.pluginSetup.right + padding,
                        top: obj.pluginSetup.top,
                        left: obj.pluginSetup.left + padding,
                        bottom: obj.pluginSetup.bottom,
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
                        } //down
                      } //style
                    } //speedButtonObject
                } //else

                ulizaplayer(playerId)
                  .addButton(speedButtonObject);


              } //for

              if (speedButtonId === undefined) return;

              ulizaplayer(playerId)
                .removeButton(speedButtonId);
              ulizaplayer(playerId)
                .addButton(clickButton);
              ulizaplayer(playerId)
                .removeButton(oldClickButtonId);
            } //update function


        } //javascript call back function end

      //ulizaPlayer Setup start
      //playerId 退避　及び　idがしかるべき場所になくても再生可能にする
      var playerId;
      if (obj.ulizaPlayerSetup.hasOwnProperty('id')) {
        playerId = obj.ulizaPlayerSetup.id;
      }
      else if (obj.pluginSetup.hasOwnProperty('id')) {
        playerId = obj.pluginSetup.id;
      }
      else {
        throw new Error('UlizaSpeedPlugInSetup playerId is undefined');
      }


      // toggle button消去
      if (obj.ulizaPlayerSetup.design.hasOwnProperty('style')) {
        obj.ulizaPlayerSetup.design.style.speedButton = {
          show: false
        };
      }
      else if (!obj.ulizaPlayerSetup.design.hasOwnProperty('style')) {
        obj.ulizaPlayerSetup.design.style = {};
        obj.ulizaPlayerSetup.design.style.speedButton = {
          show: false
        };
      }
      else {
        throw new Error('UlizaSpeedPlugInSetup style');
      }


      //player　にコールバック関数挿入
      var arry = [];
      if (obj.ulizaPlayerSetup.hasOwnProperty('javascriptCallbackFunction')) {
        var objArray = obj.ulizaPlayerSetup.javascriptCallbackFunction;
        arry.push(objArray);
        obj.ulizaPlayerSetup.javascriptCallbackFunction = arry;
        obj.ulizaPlayerSetup.javascriptCallbackFunction.push(UlizaSpeedPlugInCallback);
      }
      else if (!obj.ulizaPlayerSetup.hasOwnProperty(
        'javascriptCallbackFunction')) {
        obj.ulizaPlayerSetup.javascriptCallbackFunction = arry;
        obj.ulizaPlayerSetup.javascriptCallbackFunction.push(UlizaSpeedPlugInCallback);
      }
      else {
        throw new Error('UlizaSpeedPlugInSetup javascriptCallbackFunction');

      }
      //player setup
      var call = ulizaplayer(playerId).setup(obj.ulizaPlayerSetup);
      return call;
    }
    //ulizaPlayerSetup end

  window.UlizaSpeedPlugInSetup = UlizaSpeedPlugInSetup;

  try {
    UlizaSpeedPlugInSetup(obj);
  }
  catch (error) {
    console.log(error);
  }

})(ulizaplayer, window);

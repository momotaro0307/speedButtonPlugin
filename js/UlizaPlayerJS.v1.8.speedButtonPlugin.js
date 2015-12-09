(function(ulizaplayer, window) {
  var speedButtonSetupPlugIn = function(obj) {
      //javascript call back function start
      var javascriptCallback = function(playerId, event, data) {
          if (event == 'onPlayerViewInitialize') {
            upDateDisplay();
          }else if (event == 'onChangePlaylist') {
            var removeAllButton = ulizaplayer(playerId).removeAllButton();
            if (removeAllButton) {
              upDateDisplay();
            }else {
              throw new Error('I was not able to delete button');
            }
          }else {
            throw new Error('It is an exception handling');
          }

          function speedButtonClick(speedButtonId) {
            var PlaybackRate = speedButtonId.split('_'),
              crentPlaybackRate = ulizaplayer(playerId).getPlaybackRate(),
              oldClickButtonId = 'click_speed_' + crentPlaybackRate,
              clickButton = {
                id: 'click_' + this.id,
                url: this.url,
                layoutInfo: {
                  right: this.layoutInfo.right,
                  top: this.layoutInfo.top + 100,
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
                };
                //click されたボタン消去
                ulizaplayer(playerId).removeButton(speedButtonId);
                //click後　のボタン消去
                ulizaplayer(playerId).removeButton("click_speed_"+crentPlaybackRate);

                ulizaplayer(playerId).changePlaybackRate(Number(PlaybackRate[1]));

            //click用の button を埋め込み
            ulizaplayer(playerId).addButton(clickButton);

            ulizaplayer(playerId).changePlaybackRate(Number(PlaybackRate[1]));
            ulizaplayer(playerId).removeAllButton();
            upDateDisplay(speedButtonId, clickButton, oldClickButtonId);
          };


          function upDateDisplay(speedButtonId, clickButton, oldClickButtonId) {
              var PlaybackRateData = ulizaplayer(playerId).getPlaybackRateData();
              for (var i = 0; i < PlaybackRateData.length; i++) {
                var padding = i * obj.pluginSetup.padding,
                  //img url 生成
                  url = obj.pluginSetup.imgUrl.split(/(?=\.[^.]+$)/),
                  urlCreate = url[0] + PlaybackRateData[i].playbackrate + url[1],
                  imgUrl = urlCreate.toString(),
                  //ボタンオブジェクト生成
                  speedButtonObject;

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
                      alpha: 1
                    }
                  }
                } else{
                  speedButtonObject = {
                      id: 'speed_' + PlaybackRateData[i].playbackrate,
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
                        } //down
                      } //style
                    } //speedButtonObject
                } //else

                ulizaplayer(playerId).addButton(speedButtonObject);

              } //for
              if (speedButtonId == undefined) return;

              ulizaplayer(playerId).removeButton(speedButtonId);
              ulizaplayer(playerId).addButton(clickButton);
              ulizaplayer(playerId).removeButton(oldClickButtonId);

            } //update function
      } //javascript call back function end


      //ulizaPlayer Setup start
      //playerId 退避　及び　idがしかるべき場所になくても再生可能にする
      var playerId;
      if (obj.ulizaPlayerSetup.hasOwnProperty('id')) {
        playerId = obj.ulizaPlayerSetup.id;
      }else if (obj.pluginSetup.hasOwnProperty('id')) {
        playerId = obj.pluginSetup.id;
      }else {
        throw new Error('speedButtonSetupPlugIn playerId is undefined');
      }

      // toggle button消去
      if (obj.ulizaPlayerSetup.design.hasOwnProperty('style')) {
        obj.ulizaPlayerSetup.design.style.speedButton = {
          show: false
        };
      }else if (!obj.ulizaPlayerSetup.design.hasOwnProperty('style')) {
        obj.ulizaPlayerSetup.design.style = {};
        obj.ulizaPlayerSetup.design.style.speedButton = {
          show: false
        };
      }else {
        throw new Error('speedButtonSetupPlugIn style');
      }

      //player　にコールバック関数挿入
      var arry = [];
      if (obj.ulizaPlayerSetup.hasOwnProperty('javascriptCallbackFunction')) {
        var objArray = obj.ulizaPlayerSetup.javascriptCallbackFunction;
        arry.push(objArray);
        obj.ulizaPlayerSetup.javascriptCallbackFunction = arry;
        obj.ulizaPlayerSetup.javascriptCallbackFunction.push(javascriptCallback);
      }else if (!obj.ulizaPlayerSetup.hasOwnProperty('javascriptCallbackFunction')) {
        obj.ulizaPlayerSetup.javascriptCallbackFunction = arry;
        obj.ulizaPlayerSetup.javascriptCallbackFunction.push(javascriptCallback);
      }else {
        throw new Error('speedButtonSetupPlugIn javascriptCallbackFunction');
      }
      //player setup
      ulizaplayer(playerId).setup(obj.ulizaPlayerSetup);
    }
    //ulizaPlayerSetup end
  window.speedButtonSetupPlugIn = speedButtonSetupPlugIn;

  try {
    speedButtonSetupPlugIn(obj);
  }catch (error) {
    console.log(error);
  }

})(ulizaplayer, window);

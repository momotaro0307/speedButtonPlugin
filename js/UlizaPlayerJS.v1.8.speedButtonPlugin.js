(function(ulizaplayer, window){
var speedButtonSetupPlugIn = function(obj) {
        var javascriptCallback = function javascriptCallback(playerId) {
                var PlaybackRateData = ulizaplayer(playerId).getPlaybackRateData();
                for (var i = 0; i < PlaybackRateData.length; i++) {
                    var padding = i * obj.pluginSetup.padding;
                    //img url 生成
                    var url = obj.pluginSetup.imgUrl.split(/(?=\.[^.]+$)/);
                    var urlCreate = url[0] + PlaybackRateData[i].playbackrate +
                        url[1];
                    var imgUrl = urlCreate.toString();
                    //ボタンオブジェクト生成
                    var speedButtonObject;
                     if(!obj.pluginSetup.hasOwnProperty("style")){
                       speedButtonObject = {
                         id:"speed_"+PlaybackRateData[i].playbackrate,
                         url:imgUrl,
                         onClick:speedButtonClick,
                         layoutInfo:{
                           right:obj.pluginSetup.right+padding,top:obj.pluginSetup.top,left:obj.pluginSetup.left+padding,alpha:1
                         }
                       }
                    }else{
                       speedButtonObject = {
                            id: "speed_" + PlaybackRateData[i].playbackrate,
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
                            var PlaybackRate = speedButtonId.split("_");
                            ulizaplayer(playerId).removeButton(speedButtonId);　
                            ulizaplayer(playerId).changePlaybackRate(Number(
                                PlaybackRate[1]));
                        }
                        //ボタン追加
                    ulizaplayer(playerId).addButton(speedButtonObject);
                }
            };
            //playerId 退避　及び　idがしかるべき場所になくても再生可能にする
        var playerId;
        if (obj.ulizaPlayerSetup.hasOwnProperty("id")) {
            playerId = obj.ulizaPlayerSetup.id;
        } else {
            playerId = obj.pluginSetup.id;
        }
        //player　にコールバック関数挿入
        var arry = [];
        if(obj.ulizaPlayerSetup.hasOwnProperty("javascriptCallbackFunction")){
          var objArray = obj.ulizaPlayerSetup.javascriptCallbackFunction;
          arry.push(objArray);
          obj.ulizaPlayerSetup.javascriptCallbackFunction = arry;
          obj.ulizaPlayerSetup.javascriptCallbackFunction.push(javascriptCallback);
        }else{
          obj.ulizaPlayerSetup.javascriptCallbackFunction = arry;
          obj.ulizaPlayerSetup.javascriptCallbackFunction.push(javascriptCallback);
        }

        if(obj.ulizaPlayerSetup.design.hasOwnProperty("style")){
          obj.ulizaPlayerSetup.design.style.speedButton = {show:false};
        }else{
          obj.ulizaPlayerSetup.design.style = {};
          obj.ulizaPlayerSetup.design.style.speedButton = {show:false};
        }

        //player setup
        ulizaplayer(playerId).setup(obj.ulizaPlayerSetup);
    };
    window.speedButtonSetupPlugIn = speedButtonSetupPlugIn;
})(ulizaplayer, window);

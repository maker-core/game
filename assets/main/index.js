System.register("chunks:///_virtual/app.ts", ['cc', './ResMgr.ts', './Message.ts'], function (exports) {
  var cclegacy, find, instantiate, ResMgr, Message;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      find = module.find;
      instantiate = module.instantiate;
    }, function (module) {
      ResMgr = module.ResMgr;
    }, function (module) {
      Message = module.Message;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8d593AQkSdEFYxZSVYq20cQ", "app", undefined);

      var Tost = exports('Tost', function Tost(message) {
        var canvas = find("mian/Canvas");
        var base = ResMgr.Instance.getAsset("Sounds", "Message");
        var child = instantiate(base);

        if (!canvas.getChildByName("Message")) {
          canvas.addChild(child);

          var _Tost = child.getComponent(Message);

          _Tost.setValue(message);
        }
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResMgr.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, AudioSource, Component, ResMgr;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      Component = module.Component;
    }, function (module) {
      ResMgr = module.ResMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "dfc68ApNu9H27Pz05ghRcER", "AudioMgr", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property; // @ccclass('AudioMgr')

      var AudioMgr = exports('AudioMgr', /*#__PURE__*/function (_Component) {
        _inheritsLoose(AudioMgr, _Component);

        function AudioMgr() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.sounds = {};
          return _this;
        }

        var _proto = AudioMgr.prototype;

        _proto.onLoad = function onLoad() {
          if (!AudioMgr.Instance) {
            AudioMgr.Instance = this;
          } else {
            this.destroy();
            return;
          }
        } // 播放音乐
        ;

        _proto.play = function play(name, options) {
          if (!this.sounds[name]) {
            var Clip = ResMgr.Instance.getAsset("Sounds", "" + name);
            var audio = new AudioSource(name);
            audio.clip = Clip;
            this.sounds[name] = audio;
          }

          if (options.loop) {
            this.sounds[name].loop = options.loop;
          }

          if (options.playOnAwake) {
            this.sounds[name].playOnAwake = options.playOnAwake;
          }

          if (options.volume) {
            this.sounds[name].volume = options.volume;
          }

          if (!this.sounds[name].playing) {
            this.sounds[name].play();
          }
        } //暂停
        ;

        _proto.pause = function pause(name) {
          if (this.sounds[name]) {
            this.sounds[name].pause();
          }
        } //停止
        ;

        _proto.stop = function stop(name) {
          if (this.sounds[name]) {
            this.sounds[name].stop();
          }
        };

        _proto.stopAll = function stopAll() {
          for (var key in this.sounds) {
            this.sounds[key].stop();
          }
        };

        _proto.getAudioSourceByName = function getAudioSourceByName(name) {
          if (this.sounds[name]) {
            return this.sounds[name];
          } else {
            console.error(name + " \u4E0D\u5B58\u5728");
          }
        };

        return AudioMgr;
      }(Component));
      AudioMgr.Instance = void 0;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BulletFrame.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UiMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Node, Label, Sprite, UICtrl;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Node = module.Node;
      Label = module.Label;
      Sprite = module.Sprite;
    }, function (module) {
      UICtrl = module.UICtrl;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "cdf2eac9r1DIJdgYX9SjOO8", "BulletFrame", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BulletFrame = exports('BulletFrame', (_dec = ccclass('BulletFrame'), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_UICtrl) {
        _inheritsLoose(BulletFrame, _UICtrl);

        function BulletFrame() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _UICtrl.call.apply(_UICtrl, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "icon1", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "icon2", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "icon3", _descriptor3, _assertThisInitialized(_this));

          _this.type = 1;
          return _this;
        }

        var _proto = BulletFrame.prototype;

        _proto.onLoad = function onLoad() {
          var _this2 = this;

          _UICtrl.prototype.onLoad.call(this);

          this.view["mask/close"].on(Node.EventType.TOUCH_END, function (e) {
            e.propagationStopped = true;
            _this2.node.active = false;
          });
        };

        _proto.close = function close() {
          this.node.active = false;
        };

        _proto.setType = function setType(type) {
          this.type = type;

          switch (type) {
            case 1:
              this.view["mask/title/Label"].getComponent(Label).string = "Remove";
              this.view["mask/cal/icon"].getComponent(Sprite).spriteFrame = this.icon1;
              this.view["mask/Label"].getComponent(Label).string = "Remove 3 objects from the grid and place them in the temporary storage.";
              break;

            case 2:
              this.view["mask/title/Label"].getComponent(Label).string = "Scrape";
              this.view["mask/cal/icon"].getComponent(Sprite).spriteFrame = this.icon2;
              this.view["mask/Label"].getComponent(Label).string = "Automatically gather and place objects together";
              break;

            case 3:
              this.view["mask/title/Label"].getComponent(Label).string = "Disruption";
              this.view["mask/cal/icon"].getComponent(Sprite).spriteFrame = this.icon3;
              this.view["mask/Label"].getComponent(Label).string = "Disrupt the pile of items";
              break;
          }
        };

        _proto.update = function update(deltaTime) {};

        return BulletFrame;
      }(UICtrl), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "icon1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "icon2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "icon3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/config.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5fb11dsqL9C1JmVA7jcjYFI", "config", undefined);

      var baseUrl1 = exports('baseUrl1', "http://34.145.10.202:8091/");
      var baseUrl = exports('baseUrl', "http://192.168.1.103:8091/");
      {
        baseUrl = exports('baseUrl', "https://goose.kystudio.cn/api/"); // baseUrl = "http://192.168.31.30:8091/";
        // baseUrl = "http://192.168.1.103:8091/";
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);

        function DebugViewRuntimeControl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));

          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }

        var _proto = DebugViewRuntimeControl.prototype;

        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);

          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }

          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
              y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
              height = 20; // new nodes

          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles'; // title

          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;

            var _labelComponent = newLabel.getComponent(Label);

            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }

          y -= height; // single

          var currentRow = 0;

          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }

            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }

          x += width; // buttons

          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent; // misc

          y -= 40;

          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);

            _newNode.setPosition(x, y - height * _i2, 0.0);

            _newNode.setScale(0.5, 0.5, 0.5);

            _newNode.parent = miscNode;

            var _textComponent = _newNode.getComponentInChildren(RichText);

            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;

            var toggleComponent = _newNode.getComponent(Toggle);

            toggleComponent.isChecked = _i2 ? true : false;

            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);

            this.miscModeToggleList[_i2] = _newNode;
          } // composite


          y -= 150;

          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;

            _newNode2.setPosition(x, y - height * _i3, 0.0);

            _newNode2.setScale(0.5, 0.5, 0.5);

            _newNode2.parent = this.compositeModeToggle.parent;

            var _textComponent2 = _newNode2.getComponentInChildren(RichText);

            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;

            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);

            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };

        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');

          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };

        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };

        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };

        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };

        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };

        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);

          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);

            _toggleComponent.isChecked = true;
          }

          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };

        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };

        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;

          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }

          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }

          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };

        _proto.onLoad = function onLoad() {};

        _proto.update = function update(deltaTime) {};

        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, EventTarget, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventTarget = module.EventTarget;
      Component = module.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a0520KQvgVIhr8MfV5+NVnO", "EventMgr", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var EventMgr = exports('EventMgr', /*#__PURE__*/function (_Component) {
        _inheritsLoose(EventMgr, _Component);

        function EventMgr() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = EventMgr.prototype;

        _proto.onLoad = function onLoad() {
          if (!EventMgr.Instance) {
            EventMgr.Instance = new EventTarget();
          } else {
            this.destroy();
            return;
          }
        };

        return EventMgr;
      }(Component));
      EventMgr.Instance = void 0;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameData.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResMgr.ts', './AudioMgr.ts', './EventMgr.ts', './GameFiMgr.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, ResMgr, AudioMgr, EventMgr, GameFiMgr;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      ResMgr = module.ResMgr;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      EventMgr = module.EventMgr;
    }, function (module) {
      GameFiMgr = module.GameFiMgr;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "b0fb1qHVZZJ2ryeBmIZ5PQb", "GameData", undefined);

      var ccclass = _decorator.ccclass;
      var GameData = exports('GameData', (_dec = ccclass('GameData'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameData, _Component);

        function GameData() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = GameData.prototype;

        _proto.onLoad = function onLoad() {
          if (!GameData.Instance) {
            GameData.Instance = this;
          } else {
            this.destroy();
            return;
          } //资源管理


          this.node.addComponent(ResMgr); //初始化声音管理

          this.node.addComponent(AudioMgr); //初始化事件管理

          this.node.addComponent(EventMgr); //初始化游戏币管理

          this.node.addComponent(GameFiMgr);
        };

        return GameData;
      }(Component), _class2.Instance = void 0, _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameFiMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index4.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, Component, __webpack_exports__TonConnectUI, __webpack_exports__GameFi, __webpack_exports__Address, __webpack_exports__toNano;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
    }, function (module) {
      __webpack_exports__TonConnectUI = module.TonConnectUI;
      __webpack_exports__GameFi = module.GameFi;
      __webpack_exports__Address = module.Address;
      __webpack_exports__toNano = module.toNano;
    }],
    execute: function () {
      cclegacy._RF.push({}, "aad960tLrFGW6F0FqomlQl4", "GameFiMgr", undefined);

      var GameFiMgr = exports('GameFiMgr', /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameFiMgr, _Component);

        function GameFiMgr() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._cocosGameFi = void 0;
          _this._connectUI = void 0;
          _this._bTonInit = false;
          _this.address = "";
          return _this;
        }

        var _proto = GameFiMgr.prototype;

        _proto.onLoad = function onLoad() {
          if (!GameFiMgr.Instance) {
            GameFiMgr.Instance = this;
          } else {
            this.destroy();
            return;
          }
        };

        _proto.initTonConnect = /*#__PURE__*/function () {
          var _initTonConnect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(cb) {
            var _this2 = this;

            var uiconnector;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  uiconnector = new __webpack_exports__TonConnectUI({
                    manifestUrl: 'https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json'
                  });
                  _context.next = 3;
                  return __webpack_exports__GameFi.create({
                    network: "mainnet",
                    connector: uiconnector,
                    merchant: {
                      jettonAddress: __webpack_exports__Address.parse("EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs"),
                      tonAddress: "UQAMNl5M8dv_x5gEjAGzmARBUaey6qME2zwghgk0Jbd6kZB0"
                    }
                  });

                case 3:
                  this._cocosGameFi = _context.sent;
                  this._connectUI = this._cocosGameFi.walletConnector;

                  this._connectUI.onModalStateChange(function (state) {
                    console.log("model state changed! : ");

                    _this2.updateConnect();
                  });

                  this._connectUI.onStatusChange(function (info) {
                    console.log(info);
                    console.log("wallet info status changed : ");

                    _this2.updateConnect();

                    cb && cb(info);
                  });

                  this._bTonInit = true;
                  this.updateConnect();

                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));

          function initTonConnect(_x) {
            return _initTonConnect.apply(this, arguments);
          }

          return initTonConnect;
        }();

        _proto.isConnected = function isConnected() {
          if (!this._connectUI) {
            console.error("ton ui not inited!");
            return false;
          }

          return this._connectUI.connected;
        };

        _proto.updateConnect = function updateConnect() {
          if (this.isConnected()) {
            var address = this._connectUI.account.address;
            this.address = address;
          }
        };

        _proto.openModal = /*#__PURE__*/function () {
          var _openModal = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (this._bTonInit) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt("return");

                case 2:
                  if (this.isConnected()) {
                    this._connectUI.disconnect();
                  } else {
                    this._connectUI.openModal();
                  }

                case 3:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));

          function openModal() {
            return _openModal.apply(this, arguments);
          }

          return openModal;
        }();

        _proto.sendTransaction = /*#__PURE__*/function () {
          var _sendTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(amount) {
            var result;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return this._cocosGameFi.transferJetton({
                    to: __webpack_exports__Address.parse("UQCXLI7EllDjQEFRglhfKi42hlZwyvYN-IKXM6nAc52_nZQp"),
                    amount: __webpack_exports__toNano(amount)
                  });

                case 2:
                  result = _context3.sent;
                  return _context3.abrupt("return", result);

                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));

          function sendTransaction(_x2) {
            return _sendTransaction.apply(this, arguments);
          }

          return sendTransaction;
        }();

        return GameFiMgr;
      }(Component));
      GameFiMgr.Instance = void 0;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/index.ts", ['cc'], function (exports) {
  var cclegacy, Prefab, AudioClip;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Prefab = module.Prefab;
      AudioClip = module.AudioClip;
    }],
    execute: function () {
      cclegacy._RF.push({}, "575f06Qf8dBlrkz2fzrc3qq", "index", undefined);

      var resPkg = exports('resPkg', {
        GUI: {
          urls: [{
            tooTip: "u",
            type: "0",
            path: "eggcoin",
            assetType: Prefab
          }, {
            tooTip: "1",
            type: "0",
            path: "Breakfast_Sandwich",
            assetType: Prefab
          }, {
            tooTip: "2",
            type: "0",
            path: "Burger_Wrapped",
            assetType: Prefab
          }, {
            tooTip: "3",
            type: "0",
            path: "Croissant_Dough",
            //Fish_Patty
            assetType: Prefab //  

          }, {
            tooTip: "t",
            type: "1",
            path: "usdc",
            assetType: Prefab
          }, {
            tooTip: "4",
            type: "1",
            path: "IceCream",
            assetType: Prefab
          }, {
            tooTip: "5",
            type: "1",
            path: "Ketchup_Cup",
            assetType: Prefab
          }, {
            tooTip: "6",
            type: "1",
            path: "Waffle_Plain",
            assetType: Prefab
          }, {
            tooTip: "7",
            type: "1",
            path: "Chip_Bag",
            assetType: Prefab
          }, {
            tooTip: "8",
            type: "1",
            path: "Corndog",
            assetType: Prefab
          }, //大的
          {
            tooTip: "9",
            type: "2",
            path: "Loaf_Cinnamon",
            // Fork
            assetType: Prefab
          }, {
            tooTip: "a",
            type: "2",
            path: "Loaf_White",
            //Ketchup_Bottle
            assetType: Prefab
          }, {
            tooTip: "b",
            type: "2",
            path: "Wreath_Light",
            //Pizza_Base
            assetType: Prefab
          }, {
            tooTip: "c",
            type: "2",
            path: "ToGo_Bag_W",
            assetType: Prefab
          }]
        },
        Sounds: {
          urls: [{
            path: "btnclick",
            assetType: AudioClip
          }, {
            path: "freeze",
            assetType: AudioClip
          }, {
            path: "pass",
            assetType: AudioClip
          }, {
            path: "softFail",
            assetType: AudioClip
          }, {
            path: "starCollect",
            assetType: AudioClip
          }, {
            path: "tap",
            assetType: AudioClip
          }, {
            path: "bg",
            assetType: AudioClip
          }, {
            path: "click",
            assetType: AudioClip
          }, {
            path: "Message",
            assetType: Prefab
          }]
        }
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/index2.ts", ['cc', './moment.mjs_cjs=&original=.js', './moment.js'], function (exports) {
  var cclegacy, _cjsExports;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, null, function (module) {
      _cjsExports = module.default;
    }],
    execute: function () {
      exports({
        addSeparatorToNumber: addSeparatorToNumber,
        countdown: countdown,
        debounce: debounce,
        getRandom: getRandom
      });

      cclegacy._RF.push({}, "75244sNKmhGJIbha+4+BzAW", "index", undefined); // import crypto from 'crypto';


      var keyObject = exports('keyObject', function keyObject(param) {
        var dataStr = "";

        for (var key in param) {
          dataStr += key + '=' + param[key] + '&';
        }

        if (dataStr !== '') {
          dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
        }

        return dataStr;
      });

      function addSeparatorToNumber(number, separator) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
      }

      function debounce(fn, delay) {
        var timer = null; // 原始函数的参数args

        var _debounce = function _debounce() {
          var _this = this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          if (timer) clearTimeout(timer);
          timer = setTimeout(function () {
            // 绑定this
            fn.apply(_this, args);
          }, delay);
        };

        return _debounce;
      }

      function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      } // moment
      // 你好请用 moment 包 ts 编写一个倒计时的代码，时间通过传入的方式


      function countdown(targetTime) {
        var now = _cjsExports(); // 目标时间


        var endTime = targetTime;

        var duration = _cjsExports.duration(endTime.diff(now));

        if (duration.asMilliseconds() <= 0) {
          return {
            end: true
          };
        } //分钟和秒


        var days = Math.floor(duration.asDays());
        var hours = Math.floor(duration.hours());
        var minutes = Math.floor(duration.minutes());
        var seconds = Math.floor(duration.seconds());
        return {
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds,
          end: false
        };
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/index3.ts", ['cc', './request.ts'], function (exports) {
  var cclegacy, request;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      request = module.default;
    }],
    execute: function () {
      exports({
        buyPropProduct: buyPropProduct,
        gameOver: gameOver,
        generateModelSorting: generateModelSorting,
        getGameUserInfo: getGameUserInfo,
        getPrice: getPrice,
        openNewGame: openNewGame,
        postTest: postTest
      });

      cclegacy._RF.push({}, "c657fQy5bpLFLenBmom+S00", "index", undefined);

      function getPrice(params) {
        return request({
          data: params || null,
          method: "GET",
          url: "getPrice"
        });
      }

      function postTest(params) {
        return request({
          data: params || null,
          method: "POST",
          url: "postTest"
        });
      } //rule/generateModelSorting


      function generateModelSorting(params) {
        return request({
          data: params || null,
          method: "GET",
          url: "rule/generateModelSorting"
        });
      } //getGameUserInfo?


      function getGameUserInfo(params) {
        return request({
          data: params || null,
          method: "GET",
          url: "gameUser/getGameUserInfo"
        });
      } //http://192.168.31.109:3000/game/openNewGame


      function openNewGame(params) {
        return request({
          data: params || null,
          method: "GET",
          url: "game/openNewGame"
        });
      } //game/buyPropProduct?game_id=f25fdbfc-adae-4ac4-a893-91f1ecf565e9&prop_one=0


      function buyPropProduct(params) {
        return request({
          data: params || null,
          method: "GET",
          url: "game/buyPropProduct"
        });
      } // 结算 /game/gameOver?game_user_id=39cf03ec-c893-456a-b9fd-da5035a921fb&game_id=3d5cb2a7-ddd5-45fa-9b1e-a3abd5fe2d84&result=true&inside_point=5&inside_usdt=10&prop_one=2


      function gameOver(params) {
        return request({
          data: params || null,
          method: "POST",
          url: "game/gameOver"
        });
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Item.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec3, RigidBody, Collider, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      RigidBody = module.RigidBody;
      Collider = module.Collider;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "b08a3qMqrRKXaTPZOtmmSw2", "Item", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Item = exports('Item', (_dec = ccclass('Item'), _dec2 = property(Vec3), _dec3 = property(Vec3), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Item, _Component);

        function Item() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.removed = false;
          _this.removedPos = void 0; //消除的时候做一个向中间靠拢的动画

          _this.playRmovedEff = false;
          _this.isTemp = false;
          _this.isBottom = false;

          _initializerDefineProperty(_this, "rotation", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "scale", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Item.prototype;

        _proto.start = function start() {};

        _proto.setUseGravity = function setUseGravity(use) {
          var Temp = this.node.getComponent(RigidBody);

          if (Temp) {
            Temp.useGravity = use;
          }
        };

        _proto.setWorldPosition = function setWorldPosition(y) {
          var pos = this.node.getWorldPosition();
          pos.y += y;
          this.node.setWorldPosition(pos);
        };

        _proto.destoryCollider = function destoryCollider() {
          if (!this.isTemp) {
            var Temp = this.node.getComponent(RigidBody);
            this.node.getComponent(Collider).isTrigger = true;

            if (Temp) {
              Temp.destroy();
            }
          }
        };

        _proto.update = function update(deltaTime) {};

        return Item;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rotation", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(0, 0, 0);
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scale", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(1, 1, 1);
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './BulletFrame.ts', './Message.ts', './config.ts', './index.ts', './GameData.ts', './Item.ts', './Main.ts', './Start.ts', './AudioMgr.ts', './EventMgr.ts', './GameFiMgr.ts', './ResMgr.ts', './UiMgr.ts', './app.ts', './index2.ts', './request.ts', './storage.ts', './type.ts', './index3.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Main.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UiMgr.ts', './index.ts', './ResMgr.ts', './AudioMgr.ts', './Item.ts', './index2.ts', './moment.mjs_cjs=&original=.js', './app.ts', './BulletFrame.ts', './index3.ts', './index.mjs_cjs=&original=.js', './storage.ts', './GameFiMgr.ts', './moment.js', './index.js'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _extends, _createForOfIteratorHelperLoose, cclegacy, _decorator, sp, Material, SpriteFrame, Prefab, Sprite, Label, game, input, Input, Camera, geometry, PhysicsSystem, MeshRenderer, Tween, Vec3, tween, instantiate, RigidBody, Node, director, UICtrl, resPkg, ResMgr, AudioMgr, Item, getRandom, countdown, Tost, BulletFrame, generateModelSorting, openNewGame, gameOver, buyPropProduct, getStorageData, GameFiMgr, _cjsExports, _cjsExports$1;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _extends = module.extends;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      Material = module.Material;
      SpriteFrame = module.SpriteFrame;
      Prefab = module.Prefab;
      Sprite = module.Sprite;
      Label = module.Label;
      game = module.game;
      input = module.input;
      Input = module.Input;
      Camera = module.Camera;
      geometry = module.geometry;
      PhysicsSystem = module.PhysicsSystem;
      MeshRenderer = module.MeshRenderer;
      Tween = module.Tween;
      Vec3 = module.Vec3;
      tween = module.tween;
      instantiate = module.instantiate;
      RigidBody = module.RigidBody;
      Node = module.Node;
      director = module.director;
    }, function (module) {
      UICtrl = module.UICtrl;
    }, function (module) {
      resPkg = module.resPkg;
    }, function (module) {
      ResMgr = module.ResMgr;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      Item = module.Item;
    }, function (module) {
      getRandom = module.getRandom;
      countdown = module.countdown;
    }, null, function (module) {
      Tost = module.Tost;
    }, function (module) {
      BulletFrame = module.BulletFrame;
    }, function (module) {
      generateModelSorting = module.generateModelSorting;
      openNewGame = module.openNewGame;
      gameOver = module.gameOver;
      buyPropProduct = module.buyPropProduct;
    }, null, function (module) {
      getStorageData = module.getStorageData;
    }, function (module) {
      GameFiMgr = module.GameFiMgr;
    }, function (module) {
      _cjsExports = module.default;
    }, function (module) {
      _cjsExports$1 = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "a7d6dXfqilInpZcCfgaVlXs", "Main", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SkeletonData = sp.SkeletonData;
      var Main = exports('Main', (_dec = ccclass('Main'), _dec2 = property(Material), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec5 = property(Prefab), _dec6 = property(SkeletonData), _dec7 = property(SkeletonData), _dec(_class = (_class2 = /*#__PURE__*/function (_UICtrl) {
        _inheritsLoose(Main, _UICtrl);

        function Main() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _UICtrl.call.apply(_UICtrl, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "material", _descriptor, _assertThisInitialized(_this)); //透明材质


          _initializerDefineProperty(_this, "tag", _descriptor2, _assertThisInitialized(_this)); //透明材质贴图


          _initializerDefineProperty(_this, "add", _descriptor3, _assertThisInitialized(_this)); //透明材质贴图


          _initializerDefineProperty(_this, "nft", _descriptor4, _assertThisInitialized(_this)); //nft


          _initializerDefineProperty(_this, "usdc", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "coin", _descriptor6, _assertThisInitialized(_this));

          _this.touchNode = null; //当前点击的几何模型

          _this.allItem = []; //所有节点集合

          _this.collectPos = []; //底部收集点世界坐标集合

          _this.collectTiles = []; //底部收集点节点集合
          //是否初始化

          _this.touchMaterial = null;
          _this.temporaryItem = []; //临时节点

          _this.temporaryPos = []; //临时节点坐标集合

          _this.currentLevel = 1; //当前关卡

          _this.gameStop = false; //游戏暂停

          _this.clickPlay = true; //是否点击播放

          _this.stage1 = 0; //道具1

          _this.stage2 = 0; //道具2

          _this.stage3 = 0; //道具3

          _this.count = 0;
          _this.InitializedData = [];
          _this.usdtCount = 0;
          _this.myCoinCount = 0;
          _this.gameDate = null;
          _this.isGameOver = false;
          return _this;
        }

        var _proto = Main.prototype;

        _proto.changeTag = function changeTag() {
          if (this.stage1 == 0) {
            this.view["Canvas/ui/bottom/button/add"].getComponent(Sprite).spriteFrame = this.add;
            this.view["Canvas/ui/bottom/button/add/Label"].getComponent(Label).string = "";
          } else {
            this.view["Canvas/ui/bottom/button/add"].getComponent(Sprite).spriteFrame = this.tag;
            this.view["Canvas/ui/bottom/button/add/Label"].getComponent(Label).string = "" + this.stage1;
          }

          if (this.stage2 == 0) {
            this.view["Canvas/ui/bottom/button1/add"].getComponent(Sprite).spriteFrame = this.add;
            this.view["Canvas/ui/bottom/button1/add/Label"].getComponent(Label).string = "";
          } else {
            this.view["Canvas/ui/bottom/button1/add"].getComponent(Sprite).spriteFrame = this.tag;
            this.view["Canvas/ui/bottom/button1/add/Label"].getComponent(Label).string = "" + this.stage2;
          }

          if (this.stage3 == 0) {
            this.view["Canvas/ui/bottom/button2/add"].getComponent(Sprite).spriteFrame = this.add;
            this.view["Canvas/ui/bottom/button2/add/Label"].getComponent(Label).string = "";
          } else {
            this.view["Canvas/ui/bottom/button2/add"].getComponent(Sprite).spriteFrame = this.tag;
            this.view["Canvas/ui/bottom/button2/add/Label"].getComponent(Label).string = "" + this.stage3;
          }
        };

        _proto.onLoad = function onLoad() {
          _UICtrl.prototype.onLoad.call(this); //初始化  


          game.frameRate = 120;
          this.dataInit();
        };

        _proto.dataInit = /*#__PURE__*/function () {
          var _dataInit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;

            var result, meshData, sortArr, key;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.initGameId();
                  _context.next = 3;
                  return generateModelSorting();

                case 3:
                  result = _context.sent;
                  meshData = result.result;

                  if (meshData) {
                    sortArr = [];

                    for (key in meshData) {
                      sortArr.push(key);
                    }

                    sortArr.forEach(function (key) {
                      if (meshData[key]) {
                        var decrypted1 = _cjsExports$1.AES.decrypt(meshData[key], "bc1ptyc7v0hk0w48vqhxf86j7uetu42kf4c5z8nn6llv6f7l2g6cr3nszftf32").toString(_cjsExports$1.enc.Utf8);

                        var arr = decrypted1.split("");
                        arr.forEach(function (tip) {
                          var item = resPkg.GUI.urls.find(function (item) {
                            return item.tooTip == tip;
                          });

                          _this2.InitializedData.push(_extends({}, item, {
                            level: key
                          }));

                          _this2.count++;
                        });
                      }
                    }); // console.log(this.count, this.InitializedData);
                  }

                  if (this.currentLevel == 1) {
                    this.init(4, 2);
                  } else {
                    this.init2(this.InitializedData);
                  }

                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));

          function dataInit() {
            return _dataInit.apply(this, arguments);
          }

          return dataInit;
        }();

        _proto.initGameId = /*#__PURE__*/function () {
          var _initGameId = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var user_info, result;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  user_info = getStorageData("user_info");
                  _context2.next = 3;
                  return openNewGame({
                    ton_user_id: user_info.ton_user_id,
                    game_user_id: user_info.game_user_id
                  });

                case 3:
                  result = _context2.sent;

                  if (result.code == 200) {
                    console.log(result.result);
                    this.gameDate = result.result;
                  }

                case 5:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));

          function initGameId() {
            return _initGameId.apply(this, arguments);
          }

          return initGameId;
        }();

        _proto.onEnable = function onEnable() {
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        };

        _proto.onDisable = function onDisable() {
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.unscheduleAllCallbacks();
        } // 检查是否是可点击的物品
        ;

        _proto.checkItem = function checkItem(node) {
          var exists = resPkg.GUI.urls.some(function (item) {
            return item.path == node.name;
          });
          return exists;
        } // 点击事件
        ;

        _proto.onTouchStart = function onTouchStart(event) {
          if (this.gameStop) return;
          if (this.allItem.length == 0) return;

          if (this.collectTiles.length >= 7) {
            return;
          }

          var p = event.getLocation();
          var Scence = this.node.parent;
          var camera = Scence.getChildByName("Main Camera").getComponent(Camera);
          var r = new geometry.Ray();
          camera == null ? void 0 : camera.screenPointToRay(p.x, p.y, r);
          var b = PhysicsSystem.instance.raycastClosest(r, 0xffffffff, 10000000, true);

          if (b) {
            var collider = PhysicsSystem.instance.raycastClosestResult.collider;

            if (collider.node.name == "NFT") {
              collider.node.getComponent(Item).destoryCollider();
              collider.node.destroy();
              this.gameStop = true;
              this.view["Canvas/Over"].active = true;
              this.view["Canvas/Over/falied"].active = false;
              this.view["Canvas/Over/win"].active = true;
              return;
            }

            if (!this.checkItem(collider.node)) return;
            this.setNodeMaterial(collider.node, this.material, true);

            if (!collider.node.getComponent(Item).isTemp) {
              collider.node.getComponent(Item).setUseGravity(false);
              collider.node.getComponent(Item).setWorldPosition(1);
            }

            this.touchNode = collider.node;

            if (this.clickPlay) {
              AudioMgr.Instance.play("click", {
                playOnAwake: true
              });
            }
          }
        } // 设置节点材质
        ;

        _proto.setNodeMaterial = function setNodeMaterial(node, material, org) {
          var _this3 = this;

          if (org === void 0) {
            org = true;
          }

          if (node.name == "usdc" || node.name == "eggcoin" || node.name == "nft") return;
          node.children.forEach(function (item) {
            if (org) {
              if (item.getComponent(MeshRenderer)) {
                _this3.touchMaterial = item.getComponent(MeshRenderer).materials[0];
                item.getComponent(MeshRenderer).setMaterial(material, 0);
              }

              _this3.setNodeMaterial(item, material, org);
            } else {
              if (item.getComponent(MeshRenderer)) {
                var customMaterial = new Material();
                customMaterial.copy(_this3.touchMaterial);
                item.getComponent(MeshRenderer).setMaterial(customMaterial, 0);
              }

              _this3.setNodeMaterial(item, material, org);
            }
          });
        } // 点击结束事件
        ;

        _proto.onTouchEnd = function onTouchEnd(event) {
          if (this.gameStop) return;
          if (this.allItem.length == 0) return;

          if (this.collectTiles.length >= 7) {
            return;
          }

          var p = event.getLocation();
          var Scence = this.node.parent;
          var camera = Scence.getChildByName("Main Camera").getComponent(Camera);
          var r = new geometry.Ray();
          camera == null ? void 0 : camera.screenPointToRay(p.x, p.y, r);
          var b = PhysicsSystem.instance.raycastClosest(r, 0xffffffff, 10000000, true);

          if (b) {
            var collider = PhysicsSystem.instance.raycastClosestResult.collider;
            if (!this.checkItem(collider.node)) return;

            if (this.touchNode == collider.node) {
              if (!collider.node.getComponent(Item).isTemp) {
                this.touchNode.getComponent(Item).setUseGravity(true);
              }

              this.setNodeMaterial(this.touchNode, null, false);

              if (this.currentLevel == 2) {
                this.initGravity();
              }

              if (collider.node.getComponent(Item).isBottom) return;
              this.chooseItem(this.touchNode);
            } else {
              console.log(this.touchNode, "不是同一个节点");
            }
          } else {
            console.log(b);
          }
        } // 移动事件
        ;

        _proto.onTouchMove = function onTouchMove(event) {
          if (this.gameStop) return;
          if (this.allItem.length == 0) return;

          if (this.collectTiles.length >= 7) {
            return;
          }

          var p = event.getLocation();
          var Scence = this.node.parent;
          var camera = Scence.getChildByName("Main Camera").getComponent(Camera);
          var r = new geometry.Ray();
          camera == null ? void 0 : camera.screenPointToRay(p.x, p.y, r);
          var b = PhysicsSystem.instance.raycastClosest(r, 0xffffffff, 10000000, true);

          if (b) {
            var collider = PhysicsSystem.instance.raycastClosestResult.collider;

            if (collider.node) {
              if (!this.checkItem(collider.node)) {
                this.touchNode.getComponent(Item).setUseGravity(true);
                this.setNodeMaterial(this.touchNode, null, false);
                return;
              }

              if (this.touchNode && this.touchNode == collider.node) {
                return;
              } else {
                this.touchNode.getComponent(Item).setUseGravity(true);
                this.setNodeMaterial(this.touchNode, null, false);
                this.setNodeMaterial(collider.node, this.material, true);
                collider.node.getComponent(Item).setUseGravity(false);
                collider.node.getComponent(Item).setWorldPosition(1);
                this.touchNode = collider.node;
              }
            }
          }
        } // 选择物品
        ;

        _proto.chooseItem = function chooseItem(item) {
          var chooseName = item.name; // 取消重力影响

          item.getComponent(Item).destoryCollider();
          console.log(item.getComponent(Item));

          if (item.getComponent(Item).isTemp) {
            for (var i = 0; i < this.temporaryItem.length; ++i) {
              if (this.temporaryItem[i] == item) {
                this.temporaryItem.splice(i, 1);
                break;
              }
            }
          } else {
            //删除点击对象从列表
            for (var i = 0; i < this.allItem.length; ++i) {
              if (this.allItem[i] == item) {
                this.allItem.splice(i, 1);
                break;
              }
            }
          } //插入


          var bInsert = false;

          for (var i = this.collectTiles.length - 1; i >= 0; --i) {
            if (this.collectTiles[i].name == chooseName) {
              this.collectTiles.splice(i + 1, 0, item);
              bInsert = true;
              break;
            }
          }

          if (!bInsert) {
            this.collectTiles.push(item);
          }

          this.playAnimationStart(chooseName);
        } // 检查结果
        ;

        _proto.checkResult = function checkResult() {
          if (this.collectTiles.length >= 7) {
            this.gameStop = true;
            this.view["Canvas/Over"].active = true;
            this.view["Canvas/Over/falied"].active = true;
            this.view["Canvas/Over/win"].active = false;
            this.isGameOver = false;
          } else if (this.collectTiles.length == 0 && this.allItem.length == 0) {
            if (this.currentLevel == 1) {
              // this.init(resPkg.GUI.urls.length, 8);
              this.init2(this.InitializedData);
              this.currentLevel = 2;
            } else {
              this.gameStop = true;
              this.view["Canvas/Over"].active = true;
              this.view["Canvas/Over/falied"].active = false;
              this.view["Canvas/Over/win"].active = true;
            }
          }
        } // 移动到正确位置动画
        ;

        _proto.moveToRightPos = function moveToRightPos() {
          var _this4 = this;

          if (this.temporaryItem.length == 0) {
            if (this.view["temporary"].active) {
              this.view["temporary"].active = false;
            }
          }

          this.collectTiles.map(function (a, i) {
            var tileItem = a.getComponent(Item);
            Tween.stopAllByTarget(a);
            var pointA = a.worldPosition;

            var pointB = _this4.collectPos[i].clone(); // 求中间坐标


            var midPoint = new Vec3((pointA.x + pointB.x) / 2, (pointA.y + pointB.y) * 2, (pointA.z + pointB.z) / 2);
            tween(a).to(0.2, {
              worldPosition: midPoint
            }).to(0.3, {
              worldPosition: _this4.collectPos[i].clone()
            }).start();
            tween(a).to(0.5, {
              eulerAngles: tileItem.rotation,
              scale: tileItem.scale
            }).call(function () {
              tileItem.isBottom = true;

              if (tileItem.removed) {
                tween(a).to(0.25, {
                  worldPosition: tileItem.removedPos
                }, {
                  easing: "backIn"
                }).call(function () {
                  //最中央的播放移除特效
                  if (tileItem.playRmovedEff) {
                    // 获取爆炸的屏幕地址
                    var Scence = _this4.node.parent;
                    var camera = Scence.getChildByName("Main Camera").getComponent(Camera);
                    var pos = camera.convertToUINode(a.worldPosition, _this4.view["Canvas"]);

                    if (a.name == "usdc" || a.name == "eggcoin") {
                      _this4.view["Canvas/ui/tokenani"].active = true;

                      _this4.view["Canvas/ui/tokenani"].setPosition(pos.x, pos.y);

                      var aniInstance = _this4.view["Canvas/ui/tokenani"].getComponent(sp.Skeleton);

                      var tokenName = a.name;

                      if (a.name == "usdc") {
                        aniInstance.skeletonData = _this4.usdc;
                      } else {
                        aniInstance.skeletonData = _this4.coin;
                      }

                      aniInstance.setAnimation(0, "baozha", false);
                      aniInstance.addAnimation(0, "feichu", false);

                      if (tokenName == "usdc") {
                        var span = _this4.view["Canvas/ui/tokenani"];
                        var basePo = span.getWorldPosition();

                        var _pos = _this4.view["Canvas/ui/coinBox/usdcCion"].getWorldPosition();

                        console.log(_pos, basePo);
                        tween(span).delay(1.5).to(1, {
                          worldPosition: new Vec3(_pos.x - 350, _pos.y - basePo.y, 0)
                        }).start();
                      } else {
                        var _span = _this4.view["Canvas/ui/tokenani"];

                        var _basePo = _span.getWorldPosition();

                        var _pos2 = _this4.view["Canvas/ui/coinBox/eggCion"].getWorldPosition();

                        console.log(_pos2, _basePo);
                        tween(_span).delay(1.5).to(1, {
                          worldPosition: new Vec3(_pos2.x - 350, _pos2.y - _basePo.y, 0)
                        }).start();
                      }
                    } else {
                      _this4.view["Canvas/ui/animation"].active = true;

                      _this4.view["Canvas/ui/animation"].setPosition(pos.x, pos.y);

                      var _aniInstance = _this4.view["Canvas/ui/animation"].getComponent(sp.Skeleton);

                      _aniInstance.setAnimation(0, "effect", false);
                    }

                    AudioMgr.Instance.play("starCollect", {
                      playOnAwake: true
                    });

                    _this4.checkResult();
                  }

                  if (a.name == "usdc") {
                    _this4.usdtCount += 1;

                    _this4.updateCoinCount();
                  }

                  if (a.name == "eggcoin") {
                    _this4.myCoinCount += 1;

                    _this4.updateCoinCount();
                  }

                  a.destroy();

                  _this4.moveToRightPos();
                }).start();
              }
            }).start();
          });
        };

        _proto.updateCoinCount = function updateCoinCount() {
          this.view["Canvas/ui/coinBox/eggCion/Label"].getComponent(Label).string = "" + this.myCoinCount;
          this.view["Canvas/ui/coinBox/usdcCion/Label"].getComponent(Label).string = "" + this.usdtCount;
        };

        _proto.init2 = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(InitializedData) {
            var parentNode, tempNode, _iterator, _step, item, node, _tempNode, meshRenderer;

            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  parentNode = this.view["GameSpace/ItemSource"];
                  tempNode = instantiate(this.nft);
                  parentNode.addChild(tempNode); // InitializedData

                  for (_iterator = _createForOfIteratorHelperLoose(InitializedData); !(_step = _iterator()).done;) {
                    item = _step.value; // 假设每个 item 都是异步操作
                    // console.log(item.level);

                    node = ResMgr.Instance.getAsset("GUI", item.path);
                    _tempNode = instantiate(node); // tempNode.setPosition(getRandom(-2, 2), getRandom(0, 1), getRandom(-2, 2));

                    _tempNode.eulerAngles = new Vec3(getRandom(0, 360), getRandom(0, 360), getRandom(0, 360));
                    _tempNode.level = item.level;
                    this.allItem.push(_tempNode);
                    _tempNode.getComponent(RigidBody).linearDamping == 1000000;
                    _tempNode.getComponent(RigidBody).angularDamping == 1000000;
                    parentNode.addChild(_tempNode);
                    meshRenderer = _tempNode.getComponent(MeshRenderer);

                    if (meshRenderer) {
                      meshRenderer.enabled = false; // 隐藏模型
                    } else {
                      _tempNode.children.forEach(function (item) {
                        if (item.getComponent(MeshRenderer)) ;
                      });
                    }
                  }

                  this.initTime();

                case 5:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));

          function init2(_x) {
            return _init.apply(this, arguments);
          }

          return init2;
        }() // 初始化
        ;

        _proto.init = function init(num, index) {
          var _this5 = this;

          var parentNode = this.view["GameSpace/ItemSource"];
          var i = 0;
          var timer = setInterval(function () {
            var arr = resPkg.GUI.urls.slice(3, 6);
            arr.forEach(function (item, index) {
              var node = ResMgr.Instance.getAsset("GUI", item.path);
              var tempNode = instantiate(node); // tempNode.setPosition(getRandom(-2, 2), getRandom(0, 1), getRandom(-2, 2));

              tempNode.eulerAngles = new Vec3(getRandom(0, 360), getRandom(0, 360), getRandom(0, 360));

              _this5.allItem.push(tempNode);

              parentNode.addChild(tempNode);
            });
            i++;

            if (i > index) {
              clearInterval(timer);
            }
          }, 100);
        };

        _proto.initTime = function initTime() {
          var _this6 = this;

          this.view["Canvas/ui/time"].active = true;

          var targetTime = _cjsExports().add(10, "minute");

          this.schedule(function () {
            var time = countdown(targetTime);

            if (time.end) {
              // console.log("输了");
              _this6.unscheduleAllCallbacks();

              _this6.gameStop = true;
              _this6.view["Canvas/Over"].active = true;
              _this6.view["Canvas/Over/falied"].active = true;
              _this6.view["Canvas/Over/win"].active = false;
              _this6.isGameOver = true;
            } else {
              _this6.view["Canvas/ui/time/Label"].getComponent(Label).string = time.minutes + ":" + time.seconds;
            }
          });
        } //初始化重力
        ;

        _proto.initGravity = function initGravity() {
          // targetNode
          var targetPosition = this.view["targetNode"].worldPosition;
          this.allItem.forEach(function (tempNode, index) {
            var attractedBody = tempNode.getComponent(RigidBody); // 计算吸引方向（从被吸引物体指向目标物体的向量）

            var direction = targetPosition.subtract(tempNode.worldPosition); // 计算两者之间的距离

            var distance = direction.length(); // 归一化方向向量（使其长度为 1）

            direction = direction.normalize(); // 计算吸引力的大小（根据距离可以做衰减处理，距离越远吸引力越小）

            var attractionStrength = 150; // 吸引力大小

            var forceMagnitude = attractionStrength / Math.max(distance * distance, 1); // 吸引力可以跟距离平方成反比
            // 计算施加的力向量
            // console.log('forceMagnitude', forceMagnitude);

            var force = direction.multiplyScalar(forceMagnitude); // 对被吸引物体施加力
            // console.log('force', force);

            attractedBody.applyForce(force, tempNode.worldPosition);
          });
        };

        _proto.start = function start() {
          var _this7 = this;

          AudioMgr.Instance.play("bg", {
            playOnAwake: true,
            loop: true,
            volume: 0.4
          });
          this.currentLevel = 1;
          this.usdtCount = 0;
          this.myCoinCount = 0;
          this.changeTag();
          this.collectPos = [];
          this.view["collectnox"].children.map(function (tempNode) {
            _this7.collectPos.unshift(tempNode.worldPosition);

            tempNode.active = false;
          });
          this.view["temporary"].children.map(function (tempNode) {
            _this7.temporaryPos.push(tempNode.worldPosition);

            tempNode.active = false;
          });
          this.view["temporary"].active = false;
          this.view["Canvas/ui/stop"].on(Node.EventType.TOUCH_END, function (e) {
            e.propagationStopped = true; // Tost("任务完成，奖励已到")

            _this7.view["Canvas/gameOver"].active = true;
            _this7.gameStop = true;
          });
          this.view["Canvas/gameOver/mask/close"].on(Node.EventType.TOUCH_END, function (e) {
            e.propagationStopped = true; // Tost("任务完成，奖励已到")

            _this7.view["Canvas/gameOver"].active = false;
            _this7.gameStop = false;
          });
          this.view["Canvas/gameOver/mask/continue"].on(Node.EventType.TOUCH_END, function (e) {
            e.propagationStopped = true; // Tost("任务完成，奖励已到")

            _this7.view["Canvas/gameOver"].active = false;
            _this7.gameStop = false;
          });
          this.view["Canvas/gameOver/mask/giveUp"].on(Node.EventType.TOUCH_END, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e) {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  e.propagationStopped = true;
                  _context4.next = 3;
                  return _this7.submitGameOver("false");

                case 3:
                  _this7.view["Canvas/gameOver"].active = false;
                  _this7.currentLevel = 1;
                  director.loadScene("start");

                case 6:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          })));
          this.view["Canvas/Over/falied/giveUp"].on(Node.EventType.TOUCH_END, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(e) {
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  e.propagationStopped = true;
                  _context5.next = 3;
                  return _this7.submitGameOver("false");

                case 3:
                  _this7.view["Canvas/Over"].active = false;
                  _this7.currentLevel = 1;
                  director.loadScene("start");

                case 6:
                case "end":
                  return _context5.stop();
              }
            }, _callee5);
          })));
          this.view["Canvas/Over/falied/continue"].on(Node.EventType.TOUCH_END, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(e) {
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  e.propagationStopped = true;

                  if (!_this7.isGameOver) {
                    _context6.next = 9;
                    break;
                  }

                  _context6.next = 4;
                  return _this7.submitGameOver("true");

                case 4:
                  _this7.view["Canvas/Over"].active = false;
                  _this7.currentLevel = 1;
                  director.loadScene("start");
                  _context6.next = 16;
                  break;

                case 9:
                  _this7.view["Canvas/Over"].active = false;
                  _this7.temporaryItem = _this7.collectTiles.slice(0, _this7.collectTiles.length);

                  _this7.temporaryItem.forEach(function (item) {
                    var tileItem = item.getComponent(Item);
                    tileItem.isBottom = false;
                  });

                  _this7.collectTiles = _this7.collectTiles.slice(_this7.collectTiles.length);
                  _this7.view["temporary"].active = true;

                  _this7.mvTemporary();

                  _this7.gameStop = false;

                case 16:
                case "end":
                  return _context6.stop();
              }
            }, _callee6);
          })));
          this.view["Canvas/Over/win/continue"].on(Node.EventType.TOUCH_END, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(e) {
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  e.propagationStopped = true;
                  _context7.next = 3;
                  return _this7.submitGameOver("true");

                case 3:
                  _this7.view["GameSpace/ItemSource"].removeAllChildren();

                  _this7.view["Canvas/Over"].active = false;
                  _this7.gameStop = false;
                  _this7.collectTiles = []; // this.init(resPkg.GUI.urls.length, 8);
                  // this.init2(this.InitializedData);

                  _this7.currentLevel = 1;
                  director.loadScene("start");

                case 9:
                case "end":
                  return _context7.stop();
              }
            }, _callee7);
          })));
          this.view["Canvas/gameOver/mask/setting/sound/Toggle"].on("toggle", function (toggle) {
            if (toggle.isChecked) {
              AudioMgr.Instance.play("bg", {
                playOnAwake: true,
                loop: true,
                volume: 0.4
              });
            } else {
              AudioMgr.Instance.stop("bg");
            }
          });
          this.view["Canvas/gameOver/mask/setting/music/Toggle"].on("toggle", function (toggle) {
            if (toggle.isChecked) {
              _this7.clickPlay = true;
            } else {
              _this7.clickPlay = false;
            }
          });
          this.view["Canvas/ui/bottom/button"].on(Node.EventType.TOUCH_END, function (e) {
            e.propagationStopped = true; // 开始讲数据已到上面;

            if (_this7.stage1 == 0) {
              _this7.view["Canvas/BulletFrame"].active = true;

              _this7.view["Canvas/BulletFrame"].getComponent(BulletFrame).setType(1);

              return;
            }

            if (_this7.collectTiles.length == 0) {
              Tost("No items were collected");
              return;
            } else {
              if (_this7.collectTiles.length > 3) {
                //删除this.collectTiles 前3 个 节点存储搭配移动到临时节点
                _this7.temporaryItem = _this7.collectTiles.slice(0, 3);
                _this7.collectTiles = _this7.collectTiles.slice(3);
              } else {
                //将前3个移动到临时节点
                _this7.temporaryItem = _this7.collectTiles.slice(0, _this7.collectTiles.length);
                _this7.collectTiles = _this7.collectTiles.slice(_this7.collectTiles.length);
              }

              _this7.temporaryItem.forEach(function (item) {
                var tileItem = item.getComponent(Item);
                tileItem.isBottom = false;
              });
            }

            _this7.view["temporary"].active = true;

            _this7.mvTemporary();

            _this7.stage1 = 0;

            _this7.changeTag();
          });
          this.view["Canvas/ui/bottom/button1"].on(Node.EventType.TOUCH_END, function (e) {
            e.propagationStopped = true;

            if (_this7.stage2 == 0) {
              _this7.view["Canvas/BulletFrame"].active = true;

              _this7.view["Canvas/BulletFrame"].getComponent(BulletFrame).setType(2);

              return;
            }

            if (_this7.collectTiles.length == 0) {
              Tost("No items were collected");
              return;
            } else {
              // 找到两个相同的物品
              var sameItem = _this7.collectTiles.filter(function (a, i) {
                return _this7.collectTiles.some(function (b, j) {
                  return a.name == b.name && i != j;
                });
              });

              if (sameItem.length > 0) {
                var nodeName = sameItem[0].name; //从

                var delNodeList = [];

                for (var i = 0; i < _this7.allItem.length; ++i) {
                  if (_this7.allItem[i].name == nodeName) {
                    delNodeList.push.apply(delNodeList, _this7.allItem.splice(i, 1));
                    break;
                  }
                } // 插入


                delNodeList.forEach(function (item) {
                  var bInsert = false;

                  for (var i = _this7.collectTiles.length - 1; i >= 0; --i) {
                    if (_this7.collectTiles[i].name == item.name) {
                      item.getComponent(Item).destoryCollider();
                      item.getComponent(Item).setUseGravity(false);

                      _this7.collectTiles.splice(i + 1, 0, item);

                      bInsert = true;
                      break;
                    }
                  }

                  if (!bInsert) {
                    _this7.collectTiles.push(item);
                  }
                });

                _this7.playAnimationStart(nodeName);
              } else {
                //没有找到就取this.collectTiles 中的第一个 
                if (_this7.collectTiles.length < 6) {
                  var _nodeName = _this7.collectTiles[0].name;
                  var _delNodeList = [];

                  for (var j = 0; j < 2; j++) {
                    for (var i = 0; i < _this7.allItem.length; ++i) {
                      if (_this7.allItem[i].name == _nodeName) {
                        _delNodeList.push.apply(_delNodeList, _this7.allItem.splice(i, 1));

                        break;
                      }
                    }
                  } // 插入


                  _delNodeList.forEach(function (item) {
                    var bInsert = false;

                    for (var i = _this7.collectTiles.length - 1; i >= 0; --i) {
                      if (_this7.collectTiles[i].name == item.name) {
                        item.getComponent(Item).destoryCollider();
                        item.getComponent(Item).setUseGravity(false);

                        _this7.collectTiles.splice(i + 1, 0, item);

                        bInsert = true;
                        break;
                      }
                    }

                    if (!bInsert) {
                      _this7.collectTiles.push(item);
                    }
                  });

                  _this7.playAnimationStart(_nodeName);
                } else {
                  Tost("Insufficient vacancies");
                  return;
                }
              }
            }

            _this7.stage2 = 0;

            _this7.changeTag();
          });
          this.view["Canvas/ui/bottom/button2"].on(Node.EventType.TOUCH_END, function (e) {
            e.propagationStopped = true;

            if (_this7.stage3 == 0) {
              _this7.view["Canvas/BulletFrame"].active = true;

              _this7.view["Canvas/BulletFrame"].getComponent(BulletFrame).setType(3);

              return;
            }

            _this7.stage3 = 1;

            _this7.changeTag();
          });
          this.view["Canvas/BulletFrame/mask/Button"].on(Node.EventType.TOUCH_END, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(e) {
            var nodeTemp;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  e.propagationStopped = true;
                  nodeTemp = _this7.view["Canvas/BulletFrame"].getComponent(BulletFrame);

                  if (nodeTemp.type == 1) {
                    _this7.stage1 = 1;
                  } else if (nodeTemp.type == 2) {
                    _this7.stage2 = 1;
                  } else {
                    _this7.stage3 = 1;
                  }

                  _context8.next = 5;
                  return _this7.buyAndShareItem();

                case 5:
                  _this7.changeTag();

                  nodeTemp.close();

                case 7:
                case "end":
                  return _context8.stop();
              }
            }, _callee8);
          })));
        };

        _proto.submitGameOver = /*#__PURE__*/function () {
          var _submitGameOver = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(res) {
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return gameOver({
                    game_user_id: this.gameDate.game_user_id,
                    game_id: this.gameDate.game_id,
                    result: res,
                    inside_point: this.myCoinCount,
                    inside_usdt: this.usdtCount,
                    prop_one: this.gameDate.prop_one
                  });

                case 2:
                  _context9.sent;

                case 3:
                case "end":
                  return _context9.stop();
              }
            }, _callee9, this);
          }));

          function submitGameOver(_x7) {
            return _submitGameOver.apply(this, arguments);
          }

          return submitGameOver;
        }() //实现业务逻辑购买和转发
        ;

        _proto.buyAndShareItem = /*#__PURE__*/function () {
          var _buyAndShareItem = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
            var hash, _window, _window$TelegramGameP, result;

            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  if (!(this.gameDate.prop_one % 3 == 0)) {
                    _context10.next = 7;
                    break;
                  }

                  _context10.next = 3;
                  return GameFiMgr.Instance.sendTransaction(0.00001);

                case 3:
                  hash = _context10.sent;
                  console.log(hash);
                  _context10.next = 8;
                  break;

                case 7:
                  (_window = window) == null ? void 0 : (_window$TelegramGameP = _window.TelegramGameProxy) == null ? void 0 : _window$TelegramGameP.shareScore();
                // const telegram = new TelegramWebAppContainer({ exposeInMainWorld: true });
                // const shareUrl = 'https://game1-mocha.vercel.app';
                // const shareText = '123232';
                // `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
                // await telegram.WebApp.openTelegramLink(shareText);
                // Tost("分享逻辑");

                case 8:
                  _context10.next = 10;
                  return buyPropProduct({
                    game_id: this.gameDate.game_id,
                    prop_one: this.gameDate.prop_one
                  });

                case 10:
                  result = _context10.sent;

                  if (result.code == 200) {
                    this.gameDate.prop_one = result.result.prop_one;
                  }

                case 13:
                case "end":
                  return _context10.stop();
              }
            }, _callee10, this);
          }));

          function buyAndShareItem() {
            return _buyAndShareItem.apply(this, arguments);
          }

          return buyAndShareItem;
        }();

        _proto.playAnimationStart = function playAnimationStart(nodeName) {
          this.moveToRightPos(); //标记要删除的节点

          var tmp = this.collectTiles.filter(function (a) {
            return a.name == nodeName;
          });

          if (tmp.length == 3) {
            for (var i = this.collectTiles.length - 1; i >= 0; --i) {
              if (this.collectTiles[i].name == nodeName) {
                var delNode = this.collectTiles[i];
                delNode.getComponent(Item).removed = true;
                this.collectTiles.splice(i, 1);
                delNode.getComponent(Item).removedPos = tmp[1].worldPosition;
                if (delNode == tmp[1]) //是否是最中央的
                  delNode.getComponent(Item).playRmovedEff = true;
              }
            }
          }

          this.checkResult();
        } // 移动到临时节点
        ;

        _proto.mvTemporary = function mvTemporary() {
          var _this8 = this;

          var tempArr = this.temporaryPos.map(function (item) {
            return item.clone();
          });
          this.temporaryItem.map(function (tempNode, index) {
            tempNode.getComponent(Item).isTemp = true;
            var i = index % 3;
            var layer = Math.floor(index / 3);

            if (layer == 1) {
              tempArr[i].y = tempArr[i].y * 2;
            } else if (layer == 2) {
              tempArr[i].y = tempArr[i].y * 3;
            } else {
              tempArr[i].y = tempArr[i].y * 1;
            }

            tween(tempNode).to(0.4, {
              worldPosition: tempArr[i]
            }).call(function () {
              _this8.moveToRightPos();
            }).start();
          });
        };

        _proto.update = function update(dt) {};

        return Main;
      }(UICtrl), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "material", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tag", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "add", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nft", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "usdc", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "coin", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Message.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UiMgr.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Label, UIOpacity, tween, UICtrl;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
    }, function (module) {
      UICtrl = module.UICtrl;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "51bc7fU8Y9MSYWWLBh/fEe+", "Message", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Message = exports('Message', (_dec = ccclass('Message'), _dec(_class = /*#__PURE__*/function (_UICtrl) {
        _inheritsLoose(Message, _UICtrl);

        function Message() {
          return _UICtrl.apply(this, arguments) || this;
        }

        var _proto = Message.prototype;

        _proto.onLoad = function onLoad() {
          _UICtrl.prototype.onLoad.call(this);
        };

        _proto.setValue = function setValue(value, time) {
          var _this = this;

          this.node.getChildByName("Label").getComponent(Label).string = value;
          var opComp = this.node.getComponent(UIOpacity);
          tween(opComp).to(0.6, {
            opacity: 255
          }).start();
          var timer = setTimeout(function () {
            if (_this.node) {
              _this.node.active = false;

              _this.node.destroy();
            }

            clearTimeout(timer);
          }, time ? time : 2000);
        };

        return Message;
      }(UICtrl)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/request.ts", ['cc', './config.ts', './ResMgr.ts', './index2.ts', './storage.ts'], function (exports) {
  var cclegacy, find, instantiate, baseUrl, baseUrl1, ResMgr, keyObject, getStorageData;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      find = module.find;
      instantiate = module.instantiate;
    }, function (module) {
      baseUrl = module.baseUrl;
      baseUrl1 = module.baseUrl1;
    }, function (module) {
      ResMgr = module.ResMgr;
    }, function (module) {
      keyObject = module.keyObject;
    }, function (module) {
      getStorageData = module.getStorageData;
    }],
    execute: function () {
      exports('default', request);

      cclegacy._RF.push({}, "0b092YOWnRMHZj9czjoyStZ", "request", undefined);

      var Ajax = /*#__PURE__*/function () {
        function Ajax() {
          this.xhr = void 0;
          this.xhr = new XMLHttpRequest();
          this.xhr.timeout = 50000;
        }

        var _proto = Ajax.prototype;

        _proto.get = function get(url, data) {
          var _this = this;

          return new Promise(function (resolve, reject) {
            var canvas = find("Canvas");
            var Loading = ResMgr.Instance.getAsset("GUI", "component/Loading");
            var child = instantiate(Loading);

            if (!canvas.getChildByName("Loading")) {
              canvas.addChild(child);
            }

            _this.xhr.onreadystatechange = function () {
              if (_this.xhr.readyState == 4 && _this.xhr.status == 200) {
                var res = JSON.parse(_this.xhr.responseText);
                child.destroy();
                resolve(res);
              }
            };

            var urlString = baseUrl1 + url;

            if (data) {
              if (data) {
                urlString = urlString + '?' + keyObject(data);
              }
            }

            _this.xhr.open("GET", urlString, true);

            var token = getStorageData("token");

            if (token) {
              _this.xhr.setRequestHeader("token", token);
            }

            _this.xhr.setRequestHeader("Content-type", "application/json;charset=utf-8");

            _this.xhr.send();
          });
        };

        _proto.post = function post(url, data) {
          var _this2 = this;

          return new Promise(function (resolve, reject) {
            _this2.xhr.onreadystatechange = function () {
              if (_this2.xhr.readyState == 4 && _this2.xhr.status == 201) {
                var res = JSON.parse(_this2.xhr.responseText);
                resolve(res);
              }
            };

            var urlString = baseUrl1 + url;

            _this2.xhr.open("POST", urlString, true);

            var token = getStorageData("token");

            if (token) {
              _this2.xhr.setRequestHeader("token", token);
            }

            _this2.xhr.setRequestHeader("Content-type", "application/json;charset=utf-8");

            _this2.xhr.send(JSON.stringify(data));
          });
        };

        return Ajax;
      }();

      var ajax = exports('ajax', new Ajax());

      function request(options) {
        return new Promise(function (resolve, reject) {
          var canvas = find("Canvas"); // const Loading = ResMgr.Instance.getAsset("GUI", "component/Loading");
          // const child = instantiate(Loading);
          // if (!canvas.getChildByName("Loading")) {
          //   if (
          //     options.url == "levelList/getAllClearLevelList"
          //     || options.url == "levelList/levelToGame"
          //     || options.url == "arenaUser/ticket"
          //     // || options.url == "talentTreeUser/getAllTalentTree"
          //   ) {
          //     canvas.addChild(child);
          //   }
          // };

          var xhr = new XMLHttpRequest();

          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 201)) {
              var res = JSON.parse(xhr.responseText); // child.destroy();

              resolve(res);
            }
          };

          xhr.timeout = options.timeout || 50000; // 5 seconds for timeout

          var method = options.method || 'GET';
          var url = baseUrl + options.url;
          options.data = options.data;

          if (method == 'get' || method == "GET") {
            if (options.data) {
              url = url + '?' + keyObject(options.data);
            }

            xhr.open(method, url, true);
            var token = getStorageData("token");

            if (token) {
              xhr.setRequestHeader("token", token);
            }

            xhr.setRequestHeader("Content-type", "application/json;charset=utf-8");
            xhr.send();
          } else {
            xhr.open(method, url, true);

            var _token = getStorageData("token");

            if (_token) {
              xhr.setRequestHeader("token", _token);
            }

            xhr.setRequestHeader("Content-type", "application/json;charset=utf-8");

            try {
              xhr.send(JSON.stringify(options.data));
            } catch (error) {
              console.log(error);
            }
          }
        });
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, assetManager, SpriteFrame, SpriteAtlas, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
      SpriteFrame = module.SpriteFrame;
      SpriteAtlas = module.SpriteAtlas;
      Component = module.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "87881hT1qdLp79gFpPIDHKe", "ResMgr", undefined);

      var ResMgr = exports('ResMgr', /*#__PURE__*/function (_Component) {
        _inheritsLoose(ResMgr, _Component);

        function ResMgr() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.totalAb = 0;
          _this.nowAb = 0;
          _this.total = 0;
          _this.now = 0;
          _this.abBUnds = {};
          _this.progressFun = null;
          _this.endFun = null;
          return _this;
        }

        var _proto = ResMgr.prototype;

        _proto.onLoad = function onLoad() {
          if (!ResMgr.Instance) {
            ResMgr.Instance = this;
          } else {
            this.destroy();
            return;
          }
        } //加载
        ;

        _proto.preloadResourcePkg = function preloadResourcePkg(resPkg, progressFun, endFun) {
          var _this2 = this;

          this.totalAb = 0;
          this.nowAb = 0;
          this.total = 0;
          this.now = 0;
          this.progressFun = progressFun;
          this.endFun = endFun;

          for (var key in resPkg) {
            this.totalAb++;
            this.total += resPkg[key].urls.length;
          }

          for (var _key2 in resPkg) {
            this.loadAssetBundle(_key2, function () {
              _this2.nowAb++;

              if (_this2.nowAb == _this2.totalAb) {
                //完了加载资源
                _this2.loadAssetsInAssetBundle(resPkg);
              }
            });
          }
        } //预加载
        ;

        _proto.preloadResourcePkgAny = function preloadResourcePkgAny(resPkg, progressFun, endFun) {
          var _this3 = this;

          this.totalAb = 0;
          this.nowAb = 0;
          this.total = 0;
          this.now = 0;
          this.progressFun = progressFun;
          this.endFun = endFun;

          for (var key in resPkg) {
            this.totalAb++;
            this.total += resPkg[key].urls.length;
          }

          for (var _key3 in resPkg) {
            assetManager.preloadAny(resPkg[_key3].urls, function (finished, total, item) {
              _this3.nowAb++;
              _this3.now += finished;

              if (_this3.progressFun) {
                _this3.progressFun(_this3.now, _this3.total);
              }
            }, function (err, data) {
              if (err) {
                console.error("预加载失败");
              }

              if (_this3.endFun) {
                _this3.endFun();
              }
            });
          }
        };

        _proto.loadAssetsInAssetBundle = function loadAssetsInAssetBundle(resPkg) {
          var _this4 = this;

          var _loop = function _loop(key) {
            var urlSet = resPkg[key].urls;
            urlSet.forEach(function (item) {
              _this4.loadRes(_this4.abBUnds[key], item.path, item.assetType);
            });
          };

          for (var key in resPkg) {
            _loop(key);
          }
        };

        _proto.loadRes = function loadRes(bundle, url, type) {
          var _this5 = this;

          bundle.load(url, type, function (err, asset) {
            _this5.now++;
            if (type.name == "SpriteAtlas") ;

            if (err) {
              console.error(err);
              console.error("load res err " + url);
            }

            if (_this5.progressFun) {
              _this5.progressFun(_this5.now, _this5.total);
            }

            if (_this5.now >= _this5.total) {
              if (_this5.endFun) {
                _this5.endFun();
              }
            }
          });
        };

        _proto.loadAssetBundle = function loadAssetBundle(abName, callFun) {
          var _this6 = this;

          assetManager.loadBundle(abName, function (error, bundle) {
            if (error) {
              console.error("load loadAssetBundle error" + abName); // this.abBUnds[abName] = null;
            } else {
              _this6.abBUnds[abName] = bundle;
            } // if (abName == "LSource") {
            //     bundle.preloadDir("/", SpriteFrame);
            //     bundle.preloadDir("/card", SpriteFrame);
            //     bundle.preloadDir("/trainBuff", SpriteFrame);
            // }


            if (callFun) {
              callFun();
            }
          });
        } //释放内存
        ;

        _proto.unloadResourcePkg = function unloadResourcePkg(resPkg) {
          for (var key in resPkg) {
            assetManager.removeBundle(this.abBUnds[key]);
          } // assetManager.releaseAll();

        };

        _proto.getAsset = function getAsset(abName, url, callBack) {
          var bundle = assetManager.getBundle(abName);
          if (!bundle) console.error("getBundle err !!!");
          bundle.load(url, SpriteFrame, function (err, asset) {});
          var data = bundle.get(url);

          if (!data) {
            bundle.load(url, SpriteFrame, function (err, asset) {
              // console.log(asset);
              callBack && callBack(asset);
            });
          }

          return data;
        };

        _proto.getPlistAsset = function getPlistAsset(abName, url, callBack) {
          var bundle = assetManager.getBundle(abName);
          if (!bundle) console.error("getBundle err !!!");
          bundle.load(url, SpriteAtlas, function (err, asset) {
            if (err) {
              console.error("load res err " + url);
            }

            callBack && callBack(asset);
          });
        };

        return ResMgr;
      }(Component));
      ResMgr.Instance = void 0;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Start.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResMgr.ts', './GameFiMgr.ts', './index.ts', './UiMgr.ts', './index3.ts', './storage.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, director, Label, ProgressBar, ResMgr, GameFiMgr, resPkg, UICtrl, getGameUserInfo, setStorageData;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      director = module.director;
      Label = module.Label;
      ProgressBar = module.ProgressBar;
    }, function (module) {
      ResMgr = module.ResMgr;
    }, function (module) {
      GameFiMgr = module.GameFiMgr;
    }, function (module) {
      resPkg = module.resPkg;
    }, function (module) {
      UICtrl = module.UICtrl;
    }, function (module) {
      getGameUserInfo = module.getGameUserInfo;
    }, function (module) {
      setStorageData = module.setStorageData;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "56e26DaluZGB6fS6NaTOueI", "Start", undefined); // import { TelegramWebAppContainer } from '@telegram-web-app/core';


      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Start = exports('Start', (_dec = ccclass('Start'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_UICtrl) {
        _inheritsLoose(Start, _UICtrl);

        function Start() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _UICtrl.call.apply(_UICtrl, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "GameData", _descriptor, _assertThisInitialized(_this));

          _this.isLogin = false;
          _this.address = "";
          return _this;
        }

        var _proto = Start.prototype;

        _proto.onLoad = function onLoad() {
          _UICtrl.prototype.onLoad.call(this);

          director.addPersistRootNode(this.GameData);
          this.initGameDatainfo();
        };

        _proto.initGameDatainfo = /*#__PURE__*/function () {
          var _initGameDatainfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var _this2 = this;

            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (!GameFiMgr.Instance._bTonInit) {
                    GameFiMgr.Instance.initTonConnect( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(info) {
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            console.log(info);

                            if (info) {
                              _this2.address = info.account.address; // console.log(info);
                              // this.loginWeb();

                              _this2.isLogin = true;
                            } else {
                              _this2.isLogin = true;
                              _this2.address = GameFiMgr.Instance._cocosGameFi.wallet.account.address; // this.loginWeb();
                            }

                          case 2:
                          case "end":
                            return _context.stop();
                        }
                      }, _callee);
                    })));
                  } else {
                    this.isLogin = true;
                    this.address = GameFiMgr.Instance._cocosGameFi.wallet.account.address; // this.loginWeb();
                  }

                  this.view["Button"].on(Node.EventType.TOUCH_END, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
                    var hash;
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                          e.propagationStopped = true;

                          if (!_this2.isLogin) {
                            _context2.next = 8;
                            break;
                          }

                          _context2.next = 4;
                          return GameFiMgr.Instance.sendTransaction(0.00001);

                        case 4:
                          hash = _context2.sent;
                          console.log(hash); // director.loadScene("main");
                          // const hash = await GameFiMgr.Instance.sendTransaction(0.00001);
                          // console.log("hash", hash);

                          _context2.next = 10;
                          break;

                        case 8:
                          console.log(GameFiMgr.Instance);
                          GameFiMgr.Instance.openModal();

                        case 10:
                        case "end":
                          return _context2.stop();
                      }
                    }, _callee2);
                  })));
                  this.view["Button1"].on(Node.EventType.TOUCH_END, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
                    var _window, _window$TelegramGameP;

                    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                      while (1) switch (_context3.prev = _context3.next) {
                        case 0:
                          e.propagationStopped = true;
                          (_window = window) == null ? void 0 : (_window$TelegramGameP = _window.TelegramGameProxy) == null ? void 0 : _window$TelegramGameP.shareScore();
                        // const hash = await GameFiMgr.Instance.sendTransaction(0.00001);
                        // console.log("hash", hash);

                        case 2:
                        case "end":
                          return _context3.stop();
                      }
                    }, _callee3);
                  })));

                case 3:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));

          function initGameDatainfo() {
            return _initGameDatainfo.apply(this, arguments);
          }

          return initGameDatainfo;
        }();

        _proto.loginWeb = /*#__PURE__*/function () {
          var _loginWeb = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var result;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return getGameUserInfo({
                    user_id_wallet: this.address // reference:1

                  });

                case 2:
                  result = _context5.sent;

                  if (result.code == 200) {
                    // console.log(result);
                    this.saveResult(result.result);
                  }

                case 4:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));

          function loginWeb() {
            return _loginWeb.apply(this, arguments);
          }

          return loginWeb;
        }();

        _proto.saveResult = function saveResult(data) {
          setStorageData("user_info", data);
          this.view["bitcone/eggCoinGroup/Label"].getComponent(Label).string = data.points;
          this.view["bitcone/usdcCoinGroup/Label"].getComponent(Label).string = data.usdt_coin;
        };

        _proto.start = function start() {
          var _this3 = this;

          this.isLogin = false;
          ResMgr.Instance.preloadResourcePkg(resPkg, function (now, total) {
            var Progress = _this3.view["pbar/ProgressBar"];
            Progress.getComponent(ProgressBar).progress = now / total;
          }, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  try {
                    _this3.view["Button"].active = true; // debugger
                    // AudioMgr.Instance.play("pass", {
                    //     loop: true,
                    //     playOnAwake: true,
                    //     volume: 0.4,
                    // })
                  } catch (error) {
                    console.log(error);
                  }

                case 1:
                case "end":
                  return _context6.stop();
              }
            }, _callee6);
          })));
        };

        _proto.update = function update(deltaTime) {};

        return Start;
      }(UICtrl), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "GameData", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/storage.ts", ['cc'], function (exports) {
  var cclegacy, sys;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }],
    execute: function () {
      cclegacy._RF.push({}, "28fccWncOFOiruMdj4PtvaN", "storage", undefined);

      var setStorageData = exports('setStorageData', function setStorageData(key, value) {
        sys.localStorage.setItem(key, JSON.stringify(value));
      });
      var getStorageData = exports('getStorageData', function getStorageData(key) {
        if (sys.localStorage.getItem(key)) {
          return JSON.parse(sys.localStorage.getItem(key));
        } else {
          return null;
        }
      });
      var removeStorageData = exports('removeStorageData', function removeStorageData(key) {
        sys.localStorage.removeItem(key);
      });
      var clearStorageData = exports('clearStorageData', function clearStorageData() {
        sys.localStorage.clear();
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/type.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c05a00xUqVKorvfx9AXhENp", "type", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UiMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, Button, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Button = module.Button;
      Component = module.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0347bkkmf9Lwpk/Cdl/7Fvq", "UiMgr", undefined);

      var UICtrl = exports('UICtrl', /*#__PURE__*/function (_Component) {
        _inheritsLoose(UICtrl, _Component);

        function UICtrl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.view = {};
          return _this;
        }

        var _proto = UICtrl.prototype;

        _proto.onLoad = function onLoad() {
          this.load_all_node(this.node, "");
        };

        _proto.load_all_node = function load_all_node(root, path) {
          for (var i = 0; i < root.children.length; i++) {
            this.view[path + root.children[i].name] = root.children[i];
            this.load_all_node(root.children[i], path + root.children[i].name + "/");
          }
        };

        _proto.addButtonListener = function addButtonListener(name, self, callBack) {
          var node = this.view[name];

          if (node) {
            var button = node.getComponent(Button);

            if (button) {
              node.on(Button.EventType.CLICK, callBack, self);
            } else {
              console.error(name + "Component not found");
            }
          } else {
            console.error(name + "node not found");
            return;
          }
        };

        return UICtrl;
      }(Component));

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
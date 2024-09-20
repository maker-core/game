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
      const Tost = exports('Tost', message => {
        const canvas = find("mian/Canvas");
        const base = ResMgr.Instance.getAsset("Sounds", "Message");
        const child = instantiate(base);
        if (!canvas.getChildByName("Message")) {
          canvas.addChild(child);
          const Tost = child.getComponent(Message);
          Tost.setValue(message);
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioMgr.ts", ['cc', './ResMgr.ts'], function (exports) {
  var cclegacy, Component, AudioSource, ResMgr;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      AudioSource = module.AudioSource;
    }, function (module) {
      ResMgr = module.ResMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "dfc68ApNu9H27Pz05ghRcER", "AudioMgr", undefined);
      // @ccclass('AudioMgr')
      class AudioMgr extends Component {
        constructor() {
          super(...arguments);
          this.sounds = {};
        }
        onLoad() {
          if (!AudioMgr.Instance) {
            AudioMgr.Instance = this;
          } else {
            this.destroy();
            return;
          }
        }
        // 播放音乐
        play(name, options) {
          if (!this.sounds[name]) {
            const Clip = ResMgr.Instance.getAsset("Sounds", `${name}`);
            const audio = new AudioSource(name);
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
        }
        //暂停
        pause(name) {
          if (this.sounds[name]) {
            this.sounds[name].pause();
          }
        }
        //停止
        stop(name) {
          if (this.sounds[name]) {
            this.sounds[name].stop();
          }
        }
        stopAll() {
          for (let key in this.sounds) {
            this.sounds[key].stop();
          }
        }
        getAudioSourceByName(name) {
          if (this.sounds[name]) {
            return this.sounds[name];
          } else {
            console.error(`${name} 不存在`);
          }
        }
      }
      exports('AudioMgr', AudioMgr);
      AudioMgr.Instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BulletFrame.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UiMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, SpriteFrame, _decorator, Node, Label, Sprite, UICtrl;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      SpriteFrame = module.SpriteFrame;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Sprite = module.Sprite;
    }, function (module) {
      UICtrl = module.UICtrl;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "cdf2eac9r1DIJdgYX9SjOO8", "BulletFrame", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let BulletFrame = exports('BulletFrame', (_dec = ccclass('BulletFrame'), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec(_class = (_class2 = class BulletFrame extends UICtrl {
        constructor() {
          super(...arguments);
          _initializerDefineProperty(this, "icon1", _descriptor, this);
          _initializerDefineProperty(this, "icon2", _descriptor2, this);
          _initializerDefineProperty(this, "icon3", _descriptor3, this);
          this.type = 1;
        }
        onLoad() {
          super.onLoad();
          this.view["mask/close"].on(Node.EventType.TOUCH_END, e => {
            e.propagationStopped = true;
            this.node.active = false;
          });
        }
        close() {
          this.node.active = false;
        }
        setType(type) {
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
        }
        update(deltaTime) {}
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "icon1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "icon2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "icon3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
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
      let baseUrl1 = exports('baseUrl1', "http://34.145.10.202:8091/");
      let baseUrl = exports('baseUrl', "http://192.168.1.103:8091/");
      {
        baseUrl = exports('baseUrl', "https://goose.kystudio.cn/api/");
        // baseUrl = "http://192.168.31.30:8091/";
        // baseUrl = "http://192.168.1.103:8091/";
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, _decorator, Component, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = class DebugViewRuntimeControl extends Component {
        constructor() {
          super(...arguments);
          _initializerDefineProperty(this, "compositeModeToggle", _descriptor, this);
          _initializerDefineProperty(this, "singleModeToggle", _descriptor2, this);
          _initializerDefineProperty(this, "EnableAllCompositeModeButton", _descriptor3, this);
          this._single = 0;
          this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          this.compositeModeToggleList = [];
          this.singleModeToggleList = [];
          this.miscModeToggleList = [];
          this.textComponentList = [];
          this.labelComponentList = [];
          this.textContentList = [];
          this.hideButtonLabel = void 0;
          this._currentColorIndex = 0;
          this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
        }
        start() {
          // get canvas resolution
          const canvas = this.node.parent.getComponent(Canvas);
          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }
          const uiTransform = this.node.parent.getComponent(UITransform);
          const halfScreenWidth = uiTransform.width * 0.5;
          const halfScreenHeight = uiTransform.height * 0.5;
          let x = -halfScreenWidth + halfScreenWidth * 0.1,
            y = halfScreenHeight - halfScreenHeight * 0.1;
          const width = 200,
            height = 20;

          // new nodes
          const miscNode = this.node.getChildByName('MiscMode');
          const buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          const titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles';

          // title
          for (let i = 0; i < 2; i++) {
            const newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;
            const labelComponent = newLabel.getComponent(Label);
            labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            labelComponent.color = Color.WHITE;
            labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = labelComponent;
          }
          y -= height;
          // single
          let currentRow = 0;
          for (let i = 0; i < this.strSingle.length; i++, currentRow++) {
            if (i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }
            const newNode = i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            const textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[i] = newNode;
          }
          x += width;
          // buttons
          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          let labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          const changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          const HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent;

          // misc
          y -= 40;
          for (let i = 0; i < this.strMisc.length; i++) {
            const newNode = instantiate(this.compositeModeToggle);
            newNode.setPosition(x, y - height * i, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = miscNode;
            const textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strMisc[i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            const toggleComponent = newNode.getComponent(Toggle);
            toggleComponent.isChecked = i ? true : false;
            newNode.on(Toggle.EventType.TOGGLE, i ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);
            this.miscModeToggleList[i] = newNode;
          }

          // composite
          y -= 150;
          for (let i = 0; i < this.strComposite.length; i++) {
            const newNode = i ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;
            newNode.setPosition(x, y - height * i, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.compositeModeToggle.parent;
            const textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strComposite[i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);
            this.compositeModeToggleList[i] = newNode;
          }
        }
        isTextMatched(textUI, textDescription) {
          let tempText = new String(textUI);
          const findIndex = tempText.search('>');
          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        }
        toggleSingleMode(toggle) {
          const debugView = director.root.debugView;
          const textComponent = toggle.getComponentInChildren(RichText);
          for (let i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        }
        toggleCompositeMode(toggle) {
          const debugView = director.root.debugView;
          const textComponent = toggle.getComponentInChildren(RichText);
          for (let i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        }
        toggleLightingWithAlbedo(toggle) {
          const debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        }
        toggleCSMColoration(toggle) {
          const debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        }
        enableAllCompositeMode(button) {
          const debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);
          for (let i = 0; i < this.compositeModeToggleList.length; i++) {
            const toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);
            toggleComponent.isChecked = true;
          }
          let toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        }
        hideUI(button) {
          const titleNode = this.node.getChildByName('Titles');
          const activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        }
        changeTextColor(button) {
          this._currentColorIndex++;
          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }
          for (let i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }
          for (let i = 0; i < this.labelComponentList.length; i++) {
            this.labelComponentList[i].color = this.color[this._currentColorIndex];
          }
        }
        onLoad() {}
        update(deltaTime) {}
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventMgr.ts", ['cc'], function (exports) {
  var cclegacy, Component, EventTarget;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      EventTarget = module.EventTarget;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a0520KQvgVIhr8MfV5+NVnO", "EventMgr", undefined);
      class EventMgr extends Component {
        onLoad() {
          if (!EventMgr.Instance) {
            EventMgr.Instance = new EventTarget();
          } else {
            this.destroy();
            return;
          }
        }
      }
      exports('EventMgr', EventMgr);
      EventMgr.Instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameData.ts", ['cc', './ResMgr.ts', './AudioMgr.ts', './EventMgr.ts', './GameFiMgr.ts'], function (exports) {
  var cclegacy, _decorator, Component, ResMgr, AudioMgr, EventMgr, GameFiMgr;
  return {
    setters: [function (module) {
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
      const {
        ccclass
      } = _decorator;
      let GameData = exports('GameData', (_dec = ccclass('GameData'), _dec(_class = (_class2 = class GameData extends Component {
        onLoad() {
          if (!GameData.Instance) {
            GameData.Instance = this;
          } else {
            this.destroy();
            return;
          }

          //资源管理
          this.node.addComponent(ResMgr);
          //初始化声音管理
          this.node.addComponent(AudioMgr);
          //初始化事件管理
          this.node.addComponent(EventMgr);
          //初始化游戏币管理
          this.node.addComponent(GameFiMgr);
        }
      }, _class2.Instance = void 0, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameFiMgr.ts", ['cc', './index4.ts'], function (exports) {
  var cclegacy, Component, __webpack_exports__TonConnectUI, __webpack_exports__GameFi, __webpack_exports__Address, __webpack_exports__toNano;
  return {
    setters: [function (module) {
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
      class GameFiMgr extends Component {
        constructor() {
          super(...arguments);
          this._cocosGameFi = void 0;
          this._connectUI = void 0;
          this._bTonInit = false;
          this.address = "";
        }
        onLoad() {
          if (!GameFiMgr.Instance) {
            GameFiMgr.Instance = this;
          } else {
            this.destroy();
            return;
          }
        }
        async initTonConnect(cb) {
          let uiconnector = new __webpack_exports__TonConnectUI({
            manifestUrl: 'https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json'
          });
          this._cocosGameFi = await __webpack_exports__GameFi.create({
            network: "mainnet",
            connector: uiconnector,
            merchant: {
              jettonAddress: __webpack_exports__Address.parse("EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs"),
              tonAddress: "UQAMNl5M8dv_x5gEjAGzmARBUaey6qME2zwghgk0Jbd6kZB0"
            }
          });
          this._connectUI = this._cocosGameFi.walletConnector;
          const unsubscribeModal = this._connectUI.onModalStateChange(state => {
            console.log("model state changed! : ");
            this.updateConnect();
          });
          const unsubscribeConnectUI = this._connectUI.onStatusChange(info => {
            console.log(info);
            console.log("wallet info status changed : ");
            this.updateConnect();
            cb && cb(info);
          });
          this._bTonInit = true;
          this.updateConnect();
        }
        isConnected() {
          if (!this._connectUI) {
            console.error("ton ui not inited!");
            return false;
          }
          return this._connectUI.connected;
        }
        updateConnect() {
          if (this.isConnected()) {
            const address = this._connectUI.account.address;
            this.address = address;
          }
        }
        async openModal() {
          if (!this._bTonInit) return;
          if (this.isConnected()) {
            this._connectUI.disconnect();
          } else {
            this._connectUI.openModal();
          }
        }
        async sendTransaction(amount) {
          const result = await this._cocosGameFi.transferJetton({
            to: __webpack_exports__Address.parse("UQCXLI7EllDjQEFRglhfKi42hlZwyvYN-IKXM6nAc52_nZQp"),
            amount: __webpack_exports__toNano(amount)
          });
          return result;
        }
      }
      exports('GameFiMgr', GameFiMgr);
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
      const resPkg = exports('resPkg', {
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
            assetType: Prefab
            //  
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
          },
          //大的
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
      cclegacy._RF.push({}, "75244sNKmhGJIbha+4+BzAW", "index", undefined);
      // import crypto from 'crypto';

      const keyObject = exports('keyObject', param => {
        let dataStr = "";
        for (let key in param) {
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
        let timer = null;
        // 原始函数的参数args
        const _debounce = function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => {
            // 绑定this
            fn.apply(this, args);
          }, delay);
        };
        return _debounce;
      }
      function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      // moment
      // 你好请用 moment 包 ts 编写一个倒计时的代码，时间通过传入的方式
      function countdown(targetTime) {
        const now = _cjsExports();
        // 目标时间
        const endTime = targetTime;
        const duration = _cjsExports.duration(endTime.diff(now));
        if (duration.asMilliseconds() <= 0) {
          return {
            end: true
          };
        }

        //分钟和秒
        const days = Math.floor(duration.asDays());
        const hours = Math.floor(duration.hours());
        const minutes = Math.floor(duration.minutes());
        const seconds = Math.floor(duration.seconds());
        return {
          days,
          hours,
          minutes,
          seconds,
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
      }
      //rule/generateModelSorting
      function generateModelSorting(params) {
        return request({
          data: params || null,
          method: "GET",
          url: "rule/generateModelSorting"
        });
      }
      //getGameUserInfo?
      function getGameUserInfo(params) {
        return request({
          data: params || null,
          method: "GET",
          url: "gameUser/getGameUserInfo"
        });
      }
      //http://192.168.31.109:3000/game/openNewGame
      function openNewGame(params) {
        return request({
          data: params || null,
          method: "GET",
          url: "game/openNewGame"
        });
      }
      //game/buyPropProduct?game_id=f25fdbfc-adae-4ac4-a893-91f1ecf565e9&prop_one=0
      function buyPropProduct(params) {
        return request({
          data: params || null,
          method: "GET",
          url: "game/buyPropProduct"
        });
      }
      // 结算 /game/gameOver?game_user_id=39cf03ec-c893-456a-b9fd-da5035a921fb&game_id=3d5cb2a7-ddd5-45fa-9b1e-a3abd5fe2d84&result=true&inside_point=5&inside_usdt=10&prop_one=2

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
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Vec3, _decorator, Component, RigidBody, Collider;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
      _decorator = module._decorator;
      Component = module.Component;
      RigidBody = module.RigidBody;
      Collider = module.Collider;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "b08a3qMqrRKXaTPZOtmmSw2", "Item", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let Item = exports('Item', (_dec = ccclass('Item'), _dec2 = property(Vec3), _dec3 = property(Vec3), _dec(_class = (_class2 = class Item extends Component {
        constructor() {
          super(...arguments);
          this.removed = false;
          this.removedPos = void 0;
          //消除的时候做一个向中间靠拢的动画
          this.playRmovedEff = false;
          this.isTemp = false;
          this.isBottom = false;
          _initializerDefineProperty(this, "rotation", _descriptor, this);
          _initializerDefineProperty(this, "scale", _descriptor2, this);
        }
        start() {}
        setUseGravity(use) {
          const Temp = this.node.getComponent(RigidBody);
          if (Temp) {
            Temp.useGravity = use;
          }
        }
        setWorldPosition(y) {
          let pos = this.node.getWorldPosition();
          pos.y += y;
          this.node.setWorldPosition(pos);
        }
        destoryCollider() {
          if (!this.isTemp) {
            const Temp = this.node.getComponent(RigidBody);
            this.node.getComponent(Collider).isTrigger = true;
            if (Temp) {
              Temp.destroy();
            }
          }
        }
        update(deltaTime) {}
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rotation", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3(0, 0, 0);
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scale", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
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

System.register("chunks:///_virtual/Main.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UiMgr.ts', './index.ts', './ResMgr.ts', './AudioMgr.ts', './Item.ts', './index2.ts', './moment.mjs_cjs=&original=.js', './app.ts', './BulletFrame.ts', './index3.ts', './index2.js', './index.mjs_cjs=&original=.js', './storage.ts', './GameFiMgr.ts', './index.js', './moment.js'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Material, SpriteFrame, Prefab, _decorator, sp, Sprite, Label, game, input, Input, Camera, geometry, PhysicsSystem, MeshRenderer, Tween, Vec3, tween, instantiate, RigidBody, Node, director, UICtrl, resPkg, ResMgr, AudioMgr, Item, getRandom, countdown, Tost, BulletFrame, generateModelSorting, openNewGame, gameOver, buyPropProduct, TelegramWebAppContainer, getStorageData, GameFiMgr, _cjsExports, _cjsExports$1;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Material = module.Material;
      SpriteFrame = module.SpriteFrame;
      Prefab = module.Prefab;
      _decorator = module._decorator;
      sp = module.sp;
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
    }, function (module) {
      TelegramWebAppContainer = module.TelegramWebAppContainer;
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
      const {
        ccclass,
        property
      } = _decorator;
      const {
        SkeletonData
      } = sp;
      let Main = exports('Main', (_dec = ccclass('Main'), _dec2 = property(Material), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec5 = property(Prefab), _dec6 = property(SkeletonData), _dec7 = property(SkeletonData), _dec(_class = (_class2 = class Main extends UICtrl {
        constructor() {
          super(...arguments);
          _initializerDefineProperty(this, "material", _descriptor, this);
          //透明材质
          _initializerDefineProperty(this, "tag", _descriptor2, this);
          //透明材质贴图
          _initializerDefineProperty(this, "add", _descriptor3, this);
          //透明材质贴图
          _initializerDefineProperty(this, "nft", _descriptor4, this);
          //nft
          _initializerDefineProperty(this, "usdc", _descriptor5, this);
          _initializerDefineProperty(this, "coin", _descriptor6, this);
          this.touchNode = null;
          //当前点击的几何模型
          this.allItem = [];
          //所有节点集合
          this.collectPos = [];
          //底部收集点世界坐标集合
          this.collectTiles = [];
          //底部收集点节点集合
          //是否初始化
          this.touchMaterial = null;
          this.temporaryItem = [];
          //临时节点
          this.temporaryPos = [];
          //临时节点坐标集合
          this.currentLevel = 1;
          //当前关卡
          this.gameStop = false;
          //游戏暂停
          this.clickPlay = true;
          //是否点击播放
          this.stage1 = 0;
          //道具1
          this.stage2 = 0;
          //道具2
          this.stage3 = 0;
          //道具3
          this.count = 0;
          this.InitializedData = [];
          this.usdtCount = 0;
          this.myCoinCount = 0;
          this.gameDate = null;
          this.isGameOver = false;
        }
        changeTag() {
          if (this.stage1 == 0) {
            this.view["Canvas/ui/bottom/button/add"].getComponent(Sprite).spriteFrame = this.add;
            this.view["Canvas/ui/bottom/button/add/Label"].getComponent(Label).string = "";
          } else {
            this.view["Canvas/ui/bottom/button/add"].getComponent(Sprite).spriteFrame = this.tag;
            this.view["Canvas/ui/bottom/button/add/Label"].getComponent(Label).string = `${this.stage1}`;
          }
          if (this.stage2 == 0) {
            this.view["Canvas/ui/bottom/button1/add"].getComponent(Sprite).spriteFrame = this.add;
            this.view["Canvas/ui/bottom/button1/add/Label"].getComponent(Label).string = "";
          } else {
            this.view["Canvas/ui/bottom/button1/add"].getComponent(Sprite).spriteFrame = this.tag;
            this.view["Canvas/ui/bottom/button1/add/Label"].getComponent(Label).string = `${this.stage2}`;
          }
          if (this.stage3 == 0) {
            this.view["Canvas/ui/bottom/button2/add"].getComponent(Sprite).spriteFrame = this.add;
            this.view["Canvas/ui/bottom/button2/add/Label"].getComponent(Label).string = "";
          } else {
            this.view["Canvas/ui/bottom/button2/add"].getComponent(Sprite).spriteFrame = this.tag;
            this.view["Canvas/ui/bottom/button2/add/Label"].getComponent(Label).string = `${this.stage3}`;
          }
        }
        onLoad() {
          super.onLoad(); //初始化  
          game.frameRate = 120;
          this.dataInit();
        }
        async dataInit() {
          this.initGameId();
          const result = await generateModelSorting();
          const meshData = result.result;
          if (meshData) {
            const sortArr = [];
            for (let key in meshData) {
              sortArr.push(key);
            }
            sortArr.forEach(key => {
              if (meshData[key]) {
                const decrypted1 = _cjsExports.AES.decrypt(meshData[key], "bc1ptyc7v0hk0w48vqhxf86j7uetu42kf4c5z8nn6llv6f7l2g6cr3nszftf32").toString(_cjsExports.enc.Utf8);
                const arr = decrypted1.split("");
                arr.forEach(tip => {
                  const item = resPkg.GUI.urls.find(item => item.tooTip == tip);
                  this.InitializedData.push({
                    ...item,
                    level: key
                  });
                  this.count++;
                });
              }
            });
            // console.log(this.count, this.InitializedData);
          }

          if (this.currentLevel == 1) {
            this.init(4, 2);
          } else {
            this.init2(this.InitializedData);
          }
        }
        async initGameId() {
          const user_info = getStorageData("user_info");
          const result = await openNewGame({
            ton_user_id: user_info.ton_user_id,
            game_user_id: user_info.game_user_id
          });
          if (result.code == 200) {
            console.log(result.result);
            this.gameDate = result.result;
          }
        }
        onEnable() {
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        }
        onDisable() {
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.unscheduleAllCallbacks();
        }

        // 检查是否是可点击的物品
        checkItem(node) {
          const exists = resPkg.GUI.urls.some(item => item.path == node.name);
          return exists;
        }
        // 点击事件
        onTouchStart(event) {
          if (this.gameStop) return;
          if (this.allItem.length == 0) return;
          if (this.collectTiles.length >= 7) {
            return;
          }
          const p = event.getLocation();
          const Scence = this.node.parent;
          const camera = Scence.getChildByName("Main Camera").getComponent(Camera);
          const r = new geometry.Ray();
          camera?.screenPointToRay(p.x, p.y, r);
          let b = PhysicsSystem.instance.raycastClosest(r, 0xffffffff, 10000000, true);
          if (b) {
            let collider = PhysicsSystem.instance.raycastClosestResult.collider;
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
        }
        // 设置节点材质
        setNodeMaterial(node, material, org) {
          if (org === void 0) {
            org = true;
          }
          if (node.name == "usdc" || node.name == "eggcoin" || node.name == "nft") return;
          node.children.forEach(item => {
            if (org) {
              if (item.getComponent(MeshRenderer)) {
                this.touchMaterial = item.getComponent(MeshRenderer).materials[0];
                item.getComponent(MeshRenderer).setMaterial(material, 0);
              }
              this.setNodeMaterial(item, material, org);
            } else {
              if (item.getComponent(MeshRenderer)) {
                const customMaterial = new Material();
                customMaterial.copy(this.touchMaterial);
                item.getComponent(MeshRenderer).setMaterial(customMaterial, 0);
              }
              this.setNodeMaterial(item, material, org);
            }
          });
        }
        // 点击结束事件
        onTouchEnd(event) {
          if (this.gameStop) return;
          if (this.allItem.length == 0) return;
          if (this.collectTiles.length >= 7) {
            return;
          }
          const p = event.getLocation();
          const Scence = this.node.parent;
          const camera = Scence.getChildByName("Main Camera").getComponent(Camera);
          const r = new geometry.Ray();
          camera?.screenPointToRay(p.x, p.y, r);
          let b = PhysicsSystem.instance.raycastClosest(r, 0xffffffff, 10000000, true);
          if (b) {
            let collider = PhysicsSystem.instance.raycastClosestResult.collider;
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
        }
        // 移动事件
        onTouchMove(event) {
          if (this.gameStop) return;
          if (this.allItem.length == 0) return;
          if (this.collectTiles.length >= 7) {
            return;
          }
          const p = event.getLocation();
          const Scence = this.node.parent;
          const camera = Scence.getChildByName("Main Camera").getComponent(Camera);
          const r = new geometry.Ray();
          camera?.screenPointToRay(p.x, p.y, r);
          let b = PhysicsSystem.instance.raycastClosest(r, 0xffffffff, 10000000, true);
          if (b) {
            let collider = PhysicsSystem.instance.raycastClosestResult.collider;
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
        }
        // 选择物品
        chooseItem(item) {
          let chooseName = item.name;
          // 取消重力影响
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
          }

          //插入
          let bInsert = false;
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
        }
        // 检查结果
        checkResult() {
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
        }
        // 移动到正确位置动画
        moveToRightPos() {
          if (this.temporaryItem.length == 0) {
            if (this.view["temporary"].active) {
              this.view["temporary"].active = false;
            }
          }
          this.collectTiles.map((a, i) => {
            let tileItem = a.getComponent(Item);
            Tween.stopAllByTarget(a);
            const pointA = a.worldPosition;
            const pointB = this.collectPos[i].clone();
            // 求中间坐标
            let midPoint = new Vec3((pointA.x + pointB.x) / 2, (pointA.y + pointB.y) * 2, (pointA.z + pointB.z) / 2);
            tween(a).to(0.2, {
              worldPosition: midPoint
            }).to(0.3, {
              worldPosition: this.collectPos[i].clone()
            }).start();
            tween(a).to(0.5, {
              eulerAngles: tileItem.rotation,
              scale: tileItem.scale
            }).call(() => {
              tileItem.isBottom = true;
              if (tileItem.removed) {
                tween(a).to(0.25, {
                  worldPosition: tileItem.removedPos
                }, {
                  easing: "backIn"
                }).call(() => {
                  //最中央的播放移除特效
                  if (tileItem.playRmovedEff) {
                    // 获取爆炸的屏幕地址
                    const Scence = this.node.parent;
                    const camera = Scence.getChildByName("Main Camera").getComponent(Camera);
                    const pos = camera.convertToUINode(a.worldPosition, this.view["Canvas"]);
                    if (a.name == "usdc" || a.name == "eggcoin") {
                      this.view["Canvas/ui/tokenani"].active = true;
                      this.view["Canvas/ui/tokenani"].setPosition(pos.x, pos.y);
                      const aniInstance = this.view["Canvas/ui/tokenani"].getComponent(sp.Skeleton);
                      const tokenName = a.name;
                      if (a.name == "usdc") {
                        aniInstance.skeletonData = this.usdc;
                      } else {
                        aniInstance.skeletonData = this.coin;
                      }
                      aniInstance.setAnimation(0, "baozha", false);
                      aniInstance.addAnimation(0, "feichu", false);
                      if (tokenName == "usdc") {
                        const span = this.view["Canvas/ui/tokenani"];
                        const basePo = span.getWorldPosition();
                        const pos = this.view["Canvas/ui/coinBox/usdcCion"].getWorldPosition();
                        console.log(pos, basePo);
                        tween(span).delay(1.5).to(1, {
                          worldPosition: new Vec3(pos.x - 350, pos.y - basePo.y, 0)
                        }).start();
                      } else {
                        const span = this.view["Canvas/ui/tokenani"];
                        const basePo = span.getWorldPosition();
                        const pos = this.view["Canvas/ui/coinBox/eggCion"].getWorldPosition();
                        console.log(pos, basePo);
                        tween(span).delay(1.5).to(1, {
                          worldPosition: new Vec3(pos.x - 350, pos.y - basePo.y, 0)
                        }).start();
                      }
                    } else {
                      this.view["Canvas/ui/animation"].active = true;
                      this.view["Canvas/ui/animation"].setPosition(pos.x, pos.y);
                      const aniInstance = this.view["Canvas/ui/animation"].getComponent(sp.Skeleton);
                      aniInstance.setAnimation(0, "effect", false);
                    }
                    AudioMgr.Instance.play("starCollect", {
                      playOnAwake: true
                    });
                    this.checkResult();
                  }
                  if (a.name == "usdc") {
                    this.usdtCount += 1;
                    this.updateCoinCount();
                  }
                  if (a.name == "eggcoin") {
                    this.myCoinCount += 1;
                    this.updateCoinCount();
                  }
                  a.destroy();
                  this.moveToRightPos();
                }).start();
              }
            }).start();
          });
        }
        updateCoinCount() {
          this.view["Canvas/ui/coinBox/eggCion/Label"].getComponent(Label).string = `${this.myCoinCount}`;
          this.view["Canvas/ui/coinBox/usdcCion/Label"].getComponent(Label).string = `${this.usdtCount}`;
        }
        async init2(InitializedData) {
          const parentNode = this.view["GameSpace/ItemSource"];
          const tempNode = instantiate(this.nft);
          parentNode.addChild(tempNode);

          // InitializedData
          for (let item of InitializedData) {
            // 假设每个 item 都是异步操作
            // console.log(item.level);

            const node = ResMgr.Instance.getAsset("GUI", item.path);
            const tempNode = instantiate(node);
            // tempNode.setPosition(getRandom(-2, 2), getRandom(0, 1), getRandom(-2, 2));

            tempNode.eulerAngles = new Vec3(getRandom(0, 360), getRandom(0, 360), getRandom(0, 360));
            tempNode.level = item.level;
            this.allItem.push(tempNode);
            tempNode.getComponent(RigidBody).linearDamping == 1000000;
            tempNode.getComponent(RigidBody).angularDamping == 1000000;
            parentNode.addChild(tempNode);
            const meshRenderer = tempNode.getComponent(MeshRenderer);
            if (meshRenderer) {
              meshRenderer.enabled = false; // 隐藏模型
            } else {
              tempNode.children.forEach(item => {
                if (item.getComponent(MeshRenderer)) ;
              });
            }
          }
          this.initTime();
        }
        // 初始化
        init(num, index) {
          const parentNode = this.view["GameSpace/ItemSource"];
          let i = 0;
          const timer = setInterval(() => {
            let arr = resPkg.GUI.urls.slice(3, 6);
            arr.forEach((item, index) => {
              const node = ResMgr.Instance.getAsset("GUI", item.path);
              const tempNode = instantiate(node);
              // tempNode.setPosition(getRandom(-2, 2), getRandom(0, 1), getRandom(-2, 2));

              tempNode.eulerAngles = new Vec3(getRandom(0, 360), getRandom(0, 360), getRandom(0, 360));
              this.allItem.push(tempNode);
              parentNode.addChild(tempNode);
            });
            i++;
            if (i > index) {
              clearInterval(timer);
            }
          }, 100);
        }
        initTime() {
          this.view["Canvas/ui/time"].active = true;
          const targetTime = _cjsExports$1().add(10, "minute");
          this.schedule(() => {
            const time = countdown(targetTime);
            if (time.end) {
              // console.log("输了");
              this.unscheduleAllCallbacks();
              this.gameStop = true;
              this.view["Canvas/Over"].active = true;
              this.view["Canvas/Over/falied"].active = true;
              this.view["Canvas/Over/win"].active = false;
              this.isGameOver = true;
            } else {
              this.view["Canvas/ui/time/Label"].getComponent(Label).string = `${time.minutes}:${time.seconds}`;
            }
          });
        }
        //初始化重力
        initGravity() {
          // targetNode
          let targetPosition = this.view["targetNode"].worldPosition;
          this.allItem.forEach((tempNode, index) => {
            let attractedBody = tempNode.getComponent(RigidBody);
            // 计算吸引方向（从被吸引物体指向目标物体的向量）
            let direction = targetPosition.subtract(tempNode.worldPosition);
            // 计算两者之间的距离
            let distance = direction.length();
            // 归一化方向向量（使其长度为 1）
            direction = direction.normalize();
            // 计算吸引力的大小（根据距离可以做衰减处理，距离越远吸引力越小）
            const attractionStrength = 150; // 吸引力大小
            let forceMagnitude = attractionStrength / Math.max(distance * distance, 1); // 吸引力可以跟距离平方成反比
            // 计算施加的力向量
            // console.log('forceMagnitude', forceMagnitude);
            let force = direction.multiplyScalar(forceMagnitude);
            // 对被吸引物体施加力
            // console.log('force', force);
            attractedBody.applyForce(force, tempNode.worldPosition);
          });
        }
        start() {
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
          this.view["collectnox"].children.map(tempNode => {
            this.collectPos.unshift(tempNode.worldPosition);
            tempNode.active = false;
          });
          this.view["temporary"].children.map(tempNode => {
            this.temporaryPos.push(tempNode.worldPosition);
            tempNode.active = false;
          });
          this.view["temporary"].active = false;
          this.view["Canvas/ui/stop"].on(Node.EventType.TOUCH_END, e => {
            e.propagationStopped = true;
            // Tost("任务完成，奖励已到")
            this.view["Canvas/gameOver"].active = true;
            this.gameStop = true;
          });
          this.view["Canvas/gameOver/mask/close"].on(Node.EventType.TOUCH_END, e => {
            e.propagationStopped = true;
            // Tost("任务完成，奖励已到")
            this.view["Canvas/gameOver"].active = false;
            this.gameStop = false;
          });
          this.view["Canvas/gameOver/mask/continue"].on(Node.EventType.TOUCH_END, e => {
            e.propagationStopped = true;
            // Tost("任务完成，奖励已到")
            this.view["Canvas/gameOver"].active = false;
            this.gameStop = false;
          });
          this.view["Canvas/gameOver/mask/giveUp"].on(Node.EventType.TOUCH_END, async e => {
            e.propagationStopped = true;
            await this.submitGameOver("false");
            this.view["Canvas/gameOver"].active = false;
            this.currentLevel = 1;
            director.loadScene("start");
          });
          this.view["Canvas/Over/falied/giveUp"].on(Node.EventType.TOUCH_END, async e => {
            e.propagationStopped = true;
            await this.submitGameOver("false");
            this.view["Canvas/Over"].active = false;
            this.currentLevel = 1;
            director.loadScene("start");
          });
          this.view["Canvas/Over/falied/continue"].on(Node.EventType.TOUCH_END, async e => {
            e.propagationStopped = true;
            if (this.isGameOver) {
              await this.submitGameOver("true");
              this.view["Canvas/Over"].active = false;
              this.currentLevel = 1;
              director.loadScene("start");
            } else {
              this.view["Canvas/Over"].active = false;
              this.temporaryItem = this.collectTiles.slice(0, this.collectTiles.length);
              this.temporaryItem.forEach(item => {
                let tileItem = item.getComponent(Item);
                tileItem.isBottom = false;
              });
              this.collectTiles = this.collectTiles.slice(this.collectTiles.length);
              this.view["temporary"].active = true;
              this.mvTemporary();
              this.gameStop = false;
            }
          });
          this.view["Canvas/Over/win/continue"].on(Node.EventType.TOUCH_END, async e => {
            e.propagationStopped = true;
            await this.submitGameOver("true");
            this.view["GameSpace/ItemSource"].removeAllChildren();
            this.view["Canvas/Over"].active = false;
            this.gameStop = false;
            this.collectTiles = [];
            // this.init(resPkg.GUI.urls.length, 8);
            // this.init2(this.InitializedData);
            this.currentLevel = 1;
            director.loadScene("start");
          });
          this.view["Canvas/gameOver/mask/setting/sound/Toggle"].on("toggle", toggle => {
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
          this.view["Canvas/gameOver/mask/setting/music/Toggle"].on("toggle", toggle => {
            if (toggle.isChecked) {
              this.clickPlay = true;
            } else {
              this.clickPlay = false;
            }
          });
          this.view["Canvas/ui/bottom/button"].on(Node.EventType.TOUCH_END, e => {
            e.propagationStopped = true;
            // 开始讲数据已到上面;
            if (this.stage1 == 0) {
              this.view["Canvas/BulletFrame"].active = true;
              this.view["Canvas/BulletFrame"].getComponent(BulletFrame).setType(1);
              return;
            }
            if (this.collectTiles.length == 0) {
              Tost("No items were collected");
              return;
            } else {
              if (this.collectTiles.length > 3) {
                //删除this.collectTiles 前3 个 节点存储搭配移动到临时节点

                this.temporaryItem = this.collectTiles.slice(0, 3);
                this.collectTiles = this.collectTiles.slice(3);
              } else {
                //将前3个移动到临时节点
                this.temporaryItem = this.collectTiles.slice(0, this.collectTiles.length);
                this.collectTiles = this.collectTiles.slice(this.collectTiles.length);
              }
              this.temporaryItem.forEach(item => {
                let tileItem = item.getComponent(Item);
                tileItem.isBottom = false;
              });
            }
            this.view["temporary"].active = true;
            this.mvTemporary();
            this.stage1 = 0;
            this.changeTag();
          });
          this.view["Canvas/ui/bottom/button1"].on(Node.EventType.TOUCH_END, e => {
            e.propagationStopped = true;
            if (this.stage2 == 0) {
              this.view["Canvas/BulletFrame"].active = true;
              this.view["Canvas/BulletFrame"].getComponent(BulletFrame).setType(2);
              return;
            }
            if (this.collectTiles.length == 0) {
              Tost("No items were collected");
              return;
            } else {
              // 找到两个相同的物品
              let sameItem = this.collectTiles.filter((a, i) => {
                return this.collectTiles.some((b, j) => {
                  return a.name == b.name && i != j;
                });
              });
              if (sameItem.length > 0) {
                const nodeName = sameItem[0].name;
                //从
                const delNodeList = [];
                for (var i = 0; i < this.allItem.length; ++i) {
                  if (this.allItem[i].name == nodeName) {
                    delNodeList.push(...this.allItem.splice(i, 1));
                    break;
                  }
                }

                // 插入
                delNodeList.forEach(item => {
                  let bInsert = false;
                  for (var i = this.collectTiles.length - 1; i >= 0; --i) {
                    if (this.collectTiles[i].name == item.name) {
                      item.getComponent(Item).destoryCollider();
                      item.getComponent(Item).setUseGravity(false);
                      this.collectTiles.splice(i + 1, 0, item);
                      bInsert = true;
                      break;
                    }
                  }
                  if (!bInsert) {
                    this.collectTiles.push(item);
                  }
                });
                this.playAnimationStart(nodeName);
              } else {
                //没有找到就取this.collectTiles 中的第一个 
                if (this.collectTiles.length < 6) {
                  const nodeName = this.collectTiles[0].name;
                  const delNodeList = [];
                  for (let j = 0; j < 2; j++) {
                    for (var i = 0; i < this.allItem.length; ++i) {
                      if (this.allItem[i].name == nodeName) {
                        delNodeList.push(...this.allItem.splice(i, 1));
                        break;
                      }
                    }
                  }

                  // 插入
                  delNodeList.forEach(item => {
                    let bInsert = false;
                    for (var i = this.collectTiles.length - 1; i >= 0; --i) {
                      if (this.collectTiles[i].name == item.name) {
                        item.getComponent(Item).destoryCollider();
                        item.getComponent(Item).setUseGravity(false);
                        this.collectTiles.splice(i + 1, 0, item);
                        bInsert = true;
                        break;
                      }
                    }
                    if (!bInsert) {
                      this.collectTiles.push(item);
                    }
                  });
                  this.playAnimationStart(nodeName);
                } else {
                  Tost("Insufficient vacancies");
                  return;
                }
              }
            }
            this.stage2 = 0;
            this.changeTag();
          });
          this.view["Canvas/ui/bottom/button2"].on(Node.EventType.TOUCH_END, e => {
            e.propagationStopped = true;
            if (this.stage3 == 0) {
              this.view["Canvas/BulletFrame"].active = true;
              this.view["Canvas/BulletFrame"].getComponent(BulletFrame).setType(3);
              return;
            }
            this.stage3 = 1;
            this.changeTag();
          });
          this.view["Canvas/BulletFrame/mask/Button"].on(Node.EventType.TOUCH_END, async e => {
            e.propagationStopped = true;
            const nodeTemp = this.view["Canvas/BulletFrame"].getComponent(BulletFrame);
            if (nodeTemp.type == 1) {
              this.stage1 = 1;
            } else if (nodeTemp.type == 2) {
              this.stage2 = 1;
            } else {
              this.stage3 = 1;
            }
            await this.buyAndShareItem();
            this.changeTag();
            nodeTemp.close();
          });
        }
        async submitGameOver(res) {
          const result = await gameOver({
            game_user_id: this.gameDate.game_user_id,
            game_id: this.gameDate.game_id,
            result: res,
            inside_point: this.myCoinCount,
            inside_usdt: this.usdtCount,
            prop_one: this.gameDate.prop_one
          });
        }
        //实现业务逻辑购买和转发
        async buyAndShareItem() {
          if (this.gameDate.prop_one % 3 == 0) {
            const hash = await GameFiMgr.Instance.sendTransaction(0.00001);
            console.log(hash);
          } else {
            // (window as any)?.TelegramGameProxy?.shareScore()
            const telegram = new TelegramWebAppContainer({
              exposeInMainWorld: true
            });
            const shareUrl = 't.me/ziongametest_bot/zion123?startapp=ref_123456';
            const a = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}`;
            await telegram.WebApp.openTelegramLink(a);
            // Tost("分享逻辑");
          }
          //
          const result = await buyPropProduct({
            game_id: this.gameDate.game_id,
            prop_one: this.gameDate.prop_one
          });
          if (result.code == 200) {
            this.gameDate.prop_one = result.result.prop_one;
          }
        }
        playAnimationStart(nodeName) {
          this.moveToRightPos();
          //标记要删除的节点
          let tmp = this.collectTiles.filter(a => {
            return a.name == nodeName;
          });
          if (tmp.length == 3) {
            for (var i = this.collectTiles.length - 1; i >= 0; --i) {
              if (this.collectTiles[i].name == nodeName) {
                let delNode = this.collectTiles[i];
                delNode.getComponent(Item).removed = true;
                this.collectTiles.splice(i, 1);
                delNode.getComponent(Item).removedPos = tmp[1].worldPosition;
                if (delNode == tmp[1])
                  //是否是最中央的
                  delNode.getComponent(Item).playRmovedEff = true;
              }
            }
          }
          this.checkResult();
        }
        // 移动到临时节点
        mvTemporary() {
          const tempArr = this.temporaryPos.map(item => item.clone());
          this.temporaryItem.map((tempNode, index) => {
            tempNode.getComponent(Item).isTemp = true;
            const i = index % 3;
            const layer = Math.floor(index / 3);
            if (layer == 1) {
              tempArr[i].y = tempArr[i].y * 2;
            } else if (layer == 2) {
              tempArr[i].y = tempArr[i].y * 3;
            } else {
              tempArr[i].y = tempArr[i].y * 1;
            }
            tween(tempNode).to(0.4, {
              worldPosition: tempArr[i]
            }).call(() => {
              this.moveToRightPos();
            }).start();
          });
        }
        update(dt) {}
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "material", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tag", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "add", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nft", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "usdc", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "coin", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Message.ts", ['cc', './UiMgr.ts'], function (exports) {
  var cclegacy, Label, UIOpacity, tween, _decorator, UICtrl;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      _decorator = module._decorator;
    }, function (module) {
      UICtrl = module.UICtrl;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "51bc7fU8Y9MSYWWLBh/fEe+", "Message", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let Message = exports('Message', (_dec = ccclass('Message'), _dec(_class = class Message extends UICtrl {
        onLoad() {
          super.onLoad();
        }
        setValue(value, time) {
          this.node.getChildByName("Label").getComponent(Label).string = value;
          const opComp = this.node.getComponent(UIOpacity);
          tween(opComp).to(0.6, {
            opacity: 255
          }).start();
          const timer = setTimeout(() => {
            if (this.node) {
              this.node.active = false;
              this.node.destroy();
            }
            clearTimeout(timer);
          }, time ? time : 2000);
        }
      }) || _class));
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
      class Ajax {
        constructor() {
          this.xhr = void 0;
          this.xhr = new XMLHttpRequest();
          this.xhr.timeout = 50000;
        }
        get(url, data) {
          return new Promise((resolve, reject) => {
            const canvas = find("Canvas");
            const Loading = ResMgr.Instance.getAsset("GUI", "component/Loading");
            const child = instantiate(Loading);
            if (!canvas.getChildByName("Loading")) {
              canvas.addChild(child);
            }
            this.xhr.onreadystatechange = () => {
              if (this.xhr.readyState == 4 && this.xhr.status == 200) {
                const res = JSON.parse(this.xhr.responseText);
                child.destroy();
                resolve(res);
              }
            };
            let urlString = baseUrl1 + url;
            if (data) {
              if (data) {
                urlString = urlString + '?' + keyObject(data);
              }
            }
            this.xhr.open("GET", urlString, true);
            const token = getStorageData("token");
            if (token) {
              this.xhr.setRequestHeader("token", token);
            }
            this.xhr.setRequestHeader("Content-type", "application/json;charset=utf-8");
            this.xhr.send();
          });
        }
        post(url, data) {
          return new Promise((resolve, reject) => {
            this.xhr.onreadystatechange = () => {
              if (this.xhr.readyState == 4 && this.xhr.status == 201) {
                const res = JSON.parse(this.xhr.responseText);
                resolve(res);
              }
            };
            let urlString = baseUrl1 + url;
            this.xhr.open("POST", urlString, true);
            const token = getStorageData("token");
            if (token) {
              this.xhr.setRequestHeader("token", token);
            }
            this.xhr.setRequestHeader("Content-type", "application/json;charset=utf-8");
            this.xhr.send(JSON.stringify(data));
          });
        }
      }
      const ajax = exports('ajax', new Ajax());
      function request(options) {
        return new Promise((resolve, reject) => {
          const canvas = find("Canvas");
          // const Loading = ResMgr.Instance.getAsset("GUI", "component/Loading");
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
          const xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 201)) {
              const res = JSON.parse(xhr.responseText);
              // child.destroy();
              resolve(res);
            }
          };
          xhr.timeout = options.timeout || 50000; // 5 seconds for timeout
          const method = options.method || 'GET';
          let url = baseUrl + options.url;
          options.data = options.data;
          if (method == 'get' || method == "GET") {
            if (options.data) {
              url = url + '?' + keyObject(options.data);
            }
            xhr.open(method, url, true);
            const token = getStorageData("token");
            if (token) {
              xhr.setRequestHeader("token", token);
            }
            xhr.setRequestHeader("Content-type", "application/json;charset=utf-8");
            xhr.send();
          } else {
            xhr.open(method, url, true);
            const token = getStorageData("token");
            if (token) {
              xhr.setRequestHeader("token", token);
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

System.register("chunks:///_virtual/ResMgr.ts", ['cc'], function (exports) {
  var cclegacy, Component, assetManager, SpriteFrame, SpriteAtlas;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      assetManager = module.assetManager;
      SpriteFrame = module.SpriteFrame;
      SpriteAtlas = module.SpriteAtlas;
    }],
    execute: function () {
      cclegacy._RF.push({}, "87881hT1qdLp79gFpPIDHKe", "ResMgr", undefined);
      class ResMgr extends Component {
        constructor() {
          super(...arguments);
          this.totalAb = 0;
          this.nowAb = 0;
          this.total = 0;
          this.now = 0;
          this.abBUnds = {};
          this.progressFun = null;
          this.endFun = null;
        }
        onLoad() {
          if (!ResMgr.Instance) {
            ResMgr.Instance = this;
          } else {
            this.destroy();
            return;
          }
        }
        //加载
        preloadResourcePkg(resPkg, progressFun, endFun) {
          this.totalAb = 0;
          this.nowAb = 0;
          this.total = 0;
          this.now = 0;
          this.progressFun = progressFun;
          this.endFun = endFun;
          for (let key in resPkg) {
            this.totalAb++;
            this.total += resPkg[key].urls.length;
          }
          for (let key in resPkg) {
            this.loadAssetBundle(key, () => {
              this.nowAb++;
              if (this.nowAb == this.totalAb) {
                //完了加载资源
                this.loadAssetsInAssetBundle(resPkg);
              }
            });
          }
        }
        //预加载
        preloadResourcePkgAny(resPkg, progressFun, endFun) {
          this.totalAb = 0;
          this.nowAb = 0;
          this.total = 0;
          this.now = 0;
          this.progressFun = progressFun;
          this.endFun = endFun;
          for (let key in resPkg) {
            this.totalAb++;
            this.total += resPkg[key].urls.length;
          }
          for (let key in resPkg) {
            assetManager.preloadAny(resPkg[key].urls, (finished, total, item) => {
              this.nowAb++;
              this.now += finished;
              if (this.progressFun) {
                this.progressFun(this.now, this.total);
              }
            }, (err, data) => {
              if (err) {
                console.error("预加载失败");
              }
              if (this.endFun) {
                this.endFun();
              }
            });
          }
        }
        loadAssetsInAssetBundle(resPkg) {
          for (let key in resPkg) {
            const urlSet = resPkg[key].urls;
            urlSet.forEach(item => {
              this.loadRes(this.abBUnds[key], item.path, item.assetType);
            });
          }
        }
        loadRes(bundle, url, type) {
          bundle.load(url, type, (err, asset) => {
            this.now++;
            if (type.name == "SpriteAtlas") ;
            if (err) {
              console.error(err);
              console.error("load res err " + url);
            }
            if (this.progressFun) {
              this.progressFun(this.now, this.total);
            }
            if (this.now >= this.total) {
              if (this.endFun) {
                this.endFun();
              }
            }
          });
        }
        loadAssetBundle(abName, callFun) {
          assetManager.loadBundle(abName, (error, bundle) => {
            if (error) {
              console.error("load loadAssetBundle error" + abName);
              // this.abBUnds[abName] = null;
            } else {
              this.abBUnds[abName] = bundle;
            }
            // if (abName == "LSource") {
            //     bundle.preloadDir("/", SpriteFrame);
            //     bundle.preloadDir("/card", SpriteFrame);
            //     bundle.preloadDir("/trainBuff", SpriteFrame);
            // }

            if (callFun) {
              callFun();
            }
          });
        }
        //释放内存
        unloadResourcePkg(resPkg) {
          for (let key in resPkg) {
            assetManager.removeBundle(this.abBUnds[key]);
          }
          // assetManager.releaseAll();
        }

        getAsset(abName, url, callBack) {
          const bundle = assetManager.getBundle(abName);
          if (!bundle) console.error("getBundle err !!!");
          bundle.load(url, SpriteFrame, (err, asset) => {});
          const data = bundle.get(url);
          if (!data) {
            bundle.load(url, SpriteFrame, (err, asset) => {
              // console.log(asset);
              callBack && callBack(asset);
            });
          }
          return data;
        }
        getPlistAsset(abName, url, callBack) {
          const bundle = assetManager.getBundle(abName);
          if (!bundle) console.error("getBundle err !!!");
          bundle.load(url, SpriteAtlas, (err, asset) => {
            if (err) {
              console.error("load res err " + url);
            }
            callBack && callBack(asset);
          });
        }
      }
      exports('ResMgr', ResMgr);
      ResMgr.Instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Start.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResMgr.ts', './GameFiMgr.ts', './index.ts', './UiMgr.ts', './index3.ts', './storage.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, _decorator, director, Label, ProgressBar, ResMgr, GameFiMgr, resPkg, UICtrl, getGameUserInfo, setStorageData;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      _decorator = module._decorator;
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
      cclegacy._RF.push({}, "56e26DaluZGB6fS6NaTOueI", "Start", undefined);
      // import { TelegramWebAppContainer } from '@telegram-web-app/core';

      const {
        ccclass,
        property
      } = _decorator;
      let Start = exports('Start', (_dec = ccclass('Start'), _dec2 = property(Node), _dec(_class = (_class2 = class Start extends UICtrl {
        constructor() {
          super(...arguments);
          _initializerDefineProperty(this, "GameData", _descriptor, this);
          this.isLogin = false;
          this.address = "";
        }
        onLoad() {
          super.onLoad();
          director.addPersistRootNode(this.GameData);
          this.initGameDatainfo();
        }
        async initGameDatainfo() {
          if (!GameFiMgr.Instance._bTonInit) {
            GameFiMgr.Instance.initTonConnect(async info => {
              console.log(info);
              if (info) {
                this.address = info.account.address;
                // console.log(info);

                // this.loginWeb();
                this.isLogin = true;
              } else {
                this.isLogin = true;
                this.address = GameFiMgr.Instance._cocosGameFi.wallet.account.address;
                // this.loginWeb();
              }
            });
          } else {
            this.isLogin = true;
            this.address = GameFiMgr.Instance._cocosGameFi.wallet.account.address;
            // this.loginWeb();
          }

          this.view["Button"].on(Node.EventType.TOUCH_END, async e => {
            e.propagationStopped = true;
            if (this.isLogin) {
              const hash = await GameFiMgr.Instance.sendTransaction(0.00001);
              console.log(hash);
              // director.loadScene("main");
              // const hash = await GameFiMgr.Instance.sendTransaction(0.00001);
              // console.log("hash", hash);
            } else {
              console.log(GameFiMgr.Instance);
              GameFiMgr.Instance.openModal();
            }
          });
          this.view["Button1"].on(Node.EventType.TOUCH_END, async e => {
            e.propagationStopped = true;
            const shareUrl = 't.me/ziongametest_bot/zion123?startapp=ref_123456';
            window.Telegram.WebApp?.openTelegramLink(`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}`);
          });
        }
        async loginWeb() {
          const result = await getGameUserInfo({
            user_id_wallet: this.address
            // reference:1
          });

          if (result.code == 200) {
            // console.log(result);
            this.saveResult(result.result);
          }
        }
        saveResult(data) {
          setStorageData("user_info", data);
          this.view["bitcone/eggCoinGroup/Label"].getComponent(Label).string = data.points;
          this.view["bitcone/usdcCoinGroup/Label"].getComponent(Label).string = data.usdt_coin;
        }
        start() {
          this.isLogin = false;
          ResMgr.Instance.preloadResourcePkg(resPkg, (now, total) => {
            const Progress = this.view["pbar/ProgressBar"];
            Progress.getComponent(ProgressBar).progress = now / total;
          }, async () => {
            try {
              this.view["Button"].active = true;
              // debugger
              // AudioMgr.Instance.play("pass", {
              //     loop: true,
              //     playOnAwake: true,
              //     volume: 0.4,
              // })
            } catch (error) {
              console.log(error);
            }
          });
        }
        update(deltaTime) {}
      }, _descriptor = _applyDecoratedDescriptor(_class2.prototype, "GameData", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
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
      const setStorageData = exports('setStorageData', (key, value) => {
        sys.localStorage.setItem(key, JSON.stringify(value));
      });
      const getStorageData = exports('getStorageData', key => {
        if (sys.localStorage.getItem(key)) {
          return JSON.parse(sys.localStorage.getItem(key));
        } else {
          return null;
        }
      });
      const removeStorageData = exports('removeStorageData', key => {
        sys.localStorage.removeItem(key);
      });
      const clearStorageData = exports('clearStorageData', () => {
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

System.register("chunks:///_virtual/UiMgr.ts", ['cc'], function (exports) {
  var cclegacy, Component, Button;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      Button = module.Button;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0347bkkmf9Lwpk/Cdl/7Fvq", "UiMgr", undefined);
      class UICtrl extends Component {
        constructor() {
          super(...arguments);
          this.view = {};
        }
        onLoad() {
          this.load_all_node(this.node, "");
        }
        load_all_node(root, path) {
          for (let i = 0; i < root.children.length; i++) {
            this.view[path + root.children[i].name] = root.children[i];
            this.load_all_node(root.children[i], path + root.children[i].name + "/");
          }
        }
        addButtonListener(name, self, callBack) {
          const node = this.view[name];
          if (node) {
            const button = node.getComponent(Button);
            if (button) {
              node.on(Button.EventType.CLICK, callBack, self);
            } else {
              console.error(name + "Component not found");
            }
          } else {
            console.error(name + "node not found");
            return;
          }
        }
      }
      exports('UICtrl', UICtrl);
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
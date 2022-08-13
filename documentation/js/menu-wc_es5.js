'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">front-fil-rouge documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-73818cceda65e5d9a9ae9719d99d4d2bbd74f7a210692de09c8a99a4291033b7bebf99e714920cd8f4ae308cd75e9be38efb1343e9982315593df10882b0fac0"' : 'data-target="#xs-components-links-module-AppModule-73818cceda65e5d9a9ae9719d99d4d2bbd74f7a210692de09c8a99a4291033b7bebf99e714920cd8f4ae308cd75e9be38efb1343e9982315593df10882b0fac0"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-73818cceda65e5d9a9ae9719d99d4d2bbd74f7a210692de09c8a99a4291033b7bebf99e714920cd8f4ae308cd75e9be38efb1343e9982315593df10882b0fac0"' : 'id="xs-components-links-module-AppModule-73818cceda65e5d9a9ae9719d99d4d2bbd74f7a210692de09c8a99a4291033b7bebf99e714920cd8f4ae308cd75e9be38efb1343e9982315593df10882b0fac0"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/NotFoundComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >NotFoundComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ClientModule.html\" data-type=\"entity-link\" >ClientModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ClientRoutingModule.html\" data-type=\"entity-link\" >ClientRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/CommandeModule.html\" data-type=\"entity-link\" >CommandeModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-CommandeModule-bd711dcc4bfb890683fc1c359ed9f2d0f6e1a80f6e0d8883268cd22255b1f207065f7d46cfb90fd4acb06b6f0178abc116a169ae842cccd35776dbd054654655"' : 'data-target="#xs-components-links-module-CommandeModule-bd711dcc4bfb890683fc1c359ed9f2d0f6e1a80f6e0d8883268cd22255b1f207065f7d46cfb90fd4acb06b6f0178abc116a169ae842cccd35776dbd054654655"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-CommandeModule-bd711dcc4bfb890683fc1c359ed9f2d0f6e1a80f6e0d8883268cd22255b1f207065f7d46cfb90fd4acb06b6f0178abc116a169ae842cccd35776dbd054654655"' : 'id="xs-components-links-module-CommandeModule-bd711dcc4bfb890683fc1c359ed9f2d0f6e1a80f6e0d8883268cd22255b1f207065f7d46cfb90fd4acb06b6f0178abc116a169ae842cccd35776dbd054654655"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/CommandeComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CommandeComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/LigneComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LigneComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ListeComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ListeComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/LivraisonComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LivraisonComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PanierComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PanierComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/CommandeRoutingModule.html\" data-type=\"entity-link\" >CommandeRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/LayoutModule.html\" data-type=\"entity-link\" >LayoutModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-LayoutModule-bcd0817d914168a1c84b337a783b5774d2eb9d4dfe37e032258cfb3cc2237499ce453d38f24c776a5d21b2568f2b16af6f8e015450e9e5d4453a616d6d788071"' : 'data-target="#xs-components-links-module-LayoutModule-bcd0817d914168a1c84b337a783b5774d2eb9d4dfe37e032258cfb3cc2237499ce453d38f24c776a5d21b2568f2b16af6f8e015450e9e5d4453a616d6d788071"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-LayoutModule-bcd0817d914168a1c84b337a783b5774d2eb9d4dfe37e032258cfb3cc2237499ce453d38f24c776a5d21b2568f2b16af6f8e015450e9e5d4453a616d6d788071"' : 'id="xs-components-links-module-LayoutModule-bcd0817d914168a1c84b337a783b5774d2eb9d4dfe37e032258cfb3cc2237499ce453d38f24c776a5d21b2568f2b16af6f8e015450e9e5d4453a616d6d788071"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/FooterComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FooterComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/HeaderComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HeaderComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ProduitModule.html\" data-type=\"entity-link\" >ProduitModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ProduitModule-cf1ed41e81e2389d758301146407c4563fbefb04ff031bab8bb475be53db2948374114755a827b07064098d63c1bf585c325576132140d8d92b47f398033492d"' : 'data-target="#xs-components-links-module-ProduitModule-cf1ed41e81e2389d758301146407c4563fbefb04ff031bab8bb475be53db2948374114755a827b07064098d63c1bf585c325576132140d8d92b47f398033492d"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ProduitModule-cf1ed41e81e2389d758301146407c4563fbefb04ff031bab8bb475be53db2948374114755a827b07064098d63c1bf585c325576132140d8d92b47f398033492d"' : 'id="xs-components-links-module-ProduitModule-cf1ed41e81e2389d758301146407c4563fbefb04ff031bab8bb475be53db2948374114755a827b07064098d63c1bf585c325576132140d8d92b47f398033492d"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/BlogComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BlogComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/CardComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CardComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/CatalogueComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CatalogueComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ChoixBoissonComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ChoixBoissonComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ComplementComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ComplementComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/CompterComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CompterComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/DetailComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DetailComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/DetailMenuComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DetailMenuComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ListComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ListComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ProduitRoutingModule.html\" data-type=\"entity-link\" >ProduitRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SecuriteModule.html\" data-type=\"entity-link\" >SecuriteModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-SecuriteModule-7f3e133d3c6610fa9b4664f713c9e7da16539197c6089d067fde84da695f5f3a15119071ff904a3163e6aef78a5728dc675a21c57c34d31a60443567b6abfb0e"' : 'data-target="#xs-components-links-module-SecuriteModule-7f3e133d3c6610fa9b4664f713c9e7da16539197c6089d067fde84da695f5f3a15119071ff904a3163e6aef78a5728dc675a21c57c34d31a60443567b6abfb0e"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-SecuriteModule-7f3e133d3c6610fa9b4664f713c9e7da16539197c6089d067fde84da695f5f3a15119071ff904a3163e6aef78a5728dc675a21c57c34d31a60443567b6abfb0e"' : 'id="xs-components-links-module-SecuriteModule-7f3e133d3c6610fa9b4664f713c9e7da16539197c6089d067fde84da695f5f3a15119071ff904a3163e6aef78a5728dc675a21c57c34d31a60443567b6abfb0e"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ConnexionComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ConnexionComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SecuriteRoutingModule.html\" data-type=\"entity-link\" >SecuriteRoutingModule</a>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links"' : 'data-target="#xs-components-links"', ">\n                            <span class=\"icon ion-md-cog\"></span>\n                            <span>Components</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="components-links"' : 'id="xs-components-links"', ">\n                            <li class=\"link\">\n                                <a href=\"components/ProduitComponent.html\" data-type=\"entity-link\" >ProduitComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/SecuriteComponent.html\" data-type=\"entity-link\" >SecuriteComponent</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/CatalogueService.html\" data-type=\"entity-link\" >CatalogueService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/EventService.html\" data-type=\"entity-link\" >EventService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/PanierService.html\" data-type=\"entity-link\" >PanierService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/SessionLoginService.html\" data-type=\"entity-link\" >SessionLoginService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/TokenLoginService.html\" data-type=\"entity-link\" >TokenLoginService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"', ">\n                            <span class=\"icon ion-ios-lock\"></span>\n                            <span>Guards</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"', ">\n                            <li class=\"link\">\n                                <a href=\"guards/AuthGuard.html\" data-type=\"entity-link\" >AuthGuard</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/BoissonTailleBoisson.html\" data-type=\"entity-link\" >BoissonTailleBoisson</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/BurgerCommande.html\" data-type=\"entity-link\" >BurgerCommande</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Catalogue.html\" data-type=\"entity-link\" >Catalogue</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/CommandeBoisson.html\" data-type=\"entity-link\" >CommandeBoisson</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/CommandeFrite.html\" data-type=\"entity-link\" >CommandeFrite</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/CommandeMenuBoissonTaille.html\" data-type=\"entity-link\" >CommandeMenuBoissonTaille</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Detail.html\" data-type=\"entity-link\" >Detail</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Menu.html\" data-type=\"entity-link\" >Menu</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Menu-1.html\" data-type=\"entity-link\" >Menu</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/MenuBurger.html\" data-type=\"entity-link\" >MenuBurger</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/MenuCommande.html\" data-type=\"entity-link\" >MenuCommande</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/MenuPortion.html\" data-type=\"entity-link\" >MenuPortion</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/MenuTailleBoisson.html\" data-type=\"entity-link\" >MenuTailleBoisson</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Panier.html\" data-type=\"entity-link\" >Panier</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Produit.html\" data-type=\"entity-link\" >Produit</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/TailleBoisson.html\" data-type=\"entity-link\" >TailleBoisson</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/TailleBoissonMenu.html\" data-type=\"entity-link\" >TailleBoissonMenu</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Token.html\" data-type=\"entity-link\" >Token</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/User.html\" data-type=\"entity-link\" >User</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Zone.html\" data-type=\"entity-link\" >Zone</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
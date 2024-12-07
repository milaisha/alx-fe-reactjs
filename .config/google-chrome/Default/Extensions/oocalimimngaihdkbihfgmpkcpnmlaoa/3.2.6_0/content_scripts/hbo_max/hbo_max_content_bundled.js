(() => {
    var __webpack_modules__ = {
        7269: function(__unused_webpack_module, exports, __webpack_require__) {
            "use strict";
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator.throw(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        var value;
                        result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P((function(resolve) {
                            resolve(value);
                        }))).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            }, __generator = this && this.__generator || function(thisArg, body) {
                var f, y, t, g, _ = {
                    label: 0,
                    sent: function() {
                        if (1 & t[0]) throw t[1];
                        return t[1];
                    },
                    trys: [],
                    ops: []
                };
                return g = {
                    next: verb(0),
                    throw: verb(1),
                    return: verb(2)
                }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                    return this;
                }), g;
                function verb(n) {
                    return function(v) {
                        return function(op) {
                            if (f) throw new TypeError("Generator is already executing.");
                            for (;_; ) try {
                                if (f = 1, y && (t = 2 & op[0] ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 
                                0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                                switch (y = 0, t && (op = [ 2 & op[0], t.value ]), op[0]) {
                                  case 0:
                                  case 1:
                                    t = op;
                                    break;

                                  case 4:
                                    return _.label++, {
                                        value: op[1],
                                        done: !1
                                    };

                                  case 5:
                                    _.label++, y = op[1], op = [ 0 ];
                                    continue;

                                  case 7:
                                    op = _.ops.pop(), _.trys.pop();
                                    continue;

                                  default:
                                    if (!(t = _.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== op[0] && 2 !== op[0])) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (6 === op[0] && _.label < t[1]) {
                                        _.label = t[1], t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2], _.ops.push(op);
                                        break;
                                    }
                                    t[2] && _.ops.pop(), _.trys.pop();
                                    continue;
                                }
                                op = body.call(thisArg, _);
                            } catch (e) {
                                op = [ 6, e ], y = 0;
                            } finally {
                                f = t = 0;
                            }
                            if (5 & op[0]) throw op[1];
                            return {
                                value: op[0] ? op[1] : void 0,
                                done: !0
                            };
                        }([ n, v ]);
                    };
                }
            }, __rest = this && this.__rest || function(s, e) {
                var t = {};
                for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0 && (t[p] = s[p]);
                if (null != s && "function" == typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (p = Object.getOwnPropertySymbols(s); i < p.length; i++) e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]) && (t[p[i]] = s[p[i]]);
                }
                return t;
            }, __spreadArrays = this && this.__spreadArrays || function() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
                var r = Array(s), k = 0;
                for (i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
                k++) r[k] = a[j];
                return r;
            }, __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                    default: mod
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.Client = void 0;
            var isomorphic_unfetch_1 = __importDefault(__webpack_require__(204)), form_data_1 = __importDefault(__webpack_require__(3736)), debug_1 = __importDefault(__webpack_require__(4443)), generated_1 = __webpack_require__(2087), utils_1 = __webpack_require__(9532), UserdbApi_1 = __webpack_require__(8069), runtime_1 = __webpack_require__(7618);
            __webpack_require__.g.FormData = __webpack_require__.g.FormData || form_data_1.default;
            var log = debug_1.default("adzerk-decision-sdk:client"), isNode = "undefined" != typeof process && "browser" !== process.title, isReactNative = "undefined" != typeof navigator && "ReactNative" === navigator.product, deprecatedPlacementFields = [ [ "ecpmPartition", "ecpmPartitions" ] ];
            var defaultLogger = function(lvl, msg, meta) {
                null != meta ? log("[" + lvl + "] " + msg + " [%o]", meta) : log("[" + lvl + "] " + msg);
            }, DecisionClient = function() {
                function DecisionClient(configuration, networkId, logger, siteId) {
                    this._api = new generated_1.DecisionApi(configuration), this._networkId = networkId, 
                    this._siteId = siteId, this._logger = logger;
                }
                return DecisionClient.prototype.get = function(request, additionalOpts) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var logger, processedRequest, api, response, decisions, _this = this;
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                if ((logger = this._logger || defaultLogger)("info", "Fetching decisions from Adzerk API"), 
                                logger("info", "Processing request: ", request), void 0 === (processedRequest = utils_1.removeUndefinedAndBlocklisted(request, [ "isMobile" ])).enableBotFiltering && (processedRequest.enableBotFiltering = !isNode), 
                                void 0 === processedRequest.placements || !processedRequest.placements.length) throw new runtime_1.RequiredError("decisionRequest", "Each request requires at least one placement");
                                return processedRequest.placements.forEach((function(p, idx) {
                                    if (void 0 === p.adTypes || !p.adTypes.length) throw new runtime_1.RequiredError("placements", "Each placement requires at least one ad type");
                                    for (var _i = 0, deprecatedPlacementFields_1 = deprecatedPlacementFields; _i < deprecatedPlacementFields_1.length; _i++) {
                                        var pair = deprecatedPlacementFields_1[_i], deprecatedField = pair[0], replacement = pair[1];
                                        null != (p[deprecatedField] || void 0) && logger("warn", "DEPRECATION WARNING: " + deprecatedField + " has been deprecated. Please use " + replacement + " instead.");
                                    }
                                    p.networkId = p.networkId || _this._networkId, p.siteId = p.siteId || _this._siteId, 
                                    p.divName = p.divName || "div" + idx;
                                })), api = this._api, ((null == additionalOpts ? void 0 : additionalOpts.includeExplanation) || (null == additionalOpts ? void 0 : additionalOpts.userAgent)) && (api = api.withPreMiddleware((function(context) {
                                    return __awaiter(_this, void 0, void 0, (function() {
                                        var headers;
                                        return __generator(this, (function(_a) {
                                            return context.init.headers || (context.init.headers = {}), headers = context.init.headers, 
                                            additionalOpts.includeExplanation && (logger("warn", "--------------------------------------------------------------\n--------------!!! WARNING - WARNING - WARNING !!!-------------\nYou have opted to include explainer details with this request!\nThis will cause performance degradation and should not be done\nin production environments.\n--------------------------------------------------------------"), 
                                            headers["x-adzerk-explain"] = additionalOpts.apiKey || ""), additionalOpts.userAgent && (headers["User-Agent"] = additionalOpts.userAgent || ""), 
                                            [ 2 ];
                                        }));
                                    }));
                                }))), logger("info", "Using the processed request: ", processedRequest), [ 4, api.getDecisions(processedRequest) ];

                              case 1:
                                return response = _a.sent(), logger("info", "Received response: ", response), decisions = response.decisions || {}, 
                                Object.keys(decisions).forEach((function(k) {
                                    decisions[k] instanceof Array || (decisions[k] = [ decisions[k] ]);
                                })), [ 2, response ];
                            }
                        }));
                    }));
                }, DecisionClient;
            }(), UserDbClient = function() {
                function UserDbClient(configuration, networkId) {
                    this._api = new UserdbApi_1.UserdbApi(configuration), this._networkId = networkId;
                }
                return UserDbClient.prototype.setCustomProperties = function(userKey, properties, networkId) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this._api.addCustomProperties(networkId || this._networkId, userKey, properties) ];

                              case 1:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserDbClient.prototype.addInterest = function(userKey, interest, networkId) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this._api.addInterests(networkId || this._networkId, userKey, interest) ];

                              case 1:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserDbClient.prototype.addRetargetingSegment = function(userKey, advertiserId, retargetingSegmentId, networkId) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this._api.addRetargetingSegment(networkId || this._networkId, advertiserId, retargetingSegmentId, userKey) ];

                              case 1:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserDbClient.prototype.forget = function(userKey, networkId) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this._api.forget(networkId || this._networkId, userKey) ];

                              case 1:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserDbClient.prototype.gdprConsent = function(gdprConsent, networkId) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this._api.gdprConsent(networkId || this._networkId, gdprConsent) ];

                              case 1:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserDbClient.prototype.ipOverride = function(userKey, ip, networkId) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this._api.ipOverride(networkId || this._networkId, userKey, ip) ];

                              case 1:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserDbClient.prototype.matchUser = function(userKey, partnerId, userId, networkId) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this._api.matchUser(networkId || this._networkId, userKey, partnerId, userId) ];

                              case 1:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserDbClient.prototype.optOut = function(userKey, networkId) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this._api.optOut(networkId || this._networkId, userKey) ];

                              case 1:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserDbClient.prototype.read = function(userKey, networkId) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var record, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                        return __generator(this, (function(_l) {
                            switch (_l.label) {
                              case 0:
                                return [ 4, this._api.read(networkId || this._networkId, userKey) ];

                              case 1:
                                return record = _l.sent(), _a = record.cookieMonster, void 0 === _a ? void 0 : _a, 
                                _b = record.dirtyCookies, void 0 === _b ? void 0 : _b, _c = record.isNew, void 0 === _c ? void 0 : _c, 
                                _d = record.adViewTimes, void 0 === _d ? void 0 : _d, _e = record.advertiserViewTimes, 
                                void 0 === _e ? void 0 : _e, _f = record.flightViewTimes, void 0 === _f ? void 0 : _f, 
                                _g = record.siteViewTimes, void 0 === _g ? void 0 : _g, _h = record.campaignViewTimes, 
                                void 0 === _h ? void 0 : _h, _j = record.pendingConversions, void 0 === _j ? void 0 : _j, 
                                _k = record.campaignConversions, void 0 === _k ? void 0 : _k, [ 2, __rest(record, [ "cookieMonster", "dirtyCookies", "isNew", "adViewTimes", "advertiserViewTimes", "flightViewTimes", "siteViewTimes", "campaignViewTimes", "pendingConversions", "campaignConversions" ]) ];
                            }
                        }));
                    }));
                }, UserDbClient;
            }(), PixelClient = function() {
                function PixelClient(fetch, agent, logger, versionString) {
                    this._fetch = fetch, this._agent = agent, this._logger = logger, this._versionString = versionString;
                }
                return PixelClient.prototype.buildFireUrl = function(params) {
                    var parsed = new URL(params.url);
                    return params.revenueOverride && parsed.searchParams.append("override", params.revenueOverride.toString()), 
                    params.additionalRevenue && parsed.searchParams.append("additional", params.additionalRevenue.toString()), 
                    params.eventMultiplier && parsed.searchParams.append("eventMultiplier", params.eventMultiplier.toString()), 
                    parsed.href;
                }, PixelClient.prototype.fire = function(params, additionalOpts) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var logger, opts, url, result, location;
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return logger = this._logger || defaultLogger, opts = {
                                    method: "GET",
                                    headers: {
                                        "X-Adzerk-Sdk-Version": this._versionString,
                                        "User-Agent": (null == additionalOpts ? void 0 : additionalOpts.userAgent) || "OpenAPI-Generator/1.0/js"
                                    },
                                    redirect: "manual"
                                }, url = this.buildFireUrl(params), logger("info", "Firing Pixel at base url of: " + url), 
                                this._agent && (opts.agent = this._agent), [ 4, this._fetch(url, opts) ];

                              case 1:
                                return (result = _a.sent()).headers.has("location") && (location = result.headers.get("location")), 
                                logger("info", "Received response from pixel url: " + result.status + " with location: " + location), 
                                [ 2, {
                                    status: result.status,
                                    location: result.headers.has("location") ? result.headers.get("location") : void 0
                                } ];
                            }
                        }));
                    }));
                }, PixelClient;
            }(), Client = function() {
                function Client(opts) {
                    var _this = this, fetch = (opts.fetch || isomorphic_unfetch_1.default).bind(__webpack_require__.g), logger = opts.logger || defaultLogger, protocol = opts.protocol || "https", basePath = protocol + "://" + (opts.host || "e-" + opts.networkId + ".adzerk.net"), versionString = "adzerk-decision-sdk-js:1.0.0-beta.12";
                    if (opts.additionalVersionInfo && (versionString = opts.additionalVersionInfo + ";" + versionString), 
                    this._path = opts.path, isNode && !isReactNative) {
                        var Agent = __webpack_require__(8738)(protocol).Agent;
                        this._agent = opts.agent || new Agent({
                            keepAlive: !0,
                            timeout: 1e4
                        });
                    }
                    var middleware = {
                        pre: function(context) {
                            return __awaiter(_this, void 0, void 0, (function() {
                                return __generator(this, (function(_a) {
                                    return logger("info", "Request Url: " + context.url), logger("info", "Request Headers: " + context.init.headers), 
                                    logger("info", "Request Body: " + context.init.body), null != this._agent && (context.init.agent = this._agent), 
                                    null != this._path && (context.url = "" + basePath + this._path), context.init.headers || (context.init.headers = {}), 
                                    context.init.headers["X-Adzerk-Sdk-Version"] = versionString, [ 2, context ];
                                }));
                            }));
                        },
                        post: function(context) {
                            return __awaiter(_this, void 0, void 0, (function() {
                                return __generator(this, (function(_a) {
                                    return logger("info", "Response Code: " + context.response.status), logger("info", "Response Status Text: " + context.response.statusText), 
                                    [ 2, context.response ];
                                }));
                            }));
                        }
                    }, configuration = new generated_1.Configuration({
                        basePath,
                        fetchApi: fetch,
                        apiKey: opts.apiKey,
                        middleware: __spreadArrays(opts.middlewares || [], [ middleware ])
                    });
                    this._decisionClient = new DecisionClient(configuration, opts.networkId, logger, opts.siteId), 
                    this._userDbClient = new UserDbClient(configuration, opts.networkId), this._pixelClient = new PixelClient(fetch, this._agent, logger, versionString);
                }
                return Object.defineProperty(Client.prototype, "decisions", {
                    get: function() {
                        return this._decisionClient;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Client.prototype, "userDb", {
                    get: function() {
                        return this._userDbClient;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Client.prototype, "pixels", {
                    get: function() {
                        return this._pixelClient;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Client;
            }();
            exports.Client = Client;
        },
        791: (__unused_webpack_module, exports) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.RateType = exports.EventType = void 0, function(EventType) {
                EventType[EventType.ViewConversion = 1] = "ViewConversion", EventType[EventType.ClickConversion = 2] = "ClickConversion", 
                EventType[EventType.ServerToServerConversion = 3] = "ServerToServerConversion", 
                EventType[EventType.Upvote = 10] = "Upvote", EventType[EventType.Downvote = 11] = "Downvote", 
                EventType[EventType.DownvoteUninteresting = 12] = "DownvoteUninteresting", EventType[EventType.DownvoteMisleading = 13] = "DownvoteMisleading", 
                EventType[EventType.DownvoteOffensive = 14] = "DownvoteOffensive", EventType[EventType.DownvoteRepetitive = 15] = "DownvoteRepetitive", 
                EventType[EventType.DownvoteOther = 16] = "DownvoteOther", EventType[EventType.CloseAd = 17] = "CloseAd", 
                EventType[EventType.Like = 20] = "Like", EventType[EventType.Share = 21] = "Share", 
                EventType[EventType.Comment = 22] = "Comment", EventType[EventType.CommentReply = 101] = "CommentReply", 
                EventType[EventType.CommentUpvote = 102] = "CommentUpvote", EventType[EventType.CommentDownvote = 103] = "CommentDownvote", 
                EventType[EventType.Visible = 30] = "Visible", EventType[EventType.Hover = 31] = "Hover", 
                EventType[EventType.ExpandDiv = 32] = "ExpandDiv", EventType[EventType.ViewableImpression = 40] = "ViewableImpression", 
                EventType[EventType.ShareOnFacebook = 50] = "ShareOnFacebook", EventType[EventType.ShareOnTwitter = 51] = "ShareOnTwitter", 
                EventType[EventType.ShareOnPinterest = 52] = "ShareOnPinterest", EventType[EventType.ShareOnReddit = 53] = "ShareOnReddit", 
                EventType[EventType.ShareOnEmail = 54] = "ShareOnEmail", EventType[EventType.VideoStart = 70] = "VideoStart", 
                EventType[EventType.VideoFirstQuartile = 71] = "VideoFirstQuartile", EventType[EventType.VideoMidPoint = 72] = "VideoMidPoint", 
                EventType[EventType.VideoThirdQuartile = 73] = "VideoThirdQuartile", EventType[EventType.VideoComplete = 74] = "VideoComplete", 
                EventType[EventType.VideoMute = 75] = "VideoMute", EventType[EventType.VideoUnmute = 76] = "VideoUnmute", 
                EventType[EventType.VideoPause = 77] = "VideoPause", EventType[EventType.VideoRewind = 78] = "VideoRewind", 
                EventType[EventType.VideoResume = 79] = "VideoResume", EventType[EventType.VideoFullScreen = 80] = "VideoFullScreen", 
                EventType[EventType.VideoExitFullScreen = 81] = "VideoExitFullScreen", EventType[EventType.VideoExpand = 82] = "VideoExpand", 
                EventType[EventType.VideoCollapse = 83] = "VideoCollapse", EventType[EventType.VideoAcceptInvitationLinear = 84] = "VideoAcceptInvitationLinear", 
                EventType[EventType.VideoCloseLinear = 85] = "VideoCloseLinear", EventType[EventType.VideoSkip = 86] = "VideoSkip", 
                EventType[EventType.VideoProgress = 87] = "VideoProgress", EventType[EventType.VideoZeroSecondsViewed = 400] = "VideoZeroSecondsViewed", 
                EventType[EventType.VideoOneSecondsViewed = 401] = "VideoOneSecondsViewed", EventType[EventType.VideoTwoSecondsViewed = 402] = "VideoTwoSecondsViewed", 
                EventType[EventType.VideoThreeSecondsViewed = 403] = "VideoThreeSecondsViewed", 
                EventType[EventType.VideoFourSecondsViewed = 404] = "VideoFourSecondsViewed", EventType[EventType.VideoFiveSecondsViewed = 405] = "VideoFiveSecondsViewed", 
                EventType[EventType.VideoSixSecondsViewed = 406] = "VideoSixSecondsViewed", EventType[EventType.VideoSevenSecondsViewed = 407] = "VideoSevenSecondsViewed", 
                EventType[EventType.VideoEightSecondsViewed = 408] = "VideoEightSecondsViewed", 
                EventType[EventType.VideoNineSecondsViewed = 409] = "VideoNineSecondsViewed", EventType[EventType.VideoTenSecondsViewed = 410] = "VideoTenSecondsViewed", 
                EventType[EventType.VideoFifteenSecondsViewed = 415] = "VideoFifteenSecondsViewed", 
                EventType[EventType.VideoTwentySecondsViewed = 420] = "VideoTwentySecondsViewed", 
                EventType[EventType.VideoTwentyFiveSecondsViewed = 425] = "VideoTwentyFiveSecondsViewed", 
                EventType[EventType.VideoThirtySecondsViewed = 430] = "VideoThirtySecondsViewed";
            }(exports.EventType || (exports.EventType = {})), function(RateType) {
                RateType[RateType.Flat = 1] = "Flat", RateType[RateType.CPM = 2] = "CPM", RateType[RateType.CPC = 3] = "CPC", 
                RateType[RateType.CPAView = 4] = "CPAView", RateType[RateType.CPAClick = 5] = "CPAClick", 
                RateType[RateType.CPAViewAndClick = 6] = "CPAViewAndClick";
            }(exports.RateType || (exports.RateType = {}));
        },
        2160: function(__unused_webpack_module, exports, __webpack_require__) {
            "use strict";
            var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
                return (extendStatics = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(d, b) {
                    d.__proto__ = b;
                } || function(d, b) {
                    for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
                })(d, b);
            }, function(d, b) {
                function __() {
                    this.constructor = d;
                }
                extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
                new __);
            }), __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
                void 0 === k2 && (k2 = k), Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function() {
                        return m[k];
                    }
                });
            } : function(o, m, k, k2) {
                void 0 === k2 && (k2 = k), o[k2] = m[k];
            }), __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
                Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: v
                });
            } : function(o, v) {
                o.default = v;
            }), __importStar = this && this.__importStar || function(mod) {
                if (mod && mod.__esModule) return mod;
                var result = {};
                if (null != mod) for (var k in mod) Object.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
                return __setModuleDefault(result, mod), result;
            }, __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator.throw(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        var value;
                        result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P((function(resolve) {
                            resolve(value);
                        }))).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            }, __generator = this && this.__generator || function(thisArg, body) {
                var f, y, t, g, _ = {
                    label: 0,
                    sent: function() {
                        if (1 & t[0]) throw t[1];
                        return t[1];
                    },
                    trys: [],
                    ops: []
                };
                return g = {
                    next: verb(0),
                    throw: verb(1),
                    return: verb(2)
                }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                    return this;
                }), g;
                function verb(n) {
                    return function(v) {
                        return function(op) {
                            if (f) throw new TypeError("Generator is already executing.");
                            for (;_; ) try {
                                if (f = 1, y && (t = 2 & op[0] ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 
                                0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                                switch (y = 0, t && (op = [ 2 & op[0], t.value ]), op[0]) {
                                  case 0:
                                  case 1:
                                    t = op;
                                    break;

                                  case 4:
                                    return _.label++, {
                                        value: op[1],
                                        done: !1
                                    };

                                  case 5:
                                    _.label++, y = op[1], op = [ 0 ];
                                    continue;

                                  case 7:
                                    op = _.ops.pop(), _.trys.pop();
                                    continue;

                                  default:
                                    if (!(t = _.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== op[0] && 2 !== op[0])) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (6 === op[0] && _.label < t[1]) {
                                        _.label = t[1], t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2], _.ops.push(op);
                                        break;
                                    }
                                    t[2] && _.ops.pop(), _.trys.pop();
                                    continue;
                                }
                                op = body.call(thisArg, _);
                            } catch (e) {
                                op = [ 6, e ], y = 0;
                            } finally {
                                f = t = 0;
                            }
                            if (5 & op[0]) throw op[1];
                            return {
                                value: op[0] ? op[1] : void 0,
                                done: !0
                            };
                        }([ n, v ]);
                    };
                }
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.DecisionApi = void 0;
            var runtime = __importStar(__webpack_require__(7618)), models_1 = __webpack_require__(9803), DecisionApi = function(_super) {
                function DecisionApi() {
                    return null !== _super && _super.apply(this, arguments) || this;
                }
                return __extends(DecisionApi, _super), DecisionApi.prototype.getDecisionsRaw = function(requestParameters) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var queryParameters, headerParameters, response;
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return queryParameters = {}, (headerParameters = {})["Content-Type"] = "application/json", 
                                [ 4, this.request({
                                    path: "/api/v2",
                                    method: "POST",
                                    headers: headerParameters,
                                    query: queryParameters,
                                    body: models_1.DecisionRequestToJSON(requestParameters.decisionRequest)
                                }) ];

                              case 1:
                                return response = _a.sent(), [ 2, new runtime.JSONApiResponse(response, (function(jsonValue) {
                                    return models_1.DecisionResponseFromJSON(jsonValue);
                                })) ];
                            }
                        }));
                    }));
                }, DecisionApi.prototype.getDecisions = function(decisionRequest) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this.getDecisionsRaw({
                                    decisionRequest
                                }) ];

                              case 1:
                                return [ 4, _a.sent().value() ];

                              case 2:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, DecisionApi;
            }(runtime.BaseAPI);
            exports.DecisionApi = DecisionApi;
        },
        8069: function(__unused_webpack_module, exports, __webpack_require__) {
            "use strict";
            var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
                return (extendStatics = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(d, b) {
                    d.__proto__ = b;
                } || function(d, b) {
                    for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
                })(d, b);
            }, function(d, b) {
                function __() {
                    this.constructor = d;
                }
                extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
                new __);
            }), __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
                void 0 === k2 && (k2 = k), Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function() {
                        return m[k];
                    }
                });
            } : function(o, m, k, k2) {
                void 0 === k2 && (k2 = k), o[k2] = m[k];
            }), __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
                Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: v
                });
            } : function(o, v) {
                o.default = v;
            }), __importStar = this && this.__importStar || function(mod) {
                if (mod && mod.__esModule) return mod;
                var result = {};
                if (null != mod) for (var k in mod) Object.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
                return __setModuleDefault(result, mod), result;
            }, __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator.throw(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        var value;
                        result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P((function(resolve) {
                            resolve(value);
                        }))).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            }, __generator = this && this.__generator || function(thisArg, body) {
                var f, y, t, g, _ = {
                    label: 0,
                    sent: function() {
                        if (1 & t[0]) throw t[1];
                        return t[1];
                    },
                    trys: [],
                    ops: []
                };
                return g = {
                    next: verb(0),
                    throw: verb(1),
                    return: verb(2)
                }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                    return this;
                }), g;
                function verb(n) {
                    return function(v) {
                        return function(op) {
                            if (f) throw new TypeError("Generator is already executing.");
                            for (;_; ) try {
                                if (f = 1, y && (t = 2 & op[0] ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 
                                0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                                switch (y = 0, t && (op = [ 2 & op[0], t.value ]), op[0]) {
                                  case 0:
                                  case 1:
                                    t = op;
                                    break;

                                  case 4:
                                    return _.label++, {
                                        value: op[1],
                                        done: !1
                                    };

                                  case 5:
                                    _.label++, y = op[1], op = [ 0 ];
                                    continue;

                                  case 7:
                                    op = _.ops.pop(), _.trys.pop();
                                    continue;

                                  default:
                                    if (!(t = _.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== op[0] && 2 !== op[0])) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (6 === op[0] && _.label < t[1]) {
                                        _.label = t[1], t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2], _.ops.push(op);
                                        break;
                                    }
                                    t[2] && _.ops.pop(), _.trys.pop();
                                    continue;
                                }
                                op = body.call(thisArg, _);
                            } catch (e) {
                                op = [ 6, e ], y = 0;
                            } finally {
                                f = t = 0;
                            }
                            if (5 & op[0]) throw op[1];
                            return {
                                value: op[0] ? op[1] : void 0,
                                done: !0
                            };
                        }([ n, v ]);
                    };
                }
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.UserdbApi = void 0;
            var runtime = __importStar(__webpack_require__(7618)), models_1 = __webpack_require__(9803), UserdbApi = function(_super) {
                function UserdbApi() {
                    return null !== _super && _super.apply(this, arguments) || this;
                }
                return __extends(UserdbApi, _super), UserdbApi.prototype.addCustomPropertiesRaw = function(requestParameters) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var queryParameters, headerParameters, response;
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                if (null === requestParameters.networkId || void 0 === requestParameters.networkId) throw new runtime.RequiredError("networkId", "Required parameter requestParameters.networkId was null or undefined when calling addCustomProperties.");
                                if (null === requestParameters.userKey || void 0 === requestParameters.userKey) throw new runtime.RequiredError("userKey", "Required parameter requestParameters.userKey was null or undefined when calling addCustomProperties.");
                                return queryParameters = {}, void 0 !== requestParameters.userKey && (queryParameters.userKey = requestParameters.userKey), 
                                (headerParameters = {})["Content-Type"] = "application/json", this.configuration && this.configuration.apiKey && (headerParameters["X-Adzerk-ApiKey"] = this.configuration.apiKey("X-Adzerk-ApiKey")), 
                                [ 4, this.request({
                                    path: "/udb/{networkId}/custom".replace("{networkId}", encodeURIComponent(String(requestParameters.networkId))),
                                    method: "POST",
                                    headers: headerParameters,
                                    query: queryParameters,
                                    body: requestParameters.body
                                }) ];

                              case 1:
                                return response = _a.sent(), [ 2, new runtime.BlobApiResponse(response) ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.addCustomProperties = function(networkId, userKey, body) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this.addCustomPropertiesRaw({
                                    networkId,
                                    userKey,
                                    body
                                }) ];

                              case 1:
                                return [ 4, _a.sent().value() ];

                              case 2:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.addInterestsRaw = function(requestParameters) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var queryParameters, headerParameters, response;
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                if (null === requestParameters.networkId || void 0 === requestParameters.networkId) throw new runtime.RequiredError("networkId", "Required parameter requestParameters.networkId was null or undefined when calling addInterests.");
                                if (null === requestParameters.userKey || void 0 === requestParameters.userKey) throw new runtime.RequiredError("userKey", "Required parameter requestParameters.userKey was null or undefined when calling addInterests.");
                                if (null === requestParameters.interest || void 0 === requestParameters.interest) throw new runtime.RequiredError("interest", "Required parameter requestParameters.interest was null or undefined when calling addInterests.");
                                return queryParameters = {}, void 0 !== requestParameters.userKey && (queryParameters.userKey = requestParameters.userKey), 
                                void 0 !== requestParameters.interest && (queryParameters.interest = requestParameters.interest), 
                                headerParameters = {}, [ 4, this.request({
                                    path: "/udb/{networkId}/interest/i.gif".replace("{networkId}", encodeURIComponent(String(requestParameters.networkId))),
                                    method: "GET",
                                    headers: headerParameters,
                                    query: queryParameters
                                }) ];

                              case 1:
                                return response = _a.sent(), [ 2, new runtime.BlobApiResponse(response) ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.addInterests = function(networkId, userKey, interest) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this.addInterestsRaw({
                                    networkId,
                                    userKey,
                                    interest
                                }) ];

                              case 1:
                                return [ 4, _a.sent().value() ];

                              case 2:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.addRetargetingSegmentRaw = function(requestParameters) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var queryParameters, headerParameters, response;
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                if (null === requestParameters.networkId || void 0 === requestParameters.networkId) throw new runtime.RequiredError("networkId", "Required parameter requestParameters.networkId was null or undefined when calling addRetargetingSegment.");
                                if (null === requestParameters.advertiserId || void 0 === requestParameters.advertiserId) throw new runtime.RequiredError("advertiserId", "Required parameter requestParameters.advertiserId was null or undefined when calling addRetargetingSegment.");
                                if (null === requestParameters.retargetingSegmentId || void 0 === requestParameters.retargetingSegmentId) throw new runtime.RequiredError("retargetingSegmentId", "Required parameter requestParameters.retargetingSegmentId was null or undefined when calling addRetargetingSegment.");
                                if (null === requestParameters.userKey || void 0 === requestParameters.userKey) throw new runtime.RequiredError("userKey", "Required parameter requestParameters.userKey was null or undefined when calling addRetargetingSegment.");
                                return queryParameters = {}, void 0 !== requestParameters.userKey && (queryParameters.userKey = requestParameters.userKey), 
                                headerParameters = {}, [ 4, this.request({
                                    path: "/udb/{networkId}/rt/{advertiserId}/{retargetingSegmentId}/i.gif".replace("{networkId}", encodeURIComponent(String(requestParameters.networkId))).replace("{advertiserId}", encodeURIComponent(String(requestParameters.advertiserId))).replace("{retargetingSegmentId}", encodeURIComponent(String(requestParameters.retargetingSegmentId))),
                                    method: "GET",
                                    headers: headerParameters,
                                    query: queryParameters
                                }) ];

                              case 1:
                                return response = _a.sent(), [ 2, new runtime.BlobApiResponse(response) ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.addRetargetingSegment = function(networkId, advertiserId, retargetingSegmentId, userKey) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this.addRetargetingSegmentRaw({
                                    networkId,
                                    advertiserId,
                                    retargetingSegmentId,
                                    userKey
                                }) ];

                              case 1:
                                return [ 4, _a.sent().value() ];

                              case 2:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.forgetRaw = function(requestParameters) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var queryParameters, headerParameters, response;
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                if (null === requestParameters.networkId || void 0 === requestParameters.networkId) throw new runtime.RequiredError("networkId", "Required parameter requestParameters.networkId was null or undefined when calling forget.");
                                if (null === requestParameters.userKey || void 0 === requestParameters.userKey) throw new runtime.RequiredError("userKey", "Required parameter requestParameters.userKey was null or undefined when calling forget.");
                                return queryParameters = {}, void 0 !== requestParameters.userKey && (queryParameters.userKey = requestParameters.userKey), 
                                headerParameters = {}, this.configuration && this.configuration.apiKey && (headerParameters["X-Adzerk-ApiKey"] = this.configuration.apiKey("X-Adzerk-ApiKey")), 
                                [ 4, this.request({
                                    path: "/udb/{networkId}".replace("{networkId}", encodeURIComponent(String(requestParameters.networkId))),
                                    method: "DELETE",
                                    headers: headerParameters,
                                    query: queryParameters
                                }) ];

                              case 1:
                                return response = _a.sent(), [ 2, new runtime.VoidApiResponse(response) ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.forget = function(networkId, userKey) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this.forgetRaw({
                                    networkId,
                                    userKey
                                }) ];

                              case 1:
                                return _a.sent(), [ 2 ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.gdprConsentRaw = function(requestParameters) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var queryParameters, headerParameters, response;
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                if (null === requestParameters.networkId || void 0 === requestParameters.networkId) throw new runtime.RequiredError("networkId", "Required parameter requestParameters.networkId was null or undefined when calling gdprConsent.");
                                return queryParameters = {}, (headerParameters = {})["Content-Type"] = "application/json", 
                                this.configuration && this.configuration.apiKey && (headerParameters["X-Adzerk-ApiKey"] = this.configuration.apiKey("X-Adzerk-ApiKey")), 
                                [ 4, this.request({
                                    path: "/udb/{networkId}/consent".replace("{networkId}", encodeURIComponent(String(requestParameters.networkId))),
                                    method: "POST",
                                    headers: headerParameters,
                                    query: queryParameters,
                                    body: models_1.ConsentRequestToJSON(requestParameters.consentRequest)
                                }) ];

                              case 1:
                                return response = _a.sent(), [ 2, new runtime.BlobApiResponse(response) ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.gdprConsent = function(networkId, consentRequest) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this.gdprConsentRaw({
                                    networkId,
                                    consentRequest
                                }) ];

                              case 1:
                                return [ 4, _a.sent().value() ];

                              case 2:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.ipOverrideRaw = function(requestParameters) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var queryParameters, headerParameters, response;
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                if (null === requestParameters.networkId || void 0 === requestParameters.networkId) throw new runtime.RequiredError("networkId", "Required parameter requestParameters.networkId was null or undefined when calling ipOverride.");
                                if (null === requestParameters.userKey || void 0 === requestParameters.userKey) throw new runtime.RequiredError("userKey", "Required parameter requestParameters.userKey was null or undefined when calling ipOverride.");
                                if (null === requestParameters.ip || void 0 === requestParameters.ip) throw new runtime.RequiredError("ip", "Required parameter requestParameters.ip was null or undefined when calling ipOverride.");
                                return queryParameters = {}, void 0 !== requestParameters.userKey && (queryParameters.userKey = requestParameters.userKey), 
                                void 0 !== requestParameters.ip && (queryParameters.ip = requestParameters.ip), 
                                headerParameters = {}, [ 4, this.request({
                                    path: "/udb/{networkId}/ip/i.gif".replace("{networkId}", encodeURIComponent(String(requestParameters.networkId))),
                                    method: "GET",
                                    headers: headerParameters,
                                    query: queryParameters
                                }) ];

                              case 1:
                                return response = _a.sent(), [ 2, new runtime.BlobApiResponse(response) ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.ipOverride = function(networkId, userKey, ip) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this.ipOverrideRaw({
                                    networkId,
                                    userKey,
                                    ip
                                }) ];

                              case 1:
                                return [ 4, _a.sent().value() ];

                              case 2:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.matchUserRaw = function(requestParameters) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var queryParameters, headerParameters, response;
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                if (null === requestParameters.networkId || void 0 === requestParameters.networkId) throw new runtime.RequiredError("networkId", "Required parameter requestParameters.networkId was null or undefined when calling matchUser.");
                                if (null === requestParameters.userKey || void 0 === requestParameters.userKey) throw new runtime.RequiredError("userKey", "Required parameter requestParameters.userKey was null or undefined when calling matchUser.");
                                if (null === requestParameters.partnerId || void 0 === requestParameters.partnerId) throw new runtime.RequiredError("partnerId", "Required parameter requestParameters.partnerId was null or undefined when calling matchUser.");
                                if (null === requestParameters.userId || void 0 === requestParameters.userId) throw new runtime.RequiredError("userId", "Required parameter requestParameters.userId was null or undefined when calling matchUser.");
                                return queryParameters = {}, void 0 !== requestParameters.userKey && (queryParameters.userKey = requestParameters.userKey), 
                                void 0 !== requestParameters.partnerId && (queryParameters.partnerId = requestParameters.partnerId), 
                                void 0 !== requestParameters.userId && (queryParameters.userId = requestParameters.userId), 
                                headerParameters = {}, [ 4, this.request({
                                    path: "/udb/{networkId}/sync/i.gif".replace("{networkId}", encodeURIComponent(String(requestParameters.networkId))),
                                    method: "GET",
                                    headers: headerParameters,
                                    query: queryParameters
                                }) ];

                              case 1:
                                return response = _a.sent(), [ 2, new runtime.BlobApiResponse(response) ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.matchUser = function(networkId, userKey, partnerId, userId) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this.matchUserRaw({
                                    networkId,
                                    userKey,
                                    partnerId,
                                    userId
                                }) ];

                              case 1:
                                return [ 4, _a.sent().value() ];

                              case 2:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.optOutRaw = function(requestParameters) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var queryParameters, headerParameters, response;
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                if (null === requestParameters.networkId || void 0 === requestParameters.networkId) throw new runtime.RequiredError("networkId", "Required parameter requestParameters.networkId was null or undefined when calling optOut.");
                                if (null === requestParameters.userKey || void 0 === requestParameters.userKey) throw new runtime.RequiredError("userKey", "Required parameter requestParameters.userKey was null or undefined when calling optOut.");
                                return queryParameters = {}, void 0 !== requestParameters.userKey && (queryParameters.userKey = requestParameters.userKey), 
                                headerParameters = {}, [ 4, this.request({
                                    path: "/udb/{networkId}/optout/i.gif".replace("{networkId}", encodeURIComponent(String(requestParameters.networkId))),
                                    method: "GET",
                                    headers: headerParameters,
                                    query: queryParameters
                                }) ];

                              case 1:
                                return response = _a.sent(), [ 2, new runtime.BlobApiResponse(response) ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.optOut = function(networkId, userKey) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this.optOutRaw({
                                    networkId,
                                    userKey
                                }) ];

                              case 1:
                                return [ 4, _a.sent().value() ];

                              case 2:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.readRaw = function(requestParameters) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var queryParameters, headerParameters, response;
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                if (null === requestParameters.networkId || void 0 === requestParameters.networkId) throw new runtime.RequiredError("networkId", "Required parameter requestParameters.networkId was null or undefined when calling read.");
                                if (null === requestParameters.userKey || void 0 === requestParameters.userKey) throw new runtime.RequiredError("userKey", "Required parameter requestParameters.userKey was null or undefined when calling read.");
                                return queryParameters = {}, void 0 !== requestParameters.userKey && (queryParameters.userKey = requestParameters.userKey), 
                                headerParameters = {}, [ 4, this.request({
                                    path: "/udb/{networkId}/read".replace("{networkId}", encodeURIComponent(String(requestParameters.networkId))),
                                    method: "GET",
                                    headers: headerParameters,
                                    query: queryParameters
                                }) ];

                              case 1:
                                return response = _a.sent(), [ 2, new runtime.JSONApiResponse(response) ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.read = function(networkId, userKey) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this.readRaw({
                                    networkId,
                                    userKey
                                }) ];

                              case 1:
                                return [ 4, _a.sent().value() ];

                              case 2:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserdbApi;
            }(runtime.BaseAPI);
            exports.UserdbApi = UserdbApi;
        },
        1622: function(__unused_webpack_module, exports, __webpack_require__) {
            "use strict";
            var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
                void 0 === k2 && (k2 = k), Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function() {
                        return m[k];
                    }
                });
            } : function(o, m, k, k2) {
                void 0 === k2 && (k2 = k), o[k2] = m[k];
            }), __exportStar = this && this.__exportStar || function(m, exports) {
                for (var p in m) "default" === p || exports.hasOwnProperty(p) || __createBinding(exports, m, p);
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), __exportStar(__webpack_require__(2160), exports), __exportStar(__webpack_require__(8069), exports);
        },
        2087: function(__unused_webpack_module, exports, __webpack_require__) {
            "use strict";
            var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
                void 0 === k2 && (k2 = k), Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function() {
                        return m[k];
                    }
                });
            } : function(o, m, k, k2) {
                void 0 === k2 && (k2 = k), o[k2] = m[k];
            }), __exportStar = this && this.__exportStar || function(m, exports) {
                for (var p in m) "default" === p || exports.hasOwnProperty(p) || __createBinding(exports, m, p);
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), __exportStar(__webpack_require__(7618), exports), __exportStar(__webpack_require__(1622), exports), 
            __exportStar(__webpack_require__(9803), exports);
        },
        3244: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.ConsentRequestToJSON = exports.ConsentRequestFromJSONTyped = exports.ConsentRequestFromJSON = void 0;
            var runtime_1 = __webpack_require__(7618);
            function ConsentRequestFromJSONTyped(json, ignoreDiscriminator) {
                return null == json ? json : {
                    userKey: runtime_1.exists(json, "userKey") ? json.userKey : void 0,
                    consent: runtime_1.exists(json, "consent") ? json.consent : void 0
                };
            }
            exports.ConsentRequestFromJSON = function(json) {
                return ConsentRequestFromJSONTyped(json, !1);
            }, exports.ConsentRequestFromJSONTyped = ConsentRequestFromJSONTyped, exports.ConsentRequestToJSON = function(value) {
                if (void 0 !== value) return null === value ? null : {
                    userKey: value.userKey,
                    consent: value.consent
                };
            };
        },
        7281: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.ContentToJSON = exports.ContentFromJSONTyped = exports.ContentFromJSON = void 0;
            var runtime_1 = __webpack_require__(7618);
            function ContentFromJSONTyped(json, ignoreDiscriminator) {
                return null == json ? json : {
                    type: runtime_1.exists(json, "type") ? json.type : void 0,
                    template: runtime_1.exists(json, "template") ? json.template : void 0,
                    customTemplate: runtime_1.exists(json, "customTemplate") ? json.customTemplate : void 0,
                    data: runtime_1.exists(json, "data") ? json.data : void 0,
                    body: runtime_1.exists(json, "body") ? json.body : void 0
                };
            }
            exports.ContentFromJSON = function(json) {
                return ContentFromJSONTyped(json, !1);
            }, exports.ContentFromJSONTyped = ContentFromJSONTyped, exports.ContentToJSON = function(value) {
                if (void 0 !== value) return null === value ? null : {
                    type: value.type,
                    template: value.template,
                    customTemplate: value.customTemplate,
                    data: value.data,
                    body: value.body
                };
            };
        },
        9850: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.DecisionToJSON = exports.DecisionFromJSONTyped = exports.DecisionFromJSON = void 0;
            var runtime_1 = __webpack_require__(7618), _1 = __webpack_require__(9803);
            function DecisionFromJSONTyped(json, ignoreDiscriminator) {
                return null == json ? json : {
                    adId: runtime_1.exists(json, "adId") ? json.adId : void 0,
                    creativeId: runtime_1.exists(json, "creativeId") ? json.creativeId : void 0,
                    flightId: runtime_1.exists(json, "flightId") ? json.flightId : void 0,
                    campaignId: runtime_1.exists(json, "campaignId") ? json.campaignId : void 0,
                    priorityId: runtime_1.exists(json, "priorityId") ? json.priorityId : void 0,
                    clickUrl: runtime_1.exists(json, "clickUrl") ? json.clickUrl : void 0,
                    contents: runtime_1.exists(json, "contents") ? json.contents.map(_1.ContentFromJSON) : void 0,
                    impressionUrl: runtime_1.exists(json, "impressionUrl") ? json.impressionUrl : void 0,
                    events: runtime_1.exists(json, "events") ? json.events.map(_1.EventFromJSON) : void 0,
                    matchedPoints: runtime_1.exists(json, "matchedPoints") ? json.matchedPoints.map(_1.MatchedPointFromJSON) : void 0,
                    pricing: runtime_1.exists(json, "pricing") ? _1.PricingDataFromJSON(json.pricing) : void 0
                };
            }
            exports.DecisionFromJSON = function(json) {
                return DecisionFromJSONTyped(json, !1);
            }, exports.DecisionFromJSONTyped = DecisionFromJSONTyped, exports.DecisionToJSON = function(value) {
                if (void 0 !== value) return null === value ? null : {
                    adId: value.adId,
                    creativeId: value.creativeId,
                    flightId: value.flightId,
                    campaignId: value.campaignId,
                    priorityId: value.priorityId,
                    clickUrl: value.clickUrl,
                    contents: void 0 === value.contents ? void 0 : value.contents.map(_1.ContentToJSON),
                    impressionUrl: value.impressionUrl,
                    events: void 0 === value.events ? void 0 : value.events.map(_1.EventToJSON),
                    matchedPoints: void 0 === value.matchedPoints ? void 0 : value.matchedPoints.map(_1.MatchedPointToJSON),
                    pricing: _1.PricingDataToJSON(value.pricing)
                };
            };
        },
        4425: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.DecisionRequestToJSON = exports.DecisionRequestFromJSONTyped = exports.DecisionRequestFromJSON = void 0;
            var runtime_1 = __webpack_require__(7618), _1 = __webpack_require__(9803);
            function DecisionRequestFromJSONTyped(json, ignoreDiscriminator) {
                return null == json ? json : {
                    placements: json.placements.map(_1.PlacementFromJSON),
                    user: runtime_1.exists(json, "user") ? _1.UserFromJSON(json.user) : void 0,
                    keywords: runtime_1.exists(json, "keywords") ? json.keywords : void 0,
                    url: runtime_1.exists(json, "url") ? json.url : void 0,
                    referrer: runtime_1.exists(json, "referrer") ? json.referrer : void 0,
                    ip: runtime_1.exists(json, "ip") ? json.ip : void 0,
                    blockedCreatives: runtime_1.exists(json, "blockedCreatives") ? json.blockedCreatives : void 0,
                    isMobile: runtime_1.exists(json, "isMobile") ? json.isMobile : void 0,
                    includePricingData: runtime_1.exists(json, "includePricingData") ? json.includePricingData : void 0,
                    notrack: runtime_1.exists(json, "notrack") ? json.notrack : void 0,
                    enableBotFiltering: runtime_1.exists(json, "enableBotFiltering") ? json.enableBotFiltering : void 0,
                    enableUserDBIP: runtime_1.exists(json, "enableUserDBIP") ? json.enableUserDBIP : void 0,
                    consent: runtime_1.exists(json, "consent") ? json.consent : void 0,
                    deviceID: runtime_1.exists(json, "deviceID") ? json.deviceID : void 0,
                    parallel: runtime_1.exists(json, "parallel") ? json.parallel : void 0,
                    intendedLatitude: runtime_1.exists(json, "intendedLatitude") ? json.intendedLatitude : void 0,
                    intendedLongitude: runtime_1.exists(json, "intendedLongitude") ? json.intendedLongitude : void 0,
                    radius: runtime_1.exists(json, "radius") ? json.radius : void 0,
                    includeMatchedPoints: runtime_1.exists(json, "includeMatchedPoints") ? json.includeMatchedPoints : void 0
                };
            }
            exports.DecisionRequestFromJSON = function(json) {
                return DecisionRequestFromJSONTyped(json, !1);
            }, exports.DecisionRequestFromJSONTyped = DecisionRequestFromJSONTyped, exports.DecisionRequestToJSON = function(value) {
                if (void 0 !== value) return null === value ? null : {
                    placements: value.placements.map(_1.PlacementToJSON),
                    user: _1.UserToJSON(value.user),
                    keywords: value.keywords,
                    url: value.url,
                    referrer: value.referrer,
                    ip: value.ip,
                    blockedCreatives: value.blockedCreatives,
                    isMobile: value.isMobile,
                    includePricingData: value.includePricingData,
                    notrack: value.notrack,
                    enableBotFiltering: value.enableBotFiltering,
                    enableUserDBIP: value.enableUserDBIP,
                    consent: value.consent,
                    deviceID: value.deviceID,
                    parallel: value.parallel,
                    intendedLatitude: value.intendedLatitude,
                    intendedLongitude: value.intendedLongitude,
                    radius: value.radius,
                    includeMatchedPoints: value.includeMatchedPoints
                };
            };
        },
        8633: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.DecisionResponseToJSON = exports.DecisionResponseFromJSONTyped = exports.DecisionResponseFromJSON = void 0;
            var runtime_1 = __webpack_require__(7618), _1 = __webpack_require__(9803);
            function DecisionResponseFromJSONTyped(json, ignoreDiscriminator) {
                return null == json ? json : {
                    user: runtime_1.exists(json, "user") ? _1.UserFromJSON(json.user) : void 0,
                    decisions: runtime_1.exists(json, "decisions") ? json.decisions : void 0,
                    explain: runtime_1.exists(json, "explain") ? json.explain : void 0
                };
            }
            exports.DecisionResponseFromJSON = function(json) {
                return DecisionResponseFromJSONTyped(json, !1);
            }, exports.DecisionResponseFromJSONTyped = DecisionResponseFromJSONTyped, exports.DecisionResponseToJSON = function(value) {
                if (void 0 !== value) return null === value ? null : {
                    user: _1.UserToJSON(value.user),
                    decisions: value.decisions,
                    explain: value.explain
                };
            };
        },
        1922: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.EventToJSON = exports.EventFromJSONTyped = exports.EventFromJSON = void 0;
            var runtime_1 = __webpack_require__(7618);
            function EventFromJSONTyped(json, ignoreDiscriminator) {
                return null == json ? json : {
                    id: runtime_1.exists(json, "id") ? json.id : void 0,
                    url: runtime_1.exists(json, "url") ? json.url : void 0
                };
            }
            exports.EventFromJSON = function(json) {
                return EventFromJSONTyped(json, !1);
            }, exports.EventFromJSONTyped = EventFromJSONTyped, exports.EventToJSON = function(value) {
                if (void 0 !== value) return null === value ? null : {
                    id: value.id,
                    url: value.url
                };
            };
        },
        1710: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.MatchedPointToJSON = exports.MatchedPointFromJSONTyped = exports.MatchedPointFromJSON = void 0;
            var runtime_1 = __webpack_require__(7618);
            function MatchedPointFromJSONTyped(json, ignoreDiscriminator) {
                return null == json ? json : {
                    lat: runtime_1.exists(json, "lat") ? json.lat : void 0,
                    lon: runtime_1.exists(json, "lon") ? json.lon : void 0
                };
            }
            exports.MatchedPointFromJSON = function(json) {
                return MatchedPointFromJSONTyped(json, !1);
            }, exports.MatchedPointFromJSONTyped = MatchedPointFromJSONTyped, exports.MatchedPointToJSON = function(value) {
                if (void 0 !== value) return null === value ? null : {
                    lat: value.lat,
                    lon: value.lon
                };
            };
        },
        7300: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.PlacementToJSON = exports.PlacementFromJSONTyped = exports.PlacementFromJSON = void 0;
            var runtime_1 = __webpack_require__(7618);
            function PlacementFromJSONTyped(json, ignoreDiscriminator) {
                return null == json ? json : {
                    divName: runtime_1.exists(json, "divName") ? json.divName : void 0,
                    networkId: runtime_1.exists(json, "networkId") ? json.networkId : void 0,
                    siteId: runtime_1.exists(json, "siteId") ? json.siteId : void 0,
                    adTypes: runtime_1.exists(json, "adTypes") ? json.adTypes : void 0,
                    zoneIds: runtime_1.exists(json, "zoneIds") ? json.zoneIds : void 0,
                    campaignId: runtime_1.exists(json, "campaignId") ? json.campaignId : void 0,
                    flightId: runtime_1.exists(json, "flightId") ? json.flightId : void 0,
                    adId: runtime_1.exists(json, "adId") ? json.adId : void 0,
                    clickUrl: runtime_1.exists(json, "clickUrl") ? json.clickUrl : void 0,
                    properties: runtime_1.exists(json, "properties") ? json.properties : void 0,
                    eventIds: runtime_1.exists(json, "eventIds") ? json.eventIds : void 0,
                    overrides: runtime_1.exists(json, "overrides") ? json.overrides : void 0,
                    contentKeys: runtime_1.exists(json, "contentKeys") ? json.contentKeys : void 0,
                    count: runtime_1.exists(json, "count") ? json.count : void 0,
                    proportionality: runtime_1.exists(json, "proportionality") ? json.proportionality : void 0,
                    ecpmPartition: runtime_1.exists(json, "ecpmPartition") ? json.ecpmPartition : void 0,
                    ecpmPartitions: runtime_1.exists(json, "ecpmPartitions") ? json.ecpmPartitions : void 0,
                    eventMultiplier: runtime_1.exists(json, "eventMultiplier") ? json.eventMultiplier : void 0,
                    skipSelection: runtime_1.exists(json, "skipSelection") ? json.skipSelection : void 0,
                    adQuery: runtime_1.exists(json, "adQuery") ? json.adQuery : void 0,
                    floorPrice: runtime_1.exists(json, "floorPrice") ? json.floorPrice : void 0,
                    floorCpc: runtime_1.exists(json, "floorCpc") ? json.floorCpc : void 0
                };
            }
            exports.PlacementFromJSON = function(json) {
                return PlacementFromJSONTyped(json, !1);
            }, exports.PlacementFromJSONTyped = PlacementFromJSONTyped, exports.PlacementToJSON = function(value) {
                if (void 0 !== value) return null === value ? null : {
                    divName: value.divName,
                    networkId: value.networkId,
                    siteId: value.siteId,
                    adTypes: value.adTypes,
                    zoneIds: value.zoneIds,
                    campaignId: value.campaignId,
                    flightId: value.flightId,
                    adId: value.adId,
                    clickUrl: value.clickUrl,
                    properties: value.properties,
                    eventIds: value.eventIds,
                    overrides: value.overrides,
                    contentKeys: value.contentKeys,
                    count: value.count,
                    proportionality: value.proportionality,
                    ecpmPartition: value.ecpmPartition,
                    ecpmPartitions: value.ecpmPartitions,
                    eventMultiplier: value.eventMultiplier,
                    skipSelection: value.skipSelection,
                    adQuery: value.adQuery,
                    floorPrice: value.floorPrice,
                    floorCpc: value.floorCpc
                };
            };
        },
        9906: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.PricingDataToJSON = exports.PricingDataFromJSONTyped = exports.PricingDataFromJSON = void 0;
            var runtime_1 = __webpack_require__(7618);
            function PricingDataFromJSONTyped(json, ignoreDiscriminator) {
                return null == json ? json : {
                    price: runtime_1.exists(json, "price") ? json.price : void 0,
                    clearPrice: runtime_1.exists(json, "clearPrice") ? json.clearPrice : void 0,
                    revenue: runtime_1.exists(json, "revenue") ? json.revenue : void 0,
                    rateType: runtime_1.exists(json, "rateType") ? json.rateType : void 0,
                    eCPM: runtime_1.exists(json, "eCPM") ? json.eCPM : void 0
                };
            }
            exports.PricingDataFromJSON = function(json) {
                return PricingDataFromJSONTyped(json, !1);
            }, exports.PricingDataFromJSONTyped = PricingDataFromJSONTyped, exports.PricingDataToJSON = function(value) {
                if (void 0 !== value) return null === value ? null : {
                    price: value.price,
                    clearPrice: value.clearPrice,
                    revenue: value.revenue,
                    rateType: value.rateType,
                    eCPM: value.eCPM
                };
            };
        },
        4167: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.UserToJSON = exports.UserFromJSONTyped = exports.UserFromJSON = void 0;
            var runtime_1 = __webpack_require__(7618);
            function UserFromJSONTyped(json, ignoreDiscriminator) {
                return null == json ? json : {
                    key: runtime_1.exists(json, "key") ? json.key : void 0
                };
            }
            exports.UserFromJSON = function(json) {
                return UserFromJSONTyped(json, !1);
            }, exports.UserFromJSONTyped = UserFromJSONTyped, exports.UserToJSON = function(value) {
                if (void 0 !== value) return null === value ? null : {
                    key: value.key
                };
            };
        },
        9803: function(__unused_webpack_module, exports, __webpack_require__) {
            "use strict";
            var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
                void 0 === k2 && (k2 = k), Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function() {
                        return m[k];
                    }
                });
            } : function(o, m, k, k2) {
                void 0 === k2 && (k2 = k), o[k2] = m[k];
            }), __exportStar = this && this.__exportStar || function(m, exports) {
                for (var p in m) "default" === p || exports.hasOwnProperty(p) || __createBinding(exports, m, p);
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), __exportStar(__webpack_require__(3244), exports), __exportStar(__webpack_require__(7281), exports), 
            __exportStar(__webpack_require__(9850), exports), __exportStar(__webpack_require__(4425), exports), 
            __exportStar(__webpack_require__(8633), exports), __exportStar(__webpack_require__(1922), exports), 
            __exportStar(__webpack_require__(1710), exports), __exportStar(__webpack_require__(7300), exports), 
            __exportStar(__webpack_require__(9906), exports), __exportStar(__webpack_require__(4167), exports);
        },
        7618: function(__unused_webpack_module, exports) {
            "use strict";
            var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
                return (extendStatics = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(d, b) {
                    d.__proto__ = b;
                } || function(d, b) {
                    for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
                })(d, b);
            }, function(d, b) {
                function __() {
                    this.constructor = d;
                }
                extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
                new __);
            }), __assign = this && this.__assign || function() {
                return (__assign = Object.assign || function(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
                    return t;
                }).apply(this, arguments);
            }, __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator.throw(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        var value;
                        result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P((function(resolve) {
                            resolve(value);
                        }))).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            }, __generator = this && this.__generator || function(thisArg, body) {
                var f, y, t, g, _ = {
                    label: 0,
                    sent: function() {
                        if (1 & t[0]) throw t[1];
                        return t[1];
                    },
                    trys: [],
                    ops: []
                };
                return g = {
                    next: verb(0),
                    throw: verb(1),
                    return: verb(2)
                }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                    return this;
                }), g;
                function verb(n) {
                    return function(v) {
                        return function(op) {
                            if (f) throw new TypeError("Generator is already executing.");
                            for (;_; ) try {
                                if (f = 1, y && (t = 2 & op[0] ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 
                                0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                                switch (y = 0, t && (op = [ 2 & op[0], t.value ]), op[0]) {
                                  case 0:
                                  case 1:
                                    t = op;
                                    break;

                                  case 4:
                                    return _.label++, {
                                        value: op[1],
                                        done: !1
                                    };

                                  case 5:
                                    _.label++, y = op[1], op = [ 0 ];
                                    continue;

                                  case 7:
                                    op = _.ops.pop(), _.trys.pop();
                                    continue;

                                  default:
                                    if (!(t = _.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== op[0] && 2 !== op[0])) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (6 === op[0] && _.label < t[1]) {
                                        _.label = t[1], t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2], _.ops.push(op);
                                        break;
                                    }
                                    t[2] && _.ops.pop(), _.trys.pop();
                                    continue;
                                }
                                op = body.call(thisArg, _);
                            } catch (e) {
                                op = [ 6, e ], y = 0;
                            } finally {
                                f = t = 0;
                            }
                            if (5 & op[0]) throw op[1];
                            return {
                                value: op[0] ? op[1] : void 0,
                                done: !0
                            };
                        }([ n, v ]);
                    };
                }
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.TextApiResponse = exports.BlobApiResponse = exports.VoidApiResponse = exports.JSONApiResponse = exports.canConsumeForm = exports.mapValues = exports.querystring = exports.exists = exports.Configuration = exports.COLLECTION_FORMATS = exports.RequiredError = exports.BaseAPI = exports.BASE_PATH = void 0, 
            exports.BASE_PATH = "https://e-23.adzerk.net".replace(/\/+$/, "");
            var BaseAPI = function() {
                function BaseAPI(configuration) {
                    var _this = this;
                    void 0 === configuration && (configuration = new Configuration), this.configuration = configuration, 
                    this.fetchApi = function(url, init) {
                        return __awaiter(_this, void 0, void 0, (function() {
                            var fetchParams, _i, _a, response, _b, _c, middleware;
                            return __generator(this, (function(_d) {
                                switch (_d.label) {
                                  case 0:
                                    fetchParams = {
                                        url,
                                        init
                                    }, _i = 0, _a = this.middleware, _d.label = 1;

                                  case 1:
                                    return _i < _a.length ? (middleware = _a[_i]).pre ? [ 4, middleware.pre(__assign({
                                        fetch: this.fetchApi
                                    }, fetchParams)) ] : [ 3, 3 ] : [ 3, 4 ];

                                  case 2:
                                    fetchParams = _d.sent() || fetchParams, _d.label = 3;

                                  case 3:
                                    return _i++, [ 3, 1 ];

                                  case 4:
                                    return [ 4, this.configuration.fetchApi(fetchParams.url, fetchParams.init) ];

                                  case 5:
                                    response = _d.sent(), _b = 0, _c = this.middleware, _d.label = 6;

                                  case 6:
                                    return _b < _c.length ? (middleware = _c[_b]).post ? [ 4, middleware.post({
                                        fetch: this.fetchApi,
                                        url,
                                        init,
                                        response: response.clone()
                                    }) ] : [ 3, 8 ] : [ 3, 9 ];

                                  case 7:
                                    response = _d.sent() || response, _d.label = 8;

                                  case 8:
                                    return _b++, [ 3, 6 ];

                                  case 9:
                                    return [ 2, response ];
                                }
                            }));
                        }));
                    }, this.middleware = configuration.middleware;
                }
                return BaseAPI.prototype.withMiddleware = function() {
                    for (var _a, middlewares = [], _i = 0; _i < arguments.length; _i++) middlewares[_i] = arguments[_i];
                    var next = this.clone();
                    return next.middleware = (_a = next.middleware).concat.apply(_a, middlewares), next;
                }, BaseAPI.prototype.withPreMiddleware = function() {
                    for (var preMiddlewares = [], _i = 0; _i < arguments.length; _i++) preMiddlewares[_i] = arguments[_i];
                    var middlewares = preMiddlewares.map((function(pre) {
                        return {
                            pre
                        };
                    }));
                    return this.withMiddleware.apply(this, middlewares);
                }, BaseAPI.prototype.withPostMiddleware = function() {
                    for (var postMiddlewares = [], _i = 0; _i < arguments.length; _i++) postMiddlewares[_i] = arguments[_i];
                    var middlewares = postMiddlewares.map((function(post) {
                        return {
                            post
                        };
                    }));
                    return this.withMiddleware.apply(this, middlewares);
                }, BaseAPI.prototype.request = function(context) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var _a, url, init, response;
                        return __generator(this, (function(_b) {
                            switch (_b.label) {
                              case 0:
                                return _a = this.createFetchParams(context), url = _a.url, init = _a.init, [ 4, this.fetchApi(url, init) ];

                              case 1:
                                if ((response = _b.sent()).status >= 200 && response.status < 300) return [ 2, response ];
                                throw response;
                            }
                        }));
                    }));
                }, BaseAPI.prototype.createFetchParams = function(context) {
                    var url = this.configuration.basePath + context.path;
                    void 0 !== context.query && 0 !== Object.keys(context.query).length && (url += "?" + this.configuration.queryParamsStringify(context.query));
                    var value, body = "undefined" != typeof FormData && context.body instanceof FormData || context.body instanceof URLSearchParams || (value = context.body, 
                    "undefined" != typeof Blob && value instanceof Blob) ? context.body : JSON.stringify(context.body), headers = Object.assign({}, this.configuration.headers, context.headers);
                    return {
                        url,
                        init: {
                            method: context.method,
                            headers,
                            body,
                            credentials: this.configuration.credentials
                        }
                    };
                }, BaseAPI.prototype.clone = function() {
                    var next = new (0, this.constructor)(this.configuration);
                    return next.middleware = this.middleware.slice(), next;
                }, BaseAPI;
            }();
            exports.BaseAPI = BaseAPI;
            var RequiredError = function(_super) {
                function RequiredError(field, msg) {
                    var _this = _super.call(this, msg) || this;
                    return _this.field = field, _this.name = "RequiredError", _this;
                }
                return __extends(RequiredError, _super), RequiredError;
            }(Error);
            exports.RequiredError = RequiredError, exports.COLLECTION_FORMATS = {
                csv: ",",
                ssv: " ",
                tsv: "\t",
                pipes: "|"
            };
            var Configuration = function() {
                function Configuration(configuration) {
                    void 0 === configuration && (configuration = {}), this.configuration = configuration;
                }
                return Object.defineProperty(Configuration.prototype, "basePath", {
                    get: function() {
                        return null != this.configuration.basePath ? this.configuration.basePath : exports.BASE_PATH;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Configuration.prototype, "fetchApi", {
                    get: function() {
                        return this.configuration.fetchApi || window.fetch.bind(window);
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Configuration.prototype, "middleware", {
                    get: function() {
                        return this.configuration.middleware || [];
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Configuration.prototype, "queryParamsStringify", {
                    get: function() {
                        return this.configuration.queryParamsStringify || querystring;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Configuration.prototype, "username", {
                    get: function() {
                        return this.configuration.username;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Configuration.prototype, "password", {
                    get: function() {
                        return this.configuration.password;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Configuration.prototype, "apiKey", {
                    get: function() {
                        var apiKey = this.configuration.apiKey;
                        if (apiKey) return "function" == typeof apiKey ? apiKey : function() {
                            return apiKey;
                        };
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Configuration.prototype, "accessToken", {
                    get: function() {
                        var accessToken = this.configuration.accessToken;
                        if (accessToken) return "function" == typeof accessToken ? accessToken : function() {
                            return accessToken;
                        };
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Configuration.prototype, "headers", {
                    get: function() {
                        return this.configuration.headers;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Configuration.prototype, "credentials", {
                    get: function() {
                        return this.configuration.credentials;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Configuration;
            }();
            function querystring(params, prefix) {
                return void 0 === prefix && (prefix = ""), Object.keys(params).map((function(key) {
                    var fullKey = prefix + (prefix.length ? "[" + key + "]" : key), value = params[key];
                    if (value instanceof Array) {
                        var multiValue = value.map((function(singleValue) {
                            return encodeURIComponent(String(singleValue));
                        })).join("&" + encodeURIComponent(fullKey) + "=");
                        return encodeURIComponent(fullKey) + "=" + multiValue;
                    }
                    return value instanceof Date ? encodeURIComponent(fullKey) + "=" + encodeURIComponent(value.toISOString()) : value instanceof Object ? querystring(value, fullKey) : encodeURIComponent(fullKey) + "=" + encodeURIComponent(String(value));
                })).filter((function(part) {
                    return part.length > 0;
                })).join("&");
            }
            exports.Configuration = Configuration, exports.exists = function(json, key) {
                var value = json[key];
                return null != value;
            }, exports.querystring = querystring, exports.mapValues = function(data, fn) {
                return Object.keys(data).reduce((function(acc, key) {
                    var _a;
                    return __assign(__assign({}, acc), ((_a = {})[key] = fn(data[key]), _a));
                }), {});
            }, exports.canConsumeForm = function(consumes) {
                for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
                    if ("multipart/form-data" === consumes_1[_i].contentType) return !0;
                }
                return !1;
            };
            var JSONApiResponse = function() {
                function JSONApiResponse(raw, transformer) {
                    void 0 === transformer && (transformer = function(jsonValue) {
                        return jsonValue;
                    }), this.raw = raw, this.transformer = transformer;
                }
                return JSONApiResponse.prototype.value = function() {
                    return __awaiter(this, void 0, void 0, (function() {
                        var _a;
                        return __generator(this, (function(_b) {
                            switch (_b.label) {
                              case 0:
                                return _a = this.transformer, [ 4, this.raw.json() ];

                              case 1:
                                return [ 2, _a.apply(this, [ _b.sent() ]) ];
                            }
                        }));
                    }));
                }, JSONApiResponse;
            }();
            exports.JSONApiResponse = JSONApiResponse;
            var VoidApiResponse = function() {
                function VoidApiResponse(raw) {
                    this.raw = raw;
                }
                return VoidApiResponse.prototype.value = function() {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            return [ 2, void 0 ];
                        }));
                    }));
                }, VoidApiResponse;
            }();
            exports.VoidApiResponse = VoidApiResponse;
            var BlobApiResponse = function() {
                function BlobApiResponse(raw) {
                    this.raw = raw;
                }
                return BlobApiResponse.prototype.value = function() {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this.raw.blob() ];

                              case 1:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, BlobApiResponse;
            }();
            exports.BlobApiResponse = BlobApiResponse;
            var TextApiResponse = function() {
                function TextApiResponse(raw) {
                    this.raw = raw;
                }
                return TextApiResponse.prototype.value = function() {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this.raw.text() ];

                              case 1:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, TextApiResponse;
            }();
            exports.TextApiResponse = TextApiResponse;
        },
        8200: function(__unused_webpack_module, exports, __webpack_require__) {
            "use strict";
            var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
                void 0 === k2 && (k2 = k), Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function() {
                        return m[k];
                    }
                });
            } : function(o, m, k, k2) {
                void 0 === k2 && (k2 = k), o[k2] = m[k];
            }), __exportStar = this && this.__exportStar || function(m, exports) {
                for (var p in m) "default" === p || exports.hasOwnProperty(p) || __createBinding(exports, m, p);
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.Client = void 0;
            var client_1 = __webpack_require__(7269);
            Object.defineProperty(exports, "Client", {
                enumerable: !0,
                get: function() {
                    return client_1.Client;
                }
            }), __exportStar(__webpack_require__(791), exports), __exportStar(__webpack_require__(2440), exports);
        },
        2440: (__unused_webpack_module, exports) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
        },
        9532: (__unused_webpack_module, exports) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.removeUndefinedAndBlocklisted = void 0, exports.removeUndefinedAndBlocklisted = function(obj, blocklist) {
                return void 0 === blocklist && (blocklist = []), Array.isArray(obj) ? obj.map((function(o) {
                    return exports.removeUndefinedAndBlocklisted(o);
                })) : "object" != typeof obj ? obj : Object.keys(obj).reduce((function(acc, key) {
                    return blocklist.includes(key) || null == obj[key] ? acc : "object" == typeof obj[key] ? (acc[key] = exports.removeUndefinedAndBlocklisted(obj[key], blocklist), 
                    acc) : (acc[key] = obj[key], acc);
                }), {});
            };
        },
        8738: module => {
            function webpackEmptyContext(req) {
                var e = new Error("Cannot find module '" + req + "'");
                throw e.code = "MODULE_NOT_FOUND", e;
            }
            webpackEmptyContext.keys = () => [], webpackEmptyContext.resolve = webpackEmptyContext, 
            webpackEmptyContext.id = 8738, module.exports = webpackEmptyContext;
        },
        4443: (module, exports, __webpack_require__) => {
            exports.formatArgs = function(args) {
                if (args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff), 
                !this.useColors) return;
                const c = "color: " + this.color;
                args.splice(1, 0, c, "color: inherit");
                let index = 0, lastC = 0;
                args[0].replace(/%[a-zA-Z%]/g, (match => {
                    "%%" !== match && (index++, "%c" === match && (lastC = index));
                })), args.splice(lastC, 0, c);
            }, exports.save = function(namespaces) {
                try {
                    namespaces ? exports.storage.setItem("debug", namespaces) : exports.storage.removeItem("debug");
                } catch (error) {}
            }, exports.load = function() {
                let r;
                try {
                    r = exports.storage.getItem("debug");
                } catch (error) {}
                !r && "undefined" != typeof process && "env" in process && (r = process.env.DEBUG);
                return r;
            }, exports.useColors = function() {
                if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
                if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
                return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
            }, exports.storage = function() {
                try {
                    return localStorage;
                } catch (error) {}
            }(), exports.destroy = (() => {
                let warned = !1;
                return () => {
                    warned || (warned = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
                };
            })(), exports.colors = [ "#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33" ], 
            exports.log = console.debug || console.log || (() => {}), module.exports = __webpack_require__(1195)(exports);
            const {formatters} = module.exports;
            formatters.j = function(v) {
                try {
                    return JSON.stringify(v);
                } catch (error) {
                    return "[UnexpectedJSONParseError]: " + error.message;
                }
            };
        },
        1195: (module, __unused_webpack_exports, __webpack_require__) => {
            module.exports = function(env) {
                function createDebug(namespace) {
                    let prevTime, namespacesCache, enabledCache, enableOverride = null;
                    function debug(...args) {
                        if (!debug.enabled) return;
                        const self = debug, curr = Number(new Date), ms = curr - (prevTime || curr);
                        self.diff = ms, self.prev = prevTime, self.curr = curr, prevTime = curr, args[0] = createDebug.coerce(args[0]), 
                        "string" != typeof args[0] && args.unshift("%O");
                        let index = 0;
                        args[0] = args[0].replace(/%([a-zA-Z%])/g, ((match, format) => {
                            if ("%%" === match) return "%";
                            index++;
                            const formatter = createDebug.formatters[format];
                            if ("function" == typeof formatter) {
                                const val = args[index];
                                match = formatter.call(self, val), args.splice(index, 1), index--;
                            }
                            return match;
                        })), createDebug.formatArgs.call(self, args);
                        (self.log || createDebug.log).apply(self, args);
                    }
                    return debug.namespace = namespace, debug.useColors = createDebug.useColors(), debug.color = createDebug.selectColor(namespace), 
                    debug.extend = extend, debug.destroy = createDebug.destroy, Object.defineProperty(debug, "enabled", {
                        enumerable: !0,
                        configurable: !1,
                        get: () => null !== enableOverride ? enableOverride : (namespacesCache !== createDebug.namespaces && (namespacesCache = createDebug.namespaces, 
                        enabledCache = createDebug.enabled(namespace)), enabledCache),
                        set: v => {
                            enableOverride = v;
                        }
                    }), "function" == typeof createDebug.init && createDebug.init(debug), debug;
                }
                function extend(namespace, delimiter) {
                    const newDebug = createDebug(this.namespace + (void 0 === delimiter ? ":" : delimiter) + namespace);
                    return newDebug.log = this.log, newDebug;
                }
                function toNamespace(regexp) {
                    return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
                }
                return createDebug.debug = createDebug, createDebug.default = createDebug, createDebug.coerce = function(val) {
                    if (val instanceof Error) return val.stack || val.message;
                    return val;
                }, createDebug.disable = function() {
                    const namespaces = [ ...createDebug.names.map(toNamespace), ...createDebug.skips.map(toNamespace).map((namespace => "-" + namespace)) ].join(",");
                    return createDebug.enable(""), namespaces;
                }, createDebug.enable = function(namespaces) {
                    let i;
                    createDebug.save(namespaces), createDebug.namespaces = namespaces, createDebug.names = [], 
                    createDebug.skips = [];
                    const split = ("string" == typeof namespaces ? namespaces : "").split(/[\s,]+/), len = split.length;
                    for (i = 0; i < len; i++) split[i] && ("-" === (namespaces = split[i].replace(/\*/g, ".*?"))[0] ? createDebug.skips.push(new RegExp("^" + namespaces.substr(1) + "$")) : createDebug.names.push(new RegExp("^" + namespaces + "$")));
                }, createDebug.enabled = function(name) {
                    if ("*" === name[name.length - 1]) return !0;
                    let i, len;
                    for (i = 0, len = createDebug.skips.length; i < len; i++) if (createDebug.skips[i].test(name)) return !1;
                    for (i = 0, len = createDebug.names.length; i < len; i++) if (createDebug.names[i].test(name)) return !0;
                    return !1;
                }, createDebug.humanize = __webpack_require__(7820), createDebug.destroy = function() {
                    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
                }, Object.keys(env).forEach((key => {
                    createDebug[key] = env[key];
                })), createDebug.names = [], createDebug.skips = [], createDebug.formatters = {}, 
                createDebug.selectColor = function(namespace) {
                    let hash = 0;
                    for (let i = 0; i < namespace.length; i++) hash = (hash << 5) - hash + namespace.charCodeAt(i), 
                    hash |= 0;
                    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
                }, createDebug.enable(createDebug.load()), createDebug;
            };
        },
        3736: module => {
            module.exports = "object" == typeof self ? self.FormData : window.FormData;
        },
        7820: module => {
            var s = 1e3, m = 60 * s, h = 60 * m, d = 24 * h, w = 7 * d, y = 365.25 * d;
            function plural(ms, msAbs, n, name) {
                var isPlural = msAbs >= 1.5 * n;
                return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
            }
            module.exports = function(val, options) {
                options = options || {};
                var type = typeof val;
                if ("string" === type && val.length > 0) return function(str) {
                    if ((str = String(str)).length > 100) return;
                    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
                    if (!match) return;
                    var n = parseFloat(match[1]);
                    switch ((match[2] || "ms").toLowerCase()) {
                      case "years":
                      case "year":
                      case "yrs":
                      case "yr":
                      case "y":
                        return n * y;

                      case "weeks":
                      case "week":
                      case "w":
                        return n * w;

                      case "days":
                      case "day":
                      case "d":
                        return n * d;

                      case "hours":
                      case "hour":
                      case "hrs":
                      case "hr":
                      case "h":
                        return n * h;

                      case "minutes":
                      case "minute":
                      case "mins":
                      case "min":
                      case "m":
                        return n * m;

                      case "seconds":
                      case "second":
                      case "secs":
                      case "sec":
                      case "s":
                        return n * s;

                      case "milliseconds":
                      case "millisecond":
                      case "msecs":
                      case "msec":
                      case "ms":
                        return n;

                      default:
                        return;
                    }
                }(val);
                if ("number" === type && isFinite(val)) return options.long ? function(ms) {
                    var msAbs = Math.abs(ms);
                    if (msAbs >= d) return plural(ms, msAbs, d, "day");
                    if (msAbs >= h) return plural(ms, msAbs, h, "hour");
                    if (msAbs >= m) return plural(ms, msAbs, m, "minute");
                    if (msAbs >= s) return plural(ms, msAbs, s, "second");
                    return ms + " ms";
                }(val) : function(ms) {
                    var msAbs = Math.abs(ms);
                    if (msAbs >= d) return Math.round(ms / d) + "d";
                    if (msAbs >= h) return Math.round(ms / h) + "h";
                    if (msAbs >= m) return Math.round(ms / m) + "m";
                    if (msAbs >= s) return Math.round(ms / s) + "s";
                    return ms + "ms";
                }(val);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
            };
        },
        5640: () => {
            !function(window, $, undefined) {
                "use strict";
                if (window.MutationObserver && "undefined" != typeof HTMLElement) {
                    var matches, arriveUniqueId = 0, utils = (matches = HTMLElement.prototype.matches || HTMLElement.prototype.webkitMatchesSelector || HTMLElement.prototype.mozMatchesSelector || HTMLElement.prototype.msMatchesSelector, 
                    {
                        matchesSelector: function(elem, selector) {
                            return elem instanceof HTMLElement && matches.call(elem, selector);
                        },
                        addMethod: function(object, name, fn) {
                            var old = object[name];
                            object[name] = function() {
                                return fn.length == arguments.length ? fn.apply(this, arguments) : "function" == typeof old ? old.apply(this, arguments) : void 0;
                            };
                        },
                        callCallbacks: function(callbacksToBeCalled, registrationData) {
                            registrationData && registrationData.options.onceOnly && 1 == registrationData.firedElems.length && (callbacksToBeCalled = [ callbacksToBeCalled[0] ]);
                            for (var cb, i = 0; cb = callbacksToBeCalled[i]; i++) cb && cb.callback && cb.callback.call(cb.elem, cb.elem);
                            registrationData && registrationData.options.onceOnly && 1 == registrationData.firedElems.length && registrationData.me.unbindEventWithSelectorAndCallback.call(registrationData.target, registrationData.selector, registrationData.callback);
                        },
                        checkChildNodesRecursively: function(nodes, registrationData, matchFunc, callbacksToBeCalled) {
                            for (var node, i = 0; node = nodes[i]; i++) matchFunc(node, registrationData, callbacksToBeCalled) && callbacksToBeCalled.push({
                                callback: registrationData.callback,
                                elem: node
                            }), node.childNodes.length > 0 && utils.checkChildNodesRecursively(node.childNodes, registrationData, matchFunc, callbacksToBeCalled);
                        },
                        mergeArrays: function(firstArr, secondArr) {
                            var attrName, options = {};
                            for (attrName in firstArr) firstArr.hasOwnProperty(attrName) && (options[attrName] = firstArr[attrName]);
                            for (attrName in secondArr) secondArr.hasOwnProperty(attrName) && (options[attrName] = secondArr[attrName]);
                            return options;
                        },
                        toElementsArray: function(elements) {
                            return void 0 === elements || "number" == typeof elements.length && elements !== window || (elements = [ elements ]), 
                            elements;
                        }
                    }), EventsBucket = function() {
                        var EventsBucket = function() {
                            this._eventsBucket = [], this._beforeAdding = null, this._beforeRemoving = null;
                        };
                        return EventsBucket.prototype.addEvent = function(target, selector, options, callback) {
                            var newEvent = {
                                target,
                                selector,
                                options,
                                callback,
                                firedElems: []
                            };
                            return this._beforeAdding && this._beforeAdding(newEvent), this._eventsBucket.push(newEvent), 
                            newEvent;
                        }, EventsBucket.prototype.removeEvent = function(compareFunction) {
                            for (var registeredEvent, i = this._eventsBucket.length - 1; registeredEvent = this._eventsBucket[i]; i--) if (compareFunction(registeredEvent)) {
                                this._beforeRemoving && this._beforeRemoving(registeredEvent);
                                var removedEvents = this._eventsBucket.splice(i, 1);
                                removedEvents && removedEvents.length && (removedEvents[0].callback = null);
                            }
                        }, EventsBucket.prototype.beforeAdding = function(beforeAdding) {
                            this._beforeAdding = beforeAdding;
                        }, EventsBucket.prototype.beforeRemoving = function(beforeRemoving) {
                            this._beforeRemoving = beforeRemoving;
                        }, EventsBucket;
                    }(), MutationEvents = function(getObserverConfig, onMutation) {
                        var eventsBucket = new EventsBucket, me = this, defaultOptions = {
                            fireOnAttributesModification: !1
                        };
                        return eventsBucket.beforeAdding((function(registrationData) {
                            var observer, target = registrationData.target;
                            target !== window.document && target !== window || (target = document.getElementsByTagName("html")[0]), 
                            observer = new MutationObserver((function(e) {
                                onMutation.call(this, e, registrationData);
                            }));
                            var config = getObserverConfig(registrationData.options);
                            observer.observe(target, config), registrationData.observer = observer, registrationData.me = me;
                        })), eventsBucket.beforeRemoving((function(eventData) {
                            eventData.observer.disconnect();
                        })), this.bindEvent = function(selector, options, callback) {
                            options = utils.mergeArrays(defaultOptions, options);
                            for (var elements = utils.toElementsArray(this), i = 0; i < elements.length; i++) eventsBucket.addEvent(elements[i], selector, options, callback);
                        }, this.unbindEvent = function() {
                            var elements = utils.toElementsArray(this);
                            eventsBucket.removeEvent((function(eventObj) {
                                for (var i = 0; i < elements.length; i++) if (this === undefined || eventObj.target === elements[i]) return !0;
                                return !1;
                            }));
                        }, this.unbindEventWithSelectorOrCallback = function(selector) {
                            var compareFunction, elements = utils.toElementsArray(this), callback = selector;
                            compareFunction = "function" == typeof selector ? function(eventObj) {
                                for (var i = 0; i < elements.length; i++) if ((this === undefined || eventObj.target === elements[i]) && eventObj.callback === callback) return !0;
                                return !1;
                            } : function(eventObj) {
                                for (var i = 0; i < elements.length; i++) if ((this === undefined || eventObj.target === elements[i]) && eventObj.selector === selector) return !0;
                                return !1;
                            }, eventsBucket.removeEvent(compareFunction);
                        }, this.unbindEventWithSelectorAndCallback = function(selector, callback) {
                            var elements = utils.toElementsArray(this);
                            eventsBucket.removeEvent((function(eventObj) {
                                for (var i = 0; i < elements.length; i++) if ((this === undefined || eventObj.target === elements[i]) && eventObj.selector === selector && eventObj.callback === callback) return !0;
                                return !1;
                            }));
                        }, this;
                    }, arriveEvents = new function() {
                        var arriveDefaultOptions = {
                            fireOnAttributesModification: !1,
                            onceOnly: !1,
                            existing: !1
                        };
                        function nodeMatchFunc(node, registrationData, callbacksToBeCalled) {
                            return !(!utils.matchesSelector(node, registrationData.selector) || (node._id === undefined && (node._id = arriveUniqueId++), 
                            -1 != registrationData.firedElems.indexOf(node._id))) && (registrationData.firedElems.push(node._id), 
                            !0);
                        }
                        var mutationBindEvent = (arriveEvents = new MutationEvents((function(options) {
                            var config = {
                                attributes: !1,
                                childList: !0,
                                subtree: !0
                            };
                            return options.fireOnAttributesModification && (config.attributes = !0), config;
                        }), (function(mutations, registrationData) {
                            mutations.forEach((function(mutation) {
                                var newNodes = mutation.addedNodes, targetNode = mutation.target, callbacksToBeCalled = [];
                                null !== newNodes && newNodes.length > 0 ? utils.checkChildNodesRecursively(newNodes, registrationData, nodeMatchFunc, callbacksToBeCalled) : "attributes" === mutation.type && nodeMatchFunc(targetNode, registrationData, callbacksToBeCalled) && callbacksToBeCalled.push({
                                    callback: registrationData.callback,
                                    elem: targetNode
                                }), utils.callCallbacks(callbacksToBeCalled, registrationData);
                            }));
                        }))).bindEvent;
                        return arriveEvents.bindEvent = function(selector, options, callback) {
                            void 0 === callback ? (callback = options, options = arriveDefaultOptions) : options = utils.mergeArrays(arriveDefaultOptions, options);
                            var elements = utils.toElementsArray(this);
                            if (options.existing) {
                                for (var existing = [], i = 0; i < elements.length; i++) for (var nodes = elements[i].querySelectorAll(selector), j = 0; j < nodes.length; j++) existing.push({
                                    callback,
                                    elem: nodes[j]
                                });
                                if (options.onceOnly && existing.length) return callback.call(existing[0].elem, existing[0].elem);
                                setTimeout(utils.callCallbacks, 1, existing);
                            }
                            mutationBindEvent.call(this, selector, options, callback);
                        }, arriveEvents;
                    }, leaveEvents = new function() {
                        var leaveDefaultOptions = {};
                        function nodeMatchFunc(node, registrationData) {
                            return utils.matchesSelector(node, registrationData.selector);
                        }
                        var mutationBindEvent = (leaveEvents = new MutationEvents((function() {
                            return {
                                childList: !0,
                                subtree: !0
                            };
                        }), (function(mutations, registrationData) {
                            mutations.forEach((function(mutation) {
                                var removedNodes = mutation.removedNodes, callbacksToBeCalled = [];
                                null !== removedNodes && removedNodes.length > 0 && utils.checkChildNodesRecursively(removedNodes, registrationData, nodeMatchFunc, callbacksToBeCalled), 
                                utils.callCallbacks(callbacksToBeCalled, registrationData);
                            }));
                        }))).bindEvent;
                        return leaveEvents.bindEvent = function(selector, options, callback) {
                            void 0 === callback ? (callback = options, options = leaveDefaultOptions) : options = utils.mergeArrays(leaveDefaultOptions, options), 
                            mutationBindEvent.call(this, selector, options, callback);
                        }, leaveEvents;
                    };
                    $ && exposeApi($.fn), exposeApi(HTMLElement.prototype), exposeApi(NodeList.prototype), 
                    exposeApi(HTMLCollection.prototype), exposeApi(HTMLDocument.prototype), exposeApi(Window.prototype);
                    var Arrive = {};
                    return exposeUnbindApi(arriveEvents, Arrive, "unbindAllArrive"), exposeUnbindApi(leaveEvents, Arrive, "unbindAllLeave"), 
                    Arrive;
                }
                function exposeUnbindApi(eventObj, exposeTo, funcName) {
                    utils.addMethod(exposeTo, funcName, eventObj.unbindEvent), utils.addMethod(exposeTo, funcName, eventObj.unbindEventWithSelectorOrCallback), 
                    utils.addMethod(exposeTo, funcName, eventObj.unbindEventWithSelectorAndCallback);
                }
                function exposeApi(exposeTo) {
                    exposeTo.arrive = arriveEvents.bindEvent, exposeUnbindApi(arriveEvents, exposeTo, "unbindArrive"), 
                    exposeTo.leave = leaveEvents.bindEvent, exposeUnbindApi(leaveEvents, exposeTo, "unbindLeave");
                }
            }(window, "undefined" == typeof jQuery ? null : jQuery, void 0);
        },
        8726: module => {
            module.exports = '<div id="tpIconContainer">\r\n    <div class="" id="tp-buttons-container">\r\n        <button id="tp-icon-container">\r\n            <img id="tp-icon-white" src=\'{EXTENSION_LOGO_WHITE}\' />\r\n            <span class="tooltiptext extension-txt" style="width: 120px;">Start a party</span>\r\n        </button>\r\n        <div class="tp-seperator"></div>\r\n        <div class="hidden" id="tp-party-active">\r\n            <button class="tp-control-button" id="tp-link-button">\r\n                <img class="tp-button-image tp-center-image" src=\'{LINK_IMAGE}\' />\r\n                <img class="tp-hover-image tp-center-image" src=\'{LINK_ACTIVE_IMAGE}\' />\r\n                <span class="tooltiptext extension-txt" style="width: 120px;">Copy link</span>\r\n            </button>\r\n            <button class="tp-control-button" id="tp-chat-button">\r\n                <img id="tp-chat-hidden" class="tp-button-image tp-center-image" src=\'{CHAT_HIDDEN_IMAGE}\' />\r\n                <img id="tp-chat-gray" class="hidden tp-button-image tp-center-image" src=\'{CHAT_GRAY_IMAGE}\' />\r\n                <img class="tp-hover-image tp-center-image" src=\'{CHAT_ACTIVE_IMAGE}\' />\r\n                <div class="hidden" id="tp-message-indicator"></div>\r\n                <span class="tooltiptext extension-txt" style="width: 120px;">Show chat</span>\r\n            </button>\r\n            <button class="tp-control-button" id="tp-disconnect-button">\r\n                <img class="tp-button-image tp-center-image" src=\'{DISCONNECT_IMAGE}\' />\r\n                <img class="tp-hover-image tp-center-image" src=\'{DISCONNECT_IMAGE}\' />\r\n                <span class="tooltiptext extension-txt" style="width: 120px;">Leave Party</span>\r\n            </button>\r\n        </div>\r\n        <div id="tp-party-inactive">\r\n            <button class="tp-control-button" id="tp-control-lock-button">\r\n                <img id="tp-unlocked-image" src=\'{UNLOCKED_IMAGE}\' />\r\n                <img class="hidden" id="tp-locked-image" src=\'{LOCKED_IMAGE}\' />\r\n                <span class="tooltiptext extension-txt" style="width: 160px;">Only I have control</span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <button class="hidden tp-control-button" id="tp-chat-close-button">\r\n        <img id="tp-start-image" src=\'{ARROW_RIGHT}\' />\r\n        <span class="tooltiptext extension-txt" style="width: 100px;">Hide chat</span>\r\n    </button>\r\n    <div id="tp-error-box" class="hidden">\r\n        <p class="extension-txt-indicator" id="tp-controls-error-text">\r\n            Failed to connect to background script. Please Try again later\r\n        </p>\r\n    </div>\r\n</div>';
        },
        301: module => {
            module.exports = '<div id="notification-link" class="notification-links" tpInjected>\r\n\r\n</div>\r\n\r\n<div id="chat-wrapper" tpInjected>\r\n  <div id="chat-container">\r\n    <div id="chat-header-container">\r\n      <ul id="chat-menu-container">\r\n        <li id="function-title">\r\n          <div id="title">\r\n            <p class="extension-title">Teleparty</p>\r\n          </div>\r\n        </li>\r\n        <li id="function-user">\r\n          <div id="link-icon">\r\n            <img class="chat-link" src="{LINK_SVG}">\r\n            <input id="share-url" type="text" readonly="true" autocomplete="off" autofocus style="display:none;" />\r\n          </div>\r\n          <a id="user-icon">\r\n            <img src="{USER_ICON}" />\r\n          </a>\r\n        </li>\r\n      </ul>\r\n\r\n      <div id="chat-link-container" style=\'display:none;\'>\r\n        <div id="chat-link">\r\n          <div id="chat-link-url">\r\n            <p>The url link goes here.</p>\r\n          </div>\r\n          <div id="chat-link-icon">\r\n            <img src="{LINK_SVG}">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div id="chat-icon-container" style="display:none">\r\n        <div id="icon-title-container">\r\n          <div id="icon-title">\r\n            <p class="extension-description">Click to switch icon</p>\r\n          </div>\r\n        </div>\r\n        <div id="icon-holder-container">\r\n          <div id="icon-holder-template">\r\n            <div class="icon-holder-wrap">\r\n              <p class="extension-txt-indicator"></p>\r\n              <ul id="icon-holder"></ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div id="setting-edit" class="chat-settings-container setting-container" style="display:none">\r\n\r\n      <div class="setting-usericon">\r\n        <div class="section-b-inner section-inner">\r\n          <a class="user-icon">\r\n            <img src="{USER_ICON}" />\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="section-c setting-nickname">\r\n        <div class="section-c-inner section-inner">\r\n          <div class="nickname-section row-wrap">\r\n            <div class="nickname-wrap row-one">\r\n              <p class="extension-description">Nickname</p>\r\n            </div>\r\n            <div class="nickname-input row-two">\r\n              <input id="nickname-edit" class="extension-txt" autocomplete="off" type="text"\r\n                placeholder="{USER_NICKNAME}" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div id="settings-save" class="chat-settings-container setting-container" style="display:none">\r\n      <div class="section-d">\r\n        <div class="section-d-inner section-inner">\r\n\r\n          <div class="btns">\r\n            <button id="saveChanges" class=\'extension-btn\'>Save Changes</button>\r\n            <button id="cancelNickname" class=\'extension-btn cancel-btn\'>Cancel</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div id="chat-ad-holder" style="display: none;">\r\n      <p id="chat-ad-sponsored-text">Sponsored</p>\r\n      <div id="chat-ad-container" class="chat-ad-container">\r\n        <a id="chat-ad-image-holder" rel="nofollow" target="_blank">\r\n          <img id="chat-ad-image" />\r\n        </a>\r\n      </div>\r\n      <div id="chat-ad-button" class="chat-ad-btn-container">\r\n        <a id="chat-ad-btn" class="extension-btn" rel="nofollow" target="_blank">\r\n          <p id="chat-ad-cta-text" class="extension-txt-indicator">Click to watch</p>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div id="chat-history-container">\r\n      <div id="chat-history">\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div id="presence-indicator" class="extension-txt-indicator">\r\n      <p class="extension-txt-indicator">People are currently typing...</p>\r\n    </div>\r\n\r\n    <div id="chat-input-container" class="extension-border-top">\r\n      <input id="chat-input" class="extension-txt" type="text" placeholder="Type a message..."\r\n        autocomplete="off"></input>\r\n    </div>\r\n  </div>\r\n</div>';
        },
        204: (module, __unused_webpack_exports, __webpack_require__) => {
            module.exports = self.fetch || (self.fetch = __webpack_require__(5869).default || __webpack_require__(5869));
        },
        5869: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            function __WEBPACK_DEFAULT_EXPORT__(e, n) {
                return n = n || {}, new Promise((function(t, r) {
                    var s = new XMLHttpRequest, o = [], u = [], i = {}, a = function() {
                        return {
                            ok: 2 == (s.status / 100 | 0),
                            statusText: s.statusText,
                            status: s.status,
                            url: s.responseURL,
                            text: function() {
                                return Promise.resolve(s.responseText);
                            },
                            json: function() {
                                return Promise.resolve(s.responseText).then(JSON.parse);
                            },
                            blob: function() {
                                return Promise.resolve(new Blob([ s.response ]));
                            },
                            clone: a,
                            headers: {
                                keys: function() {
                                    return o;
                                },
                                entries: function() {
                                    return u;
                                },
                                get: function(e) {
                                    return i[e.toLowerCase()];
                                },
                                has: function(e) {
                                    return e.toLowerCase() in i;
                                }
                            }
                        };
                    };
                    for (var l in s.open(n.method || "get", e, !0), s.onload = function() {
                        s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function(e, n, t) {
                            o.push(n = n.toLowerCase()), u.push([ n, t ]), i[n] = i[n] ? i[n] + "," + t : t;
                        })), t(a());
                    }, s.onerror = r, s.withCredentials = "include" == n.credentials, n.headers) s.setRequestHeader(l, n.headers[l]);
                    s.send(n.body || null);
                }));
            }
            __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, {
                default: () => __WEBPACK_DEFAULT_EXPORT__
            });
        },
        39: module => {
            "use strict";
            module.exports = '/* Breakpoints */\r\n/* Mixins */\r\n/* Remove */\r\n@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap");\r\n.r-m {\r\n  margin: 0 !important;\r\n}\r\n\r\n.r-m-t {\r\n  margin-top: 0 !important;\r\n}\r\n\r\n.r-p-t {\r\n  padding-top: 0 !important;\r\n}\r\n\r\n.r-m-l {\r\n  margin-left: 0 !important;\r\n}\r\n\r\n.r-p-l {\r\n  padding-left: 0 !important;\r\n}\r\n\r\n.r-m-r {\r\n  margin-right: 0 !important;\r\n}\r\n\r\n.r-p-r {\r\n  padding-right: 0 !important;\r\n}\r\n\r\n.r-m-b {\r\n  margin-bottom: 0 !important;\r\n}\r\n\r\n.r-p-b {\r\n  padding-bottom: 0 !important;\r\n}\r\n\r\n.r-b-r {\r\n  border-radius: 0px !important;\r\n}\r\n\r\n.r-boxshadow {\r\n  box-shadow: none !important;\r\n}\r\n\r\n:root {\r\n  /* Patreon Color */\r\n  --patreon: #F96854;\r\n  /* Custom Colors */\r\n  --base-red: #EF3E3A;\r\n  --active-red: #ea0f0a;\r\n  --base-blue: #4da9ff;\r\n  --base-orange: #ff8d4c;\r\n  --base-green: #24D154;\r\n  /* White Colors */\r\n  --base-white: #FAFAFA;\r\n  --white-5: #F0F0F0;\r\n  --white-10: #DCDCDC;\r\n  --white-15: #C8C8C8;\r\n  --white-20: #B4B4B4;\r\n  --white-25: #A0A0A0;\r\n  --white-30: #8C8C8C;\r\n  --white-35: #787878;\r\n  /* Black Colors */\r\n  --base-black: #191919;\r\n  --black-5: #5A5A5A;\r\n  --black-10: #464646;\r\n  --black-15: #323232;\r\n  --black-20: #282828;\r\n  --black-25: #1e1e1e;\r\n  --black-30: #0a0a0a;\r\n}\r\n\r\n.base-white-bg {\r\n  background-color: var(--base-white);\r\n}\r\n\r\n.white-5-bg {\r\n  background-color: var(--white-5);\r\n}\r\n\r\n.white-10-bg {\r\n  background-color: var(--white-10);\r\n}\r\n\r\n.white-15-bg {\r\n  background-color: var(--white-15);\r\n}\r\n\r\n.white-20-bg {\r\n  background-color: var(--white-20);\r\n}\r\n\r\n.white-25-bg {\r\n  background-color: var(--white-25);\r\n}\r\n\r\n.white-30-bg {\r\n  background-color: var(--white-30);\r\n}\r\n\r\n.white-35-bg {\r\n  background-color: var(--white-35);\r\n}\r\n\r\n.base-black-bg {\r\n  background-color: var(--base-black);\r\n}\r\n\r\n.black-5-bg {\r\n  background-color: var(--black-5);\r\n}\r\n\r\n.black-10-bg {\r\n  background-color: var(--black-10);\r\n}\r\n\r\n.black-15-bg {\r\n  background-color: var(--black-15);\r\n}\r\n\r\n.black-20-bg {\r\n  background-color: var(--black-20);\r\n}\r\n\r\n.black-25-bg {\r\n  background-color: var(--black-25);\r\n}\r\n\r\n.black-30-bg {\r\n  background-color: var(--black-30);\r\n}\r\n\r\n.black-35-bg {\r\n  background-color: var(--black-35);\r\n}\r\n\r\n.base-red-bg {\r\n  background-color: var(--base-red);\r\n}\r\n\r\n.active-red-bg {\r\n  background-color: var(--active-red);\r\n}\r\n\r\n.base-orange-bg {\r\n  background-color: var(--base-orange);\r\n}\r\n\r\n.base-blue-bg {\r\n  background-color: var(--base-blue);\r\n}\r\n\r\n.base-green-bg {\r\n  background-color: var(--base-green);\r\n}\r\n\r\n.patreon-bg {\r\n  background-color: var(--patreon);\r\n}\r\n\r\n.txt-blue {\r\n  color: var(--base-blue) !important;\r\n}\r\n\r\n.txt-red {\r\n  color: var(--base-red) !important;\r\n}\r\n\r\n.txt-white {\r\n  color: var(--base-white) !important;\r\n}\r\n\r\ndiv, p, span, a, h1, h2, h3, h4, h5, h6, li, ul, button {\r\n  word-wrap: break-word;\r\n}\r\n\r\n:root {\r\n  --regular: 400;\r\n  --medium: 500;\r\n  --semi-bold: 600;\r\n  --bold: 700;\r\n  --extra-bold: 800;\r\n  --black: 900;\r\n}\r\n\r\n.extension-title {\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--medium);\r\n  color: var(--base-red);\r\n  font-size: 16px;\r\n  letter-spacing: 0.2px;\r\n}\r\n.extension-txt {\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--regular);\r\n  color: white;\r\n  font-size: 14px;\r\n}\r\n.extension-txt-indicator {\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--regular);\r\n  color: var(--white-35);\r\n  font-size: 11px;\r\n}\r\n.extension-description {\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--medium);\r\n  color: var(--white-10);\r\n  font-size: 13px;\r\n}\r\n.extension-border-bot {\r\n  border-bottom: 1px solid var(--black-10);\r\n}\r\n.extension-border-top {\r\n  border-top: 1px solid var(--black-10);\r\n}\r\n.extension-btn {\r\n  width: 100%;\r\n  margin-top: 10px;\r\n  background: var(--base-red);\r\n  color: var(--base-white);\r\n  padding: 10px 0px;\r\n  border-radius: 2px;\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--medium);\r\n  transition: background 0.3s ease;\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: center;\r\n  font-size: 14px;\r\n}\r\n.extension-btn:hover {\r\n  background: var(--active-red);\r\n}\r\n.extension-btn a {\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--medium);\r\n  color: var(--base-white);\r\n}\r\n\r\n#alert, #alert-dialog-wrapper {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 9999999;\r\n  align-items: center;\r\n  box-shadow: 8px 6px 20px 1px rgba(0, 0, 0, 0.2);\r\n}\r\n#alert-dialog-container {\r\n  background: var(--base-black);\r\n  max-width: 400px;\r\n  margin: 0 auto;\r\n  border-radius: 4px;\r\n}\r\n#alert-title-wrapper {\r\n  padding: 20px 20px 0px 20px;\r\n}\r\n#alert-title-wrapper .alert-title {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n#alert-title-wrapper .alert-title .alert-x {\r\n  color: var(--base-white);\r\n}\r\n#alert-title-wrapper .extension-border-bot {\r\n  padding-top: 10px;\r\n}\r\n#alert-description {\r\n  padding: 10px 20px 20px 20px;\r\n}\r\n\r\n#alert-x-btn {\r\n  background: none !important;\r\n  border: none !important;\r\n}\r\n\r\n#alert-content-txt {\r\n  margin: 0 !important;\r\n}\r\n\r\n#alert-title-txt {\r\n  margin: 0 !important;\r\n}\r\n\r\n#alert-return-btn {\r\n  border: none !important;\r\n}\r\n\r\n/*# sourceMappingURL=alert.css.map */';
        },
        3630: module => {
            "use strict";
            module.exports = '.hidden {\r\n    display: none !important;\r\n}\r\n\r\n.slider {\r\n    padding: 0% !important;\r\n}\r\n\r\n.tp-seperator {\r\n  border: 1px solid #323232;\r\n  border-radius: 1px;\r\n  width: 30px;\r\n  height: 0px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n#tp-controls-error-text {\r\n  color: var(--white-5);\r\n  text-align: center;\r\n  padding: 5px;\r\n}\r\n\r\n#tp-error-box {\r\n  width: 170px;\r\n  height: 60px;\r\n  z-index: 9999;\r\n  position: fixed;\r\n  right: 80px;\r\n  top: 50px;\r\n  /* box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.25); */\r\n  -webkit-backdrop-filter: blur(6px);\r\n  border-radius: 4px;\r\n  background-color: rgba(25, 25, 25, 0.7);\r\n  transition: transform 1s;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#tp-buttons-container {\r\n  width: 40px;\r\n  z-index: 9999;\r\n  position: fixed;\r\n  right: 20px;\r\n  top: 50px;\r\n  /* box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.25); */\r\n  -webkit-backdrop-filter: blur(4px);\r\n  border-radius: 4px;\r\n  background-color: rgba(25, 25, 25, 0.5);\r\n  transition: transform 1s;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  \r\n}\r\n\r\n#tp-icon-container {\r\n  margin-top: 5px;\r\n  margin-bottom: 10px;\r\n  width: 30px;\r\n  height: 30px;\r\n  display: flex;\r\n  background: linear-gradient(135deg, #E34248 0%, #BC4D7A 56.67%, #9E55A0 100%);\r\n  border-radius: 4.8px;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.tp-center-image {\r\n  position: absolute;\r\n}\r\n\r\n#tp-icon-container:hover .tooltiptext {\r\n  visibility: visible;\r\n}\r\n\r\n.tp-control-button:hover .tooltiptext {\r\n  visibility: visible;\r\n}\r\n\r\n.tp-control-button:hover .tp-button-image {\r\n  visibility: hidden;\r\n}\r\n\r\n.tp-hover-image {\r\n  visibility: hidden;\r\n}\r\n\r\n.tp-control-button:hover .tp-hover-image {\r\n  visibility: visible;\r\n}\r\n\r\n.tp-control-button:hover {\r\n  background-color: var(--black-20);\r\n}\r\n\r\n#tp-message-indicator {\r\n  background: linear-gradient(\r\n135deg, #E34248 0%, #BC4D7A 56.67%, #9E55A0 100%);\r\n  width: 7px;\r\n  height: 7px;\r\n  border-radius: 10px;\r\n  position: absolute;\r\n  top: 2px;\r\n  right: 4px;\r\n}\r\n\r\n#tp-chat-close-button {\r\n  position: fixed;\r\n  width: 30px;\r\n  height: 30px;\r\n  right: calc(var(--chatWidth) + 5px);\r\n  top: 113px;\r\n  z-index: 9999;\r\n  background: rgba(40, 40, 40, 0.5);\r\n  -webkit-backdrop-filter: blur(4px);\r\n  border-radius: 26.4px;\r\n}\r\n\r\n#tp-chat-close-button img {\r\n  width: 22px;\r\n  height: 22px;\r\n}\r\n\r\n.tooltiptext {\r\n  visibility: hidden;\r\n  background: rgba(40, 40, 40, 0.5);\r\n  -webkit-backdrop-filter: blur(4px);\r\n  border-radius: 4px;\r\n  color: white !important;\r\n  font-size: 13px !important;\r\n  text-align: center;\r\n  vertical-align: center;\r\n  height: 30px;\r\n  padding: 5px 0;\r\n  border-radius: 4px;\r\n  position: absolute;\r\n  right: calc(105% + 5px);\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: inline-flex;\r\n}\r\n\r\n.tp-control-button {\r\n  margin-top: 5px;\r\n  margin-bottom: 7px;\r\n  width: 30px;\r\n  height: 30px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n  border-radius: 15px;\r\n}\r\n\r\n.tp-control-button img {\r\n  width: 60%;\r\n  height: 70%;\r\n}\r\n\r\n#tp-icon-white {\r\n  width: 12px;\r\n  height: 12px;\r\n}\r\n\r\n.tp-button-browse {\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    z-index: 9999;\r\n    background-size: 100%;\r\n    border-color: black;\r\n    position: fixed;\r\n    right: -25px;\r\n    opacity: 0.2;\r\n    top: 50%;\r\n    background-color: black;\r\n    color: black;\r\n    background-image: url(chrome-extension://bpgopfmgmnojmhnhmgpfmpnookgbmkko/img/icon.png);\r\n    background-size: 30px 30px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    transition: transform 1s;\r\n}\r\n.createPartyContainer {\r\n    z-index: 9999;\r\n    right: 0px;\r\n    top: var(--containerTop);\r\n    position: fixed;\r\n    display: block;\r\n    background: var(--base-black);\r\n    width: 332px;\r\n    height: var(--containerHeight);\r\n    padding: 20px;\r\n    border-radius: 4px;\r\n}\r\n\r\n.buttonContainerVisible {\r\n    animation: goToContainer 0.6s;\r\n    animation-fill-mode: forwards;\r\n}\r\n\r\n.tpButtonHover{\r\n    animation: buttonHover 0.5s;\r\n    animation-fill-mode: forwards;\r\n}\r\n\r\n.tpButtonOut{\r\n    animation: hoverOut 0.5s;\r\n    animation-fill-mode: forwards;\r\n}\r\n\r\n.buttonContainerOut {\r\n    animation: buttonContainerOut 0.5s;\r\n    animation-fill-mode: forwards;\r\n}\r\n\r\n.containerIn {\r\n    animation: containerIn 0.5s;\r\n    animation-fill-mode: forwards;\r\n}\r\n\r\n.containerOut {\r\n    animation: containerOut 0.5s;\r\n    animation-fill-mode: forwards;\r\n}\r\n\r\n@keyframes goToContainer {\r\n    0% {\r\n        border-radius: 50%;\r\n        background-color: black;\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        top: calc(var(--containerTop) + 75px);\r\n        right: var(--containerWidth);\r\n        border-top-left-radius: 50%;\r\n        border-top-right-radius: 0px;\r\n        border-bottom-right-radius: 0px;\r\n        border-bottom-left-radius: 50%;\r\n        background-color: var(--base-black);\r\n    }\r\n}\r\n\r\n@keyframes containerIn {\r\n    0% {\r\n        right: -400px;\r\n    }\r\n    100% {\r\n        right: 0px;\r\n    }\r\n}\r\n\r\n\r\n@keyframes containerOut {\r\n    0% {\r\n        right: 0px;\r\n\r\n    }\r\n    100% {\r\n        right: -400px;\r\n    }\r\n}\r\n\r\n\r\n@keyframes buttonContainerOut {\r\n    0% {\r\n        opacity: 1;\r\n        top: calc(var(--containerTop) + 75px);\r\n        right: var(--containerWidth);\r\n        border-top-left-radius: 50%;\r\n        border-top-right-radius: 0px;\r\n        border-bottom-right-radius: 0px;\r\n        border-bottom-left-radius: 50%;\r\n        background-color: var(--base-black);\r\n    }\r\n    100% {\r\n        opacity: 0.2;\r\n        right: var(--outRight);\r\n        border-radius: 50%;\r\n        background-color: black;\r\n    }\r\n}\r\n\r\n@keyframes buttonHover {\r\n    0% {\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        right: 0px;\r\n    }\r\n}\r\n\r\n@keyframes hoverOut {\r\n    0% {\r\n        opacity: 1;\r\n        right: 0px;\r\n    }\r\n    100% {\r\n        opacity: 0.2;\r\n        right: var(--outRight);\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@import "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap";\r\nbody,\r\nhtml {\r\n  font-size: 16px;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\na,\r\np,\r\nul,\r\nli,\r\nol,\r\nbutton,\r\nbody,\r\nhtml {\r\n  padding: 0em;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\na,\r\np,\r\nul,\r\nli,\r\nol,\r\nbutton,\r\nbody,\r\nhtml {\r\n  margin: 0em;\r\n}\r\nul,\r\nli,\r\nol,\r\na {\r\n  text-decoration: none;\r\n  list-style: none;\r\n}\r\ninput,\r\nbutton {\r\n  border: none;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nspan,\r\nbody,\r\nhtml {\r\n  user-select: text !important;\r\n  cursor: auto !important;\r\n}\r\nimg {\r\n  user-select: none !important;\r\n}\r\ndiv,\r\nsection,\r\nbutton,\r\ninput,\r\nform,\r\narticle {\r\n  outline: none;\r\n}\r\na {\r\n  display: inline;\r\n  /* width: fit-content; */\r\n}\r\nbutton,\r\ninput,\r\nform,\r\nfieldset {\r\n  background: none;\r\n}\r\nbutton:hover {\r\n  cursor: pointer;\r\n}\r\n.r-m {\r\n  margin: 0 !important;\r\n}\r\n.r-m-t {\r\n  margin-top: 0 !important;\r\n}\r\n.r-p-t {\r\n  padding-top: 0 !important;\r\n}\r\n.r-m-l {\r\n  margin-left: 0 !important;\r\n}\r\n.r-p-l {\r\n  padding-left: 0 !important;\r\n}\r\n.r-m-r {\r\n  margin-right: 0 !important;\r\n}\r\n.r-p-r {\r\n  padding-right: 0 !important;\r\n}\r\n.r-m-b {\r\n  margin-bottom: 0 !important;\r\n}\r\n.r-p-b {\r\n  padding-bottom: 0 !important;\r\n}\r\n.r-b-r {\r\n  border-radius: 0px !important;\r\n}\r\n.r-boxshadow {\r\n  box-shadow: none !important;\r\n}\r\n:root {\r\n    --outRight: -25px;\r\n    --containerTop: calc(50% - var(--containerHalf));\r\n    --containerHeight: 205px;\r\n    --containerHalf: 102.5px;\r\n  --chatWidth: 288px;\r\n  --patreon: #f96854;\r\n  --base-red: #ef3e3a;\r\n  --active-red: #ea0f0a;\r\n  --base-blue: #4da9ff;\r\n  --base-orange: #ff8d4c;\r\n  --base-green: #24d154;\r\n  --base-white: #fafafa;\r\n  --white-5: #f0f0f0;\r\n  --white-10: #dcdcdc;\r\n  --white-15: #c8c8c8;\r\n  --white-20: #b4b4b4;\r\n  --white-25: #a0a0a0;\r\n  --white-30: #8c8c8c;\r\n  --white-35: #787878;\r\n  --base-black: #191919;\r\n  --black-5: #5a5a5a;\r\n  --black-10: #464646;\r\n  --black-15: #323232;\r\n  --black-20: #282828;\r\n  --black-25: #1e1e1e;\r\n  --black-30: #0a0a0a;\r\n}\r\n.base-white-bg {\r\n  background-color: var(--base-white);\r\n}\r\n.white-5-bg {\r\n  background-color: var(--white-5);\r\n}\r\n.white-10-bg {\r\n  background-color: var(--white-10);\r\n}\r\n.white-15-bg {\r\n  background-color: var(--white-15);\r\n}\r\n.white-20-bg {\r\n  background-color: var(--white-20);\r\n}\r\n.white-25-bg {\r\n  background-color: var(--white-25);\r\n}\r\n.white-30-bg {\r\n  background-color: var(--white-30);\r\n}\r\n.white-35-bg {\r\n  background-color: var(--white-35);\r\n}\r\n.base-black-bg {\r\n  background-color: var(--base-black);\r\n}\r\n.black-5-bg {\r\n  background-color: var(--black-5);\r\n}\r\n.black-10-bg {\r\n  background-color: var(--black-10);\r\n}\r\n.black-15-bg {\r\n  background-color: var(--black-15);\r\n}\r\n.black-20-bg {\r\n  background-color: var(--black-20);\r\n}\r\n.black-25-bg {\r\n  background-color: var(--black-25);\r\n}\r\n.black-30-bg {\r\n  background-color: var(--black-30);\r\n}\r\n.black-35-bg {\r\n  background-color: var(--black-35);\r\n}\r\n.base-red-bg {\r\n  background-color: var(--base-red);\r\n}\r\n.active-red-bg {\r\n  background-color: var(--active-red);\r\n}\r\n.base-orange-bg {\r\n  background-color: var(--base-orange);\r\n}\r\n.base-blue-bg {\r\n  background-color: var(--base-blue);\r\n}\r\n.base-green-bg {\r\n  background-color: var(--base-green);\r\n}\r\n.patreon-bg {\r\n  background-color: var(--patreon);\r\n}\r\n.txt-blue {\r\n  color: var(--base-blue) !important;\r\n}\r\n.txt-red {\r\n  color: var(--base-red) !important;\r\n}\r\n.txt-white {\r\n  color: var(--base-white) !important;\r\n}\r\ndiv,\r\np,\r\nspan,\r\na,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\nli,\r\nul,\r\nbutton {\r\n  word-wrap: normal;\r\n}\r\n:root {\r\n  --regular: 400;\r\n  --medium: 500;\r\n  --semi-bold: 600;\r\n  --bold: 700;\r\n  --extra-bold: 800;\r\n  --black: 900;\r\n}\r\n.extension-title {\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--medium);\r\n  color: var(--base-red);\r\n  font-size: 16px;\r\n  letter-spacing: 0.2px;\r\n}\r\n.extension-txt {\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--regular);\r\n  color: var(--white-15);\r\n  font-size: 14px;\r\n}\r\n.extension-txt-indicator {\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--regular);\r\n  color: var(--white-35);\r\n  font-size: 11px;\r\n}\r\n.extension-description {\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--medium);\r\n  color: var(--white-10);\r\n  font-size: 13px;\r\n}\r\n.extension-border-bot {\r\n  border-bottom: 1px solid var(--black-10);\r\n}\r\n.extension-border-top {\r\n  border-top: 1px solid var(--black-10);\r\n}\r\n.extension-btn {\r\n  width: 100%;\r\n  margin-top: 10px;\r\n  background: var(--base-red);\r\n  color: var(--base-white);\r\n  padding: 10px 0px;\r\n  border-radius: 2px;\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--medium);\r\n  transition: background 0.3s ease;\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: center;\r\n  font-size: 14px;\r\n}\r\n.extension-btn:hover {\r\n  background: var(--active-red);\r\n}\r\n.extension-btn a {\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--medium);\r\n  color: var(--base-white);\r\n}\r\nhtml {\r\n  margin: 0;\r\n  padding: 0;\r\n  background: var(--base-black);\r\n  border-radius: 4px;\r\n}\r\n.no-error {\r\n  display: block;\r\n  background: var(--base-black);\r\n  width: var(--containerWidth);\r\n  padding: 20px;\r\n  border-radius: 4px;\r\n}\r\n.no-error input[type="text"] {\r\n  display: block;\r\n  outline-style: none;\r\n  color: var(--base-white);\r\n  border: 1px solid var(--base-white);\r\n  border-radius: 4px;\r\n  width: 100%;\r\n  height: 40px;\r\n  padding: 8px 12px;\r\n  margin-top: 10px;\r\n}\r\n.no-error input[type="text"]:focus {\r\n  border: 1px solid var(--white-35);\r\n}\r\n.no-error label {\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  align-items: center;\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--regular);\r\n  color: var(--base-white);\r\n  font-size: 12px;\r\n  margin-top: 12px;\r\n}\r\n.no-error label input {\r\n  margin-right: 10px;\r\n}\r\n.no-error h2 {\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--semi-bold);\r\n  color: var(--base-white);\r\n  font-size: 18px;\r\n  letter-spacing: 0.2px;\r\n}\r\n.no-error button {\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--medium);\r\n  cursor: pointer;\r\n  background-color: var(--base-red);\r\n  color: var(--base-white);\r\n  transition: 0.3s ease;\r\n  font-size: 13px;\r\n  letter-spacing: 0.2px;\r\n  margin-top: 16px;\r\n  transform: translateY(0px);\r\n}\r\n.no-error button:hover {\r\n  transform: translateY(-2px);\r\n}\r\n.no-error i {\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--bold);\r\n}\r\n.no-error .copy-val {\r\n  display: block;\r\n  width: fit-content;\r\n  margin-top: 10px;\r\n  padding: 10px 20px;\r\n}\r\n.no-error .copy-val a {\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--medium);\r\n  border-radius: 2px;\r\n  transition: 0.3s ease;\r\n  font-size: 12px;\r\n}\r\n.some-error {\r\n  display: block;\r\n  background: var(--base-black);\r\n  width: 332px;\r\n  padding: 20px;\r\n  border-radius: 4px;\r\n}\r\n.hidden {\r\n  display: none !important;\r\n}\r\n.extension-btn {\r\n  margin-bottom: 10px;\r\n}\r\n#create-session {\r\n  background: #dc4046;\r\n  background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\r\n}\r\n#create-session:hover {\r\n  background: #dc4046;\r\n  background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\r\n}\r\n#accept-permissions {\r\n  background: #dc4046;\r\n  background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\r\n}\r\n#accept-permissions :hover {\r\n  background: #dc4046;\r\n  background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\r\n}\r\n.popup-url-container {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-top: 15px;\r\n}\r\n.popup-url-container input[type="text"] {\r\n  display: block;\r\n  outline-style: none;\r\n  color: var(--base-white);\r\n  border: none;\r\n  border-bottom: 1px solid var(--base-white);\r\n  border-radius: 0px;\r\n  width: 60%;\r\n  height: 40px;\r\n  padding: 0px;\r\n  margin-top: 0px;\r\n}\r\n.popup-url-container input[type="text"]:focus {\r\n  border: none;\r\n}\r\n.popup-url-container .copy-val {\r\n  cursor: pointer !important;\r\n  width: 34%;\r\n  margin: 0;\r\n}\r\n.popup-url-container .copy-val a {\r\n  margin: 0;\r\n}\r\n.popup-showchat-container,\r\n.popup-controlchat-container {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-top: 15px;\r\n}\r\n.popup-showchat-container .switch,\r\n.popup-controlchat-container .switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 52px;\r\n  height: 26px;\r\n  margin-top: 0;\r\n}\r\n.popup-showchat-container .switch input,\r\n.popup-controlchat-container .switch input {\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n.popup-showchat-container .switch input:checked + .slider,\r\n.popup-controlchat-container .switch input:checked + .slider {\r\n  background-color: var(--base-green);\r\n}\r\n.popup-showchat-container .switch input:checked + .slider:before,\r\n.popup-controlchat-container .switch input:checked + .slider:before {\r\n  -webkit-transform: translateX(26px);\r\n  -ms-transform: translateX(26px);\r\n  transform: translateX(26px);\r\n}\r\n.popup-showchat-container .switch .slider,\r\n.popup-controlchat-container .switch .slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: var(--black-5);\r\n  -webkit-transition: 0.4s;\r\n  transition: 0.4s;\r\n}\r\n.popup-showchat-container .switch .slider:before,\r\n.popup-controlchat-container .switch .slider:before {\r\n  position: absolute;\r\n  content: "";\r\n  height: 18px;\r\n  width: 18px;\r\n  left: 4px;\r\n  bottom: 4px;\r\n  background-color: #fff;\r\n  -webkit-transition: 0.4s;\r\n  transition: 0.4s;\r\n}\r\n.popup-showchat-container .switch .round,\r\n.popup-controlchat-container .switch .round {\r\n  border-radius: 34px;\r\n}\r\n.popup-showchat-container .switch .round:before,\r\n.popup-controlchat-container .switch .round:before {\r\n  border-radius: 50%;\r\n}\r\n.popup-showchat-container .switch .round:hover,\r\n.popup-controlchat-container .switch .round:hover {\r\n  cursor: pointer !important;\r\n}\r\n.popup-review-container {\r\n  display: flex;\r\n  flex-flow: wrap column;\r\n  width: 100%;\r\n  padding-top: 15px;\r\n  margin-top: 15px;\r\n  border-top: 1px solid var(--black-10);\r\n}\r\n.popup-review-container button {\r\n  background: #dc4046;\r\n  background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\r\n}\r\n.popup-review-container button:hover {\r\n  background: #dc4046;\r\n  background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\r\n} /*# sourceMappingURL=pop.min.css.map */\r\n.ellipsis-anim span {\r\n  opacity: 0;\r\n  -webkit-animation: ellipsis-dot 1s infinite;\r\n  animation: ellipsis-dot 1s infinite;\r\n}\r\n\r\n.ellipsis-anim span:nth-child(1) {\r\n  -webkit-animation-delay: 0.0s;\r\n  animation-delay: 0.0s;\r\n}\r\n.ellipsis-anim span:nth-child(2) {\r\n  -webkit-animation-delay: 0.1s;\r\n  animation-delay: 0.1s;\r\n}\r\n.ellipsis-anim span:nth-child(3) {\r\n  -webkit-animation-delay: 0.2s;\r\n  animation-delay: 0.2s;\r\n}\r\n\r\n@-webkit-keyframes ellipsis-dot {\r\n    0% { opacity: 0; }\r\n   50% { opacity: 1; }\r\n  100% { opacity: 0; }\r\n}\r\n\r\n@keyframes ellipsis-dot {\r\n    0% { opacity: 0; }\r\n   50% { opacity: 1; }\r\n  100% { opacity: 0; }\r\n}';
        },
        5644: module => {
            "use strict";
            module.exports = '@import "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap";\r\nbody,\r\nhtml {\r\n  font-size: 16px;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\na,\r\np,\r\nul,\r\nli,\r\nol,\r\nbutton,\r\nbody,\r\nhtml {\r\n  padding: 0em;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\na,\r\np,\r\nul,\r\nli,\r\nol,\r\nbutton,\r\nbody,\r\nhtml {\r\n  margin: 0em;\r\n}\r\nul,\r\nli,\r\nol,\r\na {\r\n  text-decoration: none;\r\n  list-style: none;\r\n}\r\ninput,\r\nbutton {\r\n  border: none;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nspan,\r\nbody,\r\nhtml {\r\n  user-select: text !important;\r\n  cursor: auto !important;\r\n}\r\nimg {\r\n  user-select: none !important;\r\n}\r\ndiv,\r\nsection,\r\nbutton,\r\ninput,\r\nform,\r\narticle {\r\n  outline: none;\r\n}\r\na {\r\n  display: block;\r\n  width: fit-content;\r\n}\r\nbutton,\r\ninput,\r\nform,\r\nfieldset {\r\n  background: none;\r\n}\r\nbutton:hover {\r\n  cursor: pointer;\r\n}\r\n.r-m {\r\n  margin: 0 !important;\r\n}\r\n.r-m-t {\r\n  margin-top: 0 !important;\r\n}\r\n.r-p-t {\r\n  padding-top: 0 !important;\r\n}\r\n.r-m-l {\r\n  margin-left: 0 !important;\r\n}\r\n.r-p-l {\r\n  padding-left: 0 !important;\r\n}\r\n.r-m-r {\r\n  margin-right: 0 !important;\r\n}\r\n.r-p-r {\r\n  padding-right: 0 !important;\r\n}\r\n.r-m-b {\r\n  margin-bottom: 0 !important;\r\n}\r\n.r-p-b {\r\n  padding-bottom: 0 !important;\r\n}\r\n.r-b-r {\r\n  border-radius: 0px !important;\r\n}\r\n.r-boxshadow {\r\n  box-shadow: none !important;\r\n}\r\n:root {\r\n  --chat-width: 288px;\r\n  --patreon: #f96854;\r\n  --base-red: #ef3e3a;\r\n  --active-red: #ea0f0a;\r\n  --base-blue: #4da9ff;\r\n  --base-orange: #ff8d4c;\r\n  --base-green: #24d154;\r\n  --base-white: #fafafa;\r\n  --white-5: #f0f0f0;\r\n  --white-10: #dcdcdc;\r\n  --white-15: #c8c8c8;\r\n  --white-20: #b4b4b4;\r\n  --white-25: #a0a0a0;\r\n  --white-30: #8c8c8c;\r\n  --white-35: #787878;\r\n  --base-black: #191919;\r\n  --black-5: #5a5a5a;\r\n  --black-10: #464646;\r\n  --black-15: #323232;\r\n  --black-20: #282828;\r\n  --black-25: #1e1e1e;\r\n  --black-30: #0a0a0a;\r\n}\r\n.base-white-bg {\r\n  background-color: var(--base-white);\r\n}\r\n.white-5-bg {\r\n  background-color: var(--white-5);\r\n}\r\n.white-10-bg {\r\n  background-color: var(--white-10);\r\n}\r\n.white-15-bg {\r\n  background-color: var(--white-15);\r\n}\r\n.white-20-bg {\r\n  background-color: var(--white-20);\r\n}\r\n.white-25-bg {\r\n  background-color: var(--white-25);\r\n}\r\n.white-30-bg {\r\n  background-color: var(--white-30);\r\n}\r\n.white-35-bg {\r\n  background-color: var(--white-35);\r\n}\r\n.base-black-bg {\r\n  background-color: var(--base-black);\r\n}\r\n.black-5-bg {\r\n  background-color: var(--black-5);\r\n}\r\n.black-10-bg {\r\n  background-color: var(--black-10);\r\n}\r\n.black-15-bg {\r\n  background-color: var(--black-15);\r\n}\r\n.black-20-bg {\r\n  background-color: var(--black-20);\r\n}\r\n.black-25-bg {\r\n  background-color: var(--black-25);\r\n}\r\n.black-30-bg {\r\n  background-color: var(--black-30);\r\n}\r\n.black-35-bg {\r\n  background-color: var(--black-35);\r\n}\r\n.base-red-bg {\r\n  background-color: var(--base-red);\r\n}\r\n.active-red-bg {\r\n  background-color: var(--active-red);\r\n}\r\n.base-orange-bg {\r\n  background-color: var(--base-orange);\r\n}\r\n.base-blue-bg {\r\n  background-color: var(--base-blue);\r\n}\r\n.base-green-bg {\r\n  background-color: var(--base-green);\r\n}\r\n.patreon-bg {\r\n  background-color: var(--patreon);\r\n}\r\n.txt-blue {\r\n  color: var(--base-blue) !important;\r\n}\r\n.txt-red {\r\n  color: var(--base-red) !important;\r\n}\r\n.txt-white {\r\n  color: var(--base-white) !important;\r\n}\r\ndiv,\r\np,\r\nspan,\r\na,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\nli,\r\nul,\r\nbutton {\r\n  word-wrap: break-word;\r\n}\r\n:root {\r\n  --regular: 400;\r\n  --medium: 500;\r\n  --semi-bold: 600;\r\n  --bold: 700;\r\n  --extra-bold: 800;\r\n  --black: 900;\r\n}\r\n.extension-title {\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--medium);\r\n  color: var(--base-red);\r\n  font-size: 16px;\r\n  letter-spacing: 0.2px;\r\n}\r\n.extension-txt {\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--regular);\r\n  color: var(--white-15);\r\n  font-size: 14px;\r\n}\r\n.extension-txt-indicator {\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--regular);\r\n  color: var(--white-35);\r\n  font-size: 11px;\r\n}\r\n.extension-description {\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--medium);\r\n  color: var(--white-10);\r\n  font-size: 13px;\r\n}\r\n.extension-border-bot {\r\n  border-bottom: 1px solid var(--black-10);\r\n}\r\n.extension-border-top {\r\n  border-top: 1px solid var(--black-10);\r\n}\r\n.extension-btn {\r\n  width: 100%;\r\n  margin-top: 10px;\r\n  background: var(--base-red);\r\n  color: var(--base-white);\r\n  padding: 10px 0px;\r\n  border-radius: 2px;\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--medium);\r\n  transition: background 0.3s ease;\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: center;\r\n  font-size: 14px;\r\n}\r\n.cancel-btn {\r\n  border: 1px solid #EF3E3A;\r\n  box-sizing: border-box;\r\n  border-radius: 2.23846px;\r\n  color: var(--base-red);\r\n  background: none !important;\r\n}\r\n.extension-btn:hover {\r\n  background: var(--active-red);\r\n}\r\n.extension-btn a {\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--medium);\r\n  color: var(--base-white);\r\n}\r\n::-webkit-scrollbar {\r\n  width: 2px;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n  background: var(--base-red);\r\n  border-radius: 10px;\r\n}\r\n#chat-wrapper {\r\n  transition: width 0.2s linear;\r\n  width: var(--chat-width);\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0;\r\n  left: auto;\r\n  right: 0;\r\n  bottom: 0;\r\n  cursor: auto;\r\n  user-select: text;\r\n  -webkit-user-select: text;\r\n  z-index: 9999999999;\r\n  background: var(--base-black);\r\n}\r\n#chat-container {\r\n  width: 264px;\r\n  height: 100%;\r\n  margin: 0 auto;\r\n  padding: 12px 0px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow: scroll;\r\n}\r\n#chat-main {\r\n  position: relative;\r\n  height: 100%;\r\n}\r\n#chat-menu-container {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-top: 0px !important;\r\n  padding-left: 0px !important;\r\n}\r\n#chat-menu-container li {\r\n  list-style: none !important;\r\n}\r\n#chat-menu-container #title h1 {\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--medium);\r\n  color: var(--base-red);\r\n  font-size: 16px;\r\n  letter-spacing: 0.5px;\r\n}\r\n#chat-menu-container #function-user {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n}\r\n#chat-menu-container #function-user #link-icon {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  align-items: center;\r\n  padding-right: 10px;\r\n  cursor: pointer;\r\n}\r\n#chat-menu-container #function-user #link-icon .chat-link {\r\n  color: var(--base-white);\r\n  width: 18px;\r\n  height: 18px;\r\n  transform: scale(1);\r\n  transition: color 0.3s ease;\r\n}\r\n#chat-menu-container #function-user #link-icon .chat-link:hover {\r\n  color: var(--base-red);\r\n  transform: scale(1.05);\r\n}\r\n#chat-menu-container #function-user #user-icon img {\r\n  width: 38px;\r\n  height: 38px;\r\n  transform: scale(1);\r\n  transition: transform 0.3s ease;\r\n}\r\n#chat-menu-container #function-user #user-icon img:hover {\r\n  transform: scale(1.05);\r\n}\r\n#chat-ad-cta-text {\r\n  cursor: pointer !important;\r\n}\r\n#chat-ad-sponsored-text {\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--regular);\r\n  color: var(--white-35);\r\n  font-size: 10px;\r\n  margin-bottom: 5px;\r\n}\r\n#chat-history-container {\r\n  display: flex;\r\n  flex-flow: column;\r\n  justify-content: flex-end;\r\n  flex: 1;\r\n  height: 50px;\r\n}\r\n#chat-history-container #chat-history {\r\n  overflow: auto;\r\n  width: 100%;\r\n  height: auto;\r\n  padding-top: 10px;\r\n}\r\n#chat-ad-holder {\r\n  padding-bottom: 10px;\r\n  border-bottom: 1px solid var(--black-10);\r\n}\r\n#chat-ad-header {\r\n  margin-bottom: 5px;\r\n}\r\n#chat-ad-header p {\r\n  color: var(--white-35);\r\n  font-size: 10px;\r\n}\r\n#chat-ad-image {\r\n  width: 264px;\r\n  height: 88px;\r\n  border-radius: 2px;\r\n}\r\n#chat-ad-btn {\r\n  background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\r\n}\r\n#chat-history-container #chat-history .msg,\r\n#chat-history-container #chat-history .msg-container {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: space-between;\r\n  padding: 5px 0px;\r\n  align-items: center;\r\n}\r\n#chat-history-container #chat-history .msg-container {\r\n  align-items: flex-start;\r\n}\r\n#chat-history-container #chat-history .msg .icon img,\r\n#chat-history-container #chat-history .msg .icon-name img,\r\n#chat-history-container #chat-history .msg-container .icon img,\r\n#chat-history-container #chat-history .msg-container .icon-name img {\r\n  width: 36px;\r\n  height: 36px;\r\n}\r\n#chat-history-container #chat-history .msg .msg-txt,\r\n#chat-history-container #chat-history .msg-container .msg-txt {\r\n  display: flex;\r\n  flex-flow: wrap column;\r\n  width: 80%;\r\n}\r\n#chat-history-container #chat-history .msg .message,\r\n#chat-history-container #chat-history .msg .message-system,\r\n#chat-history-container #chat-history .msg .message-txt,\r\n#chat-history-container #chat-history .msg-container .message,\r\n#chat-history-container #chat-history .msg-container .message-system,\r\n#chat-history-container #chat-history .msg-container .message-txt {\r\n  width: 80%;\r\n}\r\n#chat-history-container #chat-history .msg .message h3,\r\n#chat-history-container #chat-history .msg .message-system h3,\r\n#chat-history-container #chat-history .msg .message-txt h3,\r\n#chat-history-container #chat-history .msg-container .message h3,\r\n#chat-history-container #chat-history .msg-container .message-system h3,\r\n#chat-history-container #chat-history .msg-container .message-txt h3 {\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--semi-bold);\r\n  color: var(--base-white);\r\n  font-size: 14px;\r\n  line-height: 1.2;\r\n  letter-spacing: 0.2px;\r\n}\r\n#chat-history-container #chat-history .msg .message p,\r\n#chat-history-container #chat-history .msg .message-system p,\r\n#chat-history-container #chat-history .msg .message-txt p,\r\n#chat-history-container #chat-history .msg-container .message p,\r\n#chat-history-container #chat-history .msg-container .message-system p,\r\n#chat-history-container #chat-history .msg-container .message-txt p {\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--regular);\r\n  font-size: 14px;\r\n  line-height: normal;\r\n}\r\n#chat-history-container #chat-history .msg .message-txt p,\r\n#chat-history-container #chat-history .msg-container .message-txt p {\r\n  color: #fff;\r\n  word-break: break-word !important;\r\n  line-height: normal;\r\n}\r\n#chat-history-container #chat-history .msg .message-system p,\r\n#chat-history-container #chat-history .msg-container .message-system p {\r\n  color: var(--white-35);\r\n  font-style: italic;\r\n  line-height: normal;\r\n}\r\n#chat-input-container {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: space-between;\r\n  margin-bottom: 10px;\r\n}\r\n#chat-input-container input {\r\n  padding-top: 5px;\r\n  width: 100%;\r\n  border: none !important;\r\n  background: none !important;\r\n}\r\n#chat-input-container input:hover {\r\n  cursor: auto !important;\r\n}\r\n#chat-input-container #emoji-btn {\r\n  width: 10%;\r\n}\r\n#chat-input-container #emoji-btn .test-emoji-btn {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n  padding: 2.5px;\r\n}\r\n#chat-icon-container {\r\n  display: flex;\r\n  flex-flow: wrap column;\r\n  flex-flow: column;\r\n  display: none;\r\n  padding-top: 10px;\r\n}\r\n#chat-icon-container #icon-title-container {\r\n  padding-bottom: 10px;\r\n}\r\n#chat-icon-container #icon-holder {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n}\r\n#chat-icon-container #icon-holder .image-button {\r\n  width: 25%;\r\n  padding: 1px 3.75px;\r\n}\r\n#chat-icon-container #icon-holder .image-button .img-class {\r\n  width: 100%;\r\n  height: 100%;\r\n  transform: scale(0.95);\r\n  transition: transform 0.3s ease;\r\n}\r\n#chat-icon-container #icon-holder .image-button .img-class:hover {\r\n  transform: scale(1);\r\n}\r\n\r\n#chat-ad-btn p {\r\n  color: var(--base-white);\r\n  height: 100%;\r\n}\r\n\r\n#emoji-picker-container {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-flow: wrap column;\r\n  justify-content: space-between;\r\n  background: var(--black-15);\r\n  width: 100%;\r\n  height: 200px;\r\n  bottom: 136px;\r\n  border-radius: 2px;\r\n  padding: 10px;\r\n}\r\n#emoji-filter-container {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: space-between;\r\n  height: 10%;\r\n}\r\n#emoji-filter-container .emoji-filter-icons {\r\n  width: 11%;\r\n  height: 100%;\r\n}\r\n#emoji-filter-container .emoji-filter-icons img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n#emoji-category-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  position: relative;\r\n  margin-top: 4%;\r\n  height: 84%;\r\n}\r\n#emoji-category-container .emoji-category-wrap {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  height: auto;\r\n  padding-top: 10px;\r\n}\r\n#emoji-category-container .emoji-category-wrap:first-child {\r\n  padding-top: 0px;\r\n}\r\n#emoji-category-container .emoji-category-wrap p {\r\n  width: 100%;\r\n  padding-bottom: 5px;\r\n}\r\n#emoji-category-container .emoji-category-wrap img {\r\n  width: 15%;\r\n  height: auto;\r\n  padding: 4px;\r\n}\r\n#icon-holder {\r\n  padding: 0px !important;\r\n  margin: 0px !important;\r\n}\r\n#icon-holder-container {\r\n  height: calc(100% - 74px);\r\n  overflow: auto;\r\n}\r\n.icon-holder-wrap {\r\n  padding: 10px 0px;\r\n}\r\n.icon-holder-wrap:first-child {\r\n  padding: 0px;\r\n}\r\n.icon-holder-wrap p {\r\n  padding-bottom: 5px;\r\n}\r\n.setting,\r\n.setting-container {\r\n  display: flex;\r\n  flex-flow: wrap column;\r\n  display: none;\r\n}\r\n.setting-usericon {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: center;\r\n  padding-top: 10px;\r\n}\r\n.setting-usericon img {\r\n  width: 80px;\r\n  height: 80px;\r\n  transform: scale(1);\r\n  transition: transform 0.3s ease;\r\n}\r\n.setting-usericon img:hover {\r\n  transform: scale(1.05);\r\n}\r\n.setting-nickname {\r\n  margin-top: 10px;\r\n}\r\n.setting-nickname .nickname,\r\n.setting-nickname .nickname-input,\r\n.setting-nickname .nickname-wrap {\r\n  width: 100%;\r\n}\r\n.setting-nickname .nickname-wrap {\r\n  display: flex;\r\n  flex-flow: wrap column;\r\n}\r\n.setting-nickname .nickname-input {\r\n  margin-top: 5px;\r\n}\r\n.setting-nickname .nickname-input input {\r\n  border-radius: 2px;\r\n  padding: 8px 10px;\r\n  width: 100%;\r\n  background: var(--black-15);\r\n  border: none !important;\r\n}\r\n.setting-nickname .nickname-input input:hover {\r\n  cursor: auto !important;\r\n}\r\n#presence-indicator {\r\n  display: block;\r\n  padding-bottom: 5px;\r\n  height: 20px;\r\n}\r\n#patreon,\r\n#patreon-link,\r\n#patreon-container {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n#patreon-container {\r\n  padding-top: 10px;\r\n}\r\n#patreon-link img {\r\n  border-radius: 20px;\r\n  width: 130px;\r\n}\r\n#teleparty-blog-container {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  padding-top: 10px;\r\n  z-index: 10;\r\n}\r\n#teleparty-blog-btn {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  height: 36px;\r\n}\r\n#teleparty-blog-btn img {\r\n  height: 32px;\r\n}\r\n#teleparty-blog-btn p {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  align-items: center;\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--medium);\r\n  background: var(--base-red);\r\n  color: var(--base-white);\r\n  padding: 6px 20px;\r\n  border-radius: 20px;\r\n  height: 100%;\r\n}\r\n#teleparty-blog-btn p:hover {\r\n  cursor: pointer !important;\r\n} /*# sourceMappingURL=style.min.css.map */\r\n';
        }
    }, __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        if (__webpack_module_cache__[moduleId]) return __webpack_module_cache__[moduleId].exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        return __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.exports;
    }
    __webpack_require__.n = module => {
        var getter = module && module.__esModule ? () => module.default : () => module;
        return __webpack_require__.d(getter, {
            a: getter
        }), getter;
    }, __webpack_require__.d = (exports, definition) => {
        for (var key in definition) __webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key) && Object.defineProperty(exports, key, {
            enumerable: !0,
            get: definition[key]
        });
    }, __webpack_require__.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")();
        } catch (e) {
            if ("object" == typeof window) return window;
        }
    }(), __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop), 
    __webpack_require__.r = exports => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    }, (() => {
        "use strict";
        function _defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        let HboVideoType;
        function isHuluParty(url) {
            return url.hostname.includes(".hulu.") && url.pathname.includes("/watch");
        }
        function isDisneyPlusParty(url) {
            return url.hostname.includes(".disneyplus.") && url.pathname.includes("/video");
        }
        function isNetflixParty(url) {
            return url.hostname.includes(".netflix.") && url.pathname.includes("/watch");
        }
        function getHBOVideoType(url) {
            return url.includes("urn:hbo:feature") ? (console.log("this is an hbo feature"), 
            HboVideoType.HBO_FEATURE) : url.includes("urn:hbo:episode") || url.includes("urn:hbo:page:") && url.includes(":type:episode") ? (console.log("this is an hbo episode"), 
            HboVideoType.HBO_EPISODE) : url.includes("urn:hbo:extra") ? (console.log("this is an hbo extra"), 
            HboVideoType.HBO_EXTRA) : HboVideoType.NONE;
        }
        function delay(milliseconds) {
            return function(result) {
                return new Promise((function(resolve, reject) {
                    setTimeout((function() {
                        resolve(result);
                    }), milliseconds);
                }));
            };
        }
        function delayUntil(condition, maxDelay) {
            let delayStep = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 250;
            return function(result) {
                const startTime = (new Date).getTime();
                return function checkForCondition() {
                    return condition() ? Promise.resolve(result) : null !== maxDelay && (new Date).getTime() - startTime > maxDelay ? Promise.reject(new Error("delayUntil timed out" + condition)) : delay(delayStep)().then(checkForCondition);
                }();
            };
        }
        function shove(array, value, limit) {
            array.push(value), array.length > limit && array.splice(0, array.length - limit);
        }
        function median(array) {
            return array.concat().sort()[Math.floor(array.length / 2)];
        }
        function TaskManager_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        !function(HboVideoType) {
            HboVideoType.HBO_EPISODE = "episode", HboVideoType.HBO_FEATURE = "feature", HboVideoType.HBO_EXTRA = "extra", 
            HboVideoType.NONE = "none";
        }(HboVideoType || (HboVideoType = {}));
        const TaskManager_TaskManager = new class {
            constructor() {
                TaskManager_defineProperty(this, "_tasksInFlight", void 0), TaskManager_defineProperty(this, "_taskArray", void 0), 
                TaskManager_defineProperty(this, "_tasks", void 0), TaskManager_defineProperty(this, "_enabled", void 0), 
                TaskManager_defineProperty(this, "_pingInQueue", !1), this.resetTasks(), this._taskArray = [], 
                this._tasksInFlight = 0, this._tasks = Promise.resolve(), this._enabled = !0;
            }
            pushTask(action, name) {
                if (!this._enabled) return;
                const newTask = {
                    action,
                    name
                };
                0 === this._tasksInFlight && this.resetTasks(), this._tasksInFlight = this._taskArray.push(newTask), 
                this._tasks = this._tasks.then((() => {
                    if (this._enabled) return this._swallow(newTask)().then((() => {
                        this._taskArray.shift(), this._tasksInFlight -= 1;
                    }));
                }));
            }
            disable() {
                this._enabled = !1, this.resetTasks();
            }
            resetTasks() {
                this._tasks = Promise.resolve(), this._taskArray = [], this._tasksInFlight = 0;
            }
            _swallow(task) {
                return function() {
                    return task.action().catch((e => {}));
                };
            }
            get tasksInFlight() {
                return this._tasksInFlight;
            }
            hasTaskInQueue(name) {
                return this._taskArray.some((task => task.name === name));
            }
        };
        var debug = console.log.bind(window.console);
        const oldIcons = [ "Batman.svg", "DeadPool.svg", "CptAmerica.svg", "Wolverine.svg", "IronMan.svg", "Goofy.svg", "Alien.svg", "Mulan.svg", "Snow-White.svg", "Poohbear.svg", "Sailormoon.svg", "Sailor Cat.svg", "Pizza.svg", "Cookie.svg", "Chocobar.svg", "hotdog.svg", "Hamburger.svg", "Popcorn.svg", "IceCream.svg", "ChickenLeg.svg" ], newIcons = [ "General/Alien.svg", "General/Batman.svg", "General/ChickenLeg.svg", "General/Chocobar.svg", "General/Cookie.svg", "General/CptAmerica.svg", "General/DeadPool.svg", "General/Goofy.svg", "General/Hamburger.svg", "General/hotdog.svg", "General/IceCream.svg", "General/IronMan.svg", "General/Mulan.svg", "General/Pizza.svg", "General/Poohbear.svg", "General/Popcorn.svg", "General/Sailor Cat.svg", "General/Sailormoon.svg", "General/Snow-White.svg", "General/Wolverine.svg", "Christmas/angel.svg", "Christmas/bell.svg", "Christmas/box.svg", "Christmas/cane.svg", "Christmas/flake.svg", "Christmas/gingerbread.svg", "Christmas/gingerbread_F.svg", "Christmas/gingerbread_M.svg", "Christmas/gloves_blue.svg", "Christmas/gloves_red.svg", "Christmas/hat.svg", "Christmas/ornament.svg", "Christmas/raindeer.svg", "Christmas/reef.svg", "Christmas/santa_F.svg", "Christmas/santa_M.svg", "Christmas/snowglobe.svg", "Christmas/snowman.svg", "Christmas/sock.svg", "Christmas/tree.svg", "Halloween/bats.svg", "Halloween/candy_corn.svg", "Halloween/cat_black.svg", "Halloween/cat_white.svg", "Halloween/coffin.svg", "Halloween/eye_ball.svg", "Halloween/face_angry.svg", "Halloween/face_evil.svg", "Halloween/face_silly.svg", "Halloween/face_smile.svg", "Halloween/frankenstein.svg", "Halloween/ghost_F.svg", "Halloween/ghost_M.svg", "Halloween/gravestone.svg", "Halloween/lollipop.svg", "Halloween/moon.svg", "Halloween/mummy.svg", "Halloween/potion.svg", "Halloween/pumpkin.svg", "Halloween/pumpkin_witch.svg", "Halloween/skull_brain.svg", "Halloween/skull_candy.svg", "Halloween/skull_girl.svg", "Halloween/witch_hat.svg", "Thanksgiving/acorn.svg", "Thanksgiving/bread.svg", "Thanksgiving/candles.svg", "Thanksgiving/corn.svg", "Thanksgiving/drinks.svg", "Thanksgiving/maple_leaf.svg", "Thanksgiving/plate_chicken.svg", "Thanksgiving/pumpkin.svg", "Thanksgiving/pumpkin_pie.svg", "Thanksgiving/slice_pie.svg", "Thanksgiving/sun_flower.svg", "Thanksgiving/turkey_face.svg" ], iconMap = {
            General: [ "Alien.svg", "Batman.svg", "ChickenLeg.svg", "Chocobar.svg", "Cookie.svg", "CptAmerica.svg", "DeadPool.svg", "Goofy.svg", "Hamburger.svg", "hotdog.svg", "IceCream.svg", "IronMan.svg", "Mulan.svg", "Pizza.svg", "Poohbear.svg", "Popcorn.svg", "Sailor Cat.svg", "Sailormoon.svg", "Snow-White.svg", "Wolverine.svg" ],
            Christmas: [ "angel.svg", "bell.svg", "box.svg", "cane.svg", "flake.svg", "gingerbread.svg", "gingerbread_F.svg", "gingerbread_M.svg", "gloves_blue.svg", "gloves_red.svg", "hat.svg", "ornament.svg", "raindeer.svg", "reef.svg", "santa_F.svg", "santa_M.svg", "snowglobe.svg", "snowman.svg", "sock.svg", "tree.svg" ],
            Halloween: [ "bats.svg", "candy_corn.svg", "cat_black.svg", "cat_white.svg", "coffin.svg", "eye_ball.svg", "face_angry.svg", "face_evil.svg", "face_silly.svg", "face_smile.svg", "frankenstein.svg", "ghost_F.svg", "ghost_M.svg", "gravestone.svg", "lollipop.svg", "moon.svg", "mummy.svg", "potion.svg", "pumpkin.svg", "pumpkin_witch.svg", "skull_brain.svg", "skull_candy.svg", "skull_girl.svg", "witch_hat.svg" ],
            Thanksgiving: [ "acorn.svg", "bread.svg", "candles.svg", "corn.svg", "drinks.svg", "maple_leaf.svg", "plate_chicken.svg", "pumpkin.svg", "pumpkin_pie.svg", "slice_pie.svg", "sun_flower.svg", "turkey_face.svg" ]
        };
        function escapeStr(str) {
            return str ? str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : str;
        }
        const enableIconsetFunctions = {
            General: function() {
                return !0;
            },
            Christmas: function() {
                return 11 === (new Date).getMonth();
            },
            Halloween: function() {
                const date = new Date;
                return 9 === date.getMonth() && date.getDate() >= 24;
            },
            Thanksgiving: function() {
                const date = new Date;
                return 10 === date.getMonth() && date.getDate() >= 18 && date.getDate() <= 28 || 9 === date.getMonth() && date.getDate() >= 8 && date.getDate() <= 14;
            }
        }, closeImage = chrome.extension.getURL("img/x-circle.svg"), ownerOnlyNextEpisodeModal = {
            title: "Teleparty | Disconnected from party",
            content: "Only the owner of this party can change the episode. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
            buttonTitle: "Return to Party"
        }, idleWarningModal = {
            title: "Teleparty | Are you still there?",
            content: "You will be removed from the party in 60 seconds for inactivity. Move your mouse to continue watching."
        }, failedNextEpisodeModal = {
            title: "Teleparty | Disconnected from party",
            content: "It looks like someone changed the video and we weren't able to connect you. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
            buttonTitle: "Return to Party"
        }, lostBackgroundConnectionModal = {
            title: "Teleparty | Disconnected from party",
            content: "It looks like you lost connection to the extension. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
            buttonTitle: "Return to Party"
        };
        function showButtonMessage(options, buttonUrl) {
            hideAlertMessages();
            const modalTemplate = buttonUrl ? function(options) {
                return `\n    <div id="alert-dialog-wrapper">\n      <div id="alert-dialog-container">\n        <div id="alert-title-wrapper">\n            <div class="alert-title">\n                <p id="alert-title-txt" class="extension-title">\n                    ${options.title}\n                </p>\n                <button id="alert-x-btn">\n                    <img src="${closeImage}" alt="close" />\n                </button>\n            </div>\n            <div class="extension-border-bot">\n                \n            </div>\n        </div>\n        <div id="alert-description">\n            <p id="alert-content-txt" class="extension-txt">\n              ${options.content}\n            </p>\n            <button id="alert-return-btn" class="extension-btn">${options.buttonTitle}</button>\n        </div>\n      </div>\n    </div>\n    `;
            }(options) : function(options) {
                return `\n  <div id="alert-dialog-wrapper">\n    <div id="alert-dialog-container">\n      <div id="alert-title-wrapper">\n          <div class="alert-title">\n              <p id="alert-title-txt" class="extension-title">\n                  ${options.title}\n              </p>\n              <button id="alert-x-btn">\n                  <img src="${closeImage}" alt="close" />\n              </button>\n          </div>\n          <div class="extension-border-bot">\n              \n          </div>\n      </div>\n      <div id="alert-description">\n          <p id="alert-content-txt" class="extension-txt">\n            ${options.content}\n          </p>\n      </div>\n    </div>\n  </div>\n  `;
            }(options);
            document.body.insertAdjacentHTML("afterbegin", modalTemplate), jQuery("#alert-x-btn").click((() => {
                hideAlertMessages();
            })), buttonUrl && jQuery("#alert-return-btn").click((() => {
                hideAlertMessages(), window.location.href = buttonUrl;
            }));
        }
        function hideAlertMessages() {
            const alertWrapper = document.querySelector("#alert-dialog-wrapper");
            alertWrapper && alertWrapper.remove();
        }
        const DEFAULT_TEARDOWN = {
            showAlert: !1
        }, IDLE_TEARDOWN = {
            showAlert: !0,
            alertModal: {
                title: "Teleparty | Disconnected from party",
                content: "You were removed from the party from inactivity. Click the button below rejoin the party.",
                buttonTitle: "Return to Party"
            }
        }, INVALID_NEXT_EPISODE_DATA = {
            showAlert: !0,
            alertModal: {
                title: "Teleparty | Disconnected from party",
                content: "Sorry, long parties only work for consecutive episodes for now. Please share a new Teleparty to continue watching together, or click the button below to rejoin the party.",
                buttonTitle: "Return to Party"
            }
        }, FAILED_NEXT_EPISODE_DATA = {
            showAlert: !0,
            alertModal: failedNextEpisodeModal
        }, WRONG_SCREEN_DATA = {
            showAlert: !0,
            alertModal: {
                title: "Teleparty | Disconnected from party",
                content: "It looks like you left the party. You can click the button below to rejoin the party.",
                buttonTitle: "Return to Party"
            }
        };
        const EXTENSION_ID = chrome.runtime.id;
        function StreamingService_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class StreamingSerivce {
            constructor(requiredPermissions, contentScripts, serverName, name, syncFromEnd) {
                StreamingService_defineProperty(this, "requiredPermissions", void 0), StreamingService_defineProperty(this, "contentScripts", void 0), 
                StreamingService_defineProperty(this, "serverName", void 0), StreamingService_defineProperty(this, "name", void 0), 
                StreamingService_defineProperty(this, "syncFromEnd", void 0), this.requiredPermissions = requiredPermissions, 
                this.serverName = serverName, this.name = name, this.contentScripts = contentScripts, 
                this.syncFromEnd = syncFromEnd;
            }
            urlWithSessionId(sessionId) {
                return `https://redirect.teleparty.com/join/${sessionId}`;
            }
        }
        let StreamingServiceName;
        !function(StreamingServiceName) {
            StreamingServiceName.NETFLIX = "NETFLIX", StreamingServiceName.HULU = "HULU", StreamingServiceName.DISNEY_PLUS = "DISNEY_PLUS", 
            StreamingServiceName.HBO_MAX = "HBO_MAX", StreamingServiceName.HBO_NOW = "HBO_NOW", 
            StreamingServiceName.YOUTUBE = "YOUTUBE", StreamingServiceName.AMAZON = "AMAZON";
        }(StreamingServiceName || (StreamingServiceName = {}));
        const HboMax = new class extends StreamingSerivce {
            isValidUrl(url) {
                return function(url) {
                    return url.hostname.includes(".hbomax.") && "none" !== getHBOVideoType(url.pathname) || url.pathname.includes("urn:hbo:page");
                }(url);
            }
            getVideoId(url) {
                const videoUrnType = "urn:hbo:" + getHBOVideoType(url.pathname) + ":", hboQueryString = url.pathname.split(videoUrnType);
                let hboParseIds = null != hboQueryString && hboQueryString.length > 1 && null != hboQueryString[1] ? hboQueryString[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : null;
                const hboMatch = null != hboParseIds && 0 !== hboParseIds.length ? hboQueryString[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : void 0;
                let hboVideoId = hboMatch && hboMatch.length > 0 ? hboMatch[1] : void 0;
                return hboVideoId || (hboParseIds = url.pathname.match(/(page:)([a-zA-Z\-_0-9]+)\??.*/), 
                hboVideoId = null != hboParseIds && 3 == hboParseIds.length ? hboParseIds[2] : void 0), 
                hboVideoId;
            }
            getVideoType(url) {
                return getHBOVideoType(url.pathname);
            }
        }([], [ "content_scripts/hbo_max/hbo_max_browse_bundled.js", "content_scripts/hbo_max/hbo_max_content_bundled.js" ], "hbomax", StreamingServiceName.HBO_MAX, !1);
        Object.freeze(HboMax);
        const Services_HboMax = HboMax;
        __webpack_require__(5640);
        function HboMaxVideoEventListener_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class HboMaxVideoEventListener extends class {
            constructor(videoApi) {
                _defineProperty(this, "_videoApi", void 0), _defineProperty(this, "_videoMessageForwarder", void 0), 
                this._videoApi = videoApi, console.log("Video Event Listener");
            }
            _onVideoUpdate() {
                var _this$_videoMessageFo;
                null === (_this$_videoMessageFo = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo || _this$_videoMessageFo.tryBroadcast(!1);
            }
            _onVideoUpdateWaitForChange() {
                var _this$_videoMessageFo2;
                null === (_this$_videoMessageFo2 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo2 || _this$_videoMessageFo2.tryBroadcast(!0);
            }
            _onVideoBuffering() {
                var _this$_videoMessageFo3;
                null === (_this$_videoMessageFo3 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo3 || _this$_videoMessageFo3.setBuffering(!0);
            }
            _onAdStart() {
                var _this$_videoMessageFo4;
                null === (_this$_videoMessageFo4 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo4 || _this$_videoMessageFo4.setWatchingAds(!0);
            }
            _onAdEnd() {
                var _this$_videoMessageFo5;
                null === (_this$_videoMessageFo5 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo5 || _this$_videoMessageFo5.setWatchingAds(!1);
            }
            _onVideoCanPlay() {
                var _this$_videoMessageFo6;
                null === (_this$_videoMessageFo6 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo6 || _this$_videoMessageFo6.setBuffering(!1);
            }
            _onNextEpisode(videoId) {
                var _this$_videoMessageFo7;
                null === (_this$_videoMessageFo7 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo7 || _this$_videoMessageFo7.sendNextEpisodeAsync(videoId);
            }
            _onTeardown(data) {
                var _this$_videoMessageFo8;
                null === (_this$_videoMessageFo8 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo8 || _this$_videoMessageFo8.sendTeardown(data);
            }
            setMessageForwarder(videoMessageForwarder) {
                this._videoMessageForwarder = videoMessageForwarder;
            }
            shouldSync() {
                return !0;
            }
        } {
            constructor(videoApi, chatApi) {
                var _window$teleparty, _window$teleparty2;
                super(videoApi), HboMaxVideoEventListener_defineProperty(this, "_videoApi", void 0), 
                HboMaxVideoEventListener_defineProperty(this, "_chatApi", void 0), HboMaxVideoEventListener_defineProperty(this, "_coverObserver", void 0), 
                HboMaxVideoEventListener_defineProperty(this, "_coverCheckRunning", !1), HboMaxVideoEventListener_defineProperty(this, "_coverCheckInterval", void 0), 
                HboMaxVideoEventListener_defineProperty(this, "_onVideoLoad", this.checkWatchingAds.bind(this)), 
                HboMaxVideoEventListener_defineProperty(this, "_onUpdate", this._onVideoUpdateWaitForChange.bind(this)), 
                HboMaxVideoEventListener_defineProperty(this, "_onBuffering", this._onVideoBuffering.bind(this)), 
                HboMaxVideoEventListener_defineProperty(this, "_onCanPlay", this._onVideoCanPlay.bind(this)), 
                HboMaxVideoEventListener_defineProperty(this, "_onReplace", this.replaceStateInteraction.bind(this)), 
                HboMaxVideoEventListener_defineProperty(this, "_onEpisodeData", void 0), HboMaxVideoEventListener_defineProperty(this, "_onReload", this.reloadListeners.bind(this)), 
                HboMaxVideoEventListener_defineProperty(this, "_onNodeMessage", void 0), HboMaxVideoEventListener_defineProperty(this, "_upNextClicked", !1), 
                HboMaxVideoEventListener_defineProperty(this, "F_KEY_CODE", 70), this._videoApi = videoApi, 
                this._videoApi.setVideoEventListener(this), this._chatApi = chatApi, this._onEpisodeData = this._videoApi.episodeDataInteraction.bind(this._videoApi), 
                this._onNodeMessage = this._videoApi.onNode.bind(this._videoApi), this._coverObserver = new MutationObserver(this.coverChanged.bind(this)), 
                null !== (_window$teleparty = window.teleparty) && void 0 !== _window$teleparty && _window$teleparty.injectScriptLoaded || function(scriptLocation) {
                    const s = document.createElement("script");
                    s.setAttribute("tpInjected", ""), s.src = scriptLocation, (document.head || document.documentElement).appendChild(s), 
                    s.remove();
                }(chrome.extension.getURL("content_scripts/hbo_max/hbo_max_injected_bundled.js")), 
                null !== (_window$teleparty2 = window.teleparty) && void 0 !== _window$teleparty2 && _window$teleparty2.replaceScriptLoaded || (debug("injecting replace script"), 
                function(script) {
                    const s = document.createElement("script");
                    s.setAttribute("tpInjected", ""), s.textContent = script, (document.head || document.documentElement).appendChild(s), 
                    s.remove();
                }('\n    if(!window.replaceScriptLoaded) {\n      window.replaceScriptLoaded = true;\n      (function(history){\n        var replaceState = history.replaceState;\n        history.replaceState = function(state) {\n          if (typeof history.onreplacestate == "function") {\n            history.onreplacestate({state: state});\n          }\n          return replaceState.apply(history, arguments);\n        }\n        var pushState = history.pushState;\n        history.pushState = function(state) {\n            if (typeof history.onpushstate == "function") {\n                history.onpushstate({state: state});\n            }\n            return pushState.apply(history, arguments);\n        };\n      })(window.history);\n\n      var popInteraction = function(e) {\n        // send message to content script w next episode\n        window.postMessage({ type: "FROM_PAGE_POP", text: "next episode from the webpage!"}, "*");\n      }\n\n      var reloadInteraction = function(e) {\n        // send message to content script w next episode\n        window.postMessage({ type: "FROM_PAGE", text: "next episode from the webpage!"}, "*");\n      }\n      window.onpopstate = popInteraction;\n      history.onreplacestate = history.onpushstate = reloadInteraction;\n    }\n')), 
                this.initListeners();
            }
            _getUpNextButton() {
                return document.querySelector("[aria-label*='Up Next']");
            }
            async onCoverChangedAsync() {
                var _this$_videoMessageFo;
                if (!(this._coverCheckRunning || null !== (_this$_videoMessageFo = this._videoMessageForwarder) && void 0 !== _this$_videoMessageFo && _this$_videoMessageFo.changingVideo)) {
                    this._coverCheckRunning = !0;
                    try {
                        var _this$_videoMessageFo2, _this$_videoMessageFo3;
                        if (await delayUntil(this._videoApi.removeVideoCover.bind(this._videoApi), 2500)(), 
                        await delay(500)(), null === (_this$_videoMessageFo2 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo2 || !_this$_videoMessageFo2.changingVideo) TaskManager_TaskManager.pushTask(this._videoApi.skipPromo), 
                        this.reloadListeners(), null === (_this$_videoMessageFo3 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo3 || _this$_videoMessageFo3.forceSync();
                    } catch (e) {} finally {
                        this._coverCheckRunning = !1;
                    }
                }
            }
            coverChanged() {
                this.onCoverChangedAsync();
            }
            async fixPromo() {
                if (!this._videoApi.playCheckRunning) {
                    this._videoApi.playCheckRunning = !0;
                    try {
                        var _this$_videoMessageFo4, _this$_videoMessageFo5;
                        if (await this._videoApi.waitTillPromo(), debug("DETECTED Promo"), null !== (_this$_videoMessageFo4 = this._videoMessageForwarder) && void 0 !== _this$_videoMessageFo4 && _this$_videoMessageFo4.changingVideo) this._videoApi.playCheckRunning = !1; else TaskManager_TaskManager.pushTask(this._videoApi.skipPromo), 
                        this.reloadListeners(), null === (_this$_videoMessageFo5 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo5 || _this$_videoMessageFo5.forceSync();
                    } catch (e) {
                        this._videoApi.playCheckRunning = !1;
                    }
                }
            }
            getPlayCover() {
                return document.querySelector("[style*='icn_tile_play_max_large_3']");
            }
            getFullScreenButton() {
                try {
                    return jQuery("[style*='expand_default']").closest("[role='button']")[0];
                } catch (error) {
                    return null;
                }
            }
            onFullScreen() {
                console.log("full screen click"), document.documentElement.webkitRequestFullScreen(document.documentElement.ALLOW_KEYBOARD_INPUT), 
                setTimeout((() => {
                    this._chatApi.setChatVisible(this._chatApi.getChatVisible());
                }), 400);
            }
            tryFixFullScreen() {
                delay(400)().then((() => {
                    const fs = this.getFullScreenButton();
                    fs ? (fs.removeEventListener("mousedown", this.onFullScreen.bind(this)), fs.addEventListener("mousedown", this.onFullScreen.bind(this)), 
                    debug("Fullscreen fixed")) : (setTimeout(this.tryFixFullScreen.bind(this), 5e3), 
                    debug("Can't find fullscreen button, trying again"));
                }));
            }
            reloadListeners() {
                const video = this.getVideo();
                video && (video.addEventListener("waiting", this._onBuffering), video.addEventListener("canplay", this._onCanPlay), 
                video.addEventListener("play", this._onUpdate), video.addEventListener("pause", this._onUpdate), 
                video.addEventListener("seeking", this._onUpdate), video.addEventListener("loadstart", this._onVideoLoad)), 
                this._videoApi.showControls(), this.tryFixFullScreen();
            }
            initListeners() {
                window.addEventListener("resize", this._resizeHandler.bind(this)), window.document.addEventListener("webkitfullscreenchange", this._resizeHandler.bind(this)), 
                window.addEventListener("message", this._onReplace, !1), window.addEventListener("message", this._onEpisodeData, !1), 
                window.addEventListener("FromNode", this._onNodeMessage, !1), window.addEventListener("reloadVideoListener", this._onReload, !1), 
                this.startFullscreenListen();
            }
            startFullscreenListen() {
                document.addEventListener("keydown", (ev => {
                    ev.keyCode === this.F_KEY_CODE && ev.target != document.querySelector("#chat-input") && ev.target !== document.querySelector("#nickname-edit") && (ev.stopImmediatePropagation(), 
                    this.onFullScreen());
                }), !0), this.tryFixFullScreen();
            }
            startListening() {
                this._coverObserver.disconnect();
                const playCover = this.getPlayCover();
                playCover && this._coverObserver.observe(playCover, {
                    childList: !0,
                    characterData: !0,
                    attributes: !0,
                    subtree: !0
                }), document.arrive("[aria-label*='Up Next']", (elem => {
                    const upNextButton = elem;
                    upNextButton.style.left = this._chatApi.getChatVisible() ? "-250px" : "10px", upNextButton.addEventListener("mousedown", (() => {
                        debug("Up next button clicked"), this._upNextClicked = !0, this._videoMessageForwarder && (this._videoMessageForwarder.changingVideo = !0), 
                        this._videoApi.triggerNextEpisode();
                    }));
                }));
                const video = this.getVideo();
                video && (video.addEventListener("waiting", this._onBuffering), video.addEventListener("canplay", this._onCanPlay), 
                video.addEventListener("play", this._onUpdate), video.addEventListener("pause", this._onUpdate), 
                video.addEventListener("seeking", this._onUpdate), video.addEventListener("loadstart", this._onVideoLoad)), 
                this._coverCheckInterval = setInterval((() => {
                    this.onCoverChangedAsync(), this.fixPromo();
                }), 5e3), this._videoApi.showControls();
            }
            getVideo() {
                const video = jQuery("video");
                return video && video.length ? video[0] : void 0;
            }
            stopListening() {
                this._coverObserver.disconnect();
                const video = this.getVideo();
                video && (video.removeEventListener("waiting", this._onBuffering), video.removeEventListener("buffering", this._onCanPlay), 
                video.removeEventListener("play", this._onUpdate), video.removeEventListener("pause", this._onUpdate), 
                video.removeEventListener("seeking", this._onUpdate), video.removeEventListener("loadstart", this._onVideoLoad)), 
                this._coverCheckInterval && clearInterval(this._coverCheckInterval), window.removeEventListener("resize", this._resizeHandler), 
                window.document.removeEventListener("webkitfullscreenchange", this._resizeHandler), 
                window.removeEventListener("message", this._onReplace, !1), window.removeEventListener("message", this._onEpisodeData, !1), 
                window.removeEventListener("FromNode", this._onNodeMessage, !1), window.addEventListener("reloadVideoListener", this._onReload, !1);
            }
            async loadNewVideoAsync(nextEpisodeId) {
                await new Promise(((resolve, reject) => {
                    const start = performance.now(), interval = setInterval((() => {
                        if (this._videoApi.checkUpdateId(), this._videoApi.videoId === nextEpisodeId) {
                            const videoElement = this._videoApi.getVideoElement();
                            videoElement instanceof Element && videoElement.src && (clearInterval(interval), 
                            resolve());
                        }
                        performance.now() - start >= 3e4 && (clearInterval(interval), reject("Could not load new video in time."));
                    }), 200);
                })), await delayUntil(this._videoApi.isVideoReady.bind(this._videoApi), 1 / 0)(), 
                await this._videoApi.skipPromo(), this._onVideoCanPlay();
            }
            _resizeHandler() {
                delay(100)(void 0).then((() => {
                    this._chatApi.getChatVisible() && (document.webkitIsFullScreen ? jQuery("video").width(window.innerWidth) : jQuery("video").width(window.innerWidth - 288));
                }));
            }
            getVideoTitle() {
                try {
                    return jQuery("[style*='metadata_pipe.png']").parent().next().children().children()[1].innerText;
                } catch (e) {
                    return;
                }
            }
            _getSlider() {
                const slider = document.querySelector("[style*='slider']");
                if (slider && slider.parentElement && slider.parentElement.parentElement && slider.parentElement.parentElement.parentElement) return slider.parentElement.parentElement.parentElement;
            }
            async _waitAdsOver() {
                await delayUntil((() => void 0 !== this._getSlider()), 1 / 0)(), this._onAdEnd();
            }
            checkWatchingAds() {
                var _this$_videoMessageFo6;
                this._getSlider() || null !== (_this$_videoMessageFo6 = this._videoMessageForwarder) && void 0 !== _this$_videoMessageFo6 && _this$_videoMessageFo6.isWatchingAds() || (this._onAdStart(), 
                this._waitAdsOver());
            }
            _shouldCancelReplace() {
                var _this$_videoMessageFo7;
                return null == this._videoMessageForwarder || (null === (_this$_videoMessageFo7 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo7 ? void 0 : _this$_videoMessageFo7.changingVideo) && !this._upNextClicked || null == this._videoMessageForwarder.videoId;
            }
            replaceStateInteraction(event) {
                if (event.source != window || this._shouldCancelReplace()) return;
                const episodePage = Services_HboMax.getVideoType(new URL(window.location.href)) != HboVideoType.NONE && null != this._videoApi.getVideoElement();
                if ("FROM_PAGE_POP" !== event.data.type && episodePage) {
                    if (event.data.type && "FROM_PAGE" == event.data.type) {
                        var _this$_videoMessageFo8;
                        if (debug("Replace called"), "episode" !== this._videoApi.videoType || "episode" !== Services_HboMax.getVideoType(new URL(window.location.href))) return void (null !== (_this$_videoMessageFo8 = this._videoMessageForwarder) && void 0 !== _this$_videoMessageFo8 && _this$_videoMessageFo8.changingVideo ? this._onTeardown(INVALID_NEXT_EPISODE_DATA) : this._onTeardown(WRONG_SCREEN_DATA));
                        this._videoMessageForwarder && (this._videoMessageForwarder.changingVideo = !0), 
                        this._upNextClicked = !1, this._videoApi.updateVideoId().then((() => {
                            const nextVideoId = this._videoApi.videoId;
                            var _this$_videoMessageFo9;
                            nextVideoId ? this._onNextEpisode(nextVideoId) : debug("No next episode: " + nextVideoId + " : " + (null === (_this$_videoMessageFo9 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo9 ? void 0 : _this$_videoMessageFo9.videoId));
                        })).catch((err => {
                            var _this$_videoMessageFo10, _this$_videoMessageFo11;
                            (null === this._videoApi.getVideoElement && this._onTeardown(DEFAULT_TEARDOWN), 
                            debug("Replace failed " + err), this._videoApi.videoId !== (null === (_this$_videoMessageFo10 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo10 ? void 0 : _this$_videoMessageFo10.videoId)) ? null !== (_this$_videoMessageFo11 = this._videoMessageForwarder) && void 0 !== _this$_videoMessageFo11 && _this$_videoMessageFo11.changingVideo ? this._onTeardown(FAILED_NEXT_EPISODE_DATA) : this._onTeardown(INVALID_NEXT_EPISODE_DATA) : this._videoMessageForwarder && (this._videoMessageForwarder.changingVideo = !1);
                        }));
                    }
                } else this._onTeardown(DEFAULT_TEARDOWN);
            }
        }
        let PopupMessageType;
        !function(PopupMessageType) {
            PopupMessageType.CREATE_SESSION = "createSession", PopupMessageType.RE_INJECT = "reInject", 
            PopupMessageType.GET_INIT_DATA = "getInitData", PopupMessageType.IS_CONTENT_SCRIPT_READY = "isContentScriptReady", 
            PopupMessageType.SET_CHAT_VISIBLE = "setChatVisible", PopupMessageType.DISCONNECT = "teardown", 
            PopupMessageType.CLOSE_POPUP = "closePopup";
        }(PopupMessageType || (PopupMessageType = {}));
        const Messaging_MessagePasser = new class {
            addListener(listener) {
                chrome.runtime.onMessage.addListener(listener);
            }
            removeListener(listener) {
                chrome.runtime.onMessage.removeListener(listener);
            }
            sendMessageToTabAsync(message, tabId) {
                let timeout = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2e4;
                return new Promise(((resolve, reject) => {
                    const sendTimeout = setTimeout((() => {
                        reject();
                    }), timeout);
                    try {
                        chrome.tabs.sendMessage(tabId, message, (response => {
                            chrome.runtime.lastError && debug(chrome.runtime.lastError.message + JSON.stringify(message)), 
                            clearTimeout(sendTimeout), resolve(response);
                        }));
                    } catch (error) {
                        clearTimeout(sendTimeout), reject(error);
                    }
                }));
            }
            sendMessageToExtension(message, timeout) {
                return new Promise(((resolve, reject) => {
                    let sendTimeout = null;
                    timeout && (sendTimeout = setTimeout((() => {
                        reject({
                            error: "Send Message Timeout"
                        });
                    }), timeout));
                    try {
                        chrome.runtime.sendMessage(EXTENSION_ID, message, (response => {
                            chrome.runtime.lastError && console.log(chrome.runtime.lastError.message + JSON.stringify(message)), 
                            sendTimeout && clearTimeout(sendTimeout), resolve(response);
                        }));
                    } catch (error) {
                        sendTimeout && clearTimeout(sendTimeout), reject(error);
                    }
                }));
            }
        };
        function Message_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class Message {
            constructor(sender, target, type) {
                Message_defineProperty(this, "sender", void 0), Message_defineProperty(this, "target", void 0), 
                Message_defineProperty(this, "type", void 0), this.sender = sender, this.target = target, 
                this.type = type;
            }
        }
        class ClientMessage extends Message {
            constructor(sender, target, type) {
                var obj, key, value;
                super(sender, target, type), value = void 0, (key = "_type") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this._type = type;
            }
        }
        let ClientMessageType, BackgroundMessageType, ChatApiMessageType, SessionState, PlaybackState, VideoApiMessageType;
        !function(ClientMessageType) {
            ClientMessageType.BROADCAST = "brodadcast", ClientMessageType.BROADCAST_NEXT_EPISODE = "broadcastNextEpisode", 
            ClientMessageType.SEND_MESSAGE = "sendMessage", ClientMessageType.CONTENT_SCRIPT_READY = "contentScriptReady", 
            ClientMessageType.CONTENT_SCRIPT_ERROR = "contentScriptError", ClientMessageType.TEARDOWN = "teardown", 
            ClientMessageType.GET_SESSION_DATA = "getSessionData", ClientMessageType.SET_TYPING = "setTyping", 
            ClientMessageType.SET_BUFFERING = "setBuffering", ClientMessageType.SET_WATCHING_ADS = "setWatchingAds", 
            ClientMessageType.BROADCAST_USER_SETTINGS = "brodadcastUserSettings";
        }(ClientMessageType || (ClientMessageType = {}));
        class GetSessionDataMessage extends ClientMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, ClientMessageType.GET_SESSION_DATA), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        function CSMessageReceiver_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        !function(BackgroundMessageType) {
            BackgroundMessageType.JOIN_SESSION = "joinSession", BackgroundMessageType.GET_VIDEO_DATA = "getVideoData", 
            BackgroundMessageType.LOAD_SESSION = "loadSession", BackgroundMessageType.NO_SESSION_DATA = "noSessionData", 
            BackgroundMessageType.TEARDOWN = "teardown", BackgroundMessageType.ON_VIDEO_UPDATE = "onVideoUpdate", 
            BackgroundMessageType.SOCKET_LOST_CONNECTION = "socketLostConnection", BackgroundMessageType.REBOOT = "socketReconnect", 
            BackgroundMessageType.LOG_EVENT = "logEvent", BackgroundMessageType.LOG_EXPERIMENT = "logExpirement";
        }(BackgroundMessageType || (BackgroundMessageType = {}));
        class CSMessageReceiver {
            constructor() {
                CSMessageReceiver_defineProperty(this, "_messageListeners", void 0), CSMessageReceiver_defineProperty(this, "_messageReceiver", this._onReceiveMesssage.bind(this)), 
                this._messageListeners = [], this._registerMessageListener();
            }
            addMessageListener(listener) {
                this._messageListeners.push(listener);
            }
            removeMessageListener(listener) {
                this._messageListeners = this._messageListeners.filter((value => {}));
            }
            _registerMessageListener() {
                Messaging_MessagePasser.addListener(this._messageReceiver);
            }
            teardown() {
                this._messageListeners = [], Messaging_MessagePasser.removeListener(this._messageReceiver);
            }
            _onReceiveMesssage(message, sender, sendResponse) {
                if (!this._shouldListenToMessage(message)) return !1;
                return !!this._doesListenerHandleMessage(message, sender, sendResponse) || (sendResponse({}), 
                !1);
            }
            _shouldListenToMessage(message) {
                return "Content_Script" === message.target && ("Service_Background" === message.sender || "Popup" === message.sender);
            }
            _teardown(teardownMessage, sender) {
                Messaging_MessagePasser.removeListener(this._onReceiveMesssage), this._messageListeners.forEach((listener => {
                    listener.onMessage(teardownMessage, sender, (() => null));
                })), this._messageListeners = [];
            }
            _doesListenerHandleMessage(message, sender, sendResponse) {
                let willSendResponse = !1;
                return this._messageListeners.forEach((listener => {
                    listener.onMessage(message, sender, sendResponse) && (willSendResponse = !0);
                })), willSendResponse;
            }
        }
        function ChatMessageForwarder_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        !function(ChatApiMessageType) {
            ChatApiMessageType.INIT_CHAT = "initChat", ChatApiMessageType.ON_MESSAGE = "onMessage", 
            ChatApiMessageType.ON_BUFFER = "onBuffer", ChatApiMessageType.ON_TYPING = "onTyping", 
            ChatApiMessageType.ON_WATCHING_ADS = "onWatchingAds", ChatApiMessageType.UPDATE_SETTINGS = "updateSettings";
        }(ChatApiMessageType || (ChatApiMessageType = {}));
        class ChatMessageForwarder {
            constructor(chatApi, browseScript) {
                ChatMessageForwarder_defineProperty(this, "_chatApi", void 0), ChatMessageForwarder_defineProperty(this, "_browseScript", void 0), 
                this._chatApi = chatApi, this._browseScript = browseScript, debug("Chat forwarder");
            }
            onMessage(message, sender, sendResponse) {
                switch (message.type) {
                  case BackgroundMessageType.LOAD_SESSION:
                    {
                        const loadMessage = message;
                        return this._onLoadSession(loadMessage.data), !1;
                    }

                  case ChatApiMessageType.ON_MESSAGE:
                    {
                        const chatMessage = message;
                        return this._onMessage(chatMessage), !1;
                    }

                  case ChatApiMessageType.ON_BUFFER:
                    {
                        const bufferMessage = message;
                        return this._onBuffer(bufferMessage), !1;
                    }

                  case ChatApiMessageType.ON_TYPING:
                    {
                        const typingMessage = message;
                        return this._onTyping(typingMessage), !1;
                    }

                  case ChatApiMessageType.ON_WATCHING_ADS:
                    {
                        const watchingAdsMessage = message;
                        return this._onWatchingAds(watchingAdsMessage), !1;
                    }

                  case ChatApiMessageType.UPDATE_SETTINGS:
                    {
                        const updateSettingsMessage = message;
                        return this._onUpdateSettings(updateSettingsMessage), !1;
                    }

                  case PopupMessageType.SET_CHAT_VISIBLE:
                    {
                        const visibleMessage = message;
                        return this._setChatVisible(visibleMessage.data), this._browseScript.setChatButtons(), 
                        sendResponse(), !1;
                    }

                  default:
                    return !1;
                }
            }
            teardown() {
                this._chatApi.teardown();
            }
            _setChatVisible(data) {
                this._chatApi.setChatVisible(data.visible);
            }
            _onLoadSession(data) {
                const sessionId = data.sessionCallbackData.sessionId, partyUrl = `https://redirect.teleparty.com/join/${sessionId}`;
                if (this._chatApi.setPartyUrl(partyUrl), this._chatApi.setSessionId(sessionId), 
                this._chatApi._initChat(data.storageData), data.showReviewMessage && this._chatApi.addReviewMessage(), 
                !data.isCreate) for (const message of data.sessionCallbackData.messages) this._chatApi.addMessage(message, !0);
            }
            _onMessage(message) {
                this._chatApi.addMessage(message.data);
            }
            _onBuffer(message) {
                this._chatApi.onBufferingMessage(message.data);
            }
            _onTyping(message) {
                this._chatApi.onTypingMessage(message.data);
            }
            _onWatchingAds(message) {
                this._chatApi.onWatchingAdsMessage(message.data);
            }
            _onUpdateSettings(message) {
                this._chatApi.onUpdateSettingsMessage(message.data);
            }
        }
        !function(SessionState) {
            SessionState.PAUSED = "paused", SessionState.PLAYING = "playing";
        }(SessionState || (SessionState = {})), function(PlaybackState) {
            PlaybackState.LOADING = "loading", PlaybackState.PLAYING = "playing", PlaybackState.IDLE = "idle", 
            PlaybackState.AD_PLAYING = "ad_playing", PlaybackState.PAUSED = "paused", PlaybackState.NOT_READY = "not_ready";
        }(PlaybackState || (PlaybackState = {})), function(VideoApiMessageType) {
            VideoApiMessageType.UPDATE_SESSION = "updateSession", VideoApiMessageType.NEXT_EPISODE = "nextEpisode", 
            VideoApiMessageType.REBOOT_SESSION = "rebootSession", VideoApiMessageType.GET_SERVER_TIME = "getServerTime";
        }(VideoApiMessageType || (VideoApiMessageType = {}));
        class BroadcastMessage extends ClientMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, ClientMessageType.BROADCAST), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        class BackgroundMessage extends Message {
            constructor(sender, target, type) {
                var obj, key, value;
                super(sender, target, type), value = void 0, (key = "type") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.type = type;
            }
        }
        class TeardownMessage extends BackgroundMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, BackgroundMessageType.TEARDOWN), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        class VideoApiMessage extends Message {
            constructor(sender, target, type) {
                var obj, key, value;
                super(sender, target, type), value = void 0, (key = "type") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.type = type;
            }
        }
        class GetServerTimeMessage extends VideoApiMessage {
            constructor(sender, target) {
                super(sender, target, VideoApiMessageType.GET_SERVER_TIME);
            }
        }
        class BroadcastNextEpisodeMessage extends ClientMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, ClientMessageType.BROADCAST_NEXT_EPISODE), value = void 0, 
                (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        class SetBufferingMessage extends ClientMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, ClientMessageType.SET_BUFFERING), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        class SetWatchingAdsMessage extends ClientMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, ClientMessageType.SET_WATCHING_ADS), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        class LogEventMessage extends BackgroundMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, BackgroundMessageType.LOG_EVENT), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        function VideoMessageForwarder_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class VideoMessageForwarder {
            constructor(videoApi, videoEventListener) {
                VideoMessageForwarder_defineProperty(this, "_videoApi", void 0), VideoMessageForwarder_defineProperty(this, "_videoEventListener", void 0), 
                VideoMessageForwarder_defineProperty(this, "_sessionId", void 0), VideoMessageForwarder_defineProperty(this, "_serverState", void 0), 
                VideoMessageForwarder_defineProperty(this, "_lastKnownServerTime", void 0), VideoMessageForwarder_defineProperty(this, "_lastKnownServerTimeUpdatedAt", void 0), 
                VideoMessageForwarder_defineProperty(this, "_syncInterval", void 0), VideoMessageForwarder_defineProperty(this, "_pingInterval", void 0), 
                VideoMessageForwarder_defineProperty(this, "_videoId", void 0), VideoMessageForwarder_defineProperty(this, "_stremingServiceName", void 0), 
                VideoMessageForwarder_defineProperty(this, "_roundTripTimeRecent", []), VideoMessageForwarder_defineProperty(this, "_roundTripTimeMedian", 0), 
                VideoMessageForwarder_defineProperty(this, "_localTimeMinusServerTimeMedian", 0), 
                VideoMessageForwarder_defineProperty(this, "_localTimeMinusServerTimeRecent", []), 
                VideoMessageForwarder_defineProperty(this, "_changingVideo", void 0), VideoMessageForwarder_defineProperty(this, "_lastSentVideoId", void 0), 
                VideoMessageForwarder_defineProperty(this, "_selfWatchingAds", !1), VideoMessageForwarder_defineProperty(this, "_videoChangeStartTime", void 0), 
                VideoMessageForwarder_defineProperty(this, "_lastUpdateEventTime", void 0), VideoMessageForwarder_defineProperty(this, "_watchingAds", !1), 
                VideoMessageForwarder_defineProperty(this, "_hostOnly", !1), this._videoApi = videoApi, 
                this._videoEventListener = videoEventListener, this._videoEventListener.setMessageForwarder(this), 
                this._videoChangeStartTime = 0, this._changingVideo = !1, this._serverState = SessionState.PAUSED, 
                this._lastKnownServerTime = 0, this._lastKnownServerTimeUpdatedAt = 0, this._lastUpdateEventTime = 0, 
                this._stremingServiceName = this._videoApi.getStreamingServiceName(), debug("Video forwarder");
            }
            onMessage(message, sender, sendResponse) {
                switch (message.type) {
                  case BackgroundMessageType.GET_VIDEO_DATA:
                    return this._sendVideoDataAsync(sendResponse), !0;

                  case BackgroundMessageType.LOAD_SESSION:
                    {
                        const loadSessionMessage = message;
                        return this._loadSessionDataAsync(loadSessionMessage.data), !1;
                    }

                  case VideoApiMessageType.UPDATE_SESSION:
                    {
                        const updateSessionMessage = message;
                        return this._updateSessionData(updateSessionMessage.data), !1;
                    }

                  case VideoApiMessageType.NEXT_EPISODE:
                    {
                        const nextEpisodeMessage = message;
                        return this._onNextEpisodeAsync(nextEpisodeMessage.data), !1;
                    }

                  case VideoApiMessageType.REBOOT_SESSION:
                    {
                        const rebootMessage = message;
                        return this._doReboot(rebootMessage.data, sendResponse), !0;
                    }

                  case ChatApiMessageType.ON_WATCHING_ADS:
                    {
                        const watchingAdsMessage = message;
                        return this._onWatchingAds(watchingAdsMessage), !1;
                    }

                  default:
                    return !1;
                }
            }
            _onWatchingAds(message) {
                message.data.anyoneWatchingAds && !this._watchingAds && (TaskManager_TaskManager.pushTask(this._videoApi.doAdCheck.bind(this._videoApi)), 
                this.forceSync()), this._watchingAds = message.data.anyoneWatchingAds;
            }
            get videoId() {
                return this._videoId;
            }
            set videoId(value) {
                this._videoId = value;
            }
            sendTeardown(data) {
                const teardownMessage = new TeardownMessage("Content_Script", "Service_Background", data);
                Messaging_MessagePasser.sendMessageToExtension(teardownMessage);
            }
            teardown() {
                this._sessionId = void 0, this._syncInterval && clearInterval(this._syncInterval), 
                TaskManager_TaskManager.disable(), this._videoEventListener.stopListening();
            }
            _doReboot(rebootSessionData, sendResponse) {
                TaskManager_TaskManager.resetTasks(), this._videoId == rebootSessionData.videoId && this._updateSessionData(rebootSessionData), 
                sendResponse(this._videoId == rebootSessionData.videoId);
                const logReconnect = new LogEventMessage("Content_Script", "Service_Background", {
                    eventType: "reboot",
                    sessionId: this._sessionId
                });
                Messaging_MessagePasser.sendMessageToExtension(logReconnect);
            }
            tryBroadcast() {
                let waitForChange = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this._selfWatchingAds || (this._hostOnly ? this.forceSync() : 0 != this._videoApi.uiEventsHappening || this._changingVideo || !this._sessionId || TaskManager_TaskManager.hasTaskInQueue("BROADCAST") || (console.log("Push broadcast"), 
                TaskManager_TaskManager.pushTask((() => this._broadcastAsync(waitForChange)), "BROADCAST")));
            }
            setBuffering(buffering) {
                if (this._sessionId) {
                    const setBufferingMessage = new SetBufferingMessage("Content_Script", "Service_Background", {
                        buffering
                    });
                    Messaging_MessagePasser.sendMessageToExtension(setBufferingMessage);
                }
            }
            isWatchingAds() {
                return this._selfWatchingAds;
            }
            setWatchingAds(watchingAds) {
                if (this._sessionId) {
                    this._selfWatchingAds = watchingAds;
                    const setWatchingAdsMessage = new SetWatchingAdsMessage("Content_Script", "Service_Background", {
                        watchingAds
                    });
                    Messaging_MessagePasser.sendMessageToExtension(setWatchingAdsMessage);
                }
            }
            async sendNextEpisodeAsync(nextEpisodeId) {
                if (this._sessionId && nextEpisodeId !== this._videoId && nextEpisodeId !== this._lastSentVideoId) {
                    this._lastSentVideoId = nextEpisodeId, this._changingVideo = !0;
                    const nextEpisodeMessage = new BroadcastNextEpisodeMessage("Content_Script", "Service_Background", {
                        nextEpisode: nextEpisodeId
                    }), response = await Messaging_MessagePasser.sendMessageToExtension(nextEpisodeMessage);
                    response && "Locked Session" === response.errorMessage && await this._waitTillEpisodeChangesAsync(nextEpisodeId);
                }
            }
            async _waitTillEpisodeChangesAsync(nextEpisodeId) {
                try {
                    await delayUntil((() => nextEpisodeId == this._videoId), 1e4)(), this._changingVideo = !1;
                } catch (error) {
                    const tearDownData = {
                        showAlert: !0,
                        alertModal: ownerOnlyNextEpisodeModal
                    };
                    this.sendTeardown(tearDownData);
                }
            }
            async _shouldSendBroadcast(data) {
                if (null == data.lastKnownTime || null == data.lastKnownTimeUpdatedAt || null == data.state) return !1;
                const dif = Math.abs(data.lastKnownTime - this._getCurrentServerTime());
                return !(data.state == this._serverState && dif < 1e3) && (dif >= 1e3 && this._stremingServiceName == StreamingServiceName.AMAZON && await delay(200)(), 
                !0);
            }
            async _getUpdateMessageForVideoStateAsync() {
                const updateSessionData = await this._videoApi.getUpdateSessionDataAsync();
                updateSessionData.lastKnownTimeUpdatedAt -= this._localTimeMinusServerTimeMedian;
                return new BroadcastMessage("Content_Script", "Service_Background", updateSessionData);
            }
            forceSync() {
                TaskManager_TaskManager.pushTask(this._sync.bind(this));
            }
            async _onNextEpisodeAsync(nextEpisodeMessageData) {
                this._videoChangeStartTime = Date.now(), TaskManager_TaskManager.pushTask((() => this._continueNextEpisodeAsync(nextEpisodeMessageData)));
            }
            async _continueNextEpisodeAsync(nextEpisodeMessageData) {
                try {
                    debug("Continue next episode called"), this._changingVideo = !0, await this._videoApi.jumpToNextEpisode(nextEpisodeMessageData), 
                    await this._videoEventListener.loadNewVideoAsync(nextEpisodeMessageData.videoId), 
                    debug("After load new video"), this._videoEventListener.reloadListeners(), this._lastUpdateEventTime < this._videoChangeStartTime && (debug("Sending broadcast after next episode"), 
                    TaskManager_TaskManager.pushTask(this._broadcastAsync.bind(this), "BROADCAST")), 
                    this._videoId = nextEpisodeMessageData.videoId, this._changingVideo = !1;
                } catch (error) {
                    const teardownMessage = new TeardownMessage("Content_Script", "Service_Background", {
                        showAlert: !0,
                        alertModal: failedNextEpisodeModal
                    });
                    Messaging_MessagePasser.sendMessageToExtension(teardownMessage);
                }
            }
            _updateSessionData(data) {
                this._lastUpdateEventTime = Date.now(), TaskManager_TaskManager.pushTask(this._receiveSessionData(data).bind(this));
            }
            _receiveSessionData(data) {
                return this._serverState = data.state, this._lastKnownServerTime = data.lastKnownTime, 
                this._lastKnownServerTimeUpdatedAt = data.lastKnownTimeUpdatedAt, this._sync;
            }
            async _sendVideoDataAsync(sendResponse) {
                sendResponse(await this._videoApi.getVideoDataAsync());
            }
            async _waitForChange() {
                return new Promise((resolve => {
                    const start = performance.now(), checkForChange = async () => {
                        if (performance.now() - start >= 2500) resolve(!1); else {
                            const updateMessage = await this._getUpdateMessageForVideoStateAsync();
                            await this._shouldSendBroadcast(updateMessage.data) ? resolve(!0) : setTimeout((() => {
                                checkForChange();
                            }), 50);
                        }
                    };
                    checkForChange();
                }));
            }
            async _broadcastAsync() {
                let waitForChange = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (this._changingVideo) return;
                if (this._hostOnly) return void this.forceSync();
                const updateMessage = await this._getUpdateMessageForVideoStateAsync();
                if (await this._shouldSendBroadcast(updateMessage.data)) await this._sendBroadcastMessage(updateMessage); else if (waitForChange) {
                    if (await this._waitForChange()) {
                        const newUpdateMessage = await this._getUpdateMessageForVideoStateAsync();
                        await this._sendBroadcastMessage(newUpdateMessage);
                    }
                }
            }
            async _sendBroadcastMessage(updateMessage) {
                if (this._changingVideo) return;
                const oldState = this._serverState;
                if (updateMessage.data.bufferingState) {
                    updateMessage.data.state = SessionState.PAUSED, await Messaging_MessagePasser.sendMessageToExtension(updateMessage), 
                    await this._videoApi.waitVideoDoneLoadingAsync();
                    const newUpdateMessage = await this._getUpdateMessageForVideoStateAsync();
                    newUpdateMessage.data.bufferingState = !0, oldState == SessionState.PLAYING && (newUpdateMessage.data.state = SessionState.PLAYING), 
                    await Messaging_MessagePasser.sendMessageToExtension(newUpdateMessage);
                } else await Messaging_MessagePasser.sendMessageToExtension(updateMessage);
            }
            async _loadSessionDataAsync(loadSessionData) {
                const sessionData = loadSessionData.sessionCallbackData;
                this._sessionId = sessionData.sessionId, this._serverState = sessionData.state, 
                this._lastKnownServerTime = Number(sessionData.lastKnownTime), this._lastKnownServerTimeUpdatedAt = Number(sessionData.lastKnownTimeUpdatedAt), 
                this._videoId = sessionData.videoId, this._watchingAds = !1, sessionData.ownerId && (this._hostOnly = !0), 
                loadSessionData.isCreate ? TaskManager_TaskManager.pushTask(this._broadcastAsync.bind(this), "BROADCAST") : this.forceSync(), 
                this._videoEventListener.startListening(), this._setupSyncInterval();
            }
            _ping() {
                return new Promise((resolve => {
                    const getServerTimeMessage = new GetServerTimeMessage("Content_Script", "Service_Background"), startTime = Date.now();
                    Messaging_MessagePasser.sendMessageToExtension(getServerTimeMessage).then((response => {
                        const now = Date.now();
                        if (response) {
                            const serverTime = response.serverTime;
                            serverTime && (shove(this._roundTripTimeRecent, now - startTime, 5), this._roundTripTimeMedian = median(this._roundTripTimeRecent), 
                            shove(this._localTimeMinusServerTimeRecent, now - Math.round(this._roundTripTimeMedian / 2) - serverTime, 5), 
                            this._localTimeMinusServerTimeMedian = median(this._localTimeMinusServerTimeRecent));
                        }
                    })).catch((error => {
                        debug(error);
                    })), resolve();
                }));
            }
            _setupSyncInterval() {
                this._syncInterval && clearInterval(this._syncInterval), this._syncInterval = setInterval((() => {
                    0 == TaskManager_TaskManager.tasksInFlight && TaskManager_TaskManager.pushTask(this._sync.bind(this));
                }), 5e3), this._pingInterval = setInterval((() => {
                    TaskManager_TaskManager.hasTaskInQueue("PING") || TaskManager_TaskManager.pushTask(this._ping.bind(this), "PING");
                }), 12500), this._ping();
            }
            _shouldCancelSync() {
                return !this._sessionId || this._videoApi.uiEventsHappening > 0 || this._selfWatchingAds || this._changingVideo || !this._videoEventListener.shouldSync();
            }
            async _sync() {
                if (this._shouldCancelSync()) return;
                if (await this._videoApi.waitVideoDoneLoadingAsync(), this._shouldCancelSync()) return;
                const videoState = await this._videoApi.getStateAsync();
                this._serverState == SessionState.PAUSED ? await this._checkPaused(videoState) : this._serverState == SessionState.PLAYING && await this._checkPlaying(videoState);
            }
            async _checkPaused(videoState) {
                const {playbackState, playbackPositionMilliseconds} = videoState;
                playbackState !== PlaybackState.PAUSED && await this._videoApi.pause(), Math.abs(this._lastKnownServerTime - playbackPositionMilliseconds) > 2500 && await this._videoApi.setCurrentTime(this._lastKnownServerTime);
            }
            async _checkPlaying(videoState) {
                const {playbackState, playbackPositionMilliseconds} = videoState, serverTime = this._getCurrentServerTime();
                playbackState == PlaybackState.PAUSED && await this._videoApi.play(), Math.abs(serverTime - playbackPositionMilliseconds) > 2500 && (await this._videoApi.setCurrentTime(serverTime), 
                await this._videoApi.play());
            }
            _getServerTimeLapsed() {
                return this._serverState === SessionState.PLAYING ? Date.now() - (this._lastKnownServerTimeUpdatedAt + this._localTimeMinusServerTimeMedian) : 0;
            }
            _getCurrentServerTime() {
                return this._lastKnownServerTime + this._getServerTimeLapsed();
            }
            get changingVideo() {
                return this._changingVideo;
            }
            set changingVideo(changing) {
                this._changingVideo = changing;
            }
        }
        const ChromeStorageReadError = "Failed to read chrome storage. Please refresh the page and try again", GenericErrorMessage = "An unexpected error occured. Please refresh the page and try again.";
        function ContentScript_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        function VideoApi_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        const ChromeStorageReader = new class {
            async getItemsAsync(items) {
                return new Promise(((resolve, reject) => {
                    chrome.storage.local.get(items, (result => {
                        chrome.runtime.lastError ? reject(new Error(ChromeStorageReadError)) : resolve(result);
                    }));
                }));
            }
            async getAllItemsAsync() {
                return new Promise(((resolve, reject) => {
                    chrome.storage.local.get(null, (result => {
                        chrome.runtime.lastError ? reject(new Error(ChromeStorageReadError)) : resolve(result);
                    }));
                }));
            }
        };
        Object.freeze(ChromeStorageReader);
        const ChromeStorage_ChromeStorageReader = ChromeStorageReader;
        const ChromeStorageWriter = new class {
            async setItemsAsync(items) {
                return new Promise(((resolve, reject) => {
                    chrome.storage.local.set(items, (() => {
                        chrome.runtime.lastError ? reject(new Error("Failed to write to chrome storage. Please refresh the page and try again")) : resolve();
                    }));
                }));
            }
        };
        Object.freeze(ChromeStorageWriter);
        const ChromeStorage_ChromeStorageWriter = ChromeStorageWriter;
        const SessionMap = new class {
            async getRedirectDataForTabAsync(tabId) {
                const redirectDataMap = (await ChromeStorage_ChromeStorageReader.getItemsAsync([ "redirectDataMap" ])).redirectDataMap, sessionDataKey = this._getKeyForSessionData(tabId);
                if (redirectDataMap && redirectDataMap[sessionDataKey]) {
                    const redirectData = redirectDataMap[sessionDataKey];
                    if (this._isRedirectDataValid(redirectData)) return redirectData;
                }
            }
            async deleteRedirectDataForTabAsync(tabId) {
                const redirectDataMap = (await ChromeStorage_ChromeStorageReader.getItemsAsync([ "redirectDataMap" ])).redirectDataMap, redirectDataKey = this._getKeyForSessionData(tabId);
                redirectDataMap && redirectDataMap[redirectDataKey] && delete redirectDataMap[redirectDataKey], 
                await ChromeStorage_ChromeStorageWriter.setItemsAsync({
                    redirectDataMap
                });
            }
            _getKeyForSessionData(tabId) {
                return tabId;
            }
            filterPhaseScriptData(phaseData) {
                return this._removeInvalidSessionDataInMap(phaseData);
            }
            async storeRedirectDataForTabAsync(redirectData, tabId) {
                const dataKey = this._getKeyForSessionData(tabId);
                let redirectDataMap = await ChromeStorage_ChromeStorageReader.getItemsAsync([ "redirectDataMap" ]);
                redirectDataMap[dataKey] = redirectData, redirectDataMap = this._removeInvalidSessionDataInMap(redirectDataMap), 
                await ChromeStorage_ChromeStorageWriter.setItemsAsync({
                    redirectDataMap
                });
            }
            _removeInvalidSessionDataInMap(sessionMap) {
                return function(obj, predicate) {
                    const result = {};
                    let key;
                    for (key in obj) obj.hasOwnProperty(key) && predicate(obj[key]) && (result[key] = obj[key]);
                    return result;
                }(sessionMap, this._isRedirectDataValid);
            }
            _isRedirectDataValid(redirectData) {
                const storedDate = redirectData.date;
                return void 0 !== storedDate && "number" == typeof storedDate && storedDate <= Date.now() && Date.now() - storedDate < 108e5;
            }
        };
        Object.freeze(SessionMap);
        const ChromeStorage_SessionMap = SessionMap;
        function HboMaxVideoApi_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class HboMaxVideoApi extends class {
            constructor() {
                VideoApi_defineProperty(this, "_uiEventsHappening", 0), VideoApi_defineProperty(this, "_hostOnly", !1);
            }
            set hostOnly(hostOnly) {
                this._hostOnly = hostOnly;
            }
            get hostOnly() {
                return this._hostOnly;
            }
            get uiEventsHappening() {
                return this._uiEventsHappening;
            }
            async doAdCheck() {}
        } {
            constructor() {
                var _this$_getVideoTitle;
                super(), HboMaxVideoApi_defineProperty(this, "_playEvent", void 0), HboMaxVideoApi_defineProperty(this, "_pauseEvent", void 0), 
                HboMaxVideoApi_defineProperty(this, "_playCheckRunning", !1), HboMaxVideoApi_defineProperty(this, "_getPlayItemEvent", new CustomEvent("tpVideoNode", {
                    detail: {
                        type: "getPlayItem"
                    }
                })), HboMaxVideoApi_defineProperty(this, "playItem", void 0), HboMaxVideoApi_defineProperty(this, "playItemUpdatedAt", void 0), 
                HboMaxVideoApi_defineProperty(this, "parseVideoId", void 0), HboMaxVideoApi_defineProperty(this, "markerUpdatedAt", void 0), 
                HboMaxVideoApi_defineProperty(this, "_videoId", void 0), HboMaxVideoApi_defineProperty(this, "videoIds", void 0), 
                HboMaxVideoApi_defineProperty(this, "videoTitle", void 0), HboMaxVideoApi_defineProperty(this, "_videoType", void 0), 
                HboMaxVideoApi_defineProperty(this, "videoTimeOffsetMillis", void 0), HboMaxVideoApi_defineProperty(this, "videoDuration", void 0), 
                HboMaxVideoApi_defineProperty(this, "_checkVideoDelay", 500), HboMaxVideoApi_defineProperty(this, "_videoEventListener", void 0), 
                this.videoIds = {}, this.markerUpdatedAt = 0, this.videoTitle = null !== (_this$_getVideoTitle = this._getVideoTitle()) && void 0 !== _this$_getVideoTitle ? _this$_getVideoTitle : "", 
                this._videoType = Services_HboMax.getVideoType(new URL(window.location.href)), this._playEvent = new CustomEvent("tpVideoNode", {
                    detail: {
                        type: "play"
                    }
                }), this._pauseEvent = new CustomEvent("tpVideoNode", {
                    detail: {
                        type: "pause"
                    }
                }), this._uiEventsHappening = 0, this.videoTimeOffsetMillis = 0, this.videoDuration = 0;
            }
            setVideoEventListener(videoEventListener) {
                this._videoEventListener = videoEventListener;
            }
            get videoType() {
                return this._videoType;
            }
            get playCheckRunning() {
                return this._playCheckRunning;
            }
            set playCheckRunning(value) {
                this._playCheckRunning = value;
            }
            async waitTillPromo() {
                return delayUntil((() => (window.dispatchEvent(this._getPlayItemEvent), this.playItem && "PROMO" === this.playItem.type)), 2500)();
            }
            _isVideoIdValid(videoId) {
                return "string" == typeof videoId && 21 === videoId.length && /^[a-zA-Z\-\_0-9]+$/.test(videoId);
            }
            episodeDataInteraction(event) {
                if (event.source == window && event.data.type && "EPISODE_ID" == event.data.type) {
                    if (event.data.videoIds) try {
                        this.videoIds = JSON.parse(event.data.videoIds);
                    } catch (e) {
                        debug("Parse Error");
                    }
                    event.data.videoId && (this.parseVideoId = event.data.videoId, this.markerUpdatedAt = Date.now());
                }
            }
            onNode(evt) {
                if ("PlayItem" == evt.detail.type) this.playItem = evt.detail.playItem, this.playItemUpdatedAt = evt.detail.updatedAt, 
                this.videoDuration = evt.detail.videoDuration; else if ("ManualClick" == evt.detail.type) {
                    const video = this.getVideoElement();
                    video && (this._clickAtProgress(video, .5, "mousedown"), this._clickAtProgress(video, .5, "mouseup"));
                }
            }
            removeVideoCover() {
                if (jQuery("[aria-label*='Choose language']").length) return !1;
                if (jQuery("[style*='btn_play_large_initial']").length && jQuery("[style*='btn_play_large_initial']").is(":visible")) jQuery("[style*='btn_play_large_initial']").addClass("startPlay"); else {
                    if (!jQuery("[style*='play_filled_univ']").length || !jQuery("[style*='play_filled_univ']").is(":visible")) return !1;
                    jQuery("[style*='play_filled_univ']").addClass("startPlay");
                }
                const startPlay = document.querySelector(".startPlay");
                return !!startPlay && (this._clickAtProgress(startPlay, .5, "mousedown"), this._clickAtProgress(startPlay, .5, "mouseup"), 
                !0);
            }
            loadVideoData() {
                var _this$_getVideoTitle2;
                this.videoTitle = null !== (_this$_getVideoTitle2 = this._getVideoTitle()) && void 0 !== _this$_getVideoTitle2 ? _this$_getVideoTitle2 : "", 
                this._videoType = Services_HboMax.getVideoType(new URL(window.location.href));
            }
            isVideoReady() {
                const state = this._getPlaybackState();
                return "paused" === state || "playing" === state;
            }
            async waitVideoApiReadyAsync() {
                var _window$teleparty$tab, _window$teleparty;
                const joiningSession = null != await ChromeStorage_SessionMap.getRedirectDataForTabAsync(null !== (_window$teleparty$tab = null === (_window$teleparty = window.teleparty) || void 0 === _window$teleparty ? void 0 : _window$teleparty.tabId) && void 0 !== _window$teleparty$tab ? _window$teleparty$tab : 0);
                await delayUntil((() => (joiningSession && this.removeVideoCover(), this._videoType = Services_HboMax.getVideoType(new URL(window.location.href)), 
                null != this.getVideoElement() && this._videoType !== HboVideoType.NONE)), 1 / 0, this._checkVideoDelay)(), 
                joiningSession && this.removeVideoCover(), await this.waitVideoIdReady(), await this.skipPromo(), 
                this.loadVideoData();
            }
            async waitVideoDoneLoadingAsync() {
                var _this$_videoEventList;
                null === (_this$_videoEventList = this._videoEventListener) || void 0 === _this$_videoEventList || _this$_videoEventList.checkWatchingAds();
                const video = this.getVideoElement();
                video && 1 === video.readyState && (this._clickAtProgress(video, .5, "mousedown"), 
                this._clickAtProgress(video, .5, "mouseup")), await delayUntil((() => this._getPlaybackState() !== PlaybackState.LOADING), 5e3)();
            }
            get videoId() {
                return this._videoId;
            }
            set videoId(value) {
                this._videoId = value;
            }
            checkUpdateId() {
                this.parseVideoId != this.videoId && (debug("Id change"), this.videoId = this.parseVideoId);
            }
            getStateAsync() {
                return new Promise(((resolve, reject) => {
                    const playbackState = this._getPlaybackState(), playbackPositionMilliseconds = this._getPlaybackPositionMiliseconds();
                    null != playbackState && null != playbackPositionMilliseconds ? resolve({
                        playbackState,
                        playbackPositionMilliseconds
                    }) : reject();
                }));
            }
            async triggerEpisodeId(attempts) {
                try {
                    const startTime = (new Date).getTime(), playEvent = new CustomEvent("tpVideoNode", {
                        detail: {
                            type: "trigger"
                        }
                    });
                    window.dispatchEvent(playEvent), await delayUntil((() => null != this.markerUpdatedAt && this.markerUpdatedAt > startTime || null == this.videoId && null != this.parseVideoId), 4e3)(), 
                    this.videoId = this.parseVideoId, console.log("Got Marker episode ID: " + this.videoId);
                } catch (e) {
                    if (!(attempts < 3)) throw new Error;
                    console.log("Attempting trigger again");
                    try {
                        await this.triggerEpisodeId(attempts + 1);
                    } catch (err) {
                        throw new Error;
                    }
                }
            }
            async waitVideoIdReady() {
                try {
                    if (void 0 === this.videoId || !this._isVideoIdValid(this.videoId)) {
                        const video = this.getVideoElement();
                        video && video.paused ? (await this.skipPromo(), await this.play(), await this.triggerEpisodeId(0), 
                        await this.pause()) : (await this.skipPromo(), await this.play(), await this.triggerEpisodeId(0));
                    }
                } catch (error) {
                    console.log("Give up and use request id"), this.videoId = this._getDefaultVideoId();
                }
            }
            async getVideoDataAsync() {
                var _this$videoId;
                await this.waitVideoIdReady(), this.loadVideoData();
                const videoDuration = this._getDuration();
                return {
                    videoTitle: this.videoTitle,
                    videoDuration: null != videoDuration ? videoDuration : 0,
                    videoId: null !== (_this$videoId = this.videoId) && void 0 !== _this$videoId ? _this$videoId : "",
                    videoType: this._videoType
                };
            }
            async jumpToNextEpisode(nextEpisodeMessageData) {
                if (this._uiEventsHappening += 1, this.videoId !== nextEpisodeMessageData.videoId) try {
                    debug("Attempting next episode click"), this.triggerNextEpisode();
                } catch (error) {
                    debug("Click next episode failed, but we will wait and see if the video changes in time. " + error);
                }
                this._uiEventsHappening -= 1;
            }
            async skipPromo() {}
            getStreamingServiceName() {
                return StreamingServiceName.HBO_MAX;
            }
            pause() {
                return new Promise(((resolve, reject) => {
                    debug("Attempting to pause"), this._uiEventsHappening += 1, (async () => {
                        try {
                            window.dispatchEvent(this._pauseEvent), await delayUntil((() => this._getPlaybackState() === PlaybackState.PAUSED), 1e3)(), 
                            resolve();
                        } catch (error) {
                            reject(error);
                        } finally {
                            this._uiEventsHappening -= 1;
                        }
                    })();
                }));
            }
            play() {
                return new Promise(((resolve, reject) => {
                    debug("Attempting to play"), this._uiEventsHappening += 1, (async () => {
                        try {
                            window.dispatchEvent(this._playEvent), await delayUntil((() => this._getPlaybackState() === PlaybackState.PLAYING), 1e3)(), 
                            resolve();
                        } catch (error) {
                            reject(error);
                        } finally {
                            this._uiEventsHappening -= 1;
                        }
                    })();
                }));
            }
            async freeze(milliseconds) {
                this._uiEventsHappening += 1;
                try {
                    await this.pause(), await delay(milliseconds)(), await this.play();
                } finally {
                    this._uiEventsHappening -= 1;
                }
            }
            async setCurrentTime(time) {
                debug("Seek called", !0), this._uiEventsHappening += 1;
                const originalSeekTime = time;
                try {
                    const video = this.getVideoElement();
                    if (video) {
                        const originalPosition = this._getPlaybackPositionMiliseconds();
                        (time += this.videoTimeOffsetMillis) < 0 && (time = originalSeekTime), video.currentTime = time / 1e3, 
                        await delayUntil((() => Math.abs(originalPosition - this._getPlaybackPositionMiliseconds()) > 2500), 5e3)(), 
                        1 != video.readyState && await delayUntil((() => this._getPlaybackState() !== PlaybackState.LOADING), 5e3)();
                    }
                } catch (error) {}
                Math.abs(originalSeekTime - this._getPlaybackPositionMiliseconds()) > 2500 && await this.setCurrentTime(originalSeekTime), 
                this._uiEventsHappening -= 1;
            }
            _getDuration() {
                return this.videoDuration;
            }
            _getTextTime() {
                let text;
                return document.querySelectorAll("[aria-label*='/']").forEach((element => {
                    void 0 === element.attributes.style && (text = element.outerText);
                })), text;
            }
            _parseTextTimeSeconds(duration) {
                const textTime = this._getTextTime();
                let parsedTextTime = 0;
                if (textTime) {
                    const textSplit = textTime.split(" /")[duration ? 1 : 0].split(":");
                    3 === textSplit.length ? (parsedTextTime += 3600 * Number(textSplit[0]), parsedTextTime += 60 * Number(textSplit[1]), 
                    parsedTextTime += Number(textSplit[2])) : 2 === textSplit.length ? (parsedTextTime += 60 * Number(textSplit[0]), 
                    parsedTextTime += Number(textSplit[1])) : parsedTextTime += Number(textSplit[0]);
                }
                return parsedTextTime;
            }
            _getPlaybackPositionMiliseconds() {
                const video = this.getVideoElement(), parsedTextTime = this._parseTextTimeSeconds(!1);
                return video ? (parsedTextTime > 0 && (this.videoTimeOffsetMillis = 1e3 * Math.floor((null == video ? void 0 : video.currentTime) - parsedTextTime)), 
                Math.floor(1e3 * video.currentTime - this.videoTimeOffsetMillis)) : 0;
            }
            getVideoElement() {
                return document.querySelector("video");
            }
            _getPlaybackState() {
                const video = this.getVideoElement();
                return null === video || "" === video.src ? PlaybackState.NOT_READY : video.readyState < 4 ? PlaybackState.LOADING : video.paused ? PlaybackState.PAUSED : PlaybackState.PLAYING;
            }
            _getVideoTitle() {
                try {
                    const titleWrapper = document.querySelector('[role="heading"]');
                    return null == titleWrapper ? void 0 : titleWrapper.innerText;
                } catch (e) {
                    return;
                }
            }
            tryUpdateVideoTitle() {
                const currentTitle = this._getVideoTitle();
                return null != currentTitle && currentTitle !== this.videoTitle && (debug("New current Title: " + currentTitle), 
                this.videoTitle = currentTitle, !0);
            }
            async updateVideoId() {
                debug("Trying to update Video iD");
                try {
                    await delayUntil((() => this.parseVideoId != this.videoId && (this.videoId = this.parseVideoId, 
                    !0)), 1e4)(), debug("UPDATED VIDEO ID: " + this.videoTitle + "|" + this.videoId);
                } catch (e) {
                    throw new Error("Couldn't get new videoId in time.");
                }
            }
            _getDefaultVideoId() {
                return Services_HboMax.getVideoId(new URL(window.location.href));
            }
            triggerNextEpisode() {
                const videoElement = this.getVideoElement();
                if (null === videoElement) throw new Error("Video element not found.");
                debug("TRIGGERING NEXT EPISODE"), videoElement.currentTime = videoElement.duration;
            }
            showControls() {
                this._uiEventsHappening += 1, jQuery("video").addClass("videoObject");
                const videoObject = document.querySelector(".videoObject");
                if (videoObject) {
                    var _windowJquery$scrollL, _windowJquery$scrollT, _windowJquery$scrollL2, _windowJquery$scrollT2;
                    const mouseX = 100, mouseY = 100, windowJquery = jQuery(window), eventOptions = {
                        bubbles: !0,
                        button: 0,
                        screenX: mouseX - (null !== (_windowJquery$scrollL = windowJquery.scrollLeft()) && void 0 !== _windowJquery$scrollL ? _windowJquery$scrollL : 0),
                        screenY: mouseY - (null !== (_windowJquery$scrollT = windowJquery.scrollTop()) && void 0 !== _windowJquery$scrollT ? _windowJquery$scrollT : 0),
                        clientX: mouseX - (null !== (_windowJquery$scrollL2 = windowJquery.scrollLeft()) && void 0 !== _windowJquery$scrollL2 ? _windowJquery$scrollL2 : 0),
                        clientY: mouseY - (null !== (_windowJquery$scrollT2 = windowJquery.scrollTop()) && void 0 !== _windowJquery$scrollT2 ? _windowJquery$scrollT2 : 0),
                        offsetX: mouseX,
                        offsetY: mouseY,
                        pageX: mouseX,
                        pageY: mouseY,
                        currentTarget: videoObject
                    };
                    videoObject.dispatchEvent(new MouseEvent("mousemove", eventOptions));
                }
                this._uiEventsHappening -= 1;
            }
            _getSlider() {
                const slider = document.querySelector("[style*='slider']");
                if (slider && slider.parentElement && slider.parentElement.parentElement && slider.parentElement.parentElement.parentElement) return slider.parentElement.parentElement.parentElement;
            }
            _clickAtProgress(target, progress, eventType) {
                const {width, height, left, top} = target.getBoundingClientRect(), x = left + width * progress, y = top + height / 2, clickEvent = document.createEvent("MouseEvents");
                clickEvent.initMouseEvent(eventType, !0, !0, window, 0, 0, 0, x, y, !1, !1, !1, !1, 0, null), 
                target.dispatchEvent(clickEvent);
            }
            async getUpdateSessionDataAsync() {
                const currentTime = this._getPlaybackPositionMiliseconds();
                if (void 0 === currentTime) throw new Error;
                const video = this.getVideoElement();
                return {
                    state: video && !video.paused ? SessionState.PLAYING : SessionState.PAUSED,
                    lastKnownTime: currentTime,
                    lastKnownTimeUpdatedAt: Date.now()
                };
            }
        }
        function ChatEventListener_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class ChatEventListener {
            constructor(chatApi) {
                ChatEventListener_defineProperty(this, "_chatApi", void 0), ChatEventListener_defineProperty(this, "onFocus", this.onWindowFocus.bind(this)), 
                ChatEventListener_defineProperty(this, "_idleWarningTimeout", void 0), ChatEventListener_defineProperty(this, "_idleKickTimeout", void 0), 
                ChatEventListener_defineProperty(this, "_onReset", this.resetIdleTimer.bind(this)), 
                ChatEventListener_defineProperty(this, "_onFullScreenChange", this._onFullScreen.bind(this)), 
                this._chatApi = chatApi;
            }
            onIdleWarning() {
                debug("Idle Warning called"), showButtonMessage(idleWarningModal);
                const idleWarnMessage = new LogEventMessage("Content_Script", "Service_Background", {
                    eventType: "idle-warn-2hr",
                    sessionId: this._chatApi.getSessionId()
                });
                Messaging_MessagePasser.sendMessageToExtension(idleWarnMessage), this._idleKickTimeout = setTimeout(this.onIdleTimeout.bind(this), 6e4);
            }
            onIdleTimeout() {
                debug("Idle kick called");
                const logIdleKickMessage = new LogEventMessage("Content_Script", "Service_Background", {
                    eventType: "idle-kick-2hr",
                    sessionId: this._chatApi.getSessionId()
                }), teardownMessage = new TeardownMessage("Content_Script", "Service_Background", IDLE_TEARDOWN);
                Messaging_MessagePasser.sendMessageToExtension(logIdleKickMessage), Messaging_MessagePasser.sendMessageToExtension(teardownMessage);
            }
            resetIdleTimer() {
                this._idleWarningTimeout && clearTimeout(this._idleWarningTimeout), this._idleKickTimeout && (hideAlertMessages(), 
                clearTimeout(this._idleKickTimeout)), this._idleWarningTimeout = setTimeout(this.onIdleWarning.bind(this), 72e5);
            }
            setupIdleListeners() {
                this._idleWarningTimeout = setTimeout(this.onIdleWarning.bind(this), 72e5), window.onmousemove = e => {
                    e.isTrusted && this._onReset();
                }, window.onfocus = () => this._onReset(), window.onmousedown = () => this._onReset(), 
                window.ontouchstart = () => this._onReset(), window.onkeydown = () => this._onReset();
            }
            removeIdleListeners() {
                this._idleWarningTimeout && clearTimeout(this._idleWarningTimeout), this._idleKickTimeout && clearTimeout(this._idleKickTimeout), 
                window.onmousemove = null, window.onmousedown = null, window.ontouchstart = null, 
                window.onkeydown = null;
            }
            startListening() {
                debug("Listening for chat events"), this.setupIdleListeners(), this._initChatListeners();
            }
            stopListening() {
                this._removeChatListeners(), this.removeIdleListeners();
            }
            onWindowFocus() {
                this._chatApi.clearUnreadCount();
            }
            _initChatListeners() {
                jQuery(window).on("focus", this.onFocus), jQuery(".user-icon").on("click", this._chatApi.toggleLargeUserIconButton.bind(this._chatApi)), 
                jQuery("#user-icon").on("click", this._chatApi.toggleIconContainer.bind(this._chatApi)), 
                jQuery("#link-icon").on("click", this._chatApi.linkIconListener.bind(this._chatApi)), 
                jQuery(".image-button").on("click", this._chatApi.userIconSelectorListener.bind(this._chatApi)), 
                jQuery("#chat-input").on("keydown", this._chatApi.onChatKeyDown.bind(this._chatApi)), 
                jQuery("#nickname-edit").on("keydown", this._chatApi.onChatKeyDown.bind(this._chatApi)), 
                jQuery("#chat-input").on("keypress", this._chatApi.onChatKeyPress.bind(this._chatApi)), 
                jQuery("#saveChanges").on("click", this._chatApi.saveChangesListener.bind(this._chatApi)), 
                jQuery("#cancelNickname").on("click", this._chatApi.cancelNicknameListener.bind(this._chatApi)), 
                jQuery("#chat-input-container").on("click", this._chatApi.focusChat.bind(this._chatApi)), 
                jQuery("#chat-wrapper").on("mouseup", this._chatApi.onChatClicked.bind(this._chatApi)), 
                jQuery("#chat-wrapper").on("mousedown", this._chatApi.onChatClicked.bind(this._chatApi)), 
                jQuery("#chat-wrapper").on("keyup", this._chatApi.onChatKeyUp.bind(this._chatApi)), 
                document.addEventListener("fullscreenchange", this._onFullScreenChange), document.addEventListener("keydown", this.cancelEvent.bind(this), !0), 
                this._chatApi.initCustomListeners();
            }
            cancelEvent(e) {
                e.target !== jQuery("#chat-input")[0] && e.target !== jQuery("#nickname-edit")[0] || e.stopImmediatePropagation();
            }
            _onFullScreen() {
                this._chatApi.scrollToBottom();
            }
            _removeChatListeners() {
                jQuery(window).off("focus", this.onFocus), document.removeEventListener("fullscreenchange", this._onFullScreenChange), 
                jQuery(".user-icon").off(), jQuery("#user-icon").off(), jQuery("#link-icon").off(), 
                jQuery(".image-button").off(), jQuery("#chat-input").off(), jQuery("#saveChanges").off(), 
                jQuery("#cancelNickname").off(), jQuery("#chat-input-container").off(), jQuery("#chat-wrapper").off();
            }
        }
        class PresenceController {
            setupPresenceIndicator() {
                this._getPresenceIndicator().data("typing", !1), this._getPresenceIndicator().data("buffering", !1), 
                this._getPresenceIndicator().data("watchingAds", !1), this._setPresenceText();
            }
            _getPresenceIndicator() {
                return jQuery("#presence-indicator");
            }
            setTypingPresenceVisible(visible) {
                this._getPresenceIndicator().data("typing", visible), this._setPresenceText();
            }
            setBufferingPresenceVisible(visible) {
                this._getPresenceIndicator().data("buffering", visible), this._setPresenceText();
            }
            setWatchingAdsPresenceVisible(visible) {
                this._getPresenceIndicator().data("watchingAds", visible), this._setPresenceText();
            }
            getWatchingAdsVisible() {
                return this._getPresenceIndicator().data("watchingAds");
            }
            _setPresenceText() {
                const typing = this._getPresenceIndicator().data("typing"), buffering = this._getPresenceIndicator().data("buffering");
                this._getPresenceIndicator().data("watchingAds") ? this._getPresenceIndicator().text("People are watching ads...") : typing && buffering ? this._getPresenceIndicator().text("People are typing and buffering...") : typing ? this._getPresenceIndicator().text("People are typing...") : buffering ? this._getPresenceIndicator().text("People are buffering...") : this._getPresenceIndicator().text("");
            }
        }
        function ChatMessageController_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class MessageController {
            constructor(chatApi) {
                ChatMessageController_defineProperty(this, "_messages", void 0), ChatMessageController_defineProperty(this, "_unreadCount", void 0), 
                ChatMessageController_defineProperty(this, "_pageTitle", void 0), ChatMessageController_defineProperty(this, "_messagesCount", void 0), 
                ChatMessageController_defineProperty(this, "_userIcons", void 0), ChatMessageController_defineProperty(this, "_userNicknames", void 0), 
                ChatMessageController_defineProperty(this, "_iconsInUse", void 0), ChatMessageController_defineProperty(this, "_nicknamesInUse", void 0), 
                ChatMessageController_defineProperty(this, "_userIconUrl", void 0), ChatMessageController_defineProperty(this, "_chatApi", void 0), 
                this._chatApi = chatApi, this._messages = [], this._unreadCount = 0, this._pageTitle = document.title, 
                this._messagesCount = 0, this._userIcons = new Map, this._userNicknames = new Map, 
                this._nicknamesInUse = [], this._iconsInUse = [], this._userIconUrl = "", debug("Message Controller");
            }
            getMessageElementWithNickname(userIconUrl, userNickname, message) {
                return jQuery(`\n            <div class="msg-container">\n                <div class="icon-name">\n                    <div class="icon">\n                        <img src="${escapeStr(userIconUrl)}">\n                    </div>\n                </div>\n                <div class="msg-txt message${message.isSystemMessage ? "-system" : "-txt"}">\n                    <h3>${userNickname}</h3>\n                    <p>${message.body}</p>\n                </div>\n            </div>\n          `);
            }
            getMessageElementWithoutNickname(userIconUrl, message) {
                return jQuery(`\n            <div class="msg">\n                <div class="icon">\n                    <img src="${escapeStr(userIconUrl)}"/>\n                </div>\n                <div class="message${message.isSystemMessage ? "-system" : "-txt"}">\n                    <p class="msg-nickname"></p>\n                    <p>${message.body}</p>\n                </div>\n            </div>\n        `);
            }
            _addMessageToHistory(messageElement, message, userIconUrl, userNickname) {
                messageElement.appendTo(jQuery("#chat-history")), messageElement[0]._permId = message.permId, 
                messageElement[0]._userIcon = userIconUrl, messageElement[0]._userNickname = userNickname, 
                messageElement[0]._message = message;
            }
            reloadMessages() {
                const oldMessages = JSON.parse(JSON.stringify(this._messages));
                for (const message of oldMessages) this.addMessage(message, !1);
                this._messages = oldMessages;
            }
            addMessage(message, checkIcons) {
                if (message.isSystemMessage && "left" === message.body && (console.log("trying to add left message"), 
                !message.userIcon && !this._userIcons.has(message.permId))) return;
                checkIcons && message.isSystemMessage && message.body.indexOf("updated their user icon") > -1 && (message.userIcon && this.setUserIcon(message.permId, message.userIcon), 
                message.userNickname && this.setUserNickname(message.permId, message.userNickname)), 
                this._messages.push(message);
                const userIcon = message.userIcon ? this.getUserIconURL(message.permId, message.userIcon) : this.getUserIconURL(message.permId), userNickname = message.userNickname ? this.getUserNickname(message.permId, message.userNickname) : "";
                message.body = escapeStr(message.body);
                const messageElement = "" === userNickname ? this.getMessageElementWithoutNickname(userIcon, message) : this.getMessageElementWithNickname(userIcon, userNickname, message);
                this._addMessageToHistory(messageElement, message, userIcon, userNickname), this.scrollToBottom(), 
                this._increaseMessageCount();
            }
            scrollToBottom() {
                jQuery("#chat-history").scrollTop(jQuery("#chat-history").prop("scrollHeight"));
            }
            clearUnreadCount() {
                this._unreadCount > 0 && (this._unreadCount = 0, document.title = this._pageTitle);
            }
            _increaseMessageCount() {
                this._unreadCount += 1, this._messagesCount += 1, document.hasFocus() || (document.title = "(" + String(this._unreadCount) + ") " + this._pageTitle);
            }
            getUserIconURL(userId) {
                let userIcon = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                if (!this._userIcons.has(userId)) {
                    const parsedIconSrc = this._parseIconSrc(userIcon), iconURL = void 0 !== parsedIconSrc ? parsedIconSrc : this._getDefaultIconUrl();
                    this._userIcons.set(userId, iconURL), this._iconsInUse.push(iconURL);
                }
                return this._userIcons.get(userId);
            }
            _parseIconSrc(userIcon) {
                const newIcon = userIcon.includes("?newIconUrl=") ? userIcon.split("?newIconUrl=")[1] : userIcon, oldIcon = userIcon.includes("?newIconUrl=") ? userIcon.split("?newIconUrl=")[0] : userIcon;
                return newIcons.includes(newIcon) ? chrome.runtime.getURL("img/icons/" + userIcon) : oldIcons.includes(oldIcon) ? chrome.runtime.getURL("img/icons/General/" + userIcon) : void 0;
            }
            getUserNickname(userId) {
                let userNickname = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return this._userNicknames.has(userId) || (this._userNicknames.set(userId, userNickname), 
                this._nicknamesInUse.push(userNickname)), escapeStr(this._userNicknames.get(userId));
            }
            _getDefaultIconUrl() {
                let iconURL = chrome.runtime.getURL("img/icons/General/" + oldIcons[Math.floor(Math.random() * oldIcons.length)]);
                if (this._iconsInUse.length < iconMap.General.length) for (;this._iconsInUse.includes(iconURL); ) iconURL = chrome.runtime.getURL("img/icons/General/" + oldIcons[Math.floor(Math.random() * oldIcons.length)]);
                return iconURL;
            }
            _refreshMsgContainer(msgContainer) {
                const permId = msgContainer[0]._permId, userIcon = msgContainer[0]._userIcon;
                if (permId && userIcon && this.getUserIconURL(permId) !== permId) {
                    const userIcon = this.getUserIconURL(permId);
                    msgContainer.find("img").attr("src", userIcon), msgContainer[0]._userIcon = userIcon;
                }
                const msgNickname = msgContainer[0]._userNickname;
                if (permId && void 0 !== msgNickname) {
                    const userNickname = this.getUserNickname(permId);
                    if (userNickname !== msgNickname && void 0 !== userNickname) {
                        const message = msgContainer[0]._message, userIcon = this.getUserIconURL(permId), nicknameMessage = "" == userNickname ? this.getMessageElementWithoutNickname(msgContainer[0]._userIcon, message) : this.getMessageElementWithNickname(msgContainer[0]._userIcon, userNickname, message);
                        msgContainer.replaceWith(nicknameMessage), nicknameMessage[0]._permId = permId, 
                        nicknameMessage[0]._userIcon = userIcon, nicknameMessage[0]._userNickname = userNickname, 
                        nicknameMessage[0]._message = message;
                    }
                }
            }
            setUserIconUrl(userIconUrl) {
                this._userIconUrl = userIconUrl;
            }
            renderSidebar() {
                jQuery("#user-icon img").attr("src", this._userIconUrl), jQuery(".user-icon img").attr("src", this._userIconUrl);
                const msgs = jQuery(".msg");
                for (let i = 0; i < msgs.length; i++) this._refreshMsgContainer(jQuery(msgs[i]));
                const msgContainers = jQuery(".msg-container");
                for (let i = 0; i < msgContainers.length; i++) this._refreshMsgContainer(jQuery(msgContainers[i]));
            }
            _parseIconUrlOrGetRandom(queryIconUrl) {
                let iconUrl = null;
                if (queryIconUrl) if (queryIconUrl.includes("?newIconUrl=")) {
                    const userIconParts = queryIconUrl.split("?newIconUrl="), parsedIcon = userIconParts[1], oldIcon = userIconParts[0];
                    newIcons.includes(parsedIcon) ? iconUrl = chrome.runtime.getURL(`img/icons/${parsedIcon}`) : oldIcons.includes(oldIcon) && (iconUrl = chrome.runtime.getURL(`img/icons/General/${oldIcon}`));
                } else newIcons.includes(queryIconUrl) ? iconUrl = chrome.runtime.getURL(`img/icons/${queryIconUrl}`) : oldIcons.includes(queryIconUrl) && (iconUrl = chrome.runtime.getURL(`img/icons/General/${queryIconUrl}`));
                if (null === iconUrl) {
                    let possibleIcons = iconMap.General.filter((icon => !this._iconsInUse.includes(icon)));
                    0 === possibleIcons.length && (possibleIcons = iconMap.General);
                    const randomIcon = possibleIcons[Math.floor(Math.random() * possibleIcons.length)];
                    iconUrl = chrome.runtime.getURL(`/img/icons/General/${randomIcon}`);
                }
                return iconUrl;
            }
            setUserIcon(userId, newUserIcon) {
                const iconUrl = this._parseIconUrlOrGetRandom(newUserIcon);
                this._userIcons.set(userId, iconUrl), this._iconsInUse.push(iconUrl), this.renderSidebar();
            }
            setUserNickname(userId, userNickname) {
                const escapedUserNickName = escapeStr(userNickname);
                this._userNicknames.set(userId, escapedUserNickName), this._nicknamesInUse.push(escapedUserNickName), 
                this.renderSidebar();
            }
            updateUserData(userId, userIcon, userNickname) {
                const iconUrl = this._parseIconUrlOrGetRandom(userIcon);
                this._userIcons.set(userId, iconUrl), this._iconsInUse.push(iconUrl), this._userNicknames.set(userId, userNickname), 
                this._nicknamesInUse.push(userNickname), this.renderSidebar();
            }
            addReviewMessage() {
                jQuery('\n          <div class="msg-container">\n          <div class="msg-txt message-system" style="width:100%">\n          <p>\n          Thanks for using Teleparty! <br> \n          If you enjoy the extension, please leave a positive review \n          <a id="reviewLink" href="https://chrome.google.com/webstore/detail/netflix-party-is-now-tele/oocalimimngaihdkbihfgmpkcpnmlaoa/reviews" style="display:inline;color:red" target="none">here!</a>\n          </p>\n          </div>\n          </div>\n          ').appendTo(jQuery("#chat-history"));
                const logEventData = {
                    eventType: "review-shown-chrome",
                    sessionId: this._chatApi.getSessionId()
                }, logEventMessage = new LogEventMessage("Content_Script", "Service_Background", logEventData);
                Messaging_MessagePasser.sendMessageToExtension(logEventMessage), jQuery("#reviewLink").click((() => {
                    chrome.storage.local.set({
                        reviewClicked: !0
                    });
                    const logEventData = {
                        eventType: "review-clicked-chrome",
                        sessionId: this._chatApi.getSessionId()
                    }, logEventMessage = new LogEventMessage("Content_Script", "Service_Background", logEventData);
                    Messaging_MessagePasser.sendMessageToExtension(logEventMessage);
                }));
            }
        }
        var chat = __webpack_require__(301), chat_default = __webpack_require__.n(chat);
        function UserSettingsController_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class UserSettingsController {
            constructor(storageData) {
                var _storageData$userIcon, _storageData$userNick, _storageData$userId;
                UserSettingsController_defineProperty(this, "_userSettings", void 0), UserSettingsController_defineProperty(this, "_permId", void 0), 
                this._userSettings = {
                    userIcon: null !== (_storageData$userIcon = storageData.userIcon) && void 0 !== _storageData$userIcon ? _storageData$userIcon : "",
                    userNickname: null !== (_storageData$userNick = storageData.userNickname) && void 0 !== _storageData$userNick ? _storageData$userNick : ""
                }, this._permId = null !== (_storageData$userId = storageData.userId) && void 0 !== _storageData$userId ? _storageData$userId : "";
            }
            saveUserIcon(newUserIcon) {
                if ((newUserIcon = escapeStr(newUserIcon)).includes("/")) {
                    const iconName = newUserIcon.split("/")[1];
                    newUserIcon = oldIcons.includes(iconName) ? `${iconName}?newIconUrl=${newUserIcon}` : `${oldIcons[Math.floor(Math.random() * oldIcons.length)]}?newIconUrl=${newUserIcon}`;
                }
                this._userSettings.userIcon = newUserIcon, ChromeStorage_ChromeStorageWriter.setItemsAsync({
                    userIcon: newUserIcon
                }), debug("new user settings after set user icon: " + JSON.stringify(this._userSettings));
            }
            saveUserNickname(userNickname) {
                this._userSettings.userNickname = userNickname, ChromeStorage_ChromeStorageWriter.setItemsAsync({
                    userNickname
                }), debug("new user settings after set user nickname: " + JSON.stringify(this._userSettings));
            }
            get userSettings() {
                return this._userSettings;
            }
            get permId() {
                return this._permId;
            }
            get userIcon() {
                return this._userSettings.userIcon;
            }
            get userNickname() {
                return this._userSettings.userNickname;
            }
        }
        class SetTypingMessage extends ClientMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, ClientMessageType.SET_TYPING), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        class SendChatMessage extends ClientMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, ClientMessageType.SEND_MESSAGE), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        class BroadcastUserSettingsMessage extends ClientMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, ClientMessageType.BROADCAST_USER_SETTINGS), value = void 0, 
                (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        var lib = __webpack_require__(8200);
        function AdvertisingApi_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        const AdvertisingApi = new class {
            constructor() {
                AdvertisingApi_defineProperty(this, "_kevelClient", void 0), AdvertisingApi_defineProperty(this, "AD_TYPE", 4171), 
                AdvertisingApi_defineProperty(this, "AD_COUNT", 20), AdvertisingApi_defineProperty(this, "AD_DIV", "chat-ad-image"), 
                this._kevelClient = new lib.Client({
                    networkId: 10816,
                    siteId: 1168689
                });
            }
            async loadAds(sessionId, permId) {
                const request = {
                    enableBotFiltering: !0,
                    placements: [ {
                        divName: this.AD_DIV,
                        count: 20,
                        adTypes: [ this.AD_TYPE ]
                    } ]
                };
                permId && (request.user = {
                    key: permId
                });
                const adData = [];
                try {
                    const decisions = (await this._kevelClient.decisions.get(request)).decisions;
                    if (decisions) {
                        decisions[this.AD_DIV].forEach((decision => {
                            if (decision) {
                                const decisionData = this.parseDecision(decision);
                                decisionData && adData.push(decisionData);
                            }
                        }));
                    }
                } catch (err) {
                    if (err.message && "Failed to fetch" === err.message) {
                        debug("Failed to load Ads");
                        const adFailEvent = new LogEventMessage("Content_Script", "Service_Background", {
                            eventType: "adLoadFail",
                            sessionId
                        });
                        Messaging_MessagePasser.sendMessageToExtension(adFailEvent);
                    } else {
                        debug("Ad Other Error");
                        const adErrorEvent = new LogEventMessage("Content_Script", "Service_Background", {
                            eventType: "adLoadError",
                            sessionId
                        });
                        Messaging_MessagePasser.sendMessageToExtension(adErrorEvent);
                    }
                    return [];
                }
                if (adData.length > 0) return adData;
                {
                    const adNoneEvent = new LogEventMessage("Content_Script", "Service_Background", {
                        eventType: "adLoadNone",
                        sessionId
                    });
                    return Messaging_MessagePasser.sendMessageToExtension(adNoneEvent), adData;
                }
            }
            parseDecision(decision) {
                try {
                    const clickUrl = decision.clickUrl, impressionUrl = decision.impressionUrl;
                    if (clickUrl && impressionUrl) {
                        const contentArray = decision.contents;
                        let imageUrl, CTAText;
                        if (contentArray && contentArray.length > 0) {
                            const content = contentArray[0];
                            if (content.data) {
                                const parsedImageUrl = content.data.imageUrl;
                                parsedImageUrl && (imageUrl = String(parsedImageUrl)), CTAText = content.data.customData.CTA;
                            }
                        }
                        if (imageUrl && CTAText) {
                            return {
                                clickUrl,
                                impressionUrl,
                                imageUrl,
                                CTA: CTAText
                            };
                        }
                    }
                } catch (err) {
                    console.error("Failed to Load Ad Data: " + decision), console.error(err);
                }
            }
        };
        Object.freeze(AdvertisingApi);
        const Advertising_AdvertisingApi = AdvertisingApi;
        function ChatApi_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        var css_alert = __webpack_require__(39), css_chat = __webpack_require__(5644), browse = __webpack_require__(3630);
        function browseInjected(browseHtml) {
            return `\n    <style>\n      ${browse}\n    </style>\n    ${browseHtml}\n  `;
        }
        class HboMaxChatApi extends class {
            constructor() {
                ChatApi_defineProperty(this, "_chatEventListener", void 0), ChatApi_defineProperty(this, "_chatPresenceController", void 0), 
                ChatApi_defineProperty(this, "_messageController", void 0), ChatApi_defineProperty(this, "_userSettingsController", void 0), 
                ChatApi_defineProperty(this, "_chatHtml", void 0), ChatApi_defineProperty(this, "_typingTimeout", void 0), 
                ChatApi_defineProperty(this, "_inSession", void 0), ChatApi_defineProperty(this, "_partyUrl", ""), 
                ChatApi_defineProperty(this, "_sessionId", ""), ChatApi_defineProperty(this, "_showingReviewMessage", void 0), 
                ChatApi_defineProperty(this, "_shouldChatBeVisible", !0), ChatApi_defineProperty(this, "_changeAdInterval", void 0), 
                ChatApi_defineProperty(this, "_adData", void 0), ChatApi_defineProperty(this, "_currentAdIndex", void 0), 
                ChatApi_defineProperty(this, "CHANGE_AD_TIME", 15e4), ChatApi_defineProperty(this, "_adsActive", !1), 
                this._inSession = !1, this._chatEventListener = new ChatEventListener(this), this._chatPresenceController = new PresenceController, 
                this._messageController = new MessageController(this), this._typingTimeout = void 0, 
                this._showingReviewMessage = !1;
            }
            setChatVisible(visible) {
                this._shouldChatBeVisible = visible;
            }
            shouldChatBeVisible() {
                return this._shouldChatBeVisible;
            }
            _initChat(storageData) {
                hideAlertMessages(), this._userSettingsController = new UserSettingsController(storageData);
                const currentUrl = this._messageController.getUserIconURL(this._userSettingsController.permId, this._userSettingsController.userIcon);
                this._messageController.setUserIconUrl(currentUrl), this._messageController.renderSidebar(), 
                this._isChatInjected() && this.removeChat(), this._setChatHtml(), this._injectChat(), 
                this.setChatVisible(!0), this.addIconSelector(), this._startEventListener(), this._chatPresenceController.setupPresenceIndicator(), 
                this._inSession = !0;
            }
            reloadChat() {
                this._isChatInjected() || (this._injectChat(), this.setChatVisible(this._shouldChatBeVisible), 
                this.addIconSelector(), this._stopEventListener(), this._startEventListener(), this._chatPresenceController.setupPresenceIndicator(), 
                this.reloadMesssages(), this.scrollToBottom()), this._resetCurrentAd();
            }
            sendTeardown(teardownData) {
                const teardownMessage = new TeardownMessage("Content_Script", "Service_Background", teardownData);
                Messaging_MessagePasser.sendMessageToExtension(teardownMessage);
            }
            _isChatInjected() {
                return jQuery("#chat-wrapper").length > 0;
            }
            clearUnreadCount() {
                this._messageController.clearUnreadCount();
            }
            addMessage(message) {
                let checkIcons = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this._messageController.addMessage(message, checkIcons);
            }
            reloadMesssages() {
                this._messageController.reloadMessages();
            }
            scrollToBottom() {
                this._messageController.scrollToBottom();
            }
            addReviewMessage() {
                this._messageController.addReviewMessage(), this._showingReviewMessage = !0;
            }
            get showingReveiwMessage() {
                return this._showingReviewMessage;
            }
            onBufferingMessage(message) {
                this._chatPresenceController.setBufferingPresenceVisible(message.usersBuffering.length > 0);
            }
            onTypingMessage(message) {
                this._chatPresenceController.setTypingPresenceVisible(message.usersTyping.length > 0);
            }
            onWatchingAdsMessage(message) {
                this._chatPresenceController.setWatchingAdsPresenceVisible(message.usersWatchingAds.length > 0);
            }
            getWatchingAds() {
                return this._chatPresenceController.getWatchingAdsVisible();
            }
            onUpdateSettingsMessage(message) {
                if (this._messageController.updateUserData(message.permId, message.userSettings.userIcon, message.userSettings.userNickname), 
                this._userSettingsController) {
                    const currentUrl = this._messageController.getUserIconURL(this._userSettingsController.permId, this._userSettingsController.userIcon);
                    this._messageController.setUserIconUrl(currentUrl), this._messageController.renderSidebar();
                }
            }
            _startEventListener() {
                this._chatEventListener.startListening();
            }
            _stopEventListener() {
                this._chatEventListener.stopListening(), this._changeAdInterval && (clearTimeout(this._changeAdInterval), 
                this._adsActive = !1);
            }
            teardown() {
                this._inSession = !1, this._stopEventListener(), jQuery("[tpInjected]").remove(), 
                this.setChatVisible(!1), this.removeChat();
            }
            focusChat() {
                jQuery("#chat-input")[0].focus();
            }
            _setChatHtml() {
                if (debug("Set Chat Html called"), this._chatHtml = chat_default(), this._chatHtml = this._chatHtml.replace(/{EXTENSION_LOGO}/g, escapeStr(chrome.runtime.getURL("img/tp_logo.svg"))), 
                void 0 === this._userSettingsController) throw new Error("Attempt to set chatHtml when _userSettings is undefined.");
                this._chatHtml = this._chatHtml.replace(/{USER_NICKNAME}/g, this._userSettingsController.userNickname ? escapeStr(this._userSettingsController.userNickname) : "Add a nickname"), 
                this._chatHtml = this._chatHtml.replace(/{USER_ICON}/g, this._messageController.getUserIconURL(this._userSettingsController.permId, this._userSettingsController.userIcon)), 
                this._chatHtml = this._chatHtml.replace(/{LINK_SVG}/g, chrome.runtime.getURL("img/Link.svg"));
            }
            _loadAdHtml(data) {
                const chatContainer = jQuery("#chat-ad-holder"), adImage = jQuery("#chat-ad-image"), ctaButtonText = jQuery("#chat-ad-cta-text"), ctaButton = jQuery("#chat-ad-btn"), imageButton = jQuery("#chat-ad-image-holder"), img = new Image;
                img.src = data.imageUrl, img.onload = () => {
                    adImage.attr("src", img.src), chatContainer.show(), fetch(data.impressionUrl);
                }, img.onerror = () => {
                    console.log("Failed to load image");
                    const imageError = new LogEventMessage("Content_Script", "Service_Background", {
                        eventType: "imageLoadError",
                        sessionId: this._sessionId
                    });
                    Messaging_MessagePasser.sendMessageToExtension(imageError);
                }, ctaButtonText.text(data.CTA), ctaButton.attr("href", data.clickUrl), imageButton.attr("href", data.clickUrl);
            }
            _resetCurrentAd() {
                if (console.log("Resetting Ads"), this._adData && void 0 !== this._currentAdIndex && this._adData.length > 0) {
                    const currentAd = this._adData[this._currentAdIndex % this._adData.length];
                    this._loadAdHtml(currentAd);
                }
            }
            _setCurrentAd() {
                if ((!(this._currentAdIndex && this._currentAdIndex > 0) || document.hasFocus() && this._shouldChatBeVisible) && this._adData && this._adData.length > 0) {
                    var _this$_currentAdIndex;
                    this._currentAdIndex = (null !== (_this$_currentAdIndex = this._currentAdIndex) && void 0 !== _this$_currentAdIndex ? _this$_currentAdIndex : -1) + 1;
                    const currentAd = this._adData[this._currentAdIndex % this._adData.length];
                    this._loadAdHtml(currentAd);
                }
            }
            _loadAdInterval() {
                this._changeAdInterval && clearTimeout(this._changeAdInterval), this._setCurrentAd(), 
                this._changeAdInterval = setInterval(this._setCurrentAd.bind(this), this.CHANGE_AD_TIME);
            }
            async _loadAds(permId) {
                this._adData = await Advertising_AdvertisingApi.loadAds(this._sessionId, permId), 
                this._adData && this._adData.length > 0 && (this._adsActive = !0, this._loadAdInterval());
            }
            toggleIconContainer() {
                var _this$_userSettingsCo, _this$_userSettingsCo2, _this$_userSettingsCo3, _this$_userSettingsCo4;
                jQuery("#chat-icon-container").data("active") ? (jQuery("#chat-icon-container").data("active", !1), 
                jQuery("#chat-icon-container").hide(), jQuery(".chat-settings-container").hide(), 
                jQuery("#chat-history-container").show(), this._adsActive && jQuery("#chat-ad-holder").show(), 
                jQuery("#chat-input-container").show(), jQuery("#teleparty-blog-container").show(), 
                jQuery("#presence-indicator").show(), jQuery("#chat-header-container").removeClass("chat-header-container-active")) : (jQuery("#chat-icon-container").data("active", !0), 
                jQuery(".chat-settings-container").show(), jQuery("#chat-icon-container").hide(), 
                jQuery("#chat-link-container").hide(), jQuery("#chat-history-container").hide(), 
                jQuery("#chat-ad-holder").hide(), jQuery("#chat-input-container").hide(), jQuery("#teleparty-blog-container").hide(), 
                jQuery("#presence-indicator").hide(), jQuery("#nickname-edit").attr("placeholder", null !== (_this$_userSettingsCo = null === (_this$_userSettingsCo2 = this._userSettingsController) || void 0 === _this$_userSettingsCo2 ? void 0 : _this$_userSettingsCo2.userNickname) && void 0 !== _this$_userSettingsCo ? _this$_userSettingsCo : ""), 
                jQuery("#nickname-edit")[0].value = null !== (_this$_userSettingsCo3 = null === (_this$_userSettingsCo4 = this._userSettingsController) || void 0 === _this$_userSettingsCo4 ? void 0 : _this$_userSettingsCo4.userNickname) && void 0 !== _this$_userSettingsCo3 ? _this$_userSettingsCo3 : "");
            }
            toggleLargeUserIconButton() {
                jQuery("#chat-icon-container").data("active") && (jQuery("#chat-icon-container").show(), 
                jQuery(".chat-settings-container").hide(), jQuery("#chat-header-container").addClass("chat-header-container-active"));
            }
            linkIconListener() {
                navigator.clipboard.writeText(this.getPartyUrl());
            }
            setPartyUrl(url) {
                this._partyUrl = url;
            }
            setSessionId(sessionId) {
                this._sessionId = sessionId;
            }
            getSessionId() {
                return this._sessionId;
            }
            getPartyUrl() {
                return this._partyUrl;
            }
            userIconSelectorListener(event) {
                const icon = jQuery(event.currentTarget).data("icon");
                icon && (debug("userIconSelector button clicked: " + icon), this._userSettingsController && (this._userSettingsController.saveUserIcon(icon), 
                this._emitToSocket(this._getUpdateSettingsMessage(this._userSettingsController.userSettings)))), 
                this.toggleIconContainer();
            }
            removeChat() {
                this.clearUnreadCount(), jQuery("#chat-container").remove(), jQuery("#chat-wrapper").remove();
            }
            _emitToSocket(message, callback) {
                Messaging_MessagePasser.sendMessageToExtension(message).then(callback);
            }
            _getSendMessageClass(body) {
                return new SendChatMessage("Content_Script", "Service_Background", {
                    body
                });
            }
            _getTypingMessage(typing) {
                return new SetTypingMessage("Content_Script", "Service_Background", {
                    typing
                });
            }
            _getUpdateSettingsMessage(userSettings) {
                return new BroadcastUserSettingsMessage("Content_Script", "Service_Background", {
                    userSettings
                });
            }
            onChatKeyUp(event) {
                event.stopPropagation();
            }
            onChatKeyDown(event) {
                event.stopPropagation(), this._chatEventListener.resetIdleTimer();
            }
            initCustomListeners() {}
            onChatKeyPress(event) {
                if (event.stopPropagation(), 13 === event.which) {
                    const chatInput = jQuery("#chat-input"), body = chatInput.val().replace(/^\s+|\s+$/g, "");
                    body.length > 0 && (void 0 !== this._typingTimeout && (clearTimeout(this._typingTimeout), 
                    this._typingTimeout = void 0, this._emitToSocket(this._getTypingMessage(!1))), chatInput.prop("disabled", !0), 
                    this._emitToSocket(this._getSendMessageClass(body), (() => {
                        chatInput.val("").prop("disabled", !1), this.focusChat();
                    })));
                } else void 0 === this._typingTimeout ? this._emitToSocket(this._getTypingMessage(!0)) : clearTimeout(this._typingTimeout), 
                this._typingTimeout = setTimeout((() => {
                    this._typingTimeout = void 0, this._emitToSocket(this._getTypingMessage(!1));
                }), 500);
            }
            saveChangesListener() {
                var _this$_userSettingsCo5;
                const nicknameText = jQuery("#nickname-edit").val().slice(0, 25).replace(/^\s+|\s+$/g, "");
                debug("saveChanges button clicked: " + nicknameText), nicknameText !== (null === (_this$_userSettingsCo5 = this._userSettingsController) || void 0 === _this$_userSettingsCo5 ? void 0 : _this$_userSettingsCo5.userNickname) && this._userSettingsController && (this._userSettingsController.saveUserNickname(nicknameText), 
                this._emitToSocket(this._getUpdateSettingsMessage(this._userSettingsController.userSettings)), 
                jQuery("#nickname-edit").attr("placeholder", nicknameText), jQuery("#nickname-edit").text(nicknameText)), 
                this.toggleIconContainer();
            }
            cancelNicknameListener() {
                this.toggleIconContainer();
            }
            onChatClicked(event) {
                event.stopPropagation();
            }
            get inSession() {
                return this._inSession;
            }
            addIconSelector() {
                Object.keys(iconMap).forEach((categoryName => {
                    if (enableIconsetFunctions[categoryName]()) {
                        const icons = iconMap[categoryName], iconHolder = jQuery('\n                <ul id="icon-holder"></ul>\n            ');
                        for (const icon of icons) this._addIconButton(`${categoryName}/${icon}`, iconHolder);
                        const categorySection = jQuery(`\n                <div class="icon-holder-wrap">\n                  <p class="extension-txt-indicator">${categoryName}</p>\n                </div>\n            `);
                        iconHolder.appendTo(categorySection), categorySection.appendTo(jQuery("#icon-holder-template"));
                    }
                }), this);
            }
            _addIconButton(iconPath, iconHolder) {
                jQuery(`\n            <a class="image-button">\n                <img class="img-class" src='${chrome.runtime.getURL("img/icons/" + iconPath)}'>\n            </a>\n        `).appendTo(iconHolder).data("icon", iconPath);
            }
        } {
            constructor() {
                var obj, key, value;
                super(), value = void 0, (key = "_customCss") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this._customCss = "\n          #chat-wrapper {\n            height: calc(100% - 126px) !important;\n            position: absolute !important;\n          }\n        ";
            }
            teardown() {
                super.teardown(), document.documentElement.style.overflow = "auto";
            }
            _injectChat() {
                if (this._chatHtml) {
                    const hboDivs = jQuery("div"), summaryWrapper = jQuery(hboDivs.find("[style*='user-select']")[0]).next();
                    jQuery("body").append(function(chatHtml) {
                        return `\n    <style>\n      ${css_alert}\n    </style>\n\n    <style tpInjected>\n      .with-chat {\n        left: 0px !important;\n        width: calc(100% - 288px) !important;\n      }\n\n      .tp-video {\n        transition: width 250ms linear 0.2s;\n      }\n\n      ${arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""}\n    \n      ${css_chat}\n      \n    </style>\n\n    ${chatHtml}\n  `;
                    }(this._chatHtml, this._customCss)), document.documentElement.style.overflow = "hidden", 
                    summaryWrapper.hide();
                }
            }
            getChatVisible() {
                return jQuery("#chat-wrapper").is(":visible");
            }
            setChatVisible(visible) {
                super.setChatVisible(visible), visible ? (jQuery("video").width(window.innerWidth - 288), 
                jQuery("video").addClass("tp-video"), jQuery("#chat-wrapper").show(), document.hasFocus() || this.clearUnreadCount()) : (jQuery("video").width(window.innerWidth), 
                jQuery("#chat-wrapper").hide(), jQuery(window).trigger("resize"));
            }
        }
        var browsePopup = __webpack_require__(8726), browsePopup_default = __webpack_require__.n(browsePopup);
        class PopupMessage extends Message {
            constructor(sender, target, type) {
                var obj, key, value;
                super(sender, target, type), value = void 0, (key = "type") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.type = type;
            }
        }
        class CreateSessionMessage extends PopupMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, PopupMessageType.CREATE_SESSION), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        const Netflix = new class extends StreamingSerivce {
            isValidUrl(url) {
                return isNetflixParty(url);
            }
            getVideoId(url) {
                const match = url.pathname.match(/^.*\/([0-9]+)\??.*/);
                return match && match.length > 0 ? match[1] : void 0;
            }
            getFullscreenScript() {
                return '\n            (function() {\n                var sizingWrapper = document.getElementsByClassName("sizing-wrapper")[0];\n                    if (sizingWrapper) {\n                        sizingWrapper.requestFullscreen = function() {}\n                        document.getElementsByClassName(\'button-nfplayerFullscreen\')[0].onclick = function() {\n                            var fullScreenWrapper = document.getElementsByClassName("nf-kb-nav-wrapper")[0];\n                            fullScreenWrapper.webkitRequestFullScreen(fullScreenWrapper.ALLOW_KEYBOARD_INPUT);\n                        }\n                    }\n            })();\n        ';
            }
        }([], [ "content_scripts/netflix/netflix_content_bundled.js" ], "netflix", StreamingServiceName.NETFLIX, !1);
        Object.freeze(Netflix);
        const Services_Netflix = Netflix;
        const Hulu = new class extends StreamingSerivce {
            isValidUrl(url) {
                return isHuluParty(url);
            }
            getVideoId(url) {
                const match = url.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
                return match && match.length > 0 ? match[1] : void 0;
            }
        }([], [ "content_scripts/hulu/hulu_content_bundled.js" ], "hulu", StreamingServiceName.HULU, !1);
        Object.freeze(Hulu);
        const Services_Hulu = Hulu;
        const DisneyPlus = new class extends StreamingSerivce {
            isValidUrl(url) {
                return isDisneyPlusParty(url);
            }
            getVideoId(url) {
                const match = url.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
                return match && match.length > 0 ? match[1] : void 0;
            }
        }([], [ "content_scripts/disney/disney_content_bundled.js" ], "disney", StreamingServiceName.DISNEY_PLUS, !1);
        Object.freeze(DisneyPlus);
        const Disney = DisneyPlus;
        const HboNow = new class extends StreamingSerivce {
            isValidUrl(url) {
                return function(url) {
                    return url.hostname.includes(".hbonow.") && "none" !== getHBOVideoType(url.pathname);
                }(url);
            }
            getVideoId(url) {
                const videoUrnType = "urn:hbo:" + getHBOVideoType(url.pathname) + ":", hboQueryString = url.pathname.split(videoUrnType);
                let hboParseIds = null != hboQueryString && hboQueryString.length > 1 && null != hboQueryString[1] ? hboQueryString[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : null;
                const hboMatch = null != hboParseIds && 0 !== hboParseIds.length ? hboQueryString[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : void 0;
                let hboVideoId = hboMatch && hboMatch.length > 0 ? hboMatch[1] : void 0;
                return hboVideoId || (hboParseIds = url.pathname.match(/(page:)([a-zA-Z\-_0-9]+)\??.*/), 
                hboVideoId = null != hboParseIds && 3 == hboParseIds.length ? hboParseIds[2] : void 0), 
                hboVideoId;
            }
            getVideoType(url) {
                return getHBOVideoType(url.pathname);
            }
        }([], [ "content_scripts/hbo_now/hbo_now_browse_bundled.js", "content_scripts/hbo_now/hbo_now_content_bundled.js" ], "hbonow", StreamingServiceName.HBO_NOW, !1);
        Object.freeze(HboNow);
        const Services_HboNow = HboNow;
        const Amazon = new class extends StreamingSerivce {
            isValidUrl(url) {
                return function(url) {
                    return url.hostname.includes(".amazon.") || url.hostname.includes(".primevideo.");
                }(url);
            }
            getVideoId(url) {
                const match = url.pathname.split("ref")[0].match(/^.*\/([a-z\-0-9.A-Z]+)(\?|\/ref)?.*/);
                return null != match && match.length > 0 ? match[1] : void 0;
            }
        }([], [ "content_scripts/amazon/amazon_content_bundled.js" ], "amazon", StreamingServiceName.AMAZON, !1);
        Object.freeze(Amazon);
        const Services_Amazon = Amazon;
        function ExtensionTab_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class ExtensionTab {
            constructor(url, id) {
                var _getURLParameter;
                ExtensionTab_defineProperty(this, "id", void 0), ExtensionTab_defineProperty(this, "videoId", void 0), 
                ExtensionTab_defineProperty(this, "url", void 0), ExtensionTab_defineProperty(this, "serviceName", void 0), 
                ExtensionTab_defineProperty(this, "streamingService", void 0), ExtensionTab_defineProperty(this, "sessionIdFromUrl", void 0), 
                this.id = id, this.videoId, this.url = url;
                const validServices = [ Services_Netflix, Services_Hulu, Disney, Services_HboMax, Services_HboNow, Services_Amazon ];
                for (const service of validServices) if (service.isValidUrl(this.url)) {
                    this.streamingService = service, this.serviceName = service.name, this.videoId = service.getVideoId(url);
                    break;
                }
                this.sessionIdFromUrl = null !== (_getURLParameter = function(url, key, queryIndex) {
                    const searchString = "?" + url.split("?")[queryIndex];
                    if (void 0 === searchString) return;
                    const escapedKey = key.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), match = new RegExp("[?|&]" + escapedKey + "=([^&]*)(&|$)").exec(searchString);
                    return null === match || match.length < 2 ? void 0 : decodeURIComponent(match[1]);
                }(this.url.href, "npSessionId", 1)) && void 0 !== _getURLParameter ? _getURLParameter : void 0;
            }
            urlWithSessionId(sessionId) {
                return this.streamingService ? this.streamingService.urlWithSessionId(sessionId) : void 0;
            }
        }
        class ReInjectMessage extends PopupMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, PopupMessageType.RE_INJECT), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        function PageControls_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        function HboMaxPageControls_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class HboMaxPageControls extends class {
            constructor(chatApi) {
                var _window$teleparty, _window$teleparty$tab, _window$teleparty2;
                PageControls_defineProperty(this, "_sessionId", void 0), PageControls_defineProperty(this, "_scriptReady", !1), 
                PageControls_defineProperty(this, "_extensionTab", void 0), PageControls_defineProperty(this, "_scriptLoading", !1), 
                PageControls_defineProperty(this, "_hostOnlyControls", !1), PageControls_defineProperty(this, "_chatActive", !0), 
                PageControls_defineProperty(this, "_chatAPI", void 0), PageControls_defineProperty(this, "_unopenedMessageCount", 0), 
                console.log("Teleparty Browse Loaded " + (null === (_window$teleparty = window.teleparty) || void 0 === _window$teleparty ? void 0 : _window$teleparty.tabId)), 
                this._extensionTab = new ExtensionTab(new URL(window.location.href), null !== (_window$teleparty$tab = null === (_window$teleparty2 = window.teleparty) || void 0 === _window$teleparty2 ? void 0 : _window$teleparty2.tabId) && void 0 !== _window$teleparty$tab ? _window$teleparty$tab : 0), 
                this._chatAPI = chatApi;
            }
            setChatApi(chatApi) {
                this._chatAPI = chatApi;
            }
            loadHostOnlyImage() {
                jQuery("#tp-control-lock-button .tooltiptext").text(this._hostOnlyControls ? "Only I have control" : "Everyone has control"), 
                this._hostOnlyControls ? (jQuery("#tp-unlocked-image").addClass("hidden"), jQuery("#tp-locked-image").removeClass("hidden")) : (jQuery("#tp-unlocked-image").removeClass("hidden"), 
                jQuery("#tp-locked-image").addClass("hidden"));
            }
            onHostOnlyClicked() {
                this._scriptLoading || (this._hostOnlyControls = !this._hostOnlyControls, this.loadHostOnlyImage());
            }
            showMessageIndicator() {
                jQuery("#tp-message-indicator").removeClass("hidden"), jQuery("#tp-chat-gray").removeClass("hidden"), 
                jQuery("#tp-chat-hidden").addClass("hidden");
            }
            hideMessageIndicator() {
                jQuery("#tp-message-indicator").addClass("hidden"), jQuery("#tp-chat-gray").addClass("hidden"), 
                jQuery("#tp-chat-hidden").removeClass("hidden");
            }
            onChatMessage() {
                this._unopenedMessageCount++, this.showMessageIndicator(), this.showTpIcon();
            }
            teardown() {
                this.disablePartyIcons();
            }
            async sendCreate() {
                var _window$teleparty3;
                if (this._scriptLoading || this._chatAPI.inSession) return;
                if (this.startSpinning(), this._scriptLoading = !0, null === (_window$teleparty3 = window.teleparty) || void 0 === _window$teleparty3 || !_window$teleparty3.contentScriptInjected) {
                    console.log("Re injecting");
                    const reInjectMessage = new ReInjectMessage("Page_Controls", "Service_Background", {
                        extensionTabData: this._extensionTab
                    });
                    try {
                        await Messaging_MessagePasser.sendMessageToExtension(reInjectMessage);
                    } catch (err) {
                        return console.log(err), this.stopSpinning(), this.showError(GenericErrorMessage), 
                        void (this._scriptLoading = !1);
                    }
                }
                console.log("Sending create");
                const createSessionMessage = this.getCreateSessionMessage();
                try {
                    const response = await Messaging_MessagePasser.sendMessageToExtension(createSessionMessage);
                    response.error ? this.showError(response.error.message) : (this._scriptLoading = !1, 
                    this._sessionId = response.sessionId, this.showChatOpenButton(), this.enablePartyIcons());
                } catch (err) {
                    console.log(err), this.showError(GenericErrorMessage);
                }
                this.stopSpinning(), this._scriptLoading = !1;
            }
            enablePartyIcons() {
                this.hideError(), jQuery("#tp-party-active").removeClass("hidden"), jQuery("#tp-party-inactive").addClass("hidden"), 
                jQuery("#tp-icon-container .tooltiptext").addClass("hidden"), jQuery("#tp-icon-container").attr("style", "cursor: auto");
            }
            disablePartyIcons() {
                jQuery("#tp-party-active").addClass("hidden"), jQuery("#tp-party-inactive").removeClass("hidden"), 
                jQuery("#tp-icon-container .tooltiptext").removeClass("hidden"), jQuery("#tp-icon-container").attr("style", "");
            }
            showError(message) {
                jQuery("#tp-controls-error-text").text(message), jQuery("#tp-error-box").removeClass("hidden"), 
                jQuery("#tp-icon-container .tooltiptext").addClass("hidden");
            }
            hideError() {
                jQuery("#tp-error-box").addClass("hidden");
            }
            loadImages(html) {
                return html.replace(/{EXTENSION_LOGO_WHITE}/g, escapeStr(chrome.runtime.getURL("img/icon_white.svg"))).replace(/{PLAY_IMAGE}/g, escapeStr(chrome.runtime.getURL("img/play.svg"))).replace(/{UNLOCKED_IMAGE}/g, escapeStr(chrome.runtime.getURL("img/icon_remote_inactive.svg"))).replace(/{LOCKED_IMAGE}/g, escapeStr(chrome.runtime.getURL("img/icon_remote_active.svg"))).replace(/{ARROW_RIGHT}/g, escapeStr(chrome.runtime.getURL("img/arrow-right.svg"))).replace(/{LINK_IMAGE}/g, escapeStr(chrome.runtime.getURL("img/icon_link_inactive.svg"))).replace(/{LINK_ACTIVE_IMAGE}/g, escapeStr(chrome.runtime.getURL("img/icon_link_active.svg"))).replace(/{CHAT_HIDDEN_IMAGE}/g, escapeStr(chrome.runtime.getURL("img/icon_chat_inactive.svg"))).replace(/{CHAT_GRAY_IMAGE}/g, escapeStr(chrome.runtime.getURL("img/icon_chatgray_active.svg"))).replace(/{CHAT_ACTIVE_IMAGE}/g, escapeStr(chrome.runtime.getURL("img/icon_chat_active.svg"))).replace(/{DISCONNECT_IMAGE}/g, escapeStr(chrome.runtime.getURL("img/icon_logout_active.svg")));
            }
            hideTpIcon() {
                this.hideError(), jQuery("#tpIconContainer").addClass("hidden");
            }
            async showTpIcon() {
                if (0 === jQuery("#tpIconContainer").length) {
                    const sideHtml = this.loadImages(browsePopup_default()), controlsRoot = await this.getControlsRoot();
                    controlsRoot.length > 0 && controlsRoot.append(browseInjected(sideHtml)), this.loadHostOnlyImage(), 
                    this._setupEventHandlers();
                }
                this._chatAPI.inSession ? this.enablePartyIcons() : this.disablePartyIcons(), jQuery("#tpIconContainer").removeClass("hidden"), 
                this.setChatButtons();
            }
            getControlsHeight() {
                return "100px";
            }
            async addTpIcon() {
                if (0 === jQuery("#tpIconContainer").length) {
                    const sideHtml = this.loadImages(browsePopup_default()), controlsRoot = await this.getControlsRoot();
                    controlsRoot.length > 0 && controlsRoot.append(browseInjected(sideHtml)), this.loadHostOnlyImage(), 
                    this._setupEventHandlers();
                }
            }
            _setupEventHandlers() {
                jQuery("#tp-control-lock-button").click(this.onHostOnlyClicked.bind(this)), jQuery("#tp-buttons-container").attr("style", `top:${this.getControlsHeight()}`), 
                jQuery("#tp-chat-close-button").attr("style", `top:${this.getControlsHeight()}`), 
                jQuery("#tp-error-box").attr("style", `top:${this.getControlsHeight()}`), jQuery("#tp-link-button").click(this.onLinkClicked.bind(this)), 
                jQuery("#tp-chat-close-button")[0].addEventListener("mousedown", (e => (e.stopImmediatePropagation(), 
                e.stopPropagation(), !1)), {
                    capture: !0
                }), jQuery("#tp-chat-close-button")[0].addEventListener("mouseup", (e => (this.onToggleChat(), 
                e.stopImmediatePropagation(), e.stopPropagation(), !1)), {
                    capture: !0
                }), jQuery("#tp-icon-container")[0].addEventListener("mousedown", (e => (this.sendCreate(), 
                e.stopImmediatePropagation(), e.stopPropagation(), !1)), {
                    capture: !0
                }), jQuery("#tp-chat-button")[0].addEventListener("mousedown", (e => (this.onToggleChat(), 
                e.stopImmediatePropagation(), e.stopPropagation(), !1)), {
                    capture: !0
                }), jQuery("#tp-disconnect-button").click(this.onDisconnect.bind(this));
            }
            onDisconnect() {
                const teardownMessage = new TeardownMessage("Page_Controls", "Service_Background", DEFAULT_TEARDOWN);
                Messaging_MessagePasser.sendMessageToExtension(teardownMessage);
            }
            onLinkClicked() {
                this._chatAPI.linkIconListener(), jQuery("#tp-link-button .tooltiptext").text("Link copied"), 
                setTimeout((() => {
                    jQuery("#tp-link-button .tooltiptext").text("Copy join link");
                }), 1e3);
            }
            async onToggleChat() {
                this._chatAPI.setChatVisible(!this._chatAPI.shouldChatBeVisible()), this._unopenedMessageCount = 0, 
                this.hideMessageIndicator(), this.setChatButtons();
            }
            setChatButtons() {
                this._chatAPI.inSession && this._chatAPI.shouldChatBeVisible() ? this.showChatOpenButton() : this.hideChatOpenButton();
            }
            async showChatOpenButton() {
                await delay(250)(), jQuery("#tp-chat-close-button").removeClass("hidden"), jQuery("#tp-buttons-container").addClass("hidden");
            }
            hideChatOpenButton() {
                jQuery("#tp-chat-close-button").addClass("hidden"), jQuery("#tp-buttons-container").removeClass("hidden");
            }
            getCreateSessionMessage() {
                return new CreateSessionMessage("Page_Controls", "Service_Background", this.getCreateSessionData());
            }
            getCreateSessionData() {
                return {
                    createSettings: {
                        controlLock: this._hostOnlyControls
                    },
                    extensionTabData: this._extensionTab,
                    pageControls: !0
                };
            }
            startSpinning() {
                jQuery("#tp-icon-container .tooltiptext").html('Loading <span class="ellipsis-anim"><span>.</span><span>.</span><span>.</span></span>');
            }
            stopSpinning() {
                jQuery("#tp-icon-container .tooltiptext").html("Start a party");
            }
        } {
            constructor() {
                super(...arguments), HboMaxPageControls_defineProperty(this, "_controlsObserver", void 0), 
                HboMaxPageControls_defineProperty(this, "_showing", !1), HboMaxPageControls_defineProperty(this, "_checkInterval", void 0);
            }
            async getControlsRoot() {
                return jQuery("body");
            }
            startEventListener() {
                this.showTpIcon(), this._showing = !0, this._checkInterval = setInterval((() => {
                    const showLabel = document.querySelector("[aria-label='Show controls']"), hideLabel = document.querySelector("[aria-label='Dismiss controls']");
                    this._showing = !jQuery("#tpIconContainer").hasClass("hidden"), showLabel || hideLabel || this.hideTpIcon(), 
                    this._showing ? showLabel && this.hideTpIcon() : hideLabel && this.showTpIcon();
                }), 500);
            }
            getControlsHeight() {
                return "100px";
            }
            stopEventListener() {
                this._checkInterval && clearInterval(this._checkInterval);
            }
            reloadListeners() {
                this.stopEventListener(), this.startEventListener();
            }
        }
        class HboMaxContentScript extends class {
            constructor(chatApi, videoApi, videoEventListener, pageControls) {
                ContentScript_defineProperty(this, "_hasBackgroundConnection", void 0), ContentScript_defineProperty(this, "_isContentScriptReady", void 0), 
                ContentScript_defineProperty(this, "_isContentScriptLoading", void 0), ContentScript_defineProperty(this, "_showingReviewMessage", void 0), 
                ContentScript_defineProperty(this, "_messageReceiver", void 0), ContentScript_defineProperty(this, "_chatApi", void 0), 
                ContentScript_defineProperty(this, "_videoApi", void 0), ContentScript_defineProperty(this, "_chatMessageForwarder", void 0), 
                ContentScript_defineProperty(this, "_videoEventListener", void 0), ContentScript_defineProperty(this, "_videoMessageForwarder", void 0), 
                ContentScript_defineProperty(this, "_pageControls", void 0), this._chatApi = chatApi, 
                this._videoApi = videoApi, this._videoEventListener = videoEventListener, this._pageControls = pageControls, 
                window.teleparty && !window.teleparty.pageControls ? (window.teleparty.pageControls = pageControls, 
                console.log("Setting Page COntrols")) : (pageControls.setChatApi(this._chatApi), 
                console.log("Resetting Chat Api for old controls")), this._chatMessageForwarder = new ChatMessageForwarder(this._chatApi, this._pageControls), 
                this._videoMessageForwarder = new VideoMessageForwarder(this._videoApi, this._videoEventListener), 
                this._isContentScriptReady = !1, this._isContentScriptLoading = !1, this._showingReviewMessage = !1, 
                this._messageReceiver = new CSMessageReceiver, this._messageReceiver.addMessageListener(this._videoMessageForwarder), 
                this._messageReceiver.addMessageListener(this._chatMessageForwarder), this._messageReceiver.addMessageListener(this), 
                this._hasBackgroundConnection = !1, this._setupPingPort();
            }
            async loadBrowseButton() {
                0;
            }
            _setupPingPort() {
                const backgroundPort = chrome.runtime.connect();
                backgroundPort.onDisconnect.addListener((() => {
                    console.log("Lost background script. Teardown");
                    const teardownData = {
                        showAlert: this._chatApi.inSession,
                        alertModal: lostBackgroundConnectionModal
                    };
                    this._teardown(teardownData);
                })), backgroundPort.onMessage.addListener((() => {
                    debug("Got background script"), this._hasBackgroundConnection = !0;
                }));
            }
            onMessage(message, _sender, sendResponse) {
                if ("Content_Script" == message.target) {
                    if (message.type === PopupMessageType.IS_CONTENT_SCRIPT_READY) {
                        if (this._isContentScriptReady) {
                            sendResponse({
                                ready: !0
                            });
                        } else this._isContentScriptLoading || (this._isContentScriptLoading = !0, this._waitScriptReadyAsync().then(sendResponse));
                        return !0;
                    }
                    if (message.type === PopupMessageType.GET_INIT_DATA) {
                        return sendResponse(this._getInitDataResponse()), !0;
                    }
                    if (message.type === PopupMessageType.DISCONNECT && "Popup" == message.sender) {
                        const teardownMessage = new TeardownMessage("Content_Script", "Service_Background", DEFAULT_TEARDOWN);
                        Messaging_MessagePasser.sendMessageToExtension(teardownMessage), sendResponse();
                    } else if (message.type == BackgroundMessageType.TEARDOWN) {
                        const teardownMessage = message;
                        return this._teardown(teardownMessage.data), sendResponse(), !0;
                    }
                }
                return !1;
            }
            _teardown(data) {
                if (data.showAlert && data.alertModal) {
                    var _data$buttonUrl;
                    const buttonUrl = null !== (_data$buttonUrl = data.buttonUrl) && void 0 !== _data$buttonUrl ? _data$buttonUrl : this._chatApi.getPartyUrl();
                    showButtonMessage(data.alertModal, buttonUrl);
                }
                this._pageControls.teardown(), this._videoMessageForwarder.teardown(), this._chatMessageForwarder.teardown(), 
                this._messageReceiver.teardown(), window.teleparty && (window.teleparty.contentScriptInjected = !1) && (window.teleparty.contentScriptReady = !1);
            }
            async waitBackgroundConnectionReadyAsync() {
                return delayUntil((() => this._hasBackgroundConnection), 5e3)();
            }
            async _waitScriptReadyAsync() {
                try {
                    await this.waitBackgroundConnectionReadyAsync();
                    const response = await this._waitContentScriptReadyAsync();
                    return this.loadBrowseButton(), response;
                } catch (error) {
                    return {
                        ready: !1,
                        error: {
                            message: "Failed to connect to Script. Please refresh the page and try again",
                            showButton: !1
                        }
                    };
                } finally {
                    this._isContentScriptLoading = !1;
                }
            }
            async _waitContentScriptReadyAsync() {
                let errorData;
                try {
                    await this._videoApi.waitVideoApiReadyAsync();
                    const response = await this._waitBackgroundResponseAsync();
                    response && response.error ? (debug("Error"), errorData = {
                        message: response.error,
                        showButton: !0
                    }, this._isContentScriptReady = !0, window.teleparty && (window.teleparty.contentScriptReady = !0)) : (response && response.showReviewMessage && (this._showingReviewMessage = !0), 
                    this._isContentScriptReady = !0, window.teleparty && (window.teleparty.contentScriptReady = !0));
                } catch (error) {
                    errorData = {
                        message: error.message,
                        showButton: !1
                    };
                }
                return {
                    ready: this._isContentScriptReady,
                    error: errorData
                };
            }
            _getInitDataResponse() {
                return {
                    inSession: this._chatApi.inSession,
                    isChatVisible: this._chatApi.getChatVisible(),
                    partyUrl: this._chatApi.getPartyUrl(),
                    showReviewMessage: !1
                };
            }
            async _waitBackgroundResponseAsync() {
                const getSessionDataMessage = await this._getSessionDataRequestAsync();
                return Messaging_MessagePasser.sendMessageToExtension(getSessionDataMessage);
            }
            async _getSessionDataRequestAsync() {
                const sessionRequestData = {
                    videoId: (await this._videoApi.getVideoDataAsync()).videoId
                };
                return new GetSessionDataMessage("Content_Script", "Service_Background", sessionRequestData);
            }
        } {
            constructor() {
                const hboMaxVideoApi = new HboMaxVideoApi, hboMaxChatApi = new HboMaxChatApi, hboMaxVideoEventListener = new HboMaxVideoEventListener(hboMaxVideoApi, hboMaxChatApi);
                let pageControls;
                window.teleparty && window.teleparty.pageControls ? (pageControls = window.teleparty.pageControls, 
                console.log("Using existing page controls")) : pageControls = new HboMaxPageControls(hboMaxChatApi), 
                super(hboMaxChatApi, hboMaxVideoApi, hboMaxVideoEventListener, pageControls);
            }
        }
        window.teleparty && window.teleparty.contentScriptInjected || (window.teleparty || (window.teleparty = {}), 
        window.teleparty.contentScriptInjected = !0, new HboMaxContentScript);
    })();
})();
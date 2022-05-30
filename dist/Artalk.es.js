var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var main = "";
var en = {
  placeholder: "Leave a comment",
  noComment: "No Comment",
  send: "Send",
  nick: "Nickname",
  email: "Email",
  link: "Website",
  emoticon: "Emoji",
  preview: "Preview",
  image: "Image",
  uploadFail: "Upload Failed",
  commentFail: "Failed to comment",
  restoredMsg: "Content has been restored",
  onlyAdminCanReply: "Only admin can reply",
  uploadLoginMsg: "Please fill in your name and email to upload",
  counter: "{count} Comments",
  sortLatest: "Latest",
  sortOldest: "Oldest",
  sortBest: "Best",
  sortAuthor: "Author",
  openComment: "Open Comment",
  closeComment: "Close Comment",
  listLoadFailMsg: "Failed to load comments",
  listRetry: "Click to retry",
  loadMore: "Load More",
  admin: "Admin",
  reply: "Reply",
  voteUp: "Up",
  voteDown: "Down",
  voteFail: "Vote Failed",
  readMore: "Read More",
  actionConfirm: "Confirm",
  collapse: "Collapse",
  collapsed: "Collapsed",
  collapsedMsg: "This comment has been collapsed",
  expand: "Expand",
  approved: "Approved",
  pending: "Pending",
  pendingMsg: "Pending, visible only to commenter.",
  delete: "Delete",
  deleteConfirm: "Confirm",
  pin: "Pin",
  unpin: "Unpin",
  seconds: "seconds ago",
  minutes: "minutes ago",
  hours: "hours ago",
  days: "days ago",
  now: "just now",
  adminCheck: "Enter admin password:",
  captchaCheck: "Enter the CAPTCHA to continue:",
  confirm: "Confirm",
  cancel: "Cancel",
  msgCenter: "Messages",
  ctrlCenter: "Admin",
  frontend: "Frontend",
  backend: "Backend",
  loading: "Loading",
  loadFail: "Load Failed",
  editing: "Editing",
  editFail: "Edit Failed",
  deleting: "Deleting",
  deleteFail: "Delete Failed",
  reqGot: "Request got",
  reqAborted: "Request timed out or terminated unexpectedly"
};
const zhCN = {
  placeholder: "\u952E\u5165\u5185\u5BB9...",
  noComment: "\u300C\u6B64\u65F6\u65E0\u58F0\u80DC\u6709\u58F0\u300D",
  send: "\u53D1\u9001\u8BC4\u8BBA",
  nick: "\u6635\u79F0",
  email: "\u90AE\u4EF6",
  link: "\u7F51\u5740",
  emoticon: "\u8868\u60C5",
  preview: "\u9884\u89C8",
  image: "\u56FE\u7247",
  uploadFail: "\u4E0A\u4F20\u5931\u8D25",
  commentFail: "\u8BC4\u8BBA\u5931\u8D25",
  restoredMsg: "\u5185\u5BB9\u5DF2\u81EA\u52A8\u6062\u590D",
  onlyAdminCanReply: "\u4EC5\u7BA1\u7406\u5458\u53EF\u8BC4\u8BBA",
  uploadLoginMsg: "\u586B\u5165\u4F60\u7684\u540D\u5B57\u90AE\u7BB1\u624D\u80FD\u4E0A\u4F20\u54E6",
  counter: "{count} \u6761\u8BC4\u8BBA",
  sortLatest: "\u6700\u65B0",
  sortOldest: "\u6700\u65E9",
  sortBest: "\u6700\u70ED",
  sortAuthor: "\u4F5C\u8005",
  openComment: "\u6253\u5F00\u8BC4\u8BBA",
  closeComment: "\u5173\u95ED\u8BC4\u8BBA",
  listLoadFailMsg: "\u65E0\u6CD5\u83B7\u53D6\u8BC4\u8BBA\u5217\u8868\u6570\u636E",
  listRetry: "\u70B9\u51FB\u91CD\u65B0\u83B7\u53D6",
  loadMore: "\u52A0\u8F7D\u66F4\u591A",
  admin: "\u7BA1\u7406\u5458",
  reply: "\u56DE\u590D",
  voteUp: "\u8D5E\u540C",
  voteDown: "\u53CD\u5BF9",
  voteFail: "\u6295\u7968\u5931\u8D25",
  readMore: "\u9605\u8BFB\u66F4\u591A",
  actionConfirm: "\u786E\u8BA4\u64CD\u4F5C",
  collapse: "\u6298\u53E0",
  collapsed: "\u5DF2\u6298\u53E0",
  collapsedMsg: "\u8BE5\u8BC4\u8BBA\u5DF2\u88AB\u7CFB\u7EDF\u6216\u7BA1\u7406\u5458\u6298\u53E0",
  expand: "\u53D6\u6D88\u6298\u53E0",
  approved: "\u5DF2\u5BA1",
  pending: "\u5F85\u5BA1",
  pendingMsg: "\u5BA1\u6838\u4E2D\uFF0C\u4EC5\u672C\u4EBA\u53EF\u89C1\u3002",
  delete: "\u5220\u9664",
  deleteConfirm: "\u786E\u8BA4\u5220\u9664",
  pin: "\u7F6E\u9876",
  unpin: "\u53D6\u6D88\u7F6E\u9876",
  seconds: "\u79D2\u524D",
  minutes: "\u5206\u949F\u524D",
  hours: "\u5C0F\u65F6\u524D",
  days: "\u5929\u524D",
  now: "\u521A\u521A",
  adminCheck: "\u952E\u5165\u5BC6\u7801\u6765\u9A8C\u8BC1\u7BA1\u7406\u5458\u8EAB\u4EFD\uFF1A",
  captchaCheck: "\u952E\u5165\u9A8C\u8BC1\u7801\u7EE7\u7EED\uFF1A",
  confirm: "\u786E\u8BA4",
  cancel: "\u53D6\u6D88",
  msgCenter: "\u901A\u77E5\u4E2D\u5FC3",
  ctrlCenter: "\u63A7\u5236\u4E2D\u5FC3",
  frontend: "\u524D\u7AEF",
  backend: "\u540E\u7AEF",
  loading: "\u52A0\u8F7D\u4E2D",
  loadFail: "\u52A0\u8F7D\u5931\u8D25",
  editing: "\u4FEE\u6539\u4E2D",
  editFail: "\u4FEE\u6539\u5931\u8D25",
  deleting: "\u5220\u9664\u4E2D",
  deleteFail: "\u5220\u9664\u5931\u8D25",
  reqGot: "\u8BF7\u6C42\u54CD\u5E94",
  reqAborted: "\u8BF7\u6C42\u8D85\u65F6\u6216\u610F\u5916\u7EC8\u6B62"
};
const internal = {
  "en": en,
  "en-US": en,
  "zh-CN": zhCN
};
class User {
  constructor(ctx) {
    __publicField(this, "ctx");
    __publicField(this, "data");
    this.ctx = ctx;
    const localUser = JSON.parse(window.localStorage.getItem("ArtalkUser") || "{}");
    this.data = {
      nick: localUser.nick || "",
      email: localUser.email || "",
      link: localUser.link || "",
      token: localUser.token || "",
      isAdmin: localUser.isAdmin || false
    };
  }
  update(obj = {}) {
    Object.entries(obj).forEach(([key, value]) => {
      this.data[key] = value;
    });
    window.localStorage.setItem("ArtalkUser", JSON.stringify(this.data));
    this.ctx.trigger("user-changed", this.ctx.user.data);
  }
  logout() {
    this.update({
      token: "",
      isAdmin: false
    });
  }
  checkHasBasicUserInfo() {
    return !!this.data.nick && !!this.data.email;
  }
}
class Component {
  constructor(ctx) {
    __publicField(this, "$el");
    __publicField(this, "ctx");
    __publicField(this, "conf");
    this.ctx = ctx;
    this.conf = ctx.conf;
  }
  $t(key, args = {}) {
    return this.ctx.$t(key, args);
  }
}
function getDefaults() {
  return {
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: "",
    highlight: null,
    langPrefix: "language-",
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}
let defaults$3 = getDefaults();
function changeDefaults(newDefaults) {
  defaults$3 = newDefaults;
}
const escapeTest = /[&<>"']/;
const escapeReplace = /[&<>"']/g;
const escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
const escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
const escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
const getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html;
}
const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape(html) {
  return html.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === "colon")
      return ":";
    if (n.charAt(0) === "#") {
      return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }
    return "";
  });
}
const caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  regex = typeof regex === "string" ? regex : regex.source;
  opt = opt || "";
  const obj = {
    replace: (name, val) => {
      val = val.source || val;
      val = val.replace(caret, "$1");
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}
const nonWordAndColonTest = /[^\w:]/g;
const originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, "").toLowerCase();
    } catch (e) {
      return null;
    }
    if (prot.indexOf("javascript:") === 0 || prot.indexOf("vbscript:") === 0 || prot.indexOf("data:") === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, "%");
  } catch (e) {
    return null;
  }
  return href;
}
const baseUrls = {};
const justDomain = /^[^:]+:\/*[^/]*$/;
const protocol = /^([^:]+:)[\s\S]*$/;
const domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function resolveUrl(base, href) {
  if (!baseUrls[" " + base]) {
    if (justDomain.test(base)) {
      baseUrls[" " + base] = base + "/";
    } else {
      baseUrls[" " + base] = rtrim(base, "/", true);
    }
  }
  base = baseUrls[" " + base];
  const relativeBase = base.indexOf(":") === -1;
  if (href.substring(0, 2) === "//") {
    if (relativeBase) {
      return href;
    }
    return base.replace(protocol, "$1") + href;
  } else if (href.charAt(0) === "/") {
    if (relativeBase) {
      return href;
    }
    return base.replace(domain, "$1") + href;
  } else {
    return base + href;
  }
}
const noopTest = { exec: function noopTest2() {
} };
function merge(obj) {
  let i = 1, target, key;
  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }
  return obj;
}
function splitCells(tableRow, count) {
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
    let escaped = false, curr = offset;
    while (--curr >= 0 && str[curr] === "\\")
      escaped = !escaped;
    if (escaped) {
      return "|";
    } else {
      return " |";
    }
  }), cells = row.split(/ \|/);
  let i = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }
  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count)
      cells.push("");
  }
  for (; i < cells.length; i++) {
    cells[i] = cells[i].trim().replace(/\\\|/g, "|");
  }
  return cells;
}
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  const l = str.length;
  let level = 0, i = 0;
  for (; i < l; i++) {
    if (str[i] === "\\") {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}
function checkSanitizeDeprecation(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
  }
}
function repeatString(pattern, count) {
  if (count < 1) {
    return "";
  }
  let result = "";
  while (count > 1) {
    if (count & 1) {
      result += pattern;
    }
    count >>= 1;
    pattern += pattern;
  }
  return result + pattern;
}
function outputLink(cap, link, raw, lexer) {
  const href = link.href;
  const title = link.title ? escape(link.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, "$1");
  if (cap[0].charAt(0) !== "!") {
    lexer.state.inLink = true;
    const token = {
      type: "link",
      raw,
      href,
      title,
      text,
      tokens: lexer.inlineTokens(text, [])
    };
    lexer.state.inLink = false;
    return token;
  }
  return {
    type: "image",
    raw,
    href,
    title,
    text: escape(text)
  };
}
function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text;
  }
  const indentToCode = matchIndentToCode[1];
  return text.split("\n").map((node) => {
    const matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
class Tokenizer {
  constructor(options) {
    this.options = options || defaults$3;
  }
  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: "space",
        raw: cap[0]
      };
    }
  }
  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text, "\n") : text
      };
    }
  }
  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || "");
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim() : cap[2],
        text
      };
    }
  }
  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, "#");
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          text = trimmed.trim();
        }
      }
      const token = {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: "hr",
        raw: cap[0]
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ *>[ \t]?/gm, "");
      return {
        type: "blockquote",
        raw: cap[0],
        tokens: this.lexer.blockTokens(text, []),
        text
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list2 = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      while (src) {
        endEarly = false;
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        if (this.rules.block.hr.test(src)) {
          break;
        }
        raw = cap[0];
        src = src.substring(raw.length);
        line = cap[2].split("\n", 1)[0];
        nextLine = src.split("\n", 1)[0];
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimLeft();
        } else {
          indent = cap[2].search(/[^ ]/);
          indent = indent > 4 ? 1 : indent;
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        blankLine = false;
        if (!line && /^ *$/.test(nextLine)) {
          raw += nextLine + "\n";
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
          while (src) {
            rawLine = src.split("\n", 1)[0];
            line = rawLine;
            if (this.options.pedantic) {
              line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
            }
            if (nextBulletRegex.test(line)) {
              break;
            }
            if (hrRegex.test(src)) {
              break;
            }
            if (line.search(/[^ ]/) >= indent || !line.trim()) {
              itemContents += "\n" + line.slice(indent);
            } else if (!blankLine) {
              itemContents += "\n" + line;
            } else {
              break;
            }
            if (!blankLine && !line.trim()) {
              blankLine = true;
            }
            raw += rawLine + "\n";
            src = src.substring(rawLine.length + 1);
          }
        }
        if (!list2.loose) {
          if (endsWithBlankLine) {
            list2.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
          }
        }
        list2.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents
        });
        list2.raw += raw;
      }
      list2.items[list2.items.length - 1].raw = raw.trimRight();
      list2.items[list2.items.length - 1].text = itemContents.trimRight();
      list2.raw = list2.raw.trimRight();
      const l = list2.items.length;
      for (i = 0; i < l; i++) {
        this.lexer.state.top = false;
        list2.items[i].tokens = this.lexer.blockTokens(list2.items[i].text, []);
        const spacers = list2.items[i].tokens.filter((t) => t.type === "space");
        const hasMultipleLineBreaks = spacers.every((t) => {
          const chars = t.raw.split("");
          let lineBreaks = 0;
          for (const char of chars) {
            if (char === "\n") {
              lineBreaks += 1;
            }
            if (lineBreaks > 1) {
              return true;
            }
          }
          return false;
        });
        if (!list2.loose && spacers.length && hasMultipleLineBreaks) {
          list2.loose = true;
          list2.items[i].loose = true;
        }
      }
      return list2;
    }
  }
  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: "html",
        raw: cap[0],
        pre: !this.options.sanitizer && (cap[1] === "pre" || cap[1] === "script" || cap[1] === "style"),
        text: cap[0]
      };
      if (this.options.sanitize) {
        token.type = "paragraph";
        token.text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
        token.tokens = [];
        this.lexer.inline(token.text, token.tokens);
      }
      return token;
    }
  }
  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      if (cap[3])
        cap[3] = cap[3].substring(1, cap[3].length - 1);
      const tag = cap[1].toLowerCase().replace(/\s+/g, " ");
      return {
        type: "def",
        tag,
        raw: cap[0],
        href: cap[2],
        title: cap[3]
      };
    }
  }
  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (cap) {
      const item = {
        type: "table",
        header: splitCells(cap[1]).map((c) => {
          return { text: c };
        }),
        align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : []
      };
      if (item.header.length === item.align.length) {
        item.raw = cap[0];
        let l = item.align.length;
        let i, j, k, row;
        for (i = 0; i < l; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = "right";
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = "center";
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = "left";
          } else {
            item.align[i] = null;
          }
        }
        l = item.rows.length;
        for (i = 0; i < l; i++) {
          item.rows[i] = splitCells(item.rows[i], item.header.length).map((c) => {
            return { text: c };
          });
        }
        l = item.header.length;
        for (j = 0; j < l; j++) {
          item.header[j].tokens = [];
          this.lexer.inline(item.header[j].text, item.header[j].tokens);
        }
        l = item.rows.length;
        for (j = 0; j < l; j++) {
          row = item.rows[j];
          for (k = 0; k < row.length; k++) {
            row[k].tokens = [];
            this.lexer.inline(row[k].text, row[k].tokens);
          }
        }
        return item;
      }
    }
  }
  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      const token = {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const token = {
        type: "paragraph",
        raw: cap[0],
        text: cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      const token = {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: escape(cap[1])
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: this.options.sanitize ? "text" : "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]
      };
    }
  }
  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        if (!/>$/.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
        if (link) {
          href = link[1];
          title = link[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline._escapes, "$1") : href,
        title: title ? title.replace(this.rules.inline._escapes, "$1") : title
      }, cap[0], this.lexer);
    }
  }
  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      let link = (cap[2] || cap[1]).replace(/\s+/g, " ");
      link = links[link.toLowerCase()];
      if (!link || !link.href) {
        const text = cap[0].charAt(0);
        return {
          type: "text",
          raw: text,
          text
        };
      }
      return outputLink(cap, link, cap[0], this.lexer);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrong.lDelim.exec(src);
    if (!match)
      return;
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
      return;
    const nextChar = match[1] || match[2] || "";
    if (!nextChar || nextChar && (prevChar === "" || this.rules.inline.punctuation.exec(prevChar))) {
      const lLength = match[0].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
      const endReg = match[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim)
          continue;
        rLength = rDelim.length;
        if (match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0)
          continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        if (Math.min(lLength, rLength) % 2) {
          const text2 = src.slice(1, lLength + match.index + rLength);
          return {
            type: "em",
            raw: src.slice(0, lLength + match.index + rLength + 1),
            text: text2,
            tokens: this.lexer.inlineTokens(text2, [])
          };
        }
        const text = src.slice(2, lLength + match.index + rLength - 1);
        return {
          type: "strong",
          raw: src.slice(0, lLength + match.index + rLength + 1),
          text,
          tokens: this.lexer.inlineTokens(text, [])
        };
      }
    }
  }
  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, " ");
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = escape(text, true);
      return {
        type: "codespan",
        raw: cap[0],
        text
      };
    }
  }
  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2], [])
      };
    }
  }
  autolink(src, mangle2) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === "@") {
        text = escape(this.options.mangle ? mangle2(cap[1]) : cap[1]);
        href = "mailto:" + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  url(src, mangle2) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === "@") {
        text = escape(this.options.mangle ? mangle2(cap[0]) : cap[0]);
        href = "mailto:" + text;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text = escape(cap[0]);
        if (cap[1] === "www.") {
          href = "http://" + text;
        } else {
          href = text;
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  inlineText(src, smartypants2) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
      } else {
        text = escape(this.options.smartypants ? smartypants2(cap[0]) : cap[0]);
      }
      return {
        type: "text",
        raw: cap[0],
        text
      };
    }
  }
}
const block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
  def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def).replace("label", block._label).replace("title", block._title).getRegex();
block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */).replace("bull", block.bullet).getRegex();
block.list = edit(block.list).replace(/bull/g, block.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + block.def.source + ")").getRegex();
block._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, "i").replace("comment", block._comment).replace("tag", block._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
block.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.blockquote = edit(block.blockquote).replace("paragraph", block.paragraph).getRegex();
block.normal = merge({}, block);
block.gfm = merge({}, block.normal, {
  table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
});
block.gfm.table = edit(block.gfm.table).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.gfm.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", block.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.pedantic = merge({}, block.normal, {
  html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", block._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  paragraph: edit(block.normal._paragraph).replace("hr", block.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", block.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
});
const inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: "reflink|nolink(?!\\()",
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
};
inline._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex();
inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
inline.escapedEmSt = /\\\*|\\_/g;
inline._comment = edit(block._comment).replace("(?:-->|$)", "-->").getRegex();
inline.emStrong.lDelim = edit(inline.emStrong.lDelim).replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, "g").replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, "g").replace(/punct/g, inline._punctuation).getRegex();
inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink).replace("scheme", inline._scheme).replace("email", inline._email).getRegex();
inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
inline.tag = edit(inline.tag).replace("comment", inline._comment).replace("attribute", inline._attribute).getRegex();
inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
inline.link = edit(inline.link).replace("label", inline._label).replace("href", inline._href).replace("title", inline._title).getRegex();
inline.reflink = edit(inline.reflink).replace("label", inline._label).replace("ref", block._label).getRegex();
inline.nolink = edit(inline.nolink).replace("ref", block._label).getRegex();
inline.reflinkSearch = edit(inline.reflinkSearch, "g").replace("reflink", inline.reflink).replace("nolink", inline.nolink).getRegex();
inline.normal = merge({}, inline);
inline.pedantic = merge({}, inline.normal, {
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", inline._label).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", inline._label).getRegex()
});
inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace("])", "~|])").getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});
inline.gfm.url = edit(inline.gfm.url, "i").replace("email", inline.gfm._extended_email).getRegex();
inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace("{2,}", "*").getRegex(),
  text: edit(inline.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
});
function smartypants(text) {
  return text.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
}
function mangle(text) {
  let out = "", i, ch;
  const l = text.length;
  for (i = 0; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = "x" + ch.toString(16);
    }
    out += "&#" + ch + ";";
  }
  return out;
}
class Lexer {
  constructor(options) {
    this.tokens = [];
    this.tokens.links = /* @__PURE__ */ Object.create(null);
    this.options = options || defaults$3;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  static get rules() {
    return {
      block,
      inline
    };
  }
  static lex(src, options) {
    const lexer = new Lexer(options);
    return lexer.lex(src);
  }
  static lexInline(src, options) {
    const lexer = new Lexer(options);
    return lexer.inlineTokens(src);
  }
  lex(src) {
    src = src.replace(/\r\n|\r/g, "\n");
    this.blockTokens(src, this.tokens);
    let next;
    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }
    return this.tokens;
  }
  blockTokens(src, tokens = []) {
    if (this.options.pedantic) {
      src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "");
    } else {
      src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
        return leading + "    ".repeat(tabs.length);
      });
    }
    let token, lastToken, cutSrc, lastParagraphClipped;
    while (src) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          tokens[tokens.length - 1].raw += "\n";
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken.type === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src, tokens) {
    this.inlineQueue.push({ src, tokens });
  }
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
    }
    while (src) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src, mangle)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
}
class Renderer {
  constructor(options) {
    this.options = options || defaults$3;
  }
  code(code, infostring, escaped) {
    const lang = (infostring || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }
    code = code.replace(/\n$/, "") + "\n";
    if (!lang) {
      return "<pre><code>" + (escaped ? code : escape(code, true)) + "</code></pre>\n";
    }
    return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? code : escape(code, true)) + "</code></pre>\n";
  }
  blockquote(quote) {
    return `<blockquote>
${quote}</blockquote>
`;
  }
  html(html) {
    return html;
  }
  heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      const id = this.options.headerPrefix + slugger.slug(raw);
      return `<h${level} id="${id}">${text}</h${level}>
`;
    }
    return `<h${level}>${text}</h${level}>
`;
  }
  hr() {
    return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
  }
  list(body, ordered, start) {
    const type = ordered ? "ol" : "ul", startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startatt + ">\n" + body + "</" + type + ">\n";
  }
  listitem(text) {
    return `<li>${text}</li>
`;
  }
  checkbox(checked) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  paragraph(text) {
    return `<p>${text}</p>
`;
  }
  table(header, body) {
    if (body)
      body = `<tbody>${body}</tbody>`;
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  tablerow(content) {
    return `<tr>
${content}</tr>
`;
  }
  tablecell(content, flags) {
    const type = flags.header ? "th" : "td";
    const tag = flags.align ? `<${type} align="${flags.align}">` : `<${type}>`;
    return tag + content + `</${type}>
`;
  }
  strong(text) {
    return `<strong>${text}</strong>`;
  }
  em(text) {
    return `<em>${text}</em>`;
  }
  codespan(text) {
    return `<code>${text}</code>`;
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  del(text) {
    return `<del>${text}</del>`;
  }
  link(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<a href="' + escape(href) + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += ">" + text + "</a>";
    return out;
  }
  image(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += this.options.xhtml ? "/>" : ">";
    return out;
  }
  text(text) {
    return text;
  }
}
class TextRenderer {
  strong(text) {
    return text;
  }
  em(text) {
    return text;
  }
  codespan(text) {
    return text;
  }
  del(text) {
    return text;
  }
  html(text) {
    return text;
  }
  text(text) {
    return text;
  }
  link(href, title, text) {
    return "" + text;
  }
  image(href, title, text) {
    return "" + text;
  }
  br() {
    return "";
  }
}
class Slugger {
  constructor() {
    this.seen = {};
  }
  serialize(value) {
    return value.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  getNextSafeSlug(originalSlug, isDryRun) {
    let slug = originalSlug;
    let occurenceAccumulator = 0;
    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];
      do {
        occurenceAccumulator++;
        slug = originalSlug + "-" + occurenceAccumulator;
      } while (this.seen.hasOwnProperty(slug));
    }
    if (!isDryRun) {
      this.seen[originalSlug] = occurenceAccumulator;
      this.seen[slug] = 0;
    }
    return slug;
  }
  slug(value, options = {}) {
    const slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options.dryrun);
  }
}
class Parser {
  constructor(options) {
    this.options = options || defaults$3;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer();
    this.slugger = new Slugger();
  }
  static parse(tokens, options) {
    const parser2 = new Parser(options);
    return parser2.parse(tokens);
  }
  static parseInline(tokens, options) {
    const parser2 = new Parser(options);
    return parser2.parseInline(tokens);
  }
  parse(tokens, top = true) {
    let out = "", i, j, k, l2, l3, row, cell, header, body, token, ordered, start, loose, itemBody, item, checked, task, checkbox, ret;
    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "space": {
          continue;
        }
        case "hr": {
          out += this.renderer.hr();
          continue;
        }
        case "heading": {
          out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
          continue;
        }
        case "code": {
          out += this.renderer.code(token.text, token.lang, token.escaped);
          continue;
        }
        case "table": {
          header = "";
          cell = "";
          l2 = token.header.length;
          for (j = 0; j < l2; j++) {
            cell += this.renderer.tablecell(this.parseInline(token.header[j].tokens), { header: true, align: token.align[j] });
          }
          header += this.renderer.tablerow(cell);
          body = "";
          l2 = token.rows.length;
          for (j = 0; j < l2; j++) {
            row = token.rows[j];
            cell = "";
            l3 = row.length;
            for (k = 0; k < l3; k++) {
              cell += this.renderer.tablecell(this.parseInline(row[k].tokens), { header: false, align: token.align[k] });
            }
            body += this.renderer.tablerow(cell);
          }
          out += this.renderer.table(header, body);
          continue;
        }
        case "blockquote": {
          body = this.parse(token.tokens);
          out += this.renderer.blockquote(body);
          continue;
        }
        case "list": {
          ordered = token.ordered;
          start = token.start;
          loose = token.loose;
          l2 = token.items.length;
          body = "";
          for (j = 0; j < l2; j++) {
            item = token.items[j];
            checked = item.checked;
            task = item.task;
            itemBody = "";
            if (item.task) {
              checkbox = this.renderer.checkbox(checked);
              if (loose) {
                if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                  item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                  if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
                    item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                  }
                } else {
                  item.tokens.unshift({
                    type: "text",
                    text: checkbox
                  });
                }
              } else {
                itemBody += checkbox;
              }
            }
            itemBody += this.parse(item.tokens, loose);
            body += this.renderer.listitem(itemBody, task, checked);
          }
          out += this.renderer.list(body, ordered, start);
          continue;
        }
        case "html": {
          out += this.renderer.html(token.text);
          continue;
        }
        case "paragraph": {
          out += this.renderer.paragraph(this.parseInline(token.tokens));
          continue;
        }
        case "text": {
          body = token.tokens ? this.parseInline(token.tokens) : token.text;
          while (i + 1 < l && tokens[i + 1].type === "text") {
            token = tokens[++i];
            body += "\n" + (token.tokens ? this.parseInline(token.tokens) : token.text);
          }
          out += top ? this.renderer.paragraph(body) : body;
          continue;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = "", i, token, ret;
    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "escape": {
          out += renderer.text(token.text);
          break;
        }
        case "html": {
          out += renderer.html(token.text);
          break;
        }
        case "link": {
          out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
          break;
        }
        case "image": {
          out += renderer.image(token.href, token.title, token.text);
          break;
        }
        case "strong": {
          out += renderer.strong(this.parseInline(token.tokens, renderer));
          break;
        }
        case "em": {
          out += renderer.em(this.parseInline(token.tokens, renderer));
          break;
        }
        case "codespan": {
          out += renderer.codespan(token.text);
          break;
        }
        case "br": {
          out += renderer.br();
          break;
        }
        case "del": {
          out += renderer.del(this.parseInline(token.tokens, renderer));
          break;
        }
        case "text": {
          out += renderer.text(token.text);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
}
function marked$1(src, opt, callback) {
  if (typeof src === "undefined" || src === null) {
    throw new Error("marked(): input parameter is undefined or null");
  }
  if (typeof src !== "string") {
    throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected");
  }
  if (typeof opt === "function") {
    callback = opt;
    opt = null;
  }
  opt = merge({}, marked$1.defaults, opt || {});
  checkSanitizeDeprecation(opt);
  if (callback) {
    const highlight = opt.highlight;
    let tokens;
    try {
      tokens = Lexer.lex(src, opt);
    } catch (e) {
      return callback(e);
    }
    const done = function(err) {
      let out;
      if (!err) {
        try {
          if (opt.walkTokens) {
            marked$1.walkTokens(tokens, opt.walkTokens);
          }
          out = Parser.parse(tokens, opt);
        } catch (e) {
          err = e;
        }
      }
      opt.highlight = highlight;
      return err ? callback(err) : callback(null, out);
    };
    if (!highlight || highlight.length < 3) {
      return done();
    }
    delete opt.highlight;
    if (!tokens.length)
      return done();
    let pending = 0;
    marked$1.walkTokens(tokens, function(token) {
      if (token.type === "code") {
        pending++;
        setTimeout(() => {
          highlight(token.text, token.lang, function(err, code) {
            if (err) {
              return done(err);
            }
            if (code != null && code !== token.text) {
              token.text = code;
              token.escaped = true;
            }
            pending--;
            if (pending === 0) {
              done();
            }
          });
        }, 0);
      }
    });
    if (pending === 0) {
      done();
    }
    return;
  }
  try {
    const tokens = Lexer.lex(src, opt);
    if (opt.walkTokens) {
      marked$1.walkTokens(tokens, opt.walkTokens);
    }
    return Parser.parse(tokens, opt);
  } catch (e) {
    e.message += "\nPlease report this to https://github.com/markedjs/marked.";
    if (opt.silent) {
      return "<p>An error occurred:</p><pre>" + escape(e.message + "", true) + "</pre>";
    }
    throw e;
  }
}
marked$1.options = marked$1.setOptions = function(opt) {
  merge(marked$1.defaults, opt);
  changeDefaults(marked$1.defaults);
  return marked$1;
};
marked$1.getDefaults = getDefaults;
marked$1.defaults = defaults$3;
marked$1.use = function(...args) {
  const opts = merge({}, ...args);
  const extensions = marked$1.defaults.extensions || { renderers: {}, childTokens: {} };
  let hasExtensions;
  args.forEach((pack) => {
    if (pack.extensions) {
      hasExtensions = true;
      pack.extensions.forEach((ext) => {
        if (!ext.name) {
          throw new Error("extension name required");
        }
        if (ext.renderer) {
          const prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;
          if (prevRenderer) {
            extensions.renderers[ext.name] = function(...args2) {
              let ret = ext.renderer.apply(this, args2);
              if (ret === false) {
                ret = prevRenderer.apply(this, args2);
              }
              return ret;
            };
          } else {
            extensions.renderers[ext.name] = ext.renderer;
          }
        }
        if (ext.tokenizer) {
          if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
            throw new Error("extension level must be 'block' or 'inline'");
          }
          if (extensions[ext.level]) {
            extensions[ext.level].unshift(ext.tokenizer);
          } else {
            extensions[ext.level] = [ext.tokenizer];
          }
          if (ext.start) {
            if (ext.level === "block") {
              if (extensions.startBlock) {
                extensions.startBlock.push(ext.start);
              } else {
                extensions.startBlock = [ext.start];
              }
            } else if (ext.level === "inline") {
              if (extensions.startInline) {
                extensions.startInline.push(ext.start);
              } else {
                extensions.startInline = [ext.start];
              }
            }
          }
        }
        if (ext.childTokens) {
          extensions.childTokens[ext.name] = ext.childTokens;
        }
      });
    }
    if (pack.renderer) {
      const renderer = marked$1.defaults.renderer || new Renderer();
      for (const prop in pack.renderer) {
        const prevRenderer = renderer[prop];
        renderer[prop] = (...args2) => {
          let ret = pack.renderer[prop].apply(renderer, args2);
          if (ret === false) {
            ret = prevRenderer.apply(renderer, args2);
          }
          return ret;
        };
      }
      opts.renderer = renderer;
    }
    if (pack.tokenizer) {
      const tokenizer = marked$1.defaults.tokenizer || new Tokenizer();
      for (const prop in pack.tokenizer) {
        const prevTokenizer = tokenizer[prop];
        tokenizer[prop] = (...args2) => {
          let ret = pack.tokenizer[prop].apply(tokenizer, args2);
          if (ret === false) {
            ret = prevTokenizer.apply(tokenizer, args2);
          }
          return ret;
        };
      }
      opts.tokenizer = tokenizer;
    }
    if (pack.walkTokens) {
      const walkTokens = marked$1.defaults.walkTokens;
      opts.walkTokens = function(token) {
        pack.walkTokens.call(this, token);
        if (walkTokens) {
          walkTokens.call(this, token);
        }
      };
    }
    if (hasExtensions) {
      opts.extensions = extensions;
    }
    marked$1.setOptions(opts);
  });
};
marked$1.walkTokens = function(tokens, callback) {
  for (const token of tokens) {
    callback.call(marked$1, token);
    switch (token.type) {
      case "table": {
        for (const cell of token.header) {
          marked$1.walkTokens(cell.tokens, callback);
        }
        for (const row of token.rows) {
          for (const cell of row) {
            marked$1.walkTokens(cell.tokens, callback);
          }
        }
        break;
      }
      case "list": {
        marked$1.walkTokens(token.items, callback);
        break;
      }
      default: {
        if (marked$1.defaults.extensions && marked$1.defaults.extensions.childTokens && marked$1.defaults.extensions.childTokens[token.type]) {
          marked$1.defaults.extensions.childTokens[token.type].forEach(function(childTokens) {
            marked$1.walkTokens(token[childTokens], callback);
          });
        } else if (token.tokens) {
          marked$1.walkTokens(token.tokens, callback);
        }
      }
    }
  }
};
marked$1.parseInline = function(src, opt) {
  if (typeof src === "undefined" || src === null) {
    throw new Error("marked.parseInline(): input parameter is undefined or null");
  }
  if (typeof src !== "string") {
    throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected");
  }
  opt = merge({}, marked$1.defaults, opt || {});
  checkSanitizeDeprecation(opt);
  try {
    const tokens = Lexer.lexInline(src, opt);
    if (opt.walkTokens) {
      marked$1.walkTokens(tokens, opt.walkTokens);
    }
    return Parser.parseInline(tokens, opt);
  } catch (e) {
    e.message += "\nPlease report this to https://github.com/markedjs/marked.";
    if (opt.silent) {
      return "<p>An error occurred:</p><pre>" + escape(e.message + "", true) + "</pre>";
    }
    throw e;
  }
};
marked$1.Parser = Parser;
marked$1.parser = Parser.parse;
marked$1.Renderer = Renderer;
marked$1.TextRenderer = TextRenderer;
marked$1.Lexer = Lexer;
marked$1.lexer = Lexer.lex;
marked$1.Tokenizer = Tokenizer;
marked$1.Slugger = Slugger;
marked$1.parse = marked$1;
marked$1.options;
marked$1.setOptions;
marked$1.use;
marked$1.walkTokens;
marked$1.parseInline;
Parser.parse;
Lexer.lex;
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var escapes = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var unescapes = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'"
};
var rescaped = /(&amp;|&lt;|&gt;|&quot;|&#39;)/g;
var runescaped = /[&<>"']/g;
function escapeHtmlChar(match) {
  return escapes[match];
}
function unescapeHtmlChar(match) {
  return unescapes[match];
}
function escapeHtml(text) {
  return text == null ? "" : String(text).replace(runescaped, escapeHtmlChar);
}
function unescapeHtml(html) {
  return html == null ? "" : String(html).replace(rescaped, unescapeHtmlChar);
}
escapeHtml.options = unescapeHtml.options = {};
var she = {
  encode: escapeHtml,
  escape: escapeHtml,
  decode: unescapeHtml,
  unescape: unescapeHtml,
  version: "1.0.0-browser"
};
function assignment(result) {
  var stack = Array.prototype.slice.call(arguments, 1);
  var item;
  var key;
  while (stack.length) {
    item = stack.shift();
    for (key in item) {
      if (item.hasOwnProperty(key)) {
        if (Object.prototype.toString.call(result[key]) === "[object Object]") {
          result[key] = assignment(result[key], item[key]);
        } else {
          result[key] = item[key];
        }
      }
    }
  }
  return result;
}
var assignment_1 = assignment;
var lowercase$2 = function lowercase(string) {
  return typeof string === "string" ? string.toLowerCase() : string;
};
function toMap$2(list2) {
  return list2.reduce(asKey, {});
}
function asKey(accumulator, item) {
  accumulator[item] = true;
  return accumulator;
}
var toMap_1 = toMap$2;
var toMap$1 = toMap_1;
var uris = ["background", "base", "cite", "href", "longdesc", "src", "usemap"];
var attributes$1 = {
  uris: toMap$1(uris)
};
var toMap = toMap_1;
var voids = ["area", "br", "col", "hr", "img", "wbr", "input", "base", "basefont", "link", "meta"];
var elements$2 = {
  voids: toMap(voids)
};
var he$1 = she;
var lowercase$1 = lowercase$2;
var elements$1 = elements$2;
var rstart = /^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/;
var rend = /^<\s*\/\s*([\w:-]+)[^>]*>/;
var rattrs = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g;
var rtag = /^</;
var rtagend = /^<\s*\//;
function createStack() {
  var stack = [];
  stack.lastItem = function lastItem() {
    return stack[stack.length - 1];
  };
  return stack;
}
function parser$1(html, handler) {
  var stack = createStack();
  var last = html;
  var chars;
  while (html) {
    parsePart();
  }
  parseEndTag();
  function parsePart() {
    chars = true;
    parseTag();
    var same = html === last;
    last = html;
    if (same) {
      html = "";
    }
  }
  function parseTag() {
    if (html.substr(0, 4) === "<!--") {
      parseComment();
    } else if (rtagend.test(html)) {
      parseEdge(rend, parseEndTag);
    } else if (rtag.test(html)) {
      parseEdge(rstart, parseStartTag);
    }
    parseTagDecode();
  }
  function parseEdge(regex, parser2) {
    var match = html.match(regex);
    if (match) {
      html = html.substring(match[0].length);
      match[0].replace(regex, parser2);
      chars = false;
    }
  }
  function parseComment() {
    var index = html.indexOf("-->");
    if (index >= 0) {
      if (handler.comment) {
        handler.comment(html.substring(4, index));
      }
      html = html.substring(index + 3);
      chars = false;
    }
  }
  function parseTagDecode() {
    if (!chars) {
      return;
    }
    var text;
    var index = html.indexOf("<");
    if (index >= 0) {
      text = html.substring(0, index);
      html = html.substring(index);
    } else {
      text = html;
      html = "";
    }
    if (handler.chars) {
      handler.chars(text);
    }
  }
  function parseStartTag(tag, tagName, rest, unary) {
    var attrs = {};
    var low = lowercase$1(tagName);
    var u = elements$1.voids[low] || !!unary;
    rest.replace(rattrs, attrReplacer);
    if (!u) {
      stack.push(low);
    }
    if (handler.start) {
      handler.start(low, attrs, u);
    }
    function attrReplacer(match, name, doubleQuotedValue, singleQuotedValue, unquotedValue) {
      if (doubleQuotedValue === void 0 && singleQuotedValue === void 0 && unquotedValue === void 0) {
        attrs[name] = void 0;
      } else {
        attrs[name] = he$1.decode(doubleQuotedValue || singleQuotedValue || unquotedValue || "");
      }
    }
  }
  function parseEndTag(tag, tagName) {
    var i;
    var pos = 0;
    var low = lowercase$1(tagName);
    if (low) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos] === low) {
          break;
        }
      }
    }
    if (pos >= 0) {
      for (i = stack.length - 1; i >= pos; i--) {
        if (handler.end) {
          handler.end(stack[i]);
        }
      }
      stack.length = pos;
    }
  }
}
var parser_1 = parser$1;
var he = she;
var lowercase2 = lowercase$2;
var attributes = attributes$1;
var elements = elements$2;
function sanitizer$1(buffer, options) {
  var context;
  var o = options || {};
  reset();
  return {
    start,
    end,
    chars
  };
  function out(value) {
    buffer.push(value);
  }
  function start(tag, attrs, unary) {
    var low = lowercase2(tag);
    if (context.ignoring) {
      ignore(low);
      return;
    }
    if ((o.allowedTags || []).indexOf(low) === -1) {
      ignore(low);
      return;
    }
    if (o.filter && !o.filter({ tag: low, attrs })) {
      ignore(low);
      return;
    }
    out("<");
    out(low);
    Object.keys(attrs).forEach(parse);
    out(unary ? "/>" : ">");
    function parse(key) {
      var value = attrs[key];
      var classesOk = (o.allowedClasses || {})[low] || [];
      var attrsOk = (o.allowedAttributes || {})[low] || [];
      var valid;
      var lkey = lowercase2(key);
      if (lkey === "class" && attrsOk.indexOf(lkey) === -1) {
        value = value.split(" ").filter(isValidClass).join(" ").trim();
        valid = value.length;
      } else {
        valid = attrsOk.indexOf(lkey) !== -1 && (attributes.uris[lkey] !== true || testUrl(value));
      }
      if (valid) {
        out(" ");
        out(key);
        if (typeof value === "string") {
          out('="');
          out(he.encode(value));
          out('"');
        }
      }
      function isValidClass(className) {
        return classesOk && classesOk.indexOf(className) !== -1;
      }
    }
  }
  function end(tag) {
    var low = lowercase2(tag);
    var allowed = (o.allowedTags || []).indexOf(low) !== -1;
    if (allowed) {
      if (context.ignoring === false) {
        out("</");
        out(low);
        out(">");
      } else {
        unignore(low);
      }
    } else {
      unignore(low);
    }
  }
  function testUrl(text) {
    var start2 = text[0];
    if (start2 === "#" || start2 === "/") {
      return true;
    }
    var colon = text.indexOf(":");
    if (colon === -1) {
      return true;
    }
    var questionmark = text.indexOf("?");
    if (questionmark !== -1 && colon > questionmark) {
      return true;
    }
    var hash = text.indexOf("#");
    if (hash !== -1 && colon > hash) {
      return true;
    }
    return o.allowedSchemes.some(matches);
    function matches(scheme) {
      return text.indexOf(scheme + ":") === 0;
    }
  }
  function chars(text) {
    if (context.ignoring === false) {
      out(o.transformText ? o.transformText(text) : text);
    }
  }
  function ignore(tag) {
    if (elements.voids[tag]) {
      return;
    }
    if (context.ignoring === false) {
      context = { ignoring: tag, depth: 1 };
    } else if (context.ignoring === tag) {
      context.depth++;
    }
  }
  function unignore(tag) {
    if (context.ignoring === tag) {
      if (--context.depth <= 0) {
        reset();
      }
    }
  }
  function reset() {
    context = { ignoring: false, depth: 0 };
  }
}
var sanitizer_1 = sanitizer$1;
var defaults$2 = {
  allowedAttributes: {
    a: ["href", "name", "target", "title", "aria-label"],
    iframe: ["allowfullscreen", "frameborder", "src"],
    img: ["src", "alt", "title", "aria-label"]
  },
  allowedClasses: {},
  allowedSchemes: ["http", "https", "mailto"],
  allowedTags: [
    "a",
    "abbr",
    "article",
    "b",
    "blockquote",
    "br",
    "caption",
    "code",
    "del",
    "details",
    "div",
    "em",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hr",
    "i",
    "img",
    "ins",
    "kbd",
    "li",
    "main",
    "mark",
    "ol",
    "p",
    "pre",
    "section",
    "span",
    "strike",
    "strong",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "th",
    "thead",
    "tr",
    "u",
    "ul"
  ],
  filter: null
};
var defaults_1 = defaults$2;
var assign = assignment_1;
var parser = parser_1;
var sanitizer = sanitizer_1;
var defaults$1 = defaults_1;
function insane(html, options, strict) {
  var buffer = [];
  var configuration = strict === true ? options : assign({}, defaults$1, options);
  var handler = sanitizer(buffer, configuration);
  parser(html, handler);
  return buffer.join("");
}
insane.defaults = defaults$1;
var insane_1 = insane;
var hanabi$1 = { exports: {} };
(function(module, exports) {
  (function(global2, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    function createCommonjsModule(fn, module2) {
      return module2 = { exports: {} }, fn(module2, module2.exports), module2.exports;
    }
    var index$1 = createCommonjsModule(function(module2) {
      var comment2 = module2.exports = function() {
        return new RegExp("(?:" + comment2.line().source + ")|(?:" + comment2.block().source + ")", "gm");
      };
      comment2.line = function() {
        return /(?:^|\s)\/\/(.+?)$/gm;
      };
      comment2.block = function() {
        return /\/\*([\S\s]*?)\*\//gm;
      };
    });
    var defaultColors = ["23AC69", "91C132", "F19726", "E8552D", "1AAB8E", "E1147F", "2980C1", "1BA1E6", "9FA0A0", "F19726", "E30B20", "E30B20", "A3338B"];
    var index = function(input, ref) {
      if (ref === void 0)
        ref = {};
      var colors = ref.colors;
      if (colors === void 0)
        colors = defaultColors;
      var index2 = 0;
      var cache = {};
      var wordRe = /[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/;
      var leftAngleRe = /</;
      var re = new RegExp("(" + wordRe.source + "|" + leftAngleRe.source + ")|(" + index$1().source + ")", "gmi");
      return input.replace(re, function(m, word, cm) {
        if (cm) {
          return toComment(cm);
        }
        if (word === "<") {
          return "&lt;";
        }
        var color;
        if (cache[word]) {
          color = cache[word];
        } else {
          color = colors[index2];
          cache[word] = color;
        }
        var out = '<span style="color: #' + color + '">' + word + "</span>";
        index2 = ++index2 % colors.length;
        return out;
      });
    };
    function toComment(cm) {
      return '<span style="color: slategray">' + cm + "</span>";
    }
    return index;
  });
})(hanabi$1);
var hanabi = hanabi$1.exports;
function createElement(htmlStr = "") {
  const div = document.createElement("div");
  div.innerHTML = htmlStr.trim();
  return div.firstElementChild || div;
}
function getHeight(el) {
  return parseFloat(getComputedStyle(el, null).height.replace("px", ""));
}
function htmlEncode(str) {
  const temp = document.createElement("div");
  temp.innerText = str;
  const output = temp.innerHTML;
  return output;
}
function getQueryParam(name) {
  const match = RegExp(`[?&]${name}=([^&]*)`).exec(window.location.search);
  return match && decodeURIComponent(match[1].replace(/\+/g, " "));
}
function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX
  };
}
function padWithZeros(vNumber, width) {
  let numAsString = vNumber.toString();
  while (numAsString.length < width) {
    numAsString = `0${numAsString}`;
  }
  return numAsString;
}
function dateFormat(date) {
  const vDay = padWithZeros(date.getDate(), 2);
  const vMonth = padWithZeros(date.getMonth() + 1, 2);
  const vYear = padWithZeros(date.getFullYear(), 2);
  return `${vYear}-${vMonth}-${vDay}`;
}
function timeAgo(date, ctx) {
  try {
    const oldTime = date.getTime();
    const currTime = new Date().getTime();
    const diffValue = currTime - oldTime;
    const days = Math.floor(diffValue / (24 * 3600 * 1e3));
    if (days === 0) {
      const leave1 = diffValue % (24 * 3600 * 1e3);
      const hours = Math.floor(leave1 / (3600 * 1e3));
      if (hours === 0) {
        const leave2 = leave1 % (3600 * 1e3);
        const minutes = Math.floor(leave2 / (60 * 1e3));
        if (minutes === 0) {
          const leave3 = leave2 % (60 * 1e3);
          const seconds = Math.round(leave3 / 1e3);
          return `${seconds} ${ctx.$t("seconds")}`;
        }
        return `${minutes} ${ctx.$t("minutes")}`;
      }
      return `${hours} ${ctx.$t("hours")}`;
    }
    if (days < 0)
      return ctx.$t("now");
    if (days < 8) {
      return `${days} ${ctx.$t("days")}`;
    }
    return dateFormat(date);
  } catch (error) {
    console.error(error);
    return " - ";
  }
}
function onImagesLoaded($container, event) {
  if (!$container)
    return;
  const images = $container.getElementsByTagName("img");
  if (!images.length)
    return;
  let loaded = images.length;
  for (let i = 0; i < images.length; i++) {
    if (images[i].complete) {
      loaded--;
    } else {
      images[i].addEventListener("load", () => {
        loaded--;
        if (loaded === 0)
          event();
      });
    }
    if (loaded === 0)
      event();
  }
}
function getGravatarURL(ctx, emailMD5) {
  return `${ctx.conf.gravatar.mirror.replace(/\/$/, "")}/${emailMD5}?d=${encodeURIComponent(ctx.conf.gravatar.default)}&s=80`;
}
function versionCompare(a, b) {
  const pa = a.split(".");
  const pb = b.split(".");
  for (let i = 0; i < 3; i++) {
    const na = Number(pa[i]);
    const nb = Number(pb[i]);
    if (na > nb)
      return 1;
    if (nb > na)
      return -1;
    if (!Number.isNaN(na) && Number.isNaN(nb))
      return 1;
    if (Number.isNaN(na) && !Number.isNaN(nb))
      return -1;
  }
  return 0;
}
function initMarked(ctx) {
  try {
    if (!marked$1.name)
      return;
  } catch (e) {
    return;
  }
  const renderer = new marked$1.Renderer();
  const orgLinkRenderer = renderer.link;
  renderer.link = (href, title, text) => {
    const localLink = href == null ? void 0 : href.startsWith(`${window.location.protocol}//${window.location.hostname}`);
    const html = orgLinkRenderer.call(renderer, href, title, text);
    return html.replace(/^<a /, `<a target="_blank" ${!localLink ? `rel="noreferrer noopener nofollow"` : ""} `);
  };
  renderer.code = (block2, lang) => {
    const realLang = !lang ? "plaintext" : lang;
    let colorized = block2;
    if (window.hljs) {
      if (realLang && window.hljs.getLanguage(realLang)) {
        colorized = window.hljs.highlight(realLang, block2).value;
      }
    } else {
      colorized = hanabi(block2);
    }
    return `<pre rel="${realLang}">
<code class="hljs language-${realLang}">${colorized.replace(/&amp;/g, "&")}</code>
</pre>`;
  };
  const nMarked = marked$1;
  marked$1.setOptions({
    renderer,
    pedantic: false,
    gfm: true,
    breaks: true,
    smartLists: true,
    smartypants: true,
    xhtml: false,
    sanitize: false,
    silent: true
  });
  ctx.markedInstance = nMarked;
}
function marked(ctx, src) {
  var _a;
  let markedContent = (_a = ctx.markedInstance) == null ? void 0 : _a.parse(src);
  if (!markedContent) {
    markedContent = src.replace(/```\s*([^]+?.*?[^]+?[^]+?)```/g, (_, code) => `<pre><code>${hanabi(code)}</code></pre>`).replace(/!\[(.*?)\]\((.*?)\)/g, (_, alt, imgSrc) => `<img src="${imgSrc}" alt="${alt}" />`).replace(/\[(.*?)\]\((.*?)\)/g, (_, text, link) => `<a href="${link}" target="_blank">${text}</a>`).replace(/\n/g, "<br>");
  }
  let dest = insane_1(markedContent, {
    allowedClasses: {},
    allowedSchemes: ["http", "https", "mailto"],
    allowedTags: [
      "a",
      "abbr",
      "article",
      "b",
      "blockquote",
      "br",
      "caption",
      "code",
      "del",
      "details",
      "div",
      "em",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "hr",
      "i",
      "img",
      "ins",
      "kbd",
      "li",
      "main",
      "mark",
      "ol",
      "p",
      "pre",
      "section",
      "span",
      "strike",
      "strong",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "th",
      "thead",
      "tr",
      "u",
      "ul"
    ],
    allowedAttributes: {
      "*": ["title", "accesskey"],
      a: ["href", "name", "target", "aria-label", "rel"],
      img: ["src", "alt", "title", "atk-emoticon", "aria-label"],
      code: ["class"],
      span: ["class", "style"]
    },
    filter: (node) => {
      const allowed = [
        ["code", /^hljs\W+language-(.*)$/],
        ["span", /^(hljs-.*)$/]
      ];
      allowed.forEach(([tag, reg]) => {
        if (node.tag === tag && !!node.attrs.class && !reg.test(node.attrs.class)) {
          delete node.attrs.class;
        }
      });
      if (node.tag === "span" && !!node.attrs.style && !/^color:(\W+)?#[0-9a-f]{3,6};?$/i.test(node.attrs.style)) {
        delete node.attrs.style;
      }
      return true;
    }
  });
  ctx.markedReplacers.forEach((replacer) => {
    if (typeof replacer === "function")
      dest = replacer(dest);
  });
  return dest;
}
function getCorrectUserAgent() {
  return __async(this, null, function* () {
    const uaRaw = navigator.userAgent;
    if (!navigator.userAgentData || !navigator.userAgentData.getHighEntropyValues) {
      return uaRaw;
    }
    const uaData = navigator.userAgentData;
    let uaGot = null;
    try {
      uaGot = yield uaData.getHighEntropyValues(["platformVersion"]);
    } catch (err) {
      console.error(err);
      return uaRaw;
    }
    const majorPlatformVersion = Number(uaGot.platformVersion.split(".")[0]);
    if (uaData.platform === "Windows") {
      if (majorPlatformVersion >= 13) {
        return uaRaw.replace(/Windows NT 10.0/, "Windows NT 11.0");
      }
    }
    if (uaData.platform === "macOS") {
      if (majorPlatformVersion >= 11) {
        return uaRaw.replace(/(Mac OS X \d+_\d+_\d+|Mac OS X)/, `Mac OS X ${uaGot.platformVersion.replace(/\./g, "_")}`);
      }
    }
    return uaRaw;
  });
}
function isValidURL(urlRaw) {
  let url;
  try {
    url = new URL(urlRaw);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}
function getURLBasedOnApi(ctx, path) {
  return getURLBasedOn(ctx.conf.server, path);
}
function getURLBasedOn(baseURL, path) {
  return `${baseURL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}
function mergeDeep(target, source) {
  const isObject = (obj) => obj && typeof obj === "object";
  if (!isObject(target) || !isObject(source)) {
    return source;
  }
  Object.keys(source).forEach((key) => {
    const targetValue = target[key];
    const sourceValue = source[key];
    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = mergeDeep(__spreadValues({}, targetValue), sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });
  return target;
}
function showLoading(parentElem, conf) {
  let $loading = parentElem.querySelector(":scope > .atk-loading");
  if (!$loading) {
    $loading = createElement(`<div class="atk-loading atk-fade-in" style="display: none;">
      <div class="atk-loading-spinner">
        <svg viewBox="25 25 50 50"><circle cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle></svg>
      </div>
    </div>`);
    if (conf == null ? void 0 : conf.transparentBg)
      $loading.style.background = "transparent";
    parentElem.appendChild($loading);
  }
  $loading.style.display = "";
  const $spinner = $loading.querySelector(".atk-loading-spinner");
  if ($spinner) {
    $spinner.style.display = "none";
    window.setTimeout(() => {
      $spinner.style.display = "";
    }, 500);
  }
}
function hideLoading(parentElem) {
  const $loading = parentElem.querySelector(":scope > .atk-loading");
  if ($loading)
    $loading.style.display = "none";
}
function isVisible(el, viewport = document.documentElement) {
  const viewportHeight = viewport.clientHeight;
  const docViewTop = viewport.scrollTop;
  const docViewBottom = docViewTop + viewportHeight;
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top + docViewTop;
  const elemBottom = elemTop + rect.height;
  return elemBottom <= docViewBottom;
}
function scrollIntoView(elem, enableAnim = true) {
  const top = getOffset(elem).top + getHeight(elem) / 2 - document.documentElement.clientHeight / 2;
  if (enableAnim) {
    window.scroll({
      top: top > 0 ? top : 0,
      left: 0
    });
  } else {
    window.scroll(0, top > 0 ? top : 0);
  }
}
function showNotify(wrapElem, msg, type) {
  const colors = { s: "#57d59f", e: "#ff6f6c", w: "#ffc721", i: "#2ebcfc" };
  const timeout = 3e3;
  const notifyElem = createElement(`<div class="atk-notify atk-fade-in" style="background-color: ${colors[type]}"><span class="atk-notify-content"></span></div>`);
  const notifyContentEl = notifyElem.querySelector(".atk-notify-content");
  notifyContentEl.innerHTML = htmlEncode(msg).replace("\n", "<br/>");
  wrapElem.appendChild(notifyElem);
  const notifyRemove = () => {
    notifyElem.classList.add("atk-fade-out");
    setTimeout(() => {
      notifyElem.remove();
    }, 200);
  };
  let timeoutFn;
  {
    timeoutFn = window.setTimeout(() => {
      notifyRemove();
    }, timeout);
  }
  notifyElem.addEventListener("click", () => {
    notifyRemove();
    window.clearTimeout(timeoutFn);
  });
}
function playFadeAnim(elem, after, type = "in") {
  elem.classList.add(`atk-fade-${type}`);
  const onAnimEnded = () => {
    elem.classList.remove(`atk-fade-${type}`);
    elem.removeEventListener("animationend", onAnimEnded);
    if (after)
      after();
  };
  elem.addEventListener("animationend", onAnimEnded);
}
function playFadeInAnim(elem, after) {
  playFadeAnim(elem, after, "in");
}
function setError(parentElem, html, title = '<span class="atk-error-title">Artalk Error</span>') {
  let elem = parentElem.querySelector(".atk-error-layer");
  if (html === null) {
    if (elem !== null)
      elem.remove();
    return;
  }
  if (!elem) {
    elem = createElement(`<div class="atk-error-layer">${title}<span class="atk-error-text"></span></div>`);
    parentElem.appendChild(elem);
  }
  const errorTextEl = elem.querySelector(".atk-error-text");
  errorTextEl.innerHTML = "";
  if (html === null)
    return;
  if (html instanceof HTMLElement) {
    errorTextEl.appendChild(html);
  } else {
    errorTextEl.innerText = html;
  }
}
function getScrollBarWidth() {
  const inner = document.createElement("p");
  inner.style.width = "100%";
  inner.style.height = "200px";
  const outer = document.createElement("div");
  outer.style.position = "absolute";
  outer.style.top = "0px";
  outer.style.left = "0px";
  outer.style.visibility = "hidden";
  outer.style.width = "200px";
  outer.style.height = "150px";
  outer.style.overflow = "hidden";
  outer.appendChild(inner);
  document.body.appendChild(outer);
  const w1 = inner.offsetWidth;
  outer.style.overflow = "scroll";
  let w2 = inner.offsetWidth;
  if (w1 === w2)
    w2 = outer.clientWidth;
  document.body.removeChild(outer);
  return w1 - w2;
}
const _Layer = class extends Component {
  constructor(ctx, name, el) {
    super(ctx);
    __publicField(this, "name");
    __publicField(this, "$wrap");
    __publicField(this, "$mask");
    __publicField(this, "maskClickHideEnable", true);
    __publicField(this, "afterHide");
    this.name = name;
    const { $wrap, $mask } = GetLayerWrap(ctx);
    this.$wrap = $wrap;
    this.$mask = $mask;
    this.$el = this.$wrap.querySelector(`[data-layer-name="${name}"].atk-layer-item`);
    if (this.$el === null) {
      if (!el) {
        this.$el = createElement();
        this.$el.classList.add("atk-layer-item");
      } else {
        this.$el = el;
      }
    }
    this.$el.setAttribute("data-layer-name", name);
    this.$el.style.display = "none";
    this.$wrap.append(this.$el);
  }
  getName() {
    return this.name;
  }
  getWrapEl() {
    return this.$wrap;
  }
  getEl() {
    return this.$el;
  }
  show() {
    this.fireAllActionTimer();
    this.$wrap.style.display = "block";
    this.$mask.style.display = "block";
    this.$mask.classList.add("atk-fade-in");
    this.$el.style.display = "";
    this.$mask.onclick = () => {
      if (this.maskClickHideEnable)
        this.hide();
    };
    this.pageBodyScrollBarHide();
  }
  hide() {
    if (this.afterHide)
      this.afterHide();
    this.$wrap.classList.add("atk-fade-out");
    this.$el.style.display = "none";
    this.pageBodyScrollBarShow();
    this.newActionTimer(() => {
      this.$wrap.style.display = "none";
      this.checkCleanLayer();
    }, 450);
    this.newActionTimer(() => {
      this.$wrap.style.display = "none";
      this.$wrap.classList.remove("atk-fade-out");
    }, 200);
  }
  setMaskClickHide(enable) {
    this.maskClickHideEnable = enable;
  }
  pageBodyScrollBarHide() {
    document.body.style.overflow = "hidden";
    const bpr = parseInt(window.getComputedStyle(document.body, null).getPropertyValue("padding-right"), 10);
    document.body.style.paddingRight = `${getScrollBarWidth() + bpr || 0}px`;
  }
  pageBodyScrollBarShow() {
    document.body.style.overflow = _Layer.BodyOrgOverflow;
    document.body.style.paddingRight = _Layer.BodyOrgPaddingRight;
  }
  newActionTimer(func, delay) {
    const act = () => {
      func();
      _Layer.actionTimers = _Layer.actionTimers.filter((o) => o.act !== act);
    };
    const tid = window.setTimeout(() => act(), delay);
    _Layer.actionTimers.push({ act, tid });
  }
  fireAllActionTimer() {
    _Layer.actionTimers.forEach((item) => {
      clearTimeout(item.tid);
      item.act();
    });
  }
  disposeNow() {
    this.$el.remove();
    this.pageBodyScrollBarShow();
    this.checkCleanLayer();
  }
  dispose() {
    this.hide();
    this.$el.remove();
    this.checkCleanLayer();
  }
  checkCleanLayer() {
    if (this.getWrapEl().querySelectorAll(".atk-layer-item").length === 0) {
      this.$wrap.style.display = "none";
    }
  }
};
let Layer = _Layer;
__publicField(Layer, "BodyOrgOverflow");
__publicField(Layer, "BodyOrgPaddingRight");
__publicField(Layer, "actionTimers", []);
function GetLayerWrap(ctx) {
  let $wrap = document.querySelector(`.atk-layer-wrap#ctx-${ctx.cid}`);
  if (!$wrap) {
    $wrap = createElement(`<div class="atk-layer-wrap" id="ctx-${ctx.cid}" style="display: none;"><div class="atk-layer-mask"></div></div>`);
    document.body.appendChild($wrap);
  }
  const $mask = $wrap.querySelector(".atk-layer-mask");
  return { $wrap, $mask };
}
function Fetch(ctx, input, init, timeout) {
  return __async(this, null, function* () {
    var _a, _b;
    if (ctx.user.data.token) {
      const headers = new Headers(init.headers);
      headers.set("Authorization", `Bearer ${ctx.user.data.token}`);
      init.headers = headers;
    }
    const resp = yield timeoutFetch(ctx, input, timeout || ctx.conf.reqTimeout || 15e3, init);
    const respHttpCode = resp.status;
    const noAccessCodes = [401, 400];
    const isNoAccess = noAccessCodes.includes(respHttpCode);
    if (!resp.ok && !isNoAccess)
      throw new Error(`${ctx.$t("reqGot")} ${respHttpCode}`);
    let json = yield resp.json();
    const recall = (resolve, reject) => {
      Fetch(ctx, input, init).then((d) => {
        resolve(d);
      }).catch((e) => {
        reject(e);
      });
    };
    if ((_a = json.data) == null ? void 0 : _a.need_captcha) {
      json = yield new Promise((resolve, reject) => {
        ctx.checkCaptcha({
          imgData: json.data.img_data,
          iframe: json.data.iframe,
          onSuccess: () => {
            recall(resolve, reject);
          },
          onCancel: () => {
            reject(json);
          }
        });
      });
    } else if (((_b = json.data) == null ? void 0 : _b.need_login) || isNoAccess) {
      json = yield new Promise((resolve, reject) => {
        ctx.checkAdmin({
          onSuccess: () => {
            recall(resolve, reject);
          },
          onCancel: () => {
            reject(json);
          }
        });
      });
    }
    if (!json.success)
      throw json;
    return json;
  });
}
function POST(ctx, url, data) {
  return __async(this, null, function* () {
    const init = {
      method: "POST"
    };
    if (data)
      init.body = ToFormData(data);
    const json = yield Fetch(ctx, url, init);
    return json.data || {};
  });
}
function ToFormData(object) {
  const formData = new FormData();
  Object.keys(object).forEach((key) => formData.append(key, String(object[key])));
  return formData;
}
function timeoutFetch(ctx, url, ms, opts) {
  var _a;
  const controller = new AbortController();
  (_a = opts.signal) == null ? void 0 : _a.addEventListener("abort", () => controller.abort());
  let promise = fetch(url, __spreadProps(__spreadValues({}, opts), { signal: controller.signal }));
  if (ms > 0) {
    const timer = setTimeout(() => controller.abort(), ms);
    promise.finally(() => {
      clearTimeout(timer);
    });
  }
  promise = promise.catch((err) => {
    throw (err || {}).name === "AbortError" ? new Error(ctx.$t("reqAborted")) : err;
  });
  return promise;
}
(function(factory) {
  factory();
})(function() {
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null)
        break;
    }
    return object;
  }
  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get2(target2, property2, receiver2) {
        var base = _superPropBase(target2, property2);
        if (!base)
          return;
        var desc = Object.getOwnPropertyDescriptor(base, property2);
        if (desc.get) {
          return desc.get.call(receiver2);
        }
        return desc.value;
      };
    }
    return _get(target, property, receiver || target);
  }
  var Emitter = /* @__PURE__ */ function() {
    function Emitter2() {
      _classCallCheck(this, Emitter2);
      Object.defineProperty(this, "listeners", {
        value: {},
        writable: true,
        configurable: true
      });
    }
    _createClass(Emitter2, [{
      key: "addEventListener",
      value: function addEventListener(type, callback, options) {
        if (!(type in this.listeners)) {
          this.listeners[type] = [];
        }
        this.listeners[type].push({
          callback,
          options
        });
      }
    }, {
      key: "removeEventListener",
      value: function removeEventListener(type, callback) {
        if (!(type in this.listeners)) {
          return;
        }
        var stack = this.listeners[type];
        for (var i = 0, l = stack.length; i < l; i++) {
          if (stack[i].callback === callback) {
            stack.splice(i, 1);
            return;
          }
        }
      }
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(event) {
        if (!(event.type in this.listeners)) {
          return;
        }
        var stack = this.listeners[event.type];
        var stackToCall = stack.slice();
        for (var i = 0, l = stackToCall.length; i < l; i++) {
          var listener = stackToCall[i];
          try {
            listener.callback.call(this, event);
          } catch (e) {
            Promise.resolve().then(function() {
              throw e;
            });
          }
          if (listener.options && listener.options.once) {
            this.removeEventListener(event.type, listener.callback);
          }
        }
        return !event.defaultPrevented;
      }
    }]);
    return Emitter2;
  }();
  var AbortSignal = /* @__PURE__ */ function(_Emitter) {
    _inherits(AbortSignal2, _Emitter);
    var _super = _createSuper(AbortSignal2);
    function AbortSignal2() {
      var _this;
      _classCallCheck(this, AbortSignal2);
      _this = _super.call(this);
      if (!_this.listeners) {
        Emitter.call(_assertThisInitialized(_this));
      }
      Object.defineProperty(_assertThisInitialized(_this), "aborted", {
        value: false,
        writable: true,
        configurable: true
      });
      Object.defineProperty(_assertThisInitialized(_this), "onabort", {
        value: null,
        writable: true,
        configurable: true
      });
      return _this;
    }
    _createClass(AbortSignal2, [{
      key: "toString",
      value: function toString() {
        return "[object AbortSignal]";
      }
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(event) {
        if (event.type === "abort") {
          this.aborted = true;
          if (typeof this.onabort === "function") {
            this.onabort.call(this, event);
          }
        }
        _get(_getPrototypeOf(AbortSignal2.prototype), "dispatchEvent", this).call(this, event);
      }
    }]);
    return AbortSignal2;
  }(Emitter);
  var AbortController2 = /* @__PURE__ */ function() {
    function AbortController3() {
      _classCallCheck(this, AbortController3);
      Object.defineProperty(this, "signal", {
        value: new AbortSignal(),
        writable: true,
        configurable: true
      });
    }
    _createClass(AbortController3, [{
      key: "abort",
      value: function abort() {
        var event;
        try {
          event = new Event("abort");
        } catch (e) {
          if (typeof document !== "undefined") {
            if (!document.createEvent) {
              event = document.createEventObject();
              event.type = "abort";
            } else {
              event = document.createEvent("Event");
              event.initEvent("abort", false, false);
            }
          } else {
            event = {
              type: "abort",
              bubbles: false,
              cancelable: false
            };
          }
        }
        this.signal.dispatchEvent(event);
      }
    }, {
      key: "toString",
      value: function toString() {
        return "[object AbortController]";
      }
    }]);
    return AbortController3;
  }();
  if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
    AbortController2.prototype[Symbol.toStringTag] = "AbortController";
    AbortSignal.prototype[Symbol.toStringTag] = "AbortSignal";
  }
  function polyfillNeeded(self2) {
    if (self2.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
      console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill");
      return true;
    }
    return typeof self2.Request === "function" && !self2.Request.prototype.hasOwnProperty("signal") || !self2.AbortController;
  }
  function abortableFetchDecorator(patchTargets) {
    if (typeof patchTargets === "function") {
      patchTargets = {
        fetch: patchTargets
      };
    }
    var _patchTargets = patchTargets, fetch2 = _patchTargets.fetch, _patchTargets$Request = _patchTargets.Request, NativeRequest = _patchTargets$Request === void 0 ? fetch2.Request : _patchTargets$Request, NativeAbortController = _patchTargets.AbortController, _patchTargets$__FORCE = _patchTargets.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL, __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL = _patchTargets$__FORCE === void 0 ? false : _patchTargets$__FORCE;
    if (!polyfillNeeded({
      fetch: fetch2,
      Request: NativeRequest,
      AbortController: NativeAbortController,
      __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
    })) {
      return {
        fetch: fetch2,
        Request
      };
    }
    var Request = NativeRequest;
    if (Request && !Request.prototype.hasOwnProperty("signal") || __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
      Request = function Request2(input, init) {
        var signal;
        if (init && init.signal) {
          signal = init.signal;
          delete init.signal;
        }
        var request = new NativeRequest(input, init);
        if (signal) {
          Object.defineProperty(request, "signal", {
            writable: false,
            enumerable: false,
            configurable: true,
            value: signal
          });
        }
        return request;
      };
      Request.prototype = NativeRequest.prototype;
    }
    var realFetch = fetch2;
    var abortableFetch = function abortableFetch2(input, init) {
      var signal = Request && Request.prototype.isPrototypeOf(input) ? input.signal : init ? init.signal : void 0;
      if (signal) {
        var abortError;
        try {
          abortError = new DOMException("Aborted", "AbortError");
        } catch (err) {
          abortError = new Error("Aborted");
          abortError.name = "AbortError";
        }
        if (signal.aborted) {
          return Promise.reject(abortError);
        }
        var cancellation = new Promise(function(_, reject) {
          signal.addEventListener("abort", function() {
            return reject(abortError);
          }, {
            once: true
          });
        });
        if (init && init.signal) {
          delete init.signal;
        }
        return Promise.race([cancellation, realFetch(input, init)]);
      }
      return realFetch(input, init);
    };
    return {
      fetch: abortableFetch,
      Request
    };
  }
  (function(self2) {
    if (!polyfillNeeded(self2)) {
      return;
    }
    if (!self2.fetch) {
      console.warn("fetch() is not available, cannot install abortcontroller-polyfill");
      return;
    }
    var _abortableFetch = abortableFetchDecorator(self2), fetch2 = _abortableFetch.fetch, Request = _abortableFetch.Request;
    self2.fetch = fetch2;
    self2.Request = Request;
    Object.defineProperty(self2, "AbortController", {
      writable: true,
      enumerable: false,
      configurable: true,
      value: AbortController2
    });
    Object.defineProperty(self2, "AbortSignal", {
      writable: true,
      enumerable: false,
      configurable: true,
      value: AbortSignal
    });
  })(typeof self !== "undefined" ? self : commonjsGlobal);
});
class Api {
  constructor(ctx) {
    __publicField(this, "ctx");
    __publicField(this, "baseURL");
    this.ctx = ctx;
    this.baseURL = `${ctx.conf.server}/api`;
  }
  get(offset, pageSize, flatMode, paramsEditor) {
    const params = {
      page_key: this.ctx.conf.pageKey,
      site_name: this.ctx.conf.site || "",
      limit: pageSize,
      offset
    };
    if (flatMode)
      params.flat_mode = flatMode;
    if (this.ctx.user.checkHasBasicUserInfo()) {
      params.name = this.ctx.user.data.nick;
      params.email = this.ctx.user.data.email;
    }
    if (paramsEditor)
      paramsEditor(params);
    return POST(this.ctx, `${this.baseURL}/get`, params);
  }
  add(comment2) {
    return __async(this, null, function* () {
      const params = {
        name: comment2.nick,
        email: comment2.email,
        link: comment2.link,
        content: comment2.content,
        rid: comment2.rid,
        page_key: comment2.page_key,
        ua: yield getCorrectUserAgent()
      };
      if (comment2.page_title)
        params.page_title = comment2.page_title;
      if (comment2.site_name)
        params.site_name = comment2.site_name;
      const data = yield POST(this.ctx, `${this.baseURL}/add`, params);
      return data.comment;
    });
  }
  commentEdit(data) {
    return __async(this, null, function* () {
      const params = __spreadValues({}, data);
      const d = yield POST(this.ctx, `${this.baseURL}/admin/comment-edit`, params);
      return d.comment;
    });
  }
  commentDel(commentID, siteName) {
    const params = {
      id: String(commentID),
      site_name: siteName || ""
    };
    return POST(this.ctx, `${this.baseURL}/admin/comment-del`, params);
  }
  login(name, email, password) {
    return __async(this, null, function* () {
      const params = {
        name,
        email,
        password
      };
      if (this.ctx.conf.site)
        params.site_name = this.ctx.conf.site;
      const data = yield POST(this.ctx, `${this.baseURL}/login`, params);
      return data.token;
    });
  }
  userGet(name, email) {
    const ctrl = new AbortController();
    const params = {
      name,
      email,
      site_name: this.ctx.conf.site || ""
    };
    const req = Fetch(this.ctx, `${this.baseURL}/user-get`, {
      method: "POST",
      body: ToFormData(params),
      signal: ctrl.signal
    }).then((json) => ({
      user: json.data.user,
      is_login: json.data.is_login,
      unread: json.data.unread || [],
      unread_count: json.data.unread_count || 0
    }));
    return {
      req,
      abort: () => {
        ctrl.abort();
      }
    };
  }
  loginStatus() {
    return __async(this, null, function* () {
      const data = yield POST(this.ctx, `${this.baseURL}/login-status`, {
        name: this.ctx.user.data.nick,
        email: this.ctx.user.data.email
      });
      return data || { is_login: false, is_admin: false };
    });
  }
  pageGet(siteName, offset, limit) {
    return __async(this, null, function* () {
      const params = {
        site_name: siteName || "",
        offset: offset || 0,
        limit: limit || 15
      };
      const d = yield POST(this.ctx, `${this.baseURL}/admin/page-get`, params);
      return d;
    });
  }
  pageEdit(data) {
    return __async(this, null, function* () {
      const params = {
        id: data.id,
        key: data.key,
        title: data.title,
        admin_only: data.admin_only,
        site_name: data.site_name || this.ctx.conf.site
      };
      const d = yield POST(this.ctx, `${this.baseURL}/admin/page-edit`, params);
      return d.page;
    });
  }
  pageDel(pageKey, siteName) {
    const params = {
      key: String(pageKey),
      site_name: siteName || ""
    };
    return POST(this.ctx, `${this.baseURL}/admin/page-del`, params);
  }
  pageFetch(id, siteName, getStatus) {
    return __async(this, null, function* () {
      const params = {};
      if (id)
        params.id = id;
      if (siteName)
        params.site_name = siteName;
      if (getStatus)
        params.get_status = getStatus;
      const d = yield POST(this.ctx, `${this.baseURL}/admin/page-fetch`, params);
      return d;
    });
  }
  siteGet() {
    return __async(this, null, function* () {
      const params = {};
      const d = yield POST(this.ctx, `${this.baseURL}/admin/site-get`, params);
      return d.sites;
    });
  }
  siteAdd(name, urls) {
    return __async(this, null, function* () {
      const params = {
        name,
        urls
      };
      const d = yield POST(this.ctx, `${this.baseURL}/admin/site-add`, params);
      return d.site;
    });
  }
  siteEdit(data) {
    return __async(this, null, function* () {
      const params = {
        id: data.id,
        name: data.name || "",
        urls: data.urls || ""
      };
      const d = yield POST(this.ctx, `${this.baseURL}/admin/site-edit`, params);
      return d.site;
    });
  }
  siteDel(id, delContent = false) {
    const params = { id, del_content: delContent };
    return POST(this.ctx, `${this.baseURL}/admin/site-del`, params);
  }
  export() {
    return __async(this, null, function* () {
      var _a;
      const d = yield Fetch(this.ctx, `${this.baseURL}/admin/export`, { method: "POST" }, 0);
      return ((_a = d.data) == null ? void 0 : _a.data) || "";
    });
  }
  vote(targetID, type) {
    return __async(this, null, function* () {
      const params = {
        site_name: this.ctx.conf.site || "",
        target_id: targetID,
        type
      };
      if (this.ctx.user.checkHasBasicUserInfo()) {
        params.name = this.ctx.user.data.nick;
        params.email = this.ctx.user.data.email;
      }
      const data = yield POST(this.ctx, `${this.baseURL}/vote`, params);
      return data;
    });
  }
  markRead(notifyKey, readAll = false) {
    const params = {
      site_name: this.ctx.conf.site || "",
      notify_key: notifyKey
    };
    if (readAll) {
      delete params.notify_key;
      params.read_all = true;
      params.name = this.ctx.user.data.nick;
      params.email = this.ctx.user.data.email;
    }
    return POST(this.ctx, `${this.baseURL}/mark-read`, params);
  }
  pv() {
    return __async(this, null, function* () {
      const params = {
        site_name: this.ctx.conf.site || "",
        page_key: this.ctx.conf.pageKey || "",
        page_title: this.ctx.conf.pageTitle || ""
      };
      const p = yield POST(this.ctx, `${this.baseURL}/pv`, params);
      return p.pv;
    });
  }
  stat(type, pageKeys, limit) {
    return __async(this, null, function* () {
      const params = {
        type,
        site_name: this.ctx.conf.site || ""
      };
      if (pageKeys)
        params.page_keys = Array.isArray(pageKeys) ? pageKeys.join(",") : pageKeys;
      if (limit)
        params.limit = limit;
      const data = yield POST(this.ctx, `${this.baseURL}/stat`, params);
      return data;
    });
  }
  imgUpload(file) {
    return __async(this, null, function* () {
      const params = {
        name: this.ctx.user.data.nick,
        email: this.ctx.user.data.email,
        page_key: this.ctx.conf.pageKey
      };
      if (this.ctx.conf.site)
        params.site_name = this.ctx.conf.site;
      const form = ToFormData(params);
      form.set("file", file);
      const init = {
        method: "POST",
        body: form
      };
      const json = yield Fetch(this.ctx, `${this.baseURL}/img-upload`, init);
      return json.data || {};
    });
  }
  conf() {
    return __async(this, null, function* () {
      const data = yield POST(this.ctx, `${this.baseURL}/conf`);
      const conf = data.frontend_conf || {};
      if (conf.emoticons && typeof conf.emoticons === "string") {
        conf.emoticons = conf.emoticons.trim();
        if (conf.emoticons.startsWith("[") || conf.emoticons.startsWith("{")) {
          conf.emoticons = JSON.parse(conf.emoticons);
        } else if (conf.emoticons === "false") {
          conf.emoticons = false;
        }
      }
      return conf;
    });
  }
  captchaGet() {
    return __async(this, null, function* () {
      const data = yield POST(this.ctx, `${this.baseURL}/captcha/refresh`);
      return data.img_data || "";
    });
  }
  captchaCheck(value) {
    return __async(this, null, function* () {
      const data = yield POST(this.ctx, `${this.baseURL}/captcha/check`, { value });
      return data.img_data || "";
    });
  }
  captchaStatus() {
    return __async(this, null, function* () {
      const data = yield POST(this.ctx, `${this.baseURL}/captcha/status`);
      return data || { is_pass: false };
    });
  }
  cacheFlushAll() {
    const params = { flush_all: true };
    return POST(this.ctx, `${this.baseURL}/admin/cache-flush`, params);
  }
  cacheWarmUp() {
    const params = {};
    return POST(this.ctx, `${this.baseURL}/admin/cache-warm`, params);
  }
}
class Context {
  constructor(conf, $root) {
    __publicField(this, "api");
    __publicField(this, "editor");
    __publicField(this, "list");
    __publicField(this, "sidebarLayer");
    __publicField(this, "checkerLauncher");
    __publicField(this, "cid");
    __publicField(this, "conf");
    __publicField(this, "user");
    __publicField(this, "$root");
    __publicField(this, "markedInstance");
    __publicField(this, "markedReplacers", []);
    __publicField(this, "commentList", []);
    __publicField(this, "eventList", []);
    this.cid = +new Date();
    this.conf = conf;
    this.user = new User(this);
    this.$root = $root || document.createElement("div");
    this.$root.setAttribute("atk-run-id", this.cid.toString());
    this.$root.classList.add("artalk");
    this.$root.innerHTML = "";
    this.api = new Api(this);
  }
  setApi(api) {
    this.api = api;
  }
  setEditor(editor2) {
    this.editor = editor2;
  }
  setList(list2) {
    this.list = list2;
  }
  setSidebarLayer(sidebarLayer2) {
    this.sidebarLayer = sidebarLayer2;
  }
  setCheckerLauncher(checkerLauncher) {
    this.checkerLauncher = checkerLauncher;
  }
  getApi() {
    return this.api;
  }
  getCommentList() {
    return this.commentList;
  }
  getCommentDataList() {
    return this.commentList.map((c) => c.getData());
  }
  findComment(id) {
    return this.commentList.find((c) => c.getData().id === id);
  }
  deleteComment(_comment) {
    let comment2;
    if (typeof _comment === "number") {
      const findComment = this.findComment(_comment);
      if (!findComment)
        throw Error(`Comment ${_comment} cannot be found`);
      comment2 = findComment;
    } else
      comment2 = _comment;
    comment2.getEl().remove();
    this.commentList.splice(this.commentList.indexOf(comment2), 1);
    const listData = this.list.getData();
    if (listData)
      listData.total -= 1;
    this.list.refreshUI();
  }
  clearAllComments() {
    this.list.getCommentsWrapEl().innerHTML = "";
    this.list.clearData();
    this.commentList = [];
  }
  insertComment(commentData) {
    this.list.insertComment(commentData);
  }
  replyComment(commentData, $comment, scroll) {
    this.editor.setReply(commentData, $comment, scroll);
  }
  cancelReplyComment() {
    this.editor.cancelReply();
  }
  updateNotifies(notifies) {
    this.list.updateUnread(notifies);
  }
  listReload() {
    this.list.reload();
  }
  listRefreshUI() {
    this.list.refreshUI();
  }
  editorOpen() {
    this.editor.open();
  }
  editorClose() {
    this.editor.close();
  }
  editorShowLoading() {
    this.editor.showLoading();
  }
  editorHideLoading() {
    this.editor.hideLoading();
  }
  editorShowNotify(msg, type) {
    this.editor.showNotify(msg, type);
  }
  editorTravel($el) {
    this.editor.travel($el);
  }
  editorTravelBack() {
    this.editor.travelBack();
  }
  showSidebar(payload) {
    this.sidebarLayer.show(payload);
  }
  hideSidebar() {
    this.sidebarLayer.hide();
  }
  checkAdmin(payload) {
    this.checkerLauncher.checkAdmin(payload);
  }
  checkCaptcha(payload) {
    this.checkerLauncher.checkCaptcha(payload);
  }
  checkAdminShowEl() {
    const items = [];
    this.$root.querySelectorAll(`[atk-only-admin-show]`).forEach((item) => items.push(item));
    const { $wrap: $layerWrap } = GetLayerWrap(this);
    if ($layerWrap)
      $layerWrap.querySelectorAll(`[atk-only-admin-show]`).forEach((item) => items.push(item));
    const $sidebarEl = document.querySelector(".atk-sidebar");
    if ($sidebarEl)
      $sidebarEl.querySelectorAll(`[atk-only-admin-show]`).forEach((item) => items.push(item));
    items.forEach(($item) => {
      if (this.user.data.isAdmin)
        $item.classList.remove("atk-hide");
      else
        $item.classList.add("atk-hide");
    });
  }
  on(name, handler, scope = "internal") {
    this.eventList.push({ name, handler, scope });
  }
  off(name, handler, scope = "internal") {
    this.eventList = this.eventList.filter((evt) => {
      if (handler)
        return !(evt.name === name && evt.handler === handler && evt.scope === scope);
      return !(evt.name === name && evt.scope === scope);
    });
  }
  trigger(name, payload, scope) {
    this.eventList.filter((evt) => evt.name === name && (scope ? evt.scope === scope : true)).map((evt) => evt.handler).forEach((handler) => handler(payload));
  }
  $t(key, args = {}) {
    let locales = this.conf.locale;
    if (typeof locales === "string") {
      locales = internal[locales];
    }
    let str = (locales == null ? void 0 : locales[key]) || key;
    str = str.replace(/\{\s*(\w+?)\s*\}/g, (_, token) => args[token] || "");
    return str;
  }
}
const defaults = {
  el: "",
  pageKey: "",
  pageTitle: "",
  server: "",
  site: "",
  placeholder: "",
  noComment: "",
  sendBtn: "",
  darkMode: false,
  editorTravel: true,
  flatMode: "auto",
  nestMax: 2,
  nestSort: "DATE_ASC",
  emoticons: "https://cdn.jsdelivr.net/gh/ArtalkJS/Emoticons/grps/default.json",
  vote: true,
  voteDown: false,
  uaBadge: true,
  listSort: true,
  preview: true,
  countEl: "#ArtalkCount",
  pvEl: "#ArtalkPV",
  gravatar: {
    default: "mp",
    mirror: "https://sdn.geekzu.org/avatar/"
  },
  pagination: {
    pageSize: 20,
    readMore: true,
    autoLoad: true
  },
  heightLimit: {
    content: 300,
    children: 400
  },
  imgUpload: true,
  reqTimeout: 15e3,
  versionCheck: true,
  useBackendConf: false,
  locale: "zh-CN"
};
class Dialog {
  constructor(ctx, contentEl) {
    __publicField(this, "ctx");
    __publicField(this, "$el");
    __publicField(this, "$content");
    __publicField(this, "$actions");
    this.ctx = ctx;
    this.$el = createElement(`<div class="atk-layer-dialog-wrap">
        <div class="atk-layer-dialog">
          <div class="atk-layer-dialog-content"></div>
          <div class="atk-layer-dialog-actions"></div>
        </div>
      </div>`);
    this.$actions = this.$el.querySelector(".atk-layer-dialog-actions");
    this.$content = this.$el.querySelector(".atk-layer-dialog-content");
    this.$content.appendChild(contentEl);
    return this;
  }
  setYes(handler) {
    const btn = createElement(`<button data-action="confirm">${this.ctx.$t("confirm")}</button>`);
    btn.onclick = this.onBtnClick(handler);
    this.$actions.appendChild(btn);
    return this;
  }
  setNo(handler) {
    const btn = createElement(`<button data-action="cancel">${this.ctx.$t("cancel")}</button>`);
    btn.onclick = this.onBtnClick(handler);
    this.$actions.appendChild(btn);
    return this;
  }
  onBtnClick(handler) {
    return (evt) => {
      const re = handler(evt.currentTarget, this);
      if (re === void 0 || re === true) {
        this.$el.remove();
      }
    };
  }
}
const CaptchaChecker = {
  request(that, ctx, inputVal) {
    return that.ctx.getApi().captchaCheck(inputVal);
  },
  body(that, ctx) {
    if (that.captchaConf.iframe) {
      const $iframeWrap = createElement(`<div class="atk-checker-iframe-wrap"></div>`);
      const $iframe = createElement(`<iframe class="atk-fade-in"></iframe>`);
      $iframe.style.display = "none";
      showLoading($iframeWrap, { transparentBg: true });
      $iframe.src = `${that.ctx.conf.server}/api/captcha/get?t=${+new Date()}`;
      $iframe.onload = () => {
        $iframe.style.display = "";
        hideLoading($iframeWrap);
      };
      $iframeWrap.append($iframe);
      const $closeBtn = createElement(`<div class="atk-close-btn"><i class="atk-icon atk-icon-close"></i></div>`);
      $iframeWrap.append($closeBtn);
      ctx.hideInteractInput();
      let stop = false;
      const sleep = (ms) => new Promise((resolve) => {
        window.setTimeout(() => {
          resolve(null);
        }, ms);
      });
      (function queryStatus() {
        return __async(this, null, function* () {
          yield sleep(1e3);
          if (stop)
            return;
          let isPass = false;
          try {
            const resp = yield that.ctx.getApi().captchaStatus();
            isPass = resp.is_pass;
          } catch (e) {
            isPass = false;
          }
          if (isPass) {
            ctx.triggerSuccess();
          } else {
            queryStatus();
          }
        });
      })();
      $closeBtn.onclick = () => {
        stop = true;
        ctx.cancel();
      };
      return $iframeWrap;
    }
    const elem = createElement(`<span><img class="atk-captcha-img" src="${that.captchaConf.imgData || ""}">${that.ctx.$t("captchaCheck")}</span>`);
    elem.querySelector(".atk-captcha-img").onclick = () => {
      const imgEl = elem.querySelector(".atk-captcha-img");
      that.ctx.getApi().captchaGet().then((imgData) => {
        imgEl.setAttribute("src", imgData);
      }).catch((err) => {
        console.error("Failed to get captcha image ", err);
      });
    };
    return elem;
  },
  onSuccess(that, ctx, data, inputVal, formEl) {
    that.captchaConf.val = inputVal;
  },
  onError(that, ctx, err, inputVal, formEl) {
    formEl.querySelector(".atk-captcha-img").click();
  }
};
const AdminChecker = {
  inputType: "password",
  request(that, ctx, inputVal) {
    const data = {
      name: that.ctx.user.data.nick,
      email: that.ctx.user.data.email,
      password: inputVal
    };
    return that.ctx.getApi().login(data.name, data.email, data.password);
  },
  body(that, ctx) {
    return createElement(`<span>${that.ctx.$t("adminCheck")}</span>`);
  },
  onSuccess(that, ctx, userToken, inputVal, formEl) {
    that.ctx.user.update({
      isAdmin: true,
      token: userToken
    });
    that.ctx.trigger("user-changed", that.ctx.user.data);
    that.ctx.listReload();
  },
  onError(that, ctx, err, inputVal, formEl) {
  }
};
class CheckerLauncher {
  constructor(ctx) {
    __publicField(this, "ctx");
    __publicField(this, "launched", []);
    __publicField(this, "captchaConf", {});
    this.ctx = ctx;
  }
  checkCaptcha(payload) {
    this.captchaConf.imgData = payload.imgData;
    this.captchaConf.iframe = payload.iframe;
    this.fire(CaptchaChecker, payload);
  }
  checkAdmin(payload) {
    this.fire(AdminChecker, payload);
  }
  fire(checker, payload) {
    if (this.launched.includes(checker))
      return;
    this.launched.push(checker);
    const layer = new Layer(this.ctx, `checker-${new Date().getTime()}`);
    layer.setMaskClickHide(false);
    layer.show();
    let hideInteractInput = false;
    const checkerCtx = {
      getLayer: () => layer,
      hideInteractInput: () => {
        hideInteractInput = true;
      },
      triggerSuccess: () => {
        this.close(checker, layer);
        if (checker.onSuccess)
          checker.onSuccess(this, checkerCtx, "", "", formEl);
        if (payload.onSuccess)
          payload.onSuccess("", dialog.$el);
      },
      cancel: () => {
        this.close(checker, layer);
        if (payload.onCancel)
          payload.onCancel();
      }
    };
    const formEl = createElement();
    formEl.appendChild(checker.body(this, checkerCtx));
    const $input = createElement(`<input id="check" type="${checker.inputType || "text"}" autocomplete="off" required placeholder="">`);
    formEl.appendChild($input);
    setTimeout(() => $input.focus(), 80);
    $input.onkeyup = (evt) => {
      if (evt.key === "Enter" || evt.keyCode === 13) {
        evt.preventDefault();
        layer.getEl().querySelector('button[data-action="confirm"]').click();
      }
    };
    let btnTextOrg;
    const dialog = new Dialog(this.ctx, formEl);
    dialog.setYes((btnEl) => {
      const inputVal = $input.value.trim();
      if (!btnTextOrg)
        btnTextOrg = btnEl.innerText;
      const btnTextSet = (btnText) => {
        btnEl.innerText = btnText;
        btnEl.classList.add("error");
      };
      const btnTextRestore = () => {
        btnEl.innerText = btnTextOrg || "";
        btnEl.classList.remove("error");
      };
      btnEl.innerText = `${this.ctx.$t("loading")}...`;
      checker.request(this, checkerCtx, inputVal).then((data) => {
        this.close(checker, layer);
        if (checker.onSuccess)
          checker.onSuccess(this, checkerCtx, data, inputVal, formEl);
        if (payload.onSuccess)
          payload.onSuccess(inputVal, dialog.$el);
      }).catch((err) => {
        btnTextSet(String(err.msg || String(err)));
        if (checker.onError)
          checker.onError(this, checkerCtx, err, inputVal, formEl);
        const tf = setTimeout(() => btnTextRestore(), 3e3);
        $input.onfocus = () => {
          btnTextRestore();
          clearTimeout(tf);
        };
      });
      return false;
    });
    dialog.setNo(() => {
      this.close(checker, layer);
      if (payload.onCancel)
        payload.onCancel();
      return false;
    });
    if (hideInteractInput) {
      $input.style.display = "none";
      dialog.$el.querySelector(".atk-layer-dialog-actions").style.display = "none";
    }
    layer.getEl().append(dialog.$el);
    if (payload.onMount)
      payload.onMount(dialog.$el);
  }
  close(checker, layer) {
    layer.disposeNow();
    this.launched = this.launched.filter((c) => c !== checker);
  }
}
var editor = "";
var EditorHTML = '<div class="atk-main-editor">\n  <div class="atk-header">\n    <input name="nick" class="atk-nick" type="text" required="required">\n    <input name="email" class="atk-email" type="email" required="required">\n    <input name="link" class="atk-link" type="url">\n  </div>\n  <div class="atk-textarea-wrap">\n    <textarea class="atk-textarea"></textarea>\n  </div>\n  <div class="atk-plug-panel-wrap" style="display: none;"></div>\n  <div class="atk-bottom">\n    <div class="atk-item atk-plug-btn-wrap"></div>\n    <div class="atk-item">\n      <button type="button" class="atk-send-btn"></button>\n    </div>\n  </div>\n  <div class="atk-notify-wrap"></div>\n</div>\n';
var emoticonsPlug = "";
class EditorPlug {
  constructor(editor2) {
    __publicField(this, "editor");
    __publicField(this, "$panel");
    __publicField(this, "$btn");
    __publicField(this, "onHeaderInput");
    this.editor = editor2;
  }
  get ctx() {
    return this.editor.ctx;
  }
  registerPanel(html = "<div></div>") {
    this.$panel = createElement(html);
    return this.$panel;
  }
  registerBtn(html) {
    this.$btn = createElement(`<span class="atk-plug-btn" data-plug-name="${this.constructor.name}">${html}</span>`);
    return this.$btn;
  }
  registerHeaderInputEvt(action) {
    this.onHeaderInput = action;
  }
  getPanel() {
    return this.$panel;
  }
  getBtn() {
    return this.$btn;
  }
}
__publicField(EditorPlug, "Name");
class EmoticonsPlug extends EditorPlug {
  constructor(editor2) {
    super(editor2);
    __publicField(this, "emoticons", []);
    __publicField(this, "loadingTask", null);
    __publicField(this, "$grpWrap");
    __publicField(this, "$grpSwitcher");
    __publicField(this, "isListLoaded", false);
    __publicField(this, "isImgLoaded", false);
    this.editor = editor2;
    this.registerPanel(`<div class="atk-editor-plug-emoticons"></div>`);
    this.registerBtn(this.ctx.$t("emoticon"));
    window.setTimeout(() => {
      this.loadEmoticonsData();
    }, 1e3);
  }
  onPanelShow() {
    (() => __async(this, null, function* () {
      yield this.loadEmoticonsData();
      if (!this.isImgLoaded) {
        this.initEmoticonsList();
        this.isImgLoaded = true;
      }
      setTimeout(() => {
        this.changeListHeight();
      }, 30);
    }))();
  }
  onPanelHide() {
    this.$panel.parentElement.style.height = "";
  }
  loadEmoticonsData() {
    return __async(this, null, function* () {
      if (this.isListLoaded)
        return;
      if (this.loadingTask !== null) {
        yield this.loadingTask;
        return;
      }
      this.loadingTask = (() => __async(this, null, function* () {
        showLoading(this.$panel);
        this.emoticons = yield this.handleData(this.ctx.conf.emoticons);
        hideLoading(this.$panel);
        this.loadingTask = null;
        this.isListLoaded = true;
      }))();
      yield this.loadingTask;
    });
  }
  handleData(data) {
    return __async(this, null, function* () {
      if (!Array.isArray(data) && ["object", "string"].includes(typeof data)) {
        data = [data];
      }
      if (!Array.isArray(data)) {
        setError(this.$panel, "\u8868\u60C5\u5305\u6570\u636E\u5FC5\u987B\u4E3A Array/Object/String \u7C7B\u578B");
        hideLoading(this.$panel);
        return [];
      }
      const pushGrp = (grp) => {
        if (typeof grp !== "object")
          return;
        if (grp.name && data.find((o) => o.name === grp.name))
          return;
        data.push(grp);
      };
      const remoteLoad = (d) => __async(this, null, function* () {
        yield Promise.all(d.map((grp, index) => __async(this, null, function* () {
          if (typeof grp === "object" && !Array.isArray(grp)) {
            pushGrp(grp);
          } else if (Array.isArray(grp)) {
            yield remoteLoad(grp);
          } else if (typeof grp === "string") {
            const grpData = yield this.remoteLoad(grp);
            if (Array.isArray(grpData))
              yield remoteLoad(grpData);
            else if (typeof grpData === "object")
              pushGrp(grpData);
          }
        })));
      });
      yield remoteLoad(data);
      data.forEach((item) => {
        if (this.isOwOFormat(item)) {
          const c = this.convertOwO(item);
          c.forEach((grp) => {
            pushGrp(grp);
          });
        } else if (Array.isArray(item)) {
          item.forEach((grp) => {
            pushGrp(grp);
          });
        }
      });
      data = data.filter((item) => typeof item === "object" && !Array.isArray(item) && !!item && !!item.name);
      this.solveNullKey(data);
      this.solveSameKey(data);
      return data;
    });
  }
  remoteLoad(url) {
    return __async(this, null, function* () {
      if (!url)
        return [];
      try {
        const resp = yield fetch(url);
        const json = yield resp.json();
        return json;
      } catch (err) {
        hideLoading(this.$panel);
        setError(this.$panel, `\u8868\u60C5\u52A0\u8F7D\u5931\u8D25 ${String(err)}`);
        return [];
      }
    });
  }
  solveNullKey(data) {
    data.forEach((grp) => {
      grp.items.forEach((item, index) => {
        if (!item.key)
          item.key = `${grp.name} ${index + 1}`;
      });
    });
  }
  solveSameKey(data) {
    const tmp = {};
    data.forEach((grp) => {
      grp.items.forEach((item) => {
        if (!item.key || String(item.key).trim() === "")
          return;
        if (!tmp[item.key])
          tmp[item.key] = 1;
        else
          tmp[item.key]++;
        if (tmp[item.key] > 1)
          item.key = `${item.key} ${tmp[item.key]}`;
      });
    });
  }
  isOwOFormat(data) {
    try {
      return typeof data === "object" && !!Object.values(data).length && Array.isArray(Object.keys(Object.values(data)[0].container)) && Object.keys(Object.values(data)[0].container[0]).includes("icon");
    } catch (e) {
      return false;
    }
  }
  convertOwO(owoData) {
    const dest = [];
    Object.entries(owoData).forEach(([grpName, grp]) => {
      const nGrp = { name: grpName, type: grp.type, items: [] };
      grp.container.forEach((item, index) => {
        const iconStr = item.icon;
        if (/<(img|IMG)/.test(iconStr)) {
          const find = /src=["'](.*?)["']/.exec(iconStr);
          if (find && find.length > 1)
            item.icon = find[1];
        }
        nGrp.items.push({ key: item.text || `${grpName} ${index + 1}`, val: item.icon });
      });
      dest.push(nGrp);
    });
    return dest;
  }
  initEmoticonsList() {
    this.$grpWrap = createElement(`<div class="atk-grp-wrap"></div>`);
    this.$panel.append(this.$grpWrap);
    this.emoticons.forEach((grp, index) => {
      const $grp = createElement(`<div class="atk-grp" style="display: none;"></div>`);
      this.$grpWrap.append($grp);
      $grp.setAttribute("data-index", String(index));
      $grp.setAttribute("data-grp-name", grp.name);
      $grp.setAttribute("data-type", grp.type);
      grp.items.forEach((item) => {
        const $item = createElement(`<span class="atk-item"></span>`);
        $grp.append($item);
        if (!!item.key && !new RegExp(`^(${grp.name})?\\s?[0-9]+$`).test(item.key))
          $item.setAttribute("title", item.key);
        if (grp.type === "image") {
          const imgEl = document.createElement("img");
          imgEl.src = item.val;
          imgEl.alt = item.key;
          $item.append(imgEl);
        } else {
          $item.innerText = item.val;
        }
        $item.onclick = () => {
          if (grp.type === "image") {
            this.editor.insertContent(`:[${item.key}]`);
          } else {
            this.editor.insertContent(item.val || "");
          }
        };
      });
    });
    if (this.emoticons.length > 1) {
      this.$grpSwitcher = createElement(`<div class="atk-grp-switcher"></div>`);
      this.$panel.append(this.$grpSwitcher);
      this.emoticons.forEach((grp, index) => {
        const $item = createElement("<span />");
        $item.innerText = grp.name;
        $item.setAttribute("data-index", String(index));
        $item.onclick = () => this.openGrp(index);
        this.$grpSwitcher.append($item);
      });
    }
    if (this.emoticons.length > 0)
      this.openGrp(0);
  }
  openGrp(index) {
    var _a, _b, _c;
    Array.from(this.$grpWrap.children).forEach((item) => {
      const el = item;
      if (el.getAttribute("data-index") !== String(index)) {
        el.style.display = "none";
      } else {
        el.style.display = "";
      }
    });
    (_a = this.$grpSwitcher) == null ? void 0 : _a.querySelectorAll("span.active").forEach((item) => item.classList.remove("active"));
    (_c = (_b = this.$grpSwitcher) == null ? void 0 : _b.querySelector(`span[data-index="${index}"]`)) == null ? void 0 : _c.classList.add("active");
    this.changeListHeight();
  }
  changeListHeight() {
  }
  transEmoticonImageText(text) {
    if (!this.emoticons || !Array.isArray(this.emoticons))
      return text;
    this.emoticons.forEach((grp) => {
      if (grp.type !== "image")
        return;
      Object.entries(grp.items).forEach(([index, item]) => {
        text = text.split(`:[${item.key}]`).join(`<img src="${item.val}" atk-emoticon="${item.key}">`);
      });
    });
    return text;
  }
}
__publicField(EmoticonsPlug, "Name", "emoticons");
class UploadPlug extends EditorPlug {
  constructor(editor2) {
    super(editor2);
    __publicField(this, "$imgUploadInput");
    __publicField(this, "allowImgExts", ["png", "jpg", "jpeg", "gif", "bmp", "svg", "webp"]);
    this.$imgUploadInput = document.createElement("input");
    this.$imgUploadInput.type = "file";
    this.$imgUploadInput.style.display = "none";
    this.$imgUploadInput.accept = this.allowImgExts.map((o) => `.${o}`).join(",");
    const $btn = this.registerBtn(`${this.ctx.$t("image")}`);
    $btn.after(this.$imgUploadInput);
    $btn.onclick = () => {
      const $input = this.$imgUploadInput;
      $input.onchange = () => {
        (() => __async(this, null, function* () {
          if (!$input.files || $input.files.length === 0)
            return;
          const file = $input.files[0];
          this.uploadImg(file);
        }))();
      };
      $input.click();
    };
    this.ctx.on("conf-updated", () => {
      if (!this.ctx.conf.imgUpload) {
        this.getBtn().setAttribute("atk-only-admin-show", "");
        this.ctx.checkAdminShowEl();
      }
    });
    const uploadFromFileList = (files) => {
      if (!files)
        return;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        this.uploadImg(file);
      }
    };
    this.editor.$textarea.addEventListener("dragover", (evt) => {
      evt.stopPropagation();
      evt.preventDefault();
    });
    this.editor.$textarea.addEventListener("drop", (evt) => {
      var _a;
      const files = (_a = evt.dataTransfer) == null ? void 0 : _a.files;
      if (files == null ? void 0 : files.length) {
        evt.preventDefault();
        uploadFromFileList(files);
      }
    });
    this.editor.$textarea.addEventListener("paste", (evt) => {
      var _a;
      const files = (_a = evt.clipboardData) == null ? void 0 : _a.files;
      if (files == null ? void 0 : files.length) {
        evt.preventDefault();
        uploadFromFileList(files);
      }
    });
  }
  uploadImg(file) {
    return __async(this, null, function* () {
      const fileExt = /[^.]+$/.exec(file.name);
      if (!fileExt || !this.allowImgExts.includes(fileExt[0]))
        return;
      if (!this.ctx.user.checkHasBasicUserInfo()) {
        this.editor.showNotify(this.ctx.$t("uploadLoginMsg"), "w");
        return;
      }
      let insertPrefix = "\n";
      if (this.editor.$textarea.value.trim() === "")
        insertPrefix = "";
      const uploadPlaceholderTxt = `${insertPrefix}![](Uploading ${file.name}...)`;
      this.editor.insertContent(uploadPlaceholderTxt);
      let resp;
      try {
        if (!this.ctx.conf.imgUploader) {
          resp = yield this.ctx.getApi().imgUpload(file);
        } else {
          resp = { img_url: yield this.ctx.conf.imgUploader(file) };
        }
      } catch (err) {
        console.error(err);
        this.editor.showNotify(`${this.ctx.$t("uploadFail")}\uFF0C${err.msg}`, "e");
      }
      if (!!resp && resp.img_url) {
        let imgURL = resp.img_url;
        if (!isValidURL(imgURL))
          imgURL = getURLBasedOnApi(this.ctx, imgURL);
        this.editor.setContent(this.editor.$textarea.value.replace(uploadPlaceholderTxt, `${insertPrefix}![](${imgURL})`));
      } else {
        this.editor.setContent(this.editor.$textarea.value.replace(uploadPlaceholderTxt, ""));
      }
    });
  }
}
__publicField(UploadPlug, "Name", "upload");
var previewPlug = "";
class PreviewPlug extends EditorPlug {
  constructor(editor2) {
    super(editor2);
    __publicField(this, "isBind", false);
    this.registerPanel(`<div class="atk-editor-plug-preview"></div>`);
    let btnText = this.editor.$t("preview");
    if (this.ctx.markedInstance)
      btnText += ` <i title="Markdown is supported"><svg class="markdown" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"></path></svg></i>`;
    this.registerBtn(btnText);
  }
  onPanelShow() {
    this.updateContent();
    if (!this.isBind) {
      const event = () => {
        this.updateContent();
      };
      this.editor.$textarea.addEventListener("input", event);
      this.editor.$textarea.addEventListener("change", event);
      this.isBind = true;
    }
  }
  updateContent() {
    if (this.$panel.style.display !== "none") {
      this.$panel.innerHTML = this.editor.getContentMarked();
    }
  }
}
__publicField(PreviewPlug, "Name", "preview");
class HeaderInputPlug extends EditorPlug {
  constructor(editor2) {
    super(editor2);
    __publicField(this, "queryUserInfo", {
      timeout: null,
      abortFunc: null
    });
    this.registerHeaderInputEvt((key, $input) => {
      if (key === "nick" || key === "email") {
        this.fetchUserInfo();
      }
    });
    this.editor.$link.addEventListener("change", () => {
      const link = this.editor.$link.value.trim();
      if (!!link && !/^(http|https):\/\//.test(link)) {
        this.editor.$link.value = `https://${link}`;
        this.ctx.user.update({ link: this.editor.$link.value });
      }
    });
  }
  fetchUserInfo() {
    this.ctx.user.logout();
    if (this.queryUserInfo.timeout)
      window.clearTimeout(this.queryUserInfo.timeout);
    if (this.queryUserInfo.abortFunc)
      this.queryUserInfo.abortFunc();
    this.queryUserInfo.timeout = window.setTimeout(() => {
      this.queryUserInfo.timeout = null;
      const { req, abort } = this.ctx.getApi().userGet(this.ctx.user.data.nick, this.ctx.user.data.email);
      this.queryUserInfo.abortFunc = abort;
      req.then((data) => {
        var _a;
        if (!data.is_login) {
          this.ctx.user.logout();
        }
        this.ctx.updateNotifies(data.unread);
        if (this.ctx.user.checkHasBasicUserInfo() && !data.is_login && ((_a = data.user) == null ? void 0 : _a.is_admin)) {
          this.showLoginDialog();
        }
        if (data.user && data.user.link) {
          this.editor.$link.value = data.user.link;
          this.ctx.user.update({ link: data.user.link });
        }
      }).catch(() => {
      }).finally(() => {
        this.queryUserInfo.abortFunc = null;
      });
    }, 400);
  }
  showLoginDialog() {
    this.ctx.checkAdmin({
      onSuccess: () => {
      }
    });
  }
}
__publicField(HeaderInputPlug, "Name", "headerInput");
class Editor extends Component {
  constructor(ctx) {
    super(ctx);
    __publicField(this, "$header");
    __publicField(this, "$nick");
    __publicField(this, "$email");
    __publicField(this, "$link");
    __publicField(this, "$textareaWrap");
    __publicField(this, "$textarea");
    __publicField(this, "$bottom");
    __publicField(this, "$submitBtn");
    __publicField(this, "$notifyWrap");
    __publicField(this, "replyComment", null);
    __publicField(this, "$sendReply", null);
    __publicField(this, "isTraveling", false);
    __publicField(this, "ENABLED_PLUGS", [EmoticonsPlug, UploadPlug, PreviewPlug, HeaderInputPlug]);
    __publicField(this, "plugList", {});
    __publicField(this, "openedPlugName", null);
    __publicField(this, "$plugPanelWrap");
    __publicField(this, "$plugBtnWrap");
    this.$el = createElement(EditorHTML);
    this.$header = this.$el.querySelector(".atk-header");
    this.$nick = this.$header.querySelector('[name="nick"]');
    this.$email = this.$header.querySelector('[name="email"]');
    this.$link = this.$header.querySelector('[name="link"]');
    this.$textareaWrap = this.$el.querySelector(".atk-textarea-wrap");
    this.$textarea = this.$el.querySelector(".atk-textarea");
    this.$bottom = this.$el.querySelector(".atk-bottom");
    this.$submitBtn = this.$el.querySelector(".atk-send-btn");
    this.$notifyWrap = this.$el.querySelector(".atk-notify-wrap");
    this.$plugBtnWrap = this.$el.querySelector(".atk-plug-btn-wrap");
    this.$plugPanelWrap = this.$el.querySelector(".atk-plug-panel-wrap");
    this.initLocalStorage();
    this.initHeader();
    this.initTextarea();
    this.initPlugs();
    this.initSubmitBtn();
    this.ctx.on("conf-updated", () => {
    });
  }
  get user() {
    return this.ctx.user;
  }
  get $inputs() {
    return { nick: this.$nick, email: this.$email, link: this.$link };
  }
  initLocalStorage() {
    const localContent = window.localStorage.getItem("ArtalkContent") || "";
    if (localContent.trim() !== "") {
      this.showNotify(this.$t("restoredMsg"), "i");
      this.setContent(localContent);
    }
    this.$textarea.addEventListener("input", () => this.saveToLocalStorage());
  }
  saveToLocalStorage() {
    window.localStorage.setItem("ArtalkContent", this.getContentOriginal().trim());
  }
  initHeader() {
    Object.entries(this.$inputs).forEach(([key, $input]) => {
      $input.value = this.user.data[key] || "";
      $input.addEventListener("input", () => this.onHeaderInput(key, $input));
      $input.placeholder = `${this.$t(key)}`;
    });
  }
  onHeaderInput(key, $input) {
    this.user.update({
      [key]: $input.value.trim()
    });
    Object.entries(this.plugList).forEach(([plugName, plug]) => {
      if (plug.onHeaderInput)
        plug.onHeaderInput(key, $input);
    });
  }
  initTextarea() {
    this.$textarea.placeholder = this.ctx.conf.placeholder || this.$t("placeholder");
    this.$textarea.addEventListener("keydown", (e) => {
      const keyCode = e.keyCode || e.which;
      if (keyCode === 9) {
        e.preventDefault();
        this.insertContent("	");
      }
    });
    this.$textarea.addEventListener("input", () => {
      this.adjustTextareaHeight();
    });
  }
  initSubmitBtn() {
    this.$submitBtn.innerText = this.ctx.conf.sendBtn || this.$t("send");
    this.$submitBtn.addEventListener("click", () => this.submit());
  }
  getFinalContent() {
    let content = this.getContentOriginal();
    if (this.plugList.emoticons) {
      content = this.plugList.emoticons.transEmoticonImageText(content);
    }
    return content;
  }
  getContentOriginal() {
    return this.$textarea.value || "";
  }
  getContentMarked() {
    return marked(this.ctx, this.getFinalContent());
  }
  setContent(val) {
    this.$textarea.value = val;
    this.saveToLocalStorage();
    if (this.plugList.preview) {
      this.plugList.preview.updateContent();
    }
    window.setTimeout(() => {
      this.adjustTextareaHeight();
    }, 80);
  }
  insertContent(val) {
    if (document.selection) {
      this.$textarea.focus();
      document.selection.createRange().text = val;
      this.$textarea.focus();
    } else if (this.$textarea.selectionStart || this.$textarea.selectionStart === 0) {
      const sStart = this.$textarea.selectionStart;
      const sEnd = this.$textarea.selectionEnd;
      const sT = this.$textarea.scrollTop;
      this.setContent(this.$textarea.value.substring(0, sStart) + val + this.$textarea.value.substring(sEnd, this.$textarea.value.length));
      this.$textarea.focus();
      this.$textarea.selectionStart = sStart + val.length;
      this.$textarea.selectionEnd = sStart + val.length;
      this.$textarea.scrollTop = sT;
    } else {
      this.$textarea.focus();
      this.$textarea.value += val;
    }
  }
  clearEditor() {
    this.setContent("");
    this.cancelReply();
  }
  adjustTextareaHeight() {
    const diff = this.$textarea.offsetHeight - this.$textarea.clientHeight;
    this.$textarea.style.height = "0px";
    this.$textarea.style.height = `${this.$textarea.scrollHeight + diff}px`;
  }
  setReply(commentData, $comment, scroll = true) {
    if (this.replyComment !== null) {
      this.cancelReply();
    }
    if (this.$sendReply === null) {
      this.$sendReply = createElement(`<div class="atk-send-reply">${this.$t("reply")} <span class="atk-text"></span><span class="atk-cancel">\xD7</span></div>`);
      this.$sendReply.querySelector(".atk-text").innerText = `@${commentData.nick}`;
      this.$sendReply.addEventListener("click", () => {
        this.cancelReply();
      });
      this.$textareaWrap.append(this.$sendReply);
    }
    this.replyComment = commentData;
    if (this.ctx.conf.editorTravel === true) {
      this.travel($comment);
    }
    if (scroll)
      scrollIntoView(this.$el);
    this.$textarea.focus();
  }
  cancelReply() {
    if (this.$sendReply !== null) {
      this.$sendReply.remove();
      this.$sendReply = null;
    }
    this.replyComment = null;
    if (this.ctx.conf.editorTravel === true) {
      this.travelBack();
    }
  }
  showNotify(msg, type) {
    showNotify(this.$notifyWrap, msg, type);
  }
  showLoading() {
    showLoading(this.$el);
  }
  hideLoading() {
    hideLoading(this.$el);
  }
  submit() {
    return __async(this, null, function* () {
      if (this.getFinalContent().trim() === "") {
        this.$textarea.focus();
        return;
      }
      this.ctx.trigger("editor-submit");
      this.showLoading();
      try {
        const nComment = yield this.ctx.getApi().add({
          content: this.getFinalContent(),
          nick: this.user.data.nick,
          email: this.user.data.email,
          link: this.user.data.link,
          rid: this.replyComment === null ? 0 : this.replyComment.id,
          page_key: this.replyComment === null ? this.ctx.conf.pageKey : this.replyComment.page_key,
          page_title: this.replyComment === null ? this.ctx.conf.pageTitle : void 0,
          site_name: this.replyComment === null ? this.ctx.conf.site : this.replyComment.site_name
        });
        if (this.replyComment !== null && this.replyComment.page_key !== this.ctx.conf.pageKey) {
          window.open(`${this.replyComment.page_url}#atk-comment-${nComment.id}`);
        }
        this.ctx.insertComment(nComment);
        this.clearEditor();
        this.ctx.trigger("editor-submitted");
      } catch (err) {
        console.error(err);
        this.showNotify(`${this.$t("commentFail")}\uFF0C${err.msg || String(err)}`, "e");
        return;
      } finally {
        this.hideLoading();
      }
    });
  }
  close() {
    if (!this.$textareaWrap.querySelector(".atk-comment-closed"))
      this.$textareaWrap.prepend(createElement(`<div class="atk-comment-closed">${this.$t("onlyAdminCanReply")}</div>`));
    if (!this.user.data.isAdmin) {
      this.$textarea.style.display = "none";
      this.closePlugPanel();
      this.$bottom.style.display = "none";
    } else {
      this.$textarea.style.display = "";
      this.$bottom.style.display = "";
    }
  }
  open() {
    var _a;
    (_a = this.$textareaWrap.querySelector(".atk-comment-closed")) == null ? void 0 : _a.remove();
    this.$textarea.style.display = "";
    this.$bottom.style.display = "";
  }
  travel($afterEl) {
    if (this.isTraveling)
      return;
    this.isTraveling = true;
    this.$el.after(createElement('<div class="atk-editor-travel-placeholder"></div>'));
    const $travelPlace = createElement("<div></div>");
    $afterEl.after($travelPlace);
    $travelPlace.replaceWith(this.$el);
    this.$el.classList.add("atk-fade-in");
  }
  travelBack() {
    var _a;
    if (!this.isTraveling)
      return;
    this.isTraveling = false;
    (_a = this.ctx.$root.querySelector(".atk-editor-travel-placeholder")) == null ? void 0 : _a.replaceWith(this.$el);
    if (this.replyComment !== null)
      this.cancelReply();
  }
  initPlugs() {
    this.plugList = {};
    this.$plugPanelWrap.innerHTML = "";
    this.$plugPanelWrap.style.display = "none";
    this.openedPlugName = null;
    this.$plugBtnWrap.innerHTML = "";
    const disabledPlugs = [];
    if (!this.conf.emoticons)
      disabledPlugs.push("emoticons");
    if (!this.conf.preview)
      disabledPlugs.push("preview");
    this.ENABLED_PLUGS.forEach((Plug) => {
      const plugName = Plug.Name;
      if (disabledPlugs.includes(plugName))
        return;
      const plug = new Plug(this);
      this.plugList[plugName] = plug;
      const $btn = plug.getBtn();
      if ($btn) {
        this.$plugBtnWrap.appendChild($btn);
        $btn.onclick = $btn.onclick || (() => {
          this.$plugBtnWrap.querySelectorAll(".active").forEach((item) => item.classList.remove("active"));
          if (plugName === this.openedPlugName) {
            this.closePlugPanel();
            return;
          }
          this.openPlugPanel(plugName);
          $btn.classList.add("active");
        });
        const $panel = plug.getPanel();
        if ($panel) {
          $panel.setAttribute("data-plug-name", plugName);
          $panel.style.display = "none";
          this.$plugPanelWrap.appendChild($panel);
        }
      }
    });
  }
  openPlugPanel(plugName) {
    Object.entries(this.plugList).forEach(([aPlugName, plug]) => {
      const plugPanel = plug.getPanel();
      if (!plugPanel)
        return;
      if (aPlugName === plugName) {
        plugPanel.style.display = "";
        if (plug.onPanelShow)
          plug.onPanelShow();
      } else {
        plugPanel.style.display = "none";
        if (plug.onPanelHide)
          plug.onPanelHide();
      }
    });
    this.$plugPanelWrap.style.display = "";
    this.openedPlugName = plugName;
  }
  closePlugPanel() {
    if (!this.openedPlugName)
      return;
    const plug = this.plugList[this.openedPlugName];
    if (!plug)
      return;
    if (plug.onPanelHide)
      plug.onPanelHide();
    this.$plugPanelWrap.style.display = "none";
    this.openedPlugName = null;
  }
}
var list = "";
var ListHTML = '<div class="atk-list">\n  <div class="atk-list-header">\n    <div class="atk-comment-count">\n      <div class="atk-text"></div>\n    </div>\n    <div class="atk-right-action">\n      <span data-action="admin-close-comment" class="atk-hide" atk-only-admin-show></span>\n      <span data-action="open-sidebar" class="atk-hide atk-on">\n        <span class="atk-unread-badge" style="display: none;"></span>\n        <div class="atk-text"></div>\n      </span>\n    </div>\n  </div>\n  <div class="atk-list-body"></div>\n  <div class="atk-list-footer">\n    <div class="atk-copyright"></div>\n  </div>\n</div>\n';
const win = window || {};
const nav = navigator || {};
function Detect(userAgent) {
  const u = String(userAgent || nav.userAgent);
  const dest = {
    os: "",
    osVersion: "",
    engine: "",
    browser: "",
    device: "",
    language: "",
    version: ""
  };
  const engineMatch = {
    Trident: u.includes("Trident") || u.includes("NET CLR"),
    Presto: u.includes("Presto"),
    WebKit: u.includes("AppleWebKit"),
    Gecko: u.includes("Gecko/")
  };
  const browserMatch = {
    Safari: u.includes("Safari"),
    Chrome: u.includes("Chrome") || u.includes("CriOS"),
    IE: u.includes("MSIE") || u.includes("Trident"),
    Edge: u.includes("Edge") || u.includes("Edg"),
    Firefox: u.includes("Firefox") || u.includes("FxiOS"),
    "Firefox Focus": u.includes("Focus"),
    Chromium: u.includes("Chromium"),
    Opera: u.includes("Opera") || u.includes("OPR"),
    Vivaldi: u.includes("Vivaldi"),
    Yandex: u.includes("YaBrowser"),
    Kindle: u.includes("Kindle") || u.includes("Silk/"),
    360: u.includes("360EE") || u.includes("360SE"),
    UC: u.includes("UC") || u.includes(" UBrowser"),
    QQBrowser: u.includes("QQBrowser"),
    QQ: u.includes("QQ/"),
    Baidu: u.includes("Baidu") || u.includes("BIDUBrowser"),
    Maxthon: u.includes("Maxthon"),
    Sogou: u.includes("MetaSr") || u.includes("Sogou"),
    LBBROWSER: u.includes("LBBROWSER"),
    "2345Explorer": u.includes("2345Explorer"),
    TheWorld: u.includes("TheWorld"),
    MIUI: u.includes("MiuiBrowser"),
    Quark: u.includes("Quark"),
    Qiyu: u.includes("Qiyu"),
    Wechat: u.includes("MicroMessenger"),
    Taobao: u.includes("AliApp(TB"),
    Alipay: u.includes("AliApp(AP"),
    Weibo: u.includes("Weibo"),
    Douban: u.includes("com.douban.frodo"),
    Suning: u.includes("SNEBUY-APP"),
    iQiYi: u.includes("IqiyiApp")
  };
  const osMatch = {
    Windows: u.includes("Windows"),
    Linux: u.includes("Linux") || u.includes("X11"),
    "macOS": u.includes("Macintosh"),
    Android: u.includes("Android") || u.includes("Adr"),
    Ubuntu: u.includes("Ubuntu"),
    FreeBSD: u.includes("FreeBSD"),
    Debian: u.includes("Debian"),
    "Windows Phone": u.includes("IEMobile") || u.includes("Windows Phone"),
    BlackBerry: u.includes("BlackBerry") || u.includes("RIM"),
    MeeGo: u.includes("MeeGo"),
    Symbian: u.includes("Symbian"),
    iOS: u.includes("like Mac OS X"),
    "Chrome OS": u.includes("CrOS"),
    WebOS: u.includes("hpwOS")
  };
  const deviceMatch = {
    Mobile: u.includes("Mobi") || u.includes("iPh") || u.includes("480"),
    Tablet: u.includes("Tablet") || u.includes("Pad") || u.includes("Nexus 7")
  };
  if (deviceMatch.Mobile) {
    deviceMatch.Mobile = !u.includes("iPad");
  } else if (browserMatch.Chrome && u.includes("Edg")) {
    browserMatch.Chrome = false;
    browserMatch.Edge = true;
  } else if (win.showModalDialog && win.chrome) {
    browserMatch.Chrome = false;
    browserMatch["360"] = true;
  }
  dest.device = "PC";
  dest.language = (() => {
    const g = nav.browserLanguage || nav.language;
    const arr = g.split("-");
    if (arr[1])
      arr[1] = arr[1].toUpperCase();
    return arr.join("_");
  })();
  const hash = {
    engine: engineMatch,
    browser: browserMatch,
    os: osMatch,
    device: deviceMatch
  };
  Object.entries(hash).forEach(([type, match]) => {
    Object.entries(match).forEach(([name, result]) => {
      if (result === true)
        dest[type] = name;
    });
  });
  const osVersion = {
    Windows: () => {
      const v = u.replace(/^.*Windows NT ([\d.]+);.*$/, "$1");
      const wvHash = {
        "6.4": "10",
        "6.3": "8.1",
        "6.2": "8",
        "6.1": "7",
        "6.0": "Vista",
        "5.2": "XP",
        "5.1": "XP",
        "5.0": "2000",
        "10.0": "10",
        "11.0": "11"
      };
      return wvHash[v] || v;
    },
    Android: () => u.replace(/^.*Android ([\d.]+);.*$/, "$1"),
    iOS: () => u.replace(/^.*OS ([\d_]+) like.*$/, "$1").replace(/_/g, "."),
    Debian: () => u.replace(/^.*Debian\/([\d.]+).*$/, "$1"),
    "Windows Phone": () => u.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, "$2"),
    "macOS": () => u.replace(/^.*Mac OS X ([\d_]+).*$/, "$1").replace(/_/g, "."),
    WebOS: () => u.replace(/^.*hpwOS\/([\d.]+);.*$/, "$1")
  };
  dest.osVersion = "";
  if (osVersion[dest.os]) {
    dest.osVersion = osVersion[dest.os]();
    if (dest.osVersion === u) {
      dest.osVersion = "";
    }
  }
  const version = {
    Safari: () => u.replace(/^.*Version\/([\d.]+).*$/, "$1"),
    Chrome: () => u.replace(/^.*Chrome\/([\d.]+).*$/, "$1").replace(/^.*CriOS\/([\d.]+).*$/, "$1"),
    IE: () => u.replace(/^.*MSIE ([\d.]+).*$/, "$1").replace(/^.*rv:([\d.]+).*$/, "$1"),
    Edge: () => u.replace(/^.*(Edge|Edg|Edg[A-Z]{1})\/([\d.]+).*$/, "$2"),
    Firefox: () => u.replace(/^.*Firefox\/([\d.]+).*$/, "$1").replace(/^.*FxiOS\/([\d.]+).*$/, "$1"),
    "Firefox Focus": () => u.replace(/^.*Focus\/([\d.]+).*$/, "$1"),
    Chromium: () => u.replace(/^.*Chromium\/([\d.]+).*$/, "$1"),
    Opera: () => u.replace(/^.*Opera\/([\d.]+).*$/, "$1").replace(/^.*OPR\/([\d.]+).*$/, "$1"),
    Vivaldi: () => u.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1"),
    Yandex: () => u.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1"),
    Kindle: () => u.replace(/^.*Version\/([\d.]+).*$/, "$1"),
    Maxthon: () => u.replace(/^.*Maxthon\/([\d.]+).*$/, "$1"),
    QQBrowser: () => u.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1"),
    QQ: () => u.replace(/^.*QQ\/([\d.]+).*$/, "$1"),
    Baidu: () => u.replace(/^.*BIDUBrowser[\s/]([\d.]+).*$/, "$1"),
    UC: () => u.replace(/^.*UC?Browser\/([\d.]+).*$/, "$1"),
    Sogou: () => u.replace(/^.*SE ([\d.X]+).*$/, "$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1"),
    "2345Explorer": () => u.replace(/^.*2345Explorer\/([\d.]+).*$/, "$1"),
    TheWorld: () => u.replace(/^.*TheWorld ([\d.]+).*$/, "$1"),
    MIUI: () => u.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1"),
    Quark: () => u.replace(/^.*Quark\/([\d.]+).*$/, "$1"),
    Qiyu: () => u.replace(/^.*Qiyu\/([\d.]+).*$/, "$1"),
    Wechat: () => u.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1"),
    Taobao: () => u.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1"),
    Alipay: () => u.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1"),
    Weibo: () => u.replace(/^.*weibo__([\d.]+).*$/, "$1"),
    Douban: () => u.replace(/^.*com.douban.frodo\/([\d.]+).*$/, "$1"),
    Suning: () => u.replace(/^.*SNEBUY-APP([\d.]+).*$/, "$1"),
    iQiYi: () => u.replace(/^.*IqiyiVersion\/([\d.]+).*$/, "$1")
  };
  dest.version = "";
  if (version[dest.browser]) {
    dest.version = version[dest.browser]();
    if (dest.version === u) {
      dest.version = "";
    }
  }
  if (dest.version.indexOf(".")) {
    dest.version = dest.version.substring(0, dest.version.indexOf("."));
  }
  if (dest.os === "iOS" && u.includes("iPad")) {
    dest.os = "iPadOS";
  } else if (dest.browser === "Edge" && !u.includes("Edg")) {
    dest.engine = "EdgeHTML";
  } else if (dest.browser === "MIUI") {
    dest.os = "Android";
  } else if (dest.browser === "Chrome" && Number(dest.version) > 27) {
    dest.engine = "Blink";
  } else if (dest.browser === "Opera" && Number(dest.version) > 12) {
    dest.engine = "Blink";
  } else if (dest.browser === "Yandex") {
    dest.engine = "Blink";
  } else if (dest.browser === void 0) {
    dest.browser = "Unknow App";
  }
  return dest;
}
var comment = "";
class ActionBtn {
  constructor(ctx, conf) {
    __publicField(this, "ctx");
    __publicField(this, "conf");
    __publicField(this, "$el");
    __publicField(this, "isLoading", false);
    __publicField(this, "msgRecTimer");
    __publicField(this, "msgRecTimerFunc");
    __publicField(this, "isConfirming", false);
    __publicField(this, "confirmRecTimer");
    this.ctx = ctx;
    this.$el = createElement(`<span class="atk-common-action-btn"></span>`);
    this.conf = typeof conf !== "object" ? { text: conf } : conf;
    this.$el.innerText = this.getText();
    if (this.conf.adminOnly)
      this.$el.setAttribute("atk-only-admin-show", "");
  }
  get isMessaging() {
    return !!this.msgRecTimer;
  }
  appendTo(dom) {
    dom.append(this.$el);
    return this;
  }
  getText() {
    return typeof this.conf.text === "string" ? this.conf.text : this.conf.text();
  }
  setClick(func) {
    this.$el.onclick = (e) => {
      e.stopPropagation();
      if (this.isLoading) {
        return;
      }
      if (this.conf.confirm && !this.isMessaging) {
        const confirmRestore = () => {
          this.isConfirming = false;
          this.$el.classList.remove("atk-btn-confirm");
          this.$el.innerText = this.getText();
        };
        if (!this.isConfirming) {
          this.isConfirming = true;
          this.$el.classList.add("atk-btn-confirm");
          this.$el.innerText = this.conf.confirmText || this.ctx.$t("actionConfirm");
          this.confirmRecTimer = window.setTimeout(() => confirmRestore(), 5e3);
          return;
        }
        if (this.confirmRecTimer)
          window.clearTimeout(this.confirmRecTimer);
        confirmRestore();
      }
      if (this.msgRecTimer) {
        this.fireMsgRecTimer();
        this.clearMsgRecTimer();
        return;
      }
      func();
    };
  }
  updateText(text) {
    if (text)
      this.conf.text = text;
    this.setLoading(false);
    this.$el.innerText = this.getText();
  }
  setLoading(value, loadingText) {
    if (this.isLoading === value)
      return;
    this.isLoading = value;
    if (value) {
      this.$el.classList.add("atk-btn-loading");
      this.$el.innerText = loadingText || `${this.ctx.$t("loading")}...`;
    } else {
      this.$el.classList.remove("atk-btn-loading");
      this.$el.innerText = this.getText();
    }
  }
  setError(text) {
    this.setMsg(text, "atk-btn-error");
  }
  setWarn(text) {
    this.setMsg(text, "atk-btn-warn");
  }
  setSuccess(text) {
    this.setMsg(text, "atk-btn-success");
  }
  setMsg(text, className, duringTime, after) {
    this.setLoading(false);
    if (className)
      this.$el.classList.add(className);
    this.$el.innerText = text;
    this.setMsgRecTimer(() => {
      this.$el.innerText = this.getText();
      if (className)
        this.$el.classList.remove(className);
      if (after)
        after();
    }, duringTime || 2500);
  }
  setMsgRecTimer(func, duringTime) {
    this.fireMsgRecTimer();
    this.clearMsgRecTimer();
    this.msgRecTimerFunc = func;
    this.msgRecTimer = window.setTimeout(() => {
      func();
      this.clearMsgRecTimer();
    }, duringTime);
  }
  fireMsgRecTimer() {
    if (this.msgRecTimerFunc)
      this.msgRecTimerFunc();
  }
  clearMsgRecTimer() {
    if (this.msgRecTimer)
      window.clearTimeout(this.msgRecTimer);
    this.msgRecTimer = void 0;
    this.msgRecTimerFunc = void 0;
  }
}
var CommentHTML = '<div class="atk-comment-wrap">\n  <div class="atk-comment">\n    <div class="atk-avatar"></div>\n    <div class="atk-main">\n      <div class="atk-header">\n        <span class="atk-item atk-nick"></span>\n        <span class="atk-badge-wrap"></span>\n        <span class="atk-item atk-date"></span>\n      </div>\n      <div class="atk-body">\n        <div class="atk-content"></div>\n      </div>\n      <div class="atk-footer">\n        <div class="atk-actions"></div>\n      </div>\n    </div>\n  </div>\n</div>\n';
class CommentRender {
  constructor(comment2) {
    __publicField(this, "comment");
    __publicField(this, "$el");
    __publicField(this, "$main");
    __publicField(this, "$header");
    __publicField(this, "$headerNick");
    __publicField(this, "$headerBadgeWrap");
    __publicField(this, "$body");
    __publicField(this, "$content");
    __publicField(this, "$childrenWrap");
    __publicField(this, "$actions");
    __publicField(this, "voteBtnUp");
    __publicField(this, "voteBtnDown");
    __publicField(this, "$replyTo");
    __publicField(this, "$replyAt");
    this.comment = comment2;
  }
  get ctx() {
    return this.comment.ctx;
  }
  get data() {
    return this.comment.getData();
  }
  get cConf() {
    return this.comment.getConf();
  }
  render() {
    this.$el = createElement(CommentHTML);
    this.$main = this.$el.querySelector(".atk-main");
    this.$header = this.$el.querySelector(".atk-header");
    this.$body = this.$el.querySelector(".atk-body");
    this.$content = this.$body.querySelector(".atk-content");
    this.$actions = this.$el.querySelector(".atk-actions");
    this.$el.setAttribute("data-comment-id", `${this.data.id}`);
    this.renderAvatar();
    this.renderHeader();
    this.renderContent();
    this.renderReplyAt();
    this.renderReplyTo();
    this.renderPending();
    this.renderActionBtn();
    this.recoveryChildrenWrap();
    return this.$el;
  }
  renderAvatar() {
    const $avatar = this.$el.querySelector(".atk-avatar");
    const $avatarImg = createElement("<img />");
    $avatarImg.src = this.comment.getGravatarURL();
    if (this.data.link) {
      const $avatarA = createElement('<a target="_blank" rel="noreferrer noopener nofollow"></a>');
      $avatarA.href = this.data.link;
      $avatarA.append($avatarImg);
      $avatar.append($avatarA);
    } else {
      $avatar.append($avatarImg);
    }
  }
  renderHeader() {
    this.$headerNick = this.$el.querySelector(".atk-nick");
    if (this.data.link) {
      const $nickA = createElement('<a target="_blank" rel="noreferrer noopener nofollow"></a>');
      $nickA.innerText = this.data.nick;
      $nickA.href = this.data.link;
      this.$headerNick.append($nickA);
    } else {
      this.$headerNick.innerText = this.data.nick;
    }
    this.$headerBadgeWrap = this.$el.querySelector(".atk-badge-wrap");
    this.$headerBadgeWrap.innerHTML = "";
    const badgeText = this.data.badge_name;
    const badgeColor = this.data.badge_color;
    if (badgeText) {
      const $badge = createElement(`<span class="atk-badge"></span>`);
      $badge.innerText = badgeText.replace("\u7BA1\u7406\u5458", this.ctx.$t("admin"));
      $badge.style.backgroundColor = badgeColor || "";
      this.$headerBadgeWrap.append($badge);
    }
    if (this.data.is_pinned) {
      const $pinnedBadge = createElement(`<span class="atk-pinned-badge">${this.ctx.$t("pin")}</span>`);
      this.$headerBadgeWrap.append($pinnedBadge);
    }
    const $date = this.$el.querySelector(".atk-date");
    $date.innerText = this.comment.getDateFormatted();
    $date.setAttribute("data-atk-comment-date", String(+new Date(this.data.date)));
    if (this.ctx.conf.uaBadge) {
      let $uaWrap = this.$header.querySelector("atk-ua-wrap");
      if (!$uaWrap) {
        $uaWrap = createElement(`<span class="atk-ua-wrap"></span>`);
        this.$header.append($uaWrap);
      }
      $uaWrap.innerHTML = "";
      const $uaBrowser = createElement(`<span class="atk-ua ua-browser"></span>`);
      const $usOS = createElement(`<span class="atk-ua ua-os"></span>`);
      $uaBrowser.innerText = this.comment.getUserUaBrowser();
      $usOS.innerText = this.comment.getUserUaOS();
      $uaWrap.append($uaBrowser);
      $uaWrap.append($usOS);
    }
  }
  renderContent() {
    if (!this.data.is_collapsed) {
      this.$content.innerHTML = this.comment.getContentMarked();
      this.$content.classList.remove("atk-hide", "atk-collapsed");
      return;
    }
    this.$content.classList.add("atk-hide", "atk-type-collapsed");
    const collapsedInfoEl = createElement(`
      <div class="atk-collapsed">
        <span class="atk-text">${this.ctx.$t("collapsedMsg")}</span>
        <span class="atk-show-btn">${this.ctx.$t("expand")}</span>
      </div>`);
    this.$body.insertAdjacentElement("beforeend", collapsedInfoEl);
    const contentShowBtn = collapsedInfoEl.querySelector(".atk-show-btn");
    contentShowBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (this.$content.classList.contains("atk-hide")) {
        this.$content.innerHTML = this.comment.getContentMarked();
        this.$content.classList.remove("atk-hide");
        playFadeInAnim(this.$content);
        contentShowBtn.innerHTML = this.ctx.$t("collapse");
      } else {
        this.$content.innerHTML = "";
        this.$content.classList.add("atk-hide");
        contentShowBtn.innerHTML = this.ctx.$t("expand");
      }
    });
  }
  renderReplyAt() {
    if (this.cConf.isFlatMode || this.data.rid === 0)
      return;
    if (!this.cConf.replyTo)
      return;
    this.$replyAt = createElement(`<span class="atk-item atk-reply-at"><span class="atk-arrow"></span><span class="atk-nick"></span></span>`);
    this.$replyAt.querySelector(".atk-nick").innerText = `${this.cConf.replyTo.nick}`;
    this.$replyAt.onclick = () => {
      this.comment.getActions().goToReplyComment();
    };
    this.$headerBadgeWrap.insertAdjacentElement("afterend", this.$replyAt);
  }
  renderReplyTo() {
    if (!this.cConf.isFlatMode)
      return;
    if (!this.cConf.replyTo)
      return;
    this.$replyTo = createElement(`
      <div class="atk-reply-to">
        <div class="atk-meta">${this.ctx.$t("reply")} <span class="atk-nick"></span>:</div>
        <div class="atk-content"></div>
      </div>`);
    const $nick = this.$replyTo.querySelector(".atk-nick");
    $nick.innerText = `@${this.cConf.replyTo.nick}`;
    $nick.onclick = () => {
      this.comment.getActions().goToReplyComment();
    };
    let replyContent = marked(this.ctx, this.cConf.replyTo.content);
    if (this.cConf.replyTo.is_collapsed)
      replyContent = `[${this.ctx.$t("collapsed")}]`;
    this.$replyTo.querySelector(".atk-content").innerHTML = replyContent;
    this.$body.prepend(this.$replyTo);
  }
  renderPending() {
    if (!this.data.is_pending)
      return;
    const pendingEl = createElement(`<div class="atk-pending">${this.ctx.$t("pendingMsg")}</div>`);
    this.$body.prepend(pendingEl);
  }
  renderActionBtn() {
    if (this.ctx.conf.vote) {
      this.voteBtnUp = new ActionBtn(this.ctx, () => `${this.ctx.$t("voteUp")} (${this.data.vote_up || 0})`).appendTo(this.$actions);
      this.voteBtnUp.setClick(() => {
        this.comment.getActions().vote("up");
      });
      if (this.ctx.conf.voteDown) {
        this.voteBtnDown = new ActionBtn(this.ctx, () => `${this.ctx.$t("voteDown")} (${this.data.vote_down || 0})`).appendTo(this.$actions);
        this.voteBtnDown.setClick(() => {
          this.comment.getActions().vote("down");
        });
      }
    }
    if (this.data.is_allow_reply) {
      const replyBtn = createElement(`<span>${this.ctx.$t("reply")}</span>`);
      this.$actions.append(replyBtn);
      replyBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (!this.cConf.onReplyBtnClick) {
          this.ctx.replyComment(this.data, this.$el);
        } else {
          this.cConf.onReplyBtnClick();
        }
      });
    }
    const collapseBtn = new ActionBtn(this.ctx, {
      text: () => this.data.is_collapsed ? this.ctx.$t("expand") : this.ctx.$t("collapse"),
      adminOnly: true
    });
    collapseBtn.appendTo(this.$actions);
    collapseBtn.setClick(() => {
      this.comment.getActions().adminEdit("collapsed", collapseBtn);
    });
    const pendingBtn = new ActionBtn(this.ctx, {
      text: () => this.data.is_pending ? this.ctx.$t("pending") : this.ctx.$t("approved"),
      adminOnly: true
    });
    pendingBtn.appendTo(this.$actions);
    pendingBtn.setClick(() => {
      this.comment.getActions().adminEdit("pending", pendingBtn);
    });
    const delBtn = new ActionBtn(this.ctx, {
      text: this.ctx.$t("delete"),
      confirm: true,
      confirmText: this.ctx.$t("deleteConfirm"),
      adminOnly: true
    });
    delBtn.appendTo(this.$actions);
    delBtn.setClick(() => {
      this.comment.getActions().adminDelete(delBtn);
    });
    const pinnedBtn = new ActionBtn(this.ctx, {
      text: () => this.data.is_pinned ? this.ctx.$t("unpin") : this.ctx.$t("pin"),
      adminOnly: true
    });
    pinnedBtn.appendTo(this.$actions);
    pinnedBtn.setClick(() => {
      this.comment.getActions().adminEdit("pinned", pendingBtn);
    });
  }
  checkHeightLimit() {
    this.checkHeightLimitArea("content");
    this.checkHeightLimitArea("children");
  }
  checkHeightLimitArea(area) {
    const childrenMaxH = this.ctx.conf.heightLimit.children;
    const contentMaxH = this.ctx.conf.heightLimit.content;
    if (area === "children" && !childrenMaxH)
      return;
    if (area === "content" && !contentMaxH)
      return;
    let maxHeight;
    if (area === "children")
      maxHeight = childrenMaxH;
    if (area === "content")
      maxHeight = contentMaxH;
    const checkEl = ($el) => {
      if (!$el)
        return;
      if (getHeight($el) > maxHeight) {
        this.heightLimitAdd($el, maxHeight);
      }
    };
    if (area === "children") {
      checkEl(this.$childrenWrap);
    } else if (area === "content") {
      checkEl(this.$content);
      checkEl(this.$replyTo);
      onImagesLoaded(this.$content, () => {
        checkEl(this.$content);
      });
      if (this.$replyTo) {
        onImagesLoaded(this.$replyTo, () => {
          checkEl(this.$replyTo);
        });
      }
    }
  }
  heightLimitRemove($el) {
    if (!$el)
      return;
    if (!$el.classList.contains("atk-height-limit"))
      return;
    $el.classList.remove("atk-height-limit");
    Array.from($el.children).forEach((e) => {
      if (e.classList.contains("atk-height-limit-btn"))
        e.remove();
    });
    $el.style.height = "";
    $el.style.overflow = "";
  }
  heightLimitRemoveForChildren() {
    if (!this.$childrenWrap)
      return;
    this.heightLimitRemove(this.$childrenWrap);
  }
  heightLimitAdd($el, maxHeight) {
    if (!$el)
      return;
    if ($el.classList.contains("atk-height-limit"))
      return;
    $el.classList.add("atk-height-limit");
    $el.style.height = `${maxHeight}px`;
    $el.style.overflow = "hidden";
    const $hideMoreOpenBtn = createElement(`<div class="atk-height-limit-btn">${this.ctx.$t("readMore")}</span>`);
    $hideMoreOpenBtn.onclick = (e) => {
      e.stopPropagation();
      this.heightLimitRemove($el);
      const children = this.comment.getChildren();
      if (children.length === 1)
        children[0].getRender().heightLimitRemove(children[0].getRender().$content);
    };
    $el.append($hideMoreOpenBtn);
  }
  playFadeAnim() {
    playFadeInAnim(this.comment.getRender().$el);
  }
  playFadeAnimForBody() {
    playFadeInAnim(this.comment.getRender().$body);
  }
  getChildrenWrap() {
    return this.$childrenWrap;
  }
  renderChildrenWrap() {
    if (!this.$childrenWrap) {
      this.$childrenWrap = createElement('<div class="atk-comment-children"></div>');
      this.$main.append(this.$childrenWrap);
    }
    return this.$childrenWrap;
  }
  recoveryChildrenWrap() {
    if (this.$childrenWrap) {
      this.$main.append(this.$childrenWrap);
    }
  }
  setUnread(val) {
    if (val)
      this.$el.classList.add("atk-unread");
    else
      this.$el.classList.remove("atk-unread");
  }
  setOpenable(val) {
    if (val)
      this.$el.classList.add("atk-openable");
    else
      this.$el.classList.remove("atk-openable");
  }
  setOpenURL(url) {
    this.setOpenable(true);
    this.$el.onclick = (evt) => {
      evt.preventDefault();
      window.open(url);
      if (this.cConf.openEvt)
        this.cConf.openEvt();
    };
  }
  setOpenAction(action) {
    this.setOpenable(true);
    this.$el.onclick = (evt) => {
      evt.preventDefault();
      action();
    };
  }
}
class CommentActions {
  constructor(comment2) {
    __publicField(this, "comment");
    this.comment = comment2;
  }
  get ctx() {
    return this.comment.ctx;
  }
  get data() {
    return this.comment.getData();
  }
  get cConf() {
    return this.comment.getConf();
  }
  vote(type) {
    const actionBtn = type === "up" ? this.comment.getRender().voteBtnUp : this.comment.getRender().voteBtnDown;
    this.ctx.getApi().vote(this.data.id, `comment_${type}`).then((v) => {
      var _a, _b;
      this.data.vote_up = v.up;
      this.data.vote_down = v.down;
      (_a = this.comment.getRender().voteBtnUp) == null ? void 0 : _a.updateText();
      (_b = this.comment.getRender().voteBtnDown) == null ? void 0 : _b.updateText();
    }).catch((err) => {
      actionBtn == null ? void 0 : actionBtn.setError(this.ctx.$t("voteFail"));
      console.log(err);
    });
  }
  adminEdit(type, btnElem) {
    if (btnElem.isLoading)
      return;
    btnElem.setLoading(true, `${this.ctx.$t("editing")}...`);
    const modify = __spreadValues({}, this.data);
    if (type === "collapsed") {
      modify.is_collapsed = !modify.is_collapsed;
    } else if (type === "pending") {
      modify.is_pending = !modify.is_pending;
    } else if (type === "pinned") {
      modify.is_pinned = !modify.is_pinned;
    }
    this.ctx.getApi().commentEdit(modify).then((data) => {
      btnElem.setLoading(false);
      this.comment.setData(data);
      this.ctx.listRefreshUI();
    }).catch((err) => {
      console.error(err);
      btnElem.setError(this.ctx.$t("editFail"));
    });
  }
  adminDelete(btnElem) {
    if (btnElem.isLoading)
      return;
    btnElem.setLoading(true, `${this.ctx.$t("deleting")}...`);
    this.ctx.getApi().commentDel(this.data.id, this.data.site_name).then(() => {
      btnElem.setLoading(false);
      if (this.cConf.onDelete)
        this.cConf.onDelete(this.comment);
    }).catch((e) => {
      console.error(e);
      btnElem.setError(this.ctx.$t("deleteFail"));
    });
  }
  goToReplyComment() {
    const origHash = window.location.hash;
    const modifyHash = `#atk-comment-${this.data.rid}`;
    window.location.hash = modifyHash;
    if (modifyHash === origHash)
      window.dispatchEvent(new Event("hashchange"));
  }
}
class Comment extends Component {
  constructor(ctx, data, conf) {
    super(ctx);
    __publicField(this, "renderInstance");
    __publicField(this, "actionInstance");
    __publicField(this, "data");
    __publicField(this, "cConf");
    __publicField(this, "parent");
    __publicField(this, "children", []);
    __publicField(this, "nestCurt");
    __publicField(this, "nestMax");
    this.nestMax = ctx.conf.nestMax || 3;
    this.cConf = conf;
    this.data = __spreadValues({}, data);
    this.data.date = this.data.date.replace(/-/g, "/");
    this.parent = null;
    this.nestCurt = 1;
    this.actionInstance = new CommentActions(this);
    this.renderInstance = new CommentRender(this);
  }
  render() {
    const newEl = this.renderInstance.render();
    if (this.$el)
      this.$el.replaceWith(newEl);
    this.$el = newEl;
    if (this.cConf.afterRender)
      this.cConf.afterRender();
  }
  getActions() {
    return this.actionInstance;
  }
  getRender() {
    return this.renderInstance;
  }
  getData() {
    return this.data;
  }
  setData(data) {
    this.data = data;
    this.render();
    this.getRender().playFadeAnimForBody();
  }
  getParent() {
    return this.parent;
  }
  getChildren() {
    return this.children;
  }
  getNestCurt() {
    return this.nestCurt;
  }
  getIsRoot() {
    return this.data.rid === 0;
  }
  getID() {
    return this.data.id;
  }
  putChild(childC, insertMode = "append") {
    childC.parent = this;
    childC.nestCurt = this.nestCurt + 1;
    this.children.push(childC);
    const $children = this.getChildrenEl();
    if (insertMode === "append")
      $children.append(childC.getEl());
    else if (insertMode === "prepend")
      $children.prepend(childC.getEl());
    childC.getRender().playFadeAnim();
    childC.getRender().checkHeightLimitArea("content");
  }
  getChildrenEl() {
    let $children = this.getRender().getChildrenWrap();
    if (!$children) {
      if (this.nestCurt < this.nestMax) {
        $children = this.getRender().renderChildrenWrap();
      } else {
        $children = this.parent.getChildrenEl();
      }
    }
    return $children;
  }
  getParents() {
    const parents = [];
    const once = (c) => {
      if (c.parent) {
        parents.push(c.parent);
        once(c.parent);
      }
    };
    once(this);
    return parents;
  }
  getEl() {
    return this.$el;
  }
  getGravatarURL() {
    return getGravatarURL(this.ctx, this.data.email_encrypted);
  }
  getContentMarked() {
    return marked(this.ctx, this.data.content);
  }
  getDateFormatted() {
    return timeAgo(new Date(this.data.date), this.ctx);
  }
  getUserUaBrowser() {
    const info = Detect(this.data.ua);
    return `${info.browser} ${info.version}`;
  }
  getUserUaOS() {
    const info = Detect(this.data.ua);
    return `${info.os} ${info.osVersion}`;
  }
  getConf() {
    return this.cConf;
  }
}
var pagination = "";
class Pagination {
  constructor(total, conf) {
    __publicField(this, "conf");
    __publicField(this, "total");
    __publicField(this, "$el");
    __publicField(this, "$input");
    __publicField(this, "inputTimer");
    __publicField(this, "$prevBtn");
    __publicField(this, "$nextBtn");
    __publicField(this, "page", 1);
    this.total = total;
    this.conf = conf;
    this.$el = createElement(`<div class="atk-pagination-wrap">
        <div class="atk-pagination">
          <div class="atk-btn atk-btn-prev">Prev</div>
          <input type="text" class="atk-input" aria-label="Enter the number of page" />
          <div class="atk-btn atk-btn-next">Next</div>
        </div>
      </div>`);
    this.$input = this.$el.querySelector(".atk-input");
    this.$input.value = `${this.page}`;
    this.$input.oninput = () => this.input();
    this.$input.onkeydown = (e) => this.keydown(e);
    this.$prevBtn = this.$el.querySelector(".atk-btn-prev");
    this.$nextBtn = this.$el.querySelector(".atk-btn-next");
    this.$prevBtn.onclick = () => this.prev();
    this.$nextBtn.onclick = () => this.next();
    this.checkDisabled();
  }
  get pageSize() {
    return this.conf.pageSize;
  }
  get offset() {
    return this.pageSize * (this.page - 1);
  }
  get maxPage() {
    return Math.ceil(this.total / this.pageSize);
  }
  update(offset, total) {
    this.page = Math.ceil(offset / this.pageSize) + 1;
    this.total = total;
    this.setInput(this.page);
    this.checkDisabled();
  }
  setInput(page) {
    this.$input.value = `${page}`;
  }
  input(now = false) {
    window.clearTimeout(this.inputTimer);
    const value = this.$input.value.trim();
    const modify = () => {
      if (value === "") {
        this.setInput(this.page);
        return;
      }
      let page = Number(value);
      if (Number.isNaN(page)) {
        this.setInput(this.page);
        return;
      }
      if (page < 1) {
        this.setInput(this.page);
        return;
      }
      if (page > this.maxPage) {
        this.setInput(this.maxPage);
        page = this.maxPage;
      }
      this.change(page);
    };
    if (!now)
      this.inputTimer = window.setTimeout(() => modify(), 800);
    else
      modify();
  }
  prev() {
    const page = this.page - 1;
    if (page < 1) {
      return;
    }
    this.change(page);
  }
  next() {
    const page = this.page + 1;
    if (page > this.maxPage) {
      return;
    }
    this.change(page);
  }
  change(page) {
    this.page = page;
    this.conf.onChange(this.offset);
    this.setInput(page);
    this.checkDisabled();
  }
  checkDisabled() {
    if (this.page + 1 > this.maxPage) {
      this.$nextBtn.classList.add("atk-disabled");
    } else {
      this.$nextBtn.classList.remove("atk-disabled");
    }
    if (this.page - 1 < 1) {
      this.$prevBtn.classList.add("atk-disabled");
    } else {
      this.$prevBtn.classList.remove("atk-disabled");
    }
  }
  keydown(e) {
    const keyCode = e.keyCode || e.which;
    if (keyCode === 38) {
      const page = Number(this.$input.value) + 1;
      if (page > this.maxPage) {
        return;
      }
      this.setInput(page);
      this.input();
    } else if (keyCode === 40) {
      const page = Number(this.$input.value) - 1;
      if (page < 1) {
        return;
      }
      this.setInput(page);
      this.input();
    } else if (keyCode === 13) {
      this.input(true);
    }
  }
  setLoading(isLoading) {
    if (isLoading)
      showLoading(this.$el);
    else
      hideLoading(this.$el);
  }
}
class ReadMoreBtn {
  constructor(conf) {
    __publicField(this, "conf");
    __publicField(this, "$el");
    __publicField(this, "$loading");
    __publicField(this, "$text");
    __publicField(this, "offset", 0);
    __publicField(this, "total", 0);
    __publicField(this, "origText", "Load More");
    this.conf = conf;
    this.origText = this.conf.text || this.origText;
    this.$el = createElement(`<div class="atk-list-read-more" style="display: none;">
      <div class="atk-list-read-more-inner">
        <div class="atk-loading-icon" style="display: none;"></div>
        <span class="atk-text">${this.origText}</span>
      </div>
    </div>`);
    this.$loading = this.$el.querySelector(".atk-loading-icon");
    this.$text = this.$el.querySelector(".atk-text");
    this.$el.onclick = () => {
      this.click();
    };
  }
  get hasMore() {
    return this.total > this.offset + this.conf.pageSize;
  }
  click() {
    if (this.hasMore)
      this.conf.onClick(this.offset + this.conf.pageSize);
    this.checkDisabled();
  }
  show() {
    this.$el.style.display = "";
  }
  hide() {
    this.$el.style.display = "none";
  }
  setLoading(isLoading) {
    this.$loading.style.display = isLoading ? "" : "none";
    this.$text.style.display = isLoading ? "none" : "";
  }
  showErr(errMsg) {
    this.setLoading(false);
    this.$text.innerText = errMsg;
    this.$el.classList.add("atk-err");
    window.setTimeout(() => {
      this.$text.innerText = this.origText;
      this.$el.classList.remove("atk-err");
    }, 2e3);
  }
  update(offset, total) {
    this.offset = offset;
    this.total = total;
    this.checkDisabled();
  }
  checkDisabled() {
    if (this.hasMore)
      this.show();
    else
      this.hide();
  }
}
function makeNestCommentNodeList(srcData, sortBy = "DATE_DESC", nestMax = 2) {
  const nodeList = [];
  const roots = srcData.filter((o) => o.rid === 0);
  roots.forEach((root) => {
    const rootNode = {
      id: root.id,
      comment: root,
      children: [],
      level: 1
    };
    rootNode.parent = rootNode;
    nodeList.push(rootNode);
    (function loadChildren(parentNode) {
      const children = srcData.filter((o) => o.rid === parentNode.id);
      if (children.length === 0)
        return;
      if (parentNode.level >= nestMax)
        parentNode = parentNode.parent;
      children.forEach((child) => {
        const childNode = {
          id: child.id,
          comment: child,
          children: [],
          parent: parentNode,
          level: parentNode.level + 1
        };
        parentNode.children.push(childNode);
        loadChildren(childNode);
      });
    })(rootNode);
  });
  const sortFunc = (a, b) => {
    let v = a.id - b.id;
    if (sortBy === "DATE_ASC")
      v = +new Date(a.comment.date) - +new Date(b.comment.date);
    else if (sortBy === "DATE_DESC")
      v = +new Date(b.comment.date) - +new Date(a.comment.date);
    else if (sortBy === "SRC_INDEX")
      v = srcData.indexOf(a.comment) - srcData.indexOf(b.comment);
    else if (sortBy === "VOTE_UP_DESC")
      v = b.comment.vote_up - a.comment.vote_up;
    return v;
  };
  (function sortLevels(nodes) {
    nodes.forEach((node) => {
      node.children = node.children.sort(sortFunc);
      sortLevels(node.children);
    });
  })(nodeList);
  return nodeList;
}
const backendMinVersion = "2.1.7";
class ListLite extends Component {
  constructor(ctx) {
    super(ctx);
    __publicField(this, "$commentsWrap");
    __publicField(this, "data");
    __publicField(this, "isLoading", false);
    __publicField(this, "noCommentText");
    __publicField(this, "flatMode", false);
    __publicField(this, "nestSortBy");
    __publicField(this, "pageMode", "pagination");
    __publicField(this, "pageSize", 20);
    __publicField(this, "scrollListenerAt");
    __publicField(this, "repositionAt");
    __publicField(this, "pagination");
    __publicField(this, "readMoreBtn");
    __publicField(this, "autoLoadScrollEvent");
    __publicField(this, "renderComment");
    __publicField(this, "paramsEditor");
    __publicField(this, "onAfterLoad");
    __publicField(this, "unread", []);
    __publicField(this, "unreadHighlight");
    this.$el = createElement(`<div class="atk-list-lite">
      <div class="atk-list-comments-wrap"></div>
    </div>`);
    this.$commentsWrap = this.$el.querySelector(".atk-list-comments-wrap");
    this.noCommentText = ctx.conf.noComment || ctx.$t("noComment");
    this.nestSortBy = this.ctx.conf.nestSort || "DATE_ASC";
    window.setInterval(() => {
      this.$el.querySelectorAll("[data-atk-comment-date]").forEach((el) => {
        const date = el.getAttribute("data-atk-comment-date");
        el.innerText = timeAgo(new Date(Number(date)), this.ctx);
      });
    }, 30 * 1e3);
  }
  getData() {
    return this.data;
  }
  clearData() {
    this.data = void 0;
  }
  getCommentsWrapEl() {
    return this.$commentsWrap;
  }
  fetchComments(offset) {
    return __async(this, null, function* () {
      if (this.isLoading)
        return;
      const showLoading$1 = () => {
        this.isLoading = true;
        if (offset === 0)
          showLoading(this.$el);
        else if (this.pageMode === "read-more")
          this.readMoreBtn.setLoading(true);
        else if (this.pageMode === "pagination")
          this.pagination.setLoading(true);
      };
      const hideLoading$1 = () => {
        this.isLoading = false;
        if (offset === 0)
          hideLoading(this.$el);
        else if (this.pageMode === "read-more")
          this.readMoreBtn.setLoading(false);
        else if (this.pageMode === "pagination")
          this.pagination.setLoading(false);
      };
      showLoading$1();
      this.ctx.trigger("list-load");
      if (this.pageMode === "read-more" && offset === 0) {
        this.ctx.clearAllComments();
      }
      let listData;
      try {
        listData = yield this.ctx.getApi().get(offset, this.pageSize, this.flatMode, this.paramsEditor);
      } catch (e) {
        this.onError(e.msg || String(e), offset, e.data);
        throw e;
      } finally {
        hideLoading$1();
      }
      setError(this.$el, null);
      try {
        this.onLoad(listData, offset);
      } catch (e) {
        this.onError(String(e), offset);
        throw e;
      } finally {
        hideLoading$1();
      }
    });
  }
  onLoad(data, offset) {
    var _a, _b;
    if (this.pageMode === "pagination") {
      this.ctx.clearAllComments();
    }
    this.data = data;
    const feMinVersion = ((_a = data.api_version) == null ? void 0 : _a.fe_min_version) || "0.0.0";
    if (this.ctx.conf.versionCheck && this.versionCheck("frontend", feMinVersion, "2.3.2"))
      return;
    if (this.ctx.conf.versionCheck && this.versionCheck("backend", backendMinVersion, (_b = data.api_version) == null ? void 0 : _b.version))
      return;
    if (data.conf && typeof data.conf.img_upload === "boolean") {
      this.ctx.conf.imgUpload = data.conf.img_upload;
    }
    this.importComments(data.comments);
    this.refreshPagination(offset, this.flatMode ? data.total : data.total_roots);
    this.refreshUI();
    this.ctx.updateNotifies(data.unread || []);
    this.ctx.trigger("list-loaded");
    this.ctx.trigger("conf-updated");
    if (this.onAfterLoad)
      this.onAfterLoad(data);
  }
  refreshPagination(offset, total) {
    const modePagination = this.pageMode === "pagination";
    const modeReadMoreBtn = this.pageMode === "read-more";
    const initialized = modePagination ? !!this.pagination : !!this.readMoreBtn;
    if (!initialized) {
      this.initPagination();
    }
    if (modePagination)
      this.pagination.update(offset, total);
    if (modeReadMoreBtn)
      this.readMoreBtn.update(offset, total);
  }
  initPagination() {
    if (this.pageMode === "read-more") {
      this.readMoreBtn = new ReadMoreBtn({
        pageSize: this.pageSize,
        onClick: (o) => __async(this, null, function* () {
          yield this.fetchComments(o);
        }),
        text: this.ctx.$t("loadMore")
      });
      this.$el.append(this.readMoreBtn.$el);
      if (this.conf.pagination.autoLoad) {
        const at = this.scrollListenerAt || document;
        if (this.autoLoadScrollEvent)
          at.removeEventListener("scroll", this.autoLoadScrollEvent);
        this.autoLoadScrollEvent = () => {
          if (this.pageMode !== "read-more")
            return;
          if (!this.readMoreBtn)
            return;
          if (!this.readMoreBtn.hasMore)
            return;
          if (this.isLoading)
            return;
          const $target = this.$el.querySelector(".atk-list-comments-wrap > .atk-comment-wrap:nth-last-child(3)");
          if (!$target)
            return;
          if (isVisible($target, this.scrollListenerAt)) {
            this.readMoreBtn.click();
          }
        };
        at.addEventListener("scroll", this.autoLoadScrollEvent);
      }
    }
    if (this.pageMode === "pagination") {
      this.pagination = new Pagination(!this.flatMode ? this.data.total_roots : this.data.total, {
        pageSize: this.pageSize,
        onChange: (o) => __async(this, null, function* () {
          if (this.ctx.conf.editorTravel === true) {
            this.ctx.editorTravelBack();
          }
          yield this.fetchComments(o);
          if (this.repositionAt) {
            const at = this.scrollListenerAt || window;
            at.scroll({
              top: this.repositionAt ? getOffset(this.repositionAt).top : 0,
              left: 0
            });
          }
        })
      });
      this.$el.append(this.pagination.$el);
    }
  }
  onError(msg, offset, errData) {
    var _a;
    msg = String(msg);
    console.error(msg);
    if (offset !== 0 && this.pageMode === "read-more") {
      (_a = this.readMoreBtn) == null ? void 0 : _a.showErr(this.$t("loadFail"));
      return;
    }
    const $err = createElement(`<span>${msg}\uFF0C${this.$t("listLoadFailMsg")}<br/></span>`);
    const $retryBtn = createElement(`<span style="cursor:pointer;">${this.$t("listRetry")}</span>`);
    $retryBtn.onclick = () => this.fetchComments(0);
    $err.appendChild($retryBtn);
    const adminBtn = createElement('<span atk-only-admin-show> | <span style="cursor:pointer;">\u6253\u5F00\u63A7\u5236\u53F0</span></span>');
    $err.appendChild(adminBtn);
    if (!this.ctx.user.data.isAdmin)
      adminBtn.classList.add("atk-hide");
    let sidebarView = "";
    if (errData == null ? void 0 : errData.err_no_site) {
      const viewLoadParam = {
        create_name: this.ctx.conf.site,
        create_urls: `${window.location.protocol}//${window.location.host}`
      };
      sidebarView = `sites|${JSON.stringify(viewLoadParam)}`;
    }
    adminBtn.onclick = () => this.ctx.showSidebar({
      view: sidebarView
    });
    setError(this.$el, $err);
  }
  refreshUI() {
    const isNoComment = this.ctx.getCommentList().length <= 0;
    let $noComment = this.$commentsWrap.querySelector(".atk-list-no-comment");
    if (isNoComment) {
      if (!$noComment) {
        $noComment = createElement('<div class="atk-list-no-comment"></div>');
        $noComment.innerHTML = this.noCommentText;
        this.$commentsWrap.appendChild($noComment);
      }
    } else {
      $noComment == null ? void 0 : $noComment.remove();
    }
    this.ctx.checkAdminShowEl();
  }
  reload() {
    this.fetchComments(0);
  }
  createComment(cData, ctxData) {
    if (!ctxData)
      ctxData = this.ctx.getCommentDataList();
    const comment2 = new Comment(this.ctx, cData, {
      isFlatMode: this.flatMode,
      afterRender: () => {
        if (this.renderComment)
          this.renderComment(comment2);
      },
      onDelete: (c) => {
        this.ctx.deleteComment(c);
        this.refreshUI();
      },
      replyTo: cData.rid ? ctxData.find((c) => c.id === cData.rid) : void 0
    });
    comment2.render();
    this.ctx.getCommentList().push(comment2);
    return comment2;
  }
  importComments(srcData) {
    if (this.flatMode) {
      srcData.forEach((commentData) => {
        this.putCommentFlatMode(commentData, srcData, "append");
      });
    } else {
      this.importCommentsNest(srcData);
    }
  }
  importCommentsNest(srcData) {
    const rootNodes = makeNestCommentNodeList(srcData, this.nestSortBy, this.conf.nestMax);
    rootNodes.forEach((rootNode) => {
      const rootC = this.createComment(rootNode.comment, srcData);
      this.$commentsWrap.appendChild(rootC.getEl());
      rootC.getRender().playFadeAnim();
      const that = this;
      (function loadChildren(parentC, parentNode) {
        parentNode.children.forEach((node) => {
          const childD = node.comment;
          const childC = that.createComment(childD, srcData);
          parentC.putChild(childC);
          loadChildren(childC, node);
        });
      })(rootC, rootNode);
      rootC.getRender().checkHeightLimit();
    });
  }
  putCommentFlatMode(cData, ctxData, insertMode) {
    if (cData.is_collapsed)
      cData.is_allow_reply = false;
    const comment2 = this.createComment(cData, ctxData);
    if (cData.visible) {
      if (insertMode === "append")
        this.$commentsWrap.append(comment2.getEl());
      if (insertMode === "prepend")
        this.$commentsWrap.prepend(comment2.getEl());
      comment2.getRender().playFadeAnim();
    }
    comment2.getRender().checkHeightLimit();
    return comment2;
  }
  insertComment(commentData) {
    if (!this.flatMode) {
      const comment2 = this.createComment(commentData);
      if (commentData.rid === 0) {
        this.$commentsWrap.prepend(comment2.getEl());
      } else {
        const parent = this.ctx.findComment(commentData.rid);
        if (parent) {
          parent.putChild(comment2, this.nestSortBy === "DATE_ASC" ? "append" : "prepend");
          comment2.getParents().forEach((p) => {
            p.getRender().heightLimitRemoveForChildren();
          });
        }
      }
      comment2.getRender().checkHeightLimit();
      scrollIntoView(comment2.getEl());
      comment2.getRender().playFadeAnim();
    } else {
      const comment2 = this.putCommentFlatMode(commentData, this.ctx.getCommentDataList(), "prepend");
      scrollIntoView(comment2.getEl());
    }
    if (this.data)
      this.data.total += 1;
    this.refreshUI();
    this.ctx.trigger("list-loaded");
    this.ctx.trigger("list-inserted", commentData);
  }
  updateUnread(notifies) {
    this.unread = notifies;
    if (this.unreadHighlight === true) {
      this.ctx.getCommentList().forEach((comment2) => {
        const notify = this.unread.find((o) => o.comment_id === comment2.getID());
        if (notify) {
          comment2.getRender().setUnread(true);
          comment2.getRender().setOpenAction(() => {
            window.open(notify.read_link);
            this.unread = this.unread.filter((o) => o.comment_id !== comment2.getID());
            this.ctx.updateNotifies(this.unread);
          });
        } else {
          comment2.getRender().setUnread(false);
        }
      });
    }
  }
  versionCheck(name, needVersion, curtVersion) {
    const needUpdate = versionCompare(needVersion, curtVersion) === 1;
    if (needUpdate) {
      const errEl = createElement(`<div>Artalk ${this.$t(name)}\u7248\u672C\u5DF2\u8FC7\u65F6\uFF0C\u8BF7\u66F4\u65B0\u4EE5\u83B7\u5F97\u5B8C\u6574\u4F53\u9A8C<br/>\u5982\u679C\u4F60\u662F\u7BA1\u7406\u5458\uFF0C\u8BF7\u524D\u5F80 \u201C<a href="https://artalk.js.org/" target="_blank">\u5B98\u65B9\u6587\u6863</a>\u201D \u83B7\u5F97\u5E2E\u52A9<br/><br/><span style="color: var(--at-color-meta);">\u5F53\u524D${this.$t(name)}\u7248\u672C ${curtVersion}\uFF0C\u9700\u6C42\u7248\u672C >= ${needVersion}</span><br/><br/></div>`);
      const ignoreBtn = createElement('<span style="cursor:pointer;">\u5FFD\u7565</span>');
      ignoreBtn.onclick = () => {
        setError(this.$el.parentElement, null);
        this.ctx.conf.versionCheck = false;
        this.ctx.trigger("conf-updated");
        this.fetchComments(0);
      };
      errEl.append(ignoreBtn);
      setError(this.$el.parentElement, errEl, '<span class="atk-warn-title">Artalk Warn</span>');
    }
    return needUpdate;
  }
}
class List extends ListLite {
  constructor(ctx) {
    const el = createElement(ListHTML);
    super(ctx);
    __publicField(this, "$closeCommentBtn");
    __publicField(this, "$openSidebarBtn");
    __publicField(this, "$unreadBadge");
    __publicField(this, "$commentCount");
    __publicField(this, "$commentCountNum");
    __publicField(this, "$dropdownWrap");
    __publicField(this, "goToCommentFounded", false);
    __publicField(this, "goToCommentDelay", true);
    el.querySelector(".atk-list-body").append(this.$el);
    this.$el = el;
    if (this.ctx.conf.flatMode === true) {
      this.flatMode = true;
    } else if (this.conf.nestMax && this.conf.nestMax <= 1) {
      this.flatMode = true;
    } else if (this.ctx.conf.flatMode === "auto") {
      if (window.matchMedia("(max-width: 768px)").matches)
        this.flatMode = true;
    }
    this.pageMode = this.conf.pagination.readMore ? "read-more" : "pagination";
    this.pageSize = this.conf.pagination.pageSize || 20;
    this.repositionAt = this.$el;
    this.initListActionBtn();
    this.$commentCount = this.$el.querySelector(".atk-comment-count");
    this.$commentCount.innerHTML = this.$t("counter", {
      count: '<span class="atk-comment-count-num">0</span>'
    });
    this.$commentCountNum = this.$commentCount.querySelector(".atk-comment-count-num");
    if (this.ctx.conf.listSort) {
      this.initDropdown();
    }
    this.$el.querySelector(".atk-copyright").innerHTML = `Powered By <a href="https://artalk.js.org" target="_blank" title="Artalk v${"2.3.2"}">Artalk</a>`;
  }
  initListActionBtn() {
    this.$openSidebarBtn = this.$el.querySelector('[data-action="open-sidebar"]');
    this.$closeCommentBtn = this.$el.querySelector('[data-action="admin-close-comment"]');
    this.$unreadBadge = this.$el.querySelector(".atk-unread-badge");
    this.$openSidebarBtn.addEventListener("click", () => {
      this.ctx.showSidebar();
    });
    this.$closeCommentBtn.addEventListener("click", () => {
      if (!this.data)
        return;
      this.data.page.admin_only = !this.data.page.admin_only;
      this.adminPageEditSave();
    });
  }
  refreshUI() {
    var _a;
    super.refreshUI();
    this.$commentCountNum.innerText = String(Number((_a = this.data) == null ? void 0 : _a.total) || 0);
    if (!!this.ctx.user.data.nick && !!this.ctx.user.data.email) {
      this.$openSidebarBtn.classList.remove("atk-hide");
    } else {
      this.$openSidebarBtn.classList.add("atk-hide");
    }
    this.ctx.checkAdminShowEl();
    this.$openSidebarBtn.querySelector(".atk-text").innerText = !this.ctx.user.data.isAdmin ? this.$t("msgCenter") : this.$t("ctrlCenter");
    if (!!this.data && !!this.data.page && this.data.page.admin_only === true) {
      this.ctx.editorClose();
      this.$closeCommentBtn.innerHTML = this.$t("openComment");
    } else {
      this.ctx.editorOpen();
      this.$closeCommentBtn.innerHTML = this.$t("closeComment");
    }
  }
  onLoad(data, offset) {
    super.onLoad(data, offset);
    if (!this.goToCommentFounded)
      this.checkGoToCommentByUrlHash();
    if (this.ctx.conf.editorTravel === true) {
      this.ctx.editorTravelBack();
    }
  }
  checkGoToCommentByUrlHash() {
    let commentId = Number(getQueryParam("atk_comment"));
    if (!commentId) {
      const match = window.location.hash.match(/#atk-comment-([0-9]+)/);
      if (!match || !match[1] || Number.isNaN(Number(match[1])))
        return;
      commentId = Number(match[1]);
    }
    if (!commentId)
      return;
    const comment2 = this.ctx.findComment(commentId);
    if (!comment2) {
      if (this.readMoreBtn)
        this.readMoreBtn.click();
      else if (this.pagination)
        this.pagination.next();
      return;
    }
    const notifyKey = getQueryParam("atk_notify_key");
    if (notifyKey) {
      this.ctx.getApi().markRead(notifyKey).then(() => {
        this.unread = this.unread.filter((o) => o.comment_id !== commentId);
        this.updateUnread(this.unread);
      });
    }
    comment2.getParents().forEach((p) => {
      p.getRender().heightLimitRemoveForChildren();
    });
    const goTo = () => {
      scrollIntoView(comment2.getEl(), false);
      comment2.getEl().classList.remove("atk-flash-once");
      window.setTimeout(() => {
        comment2.getEl().classList.add("atk-flash-once");
      }, 150);
    };
    if (!this.goToCommentDelay)
      goTo();
    else
      window.setTimeout(() => goTo(), 350);
    this.goToCommentFounded = true;
  }
  adminPageEditSave() {
    if (!this.data || !this.data.page)
      return;
    this.ctx.editorShowLoading();
    this.ctx.getApi().pageEdit(this.data.page).then((page) => {
      if (this.data)
        this.data.page = __spreadValues({}, page);
      this.refreshUI();
    }).catch((err) => {
      this.ctx.editorShowNotify(`${this.$t("editFail")}: ${err.msg || String(err)}`, "e");
    }).finally(() => {
      this.ctx.editorHideLoading();
    });
  }
  showUnreadBadge(count) {
    if (count > 0) {
      this.$unreadBadge.innerText = `${Number(count || 0)}`;
      this.$unreadBadge.style.display = "block";
    } else {
      this.$unreadBadge.style.display = "none";
    }
  }
  initDropdown() {
    this.$dropdownWrap = this.$commentCount;
    this.$commentCount.classList.add("atk-dropdown-wrap");
    this.$dropdownWrap.append(createElement(`<span class="atk-arrow-down-icon"></span>`));
    const reloadUseParamsEditor = (func) => {
      this.paramsEditor = (p) => {
        func(p);
      };
      this.fetchComments(0);
    };
    const dropdownList = [
      [this.$t("sortLatest"), () => {
        reloadUseParamsEditor((p) => {
          p.sort_by = "date_desc";
        });
      }],
      [this.$t("sortBest"), () => {
        reloadUseParamsEditor((p) => {
          p.sort_by = "vote";
        });
      }],
      [this.$t("sortOldest"), () => {
        reloadUseParamsEditor((p) => {
          p.sort_by = "date_asc";
        });
      }],
      [this.$t("sortAuthor"), () => {
        reloadUseParamsEditor((p) => {
          p.view_only_admin = true;
        });
      }]
    ];
    let curtActive = 0;
    const onItemClick = (i, $item, name, action) => {
      action();
      curtActive = i;
      $dropdown.querySelectorAll(".active").forEach((e) => {
        e.classList.remove("active");
      });
      $item.classList.add("active");
      $dropdown.style.display = "none";
      setTimeout(() => {
        $dropdown.style.display = "";
      }, 80);
    };
    const $dropdown = createElement(`<ul class="atk-dropdown atk-fade-in"></ul>`);
    dropdownList.forEach((item, i) => {
      const name = item[0];
      const action = item[1];
      const $item = createElement(`<li class="atk-dropdown-item"><span></span></li>`);
      const $link = $item.querySelector("span");
      $link.innerText = name;
      $link.onclick = () => {
        onItemClick(i, $item, name, action);
      };
      $dropdown.append($item);
      if (i === curtActive)
        $item.classList.add("active");
    });
    this.$dropdownWrap.append($dropdown);
  }
  updateUnread(notifies) {
    super.updateUnread(notifies);
    this.showUnreadBadge((notifies == null ? void 0 : notifies.length) || 0);
  }
}
var sidebarLayer = "";
var SidebarHTML = '<div class="atk-sidebar-layer">\n  <div class="atk-sidebar-inner">\n    <div class="atk-sidebar-header">\n      <div class="atk-sidebar-close"><i class="atk-icon atk-icon-close"></i></div>\n    </div>\n    <div class="atk-sidebar-iframe-wrap"></div>\n  </div>\n</div>\n';
class SidebarLayer extends Component {
  constructor(ctx) {
    super(ctx);
    __publicField(this, "layer");
    __publicField(this, "$header");
    __publicField(this, "$closeBtn");
    __publicField(this, "$iframeWrap");
    __publicField(this, "$iframe");
    __publicField(this, "firstShow", true);
    this.$el = createElement(SidebarHTML);
    this.$header = this.$el.querySelector(".atk-sidebar-header");
    this.$closeBtn = this.$header.querySelector(".atk-sidebar-close");
    this.$iframeWrap = this.$el.querySelector(".atk-sidebar-iframe-wrap");
    this.$closeBtn.onclick = () => {
      this.hide();
    };
    this.ctx.on("user-changed", () => {
      this.firstShow = true;
    });
  }
  show() {
    return __async(this, arguments, function* (conf = {}) {
      this.$el.style.transform = "";
      if (this.layer == null) {
        this.layer = new Layer(this.ctx, "sidebar", this.$el);
        this.layer.afterHide = () => {
          if (this.ctx.conf.editorTravel === true) {
            this.ctx.editorTravelBack();
          }
        };
      }
      this.layer.show();
      setTimeout(() => {
        this.$el.style.transform = "translate(0, 0)";
      }, 20);
      (() => __async(this, null, function* () {
        var _a;
        const resp = yield this.ctx.getApi().loginStatus();
        if (resp.is_admin && !resp.is_login) {
          (_a = this.layer) == null ? void 0 : _a.hide();
          this.firstShow = true;
          this.ctx.checkAdmin({
            onSuccess: () => {
              setTimeout(() => {
                this.show(conf);
              }, 500);
            },
            onCancel: () => {
            }
          });
        }
      }))();
      this.ctx.updateNotifies([]);
      if (this.firstShow) {
        this.$iframeWrap.innerHTML = "";
        this.$iframe = createElement("<iframe></iframe>");
        const baseURL = getURLBasedOnApi(this.ctx, "/sidebar/");
        const query = {
          pageKey: this.conf.pageKey,
          site: this.conf.site || "",
          user: JSON.stringify(this.ctx.user.data),
          time: +new Date()
        };
        if (conf.view)
          query.view = conf.view;
        if (this.conf.darkMode)
          query.darkMode = "1";
        const urlParams = new URLSearchParams(query);
        this.iframeLoad(`${baseURL}?${urlParams.toString()}`);
        this.$iframeWrap.append(this.$iframe);
        this.firstShow = false;
      } else {
        const isIframeSrcDarkMode = this.$iframe.src.includes("darkMode=1");
        if (this.conf.darkMode && !isIframeSrcDarkMode)
          this.iframeLoad(`${this.$iframe.src}&darkMode=1`);
        if (!this.conf.darkMode && isIframeSrcDarkMode)
          this.iframeLoad(this.$iframe.src.replace("&darkMode=1", ""));
      }
      this.ctx.trigger("sidebar-show");
    });
  }
  hide() {
    var _a;
    this.$el.style.transform = "";
    (_a = this.layer) == null ? void 0 : _a.hide();
    this.ctx.trigger("sidebar-hide");
  }
  iframeLoad(src) {
    if (!this.$iframe)
      return;
    this.$iframe.src = src;
    showLoading(this.$iframeWrap);
    this.$iframe.onload = () => {
      hideLoading(this.$iframeWrap);
    };
  }
}
const PvCountWidget = (ctx) => {
  initCountWidget({ ctx, pvAdd: true });
};
function initCountWidget(p) {
  return __async(this, null, function* () {
    const countEl = p.ctx.conf.countEl;
    if (countEl && document.querySelector(countEl)) {
      handleStatCount(p, { api: "page_comment", countEl });
    }
    const curtPagePvNum = p.pvAdd ? yield p.ctx.getApi().pv() : void 0;
    const pvEl = p.ctx.conf.pvEl;
    if (pvEl && document.querySelector(pvEl)) {
      handleStatCount(p, {
        api: "page_pv",
        countEl: pvEl,
        curtPageCount: curtPagePvNum
      });
    }
  });
}
function handleStatCount(p, args) {
  return __async(this, null, function* () {
    let pageCounts = {};
    const curtPageKey = p.ctx.conf.pageKey;
    if (args.curtPageCount)
      pageCounts[curtPageKey] = args.curtPageCount;
    let queryPageKeys = Array.from(document.querySelectorAll(args.countEl)).map((e) => e.getAttribute("data-page-key") || curtPageKey).filter((pageKey) => pageCounts[pageKey] === void 0);
    queryPageKeys = [...new Set(queryPageKeys)];
    if (queryPageKeys.length > 0) {
      const counts = yield p.ctx.getApi().stat(args.api, queryPageKeys);
      pageCounts = __spreadValues(__spreadValues({}, pageCounts), counts);
    }
    document.querySelectorAll(args.countEl).forEach((el) => {
      const pageKey = el.getAttribute("data-page-key") || curtPageKey;
      el.innerHTML = `${Number(pageCounts[pageKey] || 0)}`;
    });
  });
}
const _Artalk = class {
  constructor(customConf) {
    __publicField(this, "conf");
    __publicField(this, "ctx");
    __publicField(this, "$root");
    __publicField(this, "checkerLauncher");
    __publicField(this, "editor");
    __publicField(this, "list");
    __publicField(this, "sidebarLayer");
    this.conf = _Artalk.HandelBaseConf(customConf);
    if (this.conf.el instanceof HTMLElement)
      this.$root = this.conf.el;
    this.ctx = new Context(this.conf, this.$root);
    if (this.conf.useBackendConf)
      return this.loadConfRemoteAndInitComponents();
    this.initComponents();
  }
  initComponents() {
    this.initLocale();
    this.initLayer();
    this.initDarkMode();
    initMarked(this.ctx);
    this.checkerLauncher = new CheckerLauncher(this.ctx);
    this.ctx.setCheckerLauncher(this.checkerLauncher);
    this.editor = new Editor(this.ctx);
    this.ctx.setEditor(this.editor);
    this.$root.appendChild(this.editor.$el);
    this.list = new List(this.ctx);
    this.ctx.setList(this.list);
    this.$root.appendChild(this.list.$el);
    this.sidebarLayer = new SidebarLayer(this.ctx);
    this.ctx.setSidebarLayer(this.sidebarLayer);
    this.$root.appendChild(this.sidebarLayer.$el);
    this.list.fetchComments(0);
    this.initEventBind();
    _Artalk.Plugins.forEach((plugin) => {
      if (typeof plugin === "function")
        plugin(this.ctx);
    });
  }
  static HandelBaseConf(customConf) {
    const conf = mergeDeep(_Artalk.defaults, customConf);
    if (typeof conf.el === "string" && !!conf.el) {
      try {
        const findEl = document.querySelector(conf.el);
        if (!findEl)
          throw Error(`Target element "${conf.el}" was not found.`);
        conf.el = findEl;
      } catch (e) {
        console.error(e);
        throw new Error("Please check your Artalk `el` config.");
      }
    }
    conf.server = conf.server.replace(/\/$/, "").replace(/\/api\/?$/, "");
    if (!conf.pageKey) {
      conf.pageKey = `${window.location.pathname}`;
    }
    if (!conf.pageTitle) {
      conf.pageTitle = `${document.title}`;
    }
    return conf;
  }
  loadConfRemoteAndInitComponents() {
    return __async(this, null, function* () {
      yield this.loadConfRemote();
      this.initComponents();
      return this;
    });
  }
  loadConfRemote() {
    return __async(this, null, function* () {
      showLoading(this.$root);
      let backendConf = {};
      try {
        backendConf = yield this.ctx.getApi().conf();
      } catch (err) {
        console.error("Load config from remote err", err);
      }
      this.ctx.conf = mergeDeep(this.ctx.conf, backendConf);
      hideLoading(this.$root);
    });
  }
  initEventBind() {
    window.addEventListener("hashchange", () => {
      this.list.goToCommentDelay = false;
      this.list.checkGoToCommentByUrlHash();
    });
    this.ctx.on("user-changed", () => {
      this.ctx.checkAdminShowEl();
      this.ctx.listRefreshUI();
    });
  }
  initLocale() {
    if (typeof this.conf.locale === "string") {
      if (this.conf.locale === "auto") {
        this.conf.locale = navigator.languages ? navigator.languages[0] : navigator.language;
      }
      this.conf.locale = this.conf.locale.replace(/^([a-zA-Z]+)(-[a-zA-Z]+)?$/, (_, p1, p2) => p1.toLowerCase() + (p2 || "").toUpperCase());
      if (!internal[this.conf.locale]) {
        console.log(`Locale "${this.conf.locale}" not found.`);
        this.conf.locale = "en";
      }
    }
  }
  initLayer() {
    Layer.BodyOrgOverflow = document.body.style.overflow;
    Layer.BodyOrgPaddingRight = document.body.style.paddingRight;
  }
  initDarkMode() {
    if (this.conf.darkMode === "auto") {
      const darkModeMedia = window.matchMedia("(prefers-color-scheme: dark)");
      darkModeMedia.addEventListener("change", (e) => {
        this.setDarkMode(e.matches);
      });
      this.setDarkMode(darkModeMedia.matches);
    } else {
      this.setDarkMode(this.conf.darkMode || false);
    }
  }
  setDarkMode(darkMode) {
    const darkModeClassName = "atk-dark-mode";
    this.ctx.conf.darkMode = darkMode;
    this.ctx.trigger("conf-updated");
    if (this.conf.darkMode) {
      this.$root.classList.add(darkModeClassName);
    } else {
      this.$root.classList.remove(darkModeClassName);
    }
    const { $wrap: $layerWrap } = GetLayerWrap(this.ctx);
    if ($layerWrap) {
      if (this.conf.darkMode) {
        $layerWrap.classList.add(darkModeClassName);
      } else {
        $layerWrap.classList.remove(darkModeClassName);
      }
    }
  }
  on(name, handler) {
    this.ctx.on(name, handler, "external");
  }
  off(name, handler) {
    this.ctx.off(name, handler, "external");
  }
  trigger(name, payload) {
    this.ctx.trigger(name, payload, "external");
  }
  reload() {
    this.ctx.listReload();
  }
  static Use(plugin) {
    this.Plugins.push(plugin);
  }
  static LoadCountWidget(customConf) {
    const conf = this.HandelBaseConf(customConf);
    const ctx = new Context(conf);
    initCountWidget({ ctx, pvAdd: false });
  }
};
let Artalk = _Artalk;
__publicField(Artalk, "defaults", defaults);
__publicField(Artalk, "Plugins", [
  PvCountWidget
]);
export { Artalk as default };

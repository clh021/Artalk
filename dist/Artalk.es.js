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
class User {
  constructor(conf) {
    __publicField(this, "data");
    const localUser = JSON.parse(window.localStorage.getItem("ArtalkUser") || "{}");
    this.data = {
      nick: localUser.nick || "",
      email: localUser.email || "",
      link: localUser.link || "",
      token: localUser.token || "",
      isAdmin: localUser.isAdmin || false
    };
  }
  save() {
    window.localStorage.setItem("ArtalkUser", JSON.stringify(this.data));
  }
  checkHasBasicUserInfo() {
    return !!this.data.nick && !!this.data.email;
  }
}
class Context {
  constructor(rootEl, conf) {
    __publicField(this, "cid");
    __publicField(this, "$root");
    __publicField(this, "conf");
    __publicField(this, "user");
    __publicField(this, "eventList", []);
    this.cid = +new Date();
    this.$root = rootEl;
    this.conf = conf;
    this.user = new User(this.conf);
    this.$root.setAttribute("atk-run-id", this.cid.toString());
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
}
const defaults$3 = {
  el: "",
  pageKey: "",
  server: "",
  site: "",
  placeholder: "\u952E\u5165\u5185\u5BB9...",
  noComment: "\u300C\u6B64\u65F6\u65E0\u58F0\u80DC\u6709\u58F0\u300D",
  sendBtn: "\u53D1\u9001\u8BC4\u8BBA",
  darkMode: false,
  editorTravel: true,
  emoticons: "https://cdn.jsdelivr.net/gh/ArtalkJS/Emoticons/grps/default.json",
  vote: true,
  voteDown: false,
  uaBadge: true,
  pvEl: "#ArtalkPV",
  flatMode: "auto",
  maxNesting: 3,
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
  versionCheck: true
};
class Component {
  constructor(ctx) {
    __publicField(this, "$el");
    __publicField(this, "ctx");
    __publicField(this, "conf");
    this.ctx = ctx;
    this.conf = ctx.conf;
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
let defaults$2 = getDefaults();
function changeDefaults(newDefaults) {
  defaults$2 = newDefaults;
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
  } else {
    return {
      type: "image",
      raw,
      href,
      title,
      text: escape(text)
    };
  }
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
    this.options = options || defaults$2;
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
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])`);
          while (src) {
            rawLine = src.split("\n", 1)[0];
            line = rawLine;
            if (this.options.pedantic) {
              line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
            }
            if (nextBulletRegex.test(line)) {
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
          this.lexer.inlineTokens(item.header[j].text, item.header[j].tokens);
        }
        l = item.rows.length;
        for (j = 0; j < l; j++) {
          row = item.rows[j];
          for (k = 0; k < row.length; k++) {
            row[k].tokens = [];
            this.lexer.inlineTokens(row[k].text, row[k].tokens);
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
    this.tokens.links = Object.create(null);
    this.options = options || defaults$2;
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
    this.options = options || defaults$2;
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
    this.options = options || defaults$2;
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
marked$1.defaults = defaults$2;
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
var defaults$1 = {
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
var defaults_1 = defaults$1;
var assign = assignment_1;
var parser = parser_1;
var sanitizer = sanitizer_1;
var defaults = defaults_1;
function insane(html, options, strict) {
  var buffer = [];
  var configuration = strict === true ? options : assign({}, defaults, options);
  var handler = sanitizer(buffer, configuration);
  parser(html, handler);
  return buffer.join("");
}
insane.defaults = defaults;
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
function timeAgo(date) {
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
          return `${seconds} \u79D2\u524D`;
        }
        return `${minutes} \u5206\u949F\u524D`;
      }
      return `${hours} \u5C0F\u65F6\u524D`;
    }
    if (days < 0)
      return "\u521A\u521A";
    if (days < 8) {
      return `${days} \u5929\u524D`;
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
  var _a, _b;
  return `${(((_a = ctx.conf.gravatar) == null ? void 0 : _a.mirror) || "").replace(/\/$/, "")}/${emailMD5}?d=${encodeURIComponent(((_b = ctx.conf.gravatar) == null ? void 0 : _b.default) || "")}&s=80`;
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
let markedInstance;
function marked(ctx, src) {
  if (!markedInstance) {
    const renderer = new marked$1.Renderer();
    const linkRenderer = renderer.link;
    renderer.link = (href, title, text) => {
      const localLink = href == null ? void 0 : href.startsWith(`${window.location.protocol}//${window.location.hostname}`);
      const html = linkRenderer.call(renderer, href, title, text);
      return html.replace(/^<a /, `<a target="_blank" ${!localLink ? `rel="noreferrer noopener nofollow"` : ""} `);
    };
    const nMarked = marked$1;
    marked$1.setOptions({
      renderer,
      highlight: (code) => hanabi(code),
      pedantic: false,
      gfm: true,
      breaks: true,
      smartLists: true,
      smartypants: true,
      xhtml: false,
      sanitize: true,
      sanitizer: (html) => insane_1(html, __spreadProps(__spreadValues({}, insane_1.defaults), {
        allowedAttributes: __spreadProps(__spreadValues({}, insane_1.defaults.allowedAttributes), {
          img: ["src", "atk-emoticon"]
        })
      })),
      silent: true
    });
    markedInstance = nMarked;
  }
  return markedInstance.parse(src);
}
function getCorrectUserAgent() {
  return __async(this, null, function* () {
    const uaRaw = navigator.userAgent;
    const uaData = navigator.userAgentData;
    if (!uaData || !uaData.getHighEntropyValues) {
      return uaRaw;
    }
    let uaGot = null;
    try {
      uaGot = yield uaData.getHighEntropyValues(["platformVersion"]);
    } catch (err) {
      console.error(err);
      return uaRaw;
    }
    if (uaData.platform !== "Windows") {
      return uaRaw;
    }
    const majorPlatformVersion = Number(uaGot.platformVersion.split(".")[0]);
    if (majorPlatformVersion >= 13) {
      return uaRaw.replace(/Windows\W+NT\W+10.0/, "Windows NT 11.0");
    }
    return uaRaw;
  });
}
function showLoading(parentElem) {
  if (parentElem instanceof Context)
    parentElem = parentElem.$root;
  let $loading = parentElem.querySelector(".atk-loading");
  if (!$loading) {
    $loading = createElement(`<div class="atk-loading atk-fade-in" style="display: none;">
      <div class="atk-loading-spinner">
        <svg viewBox="25 25 50 50"><circle cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle></svg>
      </div>
    </div>`);
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
  if (parentElem instanceof Context)
    parentElem = parentElem.$root;
  const $loading = parentElem.querySelector(".atk-loading");
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
  if (parentElem instanceof Context)
    parentElem = parentElem.$root;
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
    __publicField(this, "bodyStyleOrgOverflow", "");
    __publicField(this, "bodyStyleOrgPaddingRight", "");
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
    this.bodyStyleOrgOverflow = document.body.style.overflow;
    this.bodyStyleOrgPaddingRight = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    const bpr = parseInt(window.getComputedStyle(document.body, null).getPropertyValue("padding-right"), 10);
    document.body.style.paddingRight = `${getScrollBarWidth() + bpr || 0}px`;
  }
  hide() {
    if (this.afterHide)
      this.afterHide();
    this.$wrap.classList.add("atk-fade-out");
    this.$el.style.display = "none";
    this.newActionTimer(() => {
      this.$wrap.style.display = "none";
      document.body.style.overflow = this.bodyStyleOrgOverflow;
      document.body.style.paddingRight = this.bodyStyleOrgPaddingRight;
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
    document.body.style.overflow = "";
    this.$el.remove();
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
class Dialog {
  constructor(contentEl) {
    __publicField(this, "$el");
    __publicField(this, "$content");
    __publicField(this, "$actions");
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
    const btn = createElement('<button data-action="confirm">\u786E\u5B9A</button>');
    btn.onclick = this.onBtnClick(handler);
    this.$actions.appendChild(btn);
    return this;
  }
  setNo(handler) {
    const btn = createElement('<button data-action="cancel">\u53D6\u6D88</button>');
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
function Fetch(ctx, input, init, timeout) {
  return __async(this, null, function* () {
    if (ctx.user.data.token) {
      const requestHeaders = new Headers();
      requestHeaders.set("Authorization", `Bearer ${ctx.user.data.token}`);
      init.headers = requestHeaders;
    }
    try {
      let resp;
      if (typeof timeout !== "number" && ctx.conf.reqTimeout === 0 || timeout === 0) {
        resp = yield fetch(input, init);
      } else {
        resp = yield timeoutPromise(timeout || ctx.conf.reqTimeout || 15e3, fetch(input, init));
      }
      const noAccessCodes = [401, 400];
      if (!resp.ok && !noAccessCodes.includes(resp.status))
        throw new Error(`\u8BF7\u6C42\u54CD\u5E94 ${resp.status}`);
      let json = yield resp.json();
      const recall = (resolve, reject) => {
        Fetch(ctx, input, init).then((d) => {
          resolve(d);
        }).catch((err) => {
          reject(err);
        });
      };
      if (json.data && json.data.need_captcha) {
        json = yield new Promise((resolve, reject) => {
          ctx.trigger("checker-captcha", {
            imgData: json.data.img_data,
            onSuccess: () => {
              recall(resolve, reject);
            },
            onCancel: () => {
              reject(json);
            }
          });
        });
      } else if (json.data && json.data.need_login || noAccessCodes.includes(resp.status)) {
        json = yield new Promise((resolve, reject) => {
          ctx.trigger("checker-admin", {
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
    } catch (err) {
      console.error(err);
      if (err instanceof TypeError)
        throw new Error(`\u7F51\u7EDC\u9519\u8BEF`);
      throw err;
    }
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
function GET(ctx, url, data) {
  return __async(this, null, function* () {
    const json = yield Fetch(ctx, url + (data ? `?${new URLSearchParams(data)}` : ""), {
      method: "GET"
    });
    return json.data || {};
  });
}
function ToFormData(object) {
  const formData = new FormData();
  Object.keys(object).forEach((key) => formData.append(key, String(object[key])));
  return formData;
}
function timeoutPromise(ms, promise) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error("\u8BF7\u6C42\u8D85\u65F6"));
    }, ms);
    promise.then((res) => {
      clearTimeout(timeoutId);
      resolve(res);
    }, (err) => {
      clearTimeout(timeoutId);
      reject(err);
    });
  });
}
class Api {
  constructor(ctx) {
    __publicField(this, "ctx");
    __publicField(this, "baseURL");
    this.ctx = ctx;
    this.baseURL = ctx.conf.server;
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
    const { signal } = ctrl;
    const params = {
      name,
      email,
      site_name: this.ctx.conf.site || ""
    };
    const req = Fetch(this.ctx, `${this.baseURL}/user-get`, {
      method: "POST",
      body: ToFormData(params),
      signal
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
  pageFetch(id) {
    return __async(this, null, function* () {
      const params = {
        id
      };
      const d = yield POST(this.ctx, `${this.baseURL}/admin/page-fetch`, params);
      return d.page;
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
  captchaGet() {
    return __async(this, null, function* () {
      const data = yield GET(this.ctx, `${this.baseURL}/captcha/refresh`);
      return data.img_data || "";
    });
  }
  captchaCheck(value) {
    return __async(this, null, function* () {
      const data = yield GET(this.ctx, `${this.baseURL}/captcha/check`, { value });
      return data.img_data || "";
    });
  }
}
const CaptchaChecker = {
  request(that, inputVal) {
    return new Api(that.ctx).captchaCheck(inputVal);
  },
  body(that) {
    const elem = createElement(`<span><img class="atk-captcha-img" src="${that.submitCaptchaImgData || ""}" alt="\u9A8C\u8BC1\u7801">\u6572\u5165\u9A8C\u8BC1\u7801\u7EE7\u7EED\uFF1A</span>`);
    elem.querySelector(".atk-captcha-img").onclick = () => {
      const imgEl = elem.querySelector(".atk-captcha-img");
      new Api(that.ctx).captchaGet().then((imgData) => {
        imgEl.setAttribute("src", imgData);
      }).catch((err) => {
        console.error("\u9A8C\u8BC1\u7801\u83B7\u53D6\u5931\u8D25 ", err);
      });
    };
    return elem;
  },
  onSuccess(that, data, inputVal, formEl) {
    that.submitCaptchaVal = inputVal;
  },
  onError(that, err, inputVal, formEl) {
    formEl.querySelector(".atk-captcha-img").click();
  }
};
const AdminChecker = {
  inputType: "password",
  request(that, inputVal) {
    const data = {
      name: that.ctx.user.data.nick,
      email: that.ctx.user.data.email,
      password: inputVal
    };
    return new Api(that.ctx).login(data.name, data.email, data.password);
  },
  body() {
    return createElement("<span>\u6572\u5165\u5BC6\u7801\u6765\u9A8C\u8BC1\u7BA1\u7406\u5458\u8EAB\u4EFD\uFF1A</span>");
  },
  onSuccess(that, userToken, inputVal, formEl) {
    that.ctx.user.data.isAdmin = true;
    that.ctx.user.data.token = userToken;
    that.ctx.user.save();
    that.ctx.trigger("user-changed", that.ctx.user.data);
    that.ctx.trigger("list-reload");
  },
  onError(that, err, inputVal, formEl) {
  }
};
class CheckerLauncher {
  constructor(ctx) {
    __publicField(this, "ctx");
    __publicField(this, "launched", []);
    __publicField(this, "submitCaptchaVal");
    __publicField(this, "submitCaptchaImgData");
    this.ctx = ctx;
    this.initEventBind();
  }
  initEventBind() {
    this.ctx.on("checker-captcha", (conf) => {
      if (conf.imgData) {
        this.submitCaptchaImgData = conf.imgData;
      }
      this.fire(CaptchaChecker, conf);
    });
    this.ctx.on("checker-admin", (conf) => {
      this.fire(AdminChecker, conf);
    });
  }
  fire(checker, payload) {
    if (this.launched.includes(checker))
      return;
    this.launched.push(checker);
    const layer = new Layer(this.ctx, `checker-${new Date().getTime()}`);
    layer.setMaskClickHide(false);
    layer.show();
    const formEl = createElement();
    formEl.appendChild(checker.body(this));
    const input = createElement(`<input id="check" type="${checker.inputType || "text"}" autocomplete="off" required placeholder="">`);
    formEl.appendChild(input);
    setTimeout(() => input.focus(), 80);
    input.onkeyup = (evt) => {
      if (evt.key === "Enter" || evt.keyCode === 13) {
        evt.preventDefault();
        layer.getEl().querySelector('button[data-action="confirm"]').click();
      }
    };
    let btnTextOrg;
    const dialog = new Dialog(formEl);
    dialog.setYes((btnEl) => {
      const inputVal = input.value.trim();
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
      btnEl.innerText = "\u52A0\u8F7D\u4E2D...";
      checker.request(this, inputVal).then((data) => {
        this.done(checker, layer);
        if (checker.onSuccess)
          checker.onSuccess(this, data, inputVal, formEl);
        if (payload.onSuccess)
          payload.onSuccess(inputVal, dialog.$el);
      }).catch((err) => {
        btnTextSet(String(err.msg || String(err)));
        if (checker.onError)
          checker.onError(this, err, inputVal, formEl);
        const tf = setTimeout(() => btnTextRestore(), 3e3);
        input.onfocus = () => {
          btnTextRestore();
          clearTimeout(tf);
        };
      });
      return false;
    });
    dialog.setNo(() => {
      this.done(checker, layer);
      if (payload.onCancel)
        payload.onCancel();
      return false;
    });
    layer.getEl().append(dialog.$el);
    if (payload.onMount)
      payload.onMount(dialog.$el);
  }
  done(checker, layer) {
    layer.disposeNow();
    this.launched = this.launched.filter((c) => c !== checker);
  }
}
var editor = "";
var EditorHTML = '<div class="atk-main-editor">\n  <div class="atk-header">\n    <input name="nick" placeholder="\u6635\u79F0" class="atk-nick" type="text" required="required">\n    <input name="email" placeholder="\u90AE\u7BB1" class="atk-email" type="email" required="required">\n    <input name="link" placeholder="\u7F51\u5740 (https://)" class="atk-link" type="url">\n  </div>\n  <div class="atk-textarea-wrap">\n    <textarea class="atk-textarea" placeholder=""></textarea>\n  </div>\n  <div class="atk-plug-wrap" style="display: none;"></div>\n  <div class="atk-bottom">\n    <div class="atk-item atk-plug-btn-wrap"></div>\n    <div class="atk-item">\n      <button type="button" class="atk-send-btn"></button>\n    </div>\n  </div>\n  <div class="atk-notify-wrap"></div>\n</div>\n';
var emoticonsPlug = "";
class EditorPlug {
  constructor(editor2) {
    __publicField(this, "editor");
    __publicField(this, "ctx");
    this.editor = editor2;
    this.ctx = editor2.ctx;
  }
}
__publicField(EditorPlug, "Name");
__publicField(EditorPlug, "BtnHTML");
class EmoticonsPlug extends EditorPlug {
  constructor(editor2) {
    super(editor2);
    __publicField(this, "$el");
    __publicField(this, "emoticons", []);
    __publicField(this, "$grpWrap");
    __publicField(this, "$grpSwitcher");
    this.editor = editor2;
    this.$el = createElement(`<div class="atk-editor-plug-emoticons"></div>`);
    this.init();
  }
  init() {
    return __async(this, null, function* () {
      showLoading(this.$el);
      this.emoticons = yield this.handleData(this.ctx.conf.emoticons);
      hideLoading(this.$el);
      this.initEmoticonsList();
    });
  }
  handleData(data) {
    return __async(this, null, function* () {
      if (!Array.isArray(data) && ["object", "string"].includes(typeof data)) {
        data = [data];
      }
      if (!Array.isArray(data)) {
        setError(this.$el, "\u8868\u60C5\u5305\u6570\u636E\u5FC5\u987B\u4E3A Array/Object/String \u7C7B\u578B");
        hideLoading(this.$el);
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
      console.log(data);
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
        hideLoading(this.$el);
        setError(this.$el, `\u8868\u60C5\u52A0\u8F7D\u5931\u8D25 ${String(err)}`);
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
    this.$el.append(this.$grpWrap);
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
    this.$grpSwitcher = createElement(`<div class="atk-grp-switcher"></div>`);
    this.$el.append(this.$grpSwitcher);
    this.emoticons.forEach((grp, index) => {
      const $item = createElement("<span />");
      $item.innerText = grp.name;
      $item.setAttribute("data-index", String(index));
      $item.onclick = () => this.openGrp(index);
      this.$grpSwitcher.append($item);
    });
    if (this.emoticons.length > 0)
      this.openGrp(0);
  }
  openGrp(index) {
    var _a;
    Array.from(this.$grpWrap.children).forEach((item) => {
      const el = item;
      if (el.getAttribute("data-index") !== String(index)) {
        el.style.display = "none";
      } else {
        el.style.display = "";
      }
    });
    this.$grpSwitcher.querySelectorAll("span.active").forEach((item) => item.classList.remove("active"));
    (_a = this.$grpSwitcher.querySelector(`span[data-index="${index}"]`)) == null ? void 0 : _a.classList.add("active");
    this.changeListHeight();
  }
  getEl() {
    return this.$el;
  }
  changeListHeight() {
  }
  onShow() {
    setTimeout(() => {
      this.changeListHeight();
    }, 30);
  }
  onHide() {
    this.$el.parentElement.style.height = "";
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
__publicField(EmoticonsPlug, "BtnHTML", "\u8868\u60C5");
var previewPlug = "";
class PreviewPlug extends EditorPlug {
  constructor(editor2) {
    super(editor2);
    __publicField(this, "$el");
    __publicField(this, "binded", false);
    this.initEl();
  }
  initEl() {
    this.$el = createElement('<div class="atk-editor-plug-preview"></div>');
    this.binded = false;
  }
  getEl() {
    return this.$el;
  }
  onShow() {
    this.updateContent();
    if (!this.binded) {
      const event = () => {
        this.updateContent();
      };
      this.editor.$textarea.addEventListener("input", event);
      this.editor.$textarea.addEventListener("change", event);
      this.binded = true;
    }
  }
  onHide() {
  }
  updateContent() {
    if (this.$el.style.display !== "none") {
      this.$el.innerHTML = this.editor.getContentMarked();
    }
  }
}
__publicField(PreviewPlug, "Name", "preview");
__publicField(PreviewPlug, "BtnHTML", '\u9884\u89C8 <i title="Markdown is supported"><svg class="markdown" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"></path></svg></i>');
class Editor extends Component {
  constructor(ctx) {
    super(ctx);
    __publicField(this, "LOADABLE_PLUG_LIST", [EmoticonsPlug, PreviewPlug]);
    __publicField(this, "plugList", {});
    __publicField(this, "$header");
    __publicField(this, "$textareaWrap");
    __publicField(this, "$textarea");
    __publicField(this, "$plugWrap");
    __publicField(this, "$bottom");
    __publicField(this, "$plugBtnWrap");
    __publicField(this, "$imgUploadBtn");
    __publicField(this, "$submitBtn");
    __publicField(this, "$notifyWrap");
    __publicField(this, "replyComment", null);
    __publicField(this, "$sendReply", null);
    __publicField(this, "isTraveling", false);
    __publicField(this, "queryUserInfo", {
      timeout: null,
      abortFunc: null
    });
    __publicField(this, "openedPlugName", null);
    __publicField(this, "allowImgExts", ["png", "jpg", "jpeg", "gif", "bmp", "svg", "webp"]);
    this.$el = createElement(EditorHTML);
    this.$header = this.$el.querySelector(".atk-header");
    this.$textareaWrap = this.$el.querySelector(".atk-textarea-wrap");
    this.$textarea = this.$el.querySelector(".atk-textarea");
    this.$plugWrap = this.$el.querySelector(".atk-plug-wrap");
    this.$bottom = this.$el.querySelector(".atk-bottom");
    this.$plugBtnWrap = this.$el.querySelector(".atk-plug-btn-wrap");
    this.$submitBtn = this.$el.querySelector(".atk-send-btn");
    this.$notifyWrap = this.$el.querySelector(".atk-notify-wrap");
    this.initLocalStorage();
    this.initHeader();
    this.initTextarea();
    this.initEditorPlug();
    this.initBottomPart();
    this.ctx.on("editor-open", () => this.open());
    this.ctx.on("editor-close", () => this.close());
    this.ctx.on("editor-reply", (p) => this.setReply(p.data, p.$el, p.scroll));
    this.ctx.on("editor-reply-cancel", () => this.cancelReply());
    this.ctx.on("editor-show-loading", () => showLoading(this.$el));
    this.ctx.on("editor-hide-loading", () => hideLoading(this.$el));
    this.ctx.on("editor-notify", (f) => this.showNotify(f.msg, f.type));
    this.ctx.on("editor-travel", ($el) => this.travel($el));
    this.ctx.on("editor-travel-back", () => this.travelBack());
    this.ctx.on("conf-updated", () => this.refreshUploadBtn());
  }
  get user() {
    return this.ctx.user;
  }
  initLocalStorage() {
    const localContent = window.localStorage.getItem("ArtalkContent") || "";
    if (localContent.trim() !== "") {
      this.showNotify("\u5DF2\u81EA\u52A8\u6062\u590D", "i");
      this.setContent(localContent);
    }
    this.$textarea.addEventListener("input", () => {
      this.saveContent();
    });
  }
  initHeader() {
    Object.keys(this.user.data).forEach((field) => {
      const inputEl = this.getInputEl(field);
      if (inputEl && inputEl instanceof HTMLInputElement) {
        inputEl.value = this.user.data[field] || "";
        inputEl.addEventListener("input", () => this.onHeaderInputChanged(field, inputEl));
      }
    });
  }
  getInputEl(field) {
    const inputEl = this.$header.querySelector(`[name="${field}"]`);
    return inputEl;
  }
  onHeaderInputChanged(field, inputEl) {
    this.user.data[field] = inputEl.value.trim();
    if (field === "nick" || field === "email") {
      this.user.data.token = "";
      this.user.data.isAdmin = false;
      if (this.queryUserInfo.timeout !== null)
        window.clearTimeout(this.queryUserInfo.timeout);
      if (this.queryUserInfo.abortFunc !== null)
        this.queryUserInfo.abortFunc();
      this.queryUserInfo.timeout = window.setTimeout(() => {
        this.queryUserInfo.timeout = null;
        const { req, abort } = new Api(this.ctx).userGet(this.user.data.nick, this.user.data.email);
        this.queryUserInfo.abortFunc = abort;
        req.then((data) => {
          if (!data.is_login) {
            this.user.data.token = "";
            this.user.data.isAdmin = false;
          }
          this.ctx.trigger("unread-update", { notifies: data.unread });
          if (this.user.checkHasBasicUserInfo() && !data.is_login && data.user && data.user.is_admin) {
            this.showLoginDialog();
          }
          if (data.user && data.user.link) {
            this.user.data.link = data.user.link;
            this.getInputEl("link").value = data.user.link;
          }
        }).finally(() => {
          this.queryUserInfo.abortFunc = null;
        });
      }, 400);
    }
    this.saveUser();
  }
  showLoginDialog() {
    this.ctx.trigger("checker-admin", {
      onSuccess: () => {
      }
    });
  }
  saveUser() {
    this.user.save();
    this.ctx.trigger("user-changed", this.ctx.user.data);
  }
  saveContent() {
    window.localStorage.setItem("ArtalkContent", this.getContentOriginal().trim());
  }
  initTextarea() {
    this.$textarea.placeholder = this.ctx.conf.placeholder || "";
    this.$textarea.addEventListener("keydown", (e) => {
      const keyCode = e.keyCode || e.which;
      if (keyCode === 9) {
        e.preventDefault();
        this.insertContent("	");
      }
    });
    this.$textarea.addEventListener("input", (evt) => {
      this.adjustTextareaHeight();
    });
  }
  adjustTextareaHeight() {
    const diff = this.$textarea.offsetHeight - this.$textarea.clientHeight;
    this.$textarea.style.height = "0px";
    this.$textarea.style.height = `${this.$textarea.scrollHeight + diff}px`;
  }
  initEditorPlug() {
    this.plugList = {};
    this.$plugWrap.innerHTML = "";
    this.$plugWrap.style.display = "none";
    this.openedPlugName = null;
    this.$plugBtnWrap.innerHTML = "";
    this.LOADABLE_PLUG_LIST.forEach((PlugObj) => {
      const btnElem = createElement(`<span class="atk-plug-btn" data-plug-name="${PlugObj.Name}">${PlugObj.BtnHTML}</span>`);
      this.$plugBtnWrap.appendChild(btnElem);
      btnElem.addEventListener("click", () => {
        let plug = this.plugList[PlugObj.Name];
        if (!plug) {
          plug = new PlugObj(this);
          this.plugList[PlugObj.Name] = plug;
        }
        this.$plugBtnWrap.querySelectorAll(".active").forEach((item) => item.classList.remove("active"));
        if (PlugObj.Name === this.openedPlugName) {
          plug.onHide();
          this.$plugWrap.style.display = "none";
          this.openedPlugName = null;
          return;
        }
        if (this.$plugWrap.querySelector(`[data-plug-name="${PlugObj.Name}"]`) === null) {
          const plugEl = plug.getEl();
          plugEl.setAttribute("data-plug-name", PlugObj.Name);
          plugEl.style.display = "none";
          this.$plugWrap.appendChild(plugEl);
        }
        Array.from(this.$plugWrap.children).forEach((plugItemEl) => {
          const plugItemName = plugItemEl.getAttribute("data-plug-name");
          if (plugItemName === PlugObj.Name) {
            plugItemEl.style.display = "";
            this.plugList[plugItemName].onShow();
          } else {
            plugItemEl.style.display = "none";
            this.plugList[plugItemName].onHide();
          }
        });
        this.$plugWrap.style.display = "";
        this.openedPlugName = PlugObj.Name;
        btnElem.classList.add("active");
      });
    });
    this.initImgUploadBtn();
  }
  closePlug() {
    this.$plugWrap.innerHTML = "";
    this.$plugWrap.style.display = "none";
    this.openedPlugName = null;
  }
  initImgUploadBtn() {
    this.$imgUploadBtn = createElement(`<span class="atk-plug-btn">\u56FE\u7247</span>`);
    this.$plugBtnWrap.querySelector('[data-plug-name="preview"]').before(this.$imgUploadBtn);
    this.$imgUploadBtn.onclick = () => {
      const $input = document.createElement("input");
      $input.type = "file";
      $input.accept = this.allowImgExts.map((o) => `.${o}`).join(",");
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
    this.$textarea.addEventListener("dragover", (evt) => {
      evt.stopPropagation();
      evt.preventDefault();
    });
    this.$textarea.addEventListener("drop", (evt) => {
      var _a;
      if ((_a = evt.dataTransfer) == null ? void 0 : _a.files) {
        evt.preventDefault();
        for (let i = 0; i < evt.dataTransfer.files.length; i++) {
          const file = evt.dataTransfer.files[i];
          this.uploadImg(file);
        }
      }
    });
  }
  refreshUploadBtn() {
    if (!this.$imgUploadBtn)
      return;
    if (!this.ctx.conf.imgUpload) {
      this.$imgUploadBtn.setAttribute("atk-only-admin-show", "");
      this.ctx.trigger("check-admin-show-el");
    }
  }
  uploadImg(file) {
    return __async(this, null, function* () {
      const fileExt = /[^.]+$/.exec(file.name);
      if (!fileExt || !this.allowImgExts.includes(fileExt[0]))
        return;
      const uploadPlaceholderTxt = `
![](Uploading ${file.name}...)`;
      this.insertContent(uploadPlaceholderTxt);
      let resp;
      try {
        resp = yield new Api(this.ctx).imgUpload(file);
      } catch (err) {
        console.error(err);
        this.showNotify(`\u56FE\u7247\u4E0A\u4F20\u5931\u8D25\uFF0C${err.msg}`, "e");
      }
      if (!!resp && resp.img_url) {
        let imgURL = resp.img_url;
        if (imgURL.startsWith(".") || imgURL.startsWith("/") && !imgURL.startsWith("//")) {
          imgURL = `${this.ctx.conf.server.replace(/\/api\/?$/, "")}/${imgURL.replace(/^\//, "")}`;
        }
        this.$textarea.value = this.$textarea.value.replace(uploadPlaceholderTxt, `
![](${imgURL})`);
      } else {
        this.$textarea.value = this.$textarea.value.replace(uploadPlaceholderTxt, "");
      }
      this.saveContent();
    });
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
  setContent(val) {
    this.$textarea.value = val;
    this.saveContent();
    if (!!this.plugList && !!this.plugList.preview) {
      this.plugList.preview.updateContent();
    }
    this.adjustTextareaHeight();
  }
  clearEditor() {
    this.setContent("");
    this.cancelReply();
  }
  getContent() {
    let content = this.getContentOriginal();
    if (this.plugList && this.plugList.emoticons) {
      const emoticonsPlug2 = this.plugList.emoticons;
      content = emoticonsPlug2.transEmoticonImageText(content);
    }
    return content;
  }
  getContentOriginal() {
    return this.$textarea.value || "";
  }
  getContentMarked() {
    return marked(this.ctx, this.getContent());
  }
  initBottomPart() {
    this.initReply();
    this.initSubmit();
  }
  initReply() {
    this.replyComment = null;
    this.$sendReply = null;
  }
  setReply(commentData, $comment, scroll = true) {
    if (this.replyComment !== null) {
      this.cancelReply();
    }
    if (this.$sendReply === null) {
      this.$sendReply = createElement('<div class="atk-send-reply">\u56DE\u590D <span class="atk-text"></span><span class="atk-cancel" title="\u53D6\u6D88 AT">\xD7</span></div>');
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
  initSubmit() {
    this.$submitBtn.innerText = this.ctx.conf.sendBtn || "Send";
    this.$submitBtn.addEventListener("click", (evt) => {
      evt.currentTarget;
      this.submit();
    });
  }
  submit() {
    return __async(this, null, function* () {
      if (this.getContent().trim() === "") {
        this.$textarea.focus();
        return;
      }
      this.ctx.trigger("editor-submit");
      showLoading(this.$el);
      try {
        const nComment = yield new Api(this.ctx).add({
          content: this.getContent(),
          nick: this.user.data.nick,
          email: this.user.data.email,
          link: this.user.data.link,
          rid: this.replyComment === null ? 0 : this.replyComment.id,
          page_key: this.replyComment === null ? this.ctx.conf.pageKey : this.replyComment.page_key,
          page_title: this.replyComment === null ? this.ctx.conf.pageTitle : void 0,
          site_name: this.replyComment === null ? this.ctx.conf.site : this.replyComment.site_name
        });
        if (this.replyComment !== null && this.replyComment.page_key !== this.ctx.conf.pageKey) {
          window.open(`${this.replyComment.page_key}#atk-comment-${nComment.id}`);
        }
        this.ctx.trigger("list-insert", nComment);
        this.clearEditor();
        this.ctx.trigger("editor-submitted");
      } catch (err) {
        console.error(err);
        this.showNotify(`\u8BC4\u8BBA\u5931\u8D25\uFF0C${err.msg || String(err)}`, "e");
        return;
      } finally {
        hideLoading(this.$el);
      }
    });
  }
  showNotify(msg, type) {
    showNotify(this.$notifyWrap, msg, type);
  }
  close() {
    if (!this.$textareaWrap.querySelector(".atk-comment-closed"))
      this.$textareaWrap.prepend(createElement('<div class="atk-comment-closed">\u4EC5\u7BA1\u7406\u5458\u53EF\u8BC4\u8BBA</div>'));
    if (!this.user.data.isAdmin) {
      this.$textarea.style.display = "none";
      this.closePlug();
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
}
var list = "";
var ListHTML = '<div class="atk-list">\n  <div class="atk-list-header">\n    <div class="atk-comment-count">\n      <div class="atk-text">\n        <span class="atk-comment-count-num">0</span>\n        \u6761\u8BC4\u8BBA\n      </div>\n    </div>\n    <div class="atk-right-action">\n      <span data-action="admin-close-comment" class="atk-hide" atk-only-admin-show>\u5173\u95ED\u8BC4\u8BBA</span>\n      <span data-action="open-sidebar" class="atk-hide atk-on">\n        <span class="atk-unread-badge" style="display: none;"></span>\n        <div class="atk-text">\u901A\u77E5\u4E2D\u5FC3</div>\n      </span>\n    </div>\n  </div>\n  <div class="atk-list-body"></div>\n  <div class="atk-list-footer">\n    <div class="atk-copyright"></div>\n  </div>\n</div>\n';
var comment = "";
var win = window || {};
var nav = navigator || {};
function Detect(userAgent) {
  var u = userAgent || nav.userAgent;
  var _this = this;
  var match = {
    Trident: u.indexOf("Trident") > -1 || u.indexOf("NET CLR") > -1,
    Presto: u.indexOf("Presto") > -1,
    WebKit: u.indexOf("AppleWebKit") > -1,
    Gecko: u.indexOf("Gecko/") > -1,
    Safari: u.indexOf("Safari") > -1,
    Chrome: u.indexOf("Chrome") > -1 || u.indexOf("CriOS") > -1,
    IE: u.indexOf("MSIE") > -1 || u.indexOf("Trident") > -1,
    Edge: u.indexOf("Edge") > -1,
    Firefox: u.indexOf("Firefox") > -1 || u.indexOf("FxiOS") > -1,
    "Firefox Focus": u.indexOf("Focus") > -1,
    Chromium: u.indexOf("Chromium") > -1,
    Opera: u.indexOf("Opera") > -1 || u.indexOf("OPR") > -1,
    Vivaldi: u.indexOf("Vivaldi") > -1,
    Yandex: u.indexOf("YaBrowser") > -1,
    Kindle: u.indexOf("Kindle") > -1 || u.indexOf("Silk/") > -1,
    360: u.indexOf("360EE") > -1 || u.indexOf("360SE") > -1,
    UC: u.indexOf("UC") > -1 || u.indexOf(" UBrowser") > -1,
    QQBrowser: u.indexOf("QQBrowser") > -1,
    QQ: u.indexOf("QQ/") > -1,
    Baidu: u.indexOf("Baidu") > -1 || u.indexOf("BIDUBrowser") > -1,
    Maxthon: u.indexOf("Maxthon") > -1,
    Sogou: u.indexOf("MetaSr") > -1 || u.indexOf("Sogou") > -1,
    LBBROWSER: u.indexOf("LBBROWSER") > -1,
    "2345Explorer": u.indexOf("2345Explorer") > -1,
    TheWorld: u.indexOf("TheWorld") > -1,
    XiaoMi: u.indexOf("MiuiBrowser") > -1,
    Quark: u.indexOf("Quark") > -1,
    Qiyu: u.indexOf("Qiyu") > -1,
    Wechat: u.indexOf("MicroMessenger") > -1,
    Taobao: u.indexOf("AliApp(TB") > -1,
    Alipay: u.indexOf("AliApp(AP") > -1,
    Weibo: u.indexOf("Weibo") > -1,
    Douban: u.indexOf("com.douban.frodo") > -1,
    Suning: u.indexOf("SNEBUY-APP") > -1,
    iQiYi: u.indexOf("IqiyiApp") > -1,
    Windows: u.indexOf("Windows") > -1,
    Linux: u.indexOf("Linux") > -1 || u.indexOf("X11") > -1,
    "Mac OS": u.indexOf("Macintosh") > -1,
    Android: u.indexOf("Android") > -1 || u.indexOf("Adr") > -1,
    Ubuntu: u.indexOf("Ubuntu") > -1,
    FreeBSD: u.indexOf("FreeBSD") > -1,
    Debian: u.indexOf("Debian") > -1,
    "Windows Phone": u.indexOf("IEMobile") > -1 || u.indexOf("Windows Phone") > -1,
    BlackBerry: u.indexOf("BlackBerry") > -1 || u.indexOf("RIM") > -1,
    MeeGo: u.indexOf("MeeGo") > -1,
    Symbian: u.indexOf("Symbian") > -1,
    iOS: u.indexOf("like Mac OS X") > -1,
    "Chrome OS": u.indexOf("CrOS") > -1,
    WebOS: u.indexOf("hpwOS") > -1,
    Mobile: u.indexOf("Mobi") > -1 || u.indexOf("iPh") > -1 || u.indexOf("480") > -1,
    Tablet: u.indexOf("Tablet") > -1 || u.indexOf("Pad") > -1 || u.indexOf("Nexus 7") > -1
  };
  if (match.Mobile) {
    match.Mobile = !(u.indexOf("iPad") > -1);
  } else if (win.showModalDialog && win.chrome) {
    match["360"] = true;
  }
  var hash = {
    engine: ["WebKit", "Trident", "Gecko", "Presto"],
    browser: ["Safari", "Chrome", "Edge", "IE", "Firefox", "Firefox Focus", "Chromium", "Opera", "Vivaldi", "Yandex", "Kindle", "360", "UC", "QQBrowser", "QQ", "Baidu", "Maxthon", "Sogou", "LBBROWSER", "2345Explorer", "TheWorld", "XiaoMi", "Quark", "Qiyu", "Wechat", "Taobao", "Alipay", "Weibo", "Douban", "Suning", "iQiYi"],
    os: ["Windows", "Linux", "Mac OS", "Android", "Ubuntu", "FreeBSD", "Debian", "iOS", "Windows Phone", "BlackBerry", "MeeGo", "Symbian", "Chrome OS", "WebOS"],
    device: ["Mobile", "Tablet"]
  };
  _this.device = "PC";
  _this.language = function() {
    var g = nav.browserLanguage || nav.language;
    var arr = g.split("-");
    if (arr[1]) {
      arr[1] = arr[1].toUpperCase();
    }
    return arr.join("_");
  }();
  for (var s in hash) {
    for (var i = 0; i < hash[s].length; i++) {
      var value = hash[s][i];
      if (match[value]) {
        _this[s] = value;
      }
    }
  }
  var osVersion = {
    Windows: function() {
      var v = u.replace(/^.*Windows NT ([\d.]+);.*$/, "$1");
      var hash2 = {
        6.4: "10",
        6.3: "8.1",
        6.2: "8",
        6.1: "7",
        "6.0": "Vista",
        5.2: "XP",
        5.1: "XP",
        "5.0": "2000",
        "10.0": "10",
        "11.0": "11"
      };
      return hash2[v] || v;
    },
    Android: function() {
      return u.replace(/^.*Android ([\d.]+);.*$/, "$1");
    },
    iOS: function() {
      return u.replace(/^.*OS ([\d_]+) like.*$/, "$1").replace(/_/g, ".");
    },
    Debian: function() {
      return u.replace(/^.*Debian\/([\d.]+).*$/, "$1");
    },
    "Windows Phone": function() {
      return u.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, "$2");
    },
    "Mac OS": function() {
      return u.replace(/^.*Mac OS X ([\d_]+).*$/, "$1").replace(/_/g, ".");
    },
    WebOS: function() {
      return u.replace(/^.*hpwOS\/([\d.]+);.*$/, "$1");
    }
  };
  _this.osVersion = "";
  if (osVersion[_this.os]) {
    _this.osVersion = osVersion[_this.os]();
    if (_this.osVersion === u) {
      _this.osVersion = "";
    }
  }
  var version = {
    Safari: function() {
      return u.replace(/^.*Version\/([\d.]+).*$/, "$1");
    },
    Chrome: function() {
      return u.replace(/^.*Chrome\/([\d.]+).*$/, "$1").replace(/^.*CriOS\/([\d.]+).*$/, "$1");
    },
    IE: function() {
      return u.replace(/^.*MSIE ([\d.]+).*$/, "$1").replace(/^.*rv:([\d.]+).*$/, "$1");
    },
    Edge: function() {
      return u.replace(/^.*Edge\/([\d.]+).*$/, "$1");
    },
    Firefox: function() {
      return u.replace(/^.*Firefox\/([\d.]+).*$/, "$1").replace(/^.*FxiOS\/([\d.]+).*$/, "$1");
    },
    "Firefox Focus": function() {
      return u.replace(/^.*Focus\/([\d.]+).*$/, "$1");
    },
    Chromium: function() {
      return u.replace(/^.*Chromium\/([\d.]+).*$/, "$1");
    },
    Opera: function() {
      return u.replace(/^.*Opera\/([\d.]+).*$/, "$1").replace(/^.*OPR\/([\d.]+).*$/, "$1");
    },
    Vivaldi: function() {
      return u.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1");
    },
    Yandex: function() {
      return u.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1");
    },
    Kindle: function() {
      return u.replace(/^.*Version\/([\d.]+).*$/, "$1");
    },
    Maxthon: function() {
      return u.replace(/^.*Maxthon\/([\d.]+).*$/, "$1");
    },
    QQBrowser: function() {
      return u.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1");
    },
    QQ: function() {
      return u.replace(/^.*QQ\/([\d.]+).*$/, "$1");
    },
    Baidu: function() {
      return u.replace(/^.*BIDUBrowser[\s/]([\d.]+).*$/, "$1");
    },
    UC: function() {
      return u.replace(/^.*UC?Browser\/([\d.]+).*$/, "$1");
    },
    Sogou: function() {
      return u.replace(/^.*SE ([\d.X]+).*$/, "$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1");
    },
    "2345Explorer": function() {
      return u.replace(/^.*2345Explorer\/([\d.]+).*$/, "$1");
    },
    TheWorld: function() {
      return u.replace(/^.*TheWorld ([\d.]+).*$/, "$1");
    },
    XiaoMi: function() {
      return u.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1");
    },
    Quark: function() {
      return u.replace(/^.*Quark\/([\d.]+).*$/, "$1");
    },
    Qiyu: function() {
      return u.replace(/^.*Qiyu\/([\d.]+).*$/, "$1");
    },
    Wechat: function() {
      return u.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1");
    },
    Taobao: function() {
      return u.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1");
    },
    Alipay: function() {
      return u.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1");
    },
    Weibo: function() {
      return u.replace(/^.*weibo__([\d.]+).*$/, "$1");
    },
    Douban: function() {
      return u.replace(/^.*com.douban.frodo\/([\d.]+).*$/, "$1");
    },
    Suning: function() {
      return u.replace(/^.*SNEBUY-APP([\d.]+).*$/, "$1");
    },
    iQiYi: function() {
      return u.replace(/^.*IqiyiVersion\/([\d.]+).*$/, "$1");
    }
  };
  _this.version = "";
  if (version[_this.browser]) {
    _this.version = version[_this.browser]();
    if (_this.version === u) {
      _this.version = "";
    }
  }
  if (_this.version.indexOf(".")) {
    _this.version = _this.version.substring(0, _this.version.indexOf("."));
  }
  if (_this.browser === "Edge") {
    _this.engine = "EdgeHTML";
  } else if (_this.browser === "Chrome" && parseInt(_this.version) > 27) {
    _this.engine = "Blink";
  } else if (_this.browser === "Opera" && parseInt(_this.version) > 12) {
    _this.engine = "Blink";
  } else if (_this.browser === "Yandex") {
    _this.engine = "Blink";
  } else if (_this.browser === void 0) {
    _this.browser = "Unknow App";
  }
}
function detectFactory(u) {
  return new Detect(u);
}
var CommentHTML = '<div class="atk-comment-wrap">\n  <div class="atk-comment">\n    <div class="atk-avatar"></div>\n    <div class="atk-main">\n      <div class="atk-header">\n        <span class="atk-item atk-nick"></span>\n        <span class="atk-item atk-badge"></span>\n        <span class="atk-item atk-date"></span>\n      </div>\n      <div class="atk-body">\n        <div class="atk-content"></div>\n      </div>\n      <div class="atk-footer">\n        <div class="atk-actions"></div>\n      </div>\n    </div>\n  </div>\n</div>\n';
class ActionBtn {
  constructor(conf) {
    __publicField(this, "conf");
    __publicField(this, "$el");
    __publicField(this, "isLoading", false);
    __publicField(this, "msgRecTimer");
    __publicField(this, "msgRecTimerFunc");
    __publicField(this, "isConfirming", false);
    __publicField(this, "confirmRecTimer");
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
          this.$el.innerText = this.conf.confirmText || "\u786E\u8BA4\u64CD\u4F5C";
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
      this.$el.innerText = loadingText || "\u52A0\u8F7D\u4E2D...";
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
class Comment extends Component {
  constructor(ctx, data) {
    super(ctx);
    __publicField(this, "data");
    __publicField(this, "$main");
    __publicField(this, "$header");
    __publicField(this, "$body");
    __publicField(this, "$content");
    __publicField(this, "$children");
    __publicField(this, "$actions");
    __publicField(this, "voteBtnUp");
    __publicField(this, "voteBtnDown");
    __publicField(this, "parent");
    __publicField(this, "nestedNum");
    __publicField(this, "maxNestingNum");
    __publicField(this, "children", []);
    __publicField(this, "replyTo");
    __publicField(this, "$replyTo");
    __publicField(this, "afterRender");
    __publicField(this, "unread", false);
    __publicField(this, "openable", false);
    __publicField(this, "openURL");
    __publicField(this, "openEvt");
    __publicField(this, "onReplyBtnClick");
    __publicField(this, "onDelete");
    this.maxNestingNum = ctx.conf.maxNesting || 3;
    this.data = __spreadValues({}, data);
    this.data.date = this.data.date.replace(/-/g, "/");
    this.parent = null;
    this.nestedNum = 1;
  }
  render() {
    this.$el = createElement(CommentHTML);
    this.$main = this.$el.querySelector(".atk-main");
    this.$header = this.$el.querySelector(".atk-header");
    this.$body = this.$el.querySelector(".atk-body");
    this.$content = this.$body.querySelector(".atk-content");
    this.$actions = this.$el.querySelector(".atk-actions");
    this.$children = null;
    this.$el.setAttribute("data-comment-id", `${this.data.id}`);
    this.renderCheckUnread();
    this.renderCheckClickable();
    this.renderAvatar();
    this.renderHeader();
    this.renderContent();
    this.renderReplyTo();
    this.renderPending();
    this.renderActionBtn();
    if (this.afterRender)
      this.afterRender();
    return this.$el;
  }
  renderCheckUnread() {
    if (this.unread)
      this.$el.classList.add("atk-unread");
    else
      this.$el.classList.remove("atk-unread");
  }
  renderCheckClickable() {
    if (this.openable) {
      this.$el.classList.add("atk-openable");
    } else {
      this.$el.classList.remove("atk-openable");
    }
    this.$el.addEventListener("click", (evt) => {
      if (this.openable && this.openURL) {
        evt.preventDefault();
        window.open(this.openURL);
      }
      if (this.openEvt)
        this.openEvt();
    });
  }
  renderAvatar() {
    const $avatar = this.$el.querySelector(".atk-avatar");
    const $avatarImg = createElement("<img />");
    $avatarImg.src = this.getGravatarUrl();
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
    const $nick = this.$el.querySelector(".atk-nick");
    if (this.data.link) {
      const $nickA = createElement('<a target="_blank" rel="noreferrer noopener nofollow"></a>');
      $nickA.innerText = this.data.nick;
      $nickA.href = this.data.link;
      $nick.append($nickA);
    } else {
      $nick.innerText = this.data.nick;
    }
    const $badge = this.$el.querySelector(".atk-badge");
    if (this.data.badge_name) {
      $badge.innerText = this.data.badge_name;
      if (this.data.badge_color)
        $badge.style.backgroundColor = this.data.badge_color;
    } else {
      $badge.remove();
    }
    if (this.data.is_pinned) {
      const $pinnedBadge = createElement(`<span class="atk-item atk-pinned-badge">\u7F6E\u9876</span>`);
      $nick.insertAdjacentElement("afterend", $pinnedBadge);
    }
    const $date = this.$el.querySelector(".atk-date");
    $date.innerText = this.getDateFormatted();
    $date.setAttribute("data-atk-comment-date", String(+new Date(this.data.date)));
    if (this.conf.uaBadge) {
      const $uaWrap = createElement(`<span class="atk-ua-wrap"></span>`);
      const $uaBrowser = createElement(`<span class="atk-ua ua-browser"></span>`);
      const $usOS = createElement(`<span class="atk-ua ua-os"></span>`);
      $uaBrowser.innerText = this.getUserUaBrowser();
      $usOS.innerText = this.getUserUaOS();
      $uaWrap.append($uaBrowser);
      $uaWrap.append($usOS);
      this.$header.append($uaWrap);
    }
  }
  renderContent() {
    if (!this.data.is_collapsed) {
      this.$content.innerHTML = this.getContentMarked();
      return;
    }
    this.$content.classList.add("atk-hide", "atk-type-collapsed");
    const collapsedInfoEl = createElement(`
      <div class="atk-collapsed">
        <span class="atk-text">\u8BE5\u8BC4\u8BBA\u5DF2\u88AB\u7CFB\u7EDF\u6216\u7BA1\u7406\u5458\u6298\u53E0</span>
        <span class="atk-show-btn">\u67E5\u770B\u5185\u5BB9</span>
      </div>`);
    this.$body.insertAdjacentElement("beforeend", collapsedInfoEl);
    const contentShowBtn = collapsedInfoEl.querySelector(".atk-show-btn");
    contentShowBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (this.$content.classList.contains("atk-hide")) {
        this.$content.innerHTML = this.getContentMarked();
        this.$content.classList.remove("atk-hide");
        playFadeInAnim(this.$content);
        contentShowBtn.innerHTML = "\u6536\u8D77\u5185\u5BB9";
      } else {
        this.$content.innerHTML = "";
        this.$content.classList.add("atk-hide");
        contentShowBtn.innerHTML = "\u67E5\u770B\u5185\u5BB9";
      }
    });
  }
  renderReplyTo() {
    if (!this.replyTo)
      return;
    this.$replyTo = createElement(`
      <div class="atk-reply-to">
        <div class="atk-meta">\u56DE\u590D <span class="atk-nick"></span>:</div>
        <div class="atk-content"></div>
      </div>`);
    this.$replyTo.querySelector(".atk-nick").innerText = `@${this.replyTo.nick}`;
    let replyContent = marked(this.ctx, this.replyTo.content);
    if (this.replyTo.is_collapsed)
      replyContent = "[\u5DF2\u6298\u53E0]";
    this.$replyTo.querySelector(".atk-content").innerHTML = replyContent;
    this.$body.prepend(this.$replyTo);
  }
  renderPending() {
    if (!this.data.is_pending)
      return;
    const pendingEl = createElement(`<div class="atk-pending">\u5BA1\u6838\u4E2D\uFF0C\u4EC5\u672C\u4EBA\u53EF\u89C1\u3002</div>`);
    this.$body.prepend(pendingEl);
  }
  renderActionBtn() {
    if (this.ctx.conf.vote) {
      this.voteBtnUp = new ActionBtn(() => `\u8D5E\u540C (${this.data.vote_up || 0})`).appendTo(this.$actions);
      this.voteBtnUp.setClick(() => {
        this.vote("up");
      });
      if (this.ctx.conf.voteDown) {
        this.voteBtnDown = new ActionBtn(() => `\u53CD\u5BF9 (${this.data.vote_down || 0})`).appendTo(this.$actions);
        this.voteBtnDown.setClick(() => {
          this.vote("down");
        });
      }
    }
    if (this.data.is_allow_reply) {
      const replyBtn = createElement(`<span>\u56DE\u590D</span>`);
      this.$actions.append(replyBtn);
      replyBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (!this.onReplyBtnClick) {
          this.ctx.trigger("editor-reply", { data: this.data, $el: this.$el });
        } else {
          this.onReplyBtnClick();
        }
      });
    }
    const collapseBtn = new ActionBtn({
      text: () => this.data.is_collapsed ? "\u53D6\u6D88\u6298\u53E0" : "\u6298\u53E0",
      adminOnly: true
    });
    collapseBtn.appendTo(this.$actions);
    collapseBtn.setClick(() => {
      this.adminEdit("collapsed", collapseBtn);
    });
    const pendingBtn = new ActionBtn({
      text: () => this.data.is_pending ? "\u5F85\u5BA1" : "\u5DF2\u5BA1",
      adminOnly: true
    });
    pendingBtn.appendTo(this.$actions);
    pendingBtn.setClick(() => {
      this.adminEdit("pending", pendingBtn);
    });
    const delBtn = new ActionBtn({
      text: "\u5220\u9664",
      confirm: true,
      confirmText: "\u786E\u8BA4\u5220\u9664",
      adminOnly: true
    });
    delBtn.appendTo(this.$actions);
    delBtn.setClick(() => {
      this.adminDelete(delBtn);
    });
    const pinnedBtn = new ActionBtn({
      text: () => this.data.is_pinned ? "\u53D6\u6D88\u7F6E\u9876" : "\u7F6E\u9876",
      adminOnly: true
    });
    pinnedBtn.appendTo(this.$actions);
    pinnedBtn.setClick(() => {
      this.adminEdit("pinned", pendingBtn);
    });
  }
  refreshUI() {
    const originalEl = this.$el;
    const newEl = this.render();
    originalEl.replaceWith(newEl);
    this.playFadeInAnim();
    this.eachComment(this.children, (child) => {
      var _a;
      (_a = child.parent) == null ? void 0 : _a.getChildrenEl().appendChild(child.render());
      child.playFadeInAnim();
    });
    this.ctx.trigger("comments-loaded");
  }
  eachComment(commentList, action) {
    if (commentList.length === 0)
      return;
    commentList.every((item) => {
      if (action(item, commentList) === false)
        return false;
      this.eachComment(item.getChildren(), action);
      return true;
    });
  }
  getIsRoot() {
    return this.parent === null;
  }
  getChildren() {
    return this.children;
  }
  putChild(childC) {
    childC.parent = this;
    childC.nestedNum = this.nestedNum + 1;
    this.children.push(childC);
    this.getChildrenEl().appendChild(childC.getEl());
    childC.playFadeInAnim();
    childC.checkHeightLimitArea("content");
  }
  getChildrenEl() {
    if (this.$children === null) {
      if (this.nestedNum < this.maxNestingNum) {
        this.$children = createElement('<div class="atk-comment-children"></div>');
        this.$main.appendChild(this.$children);
      } else if (this.parent) {
        this.$children = this.parent.getChildrenEl();
      }
    }
    return this.$children;
  }
  getParent() {
    return this.parent;
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
  getData() {
    return this.data;
  }
  getGravatarUrl() {
    return getGravatarURL(this.ctx, this.data.email_encrypted);
  }
  getContentMarked() {
    return marked(this.ctx, this.data.content);
  }
  getDateFormatted() {
    return timeAgo(new Date(this.data.date));
  }
  getUserUaBrowser() {
    const info = detectFactory(this.data.ua);
    return `${info.browser} ${info.version}`;
  }
  getUserUaOS() {
    const info = detectFactory(this.data.ua);
    return `${info.os} ${info.osVersion}`;
  }
  playFadeInAnim() {
    playFadeInAnim(this.$el);
  }
  vote(type) {
    const actionBtn = type === "up" ? this.voteBtnUp : this.voteBtnDown;
    new Api(this.ctx).vote(this.data.id, `comment_${type}`).then((v) => {
      var _a, _b;
      this.data.vote_up = v.up;
      this.data.vote_down = v.down;
      (_a = this.voteBtnUp) == null ? void 0 : _a.updateText();
      (_b = this.voteBtnDown) == null ? void 0 : _b.updateText();
    }).catch((err) => {
      actionBtn == null ? void 0 : actionBtn.setError(`\u6295\u7968\u5931\u8D25`);
      console.log(err);
    });
  }
  adminEdit(type, btnElem) {
    if (btnElem.isLoading)
      return;
    btnElem.setLoading(true, "\u4FEE\u6539\u4E2D...");
    const modify = __spreadValues({}, this.data);
    if (type === "collapsed") {
      modify.is_collapsed = !modify.is_collapsed;
    } else if (type === "pending") {
      modify.is_pending = !modify.is_pending;
    } else if (type === "pinned") {
      modify.is_pinned = !modify.is_pinned;
    }
    new Api(this.ctx).commentEdit(modify).then((comment2) => {
      btnElem.setLoading(false);
      this.data = comment2;
      this.refreshUI();
      playFadeInAnim(this.$body);
      this.ctx.trigger("list-refresh-ui");
    }).catch((err) => {
      console.error(err);
      btnElem.setError("\u4FEE\u6539\u5931\u8D25");
    });
  }
  adminDelete(btnElem) {
    if (btnElem.isLoading)
      return;
    btnElem.setLoading(true, "\u5220\u9664\u4E2D...");
    new Api(this.ctx).commentDel(this.data.id, this.data.site_name).then(() => {
      btnElem.setLoading(false);
      if (this.onDelete)
        this.onDelete(this);
    }).catch((e) => {
      console.error(e);
      btnElem.setError("\u5220\u9664\u5931\u8D25");
    });
  }
  setUnread(val) {
    this.unread = val;
    if (this.unread)
      this.$el.classList.add("atk-unread");
    else
      this.$el.classList.remove("atk-unread");
  }
  setOpenURL(url) {
    if (!url) {
      this.openable = false;
      this.$el.classList.remove("atk-openable");
    }
    this.openable = true;
    this.openURL = url;
    this.$el.classList.add("atk-openable");
  }
  checkHeightLimit() {
    this.checkHeightLimitArea("content");
    this.checkHeightLimitArea("children");
  }
  checkHeightLimitArea(area) {
    var _a, _b;
    const childrenMaxH = (_a = this.ctx.conf.heightLimit) == null ? void 0 : _a.children;
    const contentMaxH = (_b = this.ctx.conf.heightLimit) == null ? void 0 : _b.content;
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
      checkEl(this.$children);
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
  heightLimitAdd($el, maxHeight) {
    if (!$el)
      return;
    if ($el.classList.contains("atk-height-limit"))
      return;
    $el.classList.add("atk-height-limit");
    $el.style.height = `${maxHeight}px`;
    $el.style.overflow = "hidden";
    const $hideMoreOpenBtn = createElement(`<div class="atk-height-limit-btn">\u9605\u8BFB\u66F4\u591A</span>`);
    $hideMoreOpenBtn.onclick = (e) => {
      e.stopPropagation();
      this.heightLimitRemove($el);
      const children = this.getChildren();
      if (children.length === 1)
        children[0].heightLimitRemove(children[0].$content);
    };
    $el.append($hideMoreOpenBtn);
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
          <input type="text" class="atk-input" />
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
    this.conf = conf;
    this.$el = createElement(`<div class="atk-list-read-more" style="display: none;">
      <div class="atk-list-read-more-inner">
        <div class="atk-loading-icon" style="display: none;"></div>
        <span class="atk-text">\u52A0\u8F7D\u66F4\u591A</span>
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
      this.$text.innerText = "\u67E5\u770B\u66F4\u591A";
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
class ListLite extends Component {
  constructor(ctx) {
    super(ctx);
    __publicField(this, "$commentsWrap");
    __publicField(this, "comments", []);
    __publicField(this, "data");
    __publicField(this, "isLoading", false);
    __publicField(this, "noCommentText", "\u65E0\u5185\u5BB9");
    __publicField(this, "flatMode", false);
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
    window.setInterval(() => {
      this.$el.querySelectorAll("[data-atk-comment-date]").forEach((el) => {
        const date = el.getAttribute("data-atk-comment-date");
        el.innerText = timeAgo(new Date(Number(date)));
      });
    }, 30 * 1e3);
    this.ctx.on("unread-update", (data) => this.updateUnread(data.notifies));
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
      this.ctx.trigger("comments-load");
      if (this.pageMode === "read-more" && offset === 0) {
        this.clearAllComments();
      }
      let listData;
      try {
        listData = yield new Api(this.ctx).get(offset, this.pageSize, this.flatMode, this.paramsEditor);
      } catch (e) {
        this.onError(e.msg || String(e), offset);
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
    if (this.pageMode === "pagination") {
      this.clearAllComments();
    }
    this.data = data;
    if (this.ctx.conf.versionCheck && this.versionCheck(data.api_version))
      return;
    if (data.conf && typeof data.conf.img_upload === "boolean") {
      this.ctx.conf.imgUpload = data.conf.img_upload;
    }
    this.importComments(data.comments);
    this.refreshPagination(offset, this.flatMode ? data.total : data.total_roots);
    this.refreshUI();
    this.ctx.trigger("unread-update", { notifies: data.unread || [] });
    this.ctx.trigger("comments-loaded");
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
    var _a;
    if (this.pageMode === "read-more") {
      this.readMoreBtn = new ReadMoreBtn({
        pageSize: this.pageSize,
        onClick: (o) => __async(this, null, function* () {
          yield this.fetchComments(o);
        })
      });
      this.$el.append(this.readMoreBtn.$el);
      if ((_a = this.conf.pagination) == null ? void 0 : _a.autoLoad) {
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
            this.ctx.trigger("editor-travel-back");
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
  onError(msg, offset) {
    var _a;
    msg = String(msg);
    console.error(msg);
    if (offset !== 0 && this.pageMode === "read-more") {
      (_a = this.readMoreBtn) == null ? void 0 : _a.showErr(`\u83B7\u53D6\u5931\u8D25`);
      return;
    }
    const $err = createElement(`<span>${msg}\uFF0C\u65E0\u6CD5\u83B7\u53D6\u8BC4\u8BBA\u5217\u8868\u6570\u636E<br/></span>`);
    const $retryBtn = createElement('<span style="cursor:pointer;">\u70B9\u51FB\u91CD\u65B0\u83B7\u53D6</span>');
    $retryBtn.onclick = () => this.fetchComments(0);
    $err.appendChild($retryBtn);
    const adminBtn = createElement('<span atk-only-admin-show> | <span style="cursor:pointer;">\u6253\u5F00\u63A7\u5236\u53F0</span></span>');
    adminBtn.onclick = () => this.ctx.trigger("sidebar-show");
    if (!this.ctx.user.data.isAdmin)
      adminBtn.classList.add("atk-hide");
    $err.appendChild(adminBtn);
    setError(this.$el, $err);
  }
  refreshUI() {
    const isNoComment = this.comments.length <= 0;
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
    this.ctx.trigger("check-admin-show-el");
  }
  createComment(data) {
    const comment2 = new Comment(this.ctx, data);
    comment2.afterRender = () => {
      if (this.renderComment)
        this.renderComment(comment2);
    };
    comment2.onDelete = (c) => {
      this.deleteComment(c);
      this.refreshUI();
    };
    return comment2;
  }
  importComments(srcData) {
    if (this.flatMode) {
      srcData.forEach((commentData) => {
        this.putCommentFlatMode(commentData, srcData, "append");
      });
    } else {
      this.importCommentsNesting(srcData);
    }
  }
  importCommentsNesting(srcData) {
    const loadChildren = (parentC) => {
      const children = srcData.filter((o) => o.rid === parentC.data.id);
      children.forEach((childData) => {
        const childC = this.createComment(childData);
        childC.render();
        parentC.putChild(childC);
        loadChildren(childC);
      });
    };
    const rootComments = srcData.filter((o) => o.rid === 0);
    rootComments.forEach((rootData) => {
      const rootC = this.createComment(rootData);
      rootC.render();
      this.$commentsWrap.appendChild(rootC.getEl());
      rootC.playFadeInAnim();
      this.comments.push(rootC);
      loadChildren(rootC);
      rootC.checkHeightLimit();
    });
  }
  putCommentFlatMode(cData, srcData, insertMode) {
    if (cData.is_collapsed)
      cData.is_allow_reply = false;
    const comment2 = this.createComment(cData);
    if (cData.rid !== 0) {
      const rComment = srcData.find((o) => o.id === cData.rid);
      if (rComment)
        comment2.replyTo = rComment;
    }
    comment2.render();
    if (insertMode === "append")
      this.comments.push(comment2);
    if (insertMode === "prepend")
      this.comments.unshift(comment2);
    if (cData.visible) {
      if (insertMode === "append")
        this.$commentsWrap.append(comment2.getEl());
      if (insertMode === "prepend")
        this.$commentsWrap.prepend(comment2.getEl());
      comment2.playFadeInAnim();
    }
    comment2.checkHeightLimit();
    return comment2;
  }
  insertComment(commentData) {
    if (!this.flatMode) {
      const comment2 = this.createComment(commentData);
      comment2.render();
      if (commentData.rid === 0) {
        this.$commentsWrap.prepend(comment2.getEl());
        this.comments.unshift(comment2);
      } else {
        const parent = this.findComment(commentData.rid);
        if (parent) {
          parent.putChild(comment2);
          comment2.getParents().forEach((p) => {
            if (p.$children)
              p.heightLimitRemove(p.$children);
          });
        }
      }
      comment2.checkHeightLimit();
      scrollIntoView(comment2.getEl());
      comment2.playFadeInAnim();
    } else {
      const comment2 = this.putCommentFlatMode(commentData, this.comments.map((c) => c.data), "prepend");
      scrollIntoView(comment2.getEl());
    }
    if (this.data)
      this.data.total += 1;
    this.refreshUI();
    this.ctx.trigger("comments-loaded");
  }
  eachComment(commentList, action) {
    if (commentList.length === 0)
      return;
    commentList.every((item) => {
      if (action(item, commentList) === false)
        return false;
      this.eachComment(item.getChildren(), action);
      return true;
    });
  }
  findComment(id, src) {
    if (!src)
      src = this.comments;
    let comment2 = null;
    this.eachComment(src, (item) => {
      if (item.data.id === id) {
        comment2 = item;
        return false;
      }
      return true;
    });
    return comment2;
  }
  deleteComment(comment2) {
    let findComment;
    if (typeof comment2 === "number") {
      findComment = this.findComment(comment2);
      if (!findComment)
        throw Error(`\u672A\u627E\u5230\u8BC4\u8BBA ${comment2}`);
    } else
      findComment = comment2;
    findComment.getEl().remove();
    this.eachComment(this.comments, (item, levelList) => {
      if (item === findComment) {
        levelList.splice(levelList.indexOf(item), 1);
        return false;
      }
      return true;
    });
    if (this.data)
      this.data.total -= 1;
    this.refreshUI();
  }
  clearAllComments() {
    this.$commentsWrap.innerHTML = "";
    this.data = void 0;
    this.comments = [];
  }
  updateUnread(notifies) {
    this.unread = notifies;
    if (this.unreadHighlight === true) {
      this.eachComment(this.comments, (comment2) => {
        const notify = this.unread.find((o) => o.comment_id === comment2.data.id);
        if (notify) {
          comment2.setUnread(true);
          comment2.setOpenURL(notify.read_link);
          comment2.openEvt = () => {
            this.unread = this.unread.filter((o) => o.comment_id !== comment2.data.id);
            this.ctx.trigger("unread-update", {
              notifies: this.unread
            });
          };
        } else {
          comment2.setUnread(false);
        }
      });
    }
  }
  versionCheck(versionData) {
    const needVersion = (versionData == null ? void 0 : versionData.fe_min_version) || "0.0.0";
    const needUpdate = versionCompare(needVersion, "2.1.8") === 1;
    if (needUpdate) {
      const errEl = createElement(`<div>\u524D\u7AEF Artalk \u7248\u672C\u5DF2\u8FC7\u65F6\uFF0C\u8BF7\u66F4\u65B0\u4EE5\u83B7\u5F97\u5B8C\u6574\u4F53\u9A8C<br/>\u82E5\u60A8\u662F\u7AD9\u70B9\u7BA1\u7406\u5458\uFF0C\u8BF7\u524D\u5F80 \u201C<a href="https://artalk.js.org/" target="_blank">\u5B98\u65B9\u6587\u6863</a>\u201D \u83B7\u53D6\u5E2E\u52A9<br/><br/><span style="color: var(--at-color-meta);">\u524D\u7AEF\u7248\u672C ${"2.1.8"}\uFF0C\u9700\u6C42\u7248\u672C >= ${needVersion}</span><br/><br/></div>`);
      const ignoreBtn = createElement('<span style="cursor:pointer;">\u5FFD\u7565</span>');
      ignoreBtn.onclick = () => {
        setError(this.ctx, null);
        this.ctx.conf.versionCheck = false;
        this.ctx.trigger("conf-updated");
        this.fetchComments(0);
      };
      errEl.append(ignoreBtn);
      setError(this.ctx, errEl, '<span class="atk-warn-title">Artalk Warn</span>');
    }
    return needUpdate;
  }
}
class List extends ListLite {
  constructor(ctx) {
    var _a, _b;
    const el = createElement(ListHTML);
    super(ctx);
    __publicField(this, "$closeCommentBtn");
    __publicField(this, "$openSidebarBtn");
    __publicField(this, "$unreadBadge");
    __publicField(this, "$commentCount");
    __publicField(this, "$dropdownWrap");
    el.querySelector(".atk-list-body").append(this.$el);
    this.$el = el;
    let flatMode = false;
    if (this.ctx.conf.flatMode === "auto") {
      if (window.matchMedia("(max-width: 768px)").matches)
        flatMode = true;
    } else if (this.ctx.conf.flatMode === true) {
      flatMode = true;
    }
    this.flatMode = flatMode;
    this.pageMode = ((_a = this.conf.pagination) == null ? void 0 : _a.readMore) ? "read-more" : "pagination";
    this.pageSize = ((_b = this.conf.pagination) == null ? void 0 : _b.pageSize) || 20;
    this.repositionAt = this.$el;
    this.initListActionBtn();
    this.$commentCount = this.$el.querySelector(".atk-comment-count");
    this.initDropdown();
    this.$el.querySelector(".atk-copyright").innerHTML = `Powered By <a href="https://artalk.js.org" target="_blank" title="Artalk v${"2.1.8"}">Artalk</a>`;
    this.ctx.on("list-reload", () => this.fetchComments(0));
    this.ctx.on("list-refresh-ui", () => this.refreshUI());
    this.ctx.on("list-import", (data) => this.importComments(data));
    this.ctx.on("list-insert", (data) => this.insertComment(data));
    this.ctx.on("list-delete", (comment2) => this.deleteComment(comment2.id));
    this.ctx.on("list-update", (updateData) => {
      updateData(this.data);
      this.refreshUI();
    });
    this.ctx.on("unread-update", (data) => {
      var _a2;
      return this.showUnreadBadge(((_a2 = data.notifies) == null ? void 0 : _a2.length) || 0);
    });
  }
  initListActionBtn() {
    this.$openSidebarBtn = this.$el.querySelector('[data-action="open-sidebar"]');
    this.$closeCommentBtn = this.$el.querySelector('[data-action="admin-close-comment"]');
    this.$unreadBadge = this.$el.querySelector(".atk-unread-badge");
    this.$openSidebarBtn.addEventListener("click", () => {
      this.ctx.trigger("sidebar-show");
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
    this.$el.querySelector(".atk-comment-count-num").innerText = String(Number((_a = this.data) == null ? void 0 : _a.total) || 0);
    if (!!this.ctx.user.data.nick && !!this.ctx.user.data.email) {
      this.$openSidebarBtn.classList.remove("atk-hide");
    } else {
      this.$openSidebarBtn.classList.add("atk-hide");
    }
    this.ctx.trigger("check-admin-show-el");
    this.$openSidebarBtn.querySelector(".atk-text").innerText = !this.ctx.user.data.isAdmin ? "\u901A\u77E5\u4E2D\u5FC3" : "\u63A7\u5236\u4E2D\u5FC3";
    if (!!this.data && !!this.data.page && this.data.page.admin_only === true) {
      this.ctx.trigger("editor-close");
      this.$closeCommentBtn.innerHTML = "\u6253\u5F00\u8BC4\u8BBA";
    } else {
      this.ctx.trigger("editor-open");
      this.$closeCommentBtn.innerHTML = "\u5173\u95ED\u8BC4\u8BBA";
    }
  }
  onLoad(data, offset) {
    super.onLoad(data, offset);
    this.checkGoToCommentByUrlHash();
  }
  checkGoToCommentByUrlHash() {
    return __async(this, null, function* () {
      let commentId = Number(getQueryParam("atk_comment"));
      if (!commentId) {
        const match = window.location.hash.match(/#atk-comment-([0-9]+)/);
        if (!match || !match[1] || Number.isNaN(Number(match[1])))
          return;
        commentId = Number(match[1]);
      }
      if (!commentId)
        return;
      const notifyKey = getQueryParam("atk_notify_key");
      if (notifyKey) {
        new Api(this.ctx).markRead(notifyKey).then(() => {
          this.unread = this.unread.filter((o) => o.comment_id !== commentId);
          this.ctx.trigger("unread-update", {
            notifies: this.unread
          });
        });
      }
      const comment2 = this.findComment(commentId);
      if (!comment2)
        return;
      scrollIntoView(comment2.getEl(), false);
      window.setTimeout(() => {
        comment2.getEl().classList.add("atk-flash-once");
      }, 800);
    });
  }
  adminPageEditSave() {
    if (!this.data || !this.data.page)
      return;
    this.ctx.trigger("editor-show-loading");
    new Api(this.ctx).pageEdit(this.data.page).then((page) => {
      if (this.data)
        this.data.page = __spreadValues({}, page);
      this.refreshUI();
    }).catch((err) => {
      this.ctx.trigger("editor-notify", { msg: `\u4FEE\u6539\u9875\u9762\u6570\u636E\u5931\u8D25\uFF1A${err.msg || String(err)}`, type: "e" });
    }).finally(() => {
      this.ctx.trigger("editor-hide-loading");
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
      ["\u6700\u65B0", () => {
        reloadUseParamsEditor((p) => {
          p.sort_by = "date_desc";
        });
      }],
      ["\u6700\u70ED", () => {
        reloadUseParamsEditor((p) => {
          p.sort_by = "vote";
        });
      }],
      ["\u6700\u65E9", () => {
        reloadUseParamsEditor((p) => {
          p.sort_by = "date_asc";
        });
      }],
      ["\u4F5C\u8005", () => {
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
    __publicField(this, "loadingTimer", null);
    this.$el = createElement(SidebarHTML);
    this.$header = this.$el.querySelector(".atk-sidebar-header");
    this.$closeBtn = this.$header.querySelector(".atk-sidebar-close");
    this.$iframeWrap = this.$el.querySelector(".atk-sidebar-iframe-wrap");
    this.$closeBtn.onclick = () => {
      this.hide();
    };
    this.ctx.on("sidebar-show", () => this.show());
    this.ctx.on("sidebar-hide", () => this.hide());
    this.ctx.on("user-changed", () => {
      this.firstShow = true;
    });
  }
  show() {
    return __async(this, null, function* () {
      this.$el.style.transform = "";
      if (this.layer == null) {
        this.layer = new Layer(this.ctx, "sidebar", this.$el);
        this.layer.afterHide = () => {
          if (this.ctx.conf.editorTravel === true) {
            this.ctx.trigger("editor-travel-back");
          }
        };
      }
      this.layer.show();
      setTimeout(() => {
        this.$el.style.transform = "translate(0, 0)";
      }, 20);
      if (this.firstShow) {
        this.$iframeWrap.innerHTML = "";
        this.$iframe = createElement("<iframe></iframe>");
        const baseURL = `${this.conf.server.replace(/\/$/, "")}/../sidebar/`;
        const userData = encodeURIComponent(JSON.stringify(this.ctx.user.data));
        this.iframeLoad(`${baseURL}?pageKey=${encodeURIComponent(this.conf.pageKey)}&site=${encodeURIComponent(this.conf.site || "")}&user=${userData}${this.conf.darkMode ? `&darkMode=1` : ``}`);
        this.$iframeWrap.append(this.$iframe);
        this.firstShow = false;
      } else {
        if (this.conf.darkMode && !this.$iframe.src.match(/darkMode=1$/)) {
          this.iframeLoad(`${this.$iframe.src}&darkMode=1`);
        }
        if (!this.conf.darkMode && this.$iframe.src.match(/darkMode=1$/)) {
          this.iframeLoad(this.$iframe.src.replace(/&darkMode=1$/, ""));
        }
      }
    });
  }
  hide() {
    var _a;
    this.$el.style.transform = "";
    (_a = this.layer) == null ? void 0 : _a.hide();
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
  checkReqStatus(url) {
    return __async(this, null, function* () {
      if (this.loadingTimer !== null)
        window.clearTimeout(this.loadingTimer);
      this.loadingTimer = window.setTimeout(() => __async(this, null, function* () {
        try {
          yield fetch(url);
        } catch (err) {
          console.log(err);
          const $errAlert = createElement(`<div class="atk-err-alert">  <div class="atk-title">\u4FA7\u8FB9\u680F\u4F3C\u4E4E\u6253\u5F00\u5931\u8D25</div>  <div class="atk-text"><span id="AtkReload">\u91CD\u65B0\u52A0\u8F7D</span> / <span id="AtkCancel">\u53D6\u6D88</span></div></div>`);
          const $reloadBtn = $errAlert.querySelector("#AtkReload");
          const $cancelBtn = $errAlert.querySelector("#AtkCancel");
          $reloadBtn.onclick = () => {
            this.iframeLoad(url);
            $errAlert.remove();
          };
          $cancelBtn.onclick = () => {
            $errAlert.remove();
          };
          this.$iframeWrap.append($errAlert);
        }
      }), 2e3);
    });
  }
}
const _Artalk = class {
  constructor(customConf) {
    __publicField(this, "ctx");
    __publicField(this, "conf");
    __publicField(this, "$root");
    __publicField(this, "checkerLauncher");
    __publicField(this, "editor");
    __publicField(this, "list");
    __publicField(this, "sidebarLayer");
    this.conf = __spreadValues(__spreadValues({}, _Artalk.defaults), customConf);
    this.conf.server = this.conf.server.replace(/\/$/, "");
    if (!this.conf.pageKey) {
      this.conf.pageKey = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
    }
    try {
      const $root = document.querySelector(this.conf.el);
      if (!$root)
        throw Error(`Sorry, target element "${this.conf.el}" was not found.`);
      this.$root = $root;
    } catch (e) {
      console.error(e);
      throw new Error("Please check your Artalk `el` config.");
    }
    this.ctx = new Context(this.$root, this.conf);
    this.$root.classList.add("artalk");
    this.$root.innerHTML = "";
    this.initDarkMode();
    this.checkerLauncher = new CheckerLauncher(this.ctx);
    this.editor = new Editor(this.ctx);
    this.$root.appendChild(this.editor.$el);
    this.list = new List(this.ctx);
    this.$root.appendChild(this.list.$el);
    this.sidebarLayer = new SidebarLayer(this.ctx);
    this.$root.appendChild(this.sidebarLayer.$el);
    this.list.fetchComments(0);
    this.initEventBind();
    this.initPV();
  }
  initEventBind() {
    window.addEventListener("hashchange", () => {
      this.list.checkGoToCommentByUrlHash();
    });
    this.ctx.on("check-admin-show-el", () => {
      const items = [];
      this.$root.querySelectorAll(`[atk-only-admin-show]`).forEach((item) => items.push(item));
      const { $wrap: $layerWrap } = GetLayerWrap(this.ctx);
      if ($layerWrap)
        $layerWrap.querySelectorAll(`[atk-only-admin-show]`).forEach((item) => items.push(item));
      const $sidebarEl = document.querySelector(".atk-sidebar");
      if ($sidebarEl)
        $sidebarEl.querySelectorAll(`[atk-only-admin-show]`).forEach((item) => items.push(item));
      items.forEach(($item) => {
        if (this.ctx.user.data.isAdmin)
          $item.classList.remove("atk-hide");
        else
          $item.classList.add("atk-hide");
      });
    });
    this.ctx.on("user-changed", () => {
      this.ctx.trigger("check-admin-show-el");
      this.ctx.trigger("list-refresh-ui");
    });
  }
  reload() {
    this.list.fetchComments(0);
  }
  initDarkMode() {
    const darkModeClassName = "atk-dark-mode";
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
  setDarkMode(darkMode) {
    this.ctx.conf.darkMode = darkMode;
    this.ctx.trigger("conf-updated");
    this.initDarkMode();
  }
  initPV() {
    return __async(this, null, function* () {
      if (!this.conf.pvEl || !document.querySelector(this.conf.pvEl))
        return;
      const $pv = document.querySelector(this.conf.pvEl);
      const pvNum = yield new Api(this.ctx).pv();
      if (Number.isNaN(Number(pvNum)))
        return;
      $pv.innerText = String(pvNum);
    });
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
};
let Artalk = _Artalk;
__publicField(Artalk, "defaults", defaults$3);
export { Artalk as default };

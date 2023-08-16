import { useEffect, useState } from "react";
import md_guide from "../assets/md_guide.json";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";

export const md = MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
          "</code></pre>"
        );
      } catch (__) {}
    }

    return (
      '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>"
    );
  },
});
export const useMdguide = () => {
  const [guide, setGuide] = useState("");
  useEffect(() => {
    setGuide({
      guide: md.render(md_guide.guide),
      guideTitle: md.render(md_guide.title),
    });
  }, []);

  return guide;
};

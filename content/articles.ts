import type { ContentCard } from "./types";

/**
 * HOW TO ADD AN ARTICLE
 * Add an entry to this array. Each text field is bilingual ({ en, pt }).
 *   - href: link to the full article (external blog, Substack, etc.)
 *   - image: optional cover image path in /public (omit to keep the gradient)
 *   - tag: short category label
 *   - title / excerpt: title and short summary
 *   - date: publish date
 *   - external: true to open in a new tab
 */
export const articles: ContentCard[] = [
  {
    href: "https://github.blog/changelog/2026-07-30-github-copilot-in-visual-studio-code-july-2026-releases/",
    external: true,
    image: "/assets/images/copilot-vscode-july-2026.jpeg",
    imageAlt: {
      en: "GitHub Copilot in Visual Studio Code, July 2026 releases",
      pt: "GitHub Copilot in Visual Studio Code, July 2026 releases",
    },
    tag: { en: "English", pt: "English" },
    title: {
      en: "GitHub Copilot in Visual Studio Code, July 2026 releases",
      pt: "GitHub Copilot in Visual Studio Code, July 2026 releases",
    },
    excerpt: {
      en: "Explore the latest GitHub Copilot updates in Visual Studio Code from July 2026.",
      pt: "Explore the latest GitHub Copilot updates in Visual Studio Code from July 2026.",
    },
    date: { en: "Jul 30, 2026", pt: "Jul 30, 2026" },
  },
  {
    href: "https://www.linkedin.com/pulse/how-keep-up-ai-without-falling-behind-vs-code-cvysc/",
    external: true,
    image: "/assets/images/copilot-vscode-linkedin.png",
    imageAlt: {
      en: "How to Keep Up With AI Without Falling Behind",
      pt: "How to Keep Up With AI Without Falling Behind",
    },
    tag: { en: "English", pt: "English" },
    title: {
      en: "How to Keep Up With AI Without Falling Behind",
      pt: "How to Keep Up With AI Without Falling Behind",
    },
    excerpt: {
      en: "A co-authored guide to staying current with AI while building durable skills and sustainable learning habits.",
      pt: "A co-authored guide to staying current with AI while building durable skills and sustainable learning habits.",
    },
    date: { en: "Jul 21, 2026", pt: "Jul 21, 2026" },
  },
  {
    href: "https://github.blog/changelog/2026-07-08-github-copilot-in-visual-studio-code-june-2026-releases/",
    external: true,
    image: "/assets/images/copilot-vscode-june-2026.jpg",
    imageAlt: {
      en: "GitHub Copilot in Visual Studio Code, June 2026 releases",
      pt: "GitHub Copilot in Visual Studio Code, June 2026 releases",
    },
    tag: { en: "English", pt: "English" },
    title: {
      en: "GitHub Copilot in Visual Studio Code, June 2026 releases",
      pt: "GitHub Copilot in Visual Studio Code, June 2026 releases",
    },
    excerpt: {
      en: "Explore the latest GitHub Copilot updates in Visual Studio Code from June 2026.",
      pt: "Explore the latest GitHub Copilot updates in Visual Studio Code from June 2026.",
    },
    date: { en: "Jul 8, 2026", pt: "Jul 8, 2026" },
  },
  {
    href: "https://www.linkedin.com/pulse/extending-your-agents-vs-code-vs-code-wyr2c/",
    external: true,
    image: "/assets/images/copilot-vscode-linkedin.png",
    imageAlt: {
      en: "Extending Your Agents in VS Code",
      pt: "Extending Your Agents in VS Code",
    },
    tag: { en: "English", pt: "English" },
    title: {
      en: "Extending Your Agents in VS Code",
      pt: "Extending Your Agents in VS Code",
    },
    excerpt: {
      en: "A co-authored introduction to extending AI agents in Visual Studio Code with custom capabilities and tools.",
      pt: "A co-authored introduction to extending AI agents in Visual Studio Code with custom capabilities and tools.",
    },
    date: { en: "Jul 7, 2026", pt: "Jul 7, 2026" },
  },
  {
    href: "https://www.linkedin.com/pulse/copilot-hooks-preview-make-agent-play-your-rules-vs-code-vcpsf/",
    external: true,
    image: "/assets/images/copilot-vscode-linkedin.png",
    imageAlt: {
      en: "Copilot Hooks (Preview): Make the Agent Play by Your Rules",
      pt: "Copilot Hooks (Preview): Make the Agent Play by Your Rules",
    },
    tag: { en: "English", pt: "English" },
    title: {
      en: "Copilot Hooks (Preview): Make the Agent Play by Your Rules",
      pt: "Copilot Hooks (Preview): Make the Agent Play by Your Rules",
    },
    excerpt: {
      en: "Learn how Copilot Hooks let you run custom commands at key points in an agent workflow.",
      pt: "Learn how Copilot Hooks let you run custom commands at key points in an agent workflow.",
    },
    date: { en: "Jun 16, 2026", pt: "Jun 16, 2026" },
  },
  {
    href: "https://github.blog/changelog/2026-06-03-github-copilot-in-visual-studio-code-may-releases/",
    external: true,
    image: "/assets/images/copilot-vscode-may-2026.jpeg",
    imageAlt: {
      en: "GitHub Copilot in Visual Studio Code, May releases",
      pt: "GitHub Copilot in Visual Studio Code, May releases",
    },
    tag: { en: "English", pt: "English" },
    title: {
      en: "GitHub Copilot in Visual Studio Code, May releases",
      pt: "GitHub Copilot in Visual Studio Code, May releases",
    },
    excerpt: {
      en: "Explore the latest GitHub Copilot updates in Visual Studio Code from May 2026.",
      pt: "Explore the latest GitHub Copilot updates in Visual Studio Code from May 2026.",
    },
    date: { en: "Jun 3, 2026", pt: "Jun 3, 2026" },
  },
  {
    href: "https://www.linkedin.com/pulse/custom-instructions-more-powerful-than-you-think-vs-code-pbmbc/",
    external: true,
    image: "/assets/images/copilot-vscode-linkedin.png",
    imageAlt: {
      en: "Custom Instructions Are More Powerful Than You Think",
      pt: "Custom Instructions Are More Powerful Than You Think",
    },
    tag: { en: "English", pt: "English" },
    title: {
      en: "Custom Instructions Are More Powerful Than You Think",
      pt: "Custom Instructions Are More Powerful Than You Think",
    },
    excerpt: {
      en: "Discover how custom instructions can shape more consistent and effective Copilot responses for your projects.",
      pt: "Discover how custom instructions can shape more consistent and effective Copilot responses for your projects.",
    },
    date: { en: "May 19, 2026", pt: "May 19, 2026" },
  },
  {
    href: "https://github.blog/changelog/2026-05-06-github-copilot-in-visual-studio-code-april-releases/",
    external: true,
    image: "/assets/images/copilot-vscode-april-2026.png",
    imageAlt: {
      en: "GitHub Copilot in Visual Studio Code, April releases",
      pt: "GitHub Copilot in Visual Studio Code, April releases",
    },
    tag: { en: "English", pt: "English" },
    title: {
      en: "GitHub Copilot in Visual Studio Code, April releases",
      pt: "GitHub Copilot in Visual Studio Code, April releases",
    },
    excerpt: {
      en: "Explore the latest GitHub Copilot updates in Visual Studio Code from April 2026.",
      pt: "Explore the latest GitHub Copilot updates in Visual Studio Code from April 2026.",
    },
    date: { en: "May 6, 2026", pt: "May 6, 2026" },
  },
  {
    href: "https://www.linkedin.com/pulse/your-teams-best-practices-shouldnt-live-pr-comments-vs-code-syvdc/",
    external: true,
    image: "/assets/images/copilot-vscode-linkedin.png",
    imageAlt: {
      en: "Your Team's Best Practices Shouldn't Live in PR Comments",
      pt: "Your Team's Best Practices Shouldn't Live in PR Comments",
    },
    tag: { en: "English", pt: "English" },
    title: {
      en: "Your Team's Best Practices Shouldn't Live in PR Comments",
      pt: "Your Team's Best Practices Shouldn't Live in PR Comments",
    },
    excerpt: {
      en: "Turn recurring pull request feedback into shared guidance that Copilot can apply across your team's work.",
      pt: "Turn recurring pull request feedback into shared guidance that Copilot can apply across your team's work.",
    },
    date: { en: "May 5, 2026", pt: "May 5, 2026" },
  },
  {
    href: "https://www.linkedin.com/pulse/ask-copilot-your-codebase-just-open-file-vs-code-wea2c/",
    external: true,
    image: "/assets/images/copilot-vscode-linkedin.png",
    imageAlt: {
      en: "Ask Copilot About Your Codebase, Not Just Your Open File",
      pt: "Ask Copilot About Your Codebase, Not Just Your Open File",
    },
    tag: { en: "English", pt: "English" },
    title: {
      en: "Ask Copilot About Your Codebase, Not Just Your Open File",
      pt: "Ask Copilot About Your Codebase, Not Just Your Open File",
    },
    excerpt: {
      en: "Learn how to give Copilot broader codebase context for answers that go beyond the file currently open.",
      pt: "Learn how to give Copilot broader codebase context for answers that go beyond the file currently open.",
    },
    date: { en: "Apr 21, 2026", pt: "Apr 21, 2026" },
  },
  {
    href: "https://github.blog/changelog/2026-04-08-github-copilot-in-visual-studio-code-march-releases/",
    external: true,
    image: "/assets/images/copilot-vscode-march-2026.jpg",
    imageAlt: {
      en: "GitHub Copilot in Visual Studio Code, March releases",
      pt: "GitHub Copilot in Visual Studio Code, March releases",
    },
    tag: { en: "English", pt: "English" },
    title: {
      en: "GitHub Copilot in Visual Studio Code, March releases",
      pt: "GitHub Copilot in Visual Studio Code, March releases",
    },
    excerpt: {
      en: "Explore the latest GitHub Copilot updates in Visual Studio Code from March 2026.",
      pt: "Explore the latest GitHub Copilot updates in Visual Studio Code from March 2026.",
    },
    date: { en: "Apr 8, 2026", pt: "Apr 8, 2026" },
  },
  {
    href: "https://github.blog/changelog/2026-03-06-github-copilot-in-visual-studio-code-v1-110-february-release/",
    external: true,
    image: "/assets/images/github-new-releases.jpg",
    imageAlt: {
      en: "GitHub Copilot in Visual Studio Code v1.110, February release",
      pt: "GitHub Copilot in Visual Studio Code v1.110, February release",
    },
    tag: { en: "English", pt: "English" },
    title: {
      en: "GitHub Copilot in Visual Studio Code v1.110 - February release",
      pt: "GitHub Copilot in Visual Studio Code v1.110 - February release",
    },
    excerpt: {
      en: "Explore the GitHub Copilot updates in Visual Studio Code from February 2026.",
      pt: "Explore the GitHub Copilot updates in Visual Studio Code from February 2026.",
    },
    date: { en: "Mar 6, 2026", pt: "Mar 6, 2026" },
  },
  {
    href: "https://code.visualstudio.com/blogs/2026/03/05/making-agents-practical-for-real-world-development",
    external: true,
    image: "/assets/images/making-agents-practical.png",
    imageAlt: {
      en: "Making agents practical for real-world development",
      pt: "Making agents practical for real-world development",
    },
    tag: { en: "English", pt: "English" },
    title: {
      en: "Making agents practical for real-world development",
      pt: "Making agents practical for real-world development",
    },
    excerpt: {
      en: "Explore how coding agents are becoming practical tools for real-world software development workflows.",
      pt: "Explore how coding agents are becoming practical tools for real-world software development workflows.",
    },
    date: { en: "Mar 5, 2026", pt: "Mar 5, 2026" },
  },
  {
    href: "https://github.blog/changelog/2026-02-04-github-copilot-in-visual-studio-code-v1-109-january-release/",
    external: true,
    image: "/assets/images/github-new-releases.jpg",
    imageAlt: {
      en: "GitHub Copilot in Visual Studio Code v1.109, January release",
      pt: "GitHub Copilot in Visual Studio Code v1.109, January release",
    },
    tag: { en: "English", pt: "English" },
    title: {
      en: "GitHub Copilot in Visual Studio Code v1.109 - January release",
      pt: "GitHub Copilot in Visual Studio Code v1.109 - January release",
    },
    excerpt: {
      en: "Explore the GitHub Copilot updates in Visual Studio Code from January 2026.",
      pt: "Explore the GitHub Copilot updates in Visual Studio Code from January 2026.",
    },
    date: { en: "Feb 4, 2026", pt: "Feb 4, 2026" },
  },
];

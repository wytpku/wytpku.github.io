# 王宇涛的个人主页

静态个人网站，首页包含个人介绍、研究兴趣、三个项目的简要介绍和联系方式，另附网页简历与可下载的 PDF。

目标仓库：`wytpku/wytpku.github.io`。目标网站：<https://wytpku.github.io/>。

## 最容易的上线方式：GitHub 网页上传

1. 登录自己的 GitHub 账号 `wytpku`，打开 <https://github.com/new>。
2. 仓库名称填 **`wytpku.github.io`**，可见性选 **Public**，打开 **Add README**，点击 **Create repository**。如果这个仓库已经存在，直接打开它；先检查已有内容再更新对应文件。
3. 解压交付的 ZIP。进入解压后的文件夹，找到 `index.html`、`style.css`、`main.js`、`cv.html`、`cv.css` 和 `assets` 文件夹。
4. 在仓库的 **Code** 页面点击 **Add file → Upload files**。将网站文件夹里面的文件和 `assets` 文件夹拖进去，保留 `assets` 文件夹的层级。不要把外层 `wytpku.github.io` 文件夹作为一级目录上传。浏览器上传支持文件夹；如果拖入后层级不正确，取消并重新选择。ZIP 文件本身不能代替网站文件。
5. 下方提交说明填 `Add personal website`，提交到 `main`。
6. 打开 **Settings → Pages**，在 **Build and deployment** 中设置：
   - **Source**：`Deploy from a branch`
   - **Branch**：`main`
   - **Folder**：`/(root)`
   - 点击 **Save**。
7. 等待发布完成。GitHub 官方说明：发布可能需要最多约 10 分钟。返回 Pages 页面点击 **Visit site**，或者访问 <https://wytpku.github.io/>。

仓库根目录应直接出现 `index.html`，目录结构应为：

```text
wytpku.github.io/
├── index.html
├── style.css
├── main.js
├── cv.html
├── cv.css
├── 404.html
├── robots.txt
├── sitemap.xml
├── README.md
├── .nojekyll
├── .gitignore
└── assets/
    ├── cv.pdf
    ├── portrait.jpg
    └── favicon.svg
```

`.nojekyll` 是一个空文件，用于跳过 Jekyll 处理。macOS Finder 默认隐藏它，可用 `Command + Shift + .` 显示隐藏文件后一起上传。当前页面资源使用普通文件名，未上传这个文件也能通过 GitHub 默认的静态处理发布。

GitHub Pages 是公开主页托管。网站中的邮箱、照片和项目介绍会随页面公开。上线前查看主页与简历页，确认文字符合你希望公开的内容。

## 本地预览与文件修改

可以直接双击 `index.html` 在浏览器查看。开发时也可以在这个目录运行：

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

然后访问 <http://127.0.0.1:8000/>，结束时在终端按 `Control + C`。

| 文件 | 修改内容 |
| --- | --- |
| `index.html` | 首页介绍、教育、研究兴趣、项目、联系方式 |
| `style.css` | 首页颜色、字体、布局与手机适配 |
| `main.js` | 页脚年份与简历打印按钮 |
| `cv.html` | 网页简历文字 |
| `cv.css` | 简历的屏幕与打印版式 |
| `assets/cv.pdf` | 可下载的公开简历 PDF |
| `assets/portrait.jpg` | 个人照片 |

首页采用单栏正文、分节标题和普通文字链接，项目详情可在简历中查看。简历页支持直接下载 PDF，“打印 / 保存为 PDF”按钮也可调用浏览器打印。

以后在 GitHub 仓库里编辑文件并 **Commit changes**，或通过 **Upload files** 上传同名文件覆盖对应内容，Pages 会重新发布。每次更新项目时，注意同时更新 `index.html` 和 `cv.html` 中的介绍，并调整页面底部的更新时间。更新简历文字后，用浏览器打印并保存为 `cv.pdf`，替换 `assets/cv.pdf`，让下载版与网页版本一致。

## 命令行维护方式

网页上传完成后，建议在单独的开发目录克隆仓库，避免对解压目录重复初始化：

```sh
git clone https://github.com/wytpku/wytpku.github.io.git
cd wytpku.github.io
```

编辑文件后：

```sh
git add .
git commit -m "Update personal website"
git push
```

如果 HTTPS 推送需要登录，可使用已安装的 GitHub CLI：

```sh
gh auth login --hostname github.com
gh auth setup-git
```

在登录流程里选择 **GitHub.com → HTTPS → Login with a web browser**，按终端给出的地址与一次性验证码登录。不要把 GitHub 密码或访问令牌写进网站文件。首次提交如果提示缺少作者信息，在该仓库内设置 `git config user.name "王宇涛"` 和 `git config user.email "你在 GitHub 设置里确认的提交邮箱"`。

## 常见问题

- **找不到 main 分支**：先完成 README 初始化或提交一次文件，再设置 Pages。
- **看到 README，而不是主页**：检查 `index.html` 是否位于仓库根目录，以及 Pages 是否选择 `main / (root)`。
- **样式或图片没有加载**：检查 `style.css`、`main.js` 与 `assets/portrait.jpg` 是否正确上传。GitHub 上的路径区分大小写。
- **发布后暂时 404**：查看 **Actions** 中的 Pages 工作流是否成功，再检查 **Settings → Pages**；首次发布可能尚未完成。
- **更新后仍看到旧页面**：等发布工作流成功后，用 `Command + Shift + R` 刷新页面。
- **个人主页仓库已存在**：先查看和备份已有内容，再更新所需文件，保留已有的部署设置与自定义域名配置。

## 官方文档

- [GitHub Pages 入门](https://docs.github.com/en/pages/quickstart)
- [配置发布来源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [创建 GitHub Pages 网站](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

本版本准备于 2026 年 10 月 13 日；实际发布状态请以仓库 Pages 页面和 Actions 工作流为准。

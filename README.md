# Yaroslav Voloshin's Personal Website

This is the source code for my personal website, hosted on **https://voloshinhq.com**.

## About

I'm Yaroslav Voloshin. This repo contains my personal landing page and blog posts.

## Project Structure

```text
├── index.html                                 # Main page
├── posts/
│   └── who-i-am-and-why-this-exists.html      # Blog post page
├── styles.css                                  # Global styles
├── theme.js                                    # Theme toggle + reading-time logic
├── avatar.jpg                                  # Avatar + favicon source
├── LICENSE                                     # MIT License
└── README.md                                   # Project documentation
```

## Commands

| Command | Action |
| :-- | :-- |
| `python3 -m http.server 8080` | Run local static preview |
| `open http://localhost:8080` | Open local site |
| `git add . && git commit -m "..." && git push` | Publish changes to GitHub |

## Deployment

This site is deployed on my server with **Nginx** and **Let's Encrypt**.

- Domain: `https://voloshinhq.com`
- Canonical redirect: `www.voloshinhq.com` → `voloshinhq.com`
- Web root: `/var/www/voloshinhq.com`

### Server sync

```bash
rsync -av --delete --exclude '.git' ./ /var/www/voloshinhq.com/
sudo nginx -t && sudo systemctl reload nginx
```

## License

This repository is licensed under the [MIT License](LICENSE).

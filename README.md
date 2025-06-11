# 🔍 JS_Leaks

A lightweight Python script by **Youcef Berga (imd4x)** that scans a list of JavaScript file URLs and prints only those that contain specified keywords.

---

## 📌 Features

- ✅ Scans JavaScript files from a list of URLs
- ✅ Accepts multiple keywords
- ✅ Prints only the URLs where keywords are found
- ✅ Simple and fast — built with `requests` and `argparse`

---

## 🧰 Requirements

- Python 3.x
- `requests` module

### Install dependencies

Using `requirements.txt`:

```bash
pip install -r requirements.txt
```

Or manually:

```bash
pip install requests
```

---

## 🚀 Usage

```bash
python3 js_leaks.py -l <url_list_file> "keyword1" "keyword2" ...
```

### Arguments

- `-l`, `--list`: Path to a text file containing one JavaScript file URL per line
- `"keyword1" "keyword2"`: One or more keywords to search for (case-insensitive)

---

## ✅ Example

Suppose you have a file called `urls.txt`:

```
https://example.com/app.js
https://cdn.site.net/main.js
https://raw.githubusercontent.com/user/project/script.js
```

Run the script:

```bash
python3 js_leaks.py -l urls.txt "devDependencies" "apikey" "token"
```

If matches are found, you'll see:

```
https://example.com/app.js
https://raw.githubusercontent.com/user/project/script.js
```

Only URLs containing at least one of the keywords will be shown.

---

## 📁 Project Structure

```
keyword-js-scanner/
├── js_leaks.py          # 🔍 Main script (renamed)
├── requirements.txt     # 📦 Python dependencies
└── README.md            # 📖 Documentation
```

---

## 👨‍💻 Author

**Youcef Berga (imd4x)** — 2025  
Security enthusiast & automation builder 🛡️🧠

---

## 📃 License

MIT License — feel free to use, modify, and share. Credit is appreciated.

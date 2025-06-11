#!/usr/bin/env python3
# ---------------------------------------------------
# 🔍 Keyword JS Scanner by imd4x
# 📅 Created: 2025
# 🛠️ Description: Searches for specific keywords
#     in JavaScript files from a list of URLs.
# ---------------------------------------------------

import requests
import argparse

def search_keywords_in_js(url, keywords):
    try:
        response = requests.get(url)
        response.raise_for_status()
        content = response.text.lower()
        return any(keyword.lower() in content for keyword in keywords)
    except Exception:
        return False

def main():
    parser = argparse.ArgumentParser(description="Search for keywords in JS files from a list of URLs.")
    parser.add_argument('-l', '--list', required=True, help='File containing list of URLs')
    parser.add_argument('keywords', nargs='+', help='One or more keywords to search for')
    args = parser.parse_args()

    print(f"\n🔍 Searching for keywords: {', '.join(args.keywords)}\n")

    with open(args.list, 'r') as f:
        urls = [line.strip() for line in f if line.strip()]

    for url in urls:
        if search_keywords_in_js(url, args.keywords):
            print(url)

if __name__ == "__main__":
    main()

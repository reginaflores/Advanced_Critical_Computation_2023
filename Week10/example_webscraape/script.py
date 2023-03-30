# https://colab.research.google.com/drive/15rRMaqXFU4pxCQj7UYfVF5CMAsk9pv1p#scrollTo=UIY7QPfdkbyU

# Uses Requests Library:
# https://www.tutorialspoint.com/requests/requests_web_scraping_using_requests.htm

# Selenium
# https://docs.saucelabs.com/web-apps/automated-testing/selenium/

#Beautiful Soup:
# https://pypi.org/project/beautifulsoup4/

# Dependencies: must install selenium first:
# !pip install selenium


import requests
from bs4 import BeautifulSoup
import selenium

url_test = "https://www.nytimes.com/"

user_agent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"

r_test = requests.get(url_test)

headers = {
    'User-Agent': user_agent,
}

response = requests.get(url_test, headers=headers)

response.text

soup_data = BeautifulSoup(response.text, 'html.parser')

headlines = soup_data.find_all('h3')

# len(headlines)
print(headlines)

for tag in headlines:
    text = tag.text
    print(text)
# Prints a list of headlines
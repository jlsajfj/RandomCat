import json
import urllib.request

def func():
	with urllib.request.urlopen("http://random.cat/meow") as url:
		s = url.read()
		return s
import requests

length = input("Number of Pages: ")
y = input("Start Page: ")
y = int(y)
y-=1;
exOnce = 1

for x in range(int(length)):
    x += 1 + y
    url = 'https://einsteinpapers.press.princeton.edu/vol2-doc/'+ str(x) + '.jpg?zoomFactor=2'
    r = requests.get(url, allow_redirects=True)
    open(str(x) + '.jpg', 'wb').write(r.content)
    print("Downloaded Page #" + str(x))

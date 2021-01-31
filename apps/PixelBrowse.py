import urllib.request

while True:
    rawURL = "pixelbrush.dev" #input("URL: ")
    if '/' not in rawURL:
        url = rawURL + "/index.html"
        downloadedFileDest = 'C:/Users/letsp/Desktop/'+ rawURL + '.index.html'
        print("Loading Website")
        urllib.request.urlretrieve("http://www." + url, downloadedFileDest)

    else:
        url = rawURL + ".html"
        rawURLnoSlash = rawURL.replace("/", ".")
        print("Loading Website")
        downloadedFileDest = 'C:/Users/letsp/Desktop/'+ rawURLnoSlash + '.html'
        urllib.request.urlretrieve("http://www." + url, downloadedFileDest)

    htmlFile = open(downloadedFileDest, "r")
    while htmlFile.readline() != "":
        #if htmlFile.readline().find('rel="stylesheet"'):
            #cssURL = htmlFile.readline().split('href="', 1)
            #cssURL = cssURL[0]
            #cssURL = cssURL.split('"', 0)
            #print(cssURL)
            #url = rawURL + "cssURL"
            #downloadedFileDest = 'C:/Users/letsp/Desktop/'+ rawURL + '.style.css'
            #urllib.request.urlretrieve("http://www." + url, downloadedFileDest)

        print(htmlFile.readline())

    print(url + " loaded")
    break




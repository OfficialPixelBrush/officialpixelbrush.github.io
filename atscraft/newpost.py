import os.path
from os import path
from pathlib import Path
from datetime import datetime
from tkinter import *
from tkinter import ttk
from tkinter.scrolledtext import ScrolledText


print("Started")
def readPostNmbr():
    if os.path.isfile("news/numberOfPosts.txt"):
        mainjs = open("news/numberOfPosts.txt", "r")
        nmbrUI_of_posts = mainjs.readline()

        data = mainjs.read();
            
        mainjs.close()
        nmbrUI = int(nmbrUI_of_posts);
        
        postNmbr.config(text=(str(nmbrUI_of_posts)))
        
def makePost():
    if os.path.isfile("news/numberOfPosts.txt"):
        mainjs = open("news/numberOfPosts.txt", "r")
        nmbr_of_posts = mainjs.readline()

        data = mainjs.read();
        
        mainjs.close() 

        text = mail_message.get('1.0',END)

        # Space to </br>
        text = text.replace("\n", "</li>\n<li>") 
        text = ("<ul>\n<li>\n" + text + "\n</ul>") 
    
        nmbr_of_posts = int(nmbr_of_posts)+1;

        print(str(nmbr_of_posts) + text);
    
        mainjs = open("news/numberOfPosts.txt", "w")
        mainjs.write(str(nmbr_of_posts));
        mainjs.close() 

        now = datetime.now()

        current_time = now.strftime("%I:%M %p")
        dt = datetime.today()
        day = int(dt.day);
        day_word = ""
        if (day == 1):
            day_word = "1st"
        if (day == 2):
            day_word = "2nd"
        if (day == 3):
            day_word = "3rd"
        if (day == 21):
            day_word = "21st"
        if (day == 22):
            day_word = "22nd"
        if (day == 23):
            day_word = "23rd"
        if (day == 31):
            day_word = "31st"
        if (day > 3):
            day_word = str(day) + "th"

        month_word = ""
        if (dt.month == 1):
            month_word = "January"
        if (dt.month == 2):
            month_word = "February"
        if (dt.month == 3):
            month_word = "March"
        if (dt.month == 4):
            month_word = "April"
        if (dt.month == 5):
            month_word = "May"
        if (dt.month == 6):
            month_word = "June"
        if (dt.month == 7):
            month_word = "July"
        if (dt.month == 8):
            month_word = "August"
        if (dt.month == 9):
            month_word = "September"
        if (dt.month == 10):
            month_word = "October"
        if (dt.month == 11):
            month_word = "November"
        if (dt.month == 12):
            month_word = "December"
            
            
        date_today = day_word + " of " + month_word + ", " + str(dt.year)
        date = str(date_today) + " - " + str(current_time).lower()
        
        f= open("news/" + str(nmbr_of_posts) + ".txt","w+")
        poster = "-" + "PixelBrushArt"
        f.write(date + "\n" + text + "\n" + poster)
        f.close() 
        print("Submitted post on "+ str(date))
        
        readPostNmbr()

def lowerPost():
    if os.path.isfile("scripts/news.js"):
        mainjs = open("scripts/news.js", "r")
        nmbr_of_posts = mainjs.readline()
        nmbr_2 = mainjs.readline()

        data = mainjs.read();
        
        mainjs.close() 
        nmbr = nmbr_of_posts.split("=", 1)[1]
        nmbr = nmbr.split(";", 1)[0]  


    
        nmbr_of_posts = nmbr_of_posts.split("=", 1)[0]
    
        nmbr = int(nmbr)-1;

        print(nmbr_of_posts + "= " + str(nmbr)+ ";");
    
        mainjs = open("scripts/news.js", "w")
        mainjs.write(nmbr_of_posts + "= " + str(nmbr)+ ";\n" + "let nmbr = " + str(nmbr)+ ";\n" + data);
        mainjs.close()

        readPostNmbr()

def higherPost():
    if os.path.isfile("scripts/news.js"):
        mainjs = open("scripts/news.js", "r")
        nmbr_of_posts = mainjs.readline()
        nmbr_2 = mainjs.readline()

        data = mainjs.read();
        
        mainjs.close() 
        nmbr = nmbr_of_posts.split("=", 1)[1]
        nmbr = nmbr.split(";", 1)[0]  


    
        nmbr_of_posts = nmbr_of_posts.split("=", 1)[0]
    
        nmbr = int(nmbr)+1;

        print(nmbr_of_posts + "= " + str(nmbr)+ ";");
    
        mainjs = open("scripts/news.js", "w")
        mainjs.write(nmbr_of_posts + "= " + str(nmbr)+ ";\n" + "let nmbr = " + str(nmbr)+ ";\n" + data);
        mainjs.close()

        readPostNmbr()

root = Tk()  
root.title("News Maker")

# Post Number
postNmbr = Label(text="-")
postNmbr.grid(row=0)

# Text
mail_message = Text(root)
mail_message.grid(row=1,padx=1)

# Submit
send = Button(root, text ="Submit", command = makePost)
send.grid(row=2, sticky=SE, pady=1, padx=1)
# Lower
lower = Button(root, text ="Lower", command = lowerPost)
lower.grid(row=2, sticky=SW, pady=2, padx=2)
# Higher
higher = Button(root, text ="Higher", command = higherPost)
higher.grid(row=2, sticky=S, pady=2, padx=2)

readPostNmbr()
root.mainloop()

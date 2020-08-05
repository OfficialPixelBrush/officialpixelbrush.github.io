import os.path
from os import path
from pathlib import Path
from datetime import datetime
import updateTime

print("Reading Session File...")
if os.path.isfile("scripts/main.js"):
    mainjs = open("scripts/main.js", "r")
    nmbr_of_posts = mainjs.readline()
    nmbr_2 = mainjs.readline()

    data = mainjs.read();
        
    mainjs.close() 
    nmbr = nmbr_of_posts.split("=", 1)[1]
    nmbr = nmbr.split(";", 1)[0]

    text = input("Text (| = </br>): ")
    text = text.replace("|", "\n</br>\n")
    

    
    nmbr_of_posts = nmbr_of_posts.split("=", 1)[0]
    
    nmbr = int(nmbr)+1;

    print(nmbr_of_posts + "= " + str(nmbr)+ ";");
    
    mainjs = open("scripts/main.js", "w")
    mainjs.write(nmbr_of_posts + "= " + str(nmbr)+ ";\n" + "let nmbr = " + str(nmbr)+ ";\n" + data);
    mainjs.close() 

    now = datetime.now()

    current_time = now.strftime("%H:%M")
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
    
    date_front = '\n</br>\n</br>\n<a id="postdate" class="date">'
    date = str(date_today) + " - " + str(current_time)
    date_back = "</a>"

    full_date = date_front + date + date_back;
    
    f= open("posts/" + str(nmbr) + ".txt","w+")
    f.write(text + full_date)
    f.close() 
    print("\""+ text+full_date + "\"")
    updateTime.uT()
    

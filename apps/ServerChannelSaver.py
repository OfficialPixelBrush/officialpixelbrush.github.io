import discord
import re
import time
import requests
import os
import io
from datetime import date
client = discord.Client()

@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    if message.author == client.user:
        return
    
    if message.content.startswith('$save'):    
        global copyFrom_channel
        copyFrom_channel = message.channel
        print('You have selected #' + copyFrom_channel.name)
        await copyFrom_channel.send('You have selected #' + copyFrom_channel.name)
       

        # make new html file
        f= io.open(str(copyFrom_channel.name) + ".txt","w+", encoding="utf-8")

        # start of the site and style stuff
        f.write("--- START OF CHANNEL ---\n")
        messages = await copyFrom_channel.history(oldest_first=True, limit= None).flatten()
        print('Saving ' + str(len(messages)) + ' messages.')
        
        # cycle through channel messages
        for i in range(len(messages)):
            msg_original = messages[i].content
            msg_replaced = re.sub("\<<^>>*\]", lambda x:x.group(0).replace('@',''), msg_original)
            msgAuthor = str(messages[i].author).split("#", 1)
            msgAuthorFinal = msgAuthor[0]
            full_msg = (msgAuthorFinal + ": " + msg_replaced)
            f.write(str(full_msg))
            
            f.write("\n \n")
                    
        f.write("--- END OF CHANNEL ---\n")
        today = date.today()
        d = today.strftime("%B %d, %Y")
        f.write("--- " + d + " ---")
        f.close() 
        print('Saved ' + str(len(messages)) + ' messages.')
        await copyFrom_channel.send('Saved #' + copyFrom_channel.name)
            
'''
            if messages[i].attachments != "[]":
                for b in range(len(messages[i].attachments)):
                    #s = str(messages[i].attachments[b])
                    #url_pattern = "url=\'(.*?)\'"
                    #url = str(re.search(url_pattern, s).group(1))
                    #print(url)
                    file_attachment = await messages[i].attachments[b].to_file()
                    await pasteTo_channel.send(file=file_attachment)
'''
            
client.run('TOKEN HERE')

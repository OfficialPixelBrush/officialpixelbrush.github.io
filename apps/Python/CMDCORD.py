import discord
import threading
client = discord.Client()
msg = 0

@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

def background():
    @client.event
    async def on_message(message):
        msg = 1
        if message.author == client.user:
            return
        print("(" + str(message.channel) +  ") " +str(message.author) + ": " + str(message.content))

threading1 = threading.Thread(target=background)
threading1.daemon = True
threading1.start()

'''
while True:
    on_ready()
    input('{0.user}'.format(client))'''

client.run('TOKEN HERE')

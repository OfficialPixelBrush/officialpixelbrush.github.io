import socket

server = socket.socket()
host = socket.gethostname()
name = input("Set Name: ")
othername = "Other"
port = input("Set Port: ")
port = int(port)
server.bind((host, port))

server.listen(5)
while True:
    client, addr = server.accept()
    print("Connected to", addr)
    output = ("You\'re talking with " + name)
    client.sendall(name.encode('utf-8'))
    othername = client.recv(1024).decode('utf_8')
    print ("You're talking with " + othername)
    while output != "exit":
        print (othername + ": " + client.recv(1024).decode('utf_8'))
        output = input(name + ": ")
        client.sendall(output.encode('utf-8'))
    else:
        client.sendall(name + " disconnected.".encode('utf-8'))
        client.close()

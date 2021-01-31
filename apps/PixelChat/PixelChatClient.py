import socket

server = socket.socket()
host = socket.gethostname()
name = input("Set Name: ")
othername = "Other"
port = input("Set Port: ")
port = int(port)

server.connect((host, port))
print("Connected to", host)
output = ""
server.sendall(name.encode('utf-8'))
othername = server.recv(1024).decode('utf_8')
print ("You're talking with " + othername)
while output != "exit":
    output = input(name + ": ")
    server.sendall(output.encode('utf-8'))
    print (othername + ": " + server.recv(1024).decode('utf_8'))
else:
    server.sendall(name + " disconnected.".encode('utf-8'))
    server.close()

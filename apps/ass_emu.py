'''
AAA
AAD
AAM
AAS
        ADC
        ADD
        AND
CALL
CBW
        CLC
        CLD
        CLI
        CMC
CMP
CMPSB
CMPSW
CWD
DAA
DAS
        DEC
DIV
HLT
IDIV
IMUL
IN
        INC
INT
INTO
IRET
JA
JAE
JB
JBE
JC
JCXZ
JE
JG
JGE
JL
JLE
JMP
JNA
JNAE
JNB
JNBE
JNC
JNE
JNG
JNGE
JNL
JNLE
JNO
JNP
JNS
JNZ
JO
JP
JPE
JPO
JS
JZ
LAHF
LDS
LEA
LES
LODSB
LODSW
LOOP
LOOPE
LOOPNE
LOOPNZ
LOOPZ
        MOV
MOVSB
MOVSW
MUL
        NEG
NOP
        NOT
        OR
OUT
POP
POPA
POPF
PUSH
PUSHA
PUSHF
RCL
RCR
REP
REPE
REPNE
REPNZ
REPZ
RET
RETF
ROL
ROR
SAHF
SAL
SAR
SBB
SCASB
SCASW
SHL
SHR
        STC
        STD
        STI
STOSB
STOSW
        SUB
TEST
XCHG
XLATB
        XOR
'''

''' MEMORY '''
memory = [0]
for x in range(0, 16384):
    memory.append(0)

''' REGISTERS '''
# Accumulator
AX=0
# Base Register
BX=0
# Counter Register
CX=0
# Data Register
DX=0
AL=0
AH=0
BL=0
BH=0
CL=0
CH=0
DL=0
DH=0
# Destination Index Register
DI=0
# Source Insdex Register
SI=0
# Base Pointer
BP=0
# Stack Pointer
SP=0

''' FLAGS '''
# Carry Flag
CF=0
# Parity Flag
PF=0
# Auxiliary Flag
AH=0
# Zero Flag
ZF=0
# Sign Flag
SF=0
# Trap Flag
TF=0
# Interupt Flag
IF=0
# Direction Flag
DF=0
# Overflow Flag
OF=0
    

#AND (SS)
def AND(a, b):
    if (a and b):
        return 1
    else:
        return 0

#OR
def OR(a, b):
    if (a or b):
        return 1
    else:
        return 0

#XOR (SS)
def XOR(a, b):
    if (a and b):
        return 0
    elif (NOT(a) and NOT(b)):
        return 0
    else:
        return 1

#NOT
def NOT(a):
    if (a == 1):
        return 0
    else:
        return 1
        
#ADD
def ADD(a, b):
    memory[a] = memory[a] + memory[b]

#SUB
def SUB(a, b):
    memory[a] = memory[a] - memory[b]

#MOV
def MOV(a, b):
    memory[a] = b

#IMUL
def IMUL(a):
    AX = (AL*a)

#CLC
def CLC:
    CF = 0

#CLD
def CLD:
    DF = 0

#CLI
def CLI:
    IF = 0

#DEC
def DEC(a):
    memory[a] = memory[a]-1

#INC
def INC(a):
    memory[a] = memory[a]+1

#NEG
def NEG(a):
    memory[a] = memory[a]*-1

#STC
def STC:
    CF = 1

#STD
def STD:
    DF = 1

#STI
def STI:
    IF = 1

#ADC
def ADC(a,b):
    memory[a] = memory[a] + memory[b] + CF

#CMC
def CMC:
    if CF = 1
        CF = 0
    if CF = 0
        CF = 1
    

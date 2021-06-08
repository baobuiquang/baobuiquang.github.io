---
layout: post
title: "The weakness of Advanced Encryption Standard in Cryptography (AES-ECB Brute-force Attack)"
date: 2021-05-23 07:00:00 +0700
author: "Bui Quang Bao"
tags: security ctf cryptography technology
series:
preview: "From the description, we know that the encryption used here is AES - Advanced Encryption Standard, ECB mode. (Without description, we can determine the encryption type by the module imported in server.py) By looking at the script, we can see that the flag is 32 bytes long, as is the key. The encryption method works like this: Because it's ECB, the plaintext will be split into 16-byte blocks, with each block using the AES encryption function with the key provided in the file."
---

## Description

The cryptography technique can be good, but the implementation is bad. Do you know the weakness of AES-ECB?

Netcat `nc 61.28.237.24 30300`

File `server.py`

```python
#!/usr/bin/env python

from Crypto.Cipher import AES
from select import select
import sys

def padding(plaintext):

    plaintext_length = len(plaintext)
    padding_length = 0
    
    if plaintext_length % 32 != 0:
        padding_length = (plaintext_length // 32 + 1) * 32
    else:
        padding_length = 0
    return padding_length

def main():
    flag = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" # TODO 
    key = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" # TODO
    
    padding_character = "D"
    
    assert (len(flag) == 32) and (len(key) == 32)
    cipher = AES.new(key, AES.MODE_ECB)

    sys.stdout.write("Welcome to AES-ECB Encryption Machine. \nPlease give us your plaintext, we'll give you its ciphertext!!!!")
    sys.stdout.write("\n=====================================\n")
    sys.stdout.flush()

    while True:
        try:
            sys.stdout.write('\nYour input: ')
            sys.stdout.flush()

            rlist, _, _ = select([sys.stdin], [], [])

            inp = ''
            if rlist:
                user_input = sys.stdin.readline().rstrip('\n')

            plaintext = user_input + flag
            padding_length = padding(plaintext)
            plaintext = plaintext.ljust(padding_length, padding_character)
            
            sys.stdout.write('The ciphertext:\n{}\n\n'.format((cipher.encrypt(plaintext)).encode('hex')))
        except KeyboardInterrupt:
            exit(0)   

if __name__ == '__main__':
    main()
```

## Approach

Netcat:

![CTF](../post-img/ctf-aes-ecb/1.png)

From the description, we know that the encryption used here is AES - Advanced Encryption Standard, ECB mode. (Without description, we can determine the encryption type by the module imported in server.py)

AES - Advanced Encryption Standard: [Wikipedia Advanced Encryption Standard](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard)

Block cipher mode of operation: [Wikipedia Block cipher mode of operation](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation)

By looking at the script, we can see that the flag is 32 bytes long, as is the key. The encryption method works like this: Because it's ECB, the plaintext will be split into 16-byte blocks, with each block using the AES encryption function with the key provided in the file.

![CTF](../post-img/ctf-aes-ecb/2.svg)

```python
plaintext = user_input + flag
padding_length = padding(plaintext)
plaintext = plaintext.ljust(padding_length, padding_character)
```

Before the encryption, the script requests an input to be encrypted, the input is concatenated with the flag, and padding is used to complete the last blocks, for example, assuming the padding character is `_`, the given input is `B`, and the flag is `MY-CTF{My_name_is_Bui_Quang_Bao}`. The plaintext before encryption will look like this:

```python
Plaintext: BMY-CTF{My_name_is_Bui_Quang_Bao}_______________________________

Block 1: BMY-CTF{My_name_
Block 2: is_Bui_Quang_Bao
Block 3: }_______________
Block 4: ________________
```

What happen if we give the input `BBBBBBBBBBBBBBB`?

```python
Plaintext: BBBBBBBBBBBBBBBMY-CTF{My_name_is_Bui_Quang_Bao}_________________

Block 1: BBBBBBBBBBBBBBBM
Block 2: Y-CTF{My_name_is
Block 3: _Bui_Quang_Bao}_
Block 4: ________________
```

The lack of diffusion is the Achilles' heel of this AES-ECB encryption. ECB does not hide data patterns well since it encrypts identical plaintext blocks into similar ciphertext blocks.

So, the idea to exploit this weakness is brute force attack, every single byte of the flag.

With the input is `B` :

```python
Block 1: B???????????????
Block 2: ????????????????
Block 3: ?_______________ --> c03
Block 4: ________________
```

With the input is `x + pad_char * 15` (we are assuming that `pad_char` is `_`, `x` is one character in ASCII)

```python
Block 1: x_______________ --> c1
Block 2: ________________
Block 3: ________________
Block 4: ________________
```

Have you realized anything yet?

If we brute force attack for the character `x`, we will know the last character of the flag when the block `c1` is equal to the block `c03`!

Continue with `BB`, we will have the last 2 character of the flag:

```python
Block 1: BB??????????????
Block 2: ????????????????
Block 3: ?}______________ --> c03
Block 4: ________________
```

```python
Block 1: x}______________ --> c1
Block 2: ________________
Block 3: ________________
Block 4: ________________
```

Continue with `BBB`, we will have the last 3 character of the flag:

```python
Block 1: BBB?????????????
Block 2: ????????????????
Block 3: ??!}____________ --> c03
Block 4: ________________
```

```python
Block 1: x?!}____________ --> c1
Block 2: ________________
Block 3: ________________
Block 4: ________________
```

Now we just need to write a script to do the attack for us.

## Solution

```python
from pwn import *
import os
def cls(): return os.system('cls')

conn = remote("61.28.237.24", 30300)
conn.recvuntil(":")

pad_char = "D"
flag = ""

for i in range(1, 33):
    send_txt = "B" * i
    conn.sendline(send_txt)
    conn.recvline()
    code = conn.recvline()
    c01, c02, c03, c04 = code[:32], code[32:64], code[64:96], code[96:128]
    conn.recvuntil(":")
    for j in range(32, 127):
        char = chr(j)
        send_txt = char + flag + pad_char * 16
        conn.sendline(send_txt)
        conn.recvline()
        code = conn.recvline()
        c1, c2, c3, c4 = code[:32], code[32:64], code[64:96], code[96:128]
        conn.recvuntil(":")
        if (c1 == c03):
            flag = char + flag
            cls()
            print(
                "Connection: 61.28.237.24 - Port: 30300 - buiquangbao\nCracking AES-ECB Encryption...\n")
            print(">> ", flag)
            print("\nBlock 1:", c1, "\nBlock 2:", c2,
                  "\nBlock 3:", c3, "\nBlock 4:", c4)
            break

cls()
print("Flag cracked!\n\n>> ", flag, "\n")
```

Terminal and result:

![CTF](../post-img/ctf-aes-ecb/3.gif)

Case closed!
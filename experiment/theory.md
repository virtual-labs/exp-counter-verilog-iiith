### Verilog

As we have seen in introduction what verilog is all about, why verilog was developed, what is its need, what is the advantages using verilog, now we are ready to make some digital designs using verilog. We will learn three basic designs which are listed below in this experiment.  

1. T-Flip Flop  
2. Counter  
3. T-Flip Flop usind D-Flip Flop  

**T-FLIP FLOP**

The verilog code for T-flip flop is given below with explaination of different parts of code.  

<img src="images/t.jpg">  

Some of the following points which are not explained in detail in the above image are explained here below  

**MODULE**  

Verilog provides the concept of a module. A module is the basic building block in verilog. A module can be an element or a collection of lower-level design blocks. Typically, elements are grouped int mmodules to provide common functonality that is used at many places in the design. A module provides the necessary functionality to the higher-level block through its port interface (inputs and outputs), but hides the internal implementation. This allows the designer to modify module internals without affecting the rest of the design.  


**MODULE NAME**  

Module name can be anything accordig to our own choice. It is just another name consisting of characters and numbers. It is used when module is instantiated in another module. We instantiate by calling the module using the name given to it. Instiating the module is explained in the third example code given below.  


**ARGUMENTS IN MODULE**  

Just as in C function we give some arguments to function, here also we give arguments which consists of all the input and output ports which that module is using to take input fromthe user and give output to the user.  

**INPUT-OUTPUT PORTS - I/O PORTS**  

Input and Output ports are the ports through user can give inputs and take outputs. Whatever arguments we have given to module should be mentioned inside the module that which arguments correspond to input ports and which correspond to output ports as done in the image above.   

**DATA TYPES**

Here in this example we have used *reg* data type and in upcoming examples we will be using some more as *wire* and all. So to know about various kinds of operators in verilog just read the following chart carefully.  

<img src="images/data.jpg">

**ALWAYS BLOCK**

All statements inside an always statement consists of always block. The always statement starts at time 0 and executes the always statement in the looping fashion continuously according to the condition given in the bracket of always block after "@".  

**POSEDGE CLOCK**  

Posedge clock is written in the bracket of always statement means that the statements inside the always block will be executed only at the positive edge of the clock, that is, only when clock goes from low level to high level or generally 0V level to 5V level.  


**NEGEDGE RESET**  

Reset is also a pulse here when the negative edge of reset is encountered then asynchronously that means irrespective of the clock the output will be set to zero. Negative edge means reset will go from high level to low level.  

OPERATORS AND OTHER LEXICAL CONVENTIONS  

~ and ! opertars are used in the above code. Apart from these there are various operators, numbers and identifiers provided by verilog. All of these are shown in figure below  

<img src="images/lex.jpg">  


**LOOPS**  

Verilog also supports *for*, *if-else*, *while* loops as in C. In the above example if and else are used. The syntax for all loops is same as C just the difference is that they have a *begin* and *end* to denote the statements inside a loop.  

**BLOCKING AND NON-BLOCKING ASSIGNMENT**  

Blocking statement is specified by = operator and Non-Blocking statement is specified by <= operator. Suppose there are two statements  
*a = b*
*b = a*
Then both a and b will get values equal to b but if in place of equal to sign we place less than equal to operator, that is, if we use non blocking assignment then bith statement will be executed at same time, that is a will get the value of b and b will get the value of a at the same time so the values will be swapped. Hence statements with non-blocking assignment is started executing simultaneously.  

**COUNTER**

The verilog code for counter is given below with explaination of different parts of code.  

<img sr="images/c.jpg">  

In tha above code, everything is pretty much explained in the box on right hand side given above. Just the *assign* statement is new so it is explained here. When we use assign before a statement like in above example Q=tmp, it means Q will be updated as soon as the value in tmp register changes whether or not it comes in the execution sequence or not. This is the speciality of assign keyword.  

**T_FLIP FLOP USING D-FLIP FLOP**  

The verilog code for the T-flip flop using D-flip flop is given below with explaination of different parts of code.  

<img src="images/td.jpg">  


In the above example instantiation of module is used which is explained in detail here.  

**INSTANTIATION OF MODULE**  

We does not use module inside a module, thats why we instantiate it that means we call it as we call some function. One important thing to not while instantiating is that we call module with same name as we have given it while coding for it separately but when we are using it in other module we give it some other name and if it is instantiated more than one time then we have to give different name each time. Here in above example we have called the module with same name D_FF but given a new name dff0.  

**NOT - VERILOG PROVIDED PRIMITIVE**  

There are many primitives already defined in verilog which provides some particular functionalities. not is one of them. In not first argument is output value and second is input value. So in above example d is output and q is input.  

Verilog also provides us with some compiler directives and system tasks. These are not used in above programs but if you want to know about these functionalities, read the following flowcharts.  

<img src="images/task.jpg">  

<img src="images/direc.jpg">  

### Counter
Usually, counter circuits are digital in nature, and count in natural binary. Many types of counter circuits are available as digital building blocks, for example a number of chips in the 4000 series implement different counters. Occasionally there are advantages to using a counting sequence other than the natural binary sequence such as the binary coded decimal counter, a linear feedback shift register counter, or a Gray-code counter. Counters are useful for digital clocks and timers, and in oven timers, VCR clocks, etc.
The counters will be assembled using two 74LS73 dual J-K flip-flop chips and a 74LS02 quad NOR chip. Note that each flip-flop has an asynchronous Reset (R’) input besides the synchronous J-K inputs. This enables one to reset any of the flip-flops by making R’ = 0 irrespective of the status of the clock (CK) input. The asynchronous R’ input will be utilised in this experiment to initialise the flip-flop outputs as well as to obtain counters having cycle length N less than 16.

**Pin connections:**

<img src="images/counters.png">

**Basic Counter (Binary Ripple Counter)** 

1.. Make J = K = 1 for all the flip-flops, thereby converting the J-K flip-flops to T flip-flops. Connect all R’ inputs together to an Input Switch, and the outputs Q0,Q1,Q2,Q3 to four LED Displays.  
2. Set up an Up-counting Binary Ripple Counter by making clock connections as follows: CK0 = Manual Clock (CLK-M), CK1 = Q0, CK2 = Q1, CK3 = Q2.  
3. Using the Input Switch connected to the common R’ input, initialise the counter to the start  
4. Apply Manual Clock pulses and tabulate the state sequence for the entire cycle.  
5. Now change the clock input connections to CK1 = Q0’, CK2 = Q1’, CK3 = Q2’, to obtain a Down-counting Binary Ripple counter.   

**Asynchronous (ripple) counter:**

An asynchronous (ripple) counter is a single JK-type flip-flop, with its J (data) input fed from its own inverted output. This circuit can store one bit, and hence can count from zero to one before it overflows (starts over from 0). This counter will increment once for every clock cycle and takes two clock cycles to overflow, so every cycle it will alternate between a transition from 0 to 1 and a transition from 1 to 0. Notice that this creates a new clock with a 50% duty cycle at exactly half the frequency of the input clock. If this output is then used as the clock signal for a similarly arranged D flip-flop (remember to invert the output to the input), you will get another 1 bit counter that counts half as fast. Putting them together yields a two-bit counter:   


|Cycle|	Q1| Q2|	(Q1:Q0)dec|
|-----|---|---|-----------|
|0    |	0 | 0 | 	0 |
|1    |	0 | 1 | 	1 |
|2    |	1 | 0 | 	2 |
|3    |	1 | 1 | 	3 |
|4    |	0 | 0 | 	0 |


**Synchronous counter:**	       

 A simple way of implementing the logic for each bit of an ascending counter is for each bit to toggle when all of the less significant bits are at a logic high state. For example, bit 1 toggles when bit 0 is logic high; bit 2 toggles when both bit 1 and bit 0 are logic high; bit 3 toggles when bit 2, bit 1 and bit 0 are all high; and so on. Synchronous counters can also be implemented with hardware finite state machines, which are more complex but allow for smoother, more stable transitions. Hardware-based counters are of this type.  

**Decade counter:**  

A decade counter is one that counts in decimal digits, rather than binary. A decade counter may have each digit binary encoded (that is, it may count in binary-coded decimal, as the 7490 integrated circuit did) or other binary encodings (such as the bi-quinary encoding of the 7490 integrated circuit). Alternatively, it may have a "fully decoded" or one-hot output code in which each output goes high in turn (the 4017 is such a circuit). The latter type of circuit finds applications in multiplexers and demultiplexers, or wherever a scanning type of behavior is useful. Similar counters with different numbers of outputs are also common. The decade counter is also known as a mod-counter when it counts to ten (0, 1, 2, 3, 4, 5, 6, 7, 8, 9). A Mod Counter that counts to 64 stops at 63 because 0 counts as a valid digit.  
A decade counter has the count sequence 0 → 1 → 2 →.....→ 8 → 9 → 0.., which can be achieved by making R’ = (Q3 •Q1)’ for all the flip-flops in a 4-bit binary counter. This forces the counter to go to the state 0000 as soon as the counter makes the transition from the state 1001 representing count 9 to the next state 1010 according to the normal up counting sequence.  

**Decade synchronous counter**

The logic for the J-K inputs required for a Decade Synchronous Counter is as follows:  
J0 = K0 = 1; J1 = Q0•Q3’, K1 = Q0; J2 = K2 = Q0•Q1; J3 = Q0•Q1•Q2, K3 = Q0.  

**Ring Counter**

The main difference between a ring counter and a shift register is that in a ring counter, the output of the last flip-flop is connected to the input of the first flip-flop, but in a shift resister, it is taken as output. ORI is coupled to Preset (PR) in FF-1 and Clear (CLR) in FF-2 and FF-3 for a 3 bit ring counter. As a result, output Q = 1 is generated at FF-1, whereas output Q = 0 is generated by the rest of the flip-flops. Pre-set 1 is the output Q = 1 at FF-1 that is utilised to create the ring counter. Preset 1 is created by setting ORI to zero and setting the time Clock (CLK) to don't care. After that, the ORI was set to high and a low clock pulse signal was applied as the clock (CLK) was triggered on the negative edge. Following that, the preset 1 is changed to the next flip-flop with each clock pulse, forming a Ring (hence the name Ring Counter) as illustrated in the table below:


|Cycle|	Q1| Q2| Q3|
|-----|---|---|---|
|0    |	1 | 0 | 0 |
|1    |	0 | 1 | 0 |
|2    |	0 | 0 | 1 |
|3    |	1 | 0 | 0 |
|4    |	0 | 1 | 0 |
|5    |	0 | 0 | 1 |
|6    |	1 | 0 | 0 |

**Multipurpose 4-bit Synchronous Counter**  

CD4029 is a multipurpose 4-bit counter capable of operating in all the four combinations of Binary/BCD and Up/Down modes, depending on the values of the control inputs B/D’ and U/D’.  
In addition, the 4-bit output Q3Q2Q1Q0 of the counter can be preset to any value by applying the desired bits to the direct inputs D3D2D1D0 and making the Set Enable control SEN = 1.  

<img  src="images/CD4029codes.png">
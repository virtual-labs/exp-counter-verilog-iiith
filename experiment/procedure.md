> **Important Note:** This simulation is designed for desktop view only. For the best experience, please use a desktop monitor with a minimum resolution of 1280x720 pixels. The simulation may not function properly on smaller screens like mobile devices or tablets.

### 1. Understanding the Simulation

This simulation helps you learn about Counter implementation in Verilog:

- **Counter Design:** A sequential circuit that counts in a particular sequence on each clock cycle.
- The counter increments by 1 at each clock edge (posedge or negedge CLK).
- It demonstrates sequential logic behavior using clocked always blocks.

### 2. Getting Started

1. Enter your module name and testbench name in the respective fields:
   - Module names must follow [Verilog naming conventions](https://www.chipverify.com/verilog/verilog-syntax).
   - Only letters, numbers, and underscores are allowed (no hyphens or special characters).
   - Testbench name must end with '_tb'.

### 3. Building the Verilog Module

1. In the first column, arrange the code blocks in the correct order by dragging and dropping them:
   - The code block that defines inputs, outputs, and module name should be placed first
   - Followed by the code block that defines the module functionality
   - Finally, the end of module block

2. Select the appropriate signals:
   - Input: CLK (clock input)
   - Output: Out (counter output)

3. Define the functionality using the always block:
   - Select the condition of always block as 'posedge CLK' or 'negedge CLK' accordingly
   - The counter_up must be incremented by 1 at the chosen clock edge
   - Fill in the LHS and RHS of the assignment keeping in mind what value should be assigned at the clock edge
   - The assignment operator must be '<=' (not '=') because for sequential storage behavior, we always need to select the non-blocking assignment operator (<=)
   - Use the assign statement to assign the value of counter_up to the final output "Out"

### 4. Creating the Testbench

1. In the second column, arrange the testbench code blocks in the correct order:
   - Testbench name definition
   - Signal declarations (reg for inputs, wire for outputs)
   - Module instantiation
   - Clock wave and input definitions
   - End of module

2. Define the testbench signals:
   - `reg CLK; wire Out`

3. Connect the ports correctly in the module instantiation:
   - Enter the name of the verilog module you have earlier coded
   - Select the arguments in the same order as you have chosen in the Counter module
   - Ensure proper mapping of CLK input and Out output

### 5. Validation and Observation

1. Click the "Validate" button to check your code.
2. The observation column will show:
   - Error messages in red if there are mistakes. Refer to the [Troubleshooting](#6-troubleshooting) section below for dealing with the Error messages.
   - A truth table for the CLK wave you have selected if the code is correct.
3. If you need to start over, click the "Reset" button to shuffle the code blocks.

#### Verilog Syntax Reference

- For detailed Verilog syntax rules, refer to the [Verilog Syntax Guide](https://www.chipverify.com/verilog/verilog-syntax).
- For module and testbench examples, visit [ASIC World Verilog Tutorial](https://www.asic-world.com/verilog/veritut.html).

### 6. Troubleshooting

If you see error messages, carefully check:

- Module and testbench names follow the naming rules.
- Code blocks are in the correct order.
- CLK is properly declared as input and Out as output.
- The always block condition matches your choice (posedge or negedge CLK).
- Non-blocking assignment (<=) is used for sequential logic.
- The assign statement correctly connects counter_up to Out.

Additional tips:

- Use the Reset button to start fresh if needed.
- Observe the fluctuations in input wave and corresponding expected and observed output wave.
- Verify the counter increments correctly on each clock edge.

#### Important Reminders

- Verilog is case-sensitive.
- All signals must be properly declared before use.
- Testbench signals must match the module ports.
- Code blocks must be in the correct order for the simulation to work.
- Use non-blocking assignment (<=) for sequential logic in always blocks.
- The counter behavior depends on the chosen clock edge (posedge or negedge).

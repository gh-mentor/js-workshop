# Manufacturing Simulation Workshop using GitHub Copilot

In this workshop, you will create a process simulation model for a manufacturing plant with GitHub Copilot as your AI guide and assistant. The model should be able to simulate the assembly and quality control processes of a manufacturing plant that produces a new brand of AI-enabled Micro Widgets (MWs). 

## Objective

The overall objective is to create an extensible simulation model that can be used to analyze performance of a manufacturing process, identify bottlenecks, and optimize resource utilization. The simulation should be able to generate summary reports and metrics for both the assembly and quality control processes. The simulation model should be designed to be flexible and extensible, allowing for future enhancements and modifications. The model should also be able to handle different scenarios and configurations, such as varying the number of assembly lines, QC teams, and inspection rates.
A complete solution would be able to run daily or weekly simulations.

## Key Details

### Assembly Process:
There are 5 assembly lines operating in parallel Monday – Thursday, 6 hours per workday, starting at 7 AM.  The number of Assembly Line Workers is not relevant to the simulation process. There is 1 Assembly Line Manager responsible for delivering assembled products to the QC Team and generating summary reports. 
-	All lines start at the same time at the beginning of the workday and turn off at the end of the workday.
-	Each line can assemble a maximum of 100 MWs per hour
-	On average each line assembles 80 MWs per hour with a standard deviation of 10 MWs. 
-	Occasionally, though infrequently, a MW is damaged during assembly, with a likelihood of 0.5%, standard deviation 0.2%. 
o		The damaged product is shelved, and a log entry is recorded with the date / time, line number, and description (default “damaged in production”)
-	At the end of each hour - and at the end of the workday – the Assembly Line Manager delivers the MWs in batch to Quality Control.
o		A log entry contains the date / time, count of MWs, and line number
-	There is a 10% likelihood that a line failure will occur during the workday. The downtime is 60 minutes on average, with a standard deviation of 15 minutes.
o		A log entry with the date / time, line number, and outage duration is recorded
-	At the end of the workday the Assembly Line Manager generates a summary report containing the number of assembled MWs per line, the total number delivered to QC, and any line failure details.

### Quality Control Process:
There are 5 teams of QC Engineers, each team has 3 members working in parallel Monday – Friday, 8 hours per workday, starting at 8 am, with a 45-minute lunch break a 12:00 PM. There is 1 Quality Control Manager who is responsible for delegating work in round-robin fashion to each team and generating reports at the end of the workday.
-	Each QC Engineer can inspect and log up to 12 MWs per hour, the average being 8 with a standard deviation of 2.
-	On average 2.5 % of MWs are logged as defective (failed inspection) with a standard deviation of 1%.
-	At the end of the workday the manager generates a summary report containing the total count of acceptable MWs, total defects, and backlog count.
o		The backlog is the number of MWs that are still in the queue.

## Instructions and Suggestions
-	Design, implement, and test a C++ 20 (or greater) simulation model for a manufacturing process using GitHub Copilot as an AI guide and assistant.
-	Consider using GitHub code instructions to influence the suggestions Copilot generates.
-	Use Doctest or GoogleTest for creating unit tests.
-	Use multithreading to simulate the parallel processes of assembly and quality control.
-	Implement a queue to manage the flow of MWs from assembly to quality control.
-	Use a logging library (or create your own) to generate summary reports 
-	Encapsulate different components of the simulation using a class-based approach.
-	Use Doxygen comments on all operations to document the code.
-	Adhere to SOLID design principles to ensure maintainability and scalability of the code.
-	All the key details should be incorporated into the final solution
-	Be creative in the design and implementation of the simulation model.

## Deliverables Wish List

-	An application that can run daily or weekly simulations of the manufacturing process, with the following features:
    -	Assembly process simulation with line failures and downtime
    -	Quality control process simulation with inspection and defect logging
    -	Queue management for MWs between assembly and quality control
    -	Unit tests for all components of the simulation
    -	Summary reports on assembly and quality control processes (see below for metrics)

-	Assembly Process Metrics:
o		Average Downtime per Line: Track the average downtime for each assembly line over the simulation period.
o		Line Utilization Rate: Calculate the percentage of time each assembly line is operational versus idle or down.
o		Damaged Product Rate: Measure the percentage of MWs damaged during assembly for each line.
o		Hourly Production Rate: Track the number of MWs assembled per hour for each line.
o		Cumulative Production: Total MWs produced by all lines over the simulation period.
o		Line Failure Frequency: Count the number of failures per line during the simulation.

-	Quality Control Metrics:
o		Inspection Throughput: Measure the number of MWs inspected per hour by each QC team.
o		Defect Rate per Team: Track the percentage of defective MWs identified by each QC team.
o		Backlog Growth Rate: Monitor how quickly the backlog grows when inspection cannot keep up with assembly.
o		Average Inspection Time per MW: Calculate the average time taken to inspect a single MW.
o		Team Utilization Rate: Measure the percentage of time each QC team is actively inspecting MWs

-	Queue Management Metrics:
o		Average Queue Length: Track the average number of MWs waiting in the queue between assembly and QC.
o		Maximum Queue Length: Record the peak number of MWs in the queue during the simulation.
o		Queue Wait Time: Measure the average time an MW spends in the queue before inspection.

-	Overall Metrics:
o		Daily Defect Trends: Track how defect rates change over the course of a day or week.
o		System Efficiency: Calculate the ratio of MWs successfully inspected to MWs produced.
o		Resource Utilization: Measure the percentage of time assembly lines and QC teams are actively working versus idle.
o		End-of-Day Backlog Trends: Analyze how the backlog changes at the end of each day over a week-long simulation.

-	Simulation-Based Metrics What-If Analysis:
o		Simulate alternative scenarios: Use different numbers of assembly lines or QC teams to evaluate their impact on production and backlog.
o		Bottleneck Identification: Use simulation data to identify the process step (assembly, queue, or QC) with the highest average wait time or lowest throughput.
o		Optimal Staffing Levels: Calculate the optimal number of QC engineers or assembly lines required to minimize backlog and maximize throughput

## Implementation 

The solution should use JavaScript or TypeScript for the implementation of the simulation model. The simulation should be designed to run in a multithreaded environment, with the assembly and quality control processes running in parallel. 

Consider using Node.js and Express to simulate the server-side environment. The simulation should also use a queue to manage the flow of MWs from assembly to quality control. The simulation should be designed to be extensible and maintainable, with a focus on SOLID design principles. The simulation should also use a logging library (or create your own) to generate summary reports and metrics for both the assembly and quality control processes.

If you were to include ReactJS or Angular as a possible choice, their role would primarily be on the frontend to create an interactive user interface for monitoring and controlling the simulation. The frontend could display real-time metrics, logs, and reports generated by the simulation. It could also allow users to configure simulation parameters, such as the number of assembly lines, QC teams, and inspection rates. The frontend would communicate with the backend simulation model via RESTful APIs or WebSockets to receive updates and send configuration changes.
